/* Bài 12. Liên kết cộng hoá trị — 5 mô phỏng */
const DAD12 = { H: 2.20, Li: 0.98, Be: 1.57, B: 2.04, C: 2.55, N: 3.04, O: 3.44, F: 3.98, Na: 0.93, Mg: 1.31, Al: 1.61, Si: 1.90, P: 2.19, S: 2.58, Cl: 3.16, K: 0.82, Ca: 1.00, Br: 2.96, I: 2.66 };   // Bảng 6.2 SGK
const KIM_LOAI12 = ['Li', 'Be', 'Na', 'Mg', 'Al', 'K', 'Ca'];
const HOA_TRI12 = { H: 1, C: 4, N: 5, O: 6, F: 7, Cl: 7 };

MP_NAP({ ma: '12', ds: [

/* ---------- 1. Góp chung electron: công thức electron, Lewis, cấu tạo ---------- */
{ id: 'gop-chung', ic: '🔗', ten: 'Góp chung electron: công thức electron → Lewis → cấu tạo',
  mo: 'H₂, Cl₂, HCl, H₂O, NH₃, O₂, CO₂, N₂ và ion NH₄⁺ (liên kết cho – nhận): xem cặp electron dùng chung hình thành.',
  chay(a) {
    a.huong('Chọn chất, bấm <b>Cho liên kết</b>. Sau đó đổi cách viết: <b>công thức electron</b> (chấm) → <b>công thức Lewis</b> (cặp dùng chung thay bằng gạch) → <b>công thức cấu tạo</b>.');
    // nguyên tử: [kí hiệu, x, y] (đơn vị ô); liên kết: [i, j, bậc, cho] — cho: chỉ số nguyên tử góp cả cặp (liên kết cho – nhận)
    const PT = {
      H2: { n: [['H', -0.5, 0], ['H', 0.5, 0]], l: [[0, 1, 1]] }, Cl2: { n: [['Cl', -0.5, 0], ['Cl', 0.5, 0]], l: [[0, 1, 1]] }, HCl: { n: [['H', -0.5, 0], ['Cl', 0.5, 0]], l: [[0, 1, 1]] },
      H2O: { n: [['H', -1, 0], ['O', 0, 0], ['H', 1, 0]], l: [[0, 1, 1], [1, 2, 1]] }, NH3: { n: [['H', -1, 0], ['N', 0, 0], ['H', 1, 0], ['H', 0, 1]], l: [[0, 1, 1], [1, 2, 1], [1, 3, 1]] },
      O2: { n: [['O', -0.5, 0], ['O', 0.5, 0]], l: [[0, 1, 2]] }, CO2: { n: [['O', -1, 0], ['C', 0, 0], ['O', 1, 0]], l: [[0, 1, 2], [1, 2, 2]] }, N2: { n: [['N', -0.5, 0], ['N', 0.5, 0]], l: [[0, 1, 3]] },
      'NH4+': { n: [['H', -1, 0], ['N', 0, 0], ['H', 1, 0], ['H', 0, 1], ['H', 0, -1]], l: [[0, 1, 1], [1, 2, 1], [1, 3, 1], [1, 4, 1, 1]], ion: '+' },
    };
    const MAU = ['#2563eb', '#f59e0b', '#16a34a', '#db2777', '#7c3aed'];
    const s = a.svg('0 0 400 260'), g = a.s('g', {}, s);
    let pt = 'Cl2', t = 0, chay = false, cach = 'e';
    const L = 62, CX = 200, CY = 125, RE = 20;
    function ve() {
      g.innerHTML = ''; const P = PT[pt], e = t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2, tach = 1 + .75 * (1 - e);
      const pos = P.n.map(([k, x, y]) => [CX + x * L * tach, CY + y * L * tach]);
      const dot = (x, y, m) => a.s('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: 3.6, fill: MAU[m] }, g);
      // hướng đã dùng cho liên kết của từng nguyên tử
      const dung = P.n.map(() => []);
      P.l.forEach(([i, j]) => { const ux = Math.sign(P.n[j][1] - P.n[i][1]), uy = Math.sign(P.n[j][2] - P.n[i][2]); dung[i].push([ux, uy]); dung[j].push([-ux, -uy]); });
      // electron đóng góp vào liên kết
      const gop = P.n.map(() => 0);
      P.l.forEach(([i, j, k, cho], li) => {
        const [xi, yi] = pos[i], [xj, yj] = pos[j], d = Math.hypot(xj - xi, yj - yi), ux = (xj - xi) / d, uy = (yj - yi) / d, wx = -uy, wy = ux;
        const mx = (xi + xj) / 2, my = (yi + yj) / 2;
        if (cach !== 'e' && e > .98) {     // gạch nối
          for (let m = 0; m < k; m++) { const o = (m - (k - 1) / 2) * 7; const x1 = xi + ux * 15 + wx * o, y1 = yi + uy * 15 + wy * o, x2 = xj - ux * 15 + wx * o, y2 = yj - uy * 15 + wy * o;
            a.s('line', { x1, y1, x2, y2, stroke: 'var(--net)', 'stroke-width': 2.4 }, g);
            if (cho !== undefined) { const ax = cho === i ? x2 : x1, ay = cho === i ? y2 : y1, sx = cho === i ? ux : -ux, sy = cho === i ? uy : -uy; a.s('path', { d: `M${ax - sx * 9 + wx * 5} ${ay - sy * 9 + wy * 5} L${ax} ${ay} L${ax - sx * 9 - wx * 5} ${ay - sy * 9 - wy * 5}`, fill: 'none', stroke: 'var(--net)', 'stroke-width': 2.4 }, g); } }
          gop[i] += cho === undefined ? k : cho === i ? 2 : 0; gop[j] += cho === undefined ? k : cho === j ? 2 : 0; return;
        }
        if (cho !== undefined) {           // liên kết cho – nhận: cả cặp do nguyên tử cho góp
          const [dx0, dy0] = pos[cho], h = cho === i ? 1 : -1;
          [-4.5, 4.5].forEach(w => { const x0 = dx0 + ux * h * RE + wx * w, y0 = dy0 + uy * h * RE + wy * w, x1 = mx + wx * w, y1 = my + wy * w; dot(x0 + (x1 - x0) * e, y0 + (y1 - y0) * e, cho); });
          gop[cho] += 2;
        } else for (let m = 0; m < k; m++) {
          const o = (m - (k - 1) / 2) * 10;
          [[i, 1, -4.5], [j, -1, 4.5]].forEach(([a1, h, w]) => { const [px, py] = pos[a1];
            const x0 = px + ux * h * RE + wx * o * .9, y0 = py + uy * h * RE + wy * o * .9, x1 = mx + ux * o + wx * w, y1 = my + uy * o + wy * w;
            dot(x0 + (x1 - x0) * e, y0 + (y1 - y0) * e, a1); });
          gop[i]++; gop[j]++;
        }
      });
      // kí hiệu + cặp electron chưa liên kết
      P.n.forEach(([k], i) => { const [x, y] = pos[i];
        a.chu(g, x, y + 7, k, { 'font-size': 21, 'font-weight': 800 });
        const vt = pt === 'NH4+' && i === 4 ? 0 : (HOA_TRI12[k] || 0), con = Math.max(0, vt - gop[i]);
        if (cach === 'ct' && e > .98) return;
        const tu = [[0, -1], [1, 0], [0, 1], [-1, 0]].filter(([dx, dy]) => !dung[i].some(([ux, uy]) => ux === dx && uy === dy))
          .map(v => [v, -dung[i].reduce((t, [ux, uy]) => t + ux * v[0] + uy * v[1], 0)]).sort((p, q) => q[1] - p[1]).map(v => v[0]);
        for (let p = 0; p < con / 2; p++) { const [dx, dy] = tu[p % tu.length]; [-4.5, 4.5].forEach(w => dot(x + dx * RE - dy * w, y + dy * RE + dx * w, i)); }
        if (con % 2) { const [dx, dy] = tu[Math.floor(con / 2) % tu.length]; dot(x + dx * RE, y + dy * RE, i); }
      });
      if (P.ion && e > .98) { const xs = pos.map(p => p[0]), ys = pos.map(p => p[1]), x1 = Math.min(...xs) - 30, x2 = Math.max(...xs) + 30, y1 = Math.min(...ys) - 32, y2 = Math.max(...ys) + 32;
        a.s('path', { d: `M${x1 + 8} ${y1} L${x1} ${y1} L${x1} ${y2} L${x1 + 8} ${y2} M${x2 - 8} ${y1} L${x2} ${y1} L${x2} ${y2} L${x2 - 8} ${y2}`, fill: 'none', stroke: 'var(--net)', 'stroke-width': 1.6 }, g);
        a.chu(g, x2 + 10, y1 + 8, '+', { 'font-size': 16, 'font-weight': 800 }); }
      if (pt === 'NH4+' && e < .98) a.chu(g, pos[4][0], pos[4][1] - 22, 'H⁺ (orbital trống)', { 'font-size': 10, class: 'mo' }), a.chu(g, pos[4][0] + 16, pos[4][1] - 4, '+', { 'font-size': 13, 'font-weight': 800 });
      a.chu(g, 200, 250, e > .98 ? { e: 'Công thức electron', lewis: 'Công thức Lewis', ct: 'Công thức cấu tạo' }[cach] : 'Các nguyên tử với electron hoá trị', { 'font-size': 12, class: 'mo' });
      moTa(e > .98);
    }
    function moTa(xong) {
      const T = {
        H2: 'Mỗi H góp 1 electron ⇒ 1 cặp electron dùng chung (liên kết đơn). Mỗi H có 2 electron như He.',
        Cl2: 'Mỗi Cl góp 1 electron ⇒ 1 cặp dùng chung (liên kết đơn). Mỗi Cl có 8 electron lớp ngoài cùng.',
        HCl: 'H và Cl mỗi nguyên tử góp 1 electron ⇒ liên kết đơn. H có 2 electron (như He), Cl có 8 electron.',
        H2O: 'O góp 2 electron, mỗi H góp 1 ⇒ 2 liên kết đơn O–H. O còn 2 cặp electron chưa liên kết.',
        NH3: 'N góp 3 electron, mỗi H góp 1 ⇒ 3 liên kết đơn N–H. N còn 1 cặp electron chưa liên kết.',
        O2: 'Mỗi O góp 2 electron ⇒ 2 cặp dùng chung: <b>liên kết đôi</b> O=O.',
        CO2: 'C góp 4 electron, mỗi O góp 2 ⇒ hai <b>liên kết đôi</b> O=C=O. Mỗi nguyên tử có 8 electron lớp ngoài cùng.',
        N2: 'Mỗi N góp 3 electron ⇒ 3 cặp dùng chung: <b>liên kết ba</b> N≡N.',
        'NH4+': 'Cặp electron chưa liên kết của N trong NH<sub>3</sub> đi vào orbital trống của ion H<sup>+</sup>: cặp dùng chung chỉ do N góp ⇒ <b>liên kết cho – nhận</b> (kí hiệu N → H). Trong ion NH<sub>4</sub><sup>+</sup>, bốn liên kết N–H tương đương nhau.' };
      a.bao(xong ? T[pt] : `Chọn cách đóng góp electron: bấm <b>Cho liên kết</b> để xem.`);
    }
    a.lap(dt => { if (!chay) return; t = Math.min(1, t + dt * .55); if (t >= 1) chay = false; ve(); });
    a.chon(Object.keys(PT).map(k => [k, ctHTML(k.replace('+', '^+'))]), k => { pt = k; t = 0; chay = false; cach = 'e'; cc.dat('e', true); ve(); }, { td: 'Chất', dau: 'Cl2', imLang: true });
    const h = a.hang(a.nhom());
    a.nut('🔗 Cho liên kết', () => { t = 0; chay = true; }, { vao: h }); a.nut('↺ Tách ra', () => { t = 0; chay = false; ve(); }, { vao: h, phu: true });
    const cc = a.chon([['e', 'Công thức electron'], ['lewis', 'Công thức Lewis'], ['ct', 'Công thức cấu tạo']], k => { cach = k; if (t < 1) { t = 1; chay = false; } ve(); }, { td: 'Cách viết (sau khi liên kết)', dau: 'e', imLang: true });
    ve();
    a.ket(`<p>• <b>Liên kết cộng hoá trị</b> là liên kết được tạo thành giữa hai nguyên tử bằng một hay nhiều <b>cặp electron dùng chung</b>.</p>
      <p>• 1 cặp dùng chung: liên kết <b>đơn</b> (—); 2 cặp: liên kết <b>đôi</b> (=); 3 cặp: liên kết <b>ba</b> (≡).</p>
      <p>• Cặp dùng chung chỉ do một nguyên tử đóng góp: liên kết <b>cho – nhận</b> (kí hiệu mũi tên từ nguyên tử cho sang nguyên tử nhận).</p>
      <p>• Từ công thức electron, thay mỗi cặp electron dùng chung bằng một gạch nối ⇒ công thức Lewis.</p>`);
    a.hoi([
      { h: 'Phân tử N<sub>2</sub> có', d: ['1 liên kết đơn', '1 liên kết đôi', '1 liên kết ba', '2 liên kết đôi'], dung: 2 },
      { h: 'Trong ion NH<sub>4</sub><sup>+</sup>, liên kết cho – nhận được tạo thành do', d: ['H<sup>+</sup> góp cặp electron', 'N góp cặp electron chưa liên kết', 'mỗi nguyên tử góp 1 electron', 'N nhường electron cho H'], dung: 1 },
    ]);
  } },

/* ---------- 2. Độ âm điện và loại liên kết ---------- */
{ id: 'hieu-do-am-dien', ic: '🧲', ten: 'Kéo co electron: hiệu độ âm điện quyết định loại liên kết',
  mo: 'Chọn hai nguyên tố: cặp electron dùng chung bị kéo lệch về phía nguyên tử có độ âm điện lớn hơn. Phân loại theo Bảng 12.1.',
  chay(a) {
    a.huong('Chọn nguyên tử <b>A</b> và <b>B</b>. Cặp electron liên kết (chấm vàng) bị kéo về phía nguyên tử có độ âm điện lớn hơn. Thanh dưới cho thấy |Δχ| rơi vào vùng nào.');
    const s = a.svg('0 0 400 250'), g = a.s('g', {}, s);
    let A = 'H', B = 'Cl';
    function ve() {
      g.innerHTML = '';
      const xa = DAD12[A], xb = DAD12[B], d = Math.abs(xa - xb), dd = Math.round(d * 100) / 100, xA = 110, xB = 290, cy = 95;
      const ion = dd >= 1.7 && !(A + B === 'HF' || A + B === 'FH'), cuc = dd >= 0.4;
      const huong = xb > xa ? 1 : xb < xa ? -1 : 0, lech = ion ? 1 : Math.min(1, dd / 1.7) * .8;
      const xe = 200 + huong * lech * 80;
      // đám mây electron
      if (!ion) a.s('ellipse', { cx: (200 + xe) / 2, cy, rx: 120 - lech * 20, ry: 46, fill: '#fde68a', opacity: .45 }, g);
      if (ion) a.s('circle', { cx: huong > 0 ? xB : xA, cy, r: 48, fill: '#fde68a', opacity: .5 }, g);
      [[xA, A, xa, -huong], [xB, B, xb, huong]].forEach(([x, k, v, h]) => {
        a.s('circle', { cx: x, cy, r: 30, fill: KIM_LOAI12.includes(k) ? '#bfdbfe' : '#e9d5ff', stroke: 'var(--net2)' }, g);
        a.chu(g, x, cy + 7, k, { 'font-size': 20, 'font-weight': 800, style: 'fill:#1e293b' });
        a.chu(g, x, cy + 48, 'χ = ' + String(v.toFixed(2)).replace('.', ','), { 'font-size': 12 });
        if (cuc && huong) a.chu(g, x, cy - 38, ion ? (h > 0 ? '−' : '+') : (h > 0 ? 'δ−' : 'δ+'), { 'font-size': 16, 'font-weight': 800, style: h > 0 ? 'fill:#2563eb' : 'fill:#dc2626' });
      });
      [-4.5, 4.5].forEach(w => a.s('circle', { cx: ion ? (huong > 0 ? xB - 36 : xA + 36) : xe, cy: cy + w, r: 4.2, fill: '#d97706' }, g));
      // thang Δχ
      const X0 = 30, X1 = 370, k = (X1 - X0) / 3.2, yT = 190;
      [[0, .4, '#bbf7d0', 'CHT không cực', 'start'], [.4, 1.7, '#fde68a', 'CHT phân cực', 'middle'], [1.7, 3.2, '#fecaca', 'ion', 'middle']].forEach(([u, v, m, t, neo], i) => {
        a.s('rect', { x: X0 + u * k, y: yT, width: (v - u) * k, height: 18, fill: m }, g); a.chu(g, neo === 'start' ? X0 - 6 : X0 + (u + v) / 2 * k + (i === 1 ? 18 : 0), yT + (i === 0 ? 46 : 33), t, { 'font-size': 10, 'text-anchor': neo }); });
      [0, .4, 1.7, 3.2].forEach(v => a.chu(g, X0 + v * k, yT - 4, String(v).replace('.', ','), { 'font-size': 9.5, class: 'mo' }));
      const mx = X0 + Math.min(3.2, dd) * k; a.s('path', { d: `M${mx} ${yT + 20} L${mx - 7} ${yT + 30} L${mx + 7} ${yT + 30} Z`, fill: 'var(--net)' }, g);
      a.s('line', { x1: mx, y1: yT - 2, x2: mx, y2: yT + 20, stroke: 'var(--net)', 'stroke-width': 2.5 }, g);
      let loai = dd < 0.4 ? 'cộng hoá trị không phân cực' : dd < 1.7 ? 'cộng hoá trị phân cực' : 'ion';
      let ghi = '';
      if (A + B === 'HF' || A + B === 'FH') { loai = 'cộng hoá trị phân cực'; ghi = '<br>⚠ <b>Ngoại lệ</b>: |Δχ| ≥ 1,7 nhưng liên kết H–F vẫn là liên kết cộng hoá trị phân cực (SGK nêu HF là trường hợp ngoại lệ).'; }
      if (KIM_LOAI12.includes(A) && KIM_LOAI12.includes(B)) { a.bao(`${A} và ${B} đều là kim loại — giữa các kim loại không tạo liên kết cộng hoá trị hay liên kết ion kiểu này. Em chọn ít nhất một phi kim nhé.`); return; }
      a.bao(`|Δχ| = |${String(xb.toFixed(2)).replace('.', ',')} − ${String(xa.toFixed(2)).replace('.', ',')}| = <b>${String(dd.toFixed(2)).replace('.', ',')}</b> ⇒ liên kết <b>${loai}</b>.` +
        (huong === 0 ? ' Cặp electron dùng chung không bị hút lệch về phía nguyên tử nào.' : ion && !ghi ? ` Cặp electron chuyển hẳn về ${xb > xa ? B : A} (tạo ion âm), ${xb > xa ? A : B} thành ion dương.` : ` Cặp electron dùng chung lệch về phía <b>${xb > xa ? B : A}</b> (độ âm điện lớn hơn).`) + ghi);
    }
    const ds = Object.keys(DAD12).map(k => [k, k]);
    const cA = a.chon(ds, k => { A = k; ve(); }, { td: 'Nguyên tử A', dau: 'H', imLang: true });
    const cB = a.chon(ds, k => { B = k; ve(); }, { td: 'Nguyên tử B', dau: 'Cl', imLang: true });
    const h = a.hang(a.nhom('Ví dụ SGK'));
    [['H', 'Cl'], ['C', 'O'], ['Na', 'Cl'], ['Mg', 'Cl'], ['Al', 'Cl'], ['H', 'Br'], ['O', 'O'], ['N', 'H']].forEach(([x, y]) => a.nut(x + '–' + y, () => { A = x; B = y; cA.dat(x, true); cB.dat(y, true); ve(); }, { vao: h, nho: true, phu: true }));
    ve();
    a.ket(`<table class="bang"><tr><th>Hiệu độ âm điện |Δχ|</th><th>Loại liên kết</th></tr><tr><td>0 ≤ |Δχ| &lt; 0,4</td><td>cộng hoá trị không phân cực</td></tr>
      <tr><td>0,4 ≤ |Δχ| &lt; 1,7</td><td>cộng hoá trị phân cực</td></tr><tr><td>|Δχ| ≥ 1,7</td><td>ion</td></tr></table>
      <p>Liên kết cộng hoá trị phân cực là dạng trung gian giữa liên kết cộng hoá trị không phân cực và liên kết ion. Có ngoại lệ như HF, MnI<sub>2</sub>.</p>`);
    a.hoi([
      { h: 'Liên kết trong phân tử HCl (χ: H = 2,20; Cl = 3,16) là', d: ['ion', 'cộng hoá trị không phân cực', 'cộng hoá trị phân cực', 'cho – nhận'], dung: 2 },
      { h: 'Liên kết trong MgCl<sub>2</sub> (χ: Mg = 1,31; Cl = 3,16) là', d: ['ion', 'cộng hoá trị phân cực', 'cộng hoá trị không phân cực', 'kim loại'], dung: 0, g: '|Δχ| = 1,85 ≥ 1,7.' },
    ]);
  } },

/* ---------- 3. Xen phủ orbital: liên kết σ và π ---------- */
{ id: 'xen-phu', ic: '🫧', ten: 'Xen phủ orbital: liên kết σ (xen phủ trục) và π (xen phủ bên)',
  mo: 'Kéo hai nguyên tử lại gần: s – s (H₂), s – p (HF), p – p (Cl₂) tạo liên kết σ; hai orbital p song song tạo liên kết π.',
  chay(a) {
    a.huong('Chọn kiểu xen phủ, kéo thanh <b>Đưa hai nguyên tử lại gần</b>. Vùng <span style="color:#dc2626">đỏ</span> là vùng xen phủ — mật độ electron lớn, hút hai hạt nhân lại với nhau.');
    const s = a.svg('0 0 400 240'), def = a.s('defs', {}, s), g = a.s('g', {}, s);
    let kieu = 'ss', u = 0;
    function hinh(loai, cx, cy, huong, cha, at) {     // trả về nhóm hình orbital
      const o = at ? a.s('g', at, cha) : cha;
      if (loai === 's') a.s('circle', { cx, cy, r: 53 }, o);
      else if (loai === 'p') { a.s('ellipse', { cx: cx + huong * 40, cy, rx: 40, ry: 24 }, o); a.s('ellipse', { cx: cx - huong * 40, cy, rx: 40, ry: 24 }, o); }
      else { a.s('ellipse', { cx, cy: cy - 40, rx: 24, ry: 40 }, o); a.s('ellipse', { cx, cy: cy + 40, rx: 24, ry: 40 }, o); }   // p đứng
      return o;
    }
    function ve() {
      g.innerHTML = ''; def.innerHTML = '';
      const cy = 115, KT = { ss: [220, 74], sp: [210, 92], pp: [230, 118], pi: [180, 70] }[kieu], d = KT[0] - (KT[0] - KT[1]) * u;
      const xa = 200 - d / 2, xb = 200 + d / 2;
      const [la, lb] = { ss: ['s', 's'], sp: ['s', 'p'], pp: ['p', 'p'], pi: ['pd', 'pd'] }[kieu];
      const cl = a.s('clipPath', { id: 'xp12' }, def); hinh(la, xa, cy, 1, cl);
      hinh(la, xa, cy, 1, g, { fill: '#60a5fa', opacity: .45, stroke: '#2563eb' }); hinh(lb, xb, cy, -1, g, { fill: '#fbbf24', opacity: .45, stroke: '#d97706' });
      hinh(lb, xb, cy, -1, g, { fill: '#dc2626', opacity: .75, 'clip-path': 'url(#xp12)' });
      a.s('line', { x1: 20, y1: cy, x2: 380, y2: cy, stroke: 'var(--net2)', 'stroke-dasharray': '5 4' }, g); a.chu(g, 376, cy - 6, 'trục liên kết', { 'font-size': 9.5, 'text-anchor': 'end', class: 'mo' });
      [[xa, kieu === 'sp' ? 'H' : kieu === 'ss' ? 'H' : kieu === 'pp' ? 'Cl' : 'C'], [xb, kieu === 'sp' ? 'F' : kieu === 'ss' ? 'H' : kieu === 'pp' ? 'Cl' : 'C']].forEach(([x, k]) => { a.s('circle', { cx: x, cy, r: 4, fill: '#111827' }, g); a.chu(g, x, cy + 22 + (kieu === 'pi' ? 52 : 40), k, { 'font-size': 14, 'font-weight': 800 }); });
      const pm = kieu === 'ss' ? Math.round(d) : null;
      a.chu(g, 200, 226, kieu === 'ss' ? `Hai hạt nhân cách nhau ${pm} pm ${pm <= 74 ? '= độ dài liên kết H–H' : pm < 106 ? '(< 106 pm: đang xen phủ)' : ''}` : u > .98 ? (kieu === 'pi' ? 'Xen phủ bên ⇒ liên kết π' : 'Xen phủ trục ⇒ liên kết σ') : '', { 'font-size': 12, 'font-weight': 700 });
      const T = { ss: 'Orbital 1s của hai nguyên tử H xen phủ <b>theo trục liên kết</b> ⇒ liên kết σ trong H<sub>2</sub>. Độ dài liên kết H–H (74 pm) ngắn hơn tổng bán kính hai nguyên tử H (106 pm).',
        sp: 'Orbital 1s của H xen phủ với orbital 2p của F <b>theo trục liên kết</b> ⇒ liên kết σ trong HF. Vùng xen phủ càng lớn, liên kết càng bền.',
        pp: 'Hai orbital 3p của hai nguyên tử Cl xen phủ <b>theo trục liên kết</b> ⇒ liên kết σ trong Cl<sub>2</sub>.',
        pi: 'Hai orbital p có trục <b>song song</b> với nhau và <b>vuông góc</b> với trục liên kết xen phủ <b>bên</b> (phía trên và phía dưới trục) ⇒ liên kết π. Liên kết π có trong liên kết đôi, liên kết ba (như C<sub>2</sub>H<sub>4</sub>, N<sub>2</sub>).' };
      a.bao(u < .05 ? 'Hai nguyên tử còn ở xa nhau: chưa có vùng xen phủ.' : T[kieu]);
    }
    a.chon([['ss', 's – s (H₂)'], ['sp', 's – p (HF)'], ['pp', 'p – p trục (Cl₂)'], ['pi', 'p – p bên (π)']], k => { kieu = k; ve(); }, { td: 'Kiểu xen phủ', dau: 'ss', imLang: true });
    a.thanh({ td: 'Đưa hai nguyên tử lại gần', min: 0, max: 1, buoc: .01, gt: 0, hien: v => Math.round(v * 100) + ' %', fn: v => { u = v; ve(); } });
    ve();
    a.ket(`<p>• <b>Xen phủ trục</b> (theo trục liên kết) tạo <b>liên kết σ</b>: mật độ electron lớn nhất dọc theo trục liên kết. Các liên kết đơn đều là liên kết σ.</p>
      <p>• <b>Xen phủ bên</b> (trục orbital song song nhau, vuông góc với trục liên kết) tạo <b>liên kết π</b>.</p>
      <p>• Liên kết đôi = 1σ + 1π; liên kết ba = 1σ + 2π.</p>`);
    a.hoi([{ h: 'Số liên kết σ và π trong phân tử C<sub>2</sub>H<sub>4</sub> lần lượt là', d: ['4 và 0', '2 và 0', '1 và 1', '5 và 1'], dung: 3, g: '4 liên kết C–H (σ) + liên kết đôi C=C (1σ + 1π).' }]);
  } },

/* ---------- 4. Mô hình phân tử 3D ---------- */
{ id: 'phan-tu-3d', ic: '🧬', ten: 'Lắp ráp mô hình phân tử 3D: đếm liên kết đơn, đôi, ba, σ, π',
  mo: 'CH₄, C₂H₄, C₂H₂, C₂H₅OH, CH₃COOH (như bộ lắp ráp trong SGK): xoay phân tử, đếm các loại liên kết.',
  chay(a) {
    a.huong('<b>Kéo để xoay</b> phân tử. Quả cầu đen: C, trắng: H, đỏ: O. Đếm số liên kết đơn, đôi, ba rồi bấm <b>Đếm giúp em</b> để kiểm tra.');
    const T = [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]].map(v => v.map(x => x / Math.sqrt(3)));
    const PT = {
      CH4: { n: [['C', 0, 0, 0]].concat(T.map(v => ['H', ...v.map(x => x * 1.09)])), l: [[0, 1, 1], [0, 2, 1], [0, 3, 1], [0, 4, 1]] },
      C2H4: { n: [['C', -.67, 0, 0], ['C', .67, 0, 0], ['H', -1.23, .93, 0], ['H', -1.23, -.93, 0], ['H', 1.23, .93, 0], ['H', 1.23, -.93, 0]], l: [[0, 1, 2], [0, 2, 1], [0, 3, 1], [1, 4, 1], [1, 5, 1]] },
      C2H2: { n: [['C', -.6, 0, 0], ['C', .6, 0, 0], ['H', -1.66, 0, 0], ['H', 1.66, 0, 0]], l: [[0, 1, 3], [0, 2, 1], [1, 3, 1]] },
      C2H5OH: { n: [['C', -.76, 0, 0], ['C', .76, 0, 0], ['O', 1.27, 1.33, 0], ['H', 2.23, 1.3, 0], ['H', -1.12, 1.03, 0], ['H', -1.12, -.51, .89], ['H', -1.12, -.51, -.89], ['H', 1.12, -.51, .89], ['H', 1.12, -.51, -.89]],
        l: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 4, 1], [0, 5, 1], [0, 6, 1], [1, 7, 1], [1, 8, 1]] },
      CH3COOH: { n: [['C', -.75, 0, 0], ['C', .75, 0, 0], ['O', 1.4, 1.05, 0], ['O', 1.45, -1.15, 0], ['H', 2.4, -1.0, 0], ['H', -1.11, 1.03, 0], ['H', -1.11, -.51, .89], ['H', -1.11, -.51, -.89]],
        l: [[0, 1, 1], [1, 2, 2], [1, 3, 1], [3, 4, 1], [0, 5, 1], [0, 6, 1], [0, 7, 1]] },
    };
    const TEN = { CH4: 'methane', C2H4: 'ethene', C2H2: 'ethyne', C2H5OH: 'ethanol', CH3COOH: 'ethanoic acid' };
    const s = a.svg('0 0 400 280'), def = a.s('defs', {}, s), g = a.s('g', {}, s);
    [['qC', '#6b7280', '#111827'], ['qH', '#ffffff', '#cbd5e1'], ['qO', '#fca5a5', '#b91c1c']].forEach(([id, c1, c2]) => { const r = a.s('radialGradient', { id, cx: '35%', cy: '30%', r: '70%' }, def); a.s('stop', { offset: '0', 'stop-color': '#fff' }, r); a.s('stop', { offset: '.3', 'stop-color': c1 }, r); a.s('stop', { offset: '1', 'stop-color': c2 }, r); });
    let pt = 'C2H4', ax = .5, ay = -.35, tuQuay = true, dem = false;
    function ve() {
      g.innerHTML = ''; const P = PT[pt], K = 62, tb = [1, 2, 3].map(c => P.n.reduce((t, n) => t + n[c], 0) / P.n.length);
      const Q = P.n.map(([k, x, y, z]) => { const q = xoay3([(x - tb[0]) * K, -(y - tb[1]) * K, (z - tb[2]) * K], ax, ay); return { k, q, c: chieu(q, 200, 140, 650, 1) }; });
      const vat = [];
      P.l.forEach(([i, j, b]) => vat.push({ z: (Q[i].q[2] + Q[j].q[2]) / 2 + 8, ve: () => {
        const [x1, y1] = Q[i].c, [x2, y2] = Q[j].c, d = Math.hypot(x2 - x1, y2 - y1) || 1, wx = -(y2 - y1) / d, wy = (x2 - x1) / d;
        for (let m = 0; m < b; m++) { const o = (m - (b - 1) / 2) * 7; a.s('line', { x1: x1 + wx * o, y1: y1 + wy * o, x2: x2 + wx * o, y2: y2 + wy * o, stroke: dem ? ['#16a34a', '#2563eb', '#db2777'][b - 1] : '#94a3b8', 'stroke-width': 4.5, 'stroke-linecap': 'round' }, g); } } }));
      Q.forEach(o => vat.push({ z: o.q[2], ve: () => { const r = { C: 17, H: 11, O: 16 }[o.k] * o.c[2]; a.s('circle', { cx: o.c[0].toFixed(1), cy: o.c[1].toFixed(1), r: r.toFixed(1), fill: 'url(#q' + o.k + ')', stroke: '#0003' }, g);
        a.chu(g, o.c[0], o.c[1] + 4, o.k, { 'font-size': 10, 'font-weight': 800, style: o.k === 'H' ? 'fill:#334155' : 'fill:#fff' }); } }));
      vat.sort((u, v) => v.z - u.z).forEach(v => v.ve());
      if (dem) { [['đơn', '#16a34a'], ['đôi', '#2563eb'], ['ba', '#db2777']].forEach(([t, m], i) => { a.s('line', { x1: 20 + i * 120, y1: 266, x2: 44 + i * 120, y2: 266, stroke: m, 'stroke-width': 4.5 }, g); a.chu(g, 50 + i * 120, 270, 'liên kết ' + t, { 'font-size': 10.5, 'text-anchor': 'start' }); }); }
    }
    function moTa() {
      const P = PT[pt], don = P.l.filter(l => l[2] === 1).length, doi = P.l.filter(l => l[2] === 2).length, ba = P.l.filter(l => l[2] === 3).length;
      const sig = P.l.length, pi = P.l.reduce((s, l) => s + l[2] - 1, 0);
      a.bao(dem ? `<b>${ctHTML(pt)}</b> (${TEN[pt]}): <b>${don}</b> liên kết đơn, <b>${doi}</b> liên kết đôi, <b>${ba}</b> liên kết ba ⇒ <b>${sig} liên kết σ</b> và <b>${pi} liên kết π</b>.` : `<b>${ctHTML(pt)}</b> (${TEN[pt]}). Em đếm xem có bao nhiêu liên kết đơn, đôi, ba?`);
    }
    a.xoay(s, (dx, dy) => { ax += dx; ay += dy; ve(); }); s.addEventListener('pointerdown', () => { tuQuay = false; });
    a.lap(dt => { if (tuQuay) { ax += dt * .4; ve(); } });
    a.chon(Object.keys(PT).map(k => [k, ctHTML(k)]), k => { pt = k; dem = false; ve(); moTa(); }, { td: 'Phân tử', dau: 'C2H4', imLang: true });
    const h = a.hang(a.nhom());
    a.nut('🔢 Đếm giúp em', () => { dem = true; ve(); moTa(); }, { vao: h }); a.nut('⏯ Tự quay', () => { tuQuay = !tuQuay; }, { vao: h, phu: true });
    ve(); moTa();
    a.ket(`<p>• CH<sub>4</sub>: 4 liên kết đơn. C<sub>2</sub>H<sub>4</sub>: 4 đơn + 1 đôi. C<sub>2</sub>H<sub>2</sub>: 2 đơn + 1 ba. C<sub>2</sub>H<sub>5</sub>OH: 8 đơn. CH<sub>3</sub>COOH: 6 đơn + 1 đôi.</p>
      <p>• Mỗi liên kết (đơn, đôi hay ba) có <b>1 liên kết σ</b>; liên kết đôi có thêm 1 π, liên kết ba có thêm 2 π.</p>`);
    a.hoi([{ h: 'Phân tử C<sub>2</sub>H<sub>2</sub> có số liên kết σ và π là', d: ['3σ, 2π', '2σ, 3π', '5σ, 0π', '3σ, 1π'], dung: 0 }]);
  } },

/* ---------- 5. Năng lượng liên kết ---------- */
{ id: 'nang-luong-lien-ket', ic: '🔥', ten: 'Năng lượng liên kết: cần bao nhiêu để bẻ gãy một liên kết?',
  mo: 'Cấp năng lượng cho phân tử ở thể khí: khi đủ năng lượng liên kết Eb, liên kết bị phá vỡ. So sánh độ bền các liên kết (Bảng 12.2).',
  chay(a) {
    a.huong('Chọn liên kết, kéo thanh <b>Năng lượng cung cấp</b>. Liên kết bị phá vỡ khi năng lượng ≥ E<sub>b</sub>. Biểu đồ bên dưới so sánh các liên kết cùng nhóm.');
    const EB = { 'F—F': 159, 'Cl—Cl': 243, 'Br—Br': 193, 'I—I': 151, 'H—F': 569, 'H—Cl': 432, 'H—Br': 366, 'H—I': 299, 'H—H': 436, 'C—C': 346, 'C=C': 612, 'C≡C': 835, 'C—H': 418, 'C=O': 732, 'O=O': 494, 'N≡N': 945, 'N—H': 386, 'O—H': 459 };
    const NHOM = { 'Đơn chất halogen': ['F—F', 'Cl—Cl', 'Br—Br', 'I—I'], 'Hydrogen halide': ['H—F', 'H—Cl', 'H—Br', 'H—I'], 'Liên kết C–C': ['C—C', 'C=C', 'C≡C'], 'Khác': ['H—H', 'C—H', 'N—H', 'O—H', 'O=O', 'C=O', 'N≡N'] };
    const s = a.svg('0 0 400 270'), g = a.s('g', {}, s);
    let lk = 'Cl—Cl', E = 0, nhom = 'Đơn chất halogen';
    function ve(tt) {
      g.innerHTML = ''; const eb = EB[lk], dut = E >= eb, [A, B] = lk.split(/[—=≡]/), bac = lk.includes('≡') ? 3 : lk.includes('=') ? 2 : 1;
      const rung = Math.min(1, E / eb) * 8 * Math.sin((tt || 0) * 30), xa = dut ? 120 - Math.min(60, (E - eb) * .5 + 30) : 160 - rung, xb = dut ? 280 + Math.min(60, (E - eb) * .5 + 30) : 240 + rung;
      if (!dut) for (let m = 0; m < bac; m++) { const o = (m - (bac - 1) / 2) * 8; a.s('line', { x1: xa, y1: 70 + o, x2: xb, y2: 70 + o, stroke: '#94a3b8', 'stroke-width': 5 }, g); }
      [[xa, A], [xb, B]].forEach(([x, k]) => { a.s('circle', { cx: x, cy: 70, r: k === 'H' ? 18 : 26, fill: { H: '#f1f5f9', C: '#374151', O: '#ef4444', N: '#3b82f6', F: '#a3e635', Cl: '#22c55e', Br: '#b45309', I: '#7c3aed' }[k], stroke: '#0003' }, g);
        a.chu(g, x, 76, k, { 'font-size': 15, 'font-weight': 800, style: k === 'H' ? 'fill:#334155' : 'fill:#fff' }); });
      a.chu(g, 200, 124, dut ? '💥 Liên kết bị phá vỡ thành các nguyên tử ở thể khí' : `Đã cấp ${E} / ${eb} kJ/mol`, { 'font-size': 12.5, 'font-weight': 700, style: dut ? 'fill:#dc2626' : '' });
      // biểu đồ nhóm
      const ds = NHOM[nhom], max = 1000, X0 = 30, bw = (340 / ds.length);
      ds.forEach((k, i) => { const h = EB[k] / max * 100, x = X0 + i * bw + 6;
        a.s('rect', { x, y: 250 - h, width: bw - 12, height: h, rx: 3, fill: k === lk ? '#f59e0b' : '#93c5fd' }, g);
        a.chu(g, x + (bw - 12) / 2, 245 - h, String(EB[k]), { 'font-size': 10, 'font-weight': 700 }); a.chu(g, x + (bw - 12) / 2, 263, k, { 'font-size': 10 }); });
      a.chu(g, 30, 144, 'Eb (kJ/mol) — Bảng 12.2 SGK', { 'font-size': 10, 'text-anchor': 'start', class: 'mo' });
    }
    let tt = 0; a.lap(dt => { tt += dt; ve(tt); });
    const capNhat = () => { const eb = EB[lk]; a.bao(E >= eb ? `Năng lượng cung cấp ≥ E<sub>b</sub> = <b>${eb} kJ/mol</b> ⇒ 1 mol liên kết ${lk} bị phá vỡ thành các nguyên tử ở thể khí. E<sub>b</sub> càng lớn, liên kết càng <b>bền</b>.` : `Cần <b>${eb} kJ</b> để phá vỡ 1 mol liên kết ${lk} (thể khí). Chưa đủ năng lượng, liên kết chỉ dao động mạnh hơn.`); };
    const te = a.thanh({ td: 'Năng lượng cung cấp (kJ/mol)', min: 0, max: 1000, buoc: 1, gt: 0, fn: v => { E = v; capNhat(); } });
    const cn = a.chon(Object.keys(NHOM).map(k => [k, k]), k => { nhom = k; lk = NHOM[k][0]; dsLk(); E = 0; te.dat(0, true); capNhat(); }, { td: 'Nhóm liên kết', dau: nhom, imLang: true });
    const nLk = a.nhom('Liên kết'); let cLk = null;
    function dsLk() { nLk.querySelectorAll('.chon').forEach(e => e.remove()); cLk = a.chon(NHOM[nhom].map(k => [k, k]), k => { lk = k; E = 0; te.dat(0, true); capNhat(); }, { vao: nLk, dau: lk, imLang: true }); }
    dsLk(); capNhat();
    a.ket(`<p>• <b>Năng lượng liên kết (E<sub>b</sub>)</b> là năng lượng cần thiết để phá vỡ một liên kết hoá học trong phân tử ở thể khí thành các nguyên tử ở thể khí (đơn vị kJ/mol).</p>
      <p>• E<sub>b</sub> càng lớn, liên kết càng bền, phân tử càng khó bị phân huỷ. Ví dụ: Cl—Cl (243) &gt; Br—Br (193) &gt; I—I (151); C≡C &gt; C=C &gt; C—C.</p>`);
    a.hoi([{ h: 'Dựa vào E<sub>b</sub>, độ bền liên kết của Cl<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub> giảm dần theo thứ tự', d: ['I<sub>2</sub> > Br<sub>2</sub> > Cl<sub>2</sub>', 'Br<sub>2</sub> > Cl<sub>2</sub> > I<sub>2</sub>', 'Cl<sub>2</sub> > Br<sub>2</sub> > I<sub>2</sub>', 'Cl<sub>2</sub> > I<sub>2</sub> > Br<sub>2</sub>'], dung: 2 },
      { h: 'E<sub>b</sub> của Cl—Cl là 243 kJ/mol cho biết', d: ['cần 243 kJ để phá vỡ 1 mol liên kết Cl—Cl ở thể khí', 'Cl<sub>2</sub> toả ra 243 kJ khi cháy', '1 phân tử Cl<sub>2</sub> nặng 243 amu', 'Cl<sub>2</sub> sôi ở 243 °C'], dung: 0 }]);
  } },
] });
