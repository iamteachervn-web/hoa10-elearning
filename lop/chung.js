/* WEB HOÁ HỌC 10 — hàm dùng chung (cần cai-dat.js và du-lieu.js nạp trước) */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// công thức hoá học: H2SO4 → H<sub>2</sub>SO<sub>4</sub>
const hoa = s => esc(s).replace(/([A-Za-z\)\]])(\d+)/g, '$1<sub>$2</sub>');
const kho = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} },
};
const soVN = n => (n == null ? '—' : Number(n).toLocaleString('vi-VN'));
const moi = n => { if (!n) return false; const d = (Date.now() - new Date(n + 'T00:00:00')) / 864e5; return d >= 0 && d <= 7; };
const ngayVN = n => n ? n.split('-').reverse().slice(0, 2).join('/') : '';

// để bộ ghi trong hoc-lieu/ biết địa chỉ máy chủ (học liệu không nạp cai-dat.js vì trùng tên biến)
kho.set('hoa10_may_chu', MAY_CHU || '');

/* học sinh đang vào web trên máy này: {ma:'10A2-07', pin:'1234'} */
/* Bài «sau tiết» của câu hai bậc chỉ mở khi cô đã giao cho lớp của em (NHIEM_VU / GIAO_TRUOC) — tránh làm trước giờ học. */
function moChoEm(ksMa) {
  const k = typeof KHAO_SAT === 'object' ? KHAO_SAT[ksMa] : null;
  if (!k || !k.mo) return false;
  if (tuDo(ksMa)) return true;   // chương HS tự do làm (CHUONG_TU_DO trong cai-dat.js)
  if (!(k.haiBac && k.loai === 'sau')) return true;
  const gioMo = moLucCua(ksMa); if (gioMo && Date.now() >= Date.parse(gioMo)) return true;   // hẹn giờ mở khoá
  const hs = hsLay(); if (!hs) return false;
  const lop = lopCua(hs.ma), giao = [].concat(typeof GIAO_TRUOC === 'object' ? GIAO_TRUOC[lop] || [] : [], typeof NHIEM_VU === 'object' ? NHIEM_VU[lop] || [] : []);
  return HOC_LIEU.some(h => h.ks === ksMa && giao.includes(h.id));
}
const tuDo = ksMa => { const k = typeof KHAO_SAT === 'object' ? KHAO_SAT[ksMa] : null; return !!k && typeof CHUONG_TU_DO === 'object' && CHUONG_TU_DO.includes(k.chuong); };
/* «mở lúc 11:00 ngày 25/11» nếu bài có hẹn giờ mở khoá và chưa tới giờ, không thì '' */
/* giờ hẹn mở khoá của bài cho lớp của em đang vào (MO_LUC: một giờ chung hoặc { lớp: giờ }) */
function moLucCua(ksMa) {
  const m = typeof MO_LUC === 'object' ? MO_LUC[ksMa] : null;
  if (!m) return '';
  if (typeof m === 'string') return m;
  const hs = hsLay(); return hs ? m[lopCua(hs.ma)] || '' : '';
}
function moLucChu(ksMa) {
  const g = moLucCua(ksMa); if (!g) return '';
  const t = Date.parse(g); if (isNaN(t) || Date.now() >= t) return '';
  const d = new Date(t), h = n => String(n).padStart(2, '0');
  return `mở lúc ${h(d.getHours())}:${h(d.getMinutes())} ngày ${h(d.getDate())}/${h(d.getMonth() + 1)}`;
}
/* lớp của một mã HS: «10A2-07» → «10A2», «10A10-07» → «10A10» */
const lopCua = ma => { const s = String(ma || ''), i = s.lastIndexOf('-'); return i > 0 ? s.slice(0, i) : s; };
function hsLay() { try { const x = JSON.parse(kho.get('hoa10_hs', 'null')); return x && x.ma && x.pin ? x : null; } catch (e) { return null; } }
function hsDat(x) { kho.set('hoa10_hs', JSON.stringify(x)); kho.set('hoa10_lop', lopCua(x.ma)); }
function hsThoat() { kho.del('hoa10_hs'); }
/* tài khoản trải nghiệm của cô: <lớp>-60 */
const laThu = ma => typeof STT_THU !== 'undefined' && +String(ma || '').split('-').pop() === STT_THU;
(function vaoThu() {
  const m = /[?&#]thu=([0-9A-Za-z]+)/.exec(location.search + location.hash);
  if (m && typeof SI_SO === 'object' && SI_SO[m[1]]) {
    const hs = { ma: m[1] + '-' + STT_THU, pin: PIN_THU };
    hsDat(hs);
    if (MAY_CHU) fetch(MAY_CHU, { method: 'POST', body: JSON.stringify({ viec: 'vao', ma: hs.ma, pin: hs.pin }) }).catch(() => {});
    history.replaceState(null, '', location.pathname);
  }
  const hs = hsLay();
  if (hs && laThu(hs.ma)) document.addEventListener('DOMContentLoaded', () => {
    const b = document.createElement('div');
    b.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:9999;background:#ffd8a8;color:#2b2118;font:700 13px Nunito,Segoe UI,Arial;text-align:center;padding:4px 8px';
    b.innerHTML = '👩‍🏫 Cô đang xem như học sinh · mã ' + esc(hs.ma) + ' (không tính vào thống kê) · <a href="#" style="color:inherit">Thoát</a>';
    b.querySelector('a').onclick = e => { e.preventDefault(); hsThoat(); location.reload(); };
    document.body.appendChild(b); document.body.style.paddingTop = '26px';
  });
})();

/* gọi máy chủ Google Sheet của cô */
async function goi(viec, d) {
  if (!MAY_CHU) throw new Error('Cô chưa nối máy chủ — kết quả chưa lưu được.');
  const r = await fetch(MAY_CHU, { method: 'POST', body: JSON.stringify(Object.assign({ viec }, d || {})) });
  const j = await r.json();
  if (j.loi) throw new Error(j.loi);
  return j;
}
function guiNgam(viec, d) {           // gửi khi rời trang, không chờ trả lời
  if (!MAY_CHU) return;
  const body = JSON.stringify(Object.assign({ viec }, d || {}));
  try { if (navigator.sendBeacon && navigator.sendBeacon(MAY_CHU, new Blob([body], { type: 'text/plain' }))) return; } catch (e) {}
  fetch(MAY_CHU, { method: 'POST', body, keepalive: true, mode: 'no-cors' }).catch(() => {});
}
/* ghi thời gian học trên một trang (mở → rời trang) */
function theoDoi(hl) {
  const hs = hsLay(); if (!hs || !MAY_CHU) return;
  let t0 = Date.now(), daGui = false;
  guiNgam('hd', { ma: hs.ma, pin: hs.pin, hl, loai: 'mo' });
  const xong = () => { if (daGui) return; daGui = true; guiNgam('hd', { ma: hs.ma, pin: hs.pin, hl, loai: 'xong', giay: Math.round((Date.now() - t0) / 1000) }); };
  addEventListener('pagehide', xong);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') xong(); else if (daGui) { daGui = false; t0 = Date.now(); }
  });
}

