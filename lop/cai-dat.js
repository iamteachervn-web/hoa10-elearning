/* =========================================================
   CÀI ĐẶT — WEB HOÁ HỌC 10 · BẢN DÙNG CHUNG CHO ĐỒNG NGHIỆP
   (dong-goi.js chép tệp này thành cai-dat.js của bản đồng nghiệp)
   Mỗi thầy cô có máy chủ Google Sheet riêng. Link lớp: …/index.html?gv=<mã máy chủ>
   Máy nhớ mã máy chủ ở trình duyệt; lớp – sĩ số, tên, nhiệm vụ tuần lấy từ máy chủ (thầy cô đặt ở bat-dau.html, gv.html).
   ========================================================= */
const DONG_NGHIEP = true;
const BAN_NHAP = false;
const KHO_EL = 'https://iamteachervn-web.github.io/hoa10-elearning/';
const STT_THU = 60, PIN_THU = '2026';
const WEB_LOP = location.href.replace(/[?#].*$/, '').replace(/[^\/]*$/, '');
const MA_GV = (function () {
  let id = (/[?&]gv=([\w-]{20,120})/.exec(location.search) || [])[1] || '';
  try { if (id) localStorage.setItem('tw_gv', id); else id = localStorage.getItem('tw_gv') || ''; } catch (e) {}
  return id;
})();
const MAY_CHU = MA_GV ? 'https://script.google.com/macros/s/' + MA_GV + '/exec' : '';
function luuCH(ch, id) {
  if (!ch) return;
  const x = { ten: ch.ten || '', truong: ch.truong || '', siSo: ch.siSo || {}, nv: ch.nv || { tuan: '' }, gt: ch.gt || {} };
  try { localStorage.setItem('tw_ch_' + (id || MA_GV), JSON.stringify(x)); } catch (e) {}
  return x;
}
const CH = (function () { try { return JSON.parse(localStorage.getItem('tw_ch_' + MA_GV) || 'null'); } catch (e) { return null; } })()
  || { ten: '', truong: '', siSo: {}, nv: { tuan: '' }, gt: {} };
const TEN_GV = CH.ten || 'thầy cô', TRUONG = CH.truong || '';
const SI_SO = CH.siSo || {};

/* Lấy cài đặt mới nhất từ máy chủ. Lần đầu (chưa có gì trên máy): che trang, lấy xong tải lại.
   Đã có: dùng ngay, lấy ngầm; cài đặt đổi thì tải lại một lần. */
(function napCaiDat() {
  const trang = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  if (trang === 'bat-dau.html') return;
  if (!MAY_CHU) { location.replace('bat-dau.html'); return; }
  const daCo = Object.keys(SI_SO).length > 0;
  if (!daCo) document.write('<style id="tw-che">body>*{visibility:hidden}body::before{content:"Đang mở lớp học…";visibility:visible;display:block;text-align:center;padding:40vh 16px;font:600 18px Nunito,Segoe UI,Arial}</style>');
  fetch(MAY_CHU, { method: 'POST', body: JSON.stringify({ viec: 'ch' }) }).then(r => r.json()).then(ch => {
    if (!ch || !ch.ok) throw new Error(ch && ch.loi || 'Máy chủ không trả lời đúng.');
    if (!Object.keys(ch.siSo || {}).length) { location.replace('bat-dau.html?chua=lop'); return; }
    const cu = JSON.stringify(CH), moi = JSON.stringify(luuCH(ch));
    let vua = 0; try { vua = +sessionStorage.getItem('tw_tai_lai') || 0; } catch (e) {}
    if (cu !== moi && Date.now() - vua > 15000) {
      try { sessionStorage.setItem('tw_tai_lai', String(Date.now())); } catch (e) {}
      location.reload();
    }
  }).catch(e => {
    if (daCo) return;   // đã có cài đặt cũ: vẫn học được
    const bao = () => { const s = document.getElementById('tw-che'); if (s) s.remove(); document.body.innerHTML = '<div style="max-width:520px;margin:15vh auto;padding:16px;font:17px/1.6 Segoe UI,Arial;text-align:center">' +
      '<h2>Chưa mở được lớp học</h2><p>Kiểm tra mạng rồi tải lại trang. Nếu vẫn lỗi, báo thầy cô đã gửi link cho em.</p>' +
      '<p style="color:#888;font-size:14px">' + String(e.message || e).replace(/[<>&]/g, '') + '</p>' +
      '<p><a href="bat-dau.html">Thầy cô: mở trang Bắt đầu</a></p></div>'; };
    if (document.body) bao(); else document.addEventListener('DOMContentLoaded', bao);
  });
})();
