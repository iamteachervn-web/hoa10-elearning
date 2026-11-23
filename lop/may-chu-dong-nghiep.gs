/* =========================================================
   MÁY CHỦ — WEB HOÁ HỌC 10 · BẢN DÙNG CHUNG CHO ĐỒNG NGHIỆP
   (biện pháp «câu chẩn đoán hai bậc» — tác giả: cô Thơi, THPT Lạng Giang số 1)

   CÀI MỘT LẦN (khoảng 5 phút):
   1. Tạo MỘT Google Sheet trống (tên tuỳ ý, VD «Web Hoá 10 – lớp của tôi»).
   2. Tiện ích mở rộng → Apps Script. Xoá hết chữ có sẵn, dán TOÀN BỘ tệp này, bấm 💾 Lưu.
   3. Triển khai → Tùy chọn triển khai mới → bánh răng ⚙ chọn «Ứng dụng web»
      · Thực thi với tư cách: Tôi · Người có quyền truy cập: Bất kỳ ai → Triển khai
      (Google hỏi quyền: chọn tài khoản → Nâng cao → Đi tới … (không an toàn) → Cho phép.
       Đây là cảnh báo chung cho mọi mã tự viết; mã chỉ đọc – ghi Sheet này.)
   4. Chép «URL ứng dụng web» (…/exec), dán vào trang «Bắt đầu» của web, đặt mật khẩu, tên lớp, sĩ số.

   Dữ liệu học sinh nằm trong Sheet này của thầy cô (chỉ mã lớp – số thứ tự, không có họ tên).
   Em nào quên mật mã: xoá ô cột B dòng của em đó ở trang HocSinh, em vào lại và đặt mật mã mới.
   Quên mật khẩu trang thầy cô: Apps Script → Cài đặt dự án (bánh răng) → Thuộc tính tập lệnh
   → xoá MAT_KHAU_CO, rồi vào trang «Bắt đầu» đặt mật khẩu mới.
   ========================================================= */
/* Cài đặt của thầy cô (tên, trường, lớp – sĩ số, nhiệm vụ tuần) lưu trong Thuộc tính tập lệnh CAU_HINH */
function cauHinh() {
  let c = {}; try { c = JSON.parse(PropertiesService.getScriptProperties().getProperty('CAU_HINH') || '{}') || {}; } catch (e) {}
  c.siSo = c.siSo || {}; c.nv = c.nv || { tuan: '' }; c.gt = c.gt || {};
  return c;
}
function luuCauHinh(c) { PropertiesService.getScriptProperties().setProperty('CAU_HINH', JSON.stringify(c)); CacheService.getScriptCache().remove('ch'); }
const SI_SO = cauHinh().siSo;
const STT_LON_NHAT = 60;
const MUI_GIO = 'Asia/Ho_Chi_Minh';
const SO_TUAN_BIEU_DO = 8;

const TRANG = {
  LuotTruyCap: ['Ngày', 'Lớp (trống = khách)', 'Lượt'],
  HocSinh: ['Mã HS', 'Mật mã (đã mã hoá)', 'Vào lần đầu', 'Lần cuối'],
  HoatDong: ['Lúc', 'Ngày', 'Tuần (từ thứ Hai)', 'Mã HS', 'Lớp', 'Học liệu', 'Việc', 'Số giây'],
  KetQua: ['Lúc', 'Mã HS', 'Lớp', 'Bài', 'Lần', 'Điểm %', 'Biết %', 'Hiểu %', 'Vận dụng %', 'Đúng/sai từng câu', 'Hai bậc (phương án gốc + c chắc/d đoán)', 'Vì sao em chọn'],
  DanhGia: ['Lúc', 'Mã HS', 'Lớp', 'Học liệu', 'Mức (3 dễ hiểu · 2 tạm · 1 khó hiểu)', 'Chỗ em chưa hiểu'],
};