/* đường dẫn mở một học liệu */
function duoi(h) { const m = /\.[a-z0-9]+$/i.exec(h.nguon || ''); return m ? m[0].toLowerCase() : '.html'; }
function linkHL(h) {
  if (h.ks) return 'khao-sat.html?bai=' + h.ks;
  if (h.muc === 'elearning' || h.muc === 'clip' || h.drive || h.luyen || h.choi || h.mp) return 'xem.html?id=' + h.id;
  return 'hoc-lieu/' + h.id + duoi(h);
}
const timHL = id => HOC_LIEU.find(h => h.id === id);
const timBai = ma => BAI.find(b => b.ma === ma);

/* khung chung: dòng bản nháp + nút sáng/tối + chân trang */
function khungChung() {
  const bn = document.getElementById('banNhap'); if (bn && !BAN_NHAP) bn.remove();
  document.body.insertAdjacentHTML('beforeend', `<footer><div class="wrap">
    <span>⚗️ Phòng thí nghiệm Hoá 10 của ${esc(typeof TEN_GV === 'string' ? TEN_GV : 'cô Thơi')}${typeof TRUONG === 'string' && TRUONG ? ' · ' + esc(TRUONG) : ''}. Web chỉ ghi <b>mã lớp – số thứ tự</b>, không ghi họ tên.</span>
    <button class="theme" id="nutSang">🌓 Sáng / Tối</button></div></footer>`);
  const goc = document.documentElement, th = kho.get('hoa10_theme', '');
  if (th) goc.dataset.theme = th;
  $('#nutSang').onclick = () => {
    const toi = goc.dataset.theme ? goc.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    goc.dataset.theme = toi ? 'light' : 'dark'; kho.set('hoa10_theme', goc.dataset.theme);
  };
}

