/* Bài 4. Ôn tập chương 1 — 2 mô phỏng */
// số neutron của đồng vị phổ biến nhất (Z = 1–20)
const N_PB = [0, 0, 2, 4, 5, 6, 6, 7, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 22, 20, 20];
const ION = { 3: [1], 4: [2], 7: [-3], 8: [-2], 9: [-1], 11: [1], 12: [2], 13: [3], 15: [-3], 16: [-2], 17: [-1], 19: [1], 20: [2] };

MP_NAP({ ma: '4', ds: [

/* ---------- 1. Từ nguyên tử đến ion: bảng tổng hợp chương 1 ---------- */
{ id: 'nguyen-tu-ion', ic: '🔭', ten: 'Soi một nguyên tử: số hạt, cấu hình, ô orbital, ion',
  mo: 'Chọn nguyên tố Z = 1–20, cho nhường hoặc nhận electron: mọi thông tin của chương 1 đổi theo cùng lúc.',
  chay(a) {
    a.huong('Kéo chọn Z. Bấm <b>nhường / nhận electron</b> để tạo ion (chỉ có các ion hay gặp). Quan sát số hạt, cấu hình electron và ô orbital lớp ngoài cùng thay đổi.');
    const s = a.svg('0 0 400 300'), g = a.s('g', {}, s);
    let Z = 11, q = 0;
    function ve() {
      g.innerHTML = '';
      const e = Z - q, N = N_PB[Z], A = Z + N, nt = NT[Z];
      const lop = (() => { const o = []; let c = e; [2, 8, 8, 2].forEach(t => { const x = Math.min(c, t); if (x > 0) o.push(x); c -= x; }); return o.length ? o : [0]; })();
      veNguyenTuLop(a, g, 100, 120, Z, { lop, r0: 20, buoc: 18, toNgoai: true });
      // kí hiệu
      const t = a.s('text', { x: 100, y: 262, 'text-anchor': 'middle', 'font-size': 22, 'font-weight': 800 }, g);
      t.innerHTML = ''; const sp = (c, dy, fs, mau) => { const x = document.createElementNS(NS, 'tspan'); x.textContent = c; if (dy) x.setAttribute('dy', dy); if (fs) x.setAttribute('font-size', fs); if (mau) x.setAttribute('style', 'fill:' + mau); t.appendChild(x); };
      sp(String(A), '-10', 13, '#7c3aed'); sp(nt.k, '10'); if (q) sp((Math.abs(q) > 1 ? Math.abs(q) : '') + (q > 0 ? '+' : '−'), '-12', 13, '#0284c7');
      a.chu(g, 100, 284, `Z = ${Z} · ${nt.ten}${q ? (q > 0 ? ' (cation)' : ' (anion)') : ''}`, { 'font-size': 12, class: 'mo' });
      // bảng số hạt
      const x0 = 210; [['proton', Z, '#ef4444'], ['neutron', N, '#94a3b8'], ['electron', e, '#2563eb']].forEach(([ten, so, mau], i) => {
        a.s('rect', { x: x0, y: 18 + i * 30, width: Math.max(2, so * 7), height: 20, rx: 4, fill: mau }, g);
        a.chu(g, x0 + Math.max(2, so * 7) + 6, 33 + i * 30, `${so} ${ten}`, { 'font-size': 12.5, 'text-anchor': 'start' }); });
      a.chu(g, x0, 118, `Tổng số hạt = ${Z} + ${N} + ${e} = ${Z + N + e}`, { 'font-size': 12.5, 'text-anchor': 'start' });
      a.chu(g, x0, 140, `Mang điện (p + e): ${Z + e}`, { 'font-size': 12.5, 'text-anchor': 'start' }); a.chu(g, x0, 158, `Không mang điện (n): ${N}`, { 'font-size': 12.5, 'text-anchor': 'start' });
      // ô orbital lớp ngoài cùng (theo electron của hạt)
      const ph = []; let c = e; [['1s', 1], ['2s', 1], ['2p', 3], ['3s', 1], ['3p', 3], ['4s', 1]].forEach(([t, n]) => { const x = Math.min(c, 2 * n); if (x > 0) ph.push([t, n, x]); c -= x; });
      const nMax = ph.length ? Math.max(...ph.map(p => +p[0][0])) : 1;
      const ngoai = ph.filter(p => +p[0][0] === nMax);
      a.chu(g, x0, 178, 'Ô orbital lớp ngoài cùng:', { 'font-size': 12, 'text-anchor': 'start', class: 'mo' });
      let xx = x0; ngoai.forEach(([t, n, so]) => { a.chu(g, xx + 10, 224, t, { 'font-size': 12, 'font-weight': 700 });
        for (let k = 0; k < n; k++) { a.s('rect', { x: xx + k * 26, y: 186, width: 26, height: 24, fill: 'var(--card)', stroke: 'var(--net)' }, g);
          const v = so >= n + k + 1 ? '↑↓' : so > k ? '↑' : ''; a.chu(g, xx + k * 26 + 13, 204, v, { 'font-size': 17, 'font-weight': 800, style: 'fill:#2563eb' }); }
        xx += n * 26 + 14; });
      // cấu hình
      const chuCH = ph.map(([t, , so]) => t + mu(so)).join('') || '(không còn electron)';
      a.bao(`Cấu hình electron của <b>${nt.k}${q ? '<sup>' + (Math.abs(q) > 1 ? Math.abs(q) : '') + (q > 0 ? '+' : '−') + '</sup>' : ''}</b>: <b>${chuCH}</b>` +
        (q ? ` — giống khí hiếm <b>${({ 0: '—', 2: 'He', 10: 'Ne', 18: 'Ar' })[e] || '—'}</b>` : ` · lớp ngoài cùng ${lop[lop.length - 1]} e ⇒ <b>${loaiNT(Z)}</b>`) +
        `<br>Kí hiệu: số khối A = ${Z} + ${N} = ${A} (đồng vị phổ biến nhất).`);
      nNhuong.disabled = !(ION[Z] && ION[Z][0] > 0) || q !== 0; nNhan.disabled = !(ION[Z] && ION[Z][0] < 0) || q !== 0; nTH.disabled = q === 0;
    }
    a.thanh({ td: 'Nguyên tố', min: 1, max: 20, gt: 11, hien: v => 'Z = ' + v + ' (' + NT[v].k + ')', fn: v => { Z = v; q = 0; ve(); } });
    const h = a.hang(a.nhom('Tạo ion'));
    const nNhuong = a.nut('➖ Nhường electron', () => { q = ION[Z][0]; ve(); }, { vao: h, nho: true });
    const nNhan = a.nut('➕ Nhận electron', () => { q = ION[Z][0]; ve(); }, { vao: h, nho: true });
    const nTH = a.nut('↺ Về nguyên tử', () => { q = 0; ve(); }, { vao: h, nho: true, phu: true });
    ve();
    a.ket(`<p>• Nguyên tử: hạt nhân (p, n) + vỏ (e); trong nguyên tử <b>số p = số e = Z</b>; <b>A = Z + N</b>.</p>
      <p>• Electron xếp theo <b>nguyên lí vững bền</b>, <b>Pauli</b>, <b>quy tắc Hund</b>; electron lớp ngoài cùng quyết định nguyên tố là kim loại, phi kim hay khí hiếm.</p>
      <p>• Nguyên tử nhường electron → <b>cation</b>, nhận electron → <b>anion</b>; số p không đổi, chỉ số e thay đổi.</p>`);
    a.hoi([
      { h: 'Ion Mg<sup>2+</sup> (Z = 12) có số electron là', d: ['12', '14', '10', '2'], dung: 2, g: 'Mg nhường 2 electron: 12 − 2 = 10.' },
      { h: 'Nguyên tử <sup>39</sup><sub>19</sub>K có tổng số hạt là', d: ['39', '58', '57', '19'], dung: 1, g: 'p = e = 19, n = 20 ⇒ 19 + 19 + 20 = 58.' },
    ]);
  } },

/* ---------- 2. Bài toán tổng số hạt nhìn bằng hình ---------- */
{ id: 'tong-so-hat', ic: '🧮', ten: 'Bài toán tổng số hạt: nhìn bằng thanh hạt',
  mo: 'Biết tổng số hạt và hiệu số hạt mang điện – không mang điện, kéo thử Z để thấy vì sao Z = (S + D) : 4.',
  chay(a) {
    a.huong('Đề bài cho <b>S</b> = tổng số hạt (p + n + e) và <b>D</b> = số hạt mang điện nhiều hơn số hạt không mang điện. Em kéo thanh <b>Z</b> để thử: khi cả hai điều kiện cùng đúng là tìm được nguyên tố.');
    const DE = [[34, 10], [36, 12], [40, 12], [48, 16], [52, 16], [58, 18], [60, 20], [24, 8]];
    const s = a.svg('0 0 400 250'), g = a.s('g', {}, s);
    let S = 34, D = 10, z = 8;
    function ve() {
      g.innerHTML = ''; const n = S - 2 * z, d = 2 * z - n, k = 5.4;
      const veThanh = (y, ds, nhan) => { let x = 70; a.chu(g, 62, y + 15, nhan, { 'font-size': 12, 'text-anchor': 'end', 'font-weight': 700 });
        ds.forEach(([so, mau, chu]) => { if (so <= 0) return; a.s('rect', { x, y, width: so * k, height: 22, rx: 3, fill: mau }, g); if (so * k > 22) a.chu(g, x + so * k / 2, y + 15, chu + so, { 'font-size': 11, style: 'fill:#fff', 'font-weight': 700 }); x += so * k; }); };
      veThanh(20, [[z, '#ef4444', 'p='], [z, '#2563eb', 'e='], [Math.max(0, n), '#94a3b8', 'n=']], 'Tổng S');
      a.s('line', { x1: 70 + S * k, y1: 10, x2: 70 + S * k, y2: 52, stroke: '#16a34a', 'stroke-width': 2, 'stroke-dasharray': '4 3' }, g);
      a.chu(g, 70 + S * k, 64, 'S = ' + S, { 'font-size': 11, style: 'fill:#16a34a', 'font-weight': 700 });
      veThanh(90, [[2 * z, '#a855f7', 'mang điện ']], 'Mang điện');
      veThanh(122, [[Math.max(0, n), '#94a3b8', 'không MĐ ']], 'Không MĐ');
      if (n >= 0) { a.s('rect', { x: 70 + n * k, y: 122, width: Math.max(0, d) * k, height: 22, fill: 'none', stroke: '#f59e0b', 'stroke-width': 2, 'stroke-dasharray': '4 2' }, g);
        a.chu(g, 70 + n * k + Math.max(0, d) * k / 2, 162, 'chênh lệch = ' + String(d).replace('-', '−'), { 'font-size': 12, style: 'fill:#d97706', 'font-weight': 700 }); }
      const okS = n >= 0, okD = d === D, ok = okS && okD && n >= z && n <= 1.52 * z + 0.5;
      a.chu(g, 200, 196, `Thử Z = ${z}: n = S − 2Z = ${S} − ${2 * z} = ${n}`, { 'font-size': 13 });
      a.chu(g, 200, 218, `(p + e) − n = ${2 * z} − ${n} = ${String(d).replace('-', '−')} ${okD ? '= D ✔' : '≠ D = ' + D + ' ✘'}`, { 'font-size': 13, style: okD ? 'fill:#16a34a' : 'fill:#dc2626', 'font-weight': 700 });
      if (okD && n >= 0) a.chu(g, 200, 242, `⇒ Z = ${z}: ${NT[z] ? NT[z].k + ' (' + NT[z].ten + ')' : ''}, A = ${z + n}`, { 'font-size': 13, 'font-weight': 800, style: 'fill:#047857' });
      a.bao(okD && n >= 0 ? `✅ Tìm được! <b>2Z + N = ${S}</b> và <b>2Z − N = ${D}</b> ⇒ cộng hai vế: 4Z = ${S + D} ⇒ <b>Z = ${(S + D) / 4}</b>, N = ${n}. Nguyên tố <b>${NT[z].k}</b>.`
        : d > D ? 'Chênh lệch đang <b>lớn hơn</b> D ⇒ giảm Z.' : 'Chênh lệch đang <b>nhỏ hơn</b> D ⇒ tăng Z.');
    }
    const cd = a.chon(DE.map(([x, y], i) => [i, `S=${x}, D=${y}`]), k => { [S, D] = DE[k]; tz.dat(Math.round(S / 3.3), true); z = tz.gt(); ve(); }, { td: 'Chọn đề bài', dau: 0, imLang: true });
    const tz = a.thanh({ td: 'Thử số proton Z', min: 1, max: 20, gt: 8, fn: v => { z = v; ve(); } });
    ve();
    a.ket(`<p>• Trong nguyên tử: số p = số e = Z ⇒ tổng số hạt <b>S = 2Z + N</b>; hạt mang điện là p và e.</p>
      <p>• Nếu số hạt mang điện nhiều hơn không mang điện là D: <b>2Z − N = D</b>.</p>
      <p>• Cộng hai phương trình: <b>Z = (S + D) : 4</b>, rồi N = S − 2Z.</p>
      <p class="ghi">Với các nguyên tử bền (Z ≤ 82): Z ≤ N ≤ 1,52Z (trừ ¹H) ⇒ S : 3,52 ≤ Z ≤ S : 3 — dùng khi đề chỉ cho tổng số hạt.</p>`);
    a.hoi([
      { h: 'Nguyên tử X có tổng số hạt 40, số hạt mang điện nhiều hơn không mang điện 12. X là', d: ['Mg (Z = 12)', 'Al (Z = 13)', 'Si (Z = 14)', 'Na (Z = 11)'], dung: 1, g: 'Z = (40 + 12) : 4 = 13.' },
      { h: 'Nguyên tử Y có tổng số hạt 52, hạt mang điện nhiều hơn không mang điện 16. Số neutron của Y là', d: ['17', '16', '18', '35'], dung: 2, g: 'Z = 68 : 4 = 17; N = 52 − 34 = 18.' },
    ]);
  } },
] });