function doGet() { return ContentService.createTextOutput('Máy chủ Web Hoá học 10 (bản đồng nghiệp) đang chạy.'); }
function doPost(e) {
  let kq;
  try { kq = xuLy(JSON.parse(e.postData.contents)); } catch (loi) { kq = { loi: String(loi.message || loi) }; }
  return ContentService.createTextOutput(JSON.stringify(kq)).setMimeType(ContentService.MimeType.JSON);
}

/* ---------- tiện ích ---------- */
function trang(ten) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(ten);
  if (!sh) {
    sh = ss.insertSheet(ten);
    const td = TRANG[ten];
    sh.getRange(1, 1, 1, td.length).setValues([td]).setFontWeight('bold');
    sh.setFrozenRows(1);
    if (ten !== 'LuotTruyCap') sh.getRange('A:Z').setNumberFormat('@'); // giữ nguyên chữ, Sheet không tự đổi
  }
  return sh;
}
function bang(ten) {
  const sh = trang(ten), n = sh.getLastRow() - 1, c = TRANG[ten].length;
  return n > 0 ? sh.getRange(2, 1, n, c).getValues() : [];
}
function ngay(d) { return Utilities.formatDate(d || new Date(), MUI_GIO, 'yyyy-MM-dd'); }
function luc(d) { return Utilities.formatDate(d || new Date(), MUI_GIO, 'dd/MM/yyyy HH:mm'); }
function tuanCua(d) {               // ngày thứ Hai của tuần, dạng yyyy-MM-dd
  const s = ngay(d).split('-'), t = new Date(Date.UTC(+s[0], +s[1] - 1, +s[2]));
  t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 6) % 7);
  return t.toISOString().slice(0, 10);
}
function bamPin(ma, pin) {
  const b = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, ma + '|' + pin + '|webhoa10');
  return 'h' + b.map(function (x) { return ((x + 256) % 256).toString(16).padStart(2, '0'); }).join('').slice(0, 24);
}
function so(x, min, max) { x = Math.round(+x) || 0; return Math.max(min, Math.min(max, x)); }
function chu(x, dai) { return String(x == null ? '' : x).replace(/[\r\n\t]/g, ' ').slice(0, dai || 80); }
function lopCuaMa(ma) {
  const m = /^([0-9]{1,2}[A-Z0-9]{1,5})-(\d{2})$/.exec(String(ma || ''));
  if (!m || !SI_SO[m[1]] || +m[2] < 1 || +m[2] > STT_LON_NHAT) throw new Error('Mã chưa đúng (lớp – số thứ tự) hoặc lớp chưa có trong cài đặt của thầy cô.');
  return m[1];
}
function kiemHS(d, choPhepMoi) {          // trả về lớp nếu đúng mã + mật mã
  const lop = lopCuaMa(d.ma);
  if (!/^\d{4}$/.test(String(d.pin || ''))) throw new Error('Mật mã phải gồm đúng 4 chữ số.');
  const sh = trang('HocSinh'), ds = bang('HocSinh'), bam = bamPin(d.ma, d.pin);
  for (let i = 0; i < ds.length; i++) {
    if (String(ds[i][0]) !== d.ma) continue;
    if (!ds[i][1]) { sh.getRange(i + 2, 2, 1, 3).setValues([[bam, String(ds[i][2] || luc()), luc()]]); return lop; }
    if (String(ds[i][1]) !== bam) throw new Error('Mã này đã có bạn dùng với mật mã khác. Nếu đúng là của em mà quên mật mã thì báo cô.');
    if (choPhepMoi) sh.getRange(i + 2, 4).setValue(luc());
    return lop;
  }
  if (!choPhepMoi) throw new Error('Em chưa vào lớp trên trang này. Vào Góc lớp để đặt mật mã.');
  sh.appendRow([d.ma, bam, luc(), luc()]);
  return lop;
}

