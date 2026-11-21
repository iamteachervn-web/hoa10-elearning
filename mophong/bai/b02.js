/* Bài 2. Nguyên tố hoá học — 2 mô phỏng */
// đồng vị bền (tự nhiên) của Z = 1–20; ngoài danh sách là đồng vị không bền (phóng xạ) hoặc chưa biết
const BEN = { 1: [1, 2], 2: [3, 4], 3: [6, 7], 4: [9], 5: [10, 11], 6: [12, 13], 7: [14, 15], 8: [16, 17, 18], 9: [19], 10: [20, 21, 22],
  11: [23], 12: [24, 25, 26], 13: [27], 14: [28, 29, 30], 15: [31], 16: [32, 33, 34, 36], 17: [35, 37], 18: [36, 38, 40], 19: [39, 41], 20: [40, 42, 43, 44, 46, 48] };
const PHONG_XA = { '1-3': 'tritium (dùng trong nghiên cứu)', '6-14': 'carbon-14 (dùng xác định tuổi cổ vật)', '15-32': 'phosphorus-32 (dùng trong y học, nông nghiệp)', '19-40': 'potassium-40 (có một lượng rất nhỏ trong tự nhiên)' };

MP_NAP({ ma: '2', ds: [

/* ---------- 1. Lắp nguyên tử – kí hiệu nguyên tử – đồng vị ---------- */
{ id: 'lap-nguyen-tu', ic: '🧩', ten: 'Lắp nguyên tử: kí hiệu nguyên tử và đồng vị',
  mo: 'Thêm, bớt proton, neutron, electron. Xem kí hiệu A–Z–X, tên nguyên tố, đồng vị, ion thay đổi ra sao.',
  chay(a) {
    a.huong('Bấm + / − để thêm, bớt từng loại hạt. Để ý: <b>đổi số proton</b> thì điều gì đổi; <b>đổi số neutron</b> thì điều gì đổi.');
    const s = a.svg('0 0 400 260'), ve = a.s('g', {}, s), kh = a.s('g', {}, s);
    let p = 1, n = 0, e = 1;
    function veNT() {
      ve.innerHTML = ''; kh.innerHTML = '';
      const cx = 135, cy = 130, soLopE = e <= 2 ? 1 : e <= 10 ? 2 : e <= 18 ? 3 : 4, dsLop = []; let con = e;
      [2, 8, 8, 2].forEach(t => { const x = Math.min(con, t); dsLop.push(x); con -= x; });
      for (let i = 0; i < Math.max(1, soLopE); i++) {
        const r = 40 + i * 24; a.s('circle', { cx, cy, r, fill: 'none', stroke: 'var(--net2)', 'stroke-dasharray': '3 3' }, ve);
        for (let j = 0; j < dsLop[i]; j++) { const g = -Math.PI / 2 + j * 2 * Math.PI / dsLop[i] + i * .3;
          a.s('circle', { cx: cx + r * Math.cos(g), cy: cy + r * Math.sin(g), r: 5, fill: '#2563eb', stroke: '#fff' }, ve); }
      }
      // hạt nhân: xếp proton, neutron theo vòng xoắn
      const tong = p + n, ds = []; for (let i = 0; i < p; i++) ds.push('p'); for (let i = 0; i < n; i++) ds.push('n');
for (let i = ds.length - 1; i > 0; i--) { const j = (i * 7919) % (i + 1); [ds[i], ds[j]] = [ds[j], ds[i]]; }
      ds.forEach((t, i) => { const r = 4.2 * Math.sqrt(i), g = i * 2.4;
        a.s('circle', { cx: cx + r * Math.cos(g), cy: cy + r * Math.sin(g), r: 4.6, fill: t === 'p' ? '#ef4444' : '#94a3b8', stroke: '#fff', 'stroke-width': .8 }, ve); });
      if (!tong) a.chu(ve, cx, cy + 4, '(trống)', { 'font-size': 11, class: 'mo' });
      // kí hiệu
      const nt = NT[p], kx = 300;
      a.s('rect', { x: 236, y: 30, width: 150, height: 130, rx: 14, fill: 'var(--soft)', stroke: 'var(--line)' }, kh);
      a.chu(kh, kx + 26, 120, nt ? nt.k : '?', { 'font-size': 54, 'font-weight': 800, 'text-anchor': 'middle' });
      a.chu(kh, kx - 8, 70, String(p + n), { 'font-size': 20, 'font-weight': 700, 'text-anchor': 'end', fill: '#7c3aed', style: 'fill:#7c3aed' });
      a.chu(kh, kx - 8, 122, String(p), { 'font-size': 20, 'font-weight': 700, 'text-anchor': 'end', fill: '#ef4444', style: 'fill:#ef4444' });
      const q = p - e; if (q) a.chu(kh, kx + 58, 70, (Math.abs(q) > 1 ? Math.abs(q) : '') + (q > 0 ? '+' : '−'), { 'font-size': 20, 'font-weight': 700, 'text-anchor': 'start', fill: '#0284c7', style: 'fill:#0284c7' });
      a.chu(kh, 311, 150, nt ? nt.ten : 'chưa có nguyên tố', { 'font-size': 13 });
      a.chu(kh, 250, 192, 'A = Z + N = ' + p + ' + ' + n + ' = ' + (p + n), { 'font-size': 13, 'text-anchor': 'start' });
      a.chu(kh, 250, 212, 'Z = số proton = ' + p, { 'font-size': 13, 'text-anchor': 'start' });
      a.chu(kh, 250, 232, 'Điện tích: ' + (q === 0 ? '0 (trung hoà)' : (q > 0 ? '+' : '−') + Math.abs(q)), { 'font-size': 13, 'text-anchor': 'start' });
      // nhận xét
      let ghi = [];
      if (!p) ghi.push('Chưa có proton nên chưa là nguyên tố nào.');
      else {
        ghi.push(`Z = ${p} ⇒ nguyên tố <b>${nt.ten} (${nt.k})</b>. Số proton quyết định tên nguyên tố.`);
        ghi.push(q === 0 ? 'Số p = số e ⇒ <b>nguyên tử trung hoà điện</b>.' : q > 0 ? `Thiếu ${q} electron ⇒ <b>ion dương (cation)</b> ${nt.k}<sup>${q > 1 ? q : ''}+</sup>.` : `Thừa ${-q} electron ⇒ <b>ion âm (anion)</b> ${nt.k}<sup>${-q > 1 ? -q : ''}−</sup>.`);
        const A = p + n, ben = BEN[p] || [];
        if (ben.includes(A)) ghi.push(`Đồng vị <b>${nt.k}-${A}</b> là đồng vị <b>bền</b>${ben.length > 1 ? ` (${nt.ten} có ${ben.length} đồng vị bền: ${ben.join(', ')})` : ''}.`);
        else if (PHONG_XA[p + '-' + A]) ghi.push(`Đồng vị ${nt.k}-${A} là <b>đồng vị phóng xạ</b> — ${PHONG_XA[p + '-' + A]}.`);
        else ghi.push(`Hạt nhân có ${p} p và ${n} n <b>không bền</b> (hoặc không tồn tại). Thử số neutron khác.`);
      }
      a.bao(ghi.join('<br>'));
    }
    const cot = [['p', 'Proton', '#ef4444', 20], ['n', 'Neutron', '#94a3b8', 28], ['e', 'Electron', '#2563eb', 22]];
    cot.forEach(([k, t, mau, toiDa]) => {
      const g = a.nhom(`<span style="color:${mau}">●</span> ${t}`), h = a.hang(g);
      a.nut('−', () => { if (k === 'p') p = Math.max(0, p - 1); if (k === 'n') n = Math.max(0, n - 1); if (k === 'e') e = Math.max(0, e - 1); veNT(); }, { vao: h, phu: true });
      a.nut('+', () => { if (k === 'p') p = Math.min(toiDa, p + 1); if (k === 'n') n = Math.min(toiDa, n + 1); if (k === 'e') e = Math.min(toiDa, e + 1); veNT(); }, { vao: h });
    });
    const mau = a.hang(a.nhom('Mẫu có sẵn (Hình 2.2 SGK và ví dụ)'));
    [['Protium ¹H', 1, 0, 1], ['Deuterium ²H', 1, 1, 1], ['Tritium ³H', 1, 2, 1], ['³⁵Cl', 17, 18, 17], ['³⁷Cl', 17, 20, 17], ['Na⁺', 11, 12, 10], ['O²⁻', 8, 8, 10]].forEach(([t, P, N, E]) => a.nut(t, () => { p = P; n = N; e = E; veNT(); }, { vao: mau, nho: true, phu: true }));
    veNT();
    a.ket(`<p>• <b>Nguyên tố hoá học</b> là tập hợp những nguyên tử có cùng số proton (cùng Z). Đổi số proton là đổi nguyên tố.</p>
      <p>• Kí hiệu nguyên tử: số khối <b>A = Z + N</b> ghi phía trên, số hiệu nguyên tử <b>Z</b> ghi phía dưới, bên trái kí hiệu nguyên tố.</p>
      <p>• <b>Đồng vị</b>: cùng số proton, khác số neutron ⇒ khác số khối, cùng vị trí trong bảng tuần hoàn.</p>
      <p>• Thêm, bớt electron không đổi nguyên tố mà tạo thành <b>ion</b>.</p>`);
    a.hoi([
      { h: 'Hai nguyên tử <sup>35</sup><sub>17</sub>Cl và <sup>37</sup><sub>17</sub>Cl khác nhau về', d: ['số proton', 'số electron', 'số neutron', 'số hiệu nguyên tử'], dung: 2 },
      { h: 'Nguyên tử có 13 proton, 14 neutron. Kí hiệu nguyên tử là', d: ['<sup>13</sup><sub>14</sub>Al', '<sup>27</sup><sub>13</sub>Al', '<sup>27</sup><sub>14</sub>Si', '<sup>14</sup><sub>13</sub>Al'], dung: 1, g: 'Z = 13 (Al), A = 13 + 14 = 27.' },
    ]);
  } },

/* ---------- 2. Máy phổ khối lượng — nguyên tử khối trung bình ---------- */
{ id: 'pho-khoi', ic: '📊', ten: 'Máy phổ khối lượng: % đồng vị và nguyên tử khối trung bình',
  mo: 'Cho mẫu nguyên tố bay qua từ trường: đồng vị nặng lệch ít, nhẹ lệch nhiều. Đếm % đồng vị, tính Ā.',
  chay(a) {
    a.huong('Chọn nguyên tố rồi bấm <b>Phun mẫu</b>. Mỗi nguyên tử (đã ion hoá) bay vòng trong từ trường và rơi vào ô theo khối lượng. Cột càng cao, đồng vị đó càng nhiều.');
    const MAU = {
      Cl: { t: 'Chlorine', d: [[35, 75.77], [37, 24.23]], ng: 'SGK Hoá 10, mục IV.2' },
      Ne: { t: 'Neon', d: [[20, 90.0], [21, 1.0], [22, 9.0]], ng: 'SGK Hoá 10, Hình 2.4' },
      Mg: { t: 'Magnesium', d: [[24, 78.99], [25, 10.00], [26, 11.01]], ng: 'số liệu IUPAC' },
      Cu: { t: 'Copper', d: [[63, 69.15], [65, 30.85]], ng: 'số liệu IUPAC' },
      B: { t: 'Boron', d: [[10, 19.9], [11, 80.1]], ng: 'số liệu IUPAC' },
      Br: { t: 'Bromine', d: [[79, 50.69], [81, 49.31]], ng: 'số liệu IUPAC' },
    };
    const s = a.svg('0 0 400 270'), nen = a.s('g', {}, s), bay = a.s('g', {}, s), cot = a.s('g', {}, s);
    let ch = 'Cl', dem = {}, tong = 0, hang = 0;
    // nền: nguồn ion → ống thẳng → vùng từ trường (nửa vòng) → đầu dò
    a.s('rect', { x: 10, y: 127, width: 46, height: 26, rx: 5, fill: '#475569' }, nen); a.chu(nen, 33, 120, 'ion hoá mẫu', { 'font-size': 10, class: 'mo' });
    a.s('rect', { x: 56, y: 136, width: 120, height: 8, fill: '#cbd5e1' }, nen);
    a.s('path', { d: 'M176 6 L392 6 L392 150 L176 150 Z', fill: '#7c3aed14', stroke: '#7c3aed55', 'stroke-dasharray': '4 3' }, nen);
    for (let x = 254; x < 392; x += 28) for (let y = 22; y < 150; y += 28) a.chu(nen, x, y, '×', { 'font-size': 10, fill: '#7c3aed', style: 'fill:#7c3aed;opacity:.5' });
    a.chu(nen, 286, 144, 'vùng từ trường', { 'font-size': 10, fill: '#7c3aed', style: 'fill:#7c3aed' });
    const dauDo = a.s('rect', { x: 170, y: 8, width: 6, height: 118, fill: '#334155' }, nen); a.chu(nen, 120, 22, 'đầu dò', { 'font-size': 10, class: 'mo' });
    function ban(m) {   // bán kính quỹ đạo tỉ lệ với khối lượng (cùng điện tích, cùng tốc độ)
      const d = MAU[ch].d, lo = d[0][0], hi = d[d.length - 1][0];
      return 24 + (m - lo) / Math.max(1, hi - lo) * 38;
    }
    function veCot() {
      cot.innerHTML = '';
      const d = MAU[ch].d, x0 = 40, w = 330, y0 = 258;
      a.s('line', { x1: x0, y1: y0, x2: x0 + w, y2: y0, stroke: 'var(--net2)' }, cot);
      d.forEach(([m], i) => {
        const pt = tong ? dem[m] / tong * 100 : 0, cx = x0 + (i + .5) * w / d.length, h = pt * 0.6;
        a.s('rect', { x: cx - 22, y: y0 - h, width: 44, height: h, rx: 4, fill: ['#2563eb', '#f59e0b', '#16a34a'][i] }, cot);
        a.chu(cot, cx, y0 - h - 4, pt.toFixed(1).replace('.', ',') + ' %', { 'font-size': 12, 'font-weight': 700 });
        const nhan = a.s('text', { x: cx, y: y0 - h - 18, 'text-anchor': 'middle', 'font-size': 12, class: 'mo' }, cot); nhan.textContent = 'số khối ' + m;
      });
      const tb = tong ? d.reduce((s, [m]) => s + m * dem[m], 0) / tong : 0;
      const that = d.reduce((s, [m, p]) => s + m * p, 0) / 100;
      a.bao(tong ? `Đã đếm <b>${tong}</b> nguyên tử ${ch}. Ā (theo mẫu đếm) = <b>${tb.toFixed(2).replace('.', ',')}</b><br>Theo tỉ lệ chuẩn (${MAU[ch].ng}): Ā = (${d.map(([m, p]) => m + '·' + String(p).replace('.', ',')).join(' + ')}) : 100 = <b>${that.toFixed(2).replace('.', ',')}</b>` :
        `${MAU[ch].t} có ${d.length} đồng vị bền: ${d.map(([m]) => ch + '-' + m).join(', ')}. Bấm <b>Phun mẫu</b> để bắt đầu đếm.`);
    }
    function lamMoi() { dem = {}; MAU[ch].d.forEach(([m]) => dem[m] = 0); tong = 0; hang = 0; bay.innerHTML = ''; ds.length = 0;
      dauDo.parentNode.querySelectorAll('.o').forEach(e => e.remove());
      MAU[ch].d.forEach(([m], i) => { const r = ban(m); const o = a.s('rect', { x: 168, y: 140 - 2 * r - 7, width: 10, height: 14, rx: 2, fill: ['#2563eb', '#f59e0b', '#16a34a'][i], class: 'o' }, nen);
        const t = a.s('text', { x: 162, y: 140 - 2 * r + 4, 'text-anchor': 'end', 'font-size': 11, class: 'o', 'font-weight': 700 }, nen); t.textContent = m; });
      veCot(); }
    function chon1() { const d = MAU[ch].d, x = Math.random() * 100; let c = 0; for (const [m, p] of d) { c += p; if (x <= c) return m; } return d[d.length - 1][0]; }
    const ds = [];
    a.lap(dt => {
      if (hang > 0 && Math.random() < 0.7) { hang--; const m = chon1(), i = MAU[ch].d.findIndex(x => x[0] === m);
        ds.push({ m, t: 0, r: ban(m), e: a.s('circle', { r: 3, fill: ['#2563eb', '#f59e0b', '#16a34a'][i] }, bay) }); }
      for (let i = ds.length - 1; i >= 0; i--) { const h = ds[i]; h.t += dt * 1.4;
        let x, y; if (h.t < 1) { x = 56 + 120 * h.t; y = 140; } else { const g = Math.min(Math.PI, (h.t - 1) * 2.6); x = 176 + h.r * Math.sin(g); y = 140 - h.r + h.r * Math.cos(g); }
        h.e.setAttribute('cx', x); h.e.setAttribute('cy', y);
        if (h.t >= 1 + Math.PI / 2.6 + 0.02) { dem[h.m]++; tong++; h.e.remove(); ds.splice(i, 1); veCot(); } }
    });
    a.chon(Object.keys(MAU).map(k => [k, k + ' – ' + MAU[k].t]), k => { ch = k; lamMoi(); }, { td: 'Nguyên tố', dau: 'Cl', imLang: true });
    const h = a.hang(a.nhom('Phun mẫu vào máy'));
    a.nut('Phun 20 nguyên tử', () => hang += 20, { vao: h, nho: true }); a.nut('Phun 200', () => hang += 200, { vao: h, nho: true });
    a.nut('↺ Làm lại', lamMoi, { vao: h, nho: true, phu: true });
    lamMoi();
    a.ket(`<p>• Trong tự nhiên, mỗi nguyên tố thường là <b>hỗn hợp nhiều đồng vị</b> với tỉ lệ % số nguyên tử xác định; máy phổ khối lượng đo được tỉ lệ này.</p>
      <p>• Nguyên tử khối trung bình: <b>Ā = (X·a + Y·b + …) : 100</b> (X, Y: nguyên tử khối các đồng vị; a, b: % số nguyên tử).</p>
      <p>• Đếm càng nhiều nguyên tử, Ā tính từ mẫu càng gần giá trị chuẩn. Vì vậy nguyên tử khối trong bảng tuần hoàn thường <b>không phải số nguyên</b>.</p>`);
    a.hoi([
      { h: 'Neon có <sup>20</sup>Ne (90,0%), <sup>21</sup>Ne (1,0%), <sup>22</sup>Ne (9,0%). Nguyên tử khối trung bình của Ne là', d: ['20,00', '20,19', '20,90', '21,00'], dung: 1, g: '(20·90 + 21·1 + 22·9) : 100 = 20,19.' },
      { h: 'Trong máy phổ khối, cùng tốc độ và điện tích, đồng vị nào bị lệch hướng ít hơn?', d: ['Đồng vị nhẹ hơn', 'Đồng vị nặng hơn', 'Như nhau', 'Không bị lệch'], dung: 1, g: 'Hạt nặng hơn khó đổi hướng hơn nên đi vòng rộng hơn (lệch ít hơn).' },
    ]);
  } },
] });
