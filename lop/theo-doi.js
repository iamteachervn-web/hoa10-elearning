/* Gắn vào mỗi học liệu trong hoc-lieu/: ghi em nào mở, học bao lâu (chỉ khi em đã vào lớp trên máy này).
   Địa chỉ máy chủ lấy từ localStorage (trang chủ ghi vào). Không có máy chủ thì không làm gì.
   Không khai báo biến chung nào để khỏi trùng với code của học liệu. */
(function () {
  var MAY_CHU = ''; try { MAY_CHU = localStorage.getItem('hoa10_may_chu') || ''; } catch (e) {}
  if (!MAY_CHU) return;
  let hs = null; try { hs = JSON.parse(localStorage.getItem('hoa10_hs')); } catch (e) {}
  if (!hs || !hs.ma || !hs.pin) return;
  const hl = decodeURIComponent(location.pathname.split('/').pop()).replace(/\.html?$/i, '');
  let t0 = Date.now(), daGui = false;
  function gui(loai, giay) {
    const body = JSON.stringify({ viec: 'hd', ma: hs.ma, pin: hs.pin, hl: hl, loai: loai, giay: giay || 0 });
    try { if (navigator.sendBeacon && navigator.sendBeacon(MAY_CHU, new Blob([body], { type: 'text/plain' }))) return; } catch (e) {}
    try { fetch(MAY_CHU, { method: 'POST', body: body, keepalive: true, mode: 'no-cors' }).catch(function () {}); } catch (e) {}
  }
  function xong() { if (daGui) return; daGui = true; gui('xong', Math.round((Date.now() - t0) / 1000)); }
  gui('mo', 0);
  addEventListener('pagehide', xong);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') xong(); else if (daGui) { daGui = false; t0 = Date.now(); }
  });
})();