/* ---------- xử lý yêu cầu ---------- */
function xuLy(d) {
  const viec = String(d.viec || '');
  if (viec === 'lop') return thongKeLop(String(d.lop || ''));
  if (viec === 'so') return soLuot();
  if (viec === 'ch') return chCongKhai();
  const khoa = LockService.getScriptLock(); khoa.waitLock(25000);
  try {
    if (viec === 'dem') return demLuot(String(d.lop || ''));
    if (viec === 'vao') { kiemHS(d, true); return { ok: true }; }
    if (viec === 'hd') {
      const lop = kiemHS(d, false), b = new Date();
      trang('HoatDong').appendRow([luc(b), ngay(b), tuanCua(b), d.ma, lop, chu(d.hl, 60), d.loai === 'xong' ? 'xong' : 'mo', String(so(d.giay, 0, 4 * 3600))]);
      return { ok: true };
    }
    if (viec === 'nop') {
      const lop = kiemHS(d, false), bai = chu(d.bai, 30);
      if (!/^[a-z0-9-]+$/.test(bai)) throw new Error('Bài không hợp lệ.');
      const lan = bang('KetQua').filter(function (r) { return String(r[1]) === d.ma && String(r[3]) === bai; }).length + 1;
      const pt = function (x) { return x === '' || x == null ? '' : String(so(x, 0, 100)); };
      const shKQ = trang('KetQua');
      if (!shKQ.getRange(1, 11).getValue()) shKQ.getRange(1, 11, 1, 2).setValues([TRANG.KetQua.slice(10)]).setFontWeight('bold');   // sheet cũ: thêm tiêu đề 2 cột mới
      shKQ.appendRow([luc(), d.ma, lop, bai, String(lan), pt(d.diem), pt(d.b), pt(d.h), pt(d.v), chu(d.ct, 120).replace(/[^01-]/g, ''),
        chu(d.hb, 120).replace(/[^0-3cd-]/g, ''), chu(d.vs, 1500)]);
      return { ok: true, lan: lan };
    }
    if (viec === 'dg') {                 // đánh giá học liệu; khách (chưa vào lớp) vẫn gửi được
      let ma = 'khach', lop = 'Khách';
      if (d.ma) { lop = kiemHS(d, false); ma = d.ma; }
      const hl = chu(d.hl, 60), muc = so(d.muc, 1, 3);
      if (!/^[a-z0-9-]+$/.test(hl)) throw new Error('Học liệu không hợp lệ.');
      trang('DanhGia').appendRow([luc(), ma, lop, hl, String(muc), chu(d.ghi, 150)]);
      return { ok: true };
    }
    if (viec === 'toi') { kiemHS(d, false); return cuaToi(d.ma); }
    if (viec === 'gv') return trangCo(String(d.mk || ''));
    if (viec === 'caidat') return datCaiDat(d);
    if (viec === 'giao') return giaoBai(d);
    throw new Error('Yêu cầu không hợp lệ.');
  } finally { khoa.releaseLock(); }
}

/* Đếm lượt vào trang chủ: mỗi ngày 1 dòng */
function demLuot(lop) {
  const sh = trang('LuotTruyCap'), hom = ngay(), n = sh.getLastRow(), l = SI_SO[lop] ? lop : '';
  let dong = 0;
  if (n >= 2) {
    const v = sh.getRange(Math.max(2, n - 60), 1, n - Math.max(2, n - 60) + 1, 2).getDisplayValues();
    for (let k = v.length - 1; k >= 0; k--) if (v[k][0] === hom && v[k][1] === l) { dong = Math.max(2, n - 60) + k; break; }
  }
  if (!dong) { sh.appendRow([hom, l, 0]); dong = sh.getLastRow(); sh.getRange(dong, 1, 1, 2).setNumberFormat('@').setValues([[hom, l]]); }
  const o = sh.getRange(dong, 3); o.setValue((+o.getValue() || 0) + 1);
  CacheService.getScriptCache().remove('so');
  return soLuot();
}
function soLuot() {
  const c = CacheService.getScriptCache(), cu = c.get('so');
  if (cu) return JSON.parse(cu);
  const hom = ngay(), kq = { ok: true, tong: 0, homNay: 0, lop: {} };
  Object.keys(SI_SO).forEach(function (l) { kq.lop[l] = 0; });
  bang('LuotTruyCap').forEach(function (r) {
    const ng = r[0] instanceof Date ? ngay(r[0]) : String(r[0]), n = +r[2] || 0, l = String(r[1]);
    kq.tong += n; if (ng === hom) kq.homNay += n;
    if (kq.lop[l] != null) kq.lop[l] += n;
  });
  c.put('so', JSON.stringify(kq), 60);
  return kq;
}

