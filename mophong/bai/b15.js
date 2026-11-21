/* Bài 15. Phản ứng oxi hoá – khử — 3 mô phỏng */
const DAD15 = { H: 2.20, C: 2.55, N: 3.04, O: 3.44, Cl: 3.16, Na: 0.93 };
const HT15 = { H: 1, C: 4, N: 5, O: 6, Cl: 7, Na: 1 };
const soOx = v => v === 0 ? '0' : (v > 0 ? '+' : '−') + Math.abs(v);

MP_NAP({ ma: '15', ds: [

/* ---------- 1. Số oxi hoá: dồn electron liên kết về nguyên tử có độ âm điện lớn hơn ---------- */
{ id: 'so-oxi-hoa', ic: '🔢', ten: 'Số oxi hoá là gì? “Dồn” electron liên kết về nguyên tử có độ âm điện lớn hơn',
  mo: 'Coi mọi cặp electron liên kết chuyển hẳn về nguyên tử có độ âm điện lớn hơn, rồi đếm điện tích: đó là số oxi hoá.',
  chay(a) {
    a.huong('Chọn chất, bấm <b>Dồn electron</b>. Mỗi nguyên tử: số oxi hoá = số electron hoá trị ban đầu − số electron “giữ được” sau khi dồn.');
    const PT = {
      H2: { n: [['H', -.5, 0], ['H', .5, 0]], l: [[0, 1, 1]] }, Cl2: { n: [['Cl', -.5, 0], ['Cl', .5, 0]], l: [[0, 1, 1]] }, HCl: { n: [['H', -.5, 0], ['Cl', .5, 0]], l: [[0, 1, 1]] },
      H2O: { n: [['H', -1, 0], ['O', 0, 0], ['H', 1, 0]], l: [[0, 1, 1], [1, 2, 1]] }, NH3: { n: [['H', -1, 0], ['N', 0, 0], ['H', 1, 0], ['H', 0, 1]], l: [[0, 1, 1], [1, 2, 1], [1, 3, 1]] },
      CH4: { n: [['H', -1, 0], ['C', 0, 0], ['H', 1, 0], ['H', 0, 1], ['H', 0, -1]], l: [[0, 1, 1], [1, 2, 1], [1, 3, 1], [1, 4, 1]] },
      CO2: { n: [['O', -1, 0], ['C', 0, 0], ['O', 1, 0]], l: [[0, 1, 2], [1, 2, 2]] } };
    const s = a.svg('0 0 400 250'), g = a.s('g', {}, s);
    let pt = 'H2O', t = 0, chay = false;
    const L = 66, CX = 200, CY = 120, RE = 20;
    function ve() {
      g.innerHTML = ''; const P = PT[pt], e = t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      const pos = P.n.map(([k, x, y]) => [CX + x * L, CY + y * L]);
      const giu = P.n.map(() => 0), gop = P.n.map(() => 0), dung = P.n.map(() => []);
      const dot = (x, y, m) => a.s('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: 3.6, fill: m }, g);
      P.l.forEach(([i, j, k]) => {
        const [xi, yi] = pos[i], [xj, yj] = pos[j], d = Math.hypot(xj - xi, yj - yi), ux = (xj - xi) / d, uy = (yj - yi) / d, wx = -uy, wy = ux;
        dung[i].push([Math.sign(ux), Math.sign(uy)]); dung[j].push([-Math.sign(ux), -Math.sign(uy)]);
        const ki = P.n[i][0], kj = P.n[j][0], ve_ = DAD15[ki] > DAD15[kj] ? i : DAD15[kj] > DAD15[ki] ? j : -1;
        gop[i] += k; gop[j] += k;
        for (let m = 0; m < k; m++) { const o = (m - (k - 1) / 2) * 10;
          [-4.5, 4.5].forEach((w, q) => { const x0 = (xi + xj) / 2 + ux * o + wx * w, y0 = (yi + yj) / 2 + uy * o + wy * w;
            let dich = ve_ === -1 ? (q ? j : i) : ve_; giu[dich]++;
            const [dx, dy] = pos[dich], h = dich === i ? 1 : -1, x1 = dx + ux * h * RE + wx * (o * .9 + w), y1 = dy + uy * h * RE + wy * (o * .9 + w);
            dot(x0 + (x1 - x0) * e, y0 + (y1 - y0) * e, ve_ === -1 ? '#94a3b8' : '#d97706'); }); }
      });
      P.n.forEach(([k], i) => { const [x, y] = pos[i]; a.chu(g, x, y + 7, k, { 'font-size': 21, 'font-weight': 800 });
        const con = HT15[k] - gop[i]; giu[i] += con;
        const tu = [[0, -1], [1, 0], [0, 1], [-1, 0]].filter(([dx, dy]) => !dung[i].some(([ux, uy]) => ux === dx && uy === dy))
          .map(v => [v, -dung[i].reduce((t2, [ux, uy]) => t2 + ux * v[0] + uy * v[1], 0)]).sort((p2, q2) => q2[1] - p2[1]).map(v => v[0]);
        for (let p = 0; p < con / 2; p++) { const [dx, dy] = tu[p % tu.length]; [-4.5, 4.5].forEach(w => dot(x + dx * RE - dy * w, y + dy * RE + dx * w, '#2563eb')); }
        if (e > .98) { const so = HT15[k] - giu[i]; a.s('circle', { cx: x, cy: y - 42, r: 15, fill: so > 0 ? '#fee2e2' : so < 0 ? '#dbeafe' : '#f1f5f9', stroke: so > 0 ? '#dc2626' : so < 0 ? '#2563eb' : '#94a3b8' }, g);
          a.chu(g, x, y - 37, soOx(so), { 'font-size': 13, 'font-weight': 800, style: so > 0 ? 'fill:#dc2626' : so < 0 ? 'fill:#2563eb' : 'fill:#475569' }); P.n[i].so = so; }
      });
      if (e > .98) { const ds = P.n.map(n => n[0] + ': ' + soOx(n.so)); const uniq = [...new Set(ds)];
        a.bao(`Sau khi dồn: ${uniq.join(' · ')}. Tổng số oxi hoá trong phân tử = ${P.n.map(n => '(' + soOx(n.so) + ')').join(' + ')} = <b>0</b>. ` +
          (pt === 'H2' || pt === 'Cl2' ? 'Hai nguyên tử giống nhau: cặp electron không lệch ⇒ số oxi hoá trong đơn chất bằng 0 (quy tắc 1).' : 'H thường có số oxi hoá +1, O thường là −2 (quy tắc 2).')); }
      else a.bao('Electron vàng là electron liên kết; electron xanh là electron chưa liên kết. Bấm <b>Dồn electron</b>.');
    }
    a.lap(dt => { if (!chay) return; t = Math.min(1, t + dt * .6); if (t >= 1) chay = false; ve(); });
    a.chon(Object.keys(PT).map(k => [k, ctHTML(k)]), k => { pt = k; t = 0; chay = false; ve(); }, { td: 'Chất', dau: 'H2O', imLang: true });
    const h = a.hang(a.nhom());
    a.nut('➡ Dồn electron', () => { t = 0; chay = true; }, { vao: h }); a.nut('↺ Trả lại', () => { t = 0; chay = false; ve(); }, { vao: h, phu: true });
    ve();
    a.ket(`<p>• <b>Số oxi hoá</b> là điện tích quy ước của nguyên tử trong phân tử khi coi tất cả các electron liên kết đều chuyển hoàn toàn về nguyên tử có độ âm điện lớn hơn.</p>
      <p>• Quy tắc: đơn chất: 0; trong hợp chất, H thường +1, O thường −2, kim loại điển hình có số oxi hoá dương bằng số electron hoá trị; tổng số oxi hoá trong phân tử bằng 0, trong ion bằng điện tích ion.</p>`);
    a.hoi([{ h: 'Số oxi hoá của N trong NH<sub>3</sub> là', d: ['+3', '−3', '+5', '0'], dung: 1 }, { h: 'Số oxi hoá của C trong CO<sub>2</sub> là', d: ['+2', '−4', '+4', '0'], dung: 2 }]);
  } },

/* ---------- 2. Đinh sắt vào dung dịch CuSO4 / H2SO4 loãng ---------- */
{ id: 'dinh-sat', ic: '🔩', ten: 'Thí nghiệm ảo: đinh sắt vào dung dịch CuSO₄ và dung dịch H₂SO₄ loãng',
  mo: 'Xác định chất oxi hoá, chất khử: xem đồng đỏ bám vào đinh sắt, khí thoát ra, và các electron chuyển từ Fe sang Cu²⁺ hoặc H⁺.',
  chay(a) {
    a.huong('Chọn thí nghiệm, bấm <b>Thả đinh sắt</b>. Kéo thanh thời gian để xem tiếp. Chuyển sang <b>Nhìn vi mô</b> để thấy electron đi từ đâu đến đâu.');
    const s = a.svg('0 0 400 270'), vi = a.s('g', {}, s), vm = a.s('g', {}, s);
    let tn = 'cu', tha = false, tg = 0;
    const dd = a.s('rect', { x: 152, y: 92, width: 96, height: 150, rx: 10, fill: '#38bdf8' }, vi);
    a.s('path', { d: 'M148 30 L148 236 Q148 252 164 252 L236 252 Q252 252 252 236 L252 30', fill: 'none', stroke: 'var(--kinhvien)', 'stroke-width': 3 }, vi);
    const dinh = a.s('g', {}, vi), lop = a.s('rect', { x: 192, y: 92, width: 16, height: 140, rx: 3, fill: '#b45309', opacity: 0 }, dinh);
    a.s('rect', { x: 194, y: 20, width: 12, height: 212, rx: 3, fill: '#9ca3af' }, dinh); a.s('rect', { x: 186, y: 14, width: 28, height: 8, rx: 2, fill: '#6b7280' }, dinh);
    dinh.appendChild(lop);
    const bot = a.s('g', {}, vi); const nhan = a.chu(vi, 200, 266, '', { 'font-size': 12, class: 'mo' });
    const P = []; vm.style.display = 'none'; const vg = a.s('g', {}, vm);
    function tao() { P.length = 0; for (let i = 0; i < 10; i++) P.push({ t: tn === 'cu' ? 'Cu' : 'H', x: 170 + Math.random() * 200, y: 30 + Math.random() * 200, vx: (Math.random() - .5) * 40, vy: (Math.random() - .5) * 40 }); }
    function ve() {
      const f = Math.min(1, tg / 10);
      dinh.setAttribute('transform', `translate(0 ${tha ? 0 : -120})`);
      if (tn === 'cu') { dd.setAttribute('fill', `hsl(${199 - f * 70},${80 - f * 45}%,${60 + f * 18}%)`); lop.setAttribute('opacity', f * .95); lop.setAttribute('x', 190 - f * 2); lop.setAttribute('width', 20 + f * 4); }
      else { dd.setAttribute('fill', '#e0f2fe'); lop.setAttribute('opacity', 0); }
      nhan.textContent = tn === 'cu' ? 'dung dịch CuSO₄ (màu xanh)' : 'dung dịch H₂SO₄ loãng';
      a.bao(!tha ? 'Chưa thả đinh sắt.' : tn === 'cu' ? `Sau ${Math.round(tg)} phút: ${f < .2 ? 'bề mặt đinh sắt bắt đầu có lớp màu đỏ.' : 'đinh sắt được phủ lớp <b>kim loại màu đỏ (Cu)</b>, màu xanh của dung dịch <b>nhạt dần</b>.'}<br>Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu`
        : `Có <b>bọt khí không màu (H<sub>2</sub>)</b> thoát ra trên bề mặt đinh sắt.<br>Fe + H<sub>2</sub>SO<sub>4</sub> → FeSO<sub>4</sub> + H<sub>2</sub>↑`);
    }
    a.lap((dt, tt) => {
      if (tha) { tg = Math.min(10, tg + dt * .8); tT.dat(Math.round(tg), true); }
      bot.innerHTML = ''; if (tha && tn === 'h') for (let i = 0; i < 14; i++) { const y = 232 - ((tt * 60 + i * 37) % 140); a.s('circle', { cx: 200 + (i % 2 ? 10 : -10) + Math.sin(i + tt * 3) * 3, cy: y, r: 2 + (i % 3), fill: 'none', stroke: '#64748b' }, bot); }
      if (vm.style.display !== 'none') {
        vg.innerHTML = '';
        a.s('rect', { x: 10, y: 10, width: 380, height: 245, rx: 14, fill: tn === 'cu' ? '#bae6fd55' : '#e0f2fe55', stroke: 'var(--line)' }, vg);
        for (let r = 0; r < 7; r++) for (let c = 0; c < 3; c++) a.s('circle', { cx: 30 + c * 22, cy: 30 + r * 32, r: 10, fill: '#9ca3af' }, vg);
        a.chu(vg, 52, 252, 'bề mặt đinh Fe', { 'font-size': 10, class: 'mo' });
        P.forEach((p, i) => { p.x += p.vx * dt; p.y += p.vy * dt; if (p.x < 110 || p.x > 380) p.vx *= -1; if (p.y < 22 || p.y > 240) p.vy *= -1;
          if (tha && p.x < 140 && !p.xong) { p.xong = tt; } if (tha && !p.xong) p.vx -= 12 * dt;
          const gg = a.s('g', { transform: `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})` }, vg);
          if (p.xong) { const u = Math.min(1, (tt - p.xong) / 1.2);
            if (p.t === 'Cu') { a.s('circle', { r: 9, fill: u < 1 ? '#38bdf8' : '#b45309' }, gg); a.chu(gg, 0, 3.5, u < 1 ? 'Cu²⁺' : 'Cu', { 'font-size': 8, 'font-weight': 700, style: 'fill:#fff' }); p.vx = 0; p.vy = 0; p.x = Math.max(p.x, 100); }
            else { a.s('circle', { r: 7, fill: '#e2e8f0', stroke: '#64748b' }, gg); a.chu(gg, 0, 3, 'H₂', { 'font-size': 7, 'font-weight': 700 }); p.vy = -40; p.vx = 5; }
            if (u < 1) { const ex = -60 * (1 - u), ey = 0; a.s('circle', { cx: ex, cy: ey - 6, r: 3, fill: '#facc15' }, gg); a.s('circle', { cx: ex + 6, cy: ey - 6, r: 3, fill: '#facc15' }, gg); } }
          else { a.s('circle', { r: p.t === 'Cu' ? 9 : 6, fill: p.t === 'Cu' ? '#38bdf8' : '#f87171' }, gg); a.chu(gg, 0, 3.5, p.t === 'Cu' ? 'Cu²⁺' : 'H⁺', { 'font-size': 8, 'font-weight': 700, style: 'fill:#fff' }); }
        });
        a.chu(vg, 250, 30, tn === 'cu' ? 'Fe → Fe²⁺ + 2e ; Cu²⁺ + 2e → Cu' : 'Fe → Fe²⁺ + 2e ; 2H⁺ + 2e → H₂', { 'font-size': 11.5, 'font-weight': 700 });
        a.chu(vg, 250, 46, '● electron (vàng) đi từ Fe sang ' + (tn === 'cu' ? 'Cu²⁺' : 'H⁺'), { 'font-size': 10, style: 'fill:#ca8a04' });
      }
      ve();
    });
    const tT = a.thanh({ td: 'Thời gian (phút)', min: 0, max: 10, gt: 0, fn: v => { tg = v; } });
    a.chon([['cu', 'Thí nghiệm 1: dd CuSO₄'], ['h', 'Thí nghiệm 2: dd H₂SO₄ loãng']], k => { tn = k; tha = false; tg = 0; tT.dat(0, true); tao(); }, { td: 'Thí nghiệm', dau: 'cu', imLang: true });
    a.chon([['vi', '🧪 Ống nghiệm'], ['vm', '🔬 Nhìn vi mô']], k => { vi.style.display = k === 'vi' ? '' : 'none'; vm.style.display = k === 'vm' ? '' : 'none'; }, { td: 'Cách nhìn', dau: 'vi', imLang: true });
    const h = a.hang(a.nhom());
    a.nut('🔩 Thả đinh sắt', () => { tha = true; }, { vao: h }); a.nut('↺ Làm lại', () => { tha = false; tg = 0; tT.dat(0, true); tao(); }, { vao: h, phu: true });
    tao(); ve();
    a.ket(`<table class="bang"><tr><th></th><th>Thí nghiệm 1</th><th>Thí nghiệm 2</th></tr>
      <tr><td>Phương trình</td><td>Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu</td><td>Fe + H<sub>2</sub>SO<sub>4</sub> → FeSO<sub>4</sub> + H<sub>2</sub></td></tr>
      <tr><td>Quá trình oxi hoá</td><td colspan="2">Fe → Fe<sup>2+</sup> + 2e</td></tr>
      <tr><td>Quá trình khử</td><td>Cu<sup>2+</sup> + 2e → Cu</td><td>2H<sup>+</sup> + 2e → H<sub>2</sub></td></tr>
      <tr><td>Chất khử</td><td colspan="2">Fe (nhường electron, số oxi hoá tăng 0 → +2)</td></tr>
      <tr><td>Chất oxi hoá</td><td>CuSO<sub>4</sub> (Cu<sup>2+</sup>: +2 → 0)</td><td>H<sub>2</sub>SO<sub>4</sub> (H<sup>+</sup>: +1 → 0)</td></tr></table>`);
    a.hoi([{ h: 'Trong phản ứng Fe + CuSO<sub>4</sub> → FeSO<sub>4</sub> + Cu, chất khử là', d: ['CuSO<sub>4</sub>', 'Fe', 'FeSO<sub>4</sub>', 'Cu'], dung: 1 },
      { h: 'Chất oxi hoá là chất', d: ['nhường electron', 'nhận electron', 'có số oxi hoá tăng', 'bị oxi hoá'], dung: 1 }]);
  } },

/* ---------- 3. Cân thăng bằng electron ---------- */
{ id: 'thang-bang-electron', ic: '⚖️', ten: 'Lập phương trình bằng phương pháp thăng bằng electron',
  mo: 'Bốn bước của SGK trên một chiếc cân: tổng số electron chất khử nhường phải bằng tổng số electron chất oxi hoá nhận.',
  chay(a) {
    a.huong('Chọn phản ứng. Đi theo 4 bước. Ở bước 3, bấm <b>+ / −</b> để nhân hai quá trình với hệ số cho tới khi <b>cân thăng bằng</b> (electron nhường = electron nhận).');
    const PU = [
      { t: 'Fe2O3 + CO → Fe + CO2', s: ['Fe2O3', 'CO', 'Fe', 'CO2'], so: [['Fe', '+3', '0'], ['C', '+2', '+4']], khu: ['CO', 'C⁺² → C⁺⁴ + 2e', 2], oxh: ['Fe2O3', '2Fe⁺³ + 6e → 2Fe⁰', 6], hs: [3, 1], he: [1, 3, 2, 3] },
      { t: 'NH3 + O2 → NO + H2O', s: ['NH3', 'O2', 'NO', 'H2O'], so: [['N', '−3', '+2'], ['O', '0', '−2']], khu: ['NH3', 'N⁻³ → N⁺² + 5e', 5], oxh: ['O2', 'O₂⁰ + 4e → 2O⁻²', 4], hs: [4, 5], he: [4, 5, 4, 6] },
      { t: 'C2H2 + O2 → CO2 + H2O', s: ['C2H2', 'O2', 'CO2', 'H2O'], so: [['C', '−1', '+4'], ['O', '0', '−2']], khu: ['C2H2', '2C⁻¹ → 2C⁺⁴ + 10e', 10], oxh: ['O2', 'O₂⁰ + 4e → 2O⁻²', 4], hs: [2, 5], he: [2, 5, 4, 2] },
      { t: 'Cu + HNO3 → Cu(NO3)2 + NO + H2O', s: ['Cu', 'HNO3', 'Cu(NO3)2', 'NO', 'H2O'], so: [['Cu', '0', '+2'], ['N', '+5', '+2']], khu: ['Cu', 'Cu⁰ → Cu⁺² + 2e', 2], oxh: ['HNO3', 'N⁺⁵ + 3e → N⁺²', 3], hs: [3, 2], he: [3, 8, 3, 2, 4] },
      { t: 'MnO2 + HCl → MnCl2 + Cl2 + H2O', s: ['MnO2', 'HCl', 'MnCl2', 'Cl2', 'H2O'], so: [['Mn', '+4', '+2'], ['Cl', '−1', '0']], khu: ['HCl', '2Cl⁻¹ → Cl₂⁰ + 2e', 2], oxh: ['MnO2', 'Mn⁺⁴ + 2e → Mn⁺²', 2], hs: [1, 1], he: [1, 4, 1, 1, 2] },
    ];
    const s = a.svg('0 0 400 250'), g = a.s('g', {}, s);
    let k = 0, buoc = 0, x = 1, y = 1;
    function ve() {
      g.innerHTML = ''; const P = PU[k], ne = P.khu[2] * x, nn = P.oxh[2] * y, lech = Math.max(-1, Math.min(1, (nn - ne) / Math.max(ne, nn)));
      if (buoc < 2) { const t = a.chu(g, 200, 120, '', { 'font-size': 17, 'font-weight': 700 }); ctSVG(t, P.t); if (buoc === 1) P.so.forEach(([nt, u, v], i) => a.chu(g, 200, 160 + i * 24, `${nt}: ${u} → ${v}  (${(+v.replace('−', '-')) > (+u.replace('−', '-')) ? 'tăng: bị oxi hoá' : 'giảm: bị khử'})`, { 'font-size': 13, style: i ? 'fill:#2563eb' : 'fill:#dc2626', 'font-weight': 700 }));
        if (buoc === 0) a.chu(g, 200, 160, 'Bước 1: xác định số oxi hoá của các nguyên tử có thay đổi', { 'font-size': 12, class: 'mo' }); return; }
      // cân
      const goc = lech * 14, r = goc * Math.PI / 180;
      a.s('path', { d: 'M200 210 L200 70 M175 214 L225 214', stroke: 'var(--net2)', 'stroke-width': 5, 'stroke-linecap': 'round' }, g);
      const xt = 200 - 120 * Math.cos(r), yt = 70 - 120 * Math.sin(r), xp = 200 + 120 * Math.cos(r), yp = 70 + 120 * Math.sin(r);
      a.s('line', { x1: xt, y1: yt, x2: xp, y2: yp, stroke: 'var(--net)', 'stroke-width': 5, 'stroke-linecap': 'round' }, g);
      [[xt, yt, ne, '#dc2626', 'e nhường', P.khu, x], [xp, yp, nn, '#2563eb', 'e nhận', P.oxh, y]].forEach(([cx, cy, n, m, t, qt, he]) => {
        a.s('path', { d: `M${cx - 40} ${cy + 60} L${cx} ${cy} L${cx + 40} ${cy + 60}`, fill: 'none', stroke: 'var(--net2)' }, g); a.s('path', { d: `M${cx - 50} ${cy + 60} Q${cx} ${cy + 82} ${cx + 50} ${cy + 60} Z`, fill: 'var(--soft)', stroke: 'var(--net2)' }, g);
        for (let i = 0; i < Math.min(n, 40); i++) a.s('circle', { cx: cx - 40 + (i % 10) * 9, cy: cy + 55 - Math.floor(i / 10) * 8, r: 3.3, fill: '#facc15', stroke: '#ca8a04' }, g);
        a.chu(g, cx, cy + 98, `${he} × ${qt[2]} = ${n} ${t}`, { 'font-size': 12.5, 'font-weight': 800, style: 'fill:' + m });
        const q = a.chu(g, cx, cy - 12, '', { 'font-size': 10.5 }); ctSVG(q, (he > 1 ? he + ' × (' : '') + qt[1] + (he > 1 ? ')' : ''));
      });
      a.chu(g, 200, 244, ne === nn ? '⚖️ Cân thăng bằng: e nhường = e nhận' : ne < nn ? 'Bên nhận nặng hơn: tăng hệ số bên nhường' : 'Bên nhường nặng hơn: tăng hệ số bên nhận', { 'font-size': 12, 'font-weight': 700, style: ne === nn ? 'fill:#16a34a' : '' });
    }
    function pt() { const P = PU[k], tr = P.t.split('→')[0].split('+').length; return P.s.map((c, i) => (P.he[i] > 1 ? P.he[i] : '') + ctHTML(c)).reduce((s2, c, i) => s2 + (i === 0 ? '' : i === tr ? ' → ' : ' + ') + c, ''); }
    function capNhat() { ve();
      const P = PU[k], ne = P.khu[2] * x, nn = P.oxh[2] * y;
      if (buoc === 0) a.bao(`<b>Bước 1.</b> Phản ứng: ${ctHTML(P.t)}. Em tìm các nguyên tố có số oxi hoá thay đổi, rồi bấm <b>Bước tiếp theo</b>.`);
      else if (buoc === 1) a.bao(`<b>Bước 1.</b> ${P.so.map(([nt, u, v]) => `${nt}: ${u} → ${v}`).join('; ')} ⇒ chất khử: <b>${ctHTML(P.khu[0])}</b>, chất oxi hoá: <b>${ctHTML(P.oxh[0])}</b>.`);
      else if (buoc === 2) a.bao(`<b>Bước 2–3.</b> Viết quá trình oxi hoá, quá trình khử (trên hai đĩa cân). Nhân hệ số để <b>tổng electron nhường = tổng electron nhận</b>. Hiện tại: ${ne} và ${nn}${ne === nn ? ' ✅ — bấm Bước tiếp theo.' : '.'}`);
      else a.bao(ne === nn ? `<b>Bước 4.</b> Đặt hệ số ${x} trước chất khử, ${y === 1 ? '' : y + ' '}trước chất oxi hoá (tính theo quá trình), cân bằng các nguyên tố còn lại:<br><b style="font-size:17px">${pt()}</b>` : '⚠ Cân chưa thăng bằng — quay lại bước 3.');
      nb.disabled = buoc >= 3 || (buoc === 2 && ne !== nn);
    }
    a.chon(PU.map((p, i) => [i, ctHTML(p.t)]), i => { k = +i; buoc = 0; x = 1; y = 1; capNhat(); }, { td: 'Phản ứng', dau: 0, imLang: true });
    const h = a.hang(a.nhom('Các bước'));
    const nb = a.nut('➡ Bước tiếp theo', () => { buoc = Math.min(3, buoc + 1); capNhat(); }, { vao: h }); a.nut('↺ Làm lại', () => { buoc = 0; x = 1; y = 1; capNhat(); }, { vao: h, phu: true });
    const hh = a.nhom('Hệ số (bước 3)'), h1 = a.hang(hh);
    a.nut('Nhường −', () => { x = Math.max(1, x - 1); capNhat(); }, { vao: h1, nho: true, phu: true }); a.nut('Nhường +', () => { x = Math.min(12, x + 1); capNhat(); }, { vao: h1, nho: true });
    a.nut('Nhận −', () => { y = Math.max(1, y - 1); capNhat(); }, { vao: h1, nho: true, phu: true }); a.nut('Nhận +', () => { y = Math.min(12, y + 1); capNhat(); }, { vao: h1, nho: true });
    capNhat();
    a.ket(`<p><b>Nguyên tắc:</b> tổng số electron chất khử nhường bằng tổng số electron chất oxi hoá nhận.</p>
      <p><b>Bước 1.</b> Xác định số oxi hoá thay đổi, tìm chất oxi hoá, chất khử. <b>Bước 2.</b> Viết quá trình oxi hoá, quá trình khử. <b>Bước 3.</b> Tìm hệ số thích hợp sao cho tổng e nhường = tổng e nhận. <b>Bước 4.</b> Đặt hệ số vào sơ đồ, cân bằng các nguyên tố còn lại.</p>`);
    a.hoi([{ h: 'Trong phản ứng Fe<sub>2</sub>O<sub>3</sub> + CO → Fe + CO<sub>2</sub>, mỗi phân tử CO', d: ['nhận 2 electron', 'nhường 2 electron', 'nhường 3 electron', 'nhận 6 electron'], dung: 1 },
      { h: 'Tổng hệ số (nguyên, tối giản) của phương trình NH<sub>3</sub> + O<sub>2</sub> → NO + H<sub>2</sub>O là', d: ['15', '17', '19', '21'], dung: 2, g: '4 + 5 + 4 + 6 = 19.' }]);
  } },
] });
