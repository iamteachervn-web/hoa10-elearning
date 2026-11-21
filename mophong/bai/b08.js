/* Bài 8. Định luật tuần hoàn. Ý nghĩa của bảng tuần hoàn — 2 mô phỏng */
// oxide, hydroxide ứng với hoá trị cao nhất (Bảng 7.1, 7.2 SGK; K, Ca theo cùng quy luật nhóm IA, IIA)
const OXH = { 3: ['Li2O', 'LiOH', 'base mạnh'], 4: ['BeO', 'Be(OH)2', 'lưỡng tính'], 5: ['B2O3', 'H3BO3', 'acid rất yếu'], 6: ['CO2', 'H2CO3', 'acid yếu'], 7: ['N2O5', 'HNO3', 'acid mạnh'],
  11: ['Na2O', 'NaOH', 'base mạnh'], 12: ['MgO', 'Mg(OH)2', 'base yếu'], 13: ['Al2O3', 'Al(OH)3', 'lưỡng tính'], 14: ['SiO2', 'H2SiO3', 'acid yếu'], 15: ['P2O5', 'H3PO4', 'acid trung bình'],
  16: ['SO3', 'H2SO4', 'acid mạnh'], 17: ['Cl2O7', 'HClO4', 'acid rất mạnh'], 19: ['K2O', 'KOH', 'base mạnh'], 20: ['CaO', 'Ca(OH)2', 'base mạnh'] };
const KHI_H = { 6: 'CH4', 7: 'NH3', 8: 'H2O', 9: 'HF', 14: 'SiH4', 15: 'PH3', 16: 'H2S', 17: 'HCl' };
const LA_MA = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

