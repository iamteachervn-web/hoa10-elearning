/* Bài 16. Ôn tập chương 4 — phản ứng oxi hoá – khử trong thực tiễn — 3 mô phỏng */
MP_NAP({ ma: '16', ds: [

/* ---------- 1. Sự han gỉ của đinh sắt ---------- */
{ id: 'han-gi', ic: '🔩', ten: 'Thí nghiệm ảo: đinh sắt bị gỉ khi nào?',
  mo: 'Bốn ống nghiệm với điều kiện khác nhau. Tua nhanh thời gian để xem đinh sắt trong ống nào bị gỉ, gỉ nhiều hay ít.',
  chay(a) {
    a.huong('Kéo thanh <b>Số ngày</b> (hoặc bấm <b>Tua nhanh</b>). Mỗi ống có một điều kiện khác nhau. So sánh để tìm điều kiện làm sắt bị gỉ.');
    const ONG = [
      { t: '(1) không khí khô', ct: 'có chất hút ẩm', toc: 0, nuoc: 0 },
      { t: '(2) nước đã đun sôi + lớp dầu', ct: 'không có oxygen', toc: .04, nuoc: 1, dau: 1 },
      { t: '(3) nước + không khí', ct: 'có nước và oxygen', toc: .6, nuoc: .45 },
      { t: '(4) nước muối + không khí', ct: 'có nước, oxygen, muối', toc: 1, nuoc: .45, muoi: 1 } ];
    const s = a.svg('0 0 400 270'), g = a.s('g', {}, s);
    let ngay = 0, chay = false;
    function ve() {
      g.innerHTML = '';
      ONG.forEach((o, i) => {
        const x = 30 + i * 92, y = 30, W = 50, H = 190, gi = Math.min(1, ngay / 7 * o.toc);
        if (o.nuoc) a.s('rect', { x: x + 2, y: y + H * (1 - o.nuoc), width: W - 4, height: H * o.nuoc - 4, rx: 6, fill: o.muoi ? '#cffafe' : '#bfdbfe', opacity: .8 }, g);
        if (o.dau) a.s('rect', { x: x + 2, y: y + H * (1 - o.nuoc) - 14, width: W - 4, height: 14, fill: '#fde047', opacity: .8 }, g);
        if (!o.nuoc) { a.s('rect', { x: x + 4, y: y + H - 30, width: W - 8, height: 24, rx: 4, fill: '#f1f5f9', stroke: '#cbd5e1' }, g); a.chu(g, x + W / 2, y + H - 14, 'chất hút ẩm', { 'font-size': 7.5, class: 'mo' }); }
        a.s('path', { d: `M${x} ${y} L${x} ${y + H - 8} Q${x} ${y + H} ${x + 8} ${y + H} L${x + W - 8} ${y + H} Q${x + W} ${y + H} ${x + W} ${y + H - 8} L${x + W} ${y}`, fill: 'none', stroke: 'var(--kinhvien)', 'stroke-width': 2.5 }, g);
        a.s('rect', { x: x - 3, y: y - 8, width: W + 6, height: 10, rx: 3, fill: '#a8a29e' }, g);
        // đinh
        const dx = x + W / 2 - 4, dy = y + 30, dh = o.nuoc ? 150 : 120;
        a.s('rect', { x: dx, y: dy, width: 8, height: dh, rx: 2, fill: '#9ca3af' }, g); a.s('rect', { x: dx - 6, y: dy - 4, width: 20, height: 6, rx: 2, fill: '#6b7280' }, g);
        if (gi > 0) for (let k = 0; k < Math.round(gi * 24); k++) { const yy = dy + (o.nuoc ? dh * (1 - o.nuoc * .9) : 0) + ((k * 37) % Math.max(10, dh * (o.nuoc ? o.nuoc * .9 : 1))); a.s('circle', { cx: dx + 4 + ((k * 13) % 9) - 4, cy: Math.min(dy + dh, yy), r: 2.5 + gi * 2, fill: '#b45309', opacity: .85 }, g); }
        if (gi > .2) a.s('rect', { x: x + 8, y: y + H - 10, width: W - 16, height: 5 * gi, fill: '#b45309', opacity: .7 }, g);
        a.chu(g, x + W / 2, y + H + 16, o.t.split(' ')[0], { 'font-size': 12, 'font-weight': 800 });
        a.chu(g, x + W / 2, y + H + 30, o.ct, { 'font-size': 8.5, class: 'mo' });
        a.chu(g, x + W / 2, y + H + 44, gi < .05 ? 'không gỉ' : gi < .7 ? 'bị gỉ' : 'gỉ nhiều', { 'font-size': 10.5, 'font-weight': 700, style: gi < .05 ? 'fill:#16a34a' : 'fill:#b45309' });
      });
      a.bao(ngay < 1 ? 'Ngày 0: bốn chiếc đinh sắt đều sáng bóng.' : `Sau ${Math.round(ngay)} ngày: ống (1) không có nước và ống (2) không có oxygen ⇒ đinh <b>hầu như không gỉ</b>; ống (3) có cả nước và oxygen ⇒ đinh <b>bị gỉ</b>; ống (4) có thêm muối ⇒ gỉ <b>nhanh, nhiều</b> hơn.`);
    }
    a.lap(dt => { if (!chay) return; ngay = Math.min(7, ngay + dt * 1.2); tn.dat(Math.round(ngay * 10) / 10, true); if (ngay >= 7) chay = false; ve(); });
    const tn = a.thanh({ td: 'Số ngày', min: 0, max: 7, buoc: .1, gt: 0, fn: v => { ngay = v; ve(); } });
    const h = a.hang(a.nhom());
    a.nut('⏩ Tua nhanh 7 ngày', () => { ngay = 0; chay = true; }, { vao: h }); a.nut('↺ Làm lại', () => { chay = false; ngay = 0; tn.dat(0, true); ve(); }, { vao: h, phu: true });
    ve();
    a.ket(`<p>• Sắt bị gỉ khi có <b>cả nước và oxygen</b>: <b>4Fe + 3O<sub>2</sub> + xH<sub>2</sub>O → 2Fe<sub>2</sub>O<sub>3</sub>.xH<sub>2</sub>O</b> (gỉ sắt). Muối làm sắt gỉ nhanh hơn.</p>
      <p>• Đây là phản ứng oxi hoá – khử: <b>Fe</b> (0 → +3) là chất khử, <b>O<sub>2</sub></b> (0 → −2) là chất oxi hoá. Sự han gỉ là phản ứng oxi hoá – khử <b>có hại</b>.</p>
      <p>• Cách chống gỉ: sơn, mạ, bôi dầu mỡ (ngăn sắt tiếp xúc với nước và không khí).</p>`);
    a.hoi([{ h: 'Trong sự han gỉ sắt, chất oxi hoá là', d: ['Fe', 'O<sub>2</sub>', 'H<sub>2</sub>O', 'Fe<sub>2</sub>O<sub>3</sub>'], dung: 1 }]);
  } },

/* ---------- 2. Lò cao luyện gang ---------- */
{ id: 'lo-cao', ic: '🏭', ten: 'Trong lò cao luyện gang xảy ra những phản ứng oxi hoá – khử nào?',
  mo: 'Quặng sắt và than cốc đi xuống, khí đi lên. Chạm vào từng vùng của lò để xem phản ứng, chất oxi hoá, chất khử.',
  chay(a) {
    a.huong('Quan sát chất rắn (quặng Fe<sub>2</sub>O<sub>3</sub>, than cốc) đi xuống và khí đi lên. <b>Chạm vào từng vùng</b> (hoặc bấm nút) để xem phản ứng ở vùng đó.');
    const VUNG = [
      { t: 'Vùng trên', y: 70, h: 60, pt: 'Fe2O3 + 3CO → 2Fe + 3CO2', so: 'Fe: +3 → 0 (bị khử) · C: +2 → +4 (bị oxi hoá)', khu: 'CO', oxh: 'Fe2O3', mau: '#fde68a' },
      { t: 'Vùng giữa', y: 130, h: 50, pt: 'CO2 + C → 2CO', so: 'C trong CO2: +4 → +2 (bị khử) · C (than): 0 → +2 (bị oxi hoá)', khu: 'C', oxh: 'CO2', mau: '#fdba74' },
      { t: 'Vùng dưới (gần cửa gió)', y: 180, h: 40, pt: 'C + O2 → CO2', so: 'C: 0 → +4 (bị oxi hoá) · O: 0 → −2 (bị khử); phản ứng toả nhiều nhiệt', khu: 'C', oxh: 'O2', mau: '#f87171' } ];
    const s = a.svg('0 0 400 270'), nen = a.s('g', {}, s), hat = a.s('g', {}, s), chu = a.s('g', {}, s);
    let chon = 0;
    function veNen() {
      nen.innerHTML = '';
      VUNG.forEach((v, i) => { const w1 = 60 + (v.y - 70) * .35, w2 = 60 + (v.y + v.h - 70) * .35;
        const p = a.s('path', { d: `M${150 - w1} ${v.y} L${150 + w1} ${v.y} L${150 + w2} ${v.y + v.h} L${150 - w2} ${v.y + v.h} Z`, fill: v.mau, opacity: i === chon ? .95 : .45, stroke: i === chon ? '#b91c1c' : 'none', 'stroke-width': 2, style: 'cursor:pointer' }, nen);
        p.addEventListener('click', () => { chon = i; veNen(); moTa(); }); });
      a.s('path', { d: 'M90 70 L60 40 M210 70 L240 40', stroke: 'var(--net2)', 'stroke-width': 3 }, nen);
      a.s('rect', { x: 66, y: 220, width: 168, height: 30, rx: 4, fill: '#78350f' }, nen); a.s('rect', { x: 70, y: 232, width: 160, height: 14, fill: '#f97316' }, nen); a.chu(nen, 150, 243, 'gang nóng chảy', { 'font-size': 9.5, style: 'fill:#fff' });
      a.s('path', { d: 'M20 200 L66 200 M66 200 l-8 -5 M66 200 l-8 5', stroke: '#0ea5e9', 'stroke-width': 3, fill: 'none' }, nen); a.chu(nen, 30, 190, 'không khí nóng', { 'font-size': 9, 'text-anchor': 'start', style: 'fill:#0284c7' });
      a.chu(nen, 150, 30, 'quặng Fe₂O₃ + than cốc ↓', { 'font-size': 10.5, 'font-weight': 700 }); a.chu(nen, 150, 16, '↑ khí CO₂, CO thoát ra', { 'font-size': 9.5, class: 'mo' });
      VUNG.forEach((v, i) => a.chu(nen, 150, v.y + v.h / 2 + 4, v.t, { 'font-size': 10, 'font-weight': 700, style: 'fill:#1e293b;pointer-events:none' }));
      // bảng bên phải
      chu.innerHTML = ''; const v = VUNG[chon];
      a.s('rect', { x: 262, y: 60, width: 132, height: 150, rx: 10, fill: 'var(--card)', stroke: 'var(--line)' }, chu);
      a.chu(chu, 328, 80, v.t, { 'font-size': 11, 'font-weight': 800 });
      const t = a.chu(chu, 328, 104, '', { 'font-size': 10, 'font-weight': 700 }); ctSVG(t, v.pt);
      const k1 = a.chu(chu, 328, 140, '', { 'font-size': 11 }); ctSVG(k1, 'Chất khử: ' + v.khu); k1.style.fill = '#dc2626';
      const k2 = a.chu(chu, 328, 160, '', { 'font-size': 11 }); ctSVG(k2, 'Chất oxi hoá: ' + v.oxh); k2.style.fill = '#2563eb';
    }
    const P = Array.from({ length: 34 }, (_, i) => ({ ran: i < 16, x: 100 + Math.random() * 100, y: Math.random() * 200 + 30, ph: Math.random() * 6 }));
    a.lap((dt, tt) => {
      hat.innerHTML = '';
      P.forEach(p => { if (p.ran) { p.y += 12 * dt; if (p.y > 218) { p.y = 40; p.x = 100 + Math.random() * 100; } a.s('rect', { x: p.x - 3, y: p.y - 3, width: 6, height: 6, fill: p.ph > 3 ? '#7c2d12' : '#1f2937', opacity: .8 }, hat); }
        else { p.y -= 40 * dt; p.x += Math.sin(tt * 2 + p.ph) * .4; if (p.y < 40) { p.y = 216; p.x = 90 + Math.random() * 120; } const zone = p.y > 180 ? 'CO2' : p.y > 130 ? 'CO' : 'CO2';
          a.s('circle', { cx: p.x, cy: p.y, r: 3.5, fill: zone === 'CO' ? '#a855f7' : '#64748b', opacity: .7 }, hat); } });
    });
    function moTa() { const v = VUNG[chon]; a.bao(`<b>${v.t}</b>: ${ctHTML(v.pt)}<br>${v.so}.`); }
    const h = a.hang(a.nhom('Vùng của lò'));
    VUNG.forEach((v, i) => a.nut(v.t, () => { chon = i; veNen(); moTa(); }, { vao: h, nho: true, phu: true }));
    veNen(); moTa();
    a.ket(`<p>Trong quá trình luyện gang:</p><p>• C + O<sub>2</sub> → CO<sub>2</sub> (C là chất khử, O<sub>2</sub> là chất oxi hoá; toả nhiệt).</p><p>• CO<sub>2</sub> + C → 2CO (C là chất khử, CO<sub>2</sub> là chất oxi hoá).</p>
      <p>• Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub> (CO là chất khử, Fe<sub>2</sub>O<sub>3</sub> là chất oxi hoá).</p><p>Đây là các phản ứng oxi hoá – khử <b>có lợi</b>, dùng để sản xuất gang, thép.</p>`);
    a.hoi([{ h: 'Trong phản ứng Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub>, chất khử là', d: ['Fe<sub>2</sub>O<sub>3</sub>', 'CO', 'Fe', 'CO<sub>2</sub>'], dung: 1 },
      { h: 'Trong phản ứng CO<sub>2</sub> + C → 2CO, carbon trong CO<sub>2</sub> có số oxi hoá thay đổi thế nào?', d: ['0 → +2', '+4 → +2', '+2 → +4', '+4 → 0'], dung: 1 }]);
  } },

/* ---------- 3. Chuỗi phản ứng oxi hoá – khử trong tự nhiên và sản xuất ---------- */
{ id: 'chuoi-phan-ung', ic: '⛈️', ten: 'Sấm sét làm “phân đạm” cho lúa & sản xuất sulfuric acid',
  mo: '“Lúa chiêm lấp ló đầu bờ, hễ nghe tiếng sấm phất cờ mà lên”: theo dấu nguyên tố N (hoặc S) qua từng phản ứng, xem số oxi hoá thay đổi.',
  chay(a) {
    a.huong('Chọn chuỗi phản ứng, bấm <b>Bước tiếp theo</b>. Thanh màu cho biết số oxi hoá của nguyên tố đang theo dõi. Bước nào có số oxi hoá thay đổi là phản ứng oxi hoá – khử.');
    const CHUOI = {
      N: { t: 'Sấm sét – đạm cho lúa', nt: 'N', b: [['N2', 0, 'khí nitrogen trong không khí'], ['NO', 2, 'N2 + O2 → 2NO (nhờ tia lửa điện của sét)'], ['NO2', 4, '2NO + O2 → 2NO2'], ['HNO3', 5, '4NO2 + O2 + 2H2O → 4HNO3 (tan vào nước mưa)'], ['NO3^-', 5, 'gốc nitrate trong đất: chất đạm cho cây lúa']] },
      S: { t: 'Sản xuất sulfuric acid', nt: 'S', b: [['S', 0, 'nguyên liệu: sulfur'], ['SO2', 4, 'S + O2 → SO2'], ['SO3', 6, '2SO2 + O2 → 2SO3 (có xúc tác, đun nóng)'], ['H2SO4', 6, 'SO3 + H2O → H2SO4']] } };
    const s = a.svg('0 0 400 260'), g = a.s('g', {}, s);
    let ch = 'N', b = 0, tg = 0;
    a.lap((dt, tt) => {
      g.innerHTML = ''; const C = CHUOI[ch];
      // trời, sét
      if (ch === 'N') { a.s('rect', { x: 0, y: 0, width: 400, height: 200, fill: '#1e293b' }, g); a.s('ellipse', { cx: 120, cy: 30, rx: 70, ry: 22, fill: '#475569' }, g); a.s('ellipse', { cx: 190, cy: 24, rx: 60, ry: 20, fill: '#64748b' }, g);
        if (b === 1 && Math.sin(tt * 9) > .3) a.s('path', { d: 'M160 40 L140 75 L158 75 L135 110', stroke: '#fde047', 'stroke-width': 4, fill: 'none' }, g);
        if (b >= 3) for (let i = 0; i < 18; i++) { const y = (tt * 120 + i * 29) % 120 + 40; a.s('line', { x1: 40 + i * 19, y1: y, x2: 37 + i * 19, y2: y + 8, stroke: '#7dd3fc', 'stroke-width': 2 }, g); }
        a.s('rect', { x: 0, y: 200, width: 400, height: 60, fill: '#854d0e', opacity: .6 }, g);
        for (let i = 0; i < 12; i++) { const hh = 12 + (b >= 4 ? 26 : 8); a.s('path', { d: `M${30 + i * 32} 200 q-6 ${-hh / 2} -2 ${-hh} M${30 + i * 32} 200 q6 ${-hh / 2} 3 ${-hh}`, stroke: b >= 4 ? '#16a34a' : '#84cc16', 'stroke-width': 2.5, fill: 'none' }, g); } }
      else { a.s('rect', { x: 0, y: 0, width: 400, height: 260, fill: 'var(--goi)' }, g); [0, 1, 2, 3].forEach(i => a.s('rect', { x: 20 + i * 96, y: 40, width: 70, height: 70, rx: 10, fill: i <= b ? '#fde68a' : 'var(--card)', stroke: 'var(--line)' }, g)); }
      // dãy chất và thang số oxi hoá
      const n = C.b.length, w = 360 / n;
      C.b.forEach(([ct, so], i) => { const x = 20 + i * w + w / 2, y = ch === 'N' ? 150 : 80, on = i <= b;
        const t = a.chu(g, x, y, '', { 'font-size': 15, 'font-weight': 800, opacity: on ? 1 : .25, style: ch === 'N' ? 'fill:#fff' : '' }); ctSVG(t, ct);
        if (i < n - 1) a.chu(g, x + w / 2, y - 4, '→', { 'font-size': 16, opacity: i < b ? 1 : .25, style: ch === 'N' ? 'fill:#fff' : '' });
        const yT = ch === 'N' ? 232 : 200, hT = (so + 4) * 6;
        if (on) { a.s('rect', { x: x - 14, y: yT - hT, width: 28, height: hT, rx: 3, fill: so > 0 ? '#f87171' : '#94a3b8' }, g); a.chu(g, x, yT - hT - 4, (so > 0 ? '+' : '') + so, { 'font-size': 12, 'font-weight': 800, style: ch === 'N' ? 'fill:#fff' : '' }); } });
      a.chu(g, 20, ch === 'N' ? 252 : 220, `số oxi hoá của ${C.nt}`, { 'font-size': 10, 'text-anchor': 'start', style: ch === 'N' ? 'fill:#fde68a' : '' });
    });
    function moTa() { const C = CHUOI[ch], [ct, so, mo] = C.b[b];
      if (b === 0) { a.bao(`Theo dõi nguyên tố <b>${C.nt}</b> bắt đầu từ <b>${ctHTML(ct)}</b> (${mo}), số oxi hoá ${so}.`); return; }
      const so0 = C.b[b - 1][1], doi = so !== so0;
      a.bao(`${ctHTML(mo.replace(/(\d)NO/g, '$1NO'))}<br>Số oxi hoá của ${C.nt}: ${so0 > 0 ? '+' : ''}${so0} → ${so > 0 ? '+' : ''}${so} ⇒ ${doi ? `<b>phản ứng oxi hoá – khử</b> (${C.nt} bị oxi hoá; O<sub>2</sub> là chất oxi hoá)` : '<b>không</b> phải phản ứng oxi hoá – khử (số oxi hoá không đổi)'}.`); }
    a.chon(Object.keys(CHUOI).map(k => [k, CHUOI[k].t]), k => { ch = k; b = 0; moTa(); }, { td: 'Chuỗi phản ứng', dau: 'N', imLang: true });
    const h = a.hang(a.nhom());
    a.nut('➡ Bước tiếp theo', () => { b = Math.min(CHUOI[ch].b.length - 1, b + 1); moTa(); }, { vao: h }); a.nut('↺ Từ đầu', () => { b = 0; moTa(); }, { vao: h, phu: true });
    moTa();
    a.ket(`<p>• Sấm sét: N<sub>2</sub> + O<sub>2</sub> → 2NO; 2NO + O<sub>2</sub> → 2NO<sub>2</sub>; 4NO<sub>2</sub> + O<sub>2</sub> + 2H<sub>2</sub>O → 4HNO<sub>3</sub> — số oxi hoá của N tăng 0 → +2 → +4 → +5: đều là phản ứng oxi hoá – khử, cung cấp đạm (gốc nitrate) cho cây.</p>
      <p>• Sản xuất H<sub>2</sub>SO<sub>4</sub>: S → SO<sub>2</sub> → SO<sub>3</sub> là phản ứng oxi hoá – khử; SO<sub>3</sub> + H<sub>2</sub>O → H<sub>2</sub>SO<sub>4</sub> <b>không</b> phải phản ứng oxi hoá – khử.</p>`);
    a.hoi([{ h: 'Trong chuỗi S → SO<sub>2</sub> → SO<sub>3</sub> → H<sub>2</sub>SO<sub>4</sub>, phản ứng nào không phải phản ứng oxi hoá – khử?', d: ['S → SO<sub>2</sub>', 'SO<sub>2</sub> → SO<sub>3</sub>', 'SO<sub>3</sub> → H<sub>2</sub>SO<sub>4</sub>', 'cả ba đều là phản ứng oxi hoá – khử'], dung: 2 }]);
  } },
] });