/* Kết quả đầu tiên của mỗi HS cho mỗi bài (dùng để đo tiến bộ cho công bằng) */
function lanDau(kq) {
  const m = {};
  kq.forEach(function (r) { const k = r[1] + '|' + r[3]; if (!m[k]) m[k] = r; });
  return m;
}
function tb(a) { return a.length ? Math.round(a.reduce(function (s, x) { return s + x; }, 0) / a.length) : null; }

/* Số liệu chung của 1 lớp — chỉ số tổng hợp, không có từng em */
function thongKeLop(lop) {
  if (!SI_SO[lop]) throw new Error('Lớp không đúng.');
  const c = CacheService.getScriptCache(), cu = c.get('lop' + lop);
  if (cu) return JSON.parse(cu);
  const hd = bang('HoatDong').filter(function (r) { return String(r[4]) === lop; });
  const kq = bang('KetQua').filter(function (r) { return String(r[2]) === lop; });
  const tuanNay = tuanCua(new Date()), hs = {}, hsTuan = {}, tuan = {};
  hd.forEach(function (r) {
    const ma = String(r[3]), t = String(r[2]);
    hs[ma] = 1; if (t === tuanNay) hsTuan[ma] = 1;
    if (!tuan[t]) tuan[t] = { luot: 0, phut: 0, hs: {} };
    if (String(r[6]) === 'mo') tuan[t].luot++;
    tuan[t].phut += (+r[7] || 0) / 60; tuan[t].hs[ma] = 1;
  });
  kq.forEach(function (r) { hs[String(r[1])] = 1; });
  // 8 tuần gần nhất (kể cả tuần không ai học)
  const dsTuan = [], mon = new Date(tuanNay + 'T00:00:00Z');
  for (let i = SO_TUAN_BIEU_DO - 1; i >= 0; i--) {
    const k = new Date(mon.getTime() - i * 7 * 864e5).toISOString().slice(0, 10);
    const x = tuan[k] || { luot: 0, phut: 0, hs: {} };
    dsTuan.push({ tuan: k, luot: x.luot, phut: Math.round(x.phut), hs: Object.keys(x.hs).length });
  }
  const dau = lanDau(kq), bai = {};
  Object.keys(dau).forEach(function (k) {
    const r = dau[k], b = String(r[3]);
    if (!bai[b]) bai[b] = { diem: [], b: [], h: [], v: [] };
    if (r[5] !== '') bai[b].diem.push(+r[5]);
    if (r[6] !== '') bai[b].b.push(+r[6]); if (r[7] !== '') bai[b].h.push(+r[7]); if (r[8] !== '') bai[b].v.push(+r[8]);
  });
  const ks = {};
  Object.keys(bai).forEach(function (b) { const x = bai[b]; ks[b] = { so: x.diem.length, tb: tb(x.diem), b: tb(x.b), h: tb(x.h), v: tb(x.v) }; });
  // tiến bộ: chỉ tính những em làm cả bài đầu và bài cuối của cùng một chương
  const tienBo = {};
  ['c3', 'c4'].forEach(function (ch) {
    const d1 = [], d2 = [];
    Object.keys(hs).forEach(function (ma) {
      const a = dau[ma + '|' + ch + '-dau'], z = dau[ma + '|' + ch + '-cuoi'];
      if (a && z && a[5] !== '' && z[5] !== '') { d1.push(+a[5]); d2.push(+z[5]); }
    });
    tienBo[ch] = { n: d1.length, dau: tb(d1), cuoi: tb(d2) };
  });
  const out = { ok: true, lop: lop, siSo: SI_SO[lop], thamGia: Object.keys(hs).length, thamGiaTuan: Object.keys(hsTuan).length,
    tuan: dsTuan, ks: ks, tienBo: tienBo, capNhat: luc() };
  c.put('lop' + lop, JSON.stringify(out), 120);
  return out;
}

