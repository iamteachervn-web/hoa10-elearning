/* Bài 13. Liên kết hydrogen và tương tác van der Waals — 4 mô phỏng */
MP_NAP({ ma: '13', ds: [

/* ---------- 1. Liên kết hydrogen giữa các phân tử ---------- */
{ id: 'lien-ket-hydrogen', ic: '💧', ten: 'Liên kết hydrogen: phân tử nào “nắm tay” được nhau?',
  mo: 'Các phân tử chuyển động: H (δ+) của phân tử này hút cặp electron chưa liên kết của F, O, N ở phân tử khác. So sánh với H₂S, CH₄.',
  chay(a) {
    a.huong('Chọn chất. Đường <b style="color:#dc2626">nét đứt đỏ</b> là liên kết hydrogen giữa H (δ+) và F, O hoặc N (δ−) của phân tử bên cạnh. Kéo nhiệt độ để xem điều gì xảy ra.');
    // mỗi chất: nguyên tử trung tâm, màu, số H, góc các H, có tạo liên kết H không
    const CH = {
      H2O: { tam: 'O', mau: '#ef4444', h: [-52, 52].map(x => x + 90), lk: true }, HF: { tam: 'F', mau: '#84cc16', h: [90], lk: true },
      NH3: { tam: 'N', mau: '#3b82f6', h: [30, 150, 270], lk: true }, H2S: { tam: 'S', mau: '#eab308', h: [-46, 46].map(x => x + 90), lk: false }, CH4: { tam: 'C', mau: '#374151', h: [0, 90, 180, 270], lk: false },
      'H2O+NH3': { tron: true } };
    const s = a.svg('0 0 400 270'), g = a.s('g', {}, s);
    let chat = 'H2O', T = 40, M = [];
    function tao() { M = []; for (let i = 0; i < 16; i++) { const loai = chat === 'H2O+NH3' ? (i % 2 ? 'NH3' : 'H2O') : chat; M.push({ loai, x: 30 + (i % 4) * 95 + Math.random() * 20, y: 30 + Math.floor(i / 4) * 62 + Math.random() * 10, g: Math.random() * 6.28, vx: 0, vy: 0, w: 0 }); } }
    const hPos = m => CH[m.loai].h.map(d => { const r = (d * Math.PI / 180) + m.g; return [m.x + 15 * Math.cos(r), m.y + 15 * Math.sin(r)]; });
    a.lap(dt => {
      const v = 6 + T * 0.55;
      M.forEach(m => { m.vx += (Math.random() - .5) * v * 4 * dt * 10; m.vy += (Math.random() - .5) * v * 4 * dt * 10; m.w += (Math.random() - .5) * 6 * dt;
        const sp = Math.hypot(m.vx, m.vy); if (sp > v) { m.vx *= v / sp; m.vy *= v / sp; } m.w = Math.max(-2, Math.min(2, m.w));
        m.x += m.vx * dt; m.y += m.vy * dt; m.g += m.w * dt;
        if (m.x < 20 || m.x > 380) { m.vx *= -1; m.x = Math.max(20, Math.min(380, m.x)); } if (m.y < 20 || m.y > 235) { m.vy *= -1; m.y = Math.max(20, Math.min(235, m.y)); } });
      // đẩy nhẹ để không chồng lên nhau
      for (let i = 0; i < M.length; i++) for (let j = i + 1; j < M.length; j++) { const dx = M[j].x - M[i].x, dy = M[j].y - M[i].y, d = Math.hypot(dx, dy) || 1; if (d < 34) { const f = (34 - d) / 2; M[i].x -= dx / d * f; M[i].y -= dy / d * f; M[j].x += dx / d * f; M[j].y += dy / d * f; } }
      g.innerHTML = ''; let dem = 0;
      // liên kết hydrogen
      M.forEach((m, i) => { if (!CH[m.loai].lk) return; hPos(m).forEach(([hx, hy]) => { let tot = null, dmin = 30;
        M.forEach((n, j) => { if (i === j || !CH[n.loai].lk) return; const d = Math.hypot(n.x - hx, n.y - hy); if (d < dmin) { dmin = d; tot = n; } });
        if (tot) { dem++; a.s('line', { x1: hx, y1: hy, x2: tot.x, y2: tot.y, stroke: '#dc2626', 'stroke-width': 1.8, 'stroke-dasharray': '3 3' }, g); } }); });
      M.forEach(m => { const c = CH[m.loai];
        hPos(m).forEach(([hx, hy]) => { a.s('line', { x1: m.x, y1: m.y, x2: hx, y2: hy, stroke: '#94a3b8', 'stroke-width': 3 }, g); a.s('circle', { cx: hx, cy: hy, r: 5.5, fill: '#f8fafc', stroke: '#94a3b8' }, g); });
        a.s('circle', { cx: m.x, cy: m.y, r: 10, fill: c.mau }, g); a.chu(g, m.x, m.y + 4, c.tam, { 'font-size': 10, 'font-weight': 800, style: 'fill:#fff' }); });
      a.chu(g, 200, 262, CH[chat] && !CH[chat].tron && !CH[chat].lk ? 'Không có liên kết hydrogen giữa các phân tử' : `Số liên kết hydrogen lúc này: ${dem}`, { 'font-size': 12, 'font-weight': 700, style: 'fill:#dc2626' });
    });
    function moTa() { a.bao({
      H2O: 'Nguyên tử O có độ âm điện lớn và còn <b>2 cặp electron chưa liên kết</b>; H trong H<sub>2</sub>O mang δ+ ⇒ tạo liên kết hydrogen O–H···O.',
      HF: 'F có độ âm điện lớn nhất và còn cặp electron chưa liên kết ⇒ liên kết hydrogen F–H···F.',
      NH3: 'N còn 1 cặp electron chưa liên kết; H mang δ+ ⇒ liên kết hydrogen N–H···N (Hình 13.1).',
      H2S: 'S có độ âm điện nhỏ (2,58) nên H trong H<sub>2</sub>S gần như không mang δ+ đủ lớn ⇒ <b>không</b> tạo liên kết hydrogen.',
      CH4: 'C không có cặp electron chưa liên kết, H trong CH<sub>4</sub> không đủ dương ⇒ <b>không</b> có liên kết hydrogen.',
      'H2O+NH3': 'Liên kết hydrogen cũng tạo thành giữa các phân tử <b>khác loại</b>: H của H<sub>2</sub>O với N của NH<sub>3</sub> và ngược lại (Hình 13.2b).' }[chat]); }
    a.chon(Object.keys(CH).map(k => [k, ctHTML(k)]), k => { chat = k; tao(); moTa(); }, { td: 'Chất', dau: 'H2O', imLang: true });
    a.thanh({ td: 'Nhiệt độ (tốc độ chuyển động)', min: 0, max: 100, gt: 40, hien: v => v < 30 ? 'thấp' : v < 70 ? 'vừa' : 'cao', fn: v => { T = v; } });
    tao(); moTa();
    a.ket(`<p>• <b>Liên kết hydrogen</b> là liên kết hình thành giữa nguyên tử H (đã liên kết với nguyên tử có độ âm điện lớn như F, O, N) với nguyên tử có độ âm điện lớn khác (F, O, N) còn cặp electron hoá trị chưa liên kết.</p>
      <p>• Có thể tạo giữa các phân tử cùng loại hoặc khác loại. H<sub>2</sub>S, CH<sub>4</sub> không tạo liên kết hydrogen.</p>
      <p>• Nhiệt độ càng cao, các phân tử chuyển động càng mạnh, liên kết hydrogen bị phá vỡ càng nhiều.</p>`);
    a.hoi([{ h: 'Chất nào sau đây <b>không</b> tạo liên kết hydrogen giữa các phân tử?', d: ['H<sub>2</sub>O', 'NH<sub>3</sub>', 'HF', 'CH<sub>4</sub>'], dung: 3 },
      { h: 'Trong ethanol CH<sub>3</sub>CH<sub>2</sub>OH, nguyên tử H nào tham gia liên kết hydrogen?', d: ['H liên kết với C', 'H liên kết với O', 'mọi nguyên tử H', 'không có H nào'], dung: 1, g: 'Chỉ H gắn với O (độ âm điện lớn) mới mang δ+ đủ lớn.' }]);
  } },

/* ---------- 2. Đun nóng: chất nào sôi trước? ---------- */
{ id: 'nhiet-do-soi', ic: '🌡️', ten: 'Đun nóng các chất: chất nào nóng chảy, sôi trước? Vì sao?',
  mo: 'Kéo nhiệt kế: H₂O, H₂S, CH₄ (Bảng 13.1); F₂, Cl₂, Br₂, I₂ (Bảng 13.2); pentane và neopentane. Thấy trạng thái từng chất thay đổi.',
  chay(a) {
    a.huong('Chọn nhóm chất, kéo <b>nhiệt độ</b>. Mỗi ống cho thấy trạng thái: <b>rắn</b> (hạt xếp chặt, chỉ dao động), <b>lỏng</b> (sát nhau, trượt qua nhau), <b>khí</b> (rời xa, bay tự do).');
    const BO = {
      h: { t: 'H₂O, H₂S, CH₄', ds: [['H2O', 0, 100, '#3b82f6'], ['H2S', -85.6, -60.75, '#eab308'], ['CH4', -182.5, -161.58, '#6b7280']], min: -200, max: 120, gt: -190 },
      x: { t: 'F₂, Cl₂, Br₂, I₂', ds: [['F2', -219.6, -188.1, '#a3e635'], ['Cl2', -101.0, -34.1, '#22c55e'], ['Br2', -7.3, 59.2, '#b45309'], ['I2', 113.6, 185.5, '#7c3aed']], min: -230, max: 200, gt: -225 },
      p: { t: 'pentane, neopentane', ds: [['pentane', null, 36, '#0ea5e9'], ['neopentane', null, 9.5, '#f97316']], min: 0, max: 50, gt: 0 } };
    const s = a.svg('0 0 400 270'), g = a.s('g', {}, s);
    let bo = 'h', T = -190; const HAT = {};
    function trangThai(c) { return c[1] !== null && T < c[1] ? 'rắn' : T < c[2] ? 'lỏng' : 'khí'; }
    function tao() { Object.keys(HAT).forEach(k => delete HAT[k]); BO[bo].ds.forEach(c => { HAT[c[0]] = Array.from({ length: 18 }, (_, i) => ({ i, x: 0, y: 0, vx: (Math.random() - .5) * 60, vy: (Math.random() - .5) * 60 })); }); }
    a.lap((dt, tt) => {
      g.innerHTML = ''; const ds = BO[bo].ds, n = ds.length, w = 300 / n;
      // nhiệt kế
      const B = BO[bo], hT = (T - B.min) / (B.max - B.min) * 190;
      a.s('rect', { x: 20, y: 30, width: 12, height: 196, rx: 6, fill: 'var(--card)', stroke: 'var(--net2)' }, g); a.s('rect', { x: 23, y: 224 - hT, width: 6, height: hT + 2, fill: '#ef4444' }, g); a.s('circle', { cx: 26, cy: 232, r: 10, fill: '#ef4444' }, g);
      a.chu(g, 26, 20, String(Math.round(T * 10) / 10).replace('.', ',').replace('-', '−') + ' °C', { 'font-size': 12, 'font-weight': 800 });
      ds.forEach((c, k) => {
        const x0 = 70 + k * w + w / 2 - 34, y0 = 40, W = 68, H = 170, tt2 = trangThai(c), P = HAT[c[0]];
        a.s('rect', { x: x0, y: y0, width: W, height: H, rx: 10, fill: 'var(--goi)', stroke: 'var(--kinhvien)', 'stroke-width': 2 }, g);
        P.forEach((p, i) => {
          let x, y;
          if (tt2 === 'rắn') { x = x0 + 12 + (i % 4) * 14.5 + Math.sin(tt * 18 + i) * 1.3; y = y0 + H - 12 - Math.floor(i / 4) * 14 + Math.cos(tt * 21 + i) * 1.3; p.x = x; p.y = y; }
          else if (tt2 === 'lỏng') { p.vx += (Math.random() - .5) * 300 * dt; p.vy += (Math.random() - .5) * 300 * dt + 60 * dt; const v = Math.hypot(p.vx, p.vy); if (v > 40) { p.vx *= 40 / v; p.vy *= 40 / v; }
            p.x = (p.x || x0 + W / 2) + p.vx * dt; p.y = (p.y || y0 + H - 20) + p.vy * dt; const day = y0 + H - 82;
            if (p.x < x0 + 7) { p.x = x0 + 7; p.vx = Math.abs(p.vx); } if (p.x > x0 + W - 7) { p.x = x0 + W - 7; p.vx = -Math.abs(p.vx); } if (p.y > y0 + H - 7) { p.y = y0 + H - 7; p.vy = -Math.abs(p.vy); } if (p.y < day) { p.y = day; p.vy = Math.abs(p.vy); } x = p.x; y = p.y; }
          else { const v0 = 140; p.vx = p.vx || v0; p.x = (p.x || x0 + W / 2) + p.vx * dt; p.y = (p.y || y0 + 30) + p.vy * dt; const vv = Math.hypot(p.vx, p.vy); if (vv < v0) { p.vx *= v0 / vv; p.vy *= v0 / vv; }
            if (p.x < x0 + 6 || p.x > x0 + W - 6) { p.vx *= -1; p.x = Math.max(x0 + 6, Math.min(x0 + W - 6, p.x)); } if (p.y < y0 + 6 || p.y > y0 + H - 6) { p.vy *= -1; p.y = Math.max(y0 + 6, Math.min(y0 + H - 6, p.y)); } x = p.x; y = p.y; }
          a.s('circle', { cx: x, cy: y, r: 5.5, fill: c[3], opacity: .9 }, g);
        });
        const t1 = a.chu(g, x0 + W / 2, y0 + H + 20, '', { 'font-size': 13, 'font-weight': 800 }); ctSVG(t1, c[0]);
        a.chu(g, x0 + W / 2, y0 + H + 36, tt2, { 'font-size': 12, 'font-weight': 700, style: tt2 === 'khí' ? 'fill:#dc2626' : tt2 === 'lỏng' ? 'fill:#2563eb' : 'fill:#475569' });
        a.chu(g, x0 + W / 2, y0 - 6, (c[1] !== null ? 'nc ' + String(c[1]).replace('.', ',').replace('-', '−') + ' · ' : '') + 's ' + String(c[2]).replace('.', ',').replace('-', '−'), { 'font-size': 8.5, class: 'mo' });
      });
    });
    function moTa() { a.bao({
      h: 'Kéo nhiệt độ tăng dần: <b>CH<sub>4</sub></b> sôi đầu tiên (−161,58 °C), rồi <b>H<sub>2</sub>S</b> (−60,75 °C), cuối cùng <b>H<sub>2</sub>O</b> (100 °C). H<sub>2</sub>O có nhiệt độ nóng chảy, nhiệt độ sôi cao hơn nhiều vì giữa các phân tử H<sub>2</sub>O có <b>liên kết hydrogen</b>.',
      x: 'F<sub>2</sub> → Cl<sub>2</sub> → Br<sub>2</sub> → I<sub>2</sub>: số electron (và khối lượng phân tử) tăng ⇒ <b>tương tác van der Waals tăng</b> ⇒ nhiệt độ nóng chảy, nhiệt độ sôi tăng. Ở nhiệt độ phòng (25 °C): F<sub>2</sub>, Cl<sub>2</sub> là khí, Br<sub>2</sub> lỏng, I<sub>2</sub> rắn.',
      p: 'Pentane (mạch không nhánh) sôi ở 36 °C, neopentane (mạch nhánh) sôi ở 9,5 °C: hai chất có cùng công thức C<sub>5</sub>H<sub>12</sub> nhưng diện tích tiếp xúc giữa các phân tử pentane lớn hơn ⇒ tương tác van der Waals mạnh hơn ⇒ sôi ở nhiệt độ cao hơn.' }[bo]); }
    const tT = a.thanh({ td: 'Nhiệt độ', min: -200, max: 120, buoc: .5, gt: -190, don: ' °C', fn: v => { T = v; } });
    a.chon(Object.keys(BO).map(k => [k, BO[k].t]), k => { bo = k; const B = BO[k]; tT.el.min = B.min; tT.el.max = B.max; tT.dat(B.gt); tao(); moTa(); }, { td: 'Nhóm chất', dau: 'h', imLang: true });
    a.dk.insertBefore(a.dk.lastElementChild, tT.el.closest('.nhom'));
    tao(); moTa();
    a.ket(`<p>• <b>Liên kết hydrogen</b> làm tăng nhiệt độ nóng chảy, nhiệt độ sôi của nước (H<sub>2</sub>O cao hơn nhiều so với H<sub>2</sub>S, CH<sub>4</sub>).</p>
      <p>• <b>Tương tác van der Waals</b> tăng khi số electron (khối lượng phân tử) tăng, khi diện tích tiếp xúc giữa các phân tử tăng ⇒ nhiệt độ nóng chảy, nhiệt độ sôi tăng.</p>`);
    a.hoi([{ h: 'Vì sao nhiệt độ sôi của H<sub>2</sub>O (100 °C) cao hơn nhiều so với H<sub>2</sub>S (−60,75 °C)?', d: ['Vì H<sub>2</sub>O nặng hơn', 'Vì giữa các phân tử H<sub>2</sub>O có liên kết hydrogen', 'Vì H<sub>2</sub>S có liên kết ion', 'Vì O có bán kính lớn hơn S'], dung: 1 },
      { h: 'Ở 25 °C, chất nào ở thể lỏng?', d: ['F<sub>2</sub>', 'Cl<sub>2</sub>', 'Br<sub>2</sub>', 'I<sub>2</sub>'], dung: 2 }]);
  } },

/* ---------- 3. Nước đá nổi trên nước ---------- */
{ id: 'nuoc-da', ic: '🧊', ten: 'Vì sao nước đá nổi trên mặt nước?',
  mo: 'Cấu trúc nước đá “rỗng” nhờ liên kết hydrogen. Kéo nhiệt độ từ −10 °C đến 20 °C: xem cấu trúc và khối lượng riêng thay đổi.',
  chay(a) {
    a.huong('Kéo nhiệt độ. Bên trái: các phân tử nước (O đỏ, H trắng), <span style="color:#dc2626">nét đứt</span> là liên kết hydrogen. Bên phải: đồ thị khối lượng riêng của nước.');
    const s = a.svg('0 0 400 260'), g = a.s('g', {}, s);
    let T = -10;
    // vị trí mạng lục giác (nước đá) và vị trí ngẫu nhiên đặc hơn (nước lỏng)
    const DA = [], LONG = [];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 4; c++) { const x = 30 + c * 44 + (r % 2) * 22, y = 40 + r * 38; DA.push([x, y + ((c + r) % 2 ? 9 : -9)]); }
    for (let i = 0; i < DA.length + 4; i++) LONG.push([28 + (i % 6) * 30 + (Math.floor(i / 6) % 2) * 12 + (Math.random() - .5) * 8, 92 + Math.floor(i / 6) * 32 + (Math.random() - .5) * 8]);
    const BANG = [[0, .99984], [2, .99994], [4, .99997], [6, .99994], [8, .99985], [10, .99970], [15, .99910], [20, .99821]];   // khối lượng riêng của nước (g/mL)
    function rho(t) { if (t < 0) return 0.917; for (let i = 1; i < BANG.length; i++) if (t <= BANG[i][0]) { const [t0, r0] = BANG[i - 1], [t1, r1] = BANG[i]; return r0 + (r1 - r0) * (t - t0) / (t1 - t0); } return BANG[BANG.length - 1][1]; }
    a.lap((dt, tt) => {
      g.innerHTML = ''; const da = T < 0, n = da ? DA.length : LONG.length;
      a.s('rect', { x: 14, y: 16, width: 210, height: 230, rx: 12, fill: da ? '#e0f2fe' : '#bfdbfe', opacity: .5 }, g);
      const P = [];
      for (let i = 0; i < n; i++) { const [x, y] = da ? DA[i] : LONG[i]; const k = da ? 1 : 4; P.push([x + Math.sin(tt * 3 + i) * k, y + Math.cos(tt * 2.7 + i * 1.3) * k]); }
      // liên kết hydrogen (nối các hàng xóm gần)
      P.forEach((p, i) => P.forEach((q, j) => { if (j <= i) return; const d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < (da ? 48 : 36) && (da || Math.sin(tt + i * j) > .2)) a.s('line', { x1: p[0], y1: p[1], x2: q[0], y2: q[1], stroke: '#dc2626', 'stroke-dasharray': '3 3', 'stroke-width': 1.2, opacity: .7 }, g); }));
      P.forEach(([x, y], i) => { const r = i * 1.7 + (da ? 0 : tt); a.s('circle', { cx: x + 9 * Math.cos(r), cy: y + 9 * Math.sin(r), r: 4, fill: '#f8fafc', stroke: '#94a3b8' }, g); a.s('circle', { cx: x + 9 * Math.cos(r + 1.82), cy: y + 9 * Math.sin(r + 1.82), r: 4, fill: '#f8fafc', stroke: '#94a3b8' }, g); a.s('circle', { cx: x, cy: y, r: 7, fill: '#ef4444' }, g); });
      a.chu(g, 119, 256, da ? 'Nước đá: mỗi phân tử tạo 4 liên kết H, cấu trúc rỗng' : 'Nước lỏng: liên kết H bị phá vỡ một phần, phân tử xếp sát hơn', { 'font-size': 9.5, class: 'mo' });
      // so sánh đá – nước lỏng
      a.chu(g, 315, 26, 'Khối lượng riêng (g/mL)', { 'font-size': 10, class: 'mo' });
      [[0.917, 'nước đá', '#7dd3fc', T < 0], [0.99984, 'nước lỏng 0 °C', '#3b82f6', T >= 0]].forEach(([v, t, m, on], i) => { const w = v * 120;
        a.s('rect', { x: 250, y: 36 + i * 24, width: w, height: 16, rx: 3, fill: m, opacity: on ? 1 : .45 }, g); a.chu(g, 254, 48 + i * 24, t + ': ' + String(v).replace('.', ','), { 'font-size': 9.5, 'text-anchor': 'start', style: 'fill:#0f172a' }); });
      // đồ thị phóng to 0–20 °C
      const X0 = 252, X1 = 390, Y0 = 186, Y1 = 98, xT = t => X0 + t / 20 * (X1 - X0), yR = r => Y0 - (r - .9981) / (1.00005 - .9981) * (Y0 - Y1);
      a.s('line', { x1: X0, y1: Y0, x2: X1, y2: Y0, stroke: 'var(--net)' }, g); a.s('line', { x1: X0, y1: Y0, x2: X0, y2: Y1, stroke: 'var(--net)' }, g);
      let d = ''; for (let t = 0; t <= 20; t += .5) d += (t ? ' L' : 'M') + xT(t).toFixed(1) + ' ' + yR(rho(t)).toFixed(1);
      a.s('path', { d, fill: 'none', stroke: '#2563eb', 'stroke-width': 2 }, g);
      if (T >= 0) a.s('circle', { cx: xT(T), cy: yR(rho(T)), r: 5, fill: '#dc2626' }, g);
      [0, 4, 10, 20].forEach(t => a.chu(g, xT(t), Y0 + 12, String(t), { 'font-size': 9 })); a.chu(g, 321, Y0 + 24, 'nước lỏng, 0–20 °C (phóng to)', { 'font-size': 9, class: 'mo' });
      a.chu(g, xT(4), yR(.99997) - 7, 'lớn nhất ở 4 °C', { 'font-size': 9, style: 'fill:#2563eb', 'font-weight': 700 });
      // cốc đá nổi nhỏ
      a.s('rect', { x: 262, y: 222, width: 50, height: 28, fill: '#bfdbfe', opacity: .7 }, g); a.s('rect', { x: 276, y: 214, width: 20, height: 18, fill: '#e0f2fe', stroke: '#7dd3fc' }, g); a.chu(g, 348, 240, 'đá nổi trên nước', { 'font-size': 10, class: 'mo' });
    });
    function moTa() { a.bao(T < 0 ? `Ở ${T} °C: <b>nước đá</b>. Mỗi phân tử nước tạo <b>4 liên kết hydrogen</b> với các phân tử xung quanh (cấu trúc tứ diện) ⇒ mạng tinh thể khá <b>“rỗng”</b> ⇒ nước đá nhẹ hơn nước lỏng (khoảng 0,917 g/mL) nên <b>nổi</b>.` :
      T <= 4 ? `Từ 0 °C đến 4 °C: các cấu trúc tứ diện bị phá vỡ một phần, phân tử nước <b>xếp lại gần nhau hơn</b> ⇒ khối lượng riêng <b>tăng dần</b>, lớn nhất ở khoảng 4 °C.` :
      `Trên 4 °C: khoảng cách giữa các phân tử nước tăng ⇒ khối lượng riêng <b>giảm</b>.`); }
    a.thanh({ td: 'Nhiệt độ', min: -10, max: 20, buoc: 1, gt: -10, don: ' °C', fn: v => { T = v; moTa(); } });
    moTa();
    a.ket(`<p>• Trong nước đá, mỗi phân tử H<sub>2</sub>O tạo 4 liên kết hydrogen với 4 phân tử xung quanh, tạo cấu trúc tứ diện khá “rỗng” ⇒ <b>nước đá nhẹ hơn nước lỏng</b>, nổi trên mặt nước.</p>
      <p>• Từ 0 °C đến 4 °C khối lượng riêng của nước tăng; trên 4 °C khối lượng riêng giảm. Nhờ vậy, mùa đông nước đá nổi phía trên, bên dưới vẫn là nước lỏng cho sinh vật sống.</p>`);
    a.hoi([{ h: 'Nước đá nổi trên nước lỏng vì', d: ['nước đá có khối lượng phân tử nhỏ hơn', 'liên kết hydrogen tạo cấu trúc rỗng làm nước đá nhẹ hơn', 'nước đá không có liên kết hydrogen', 'nước đá chứa nhiều không khí'], dung: 1 }]);
  } },

/* ---------- 4. Tương tác van der Waals: lưỡng cực tạm thời ---------- */
{ id: 'van-der-waals', ic: '🌫️', ten: 'Tương tác van der Waals: lưỡng cực tạm thời và diện tích tiếp xúc',
  mo: 'Đám mây electron luôn chuyển động tạo lưỡng cực tạm thời, gây ra lưỡng cực ở nguyên tử bên cạnh. Pentane và neopentane: diện tích tiếp xúc khác nhau.',
  chay(a) {
    a.huong('Chế độ <b>Lưỡng cực tạm thời</b>: quan sát đám mây electron (xanh) dao động. Chế độ <b>Diện tích tiếp xúc</b>: so sánh hai phân tử C<sub>5</sub>H<sub>12</sub>.');
    const s = a.svg('0 0 400 250'), g = a.s('g', {}, s);
    let che = 'lc', dong = true, tg = 0, lech = 0;
    function nguyenTu(x, y, d, nhan) {
      a.s('ellipse', { cx: x + d * 14, cy: y, rx: 46, ry: 42, fill: '#93c5fd', opacity: .55 }, g);
      a.s('circle', { cx: x, cy: y, r: 9, fill: '#ef4444' }, g);
      if (Math.abs(d) > .3) { a.chu(g, x - Math.sign(d) * 38, y - 44, 'δ+', { 'font-size': 14, 'font-weight': 800, style: 'fill:#dc2626' }); a.chu(g, x + Math.sign(d) * 38, y - 44, 'δ−', { 'font-size': 14, 'font-weight': 800, style: 'fill:#2563eb' }); }
      if (nhan) a.chu(g, x, y + 66, nhan, { 'font-size': 11, class: 'mo' });
    }
    a.lap((dt, tt) => {
      g.innerHTML = '';
      if (che === 'lc') {
        if (dong) { tg += dt; lech = Math.sin(tg * 1.3) * Math.sin(tg * .37 + 1); }
        const d1 = lech, d2 = Math.abs(d1) > .3 ? d1 * .8 : d1 * .3;
        nguyenTu(120, 110, d1, 'nguyên tử 1'); nguyenTu(280, 110, d2, 'nguyên tử 2');
        if (Math.abs(d1) > .3) { a.s('path', { d: 'M185 110 L215 110 M185 110 l7 -5 M185 110 l7 5 M215 110 l-7 -5 M215 110 l-7 5', stroke: '#dc2626', 'stroke-width': 2, fill: 'none' }, g); a.chu(g, 200, 100, 'hút', { 'font-size': 11, style: 'fill:#dc2626' }); }
        a.chu(g, 200, 225, Math.abs(d1) > .3 ? 'Lưỡng cực ở nguyên tử 1 gây ra lưỡng cực ở nguyên tử 2 → hút nhau' : 'Electron phân bố đều: chưa có lưỡng cực', { 'font-size': 10.5, 'font-weight': 700 });
      } else {
        // pentane: mạch zic zắc; neopentane: gần cầu
        const zz = (x0, y0) => { let d = ''; for (let i = 0; i < 5; i++) { const x = x0 + i * 24, y = y0 + (i % 2 ? 12 : -12); d += (i ? ' L' : 'M') + x + ' ' + y; } return d; };
        [[40, 70], [40, 110]].forEach(([x, y]) => { a.s('path', { d: zz(x, y), fill: 'none', stroke: '#94a3b8', 'stroke-width': 26, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: .35 }, g);
          a.s('path', { d: zz(x, y), fill: 'none', stroke: '#374151', 'stroke-width': 4 }, g); for (let i = 0; i < 5; i++) a.s('circle', { cx: x + i * 24, cy: y + (i % 2 ? 12 : -12), r: 7, fill: '#374151' }, g); });
        a.s('rect', { x: 34, y: 86, width: 108, height: 8, fill: '#dc2626', opacity: .5 }, g);
        a.chu(g, 90, 160, 'pentane (sôi 36 °C)', { 'font-size': 12, 'font-weight': 700 }); a.chu(g, 90, 176, 'tiếp xúc dọc cả mạch', { 'font-size': 10.5, class: 'mo' });
        [[270, 90], [326, 90]].forEach(([x, y]) => { a.s('circle', { cx: x, cy: y, r: 30, fill: '#94a3b8', opacity: .35 }, g);
          a.s('circle', { cx: x, cy: y, r: 7, fill: '#374151' }, g); [[0, -20], [20, 0], [0, 20], [-20, 0]].forEach(([dx, dy]) => { a.s('line', { x1: x, y1: y, x2: x + dx, y2: y + dy, stroke: '#374151', 'stroke-width': 4 }, g); a.s('circle', { cx: x + dx, cy: y + dy, r: 7, fill: '#374151' }, g); }); });
        a.s('rect', { x: 295, y: 84, width: 6, height: 12, fill: '#dc2626', opacity: .5 }, g);
        a.chu(g, 298, 160, 'neopentane (sôi 9,5 °C)', { 'font-size': 12, 'font-weight': 700 }); a.chu(g, 298, 176, 'gần hình cầu: tiếp xúc ít', { 'font-size': 10.5, class: 'mo' });
        a.chu(g, 200, 215, 'Vùng đỏ: diện tích tiếp xúc giữa hai phân tử', { 'font-size': 11, style: 'fill:#dc2626' });
      }
    });
    a.chon([['lc', 'Lưỡng cực tạm thời'], ['dt', 'Diện tích tiếp xúc (C₅H₁₂)']], k => { che = k;
      a.bao(k === 'lc' ? 'Electron luôn chuyển động nên có lúc đám mây electron lệch về một phía ⇒ <b>lưỡng cực tạm thời</b> (một đầu δ−, một đầu δ+). Lưỡng cực này làm đám mây electron của nguyên tử bên cạnh bị lệch theo ⇒ hai lưỡng cực hút nhau: <b>tương tác van der Waals</b>.'
        : 'Pentane mạch thẳng nằm sát nhau trên diện tích lớn ⇒ tương tác van der Waals mạnh hơn neopentane (gần cầu) ⇒ nhiệt độ sôi cao hơn (36 °C so với 9,5 °C).'); }, { td: 'Chế độ', dau: 'lc' });
    a.nut('⏯ Dừng / chạy', () => { dong = !dong; }, { phu: true });
    a.ket(`<p>• <b>Tương tác van der Waals</b> là tương tác tĩnh điện lưỡng cực – lưỡng cực giữa các nguyên tử hay phân tử (kể cả khí hiếm, phân tử không phân cực nhờ lưỡng cực tạm thời).</p>
      <p>• Tương tác van der Waals tăng khi số electron (khối lượng phân tử) tăng và khi diện tích tiếp xúc giữa các phân tử tăng ⇒ nhiệt độ nóng chảy, nhiệt độ sôi tăng.</p>`);
    a.hoi([{ h: 'Pentane có nhiệt độ sôi cao hơn neopentane vì', d: ['pentane có nhiều nguyên tử hơn', 'diện tích tiếp xúc giữa các phân tử pentane lớn hơn', 'pentane có liên kết hydrogen', 'neopentane có khối lượng phân tử lớn hơn'], dung: 1 }]);
  } },
] });