/* vòng phần trăm nhỏ (SVG) */
function vong(pt, mau, co) {
  co = co || 64; const r = co / 2 - 6, cv = 2 * Math.PI * r, p = Math.max(0, Math.min(100, pt || 0));
  return `<svg class="vong" width="${co}" height="${co}" viewBox="0 0 ${co} ${co}" role="img" aria-label="${Math.round(p)}%">
    <circle cx="${co / 2}" cy="${co / 2}" r="${r}" fill="none" stroke="var(--line)" stroke-width="7"/>
    <circle cx="${co / 2}" cy="${co / 2}" r="${r}" fill="none" stroke="${mau || 'var(--pri)'}" stroke-width="7" stroke-linecap="round"
      stroke-dasharray="${cv * p / 100} ${cv}" transform="rotate(-90 ${co / 2} ${co / 2})"/>
    <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-size="${co / 4.2}" font-weight="700" fill="var(--ink)">${pt == null ? '—' : Math.round(p) + '%'}</text></svg>`;
}

/* ---------- hình vẽ «phòng thí nghiệm» (23/11/2026, cùng kiểu trang trò chơi) ---------- */
/* linh vật Bình Cầu — tâm trạng: vui · buon · wow */
let LV_SO = 0;
function linhVat(tam) {
  const id = 'lvw' + (++LV_SO);
  return `<svg class="lv ${tam || 'vui'}" viewBox="0 0 100 114" aria-hidden="true"><defs><clipPath id="${id}"><circle cx="50" cy="72" r="35"/></clipPath></defs>
    <rect x="38" y="8" width="24" height="34" rx="4" fill="#eaf7fb" stroke="#2b2118" stroke-width="3"/>
    <rect x="33" y="3" width="34" height="9" rx="4.5" fill="#d9580f" stroke="#2b2118" stroke-width="3"/>
    <circle cx="50" cy="72" r="37" fill="#eaf7fb" stroke="#2b2118" stroke-width="3"/>
    <g clip-path="url(#${id})"><path d="M10 74 Q30 66 50 74 T90 74 V112 H10Z" fill="#2bb3a3"/><path d="M10 74 Q30 66 50 74 T90 74" fill="none" stroke="#7fe0d3" stroke-width="3"/>
      <circle class="bot" cx="36" cy="100" r="3.5" fill="#ffffffaa"/><circle class="bot" cx="60" cy="104" r="2.6" fill="#ffffffaa"/><circle class="bot" cx="50" cy="96" r="3" fill="#ffffffaa"/></g>
    <path d="M27 58 Q31 46 42 41" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".9"/>
    <ellipse cx="29" cy="79" rx="6" ry="4" fill="#ff9e80" opacity=".75"/><ellipse cx="71" cy="79" rx="6" ry="4" fill="#ff9e80" opacity=".75"/>
    <g fill="#2b2118"><circle cx="38" cy="66" r="5.2"/><circle cx="62" cy="66" r="5.2"/></g><g fill="#fff"><circle cx="39.8" cy="64.2" r="1.8"/><circle cx="63.8" cy="64.2" r="1.8"/></g>
    <path class="mat-vui" d="M40 79 Q50 90 60 79" fill="#c23a1f" stroke="#2b2118" stroke-width="3" stroke-linejoin="round"/>
    <path class="mat-buon" d="M41 86 Q50 78 59 86" fill="none" stroke="#2b2118" stroke-width="3" stroke-linecap="round"/>
    <ellipse class="mat-wow" cx="50" cy="83" rx="6" ry="7.5" fill="#c23a1f" stroke="#2b2118" stroke-width="3"/>
  </svg>`;
}
/* dây cờ ô nguyên tố H → Ar, đung đưa nhẹ */
function dayCo() {
  const ki = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'];
  const mau = ['#d9580f', '#1d6fb8', '#16804f', '#e9a100', '#c2185b', '#7c3aed'];
  const W = 1080, n = ki.length, buoc = (W - 40) / (n - 1);
  let s = `<path d="M-10 6 Q${W / 2} 46 ${W + 10} 6" fill="none" stroke="#e8d3b0" stroke-width="2" opacity=".8"/>`;
  ki.forEach((k, i) => {
    const x = 20 + i * buoc, t = (x + 10) / (W + 20), y = 6 + 80 * t * (1 - t);
    s += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><g class="la"><path d="M-15 0h30v28l-15 7-15-7z" fill="${mau[i % mau.length]}" stroke="#0003" stroke-width="1"/>
      <text y="21" text-anchor="middle" font-size="14" font-weight="900" fill="#fff" font-family="Nunito,Segoe UI,Arial">${k}</text>
      <text x="-11" y="8" font-size="7" font-weight="800" fill="#fff" opacity=".85" font-family="Arial">${i + 1}</text></g></g>`;
  });
  return `<svg class="co" viewBox="0 0 ${W} 58" preserveAspectRatio="xMidYMin slice" aria-hidden="true">${s}</svg>`;
}
/* bàn thí nghiệm: bình tam giác, cốc, giá ống nghiệm, bình cầu — bọt khí nổi */
function banThiNghiem() {
  const bot = (x, y, d) => `<circle cx="${x}" cy="${y}" r="3.2" fill="#ffffffb0"><animate attributeName="cy" values="${y};${y - 26}" dur="${d}s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="${d}s" repeatCount="indefinite"/></circle>`;
  return `<svg class="ban" viewBox="0 0 1080 84" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <g transform="translate(60 22)"><path d="M14 0h16v16l20 32a4 4 0 0 1-4 6H-2a4 4 0 0 1-4-6l20-32z" fill="#eaf7fb" stroke="#2b2118" stroke-width="2.5"/><path d="M3 32h38l7 14a4 4 0 0 1-4 6H0a4 4 0 0 1-4-6z" fill="#f4a261"/>${bot(16, 44, 1.8)}${bot(28, 46, 2.3)}</g>
    <g transform="translate(140 34)"><path d="M0 0h38v36a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z" fill="#eaf7fb" stroke="#2b2118" stroke-width="2.5"/><path d="M2.5 14h33v22a2 2 0 0 1-2 2h-29a2 2 0 0 1-2-2z" fill="#2bb3a3"/><path d="M7 7h8M7 14h5M7 21h8" stroke="#2b2118" stroke-width="1.5"/>${bot(20, 32, 2)}</g>
    <g transform="translate(860 30)"><rect x="0" y="32" width="96" height="9" rx="3" fill="#8a5a2b"/>
      ${[['#c2185b', 18], ['#e9a100', 10], ['#16804f', 22], ['#1d6fb8', 14]].map(([m, h], i) => `<g transform="translate(${10 + i * 22} 0)"><rect x="0" y="0" width="12" height="42" rx="6" fill="#eaf7fb" stroke="#2b2118" stroke-width="2"/><rect x="1.5" y="${40 - h}" width="9" height="${h}" rx="4.5" fill="${m}"/></g>`).join('')}</g>
    <g transform="translate(760 14)"><circle cx="22" cy="46" r="20" fill="#eaf7fb" stroke="#2b2118" stroke-width="2.5"/><rect x="16" y="6" width="12" height="22" fill="#eaf7fb" stroke="#2b2118" stroke-width="2.5"/><path d="M4.5 50a18 18 0 0 0 35 0z" fill="#e9a100"/>${bot(18, 58, 1.6)}${bot(27, 60, 2.2)}</g>
    <g transform="translate(230 44)"><rect x="0" y="0" width="62" height="28" rx="5" fill="#fffdf8" stroke="#2b2118" stroke-width="2"/><text x="31" y="20" text-anchor="middle" font-size="15" font-weight="900" fill="#c2410c" font-family="Nunito,Segoe UI,Arial">H₂SO₄</text></g>
    <g transform="translate(640 46)"><rect x="0" y="0" width="56" height="26" rx="5" fill="#fffdf8" stroke="#2b2118" stroke-width="2"/><text x="28" y="19" text-anchor="middle" font-size="14" font-weight="900" fill="#1d6fb8" font-family="Nunito,Segoe UI,Arial">NaCl</text></g>
    <rect x="0" y="74" width="1080" height="10" fill="#a8693a" opacity=".55"/>
  </svg>`;
}
/* cốc đo có vạch: mực nước = phần trăm */
function coc(pt, co) {
  co = co || 72; const p = pt == null ? 0 : Math.max(0, Math.min(100, pt));
  const day = 64, dinh = 14, y = day - (day - dinh) * p / 100;
  return `<svg class="coc" width="${co}" height="${co}" viewBox="0 0 64 70" role="img" aria-label="${pt == null ? 'chưa có số liệu' : Math.round(p) + '%'}">
    <defs><clipPath id="cocC${++LV_SO}"><path d="M10 8h44v52a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z"/></clipPath></defs>
    <g clip-path="url(#cocC${LV_SO})"><rect x="0" y="0" width="64" height="70" fill="var(--soft)"/>
      <rect x="0" y="${y.toFixed(1)}" width="64" height="70" fill="${pt == null ? 'var(--line)' : '#2bb3a3'}"/>
      ${pt ? `<circle class="bot" cx="24" cy="${day - 2}" r="2.6" fill="#fff9"/><circle class="bot" cx="40" cy="${day - 4}" r="2" fill="#fff9"/>` : ''}</g>
    <path d="M6 6h52M10 8v52a6 6 0 0 0 6 6h32a6 6 0 0 0 6-6V8" fill="none" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>
    <path d="M12 26h7M12 38h5M12 50h7" stroke="var(--ink)" stroke-width="2" opacity=".5"/>
    <text x="34" y="44" text-anchor="middle" font-size="15" font-weight="900" fill="var(--ink)" font-family="Nunito,Segoe UI,Arial" paint-order="stroke" stroke="var(--card)" stroke-width="3">${pt == null ? '—' : Math.round(p) + '%'}</text></svg>`;
}

/* hộp "Vào lớp": chọn lớp, số thứ tự, mật mã 4 số. xong(hs) được gọi khi vào được. */
function hopVao(noi, xong, lopSan) {
  const l1 = Object.keys(SI_SO)[0], lop0 = lopSan || (SI_SO[kho.get('hoa10_lop', '')] ? kho.get('hoa10_lop', '') : l1);
  noi.innerHTML = `<div class="khung" style="max-width:460px">
    <h3>🔑 Vào lớp</h3>
    <p class="phu" style="margin:0">Lần đầu: em tự đặt mật mã 4 số và <b>nhớ kĩ</b>. Không ghi họ tên.</p>
    <label class="nhan" for="vLop">Lớp</label>
    <select class="o" id="vLop">${Object.keys(SI_SO).map(l => `<option${l === lop0 ? ' selected' : ''}>${l}</option>`).join('')}</select>
    <label class="nhan" for="vSo">Số thứ tự trong danh sách lớp</label>
    <select class="o" id="vSo"></select>
    <label class="nhan" for="vPin">Mật mã 4 số</label>
    <input class="o" id="vPin" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="VD 2580">
    <div class="loi" id="vLoi"></div>
    <button class="nut" id="vNut" style="margin-top:6px;width:100%">Vào lớp</button></div>`;
  const veSo = () => { const n = SI_SO[$('#vLop').value]; $('#vSo').innerHTML = Array.from({ length: n }, (_, i) => `<option>${String(i + 1).padStart(2, '0')}</option>`).join(''); };
  $('#vLop').onchange = veSo; veSo();
  $('#vNut').onclick = async () => {
    const hs = { ma: $('#vLop').value + '-' + $('#vSo').value, pin: $('#vPin').value.trim() };
    if (!/^\d{4}$/.test(hs.pin)) { $('#vLoi').textContent = 'Mật mã phải gồm đúng 4 chữ số.'; return; }
    $('#vNut').disabled = true; $('#vLoi').textContent = '';
    try { if (MAY_CHU) await goi('vao', hs); hsDat(hs); xong(hs); }
    catch (e) { $('#vLoi').textContent = e.message; }
    finally { const n = $('#vNut'); if (n) n.disabled = false; }
  };
}

/* mã tệp Google Drive trong một đường link */
function maDrive(u) { const m = /drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?.*id=)([\w-]{10,})/.exec(u || ''); return m ? m[1] : ''; }

/* học liệu em đã mở trên máy này (chỉ lưu trên điện thoại của em) */
function daHoc() { try { return JSON.parse(kho.get('hoa10_da_hoc', '{}')) || {}; } catch (e) { return {}; } }
function ghiDaHoc(id) { const d = daHoc(); d[id] = new Date().toISOString().slice(0, 10); kho.set('hoa10_da_hoc', JSON.stringify(d)); kho.set('hoa10_gan_nhat', id); }

/* hộp "Em thấy học liệu này thế nào?" — gửi cô để cô sửa học liệu cho dễ hiểu hơn */
const MUC_DG = { 3: '👍 Dễ hiểu', 2: '👌 Tạm được', 1: '🤔 Khó hiểu' };
function hopDanhGia(noi, id, gon, xong) {
  const da = kho.get('hoa10_dg_' + id, '');
  if (da) { noi.innerHTML = `<p class="ghi" style="margin:0">Em đã gửi nhận xét «${esc(MUC_DG[da] || '')}» cho học liệu này. Cảm ơn em!</p>`; return; }
  noi.innerHTML = `<div class="dg"><b>Em thấy học liệu này thế nào?</b>
    <div class="dg-nut">${[3, 2, 1].map(m => `<button class="chip" data-m="${m}">${MUC_DG[m]}</button>`).join('')}</div>
    <div class="dg-them" hidden><textarea class="o" rows="2" maxlength="150" placeholder="Chỗ em chưa hiểu (không bắt buộc, đừng ghi họ tên)"></textarea>
    <button class="nut">Gửi cô</button></div><div class="ghi dg-kq"></div></div>`;
  let muc = 0;
  noi.querySelectorAll('.dg-nut .chip').forEach(b => b.onclick = () => {
    muc = +b.dataset.m; noi.querySelectorAll('.dg-nut .chip').forEach(x => x.classList.toggle('on', x === b));
    noi.querySelector('.dg-them').hidden = false;
    if (gon && muc === 3) gui();
  });
  async function gui() {
    const kq = noi.querySelector('.dg-kq'), hs = hsLay();
    const d = { hl: id, muc, ghi: noi.querySelector('textarea').value.trim() };
    if (hs) Object.assign(d, { ma: hs.ma, pin: hs.pin });
    try {
      if (MAY_CHU) await goi('dg', d);
      kho.set('hoa10_dg_' + id, String(muc));
      noi.innerHTML = `<p class="ghi" style="margin:0">✅ Đã gửi cô. Cảm ơn em!</p>`;
      if (xong) setTimeout(xong, 1200);
    } catch (e) { kq.textContent = '⚠ ' + e.message; }
  }
  noi.querySelector('.dg-them .nut').onclick = gui;
}
