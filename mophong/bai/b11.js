/* Bài 11. Liên kết ion — 4 mô phỏng */
const THU_TU_O = [0, 2, 4, 6, 1, 3, 5, 7];        // thứ tự chiếm 8 vị trí Lewis: mỗi phía 1 electron trước rồi mới ghép đôi
const viTri8 = r => viTriLewis(8, r);

MP_NAP({ ma: '11', ds: [

/* ---------- 1. Sự hình thành liên kết ion ---------- */
{ id: 'hinh-thanh', ic: '⚡', ten: 'Sự hình thành liên kết ion: electron đi đâu?',
  mo: 'NaCl, MgO, CaCl₂, Na₂O, MgCl₂, CaO, Al₂O₃: xem từng electron chuyển từ kim loại sang phi kim, các ion trái dấu hút nhau.',
  chay(a) {
    a.huong('Chọn hợp chất rồi bấm <b>Chuyển electron</b>. Electron <span style="color:#f59e0b">vàng</span> của kim loại, electron <span style="color:#2563eb">xanh</span> của phi kim.');
    const HC = { NaCl: ['Na', 1, 1, 'Cl', 7, 1], MgO: ['Mg', 2, 1, 'O', 6, 1], CaCl2: ['Ca', 2, 1, 'Cl', 7, 2], Na2O: ['Na', 1, 2, 'O', 6, 1], MgCl2: ['Mg', 2, 1, 'Cl', 7, 2], CaO: ['Ca', 2, 1, 'O', 6, 1], Al2O3: ['Al', 3, 2, 'O', 6, 3] };
    const s = a.svg('0 0 400 290'), g = a.s('g', {}, s);
    let hc = 'NaCl', t = 0, chay = false;
    function bo() {
      const [M, vM, nM, X, vX, nX] = HC[hc], R = 24;
      const yM = i => 145 + (i - (nM - 1) / 2) * 92, yX = i => 145 + (i - (nX - 1) / 2) * 86;
      const kl = Array.from({ length: nM }, (_, i) => ({ x: 95, y: yM(i), e: vM })), pk = Array.from({ length: nX }, (_, i) => ({ x: 290, y: yX(i), co: vX, them: [] }));
      const chuyen = []; let k = 0;
      kl.forEach((m, i) => { for (let j = 0; j < vM; j++) { while (pk[k].co + pk[k].them.length >= 8) k++; const slot = THU_TU_O[pk[k].co + pk[k].them.length]; pk[k].them.push(chuyen.length); chuyen.push({ i, j, k, slot }); } });
      return { M, vM, X, vX, kl, pk, chuyen, R };
    }
    function ve() {
      g.innerHTML = ''; const B = bo(), N = B.chuyen.length, xong = t >= N, hut = Math.max(0, Math.min(1, t - N)), R = B.R;
      const dichX = 35 * hut;
      B.kl.forEach((m, i) => { const x = m.x + dichX * .3;
        a.chu(g, x, m.y + 8, B.M, { 'font-size': 22, 'font-weight': 800 });
        const vt = viTri8(R); for (let j = 0; j < B.vM; j++) { const c = B.chuyen.findIndex(q => q.i === i && q.j === j); if (t > c + 1) continue; const p = vt[THU_TU_O[j]];
          if (t > c) { const u = t - c, k = B.chuyen[c].k, X = B.pk[k], q = vt[B.chuyen[c].slot];
            const x0 = x + p[0], y0 = m.y + p[1], x1 = X.x + q[0], y1 = X.y + q[1];
            a.s('circle', { cx: x0 + (x1 - x0) * u, cy: y0 + (y1 - y0) * u - 40 * Math.sin(Math.PI * u), r: 4, fill: '#f59e0b' }, g);
          } else a.s('circle', { cx: x + p[0], cy: m.y + p[1], r: 4, fill: '#f59e0b' }, g); }
        if (xong) { a.s('path', { d: `M${x - 22} ${m.y - 26} L${x - 28} ${m.y - 26} L${x - 28} ${m.y + 26} L${x - 22} ${m.y + 26} M${x + 22} ${m.y - 26} L${x + 28} ${m.y - 26} L${x + 28} ${m.y + 26} L${x + 22} ${m.y + 26}`, fill: 'none', stroke: 'var(--net2)' }, g);
          a.chu(g, x + 36, m.y - 22, (B.vM > 1 ? B.vM : '') + '+', { 'font-size': 14, 'font-weight': 800, style: 'fill:#dc2626' }); }
      });
      B.pk.forEach((X, k) => { const x = X.x - dichX, vt = viTri8(R);
        a.chu(g, x, X.y + 8, B.X, { 'font-size': 22, 'font-weight': 800 });
        for (let j = 0; j < B.vX; j++) { const p = vt[THU_TU_O[j]]; a.s('circle', { cx: x + p[0], cy: X.y + p[1], r: 4, fill: '#2563eb' }, g); }
        X.them.forEach(c => { if (t >= c + 1) { const p = vt[B.chuyen[c].slot]; a.s('circle', { cx: x + p[0], cy: X.y + p[1], r: 4, fill: '#f59e0b' }, g); } });
        if (xong) { a.s('path', { d: `M${x - 30} ${X.y - 32} L${x - 36} ${X.y - 32} L${x - 36} ${X.y + 32} L${x - 30} ${X.y + 32} M${x + 30} ${X.y - 32} L${x + 36} ${X.y - 32} L${x + 36} ${X.y + 32} L${x + 30} ${X.y + 32}`, fill: 'none', stroke: 'var(--net2)' }, g);
          a.chu(g, x + 46, X.y - 28, (8 - B.vX > 1 ? 8 - B.vX : '') + '−', { 'font-size': 14, 'font-weight': 800, style: 'fill:#2563eb' }); }
      });
      if (hut > .5) { a.s('path', { d: 'M150 145 L235 145 M150 145 l8 -5 M150 145 l8 5 M235 145 l-8 -5 M235 145 l-8 5', stroke: '#dc2626', 'stroke-width': 2, fill: 'none', opacity: hut }, g);
        a.chu(g, 192, 137, 'hút tĩnh điện', { 'font-size': 11, style: 'fill:#dc2626', opacity: hut }); }
      const qM = B.vM, qX = 8 - B.vX, ionM = B.M + '^' + (qM > 1 ? qM : '') + '+', ionX = B.X + '^' + (qX > 1 ? qX : '') + '-';
      const cong = (n, x) => (n > 1 ? n : '') + x;
      if (xong) a.bao(`Mỗi ${B.M} nhường ${B.vM} electron → ${ctHTML(ionM)}; mỗi ${B.X} nhận ${qX} electron → ${ctHTML(ionX)}. Tổng electron nhường = tổng nhận = <b>${N}</b>.<br>${ctHTML(cong(B.kl.length, ionM) + ' + ' + cong(B.pk.length, ionX))} → <b>${ctHTML(hc)}</b>: các ion trái dấu hút nhau tạo <b>liên kết ion</b>.`);
      else a.bao(`${B.M}: ${B.vM} electron hoá trị (dễ nhường) · ${B.X}: ${B.vX} electron hoá trị (cần nhận ${qX}). Cần <b>${B.kl.length} ${B.M}</b> và <b>${B.pk.length} ${B.X}</b> để số electron nhường bằng số electron nhận.`);
    }
    a.lap(dt => { if (!chay) return; const N = bo().chuyen.length; t = Math.min(N + 1, t + dt * 1.1); if (t >= N + 1) chay = false; ve(); });
    a.chon(Object.keys(HC).map(k => [k, ctHTML(k)]), k => { hc = k; t = 0; chay = false; ve(); }, { td: 'Hợp chất', dau: 'NaCl', imLang: true });
    const h = a.hang(a.nhom());
    a.nut('➡ Chuyển electron', () => { t = 0; chay = true; }, { vao: h }); a.nut('↺ Về nguyên tử', () => { t = 0; chay = false; ve(); }, { vao: h, phu: true });
    ve();
    a.ket(`<p>• Nguyên tử kim loại <b>nhường electron</b> → cation; nguyên tử phi kim <b>nhận electron</b> → anion. Số electron nhường = số electron nhận.</p>
      <p>• <b>Liên kết ion</b> là liên kết được tạo thành do <b>lực hút tĩnh điện</b> giữa các ion mang điện tích trái dấu; thường hình thành giữa kim loại điển hình và phi kim điển hình.</p>
      <p>• Ví dụ: Cl + Ca + Cl → Cl<sup>−</sup> + Ca<sup>2+</sup> + Cl<sup>−</sup> → CaCl<sub>2</sub>.</p>`);
    a.hoi([
      { h: 'Vì sao một ion O<sup>2−</sup> kết hợp với hai ion Li<sup>+</sup>?', d: ['Vì O có 2 lớp electron', 'Để tổng điện tích bằng 0 (2 × (+1) + (−2) = 0)', 'Vì Li có 2 electron lớp ngoài', 'Vì O nhường 2 electron'], dung: 1 },
      { h: 'Khi tạo Al<sub>2</sub>O<sub>3</sub>, tổng số electron mà các nguyên tử Al nhường là', d: ['3', '2', '6', '5'], dung: 2, g: '2 Al × 3 e = 6 e = 3 O × 2 e.' },
    ]);
  } },

/* ---------- 2. Tinh thể NaCl 3D ---------- */
{ id: 'tinh-the-nacl', ic: '🧊', ten: 'Tinh thể sodium chloride 3D (mô hình đặc, mô hình rỗng)',
  mo: 'Xoay mạng tinh thể NaCl, đổi mô hình đặc – rỗng, đếm số ion trái dấu bao quanh mỗi ion.',
  chay(a) {
    a.huong('<b>Kéo trên hình để xoay</b>. Bật <b>Tô ion ở tâm</b> để đếm số ion trái dấu gần nhất bao quanh một ion.');
    const s = a.svg('0 0 400 300'), def = a.s('defs', {}, s), g = a.s('g', {}, s);
    [['gNa', '#c4b5fd', '#6d28d9'], ['gCl', '#86efac', '#15803d']].forEach(([id, c1, c2]) => { const r = a.s('radialGradient', { id, cx: '35%', cy: '30%', r: '70%' }, def); a.s('stop', { offset: '0', 'stop-color': '#fff' }, r); a.s('stop', { offset: '.35', 'stop-color': c1 }, r); a.s('stop', { offset: '1', 'stop-color': c2 }, r); });
    const ION = []; for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (let k = -1; k <= 1; k++) ION.push({ p: [i, j, k], na: (i + j + k) % 2 === 0, tam: !i && !j && !k, gan: Math.abs(i) + Math.abs(j) + Math.abs(k) === 1 });
    let ax = .55, ay = -.42, mh = 'dac', to = false, tuQuay = true;
    const D = 62;      // 1 khoảng cách Na–Cl (≈ 282 pm)
    function ve() {
      g.innerHTML = '';
      const P = ION.map(o => { const q = xoay3(o.p.map(v => v * D), ax, ay); const c = chieu(q, 200, 150, 700, 1); return Object.assign({ q, c }, o); });
      if (mh === 'rong') { const L = [];
        for (let m = 0; m < P.length; m++) for (let n = m + 1; n < P.length; n++) { const d = P[m].p.reduce((s, v, i) => s + Math.abs(v - P[n].p[i]), 0); if (d === 1) L.push([P[m], P[n]]); }
        L.sort((u, v) => (v[0].q[2] + v[1].q[2]) - (u[0].q[2] + u[1].q[2]));
        L.forEach(([u, v]) => a.s('line', { x1: u.c[0], y1: u.c[1], x2: v.c[0], y2: v.c[1], stroke: 'var(--net2)', 'stroke-width': 2, opacity: to && !(u.tam || v.tam) ? .15 : .7 }, g)); }
      P.sort((u, v) => v.q[2] - u.q[2]).forEach(o => {
        const r = (mh === 'dac' ? (o.na ? 102 : 181) / 282 * D : (o.na ? 8 : 12)) * o.c[2], mo = to && !(o.tam || o.gan) ? .12 : 1;
        a.s('circle', { cx: o.c[0].toFixed(1), cy: o.c[1].toFixed(1), r: r.toFixed(1), fill: o.na ? 'url(#gNa)' : 'url(#gCl)', opacity: mo, stroke: to && o.tam ? '#dc2626' : 'none', 'stroke-width': 2.5 }, g);
      });
      a.s('circle', { cx: 24, cy: 280, r: 8, fill: 'url(#gNa)' }, g); a.chu(g, 38, 284, 'Na⁺', { 'font-size': 12, 'text-anchor': 'start' });
      a.s('circle', { cx: 90, cy: 280, r: 10, fill: 'url(#gCl)' }, g); a.chu(g, 106, 284, 'Cl⁻', { 'font-size': 12, 'text-anchor': 'start' });
    }
    a.xoay(s, (dx, dy) => { ax += dx; ay += dy; ve(); });
    s.addEventListener('pointerdown', () => { tuQuay = false; });
    a.lap(dt => { if (tuQuay) { ax += dt * .3; ve(); } });
    a.chon([['dac', 'Mô hình đặc'], ['rong', 'Mô hình rỗng']], k => { mh = k; ve(); }, { td: 'Mô hình', dau: 'dac', imLang: true });
    const nt = a.nut('🎯 Tô ion ở tâm và các ion gần nhất', () => { to = !to; nt.innerHTML = to ? 'Bỏ tô' : '🎯 Tô ion ở tâm và các ion gần nhất';
      a.bao(to ? 'Ion <b>Na<sup>+</sup></b> ở tâm được bao quanh bởi <b>6 ion Cl<sup>−</sup></b> gần nhất (trên, dưới, trước, sau, trái, phải). Tương tự, mỗi ion Cl<sup>−</sup> cũng được bao quanh bởi 6 ion Na<sup>+</sup>.' : 'Các ion Na<sup>+</sup> và Cl<sup>−</sup> xếp <b>xen kẽ</b> nhau theo cả ba chiều không gian.'); ve(); }, { phu: true });
    a.nut('⏯ Tự quay', () => { tuQuay = !tuQuay; }, { phu: true });
    a.bao('Các ion Na<sup>+</sup> và Cl<sup>−</sup> xếp <b>xen kẽ</b> nhau theo cả ba chiều không gian.');
    ve();
    a.ket(`<p>• Trong tinh thể NaCl, các ion Na<sup>+</sup> và Cl<sup>−</sup> được phân bố <b>luân phiên, đều đặn</b> trên các đỉnh của các hình lập phương nhỏ.</p>
      <p>• Xung quanh mỗi ion đều có <b>6 ion ngược dấu</b> gần nhất.</p>
      <p>• Ở các nút mạng là ion dương và ion âm liên kết chặt chẽ với nhau (cân bằng lực hút và lực đẩy).</p>
      <p class="ghi">Mô hình đặc vẽ theo tỉ lệ bán kính ion: Na<sup>+</sup> nhỏ hơn Cl<sup>−</sup> nhiều.</p>`);
    a.hoi([{ h: 'Trong tinh thể NaCl, mỗi ion Na<sup>+</sup> được bao quanh bởi bao nhiêu ion Cl<sup>−</sup> gần nhất?', d: ['4', '6', '8', '12'], dung: 1 }]);
  } },

/* ---------- 3. Thử tính dẫn điện ---------- */
{ id: 'dan-dien', ic: '💡', ten: 'Thí nghiệm ảo: thử tính dẫn điện của hợp chất',
  mo: 'Cho hai chân dụng cụ thử tiếp xúc với nước đường, muối ăn khan, dung dịch muối ăn, muối ăn nóng chảy: đèn có sáng không? Vì sao?',
  chay(a) {
    a.huong('Chọn mẫu thử. Ô tròn bên phải là “kính lúp” cho thấy các hạt bên trong. Đèn sáng khi có <b>hạt mang điện chuyển động tự do</b>.');
    const MAU = {
      duong: { t: 'Dung dịch nước đường', sang: false, nen: '#e0f2fe' }, khan: { t: 'Muối ăn khan (rắn)', sang: false, nen: '#f8fafc' },
      dd: { t: 'Dung dịch muối ăn bão hoà', sang: true, nen: '#e0f2fe' }, nc: { t: 'Muối ăn nóng chảy (trên 801 °C)', sang: true, nen: '#fed7aa' } };
    const s = a.svg('0 0 400 270'), g = a.s('g', {}, s), kinh = a.s('g', {}, s), hat = a.s('g', {}, kinh);
    // mạch: pin, đèn, dây, hai điện cực
    a.s('path', { d: 'M60 120 L60 30 L150 30 M190 30 L250 30 L250 120', fill: 'none', stroke: 'var(--net)', 'stroke-width': 2.5 }, g);
    a.s('rect', { x: 92, y: 18, width: 30, height: 24, rx: 3, fill: '#334155' }, g); a.chu(g, 107, 34, 'pin', { 'font-size': 10, style: 'fill:#fff' });
    a.chu(g, 84, 22, '+', { 'font-size': 13, 'font-weight': 800, style: 'fill:#dc2626' }); a.chu(g, 130, 22, '−', { 'font-size': 13, 'font-weight': 800 });
    const den = a.s('circle', { cx: 170, cy: 30, r: 16, fill: '#e5e7eb', stroke: 'var(--net)', 'stroke-width': 2 }, g);
    const hao = a.s('circle', { cx: 170, cy: 30, r: 34, fill: '#fde047', opacity: 0 }, g);
    a.s('path', { d: 'M162 36 L166 24 L170 36 L174 24 L178 36', fill: 'none', stroke: '#78716c', 'stroke-width': 1.5 }, g);
    const coc = a.s('path', { d: 'M30 120 L30 240 Q30 255 45 255 L265 255 Q280 255 280 240 L280 120', fill: 'none', stroke: 'var(--kinhvien)', 'stroke-width': 2.5 }, g);
    const chat = a.s('rect', { x: 32, y: 150, width: 246, height: 103, fill: '#e0f2fe' }, g); g.insertBefore(chat, coc);
    a.s('rect', { x: 56, y: 110, width: 8, height: 120, fill: '#64748b' }, g); a.s('rect', { x: 246, y: 110, width: 8, height: 120, fill: '#64748b' }, g);
    const tinh = a.s('g', {}, g);
    // kính lúp
    a.s('circle', { cx: 335, cy: 175, r: 58, fill: 'var(--card)', stroke: 'var(--net2)', 'stroke-width': 3 }, kinh);
    const cl = a.s('clipPath', { id: 'kl11' }, a.s('defs', {}, s)); a.s('circle', { cx: 335, cy: 175, r: 56 }, cl); hat.setAttribute('clip-path', 'url(#kl11)');
    a.s('line', { x1: 285, y1: 200, x2: 262, y2: 210, stroke: 'var(--net2)', 'stroke-width': 2 }, kinh);
    kinh.appendChild(hat);   // vẽ các hạt lên trên nền kính lúp
    let mau = 'duong', P = [];
    function tao() {
      P = []; tinh.innerHTML = '';
      if (mau === 'khan') { chat.setAttribute('y', 200); chat.setAttribute('height', 53); chat.setAttribute('fill', '#f1f5f9');
        for (let i = 0; i < 40; i++) { const x = 36 + Math.random() * 235, y = 205 + Math.random() * 42; a.s('rect', { x, y, width: 6, height: 6, fill: '#fff', stroke: '#94a3b8', transform: `rotate(${Math.random() * 90} ${x + 3} ${y + 3})` }, tinh); }
        for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) P.push({ t: (i + j) % 2 ? 'Cl' : 'Na', x0: 299 + i * 18, y0: 139 + j * 18, rung: true }); }
      else { chat.setAttribute('y', 150); chat.setAttribute('height', 103); chat.setAttribute('fill', MAU[mau].nen);
        const them = (t, n) => { for (let i = 0; i < n; i++) P.push({ t, x0: 285 + Math.random() * 100, y0: 125 + Math.random() * 100, vx: (Math.random() - .5) * 50, vy: (Math.random() - .5) * 50 }); };
        if (mau === 'duong') { them('duong', 5); them('nuoc', 14); } else if (mau === 'dd') { them('Na', 7); them('Cl', 7); them('nuoc', 10); } else { them('Na', 12); them('Cl', 12); } }
      P.forEach(p => { p.x = p.x0; p.y = p.y0; });
      const sang = MAU[mau].sang; hao.setAttribute('opacity', sang ? .45 : 0); den.setAttribute('fill', sang ? '#fde047' : '#e5e7eb');
      a.bao(`<b>${MAU[mau].t}</b>: đèn <b>${sang ? 'SÁNG' : 'không sáng'}</b>. ` + {
        duong: 'Đường tan trong nước dưới dạng <b>phân tử</b> trung hoà điện, không có hạt mang điện tự do ⇒ không dẫn điện.',
        khan: 'Các ion Na<sup>+</sup>, Cl<sup>−</sup> bị giữ chặt ở nút mạng tinh thể, chỉ dao động tại chỗ, <b>không di chuyển tự do</b> ⇒ không dẫn điện.',
        dd: 'Khi tan trong nước, các ion bị tách khỏi mạng tinh thể, <b>chuyển động khá tự do</b>: Na<sup>+</sup> về cực âm, Cl<sup>−</sup> về cực dương ⇒ dẫn điện.',
        nc: 'Ở trạng thái nóng chảy, các ion cũng <b>chuyển động khá tự do</b> ⇒ dẫn điện.' }[mau]);
    }
    a.lap((dt, tt) => {
      hat.innerHTML = ''; const dien = MAU[mau].sang;
      P.forEach(p => {
        if (p.rung) { p.x = p.x0 + Math.sin(tt * 20 + p.x0) * 1.2; p.y = p.y0 + Math.cos(tt * 23 + p.y0) * 1.2; }
        else { if (dien && (p.t === 'Na' || p.t === 'Cl')) p.vx += (p.t === 'Na' ? 1 : -1) * 18 * dt;
          p.x += p.vx * dt; p.y += p.vy * dt; if (p.x < 282 || p.x > 388) { p.vx *= -.9; p.x = Math.max(282, Math.min(388, p.x)); } if (p.y < 122 || p.y > 228) { p.vy *= -1; } p.vx = Math.max(-60, Math.min(60, p.vx)); }
        const M = { Na: ['#a78bfa', 'Na⁺', 6.5], Cl: ['#4ade80', 'Cl⁻', 9], duong: ['#fbbf24', 'đường', 12], nuoc: ['#93c5fd', '', 4] }[p.t];
        a.s('circle', { cx: p.x, cy: p.y, r: M[2], fill: M[0], opacity: .95 }, hat); if (M[1]) a.chu(hat, p.x, p.y + 3, M[1], { 'font-size': p.t === 'duong' ? 7 : 7.5, 'font-weight': 700, style: 'fill:#1e293b' });
      });
      if (dien) { a.chu(hat, 290, 124, '− cực âm', { 'font-size': 8, 'text-anchor': 'start' }); a.chu(hat, 382, 124, 'cực dương +', { 'font-size': 8, 'text-anchor': 'end' }); }
    });
    a.chon(Object.keys(MAU).map(k => [k, MAU[k].t]), k => { mau = k; tao(); }, { td: 'Mẫu thử', dau: 'duong', imLang: true });
    tao();
    a.ket(`<p>• Nước đường, muối ăn khan: đèn <b>không sáng</b>. Dung dịch muối ăn, muối ăn nóng chảy: đèn <b>sáng</b>.</p>
      <p>• Ở trạng thái rắn, các ion không di chuyển tự do nên hợp chất ion <b>không dẫn điện</b>. Khi <b>tan trong nước</b> hoặc <b>nóng chảy</b>, các ion chuyển động khá tự do ⇒ hợp chất ion <b>dẫn điện</b>.</p>`);
    a.hoi([{ h: 'Hợp chất ion dẫn điện khi', d: ['ở trạng thái rắn', 'tan trong nước hoặc nóng chảy', 'ở mọi trạng thái', 'chỉ khi nóng chảy'], dung: 1 },
      { h: 'Vì sao muối ăn có nhiệt độ nóng chảy cao (801 °C)?', d: ['Vì phân tử NaCl rất nặng', 'Vì lực hút tĩnh điện giữa các ion trong tinh thể rất mạnh', 'Vì có liên kết hydrogen', 'Vì Na là kim loại'], dung: 1 }]);
  } },

/* ---------- 4. Vì sao tinh thể ion giòn? ---------- */
{ id: 'gion', ic: '🔨', ten: 'Vì sao tinh thể ion rắn chắc nhưng giòn?',
  mo: 'Dùng lực đẩy lệch một lớp ion: khi các ion cùng dấu đối diện nhau, lực đẩy làm tinh thể vỡ vụn.',
  chay(a) {
    a.huong('Kéo thanh <b>Lực tác dụng</b> (hoặc bấm <b>Gõ búa</b>) để đẩy lệch hai lớp ion phía trên. Quan sát các ion ở chỗ tiếp giáp.');
    const s = a.svg('0 0 400 260'), g = a.s('g', {}, s);
    const D = 40, C = 8, X0 = 40, Y0 = 50;
    let lech = 0, vo = 0, chay = false;
    function ve() {
      g.innerHTML = '';
      for (let r = 0; r < 4; r++) for (let c = 0; c < C; c++) {
        const tren = r < 2, x = X0 + c * D + (tren ? lech * D : 0), y = Y0 + r * D - (tren ? vo * 26 : 0) + (tren && vo ? Math.sin(c * 3.1) * vo * 10 : 0);
        const duong = (r + c) % 2 === 0; if (x > 390) continue;
        a.s('circle', { cx: x, cy: y, r: duong ? 12 : 16, fill: duong ? '#a78bfa' : '#4ade80', opacity: .95 }, g);
        a.chu(g, x, y + 4, duong ? '+' : '−', { 'font-size': 14, 'font-weight': 800, style: 'fill:#1e293b' });
      }
      if (lech > .7 && vo < .1) for (let c = 0; c < C; c++) { const x = X0 + c * D + lech * D; if (x > 380) continue;
        a.s('path', { d: `M${x} ${Y0 + D + 18} L${x} ${Y0 + D + 6} M${x - 4} ${Y0 + D + 10} L${x} ${Y0 + D + 6} L${x + 4} ${Y0 + D + 10} M${x} ${Y0 + 2 * D - 18} L${x} ${Y0 + 2 * D - 6} M${x - 4} ${Y0 + 2 * D - 10} L${x} ${Y0 + 2 * D - 6} L${x + 4} ${Y0 + 2 * D - 10}`, stroke: '#dc2626', 'stroke-width': 2, fill: 'none', opacity: (lech - .7) / .3 }, g); }
      if (lech < .05) a.chu(g, 200, 230, 'Mỗi ion bị các ion trái dấu bao quanh → hút mạnh → rắn chắc', { 'font-size': 11, class: 'mo' });
      else if (vo < .1) a.chu(g, 200, 230, lech > .7 ? 'Các ion CÙNG DẤU đối diện nhau → lực ĐẨY mạnh!' : 'Lớp trên bị đẩy lệch…', { 'font-size': 12.5, 'font-weight': 700, style: lech > .7 ? 'fill:#dc2626' : '' });
      else a.chu(g, 200, 230, '💥 Tinh thể vỡ ra theo mặt tiếp giáp', { 'font-size': 13, 'font-weight': 800, style: 'fill:#dc2626' });
      a.bao(vo > .1 ? 'Khi bị lực mạnh tác dụng, các lớp ion trượt lệch, các ion <b>cùng dấu</b> đối diện nhau, <b>đẩy nhau</b> ⇒ tinh thể bị vỡ vụn. Đây là lí do tinh thể ion <b>giòn</b>.' :
        'Giữa các ion có lực hút tĩnh điện rất mạnh nên tinh thể ion khá <b>rắn chắc</b>.');
    }
    a.lap(dt => { if (!chay) return; if (lech < 1) lech = Math.min(1, lech + dt * 1.4); else vo = Math.min(1, vo + dt * 1.2); if (vo >= 1) chay = false; tl.dat(lech, true); ve(); });
    const tl = a.thanh({ td: 'Lực tác dụng (đẩy lệch lớp trên)', min: 0, max: 1, buoc: 0.01, gt: 0, hien: v => Math.round(v * 100) + ' %', fn: v => { lech = v; if (v >= 1 && !vo) chay = true; ve(); } });
    const h = a.hang(a.nhom());
    a.nut('🔨 Gõ búa', () => { chay = true; }, { vao: h }); a.nut('↺ Làm lại', () => { chay = false; lech = 0; vo = 0; tl.dat(0, true); ve(); }, { vao: h, phu: true });
    ve();
    a.ket(`<p>• Lực hút tĩnh điện giữa các ion trái dấu rất mạnh ⇒ tinh thể ion <b>rắn chắc</b>, khó nóng chảy, khó bay hơi.</p>
      <p>• Khi có lực mạnh làm các lớp ion trượt lệch, ion cùng dấu đối diện nhau và đẩy nhau ⇒ tinh thể <b>giòn</b>, dễ vỡ vụn (ví dụ: tinh thể muối ăn cứng nhưng đập mạnh thì vỡ vụn).</p>`);
    a.hoi([{ h: 'Tinh thể muối ăn khi bị đập mạnh thì', d: ['bị dát mỏng', 'bị vỡ vụn', 'bị kéo thành sợi', 'không thay đổi'], dung: 1 }]);
  } },
] });