MP_NAP({ ma: '8', ds: [

/* ---------- 1. Đồ thị tuần hoàn ---------- */
{ id: 'do-thi-tuan-hoan', ic: '📈', ten: 'Vẽ đồ thị theo Z: tính chất nào lặp lại tuần hoàn?',
  mo: 'Máy vẽ số electron lớp ngoài cùng, độ âm điện, hoá trị cao nhất, nguyên tử khối theo Z. Đại lượng nào lặp lại?',
  chay(a) {
    a.huong('Chọn đại lượng rồi bấm <b>Vẽ</b>. Các dải màu là các chu kì; vạch đứng là khí hiếm. Để ý hình dạng đồ thị có <b>lặp lại</b> sau mỗi chu kì hay không.');
    const s = a.svg('0 0 400 270'), g = a.s('g', {}, s);
    const X0 = 36, X1 = 388, Y0 = 226, Y1 = 30;
    let dl = 'ngoai', toi = 36, n = 0, chay = false, tg = 0;
    const DL = {
      ngoai: { t: 'Số electron lớp ngoài cùng', max: 8, f: z => { const L = soLop(z); return L[L.length - 1]; }, tuan: true },
      dad: { t: 'Độ âm điện (Pauling)', max: 4, f: z => NT[z].x, tuan: true },
      hoatri: { t: 'Hoá trị cao nhất với oxygen', max: 8, f: z => { if (z > 20 || [1, 2, 8, 9, 10, 18].includes(z)) return null; const v = viTri(z); return v.so; }, tuan: true },
      m: { t: 'Nguyên tử khối', max: 90, f: z => NT[z].m, tuan: false },
    };
    const xZ = z => X0 + (z - 1) / (toi - 1) * (X1 - X0);
    function ve() {
      g.innerHTML = ''; const d = DL[dl], yV = v => Y0 - v / d.max * (Y0 - Y1);
      [[1, 2], [3, 10], [11, 18], [19, 36]].forEach(([a1, b1], i) => { if (a1 > toi) return; const x1 = xZ(a1) - (X1 - X0) / (toi - 1) / 2, x2 = xZ(Math.min(b1, toi)) + (X1 - X0) / (toi - 1) / 2;
        a.s('rect', { x: x1, y: Y1, width: x2 - x1, height: Y0 - Y1, fill: ['#fde68a', '#bfdbfe', '#bbf7d0', '#fbcfe8'][i], opacity: .35 }, g);
        a.chu(g, (x1 + x2) / 2, Y1 - 6, i ? 'chu kì ' + (i + 1) : '1', { 'font-size': 9.5, class: 'mo' }); });
      [2, 10, 18, 36].forEach(z => { if (z <= toi) a.s('line', { x1: xZ(z), y1: Y1, x2: xZ(z), y2: Y0, stroke: '#a855f7', 'stroke-dasharray': '3 3' }, g); });
      a.s('line', { x1: X0, y1: Y0, x2: X1, y2: Y0, stroke: 'var(--net)' }, g); a.s('line', { x1: X0, y1: Y0, x2: X0, y2: Y1, stroke: 'var(--net)' }, g);
      for (let v = 0; v <= d.max; v += d.max / 4) a.chu(g, X0 - 5, yV(v) + 4, String(+v.toFixed(1)).replace('.', ','), { 'font-size': 9, 'text-anchor': 'end' });
      for (let z = 1; z <= toi; z += (toi > 20 ? 5 : 2)) a.chu(g, xZ(z), Y0 + 13, String(z), { 'font-size': 9 });
      a.chu(g, (X0 + X1) / 2, 264, 'Số hiệu nguyên tử Z → (' + d.t + ')', { 'font-size': 11, class: 'mo' });
      let duong = '', truoc = null;
      for (let z = 1; z <= Math.min(n, toi); z++) { const v = d.f(z); if (v === null || v === undefined) { truoc = null; continue; }
        const x = xZ(z), y = yV(v); duong += (truoc ? ' L' : ' M') + x.toFixed(1) + ' ' + y.toFixed(1); truoc = [x, y]; }
      a.s('path', { d: duong, fill: 'none', stroke: '#047857', 'stroke-width': 2 }, g);
      for (let z = 1; z <= Math.min(n, toi); z++) { const v = d.f(z); if (v === null || v === undefined) continue; const x = xZ(z), y = yV(v);
        a.s('circle', { cx: x, cy: y, r: 3.2, fill: '#047857' }, g); if (toi <= 20 || [3, 11, 19, 9, 17, 35].includes(z)) a.chu(g, x, y - 6, NT[z].k, { 'font-size': 8 }); }
      if (n >= toi) a.bao(d.tuan ? `<b>${d.t}</b> biến đổi <b>tuần hoàn</b>: đồ thị đi lên trong mỗi chu kì, tới đầu chu kì mới thì “rơi xuống” rồi lại đi lên — lặp lại theo chu kì.${dl === 'dad' ? ' (Khí hiếm không có giá trị độ âm điện Pauling nên bị bỏ trống.)' : dl === 'hoatri' ? ' (Bỏ trống H, O, F và khí hiếm.)' : ''}`
        : '<b>Nguyên tử khối</b> tăng dần gần như đều theo Z, <b>không</b> lặp lại theo chu kì ⇒ không biến đổi tuần hoàn.');
      else a.bao(n ? `Đang vẽ… Z = ${n} (${NT[n].k}): ${d.t.toLowerCase()} = ${d.f(n) === null ? '(bỏ trống)' : String(d.f(n)).replace('.', ',')}` : 'Bấm <b>Vẽ</b> để bắt đầu.');
    }
    a.lap(dt => { if (!chay) return; tg += dt; if (tg > .12) { tg = 0; n++; if (n >= toi) chay = false; ve(); } });
    a.chon([['ngoai', 'Số e lớp ngoài cùng'], ['dad', 'Độ âm điện'], ['hoatri', 'Hoá trị cao nhất với O'], ['m', 'Nguyên tử khối']], k => { dl = k; if (k === 'hoatri') { toi = 20; cz.dat('20', true); } n = 0; ve(); }, { td: 'Đại lượng', dau: 'ngoai', imLang: true });
    const cz = a.chon([['20', 'Z = 1–20'], ['36', 'Z = 1–36']], k => { toi = dl === 'hoatri' ? 20 : +k; n = 0; ve(); }, { td: 'Khoảng Z', dau: '36', imLang: true });
    const h = a.hang(a.nhom());
    a.nut('▶ Vẽ', () => { n = 0; chay = true; }, { vao: h }); a.nut('Vẽ ngay toàn bộ', () => { chay = false; n = toi; ve(); }, { vao: h, phu: true });
    ve();
    a.ket(`<p><b>Định luật tuần hoàn</b>: tính chất của các nguyên tố và đơn chất cũng như thành phần và tính chất của các hợp chất tạo nên từ các nguyên tố đó biến đổi <b>tuần hoàn theo chiều tăng của điện tích hạt nhân</b> nguyên tử.</p>
      <p>Nguyên nhân: cấu hình electron lớp ngoài cùng của nguyên tử lặp lại tuần hoàn. Nguyên tử khối <b>không</b> biến đổi tuần hoàn.</p>`);
    a.hoi([
      { h: 'Đại lượng nào <b>không</b> biến đổi tuần hoàn theo chiều tăng điện tích hạt nhân?', d: ['Tính kim loại, phi kim', 'Tính acid – base của hydroxide', 'Khối lượng nguyên tử', 'Cấu hình electron lớp ngoài cùng'], dung: 2 },
      { h: 'Nguyên nhân sự biến đổi tuần hoàn tính chất các nguyên tố là', d: ['nguyên tử khối tăng dần', 'cấu hình electron lớp ngoài cùng lặp lại tuần hoàn', 'số neutron tăng dần', 'số lớp electron tăng dần'], dung: 1 },
    ]);
  } },

/* ---------- 2. Máy suy luận: từ vị trí đến tính chất ---------- */
{ id: 'suy-luan', ic: '🕵️', ten: 'Từ vị trí suy ra cấu tạo và tính chất (Z = 1–20)',
  mo: 'Chọn một ô trong bảng tuần hoàn, máy suy luận từng bước: cấu hình → loại nguyên tố → oxide, hydroxide → so sánh với nguyên tố lân cận.',
  chay(a) {
    a.huong('Chạm vào một ô nguyên tố (Z = 1–20), rồi bấm <b>Bước tiếp theo</b> để máy suy luận từng bước — em thử đoán trước khi bấm!');
    const s = a.svg('0 0 400 200'), g = a.s('g', {}, s);
    let Z = 16, buoc = 0;
    const W = 44, H = 38, X0 = 20, Y0 = 24;
    function vt(z) { const o = viTri(z), c = z === 2 ? 8 : o.so; return { r: o.ck, c }; }
    function ve() {
      g.innerHTML = '';
      ['IA', 'IIA', 'IIIA', 'IVA', 'VA', 'VIA', 'VIIA', 'VIIIA'].forEach((t, c) => a.chu(g, X0 + c * W + W / 2, Y0 - 7, t, { 'font-size': 9.5, 'font-weight': 700, class: 'mo' }));
      for (let z = 1; z <= 20; z++) { const p = vt(z), x = X0 + (p.c - 1) * W, y = Y0 + (p.r - 1) * H;
        const o = a.s('g', { style: 'cursor:pointer' }, g), loai = loaiNT(z);
        a.s('rect', { x: x + 1, y: y + 1, width: W - 2, height: H - 2, rx: 5, fill: { 'kim loại': '#bfdbfe', 'phi kim': '#fde68a', 'khí hiếm': '#e9d5ff' }[loai], stroke: z === Z ? '#dc2626' : '#0002', 'stroke-width': z === Z ? 2.5 : 1 }, o);
        a.chu(o, x + 6, y + 11, String(z), { 'font-size': 8, 'text-anchor': 'start', style: 'fill:#334155' }); a.chu(o, x + W / 2, y + 27, NT[z].k, { 'font-size': 14, 'font-weight': 800, style: 'fill:#0f172a' });
        o.addEventListener('click', () => { Z = z; buoc = 0; ve(); moTa(); }); }
    }
    function lanCan() {
      const p = vt(Z), out = [];
      const tim = (r, c) => { for (let z = 1; z <= 20; z++) { const q = vt(z); if (q.r === r && q.c === c) return z; } return null; };
      const trai = tim(p.r, p.c - 1), phai = tim(p.r, p.c + 1), tren = tim(p.r - 1, p.c), duoi = tim(p.r + 1, p.c);
      if (p.c === 8 || Z <= 2) return 'Khí hiếm (hoặc chu kì 1): không so sánh theo xu hướng như các nguyên tố khác.';
      if (trai && trai > 2) out.push(`so với <b>${NT[trai].k}</b> (bên trái, cùng chu kì): bán kính nhỏ hơn, độ âm điện lớn hơn, tính phi kim mạnh hơn / tính kim loại yếu hơn`);
      if (phai && vt(phai).c !== 8) out.push(`so với <b>${NT[phai].k}</b> (bên phải): bán kính lớn hơn, độ âm điện nhỏ hơn, tính kim loại mạnh hơn / tính phi kim yếu hơn`);
      if (tren && tren > 2) out.push(`so với <b>${NT[tren].k}</b> (phía trên, cùng nhóm): bán kính lớn hơn, độ âm điện nhỏ hơn, tính kim loại mạnh hơn`);
      if (duoi) out.push(`so với <b>${NT[duoi].k}</b> (phía dưới, cùng nhóm): bán kính nhỏ hơn, độ âm điện lớn hơn, tính phi kim mạnh hơn`);
      return out.map(x => '• ' + NT[Z].k + ' ' + x).join('<br>');
    }
    function moTa() {
      const nt = NT[Z], v = viTri(Z), L = soLop(Z), loai = loaiNT(Z), B = [];
      B.push(`<b>Bước 1 — Ô ${Z}</b> ⇒ Z = ${Z}: nguyên tử có ${Z} proton, ${Z} electron. Cấu hình: <b>${chuCauHinh(Z)}</b>`);
      B.push(`<b>Bước 2 — Vị trí</b>: ${L.length} lớp electron ⇒ <b>chu kì ${v.ck}</b>; ${Z === 2 ? 2 : v.so} electron lớp ngoài cùng, nguyên tố ${v.khoi} ⇒ <b>nhóm ${v.nhom}</b>.`);
      B.push(`<b>Bước 3 — Loại nguyên tố</b>: lớp ngoài cùng có ${L[L.length - 1]} electron ⇒ <b>${loai}</b>.`);
      const ox = OXH[Z]; B.push(`<b>Bước 4 — Hợp chất</b>: ` + (ox ? `hoá trị cao nhất với oxygen là ${LA_MA[v.so]} ⇒ oxide cao nhất <b>${ctHTML(ox[0])}</b>, hydroxide tương ứng <b>${ctHTML(ox[1])}</b> có tính <b>${ox[2]}</b>.` : loai === 'khí hiếm' ? 'khí hiếm hầu như không tạo hợp chất.' : Z === 1 ? 'hydrogen tạo oxide H<sub>2</sub>O.' : 'không xét oxide cao nhất (O, F).')
        + (KHI_H[Z] ? ` Hợp chất khí với hydrogen: <b>${ctHTML(KHI_H[Z])}</b>.` : ''));
      B.push(`<b>Bước 5 — So sánh với nguyên tố lân cận</b>:<br>${lanCan()}`);
      a.bao(`<b>${nt.k}</b> — ${nt.ten}<br>` + B.slice(0, buoc + 1).join('<br>') + (buoc < 4 ? '<br><i>… em đoán bước tiếp theo rồi bấm “Bước tiếp theo”.</i>' : ''));
      nb.disabled = buoc >= 4;
    }
    const h = a.hang(a.nhom());
    const nb = a.nut('➡ Bước tiếp theo', () => { buoc = Math.min(4, buoc + 1); moTa(); }, { vao: h }); a.nut('Hiện tất cả', () => { buoc = 4; moTa(); }, { vao: h, phu: true });
    ve(); moTa();
    a.ket(`<p>Biết <b>vị trí</b> của một nguyên tố trong bảng tuần hoàn (ô, chu kì, nhóm) có thể suy ra:</p>
      <p>• cấu tạo nguyên tử (số proton, số electron, số lớp electron, số electron lớp ngoài cùng);</p>
      <p>• tính kim loại, phi kim; hoá trị cao nhất với oxygen, công thức oxide cao nhất, hydroxide và tính acid – base;</p>
      <p>• so sánh tính chất với các nguyên tố lân cận. Ngược lại, biết cấu tạo nguyên tử cũng suy ra được vị trí.</p>`);
    a.hoi([
      { h: 'Nguyên tố X ở chu kì 3, nhóm VIA. Oxide cao nhất và hydroxide tương ứng của X là', d: ['SO<sub>2</sub>, H<sub>2</sub>SO<sub>3</sub>', 'SO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub>', 'SO<sub>3</sub>, H<sub>2</sub>S', 'P<sub>2</sub>O<sub>5</sub>, H<sub>3</sub>PO<sub>4</sub>'], dung: 1 },
      { h: 'So với S, nguyên tố Cl có', d: ['bán kính lớn hơn', 'độ âm điện nhỏ hơn', 'tính phi kim mạnh hơn', 'tính kim loại mạnh hơn'], dung: 2 },
    ]);
  } },
] });