/* Tiến độ của chính em */
function cuaToi(ma) {
  const hd = bang('HoatDong').filter(function (r) { return String(r[3]) === ma; });
  const kq = bang('KetQua').filter(function (r) { return String(r[1]) === ma; });
  const hl = {}, tuanNay = tuanCua(new Date());
  let luot = 0, giay = 0, luotTuan = 0;
  hd.forEach(function (r) {
    giay += +r[7] || 0;
    if (String(r[6]) === 'mo') { luot++; if (String(r[2]) === tuanNay) luotTuan++; hl[String(r[5])] = String(r[0]); }
  });
  const bai = {};
  kq.forEach(function (r) {
    const b = String(r[3]);
    if (!bai[b]) bai[b] = { dau: +r[5], cao: +r[5], lan: 0, b: r[6], h: r[7], v: r[8] };
    bai[b].lan++; bai[b].cao = Math.max(bai[b].cao, +r[5]);
  });
  return { ok: true, luot: luot, luotTuan: luotTuan, phut: Math.round(giay / 60), daMo: hl, bai: bai };
}

/* Trang cô: bảng từng mã HS + tỉ lệ đúng từng câu. Mật khẩu: lần đầu gõ gì thì đó là mật khẩu. */
function trangCo(mk) {
  if (mk.length < 4) throw new Error('Mật khẩu ít nhất 4 kí tự.');
  kiemMK(mk);
  const hd = bang('HoatDong'), kq = bang('KetQua'), hsDs = bang('HocSinh'), hs = {};
  const moi = function (ma) { return hs[ma] || (hs[ma] = { ma: ma, lop: ma.slice(0, ma.lastIndexOf('-')), luot: 0, phut: 0, cuoi: '', hl: {}, bai: {} }); };
  hsDs.forEach(function (r) { if (r[0]) moi(String(r[0])).cuoi = String(r[3]); });
  hd.forEach(function (r) {
    const x = moi(String(r[3]));
    if (String(r[6]) === 'mo') { x.luot++; x.hl[String(r[5])] = 1; }
    x.phut += (+r[7] || 0) / 60; x.cuoi = String(r[0]);
  });
  const cau = {};   // bai|lop -> [số đúng từng câu], số bài
  kq.forEach(function (r) {
    const x = moi(String(r[1])), b = String(r[3]);
    if (!x.bai[b]) { x.bai[b] = { dau: +r[5], cao: +r[5], lan: 0, b: r[6], h: r[7], v: r[8], ct: String(r[9] || '') };
      if (r[10]) { x.bai[b].hb = String(r[10]); x.bai[b].luc = String(r[0]); if (r[11]) x.bai[b].vs = String(r[11]); }   // câu hai bậc (lần đầu)
      const k = b + '|' + r[2], ct = String(r[9] || '');
      if (!cau[k]) cau[k] = { n: 0, dung: [] };
      cau[k].n++; for (let i = 0; i < ct.length; i++) cau[k].dung[i] = (cau[k].dung[i] || 0) + (ct[i] === '1' ? 1 : 0);
    }
    x.bai[b].lan++; x.bai[b].cao = Math.max(x.bai[b].cao, +r[5]);
  });
  // từng học liệu: lượt mở, số em, phút học (để cô biết học liệu nào được dùng, dùng bao lâu)
  const hl = {};
  hd.forEach(function (r) {
    const k = String(r[5]); if (!hl[k]) hl[k] = { luot: 0, hs: {}, giay: 0, xong: 0 };
    if (String(r[6]) === 'mo') { hl[k].luot++; hl[k].hs[String(r[3])] = 1; }
    else { hl[k].giay += +r[7] || 0; hl[k].xong++; }
  });
  Object.keys(hl).forEach(function (k) { const x = hl[k]; x.hs = Object.keys(x.hs).length; x.phutTB = x.xong ? Math.round(x.giay / x.xong / 6) / 10 : null; delete x.giay; delete x.xong; });
  const dg = {};
  bang('DanhGia').forEach(function (r) {
    const k = String(r[3]); if (!dg[k]) dg[k] = { 1: 0, 2: 0, 3: 0, ghi: [] };
    dg[k][so(r[4], 1, 3)]++;
    if (String(r[5]).trim()) dg[k].ghi.push(chu(r[5], 150));
  });
  Object.keys(dg).forEach(function (k) { dg[k].ghi = dg[k].ghi.slice(-10); });
  const ds = Object.keys(hs).sort().map(function (k) { const x = hs[k]; x.phut = Math.round(x.phut); x.soHL = Object.keys(x.hl).length; delete x.hl; return x; });
  return { ok: true, ds: ds, cau: cau, hl: hl, dg: dg, luot: soLuot(), capNhat: luc() };
}

