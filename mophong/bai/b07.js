/* Bài 7. Xu hướng biến đổi thành phần và tính chất của hợp chất trong một chu kì — 3 mô phỏng */
function veOng(a, g, x, y, h, mau) {   // ống nghiệm đứng, trả về phần dung dịch
  const dd = a.s('path', { d: `M${x + 2} ${y + h * .45} L${x + 2} ${y + h - 14} Q${x + 2} ${y + h - 2} ${x + 15} ${y + h - 2} Q${x + 28} ${y + h - 2} ${x + 28} ${y + h - 14} L${x + 28} ${y + h * .45} Z`, fill: mau || 'var(--nuoc)', opacity: .9 }, g);
  a.s('path', { d: `M${x} ${y} L${x} ${y + h - 14} Q${x} ${y + h} ${x + 15} ${y + h} Q${x + 30} ${y + h} ${x + 30} ${y + h - 14} L${x + 30} ${y}`, fill: 'none', stroke: 'var(--kinhvien)', 'stroke-width': 2.5 }, g);
  return dd;
}

MP_NAP({ ma: '7', ds: [

/* ---------- 1. Oxide với nước, thử bằng quỳ tím ---------- */
{ id: 'oxide-nuoc', ic: '🟣', ten: 'Thí nghiệm ảo: phản ứng của Na₂O, MgO, P₂O₅ với nước',
  mo: 'Cho từng oxide vào nước, nhúng giấy quỳ tím: oxide nào tan, quỳ đổi màu gì — oxide base hay acid?',
  chay(a) {
    a.huong('Bấm vào từng oxide để cho vào ống nghiệm chứa nước, lắc đều, rồi bấm <b>Nhúng quỳ tím</b>. Hiện tượng theo SGK (mục II.1).');
    const OX = [
      { k: 'Na2O', tan: 1, quy: '#1d4ed8', chu: 'Tan hoàn toàn. Quỳ tím chuyển <b>xanh đậm</b>.', pt: 'Na2O + H2O → 2NaOH', loai: 'basic oxide → base mạnh NaOH' },
      { k: 'MgO', tan: .25, quy: '#60a5fa', chu: 'Tan một phần. Quỳ tím chuyển <b>xanh nhạt</b>.', pt: 'MgO + H2O → Mg(OH)2', loai: 'basic oxide → base yếu Mg(OH)2' },
      { k: 'P2O5', tan: 1, quy: '#dc2626', chu: 'Tan hoàn toàn. Quỳ tím chuyển <b>đỏ</b>.', pt: 'P2O5 + 3H2O → 2H3PO4', loai: 'acidic oxide → acid H3PO4' },
    ];
    const s = a.svg('0 0 400 280'), g = a.s('g', {}, s), ds = [];
    OX.forEach((o, i) => {
      const x = 60 + i * 120, dd = veOng(a, g, x, 50, 180);
      const bot = a.s('g', {}, g), quy = a.s('rect', { x: x + 9, y: -60, width: 12, height: 60, rx: 2, fill: '#8b5cf6', stroke: '#6d28d9' }, g);
      const t = a.chu(g, x + 15, 252, o.k, { 'font-size': 14, 'font-weight': 800 });
      const pt = a.chu(g, x + 15, 272, '', { 'font-size': 10 });
      ds.push({ o, x, dd, bot, quy, t, pt, cho: -1, nhung: -1 });
    });
    a.lap(dt => ds.forEach(d => {
      if (d.cho >= 0) { d.cho += dt; const con = Math.max(0, 1 - d.cho * d.o.tan * .5);
        if (d.bot.childElementCount === 0) for (let i = 0; i < 14; i++) a.s('circle', { cx: d.x + 6 + Math.random() * 18, cy: 210 + Math.random() * 14, r: 2.2, fill: '#f8fafc', stroke: '#94a3b8' }, d.bot);
        [...d.bot.children].forEach((c, i) => c.setAttribute('opacity', d.o.tan < 1 ? (i < 10 ? 1 : con) : con)); }
      if (d.nhung >= 0) { d.nhung = Math.min(1, d.nhung + dt); d.quy.setAttribute('y', -60 + d.nhung * 200);
        if (d.nhung >= 1) d.quy.setAttribute('fill', d.cho >= 0 ? d.o.quy : '#8b5cf6'); }
    }));
    function moTa() {
      const t = ds.filter(d => d.cho >= 0).map(d => `<b>${ctHTML(d.o.k)}</b>: ${d.nhung >= 0 ? d.o.chu + ' ⇒ ' + ctHTML(d.o.loai) : (d.o.tan < 1 ? 'tan một phần trong nước.' : 'tan hoàn toàn trong nước.') + ' (chưa thử quỳ)'}`);
      a.bao(t.join('<br>') || 'Chưa cho oxide nào vào nước.');
    }
    const h = a.hang(a.nhom('Cho oxide vào nước'));
    ds.forEach(d => { const b = a.nut('Cho ' + ctHTML(d.o.k), () => { d.cho = 0; b.disabled = true; ctSVG(d.pt, d.o.pt); moTa(); }, { vao: h, nho: true }); d.nut = b; });
    a.nut('🟣 Nhúng quỳ tím vào cả 3 ống', () => { ds.forEach(d => { if (d.cho >= 0 && d.nhung < 0) d.nhung = 0; }); a.hen(moTa, 1100); }, { phu: true });
    a.nut('↺ Làm lại', () => { ds.forEach(d => { d.cho = d.nhung = -1; d.bot.innerHTML = ''; d.quy.setAttribute('y', -60); d.quy.setAttribute('fill', '#8b5cf6'); d.nut.disabled = false; d.pt.textContent = ''; }); moTa(); }, { phu: true });
    moTa();
    a.ket(`<p>• Na<sub>2</sub>O + H<sub>2</sub>O → 2NaOH (quỳ xanh đậm: base mạnh) · MgO + H<sub>2</sub>O → Mg(OH)<sub>2</sub> (tan một phần, quỳ xanh nhạt: base yếu) · P<sub>2</sub>O<sub>5</sub> + 3H<sub>2</sub>O → 2H<sub>3</sub>PO<sub>4</sub> (quỳ đỏ: acid).</p>
      <p>• Na<sub>2</sub>O, MgO là <b>basic oxide</b>; P<sub>2</sub>O<sub>5</sub> là <b>acidic oxide</b>. Từ Na → Mg → P (chu kì 3): tính base giảm, tính acid tăng.</p>`);
    a.hoi([
      { h: 'Dung dịch thu được khi cho P<sub>2</sub>O<sub>5</sub> vào nước làm quỳ tím', d: ['hoá xanh', 'hoá đỏ', 'không đổi màu', 'mất màu'], dung: 1 },
      { h: 'Quỳ tím trong ống MgO chỉ xanh nhạt vì', d: ['MgO là acidic oxide', 'MgO tan một phần, Mg(OH)<sub>2</sub> là base yếu', 'MgO không phản ứng', 'Mg(OH)<sub>2</sub> là base mạnh'], dung: 1 },
    ]);
  } },

/* ---------- 2. Na2CO3 nhỏ vào HNO3 ---------- */
{ id: 'na2co3-hno3', ic: '🫧', ten: 'Thí nghiệm ảo: nhỏ dung dịch Na₂CO₃ vào dung dịch HNO₃',
  mo: 'Thêm từng giọt Na₂CO₃ vào HNO₃ loãng: thấy sủi bọt khí. Từ đó so sánh độ mạnh của HNO₃ và H₂CO₃.',
  chay(a) {
    a.huong('Bấm <b>Nhỏ 1 giọt Na₂CO₃</b> vào ống nghiệm chứa dung dịch HNO₃ loãng. Quan sát bọt khí. Chuyển sang <b>Nhìn vi mô</b> để thấy chuyện gì xảy ra với các hạt.');
    const s = a.svg('0 0 400 280'), vi = a.s('g', {}, s), vm = a.s('g', {}, s);
    const dd = veOng(a, vi, 185, 70, 190, '#e0f2fe'); a.chu(vi, 200, 276, 'dung dịch HNO₃ loãng', { 'font-size': 11, class: 'mo' });
    a.s('path', { d: 'M180 10 L180 30 L220 30 L220 10', fill: '#f1f5f9', stroke: 'var(--net2)' }, vi); a.s('path', { d: 'M195 30 L200 42 L205 30', fill: '#e2e8f0', stroke: 'var(--net2)' }, vi);
    a.chu(vi, 252, 26, 'Na₂CO₃', { 'font-size': 11, 'text-anchor': 'start' });
    const giot = a.s('circle', { cx: 200, cy: 46, r: 3.5, fill: '#cbd5e1', opacity: 0 }, vi), bot = a.s('g', {}, vi);
    let soGiot = 0, roi = -1, axit = 6, khi = 0;
    const ion = a.s('g', {}, vm); vm.style.display = 'none';
    const HAT = [];
    function taoHat() { HAT.length = 0; for (let i = 0; i < 6; i++) { HAT.push({ t: 'H+' }); HAT.push({ t: 'NO3-' }); } HAT.forEach(h => { h.x = 30 + Math.random() * 340; h.y = 30 + Math.random() * 200; h.vx = (Math.random() - .5) * 50; h.vy = (Math.random() - .5) * 50; }); }
    a.lap(dt => {
      if (roi >= 0) { roi += dt; giot.setAttribute('cy', 46 + roi * 220); if (46 + roi * 220 > 155) { roi = -1; giot.setAttribute('opacity', 0); soGiot++; if (axit > 0) { axit = Math.max(0, axit - 2); khi += 1.6; }
        HAT.push({ t: 'Na+', x: 200, y: 20, vx: -30, vy: 40 }, { t: 'Na+', x: 210, y: 20, vx: 30, vy: 40 }, { t: 'CO3', x: 205, y: 20, vx: 0, vy: 60 }); moTa(); } }
      if (khi > 0) { khi = Math.max(0, khi - dt * .8); if (Math.random() < khi) a.s('circle', { cx: 190 + Math.random() * 20, cy: 245, r: 1.5 + Math.random() * 2.5, fill: 'none', stroke: '#64748b' }, bot); }
      [...bot.children].forEach(b => { const y = +b.getAttribute('cy') - 70 * dt; b.setAttribute('cy', y); if (y < 156) b.remove(); });
      // vi mô
      HAT.forEach(h => { h.x += h.vx * dt; h.y += h.vy * dt; if (h.x < 20 || h.x > 380) h.vx *= -1; if (h.y < 20 || h.y > 250) h.vy *= -1; if (h.t === 'CO2') { h.vy = -50; } });
      HAT.filter(h => h.t === 'CO3').forEach(c => { const hp = HAT.filter(h => h.t === 'H+').sort((p, q) => Math.hypot(p.x - c.x, p.y - c.y) - Math.hypot(q.x - c.x, q.y - c.y));
        if (hp.length >= 2 && Math.hypot(hp[0].x - c.x, hp[0].y - c.y) < 45) { c.t = 'CO2'; hp[0].t = 'H2O'; hp[1].t = 'xoa'; }
        else if (hp[0]) { c.vx += (hp[0].x - c.x) * dt; c.vy += (hp[0].y - c.y) * dt; } });
      for (let i = HAT.length - 1; i >= 0; i--) if (HAT[i].t === 'xoa' || (HAT[i].t === 'CO2' && HAT[i].y < 22)) HAT.splice(i, 1);
      if (vm.style.display !== 'none') { ion.innerHTML = '';
        a.s('rect', { x: 10, y: 10, width: 380, height: 250, rx: 14, fill: '#e0f2fe55', stroke: 'var(--line)' }, ion);
        HAT.forEach(h => { const g = a.s('g', { transform: `translate(${h.x.toFixed(1)} ${h.y.toFixed(1)})` }, ion);
          const M = { 'H+': ['#ef4444', 'H^+', 7], 'NO3-': ['#94a3b8', 'NO3^-', 13], 'Na+': ['#a855f7', 'Na^+', 9], CO3: ['#0ea5e9', 'CO3^2-', 14], CO2: ['#64748b', 'CO2↑', 12], H2O: ['#3b82f6', 'H2O', 11] }[h.t];
          if (!M) return; a.s('circle', { r: M[2], fill: M[0], opacity: .9 }, g); a.chu(g, 0, 3.5, M[1], { 'font-size': 8.5, 'font-weight': 700, style: 'fill:#fff' }); }); }
    });
    function moTa() { a.bao(!soGiot ? 'Ống nghiệm chứa dung dịch HNO₃ loãng (không màu).' : axit > 0 || khi > 0.3 ? `Đã nhỏ ${soGiot} giọt: <b>có bọt khí không màu thoát ra</b> (khí CO₂).` : `Đã nhỏ ${soGiot} giọt: acid đã hết, nhỏ thêm Na₂CO₃ không còn sủi bọt.`); }
    a.chon([['vi', '🧪 Ống nghiệm'], ['vm', '🔬 Nhìn vi mô']], k => { vi.style.display = k === 'vi' ? '' : 'none'; vm.style.display = k === 'vm' ? '' : 'none'; }, { td: 'Cách nhìn', dau: 'vi', imLang: true });
    const h = a.hang(a.nhom('Thao tác'));
    a.nut('💧 Nhỏ 1 giọt Na₂CO₃', () => { if (roi < 0) { roi = 0; giot.setAttribute('opacity', 1); } }, { vao: h, nho: true });
    a.nut('↺ Làm lại', () => { soGiot = 0; axit = 6; khi = 0; bot.innerHTML = ''; taoHat(); moTa(); }, { vao: h, nho: true, phu: true });
    taoHat(); moTa();
    a.ket(`<p>• Phương trình: <b>Na<sub>2</sub>CO<sub>3</sub> + 2HNO<sub>3</sub> → 2NaNO<sub>3</sub> + CO<sub>2</sub>↑ + H<sub>2</sub>O</b>.</p>
      <p>• HNO<sub>3</sub> đẩy được H<sub>2</sub>CO<sub>3</sub> (phân huỷ thành CO<sub>2</sub> và H<sub>2</sub>O) ra khỏi muối carbonate ⇒ <b>HNO<sub>3</sub> là acid mạnh hơn H<sub>2</sub>CO<sub>3</sub></b>.</p>
      <p>• N (nhóm VA) và C (nhóm IVA) cùng chu kì 2: hydroxide của nguyên tố đứng sau có tính acid mạnh hơn.</p>`);
    a.hoi([
      { h: 'Khí thoát ra trong thí nghiệm là', d: ['H<sub>2</sub>', 'O<sub>2</sub>', 'CO<sub>2</sub>', 'NO<sub>2</sub>'], dung: 2 },
      { h: 'So sánh độ mạnh acid:', d: ['H<sub>2</sub>CO<sub>3</sub> > HNO<sub>3</sub>', 'HNO<sub>3</sub> > H<sub>2</sub>CO<sub>3</sub>', 'bằng nhau', 'không so sánh được'], dung: 1 },
    ]);
  } },

/* ---------- 3. Thang acid – base của oxide, hydroxide chu kì 2, 3 ---------- */
{ id: 'thang-acid-base', ic: '🌡️', ten: 'Thang tính acid – base của oxide và hydroxide cao nhất',
  mo: 'Kéo dọc chu kì 3 (hoặc 2): hoá trị cao nhất tăng, công thức oxide – hydroxide đổi, tính base giảm, tính acid tăng.',
  chay(a) {
    a.huong('Kéo thanh để đi từ trái sang phải trong chu kì. Kim chỉ trên thang cho biết hydroxide nằm ở đâu giữa <b>base mạnh</b> và <b>acid rất mạnh</b>.');
    const CK = {
      3: [['Na', 'I', 'Na2O', 'NaOH', 'basic oxide', 'base mạnh', 0], ['Mg', 'II', 'MgO', 'Mg(OH)2', 'basic oxide', 'base yếu', 1.4], ['Al', 'III', 'Al2O3', 'Al(OH)3', 'oxide lưỡng tính', 'hydroxide lưỡng tính', 3],
        ['Si', 'IV', 'SiO2', 'H2SiO3', 'acidic oxide', 'acid yếu', 4.2], ['P', 'V', 'P2O5', 'H3PO4', 'acidic oxide', 'acid trung bình', 5.1], ['S', 'VI', 'SO3', 'H2SO4', 'acidic oxide', 'acid mạnh', 6.1], ['Cl', 'VII', 'Cl2O7', 'HClO4', 'acidic oxide', 'acid rất mạnh', 7]],
      2: [['Li', 'I', 'Li2O', 'LiOH', 'basic oxide', 'base mạnh', 0.2], ['Be', 'II', 'BeO', 'Be(OH)2', 'oxide lưỡng tính', 'hydroxide lưỡng tính', 2.9], ['B', 'III', 'B2O3', 'H3BO3', 'acidic oxide', 'acid rất yếu', 3.9],
        ['C', 'IV', 'CO2', 'H2CO3', 'acidic oxide', 'acid yếu', 4.3], ['N', 'V', 'N2O5', 'HNO3', 'acidic oxide', 'acid mạnh', 6.1]],
    };
    const s = a.svg('0 0 400 270'), g = a.s('g', {}, s);
    let ck = 3, i = 0;
    function ve() {
      g.innerHTML = ''; const ds = CK[ck], d = ds[i];
      // dãy ô nguyên tố
      ds.forEach((e, j) => { const x = 20 + j * (360 / ds.length), w = 360 / ds.length - 4;
        a.s('rect', { x, y: 12, width: w, height: 34, rx: 6, fill: j === i ? 'var(--vangbg)' : 'var(--card)', stroke: j === i ? '#d97706' : 'var(--line)', 'stroke-width': j === i ? 2 : 1 }, g);
        a.chu(g, x + w / 2, 34, e[0], { 'font-size': 15, 'font-weight': 800 }); a.chu(g, x + w / 2, 58, e[1], { 'font-size': 10, class: 'mo' }); });
      a.chu(g, 200, 76, `Hoá trị cao nhất với oxygen: ${d[1]}`, { 'font-size': 12.5 });
      // công thức lớn
      a.chu(g, 110, 112, d[2], { 'font-size': 24, 'font-weight': 800 }); a.chu(g, 110, 132, d[4], { 'font-size': 11, class: 'mo' });
      a.chu(g, 200, 112, '→', { 'font-size': 22, class: 'mo' });
      a.chu(g, 290, 112, d[3], { 'font-size': 24, 'font-weight': 800 }); a.chu(g, 290, 132, d[5], { 'font-size': 11, style: 'fill:#d97706', 'font-weight': 700 });
      // thang
      const def = a.s('defs', {}, g), lg = a.s('linearGradient', { id: 'tg7', x1: 0, x2: 1 }, def);
      [['0', '#1d4ed8'], ['.42', '#a3a3a3'], ['1', '#dc2626']].forEach(([o, c]) => a.s('stop', { offset: o, 'stop-color': c }, lg));
      a.s('rect', { x: 30, y: 180, width: 340, height: 18, rx: 9, fill: 'url(#tg7)' }, g);
      a.chu(g, 30, 216, 'base mạnh', { 'font-size': 11, 'text-anchor': 'start', style: 'fill:#1d4ed8', 'font-weight': 700 }); a.chu(g, 172, 216, 'lưỡng tính', { 'font-size': 11, class: 'mo' }); a.chu(g, 370, 216, 'acid rất mạnh', { 'font-size': 11, 'text-anchor': 'end', style: 'fill:#dc2626', 'font-weight': 700 });
      const kx = 30 + d[6] / 7 * 340;
      a.s('path', { d: `M${kx} 176 L${kx - 8} 160 L${kx + 8} 160 Z`, fill: 'var(--net)' }, g); a.chu(g, kx, 154, d[3], { 'font-size': 12, 'font-weight': 800 });
      a.chu(g, 200, 250, `Chiều tăng điện tích hạt nhân → tính base giảm, tính acid tăng`, { 'font-size': 11.5, class: 'mo' });
      a.bao(`<b>${d[0]}</b> (nhóm ${d[1]}A): oxide cao nhất <b>${ctHTML(d[2])}</b> (${d[4]}) — hydroxide tương ứng <b>${ctHTML(d[3])}</b> (${d[5]}).`);
    }
    const tt = a.thanh({ td: 'Đi dọc chu kì', min: 0, max: 6, gt: 0, hien: v => CK[ck][v][0], fn: v => { i = v; ve(); } });
    a.chon([['3', 'Chu kì 3 (Bảng 7.2)'], ['2', 'Chu kì 2']], k => { ck = +k; i = 0; tt.el.max = CK[ck].length - 1; tt.dat(0); }, { td: 'Chu kì', dau: '3', imLang: true });
    a.dk.insertBefore(a.dk.lastElementChild, tt.el.closest('.nhom'));
    ve();
    a.ket(`<p>• Hoá trị cao nhất với oxygen của nguyên tố nhóm A tăng từ I đến VII (trừ chu kì 1 và F) ⇒ thành phần oxide, hydroxide lặp lại theo chu kì.</p>
      <p>• <b>Trong một chu kì, theo chiều tăng điện tích hạt nhân: tính base của oxide và hydroxide giảm dần, tính acid tăng dần.</b></p>
      <p>• Chu kì 3: NaOH (base mạnh), Mg(OH)<sub>2</sub> (base yếu), Al(OH)<sub>3</sub> (lưỡng tính), H<sub>2</sub>SiO<sub>3</sub> (acid yếu), H<sub>3</sub>PO<sub>4</sub> (acid trung bình), H<sub>2</sub>SO<sub>4</sub> (acid mạnh), HClO<sub>4</sub> (acid rất mạnh).</p>`);
    a.hoi([
      { h: 'Chất có tính acid yếu nhất trong dãy H<sub>2</sub>SO<sub>4</sub>, HClO<sub>4</sub>, H<sub>3</sub>PO<sub>4</sub>, H<sub>2</sub>SiO<sub>3</sub> là', d: ['H<sub>2</sub>SO<sub>4</sub>', 'HClO<sub>4</sub>', 'H<sub>3</sub>PO<sub>4</sub>', 'H<sub>2</sub>SiO<sub>3</sub>'], dung: 3 },
      { h: 'Dãy các chất có tính base tăng dần là', d: ['Al(OH)<sub>3</sub>, Mg(OH)<sub>2</sub>, NaOH', 'NaOH, Mg(OH)<sub>2</sub>, Al(OH)<sub>3</sub>', 'Mg(OH)<sub>2</sub>, Al(OH)<sub>3</sub>, NaOH', 'Al(OH)<sub>3</sub>, NaOH, Mg(OH)<sub>2</sub>'], dung: 0 },
    ]);
  } },
] });
