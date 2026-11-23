/* BẢN ĐỒNG NGHIỆP — thẻ «📌 Giao bài tuần» trong trang thầy cô (gv.html).
   Thầy cô tích việc cho từng lớp; máy chủ lưu lại; web của học sinh hiện đúng nhiệm vụ đó
   (và mở bộ «sau tiết» khi đã giao). Không phải sửa mã như bản của cô Thơi. */
const GB_HANG = h => /^ks-.*-dau$/.test(h.id) ? 0 : h.muc === 'elearning' ? 1 : h.ks && !/-sau$/.test(h.ks) && !/^ks-/.test(h.id) ? 2 : h.luyen ? 3 : h.ks && /-sau$/.test(h.ks) ? 4 : 5;
const GB_DS = HOC_LIEU.filter(h => !h.an && (h.ks || h.luyen || h.muc === 'elearning'))
  .sort((a, b) => (+a.bai - +b.bai) || (GB_HANG(a) - GB_HANG(b)) || HOC_LIEU.indexOf(a) - HOC_LIEU.indexOf(b));

function veGiao(tab) {
  const lop = lopXem, dang = new Set(NHIEM_VU[lop] || []), truoc = new Set((GIAO_TRUOC || {})[lop] || []);
  const theoBai = {};
  GB_DS.forEach(h => (theoBai[h.bai] = theoBai[h.bai] || []).push(h));
  const tenBai = b => { const x = BAI.find(y => y.ma === String(b)); return x ? `Bài ${b}. ${x.ten}` : `Bài ${b}`; };
  $('#noi').innerHTML = tab + `<div class="loc" style="position:static"><div class="chips">${Object.keys(SI_SO).map(l => `<button class="chip${l === lop ? ' on' : ''}" data-l="${l}">${l}</button>`).join('')}</div>
      <a class="nut phu" href="bat-dau.html">⚙️ Đổi lớp, sĩ số, tên</a></div>
    <div class="khung" style="margin:14px 0">
      <h3>📌 Nhiệm vụ tuần này · lớp ${esc(lop)}</h3>
      <p class="ghi">Tích việc học sinh phải làm. Học sinh thấy danh sách này ở «Góc lớp», theo đúng thứ tự dưới đây. Bộ «⏩ Sau tiết» chỉ mở cho lớp đã được giao.
        Việc đã giao các tuần trước (chữ <b>✓ đã giao</b>) vẫn được tính vào «% hoàn thành theo chương».</p>
      <label class="nhan" for="gbTuan">Dòng nhắc tuần (chung mọi lớp)</label>
      <input class="o" id="gbTuan" maxlength="120" value="${esc(NHIEM_VU.tuan || '')}" placeholder="VD 01/12 – 07/12 · làm lần lượt từ trên xuống">
      <div id="gbDs" style="margin-top:10px">${Object.keys(theoBai).map(b => `<details${theoBai[b].some(h => dang.has(h.id)) ? ' open' : ''} style="margin:6px 0">
        <summary><b>${esc(tenBai(b))}</b> <span class="ghi">(${theoBai[b].filter(h => dang.has(h.id)).length}/${theoBai[b].length})</span></summary>
        ${theoBai[b].map(h => `<label style="display:flex;gap:8px;align-items:flex-start;margin:4px 0 4px 14px;cursor:pointer">
          <input type="checkbox" value="${h.id}"${dang.has(h.id) ? ' checked' : ''}> <span>${(MUC[h.muc] || {}).icon || ''} ${hoa(h.ten)}${truoc.has(h.id) ? ' <span class="ghi">✓ đã giao</span>' : ''}</span></label>`).join('')}
      </details>`).join('')}</div>
      <label style="display:flex;gap:8px;margin:12px 0"><input type="checkbox" id="gbChuyen"> <span>Sang <b>tuần mới</b>: cất nhiệm vụ đang có của lớp ${esc(lop)} vào «đã giao» trước khi lưu</span></label>
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="nut" id="gbLuu">💾 Lưu nhiệm vụ lớp ${esc(lop)}</button>
        <button class="nut phu" id="gbChep">Chép sang các lớp khác</button></div>
      <div class="ghi" id="gbKq" style="margin-top:8px"></div></div>`;
  $$('.chip[data-l]').forEach(b => b.onclick = () => { lopXem = b.dataset.l; ve(); });
  $$('.chip[data-che]').forEach(b => b.onclick = () => { che = b.dataset.che; ve(); });
  const chon = () => GB_DS.map(h => h.id).filter(id => { const o = $(`#gbDs input[value="${id}"]`); return o && o.checked; });
  async function luu(dsLop) {
    let mk = ''; try { mk = sessionStorage.getItem('hoa10_mk') || ''; } catch (e) {}
    const kq = $('#gbKq'); kq.textContent = 'Đang lưu…';
    try {
      let ch = null;
      for (const l of dsLop) ch = await goi('giao', { mk, lop: l, ds: chon(), tuan: $('#gbTuan').value.trim(), chuyen: $('#gbChuyen').checked });
      luuCH(ch);
      kq.textContent = '✅ Đã lưu cho ' + dsLop.join(', ') + '. Trang sẽ tải lại để cập nhật…';
      setTimeout(() => location.reload(), 900);
    } catch (e) { kq.textContent = '⚠ ' + e.message; }
  }
  $('#gbLuu').onclick = () => luu([lop]);
  $('#gbChep').onclick = () => {
    const khac = Object.keys(SI_SO).filter(l => l !== lop);
    if (!khac.length) { $('#gbKq').textContent = 'Thầy cô mới có một lớp.'; return; }
    if (confirm('Giao đúng danh sách đang tích cho các lớp: ' + khac.join(', ') + ' (và lớp ' + lop + ')?')) luu([lop].concat(khac));
  };
}