/* ---------- riêng bản đồng nghiệp ---------- */
function kiemMK(mk) {
  mk = String(mk || '');
  if (mk.length < 4) throw new Error('Mật khẩu ít nhất 4 kí tự.');
  const p = PropertiesService.getScriptProperties(), bam = bamPin('gv', mk), cu = p.getProperty('MAT_KHAU_CO');
  if (!cu) p.setProperty('MAT_KHAU_CO', bam);
  else if (cu !== bam) throw new Error('Sai mật khẩu.');
}
/* phần cài đặt ai cũng đọc được (để web biết lớp, sĩ số, nhiệm vụ tuần) — không có mật khẩu, không có dữ liệu HS */
function chCongKhai() {
  const c = cauHinh();
  return { ok: true, ten: c.ten || '', truong: c.truong || '', siSo: c.siSo, nv: c.nv, gt: c.gt,
    coMK: !!PropertiesService.getScriptProperties().getProperty('MAT_KHAU_CO'), phienBan: 1 };
}
/* Đặt tên, trường, lớp – sĩ số. d.lop = [{lop:'10A2', siSo:45}, …] */
function datCaiDat(d) {
  kiemMK(d.mk);
  const c = cauHinh(), siSo = {};
  (Array.isArray(d.lop) ? d.lop : []).slice(0, 12).forEach(function (x) {
    const l = String(x.lop || '').toUpperCase().replace(/\s+/g, ''), n = so(x.siSo, 1, STT_LON_NHAT - 1);
    if (!/^[0-9]{1,2}[A-Z0-9]{1,5}$/.test(l)) throw new Error('Tên lớp «' + chu(x.lop, 12) + '» chưa đúng (VD 10A2, 10C10).');
    siSo[l] = n;
  });
  if (!Object.keys(siSo).length) throw new Error('Cần ít nhất một lớp.');
  c.ten = chu(d.ten, 40) || 'thầy cô'; c.truong = chu(d.truong, 60); c.siSo = siSo;
  luuCauHinh(c);
  return chCongKhai();
}
/* Giao nhiệm vụ tuần cho một lớp. d = {mk, lop, ds:[id học liệu], tuan, chuyen:true = cất nhiệm vụ cũ vào «đã giao»} */
function giaoBai(d) {
  kiemMK(d.mk);
  const c = cauHinh(), lop = String(d.lop || '');
  if (!c.siSo[lop]) throw new Error('Lớp không có trong cài đặt.');
  const ds = (Array.isArray(d.ds) ? d.ds : []).map(function (x) { return chu(x, 60); }).filter(function (x) { return /^[a-z0-9-]+$/.test(x); }).slice(0, 60);
  if (d.chuyen) {
    const cu = (c.gt[lop] || []).concat(c.nv[lop] || []);
    c.gt[lop] = cu.filter(function (x, k) { return cu.indexOf(x) === k; });
  }
  c.nv[lop] = ds;
  if (d.tuan != null) c.nv.tuan = chu(d.tuan, 120);
  luuCauHinh(c);
  return chCongKhai();
}
