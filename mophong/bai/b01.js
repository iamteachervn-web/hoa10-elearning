/* Bài 1. Thành phần của nguyên tử — 3 mô phỏng */
MP_NAP({ ma: '1', ds: [

/* ---------- 1. Thí nghiệm phóng điện (Thomson, 1897) ---------- */
{ id: 'thomson', ic: '⚡', ten: 'Thí nghiệm phát hiện electron (J. J. Thomson, 1897)',
  mo: 'Bật nguồn cao thế, đặt điện trường để xem chùm tia từ cực âm bị lệch về phía nào.',
  chay(a) {
    a.huong('Bật nguồn để tạo chùm tia, rồi bật điện trường giữa hai bản cực. Quan sát chùm tia lệch về bản mang điện tích nào.');
    const s = a.svg('0 0 400 250');
    a.s('rect', { x: 22, y: 62, width: 356, height: 126, rx: 50, fill: 'var(--kinh)', stroke: 'var(--kinhvien)', 'stroke-width': 2 }, s);
    a.chu(s, 200, 52, 'Ống thuỷ tinh chứa không khí rất loãng', { 'font-size': 12, class: 'mo' });
    // cực âm, cực dương
    a.s('rect', { x: 40, y: 105, width: 8, height: 40, fill: '#64748b' }, s); a.chu(s, 44, 100, '−', { 'font-size': 18, 'font-weight': 800, fill: '#2563eb', style: 'fill:#2563eb' });
    a.chu(s, 44, 162, 'cực âm', { 'font-size': 11, class: 'mo' });
    a.s('rect', { x: 104, y: 98, width: 6, height: 23, fill: '#64748b' }, s); a.s('rect', { x: 104, y: 129, width: 6, height: 23, fill: '#64748b' }, s);
    a.chu(s, 107, 92, '+', { 'font-size': 16, 'font-weight': 800, fill: '#dc2626', style: 'fill:#dc2626' }); a.chu(s, 107, 165, 'cực dương', { 'font-size': 11, class: 'mo' });
    // hai bản cực
    const P1 = 170, P2 = 262, Y0 = 125;
    const banT = a.s('rect', { x: P1, y: 84, width: P2 - P1, height: 7, rx: 2, fill: '#94a3b8' }, s), banD = a.s('rect', { x: P1, y: 159, width: P2 - P1, height: 7, rx: 2, fill: '#94a3b8' }, s);
    const dauT = a.chu(s, P1 - 10, 92, '', { 'font-size': 17, 'font-weight': 800 }), dauD = a.chu(s, P1 - 10, 168, '', { 'font-size': 17, 'font-weight': 800 });
    // màn huỳnh quang
    a.s('rect', { x: 352, y: 74, width: 7, height: 102, fill: '#a7f3d0', stroke: '#059669' }, s); a.chu(s, 355, 200, 'màn huỳnh quang', { 'font-size': 11, class: 'mo' });
    const dom = a.s('circle', { cx: 352, cy: Y0, r: 0, fill: '#4ade80', opacity: .9 }, s);
    const duong = a.s('path', { d: '', stroke: '#22c55e', 'stroke-width': 3, fill: 'none', opacity: 0, 'stroke-linecap': 'round' }, s);
    const hat = a.s('g', {}, s);
    let bat = false, chieu = 0, dien = 70; // chieu: 0 tắt, -1 bản trên (+), +1 bản dưới (+)
    const yTai = x => {                      // quỹ đạo: thẳng → parabol giữa hai bản → thẳng
      const k = chieu * dien / 100 * 0.0062;
      if (x <= P1) return Y0; if (x <= P2) return Y0 + k * (x - P1) ** 2;
      return Y0 + k * (P2 - P1) ** 2 + 2 * k * (P2 - P1) * (x - P2);
    };
    const xMan = () => { for (let x = P1; x <= 352; x += 1) { const y = yTai(x); if (y < 92 || y > 158) { if (x < P2) return x; } } return 352; };
    function veDuong() {
      const xm = xMan(); let d = 'M110 ' + Y0; for (let x = 112; x <= xm; x += 4) d += ' L' + x + ' ' + yTai(x).toFixed(1);
      duong.setAttribute('d', d); duong.setAttribute('opacity', bat ? .35 : 0);
      const trungMan = xm >= 352; dom.setAttribute('cy', yTai(352)); dom.setAttribute('r', bat && trungMan ? 7 : 0);
      banT.setAttribute('fill', chieu === -1 ? '#f87171' : chieu === 1 ? '#60a5fa' : '#94a3b8'); banD.setAttribute('fill', chieu === 1 ? '#f87171' : chieu === -1 ? '#60a5fa' : '#94a3b8');
      ctSVG(dauT, chieu === -1 ? '+' : chieu === 1 ? '−' : ''); ctSVG(dauD, chieu === 1 ? '+' : chieu === -1 ? '−' : '');
      dauT.style.fill = chieu === -1 ? '#dc2626' : '#2563eb'; dauD.style.fill = chieu === 1 ? '#dc2626' : '#2563eb';
      if (!bat) a.bao('Nguồn đang tắt: chưa có chùm tia.');
      else if (!chieu) a.bao('Chùm tia đi <b>thẳng</b> từ cực âm tới màn huỳnh quang, làm màn phát sáng tại một điểm.');
      else a.bao(`Chùm tia bị <b>lệch về phía bản mang điện dương (${chieu === -1 ? 'bản trên' : 'bản dưới'})</b>${trungMan ? '' : ' — lệch mạnh tới mức đập vào bản cực'}. Hiệu điện thế càng lớn, tia lệch càng nhiều.`);
    }
    const ds = [];
    a.lap(dt => {
      if (bat && Math.random() < 0.6) ds.push({ x: 50, e: a.s('circle', { r: 2.6, fill: '#16a34a' }, hat) });
      const xm = xMan();
      for (let i = ds.length - 1; i >= 0; i--) { const p = ds[i]; p.x += 260 * dt; const y = p.x < 110 ? Y0 : yTai(p.x);
        if (p.x > xm || p.x > 352) { p.e.remove(); ds.splice(i, 1); continue; } p.e.setAttribute('cx', p.x); p.e.setAttribute('cy', y); }
    });
    const nNguon = a.nut('🔌 Bật nguồn cao thế', () => { bat = !bat; nNguon.innerHTML = bat ? '⏻ Tắt nguồn' : '🔌 Bật nguồn cao thế'; veDuong(); });
    a.chon([['0', 'Tắt'], ['-1', 'Bản trên mang (+)'], ['1', 'Bản dưới mang (+)']], k => { chieu = +k; veDuong(); }, { td: 'Điện trường giữa hai bản cực', dau: '0', imLang: true });
    a.thanh({ td: 'Hiệu điện thế giữa hai bản', min: 10, max: 100, gt: 70, don: ' %', fn: v => { dien = v; veDuong(); } });
    veDuong();
    a.ket(`<p>Chùm tia phát ra từ <b>cực âm</b> bị <b>hút lệch về phía bản mang điện dương</b> của điện trường; đổi dấu hai bản thì tia lệch theo.</p>
      <p>⇒ Chùm tia mang <b>điện tích âm</b>. Đó là chùm các hạt <b>electron</b> — một thành phần của nguyên tử.</p>`);
    a.hoi([
      { h: 'Chùm tia bị lệch về phía bản cực dương chứng tỏ điều gì?', d: ['Chùm tia không mang điện', 'Chùm tia mang điện tích dương', 'Chùm tia mang điện tích âm', 'Chùm tia là ánh sáng'], dung: 2, g: 'Điện tích trái dấu hút nhau: tia bị hút về cực dương nên mang điện âm.' },
      { h: 'Hạt tạo nên chùm tia trong thí nghiệm của J. J. Thomson là', d: ['proton', 'electron', 'neutron', 'hạt α'], dung: 1, g: 'Thomson phát hiện electron năm 1897.' },
    ]);
  } },

/* ---------- 2. Bắn phá lá vàng (Rutherford, 1911) ---------- */
{ id: 'rutherford', ic: '🎯', ten: 'Thí nghiệm bắn phá lá vàng (E. Rutherford, 1911)',
  mo: 'Bắn chùm hạt α vào lá vàng mỏng, đếm số hạt đi thẳng, bị lệch, bật lại. Phóng to để thấy hạt nhân.',
  chay(a) {
    a.huong('Bấm <b>Bắn</b> để bắn hạt α vào lá vàng. Màn huỳnh quang quanh lá vàng loé sáng ở chỗ hạt α đập vào. Chuyển sang <b>Phóng to lá vàng</b> để xem vì sao.');
    const s = a.svg('0 0 400 260'), toan = a.s('g', {}, s), phong = a.s('g', {}, s);
    // --- toàn cảnh ---
    const CX = 230, CY = 130, R = 105;
    a.s('circle', { cx: CX, cy: CY, r: R, fill: 'none', stroke: '#a7f3d0', 'stroke-width': 8, opacity: .8 }, toan);
    a.chu(toan, CX + 60, 18, 'màn huỳnh quang', { 'font-size': 11, class: 'mo' });
    a.s('rect', { x: 8, y: 116, width: 40, height: 28, rx: 4, fill: '#475569' }, toan); a.chu(toan, 28, 160, 'nguồn hạt α', { 'font-size': 11, class: 'mo' });
    a.s('rect', { x: 48, y: 126, width: 26, height: 8, fill: '#64748b' }, toan);
    a.s('rect', { x: CX - 2, y: CY - 34, width: 4, height: 68, fill: '#eab308' }, toan); a.chu(toan, CX + 4, CY + 50, 'lá vàng', { 'font-size': 11, 'text-anchor': 'start', class: 'mo' });
    const loe = a.s('g', {}, toan), bay = a.s('g', {}, toan);
    // --- phóng to ---
    const nguyenTu = []; for (let c = 0; c < 3; c++) for (let r = 0; r < 4; r++) nguyenTu.push([165 + c * 70, 22 + r * 72 + (c % 2) * 36]);
    nguyenTu.forEach(([x, y]) => { if (y > 250) return; a.s('circle', { cx: x, cy: y, r: 34, fill: '#fde68a33', stroke: '#eab308', 'stroke-dasharray': '3 3' }, phong); a.s('circle', { cx: x, cy: y, r: 3.2, fill: '#ef4444' }, phong); });
    a.chu(phong, 70, 250, 'Hạt nhân (đỏ) vẽ to hơn thực tế rất nhiều', { 'font-size': 11, class: 'mo' });
    const bay2 = a.s('g', {}, phong);
    let che = 'that', soT = 0, soL = 0, soB = 0, hang = [];
    const K = 0.0025;                             // hằng số tán xạ (đã phóng đại để dễ thấy)
    function goc(b) { if (che === 'thomson') return (Math.random() - .5) * 0.02; const t = 2 * Math.atan(K / Math.abs(b)); return t * Math.sign(b || 1); }
    function ban(n) { for (let i = 0; i < n; i++) hang.push({ t: -i * 0.06, b: (Math.random() * 2 - 1), e: null }); }
    function capNhat() { a.bao(`Đã bắn <b>${soT + soL + soB}</b> hạt α · đi thẳng: <b>${soT}</b> · bị lệch: <b>${soL}</b> · bật trở lại: <b>${soB}</b>`); }
    a.lap(dt => {
      if (che === 'phong') return;
      for (let i = hang.length - 1; i >= 0; i--) {
        const h = hang[i]; h.t += dt * 1.6; if (h.t < 0) continue;
        if (!h.e) { h.e = a.s('circle', { r: 2.8, fill: '#f97316' }, bay); h.th = goc(h.b); }
        let x, y; const di = CX - 74;
        if (h.t < 1) { x = 74 + di * h.t; y = CY; } else { const r = (h.t - 1) * R * 1.05; x = CX + r * Math.cos(h.th); y = CY - r * Math.sin(h.th); }
        h.e.setAttribute('cx', x); h.e.setAttribute('cy', y);
        if (h.t >= 2) { const th = Math.abs(h.th), deg = th * 180 / Math.PI; if (deg < 3) soT++; else if (deg < 90) soL++; else soB++;
          a.s('circle', { cx: CX + R * Math.cos(h.th), cy: CY - R * Math.sin(h.th), r: 3, fill: deg < 3 ? '#16a34a' : deg < 90 ? '#f59e0b' : '#dc2626', opacity: .8 }, loe);
          h.e.remove(); hang.splice(i, 1); capNhat(); }
      }
    });
    // phóng to: tích phân lực đẩy Coulomb thật
    const hp = [];
    a.lap(dt => {
      if (che !== 'phong') return;
      if (Math.random() < 0.08 && hp.length < 14) { const y = 6 + Math.random() * 236; hp.push({ x: 110, y, vx: 150, vy: 0, e: a.s('circle', { r: 2.6, fill: '#f97316' }, bay2), v: a.s('polyline', { points: '', fill: 'none', stroke: '#f97316', 'stroke-width': 1, opacity: .5 }, bay2), d: [] }); }
      for (let i = hp.length - 1; i >= 0; i--) {
        const h = hp[i]; for (let k = 0; k < 6; k++) {
          let fx = 0, fy = 0; nguyenTu.forEach(([nx, ny]) => { const dx = h.x - nx, dy = h.y - ny, r2 = dx * dx + dy * dy + 4; if (r2 < 1600) { const f = 6.5e4 / (r2 * Math.sqrt(r2)); fx += f * dx; fy += f * dy; } });
          h.vx += fx * dt / 6; h.vy += fy * dt / 6; h.x += h.vx * dt / 6; h.y += h.vy * dt / 6; }
        h.d.push(h.x.toFixed(1) + ',' + h.y.toFixed(1)); if (h.d.length > 400) h.d.shift();
        h.e.setAttribute('cx', h.x); h.e.setAttribute('cy', h.y); h.v.setAttribute('points', h.d.join(' '));
        if (h.x > 410 || h.x < 100 || h.y < -10 || h.y > 270) { const e = h.e, v = h.v; e.remove(); a.hen(() => v.remove(), 1500); hp.splice(i, 1); }
      }
    });
    const lam = () => { hang.forEach(h => h.e && h.e.remove()); hang = []; loe.innerHTML = ''; soT = soL = soB = 0; capNhat(); };
    a.chon([['that', 'Kết quả thực tế'], ['thomson', 'Dự đoán nếu điện tích dương trải đều'], ['phong', '🔍 Phóng to lá vàng']], k => {
      che = k; toan.style.display = k === 'phong' ? 'none' : ''; phong.style.display = k === 'phong' ? '' : 'none';
      if (k === 'phong') a.bao('Hầu hết hạt α đi qua <b>khoảng trống</b> trong nguyên tử nên đi thẳng; chỉ hạt nào bay <b>rất gần hạt nhân dương</b> mới bị đẩy lệch mạnh hoặc bật lại.'); else lam();
      if (k === 'thomson') a.bao('Nếu điện tích dương trải đều khắp nguyên tử thì lực đẩy rất yếu: mọi hạt α đều gần như đi thẳng. Bắn thử để so với kết quả thực tế.');
    }, { td: 'Chế độ xem', dau: 'that', imLang: true });
    phong.style.display = 'none';
    const h = a.hang(a.nhom('Bắn hạt α'));
    a.nut('Bắn 1 hạt', () => ban(1), { vao: h, nho: true }); a.nut('Bắn 50 hạt', () => ban(50), { vao: h, nho: true }); a.nut('Bắn 300 hạt', () => ban(300), { vao: h, nho: true }); a.nut('Bắn 1000 hạt', () => ban(1000), { vao: h, nho: true });
    a.nut('↺ Làm lại', lam, { vao: h, nho: true, phu: true });
    capNhat();
    a.ket(`<p>• <b>Hầu hết</b> hạt α đi thẳng qua lá vàng ⇒ nguyên tử có cấu tạo <b>rỗng</b>.</p>
      <p>• <b>Một số ít</b> hạt bị lệch, <b>rất ít</b> hạt bật trở lại ⇒ ở tâm nguyên tử có <b>hạt nhân mang điện dương</b>, kích thước <b>rất nhỏ</b> so với nguyên tử.</p>
      <p class="ghi">Trong mô phỏng, số hạt bị lệch đã được tăng lên để em dễ thấy. Trong thí nghiệm thật, chỉ khoảng 1 trên 8 000 hạt α bị bật ngược lại.</p>`);
    a.hoi([
      { h: 'Hầu hết hạt α đi thẳng qua lá vàng chứng tỏ', d: ['nguyên tử rất nặng', 'nguyên tử có cấu tạo rỗng', 'hạt α không mang điện', 'lá vàng rất dày'], dung: 1 },
      { h: 'Một số rất ít hạt α bật trở lại vì', d: ['va phải electron', 'gặp hạt nhân mang điện dương, rất nhỏ và tập trung khối lượng', 'lá vàng có lỗ', 'hạt α bị hút về hạt nhân'], dung: 1, g: 'Hạt α mang điện dương, bị hạt nhân dương đẩy mạnh khi bay tới rất gần.' },
    ]);
  } },

/* ---------- 3. Kích thước và khối lượng nguyên tử ---------- */
{ id: 'kich-thuoc', ic: '⚖️', ten: 'Nguyên tử nhỏ cỡ nào, nặng ở đâu?',
  mo: 'Phóng to nguyên tử vàng thành quả bóng rổ để tìm hạt nhân; đặt electron lên cân để so với một proton.',
  chay(a) {
    const s = a.svg('0 0 400 260'), g1 = a.s('g', {}, s), g2 = a.s('g', {}, s);
    // ---- kích thước: kính lúp log ----
    const bong = a.s('circle', { cx: 200, cy: 130, r: 110, fill: '#fb923c33', stroke: '#ea580c', 'stroke-width': 2 }, g1);
    const nhan = a.s('circle', { cx: 200, cy: 130, r: 0.011, fill: '#dc2626' }, g1);
    const nhanVong = a.s('circle', { cx: 200, cy: 130, r: 8, fill: 'none', stroke: '#dc2626', 'stroke-dasharray': '2 2' }, g1);
    const ghi1 = a.chu(g1, 200, 252, '', { 'font-size': 12 });
    const ghiT = a.chu(g1, 200, 16, 'Nguyên tử vàng phóng to 10⁹ lần ≈ quả bóng rổ (đường kính 30 cm)', { 'font-size': 11 });
    // ---- khối lượng: cân ----
    const truc = a.s('g', {}, g2);
    a.s('path', { d: 'M200 230 L200 70 M170 236 L230 236', stroke: 'var(--net2)', 'stroke-width': 5, 'stroke-linecap': 'round' }, g2);
    const canh = a.s('g', {}, truc); a.s('line', { x1: 80, y1: 70, x2: 320, y2: 70, stroke: 'var(--net)', 'stroke-width': 5, 'stroke-linecap': 'round' }, canh);
    const diaT = a.s('g', {}, truc), diaP = a.s('g', {}, truc);
    [diaT, diaP].forEach(d => { a.s('path', { d: 'M-40 60 L0 0 L40 60', stroke: 'var(--net2)', fill: 'none' }, d); a.s('path', { d: 'M-48 60 Q0 80 48 60 Z', fill: 'var(--soft)', stroke: 'var(--net2)' }, d); });
    const hatT = a.s('g', {}, diaT), hatP = a.s('g', {}, diaP);
    const ghi2 = a.chu(g2, 200, 22, '', { 'font-size': 13, 'font-weight': 700 });
    let soE = 1, ben = 'p';
    function veCan() {
      const mT = ben === 'p' ? 1837 : 1839, mP = soE;   // tính theo khối lượng electron (Bảng 1.1: me ≈ 1/1837 mp; mn/me = 1,675/0,0009109 ≈ 1839)
      const lech = Math.max(-1, Math.min(1, (mP - mT) / 300)), goc = lech * 14;
      canh.setAttribute('transform', `rotate(${goc} 200 70)`);
      const r = goc * Math.PI / 180, xt = 200 - 110 * Math.cos(r), yt = 70 - 110 * Math.sin(r), xp = 200 + 110 * Math.cos(r), yp = 70 + 110 * Math.sin(r);
      diaT.setAttribute('transform', `translate(${xt} ${yt})`); diaP.setAttribute('transform', `translate(${xp} ${yp})`);
      hatT.innerHTML = ''; a.s('circle', { cx: 0, cy: 58, r: 9, fill: ben === 'p' ? '#ef4444' : '#94a3b8' }, hatT); a.chu(hatT, 0, 62, ben === 'p' ? 'p' : 'n', { 'font-size': 11, 'font-weight': 800, style: 'fill:#fff' });
      hatP.innerHTML = ''; const hien = Math.min(soE, 60);
      for (let i = 0; i < hien; i++) a.s('circle', { cx: -36 + (i % 12) * 6.5, cy: 62 - Math.floor(i / 12) * 6, r: 2.6, fill: '#2563eb' }, hatP);
      if (soE > 60) a.chu(hatP, 0, 30, '×' + soE, { 'font-size': 12, 'font-weight': 800 });
      const can = Math.abs(mP - mT) <= 2;
      ghi2.textContent = can ? `Cân thăng bằng: 1 ${ben === 'p' ? 'proton' : 'neutron'} ≈ ${mT} electron` : (mP < mT ? `${soE} electron vẫn nhẹ hơn 1 ${ben === 'p' ? 'proton' : 'neutron'}` : `${soE} electron nặng hơn 1 ${ben === 'p' ? 'proton' : 'neutron'}`);
      a.bao(can ? `✅ Khối lượng 1 ${ben === 'p' ? 'proton' : 'neutron'} ≈ <b>${mT}</b> lần khối lượng electron. Electron rất nhẹ (≈ 0,00055 amu) nên khối lượng nguyên tử <b>tập trung ở hạt nhân</b>.` : `Kéo thanh để thêm electron lên đĩa phải cho tới khi cân thăng bằng.`);
    }
    function veKT(z) {   // z: độ phóng đại thêm 1 → 10000 (thang log)
      const k = Math.pow(10, z);
      bong.setAttribute('r', 110 * k); nhan.setAttribute('r', Math.max(0.011 * k, 0.01));
      nhanVong.setAttribute('r', Math.max(8, 0.011 * k + 4)); nhanVong.style.display = 0.011 * k > 30 ? 'none' : '';
      const dk = 30 / 10000 * k;   // đường kính hạt nhân tương ứng (cm)
      ghi1.textContent = z < 0.01 ? 'Hạt nhân ở tâm nhỏ cỡ hạt cát 0,003 cm — mắt không thấy! (vòng đỏ chỉ chỗ hạt nhân)' : `Phóng to thêm ${Math.round(k).toLocaleString('vi-VN')} lần — hạt nhân giờ rộng ≈ ${(0.003 * k).toLocaleString('vi-VN', { maximumFractionDigits: 3 })} cm`;
      ghiT.style.display = z < 1.5 ? '' : 'none';
      a.bao(z > 3.99 ? `Hạt nhân to bằng quả bóng rổ (30 cm) thì nguyên tử rộng tới <b>${(110 * k * 2 / 220 * 30 / 100 / 1000).toLocaleString('vi-VN')} km</b>! Đường kính nguyên tử lớn gấp khoảng <b>10 000 lần</b> đường kính hạt nhân.` :
        'Kéo thanh để phóng to dần vào tâm nguyên tử. Hạt nhân ở chính giữa.');
    }
    let tp;
    a.chon([['kt', '📏 Kích thước'], ['kl', '⚖️ Khối lượng']], k => {
      g1.style.display = k === 'kt' ? '' : 'none'; g2.style.display = k === 'kl' ? '' : 'none';
      nKT.hidden = k !== 'kt'; nKL.hidden = k !== 'kl'; k === 'kt' ? veKT(tp.gt()) : veCan();
    }, { td: 'Em muốn khám phá', dau: 'kt', imLang: true });
    const nKT = a.nhom(), nKL = a.nhom();
    tp = a.thanh({ vao: nKT, td: 'Phóng to vào tâm nguyên tử', min: 0, max: 4, buoc: 0.01, gt: 0, hien: v => '×' + Math.round(Math.pow(10, v)).toLocaleString('vi-VN'), fn: veKT });
    a.chon([['p', 'Đĩa trái: 1 proton'], ['n', 'Đĩa trái: 1 neutron']], k => { ben = k; veCan(); }, { vao: nKL, dau: 'p', imLang: true });
    const te = a.thanh({ vao: nKL, td: 'Số electron trên đĩa phải', min: 1, max: 2000, gt: 1, fn: v => { soE = v; veCan(); } });
    const hh = a.hang(nKL); a.nut('−1', () => te.dat(Math.max(1, te.gt() - 1)), { vao: hh, nho: true, phu: true }); a.nut('+1', () => te.dat(te.gt() + 1), { vao: hh, nho: true, phu: true });
    a.nut('+100', () => te.dat(Math.min(2000, te.gt() + 100)), { vao: hh, nho: true, phu: true });
    nKL.hidden = true; g2.style.display = 'none'; veKT(0);
    a.ket(`<p>• Nguyên tử có đường kính khoảng <b>10⁻¹⁰ m</b>; hạt nhân chỉ khoảng <b>10⁻² pm</b> (10⁻¹⁴ m): nguyên tử lớn hơn hạt nhân khoảng <b>10 000 lần</b>.</p>
      <p>• m<sub>p</sub> ≈ m<sub>n</sub> ≈ 1 amu, còn m<sub>e</sub> ≈ 0,00055 amu (≈ 1/1837 m<sub>p</sub>) ⇒ khối lượng nguyên tử <b>tập trung hầu hết ở hạt nhân</b>.</p>`);
    a.hoi([
      { h: 'Phóng to nguyên tử vàng thành quả bóng 30 cm thì hạt nhân cỡ hạt cát 0,003 cm. Nguyên tử lớn hơn hạt nhân khoảng', d: ['100 lần', '1 000 lần', '10 000 lần', '1 000 000 lần'], dung: 2, g: '30 : 0,003 = 10 000.' },
      { h: 'Khối lượng nguyên tử tập trung chủ yếu ở', d: ['lớp vỏ electron', 'hạt nhân', 'khoảng trống trong nguyên tử', 'đều khắp nguyên tử'], dung: 1 },
    ]);
  } },
] });
