/* Bài 3. Cấu trúc lớp vỏ electron nguyên tử — 3 mô phỏng */
MP_NAP({ ma: '3', ds: [

/* ---------- 1. Mô hình hành tinh và mô hình hiện đại ---------- */
{ id: 'dam-may', ic: '☁️', ten: 'Từ quỹ đạo đến đám mây electron (orbital)',
  mo: 'So sánh mô hình hành tinh với mô hình hiện đại: "chụp" vị trí electron nhiều lần để thấy đám mây electron.',
  chay(a) {
    a.huong('Ở mô hình hiện đại, ta không biết electron đi đường nào. Bấm <b>Chụp</b> nhiều lần: mỗi lần chụp ghi lại một chấm ở vị trí electron. Các chấm dày đặc tạo nên <b>đám mây electron</b>.');
    const s = a.svg('0 0 400 280'), g1 = a.s('g', {}, s), g2 = a.s('g', {}, s), cham = a.s('g', {}, g2);
    const CX = 200, CY = 140;
    // mô hình hành tinh
    [55, 95].forEach(r => a.s('circle', { cx: CX, cy: CY, r, fill: 'none', stroke: 'var(--net2)', 'stroke-dasharray': '4 3' }, g1));
    a.s('circle', { cx: CX, cy: CY, r: 9, fill: '#ef4444' }, g1);
    const eh = [[55, 0], [55, Math.PI], [95, .5], [95, 2.1], [95, 3.7], [95, 5.3]].map(([r, p]) => ({ r, p, e: a.s('circle', { r: 5, fill: '#2563eb' }, g1) }));
    a.chu(g1, CX, 268, 'Electron chạy trên quỹ đạo xác định, như hành tinh quanh Mặt Trời', { 'font-size': 10.5, class: 'mo' });
    // mô hình hiện đại
    a.s('circle', { cx: CX, cy: CY, r: 4, fill: '#ef4444' }, g2);
    const bien = a.s('circle', { cx: CX, cy: CY, r: 0, fill: 'none', stroke: '#7c3aed', 'stroke-width': 2, 'stroke-dasharray': '6 4', opacity: 0 }, g2);
    const bienT = a.chu(g2, CX, 22, '', { 'font-size': 12, fill: '#7c3aed', style: 'fill:#7c3aed' });
    const eNay = a.s('circle', { r: 6, fill: '#f59e0b', stroke: '#fff', 'stroke-width': 2, opacity: 0 }, g2);
    let che = 'hanh-tinh', orb = '1s', so = 0, dangChup = 0;
    const KL = { '1s': 34, '2s': 13, '2p': 17 };     // pixel trên 1 bán kính Bohr
    const ex = () => -Math.log(1 - Math.random());
    function huong() { const z = Math.random() * 2 - 1, f = Math.random() * 2 * Math.PI, q = Math.sqrt(1 - z * z); return [q * Math.cos(f), q * Math.sin(f), z]; }
    function lay() {            // lấy 1 vị trí electron theo mật độ xác suất |ψ|² (đơn vị bán kính Bohr) rồi chiếu xuống mặt phẳng hình
      if (orb === '1s') { const r = (ex() + ex() + ex()) / 2, h = huong(); return [r * h[0], r * h[1]]; }             // P(r) ∝ r²e^(−2r)
      if (orb === '2s') { let r; do { r = Math.random() * 22; } while (Math.random() * 1.53 > r * r * (2 - r) ** 2 * Math.exp(-r)); const h = huong(); return [r * h[0], r * h[1]]; }
      const r = ex() + ex() + ex() + ex() + ex(); let h; do { h = huong(); } while (Math.random() > h[0] * h[0]);       // 2px: P(r) ∝ r⁴e^(−r), góc ∝ cos²
      return [r * h[0], r * h[1]];
    }
    function chup(n) { dangChup += n; }
    a.lap(dt => {
      if (che === 'hanh-tinh') { eh.forEach(e => { e.p += dt * (e.r < 60 ? 2.2 : 1.3); e.e.setAttribute('cx', CX + e.r * Math.cos(e.p)); e.e.setAttribute('cy', CY + e.r * Math.sin(e.p)); }); return; }
      let k = Math.min(dangChup, dangChup > 50 ? 25 : 1); if (dangChup <= 50 && Math.random() < .7) k = 0;
      for (let i = 0; i < k; i++) { const [x, y] = lay(), px = CX + x * KL[orb], py = CY + y * KL[orb];
        a.s('circle', { cx: px, cy: py, r: 1.6, fill: '#2563eb', opacity: .55 }, cham); eNay.setAttribute('cx', px); eNay.setAttribute('cy', py); eNay.setAttribute('opacity', 1); so++; dangChup--; }
      if (k) { a.bao(`Đã chụp <b>${so}</b> lần. ${so < 30 ? 'Chưa thấy hình dạng rõ — chụp thêm!' : so < 300 ? 'Các chấm bắt đầu dày ở một vùng quanh hạt nhân…' : 'Đám mây electron hiện rõ: chỗ nào chấm dày, xác suất gặp electron ở đó lớn.'}`);
        if (so >= 300 && orb !== '2p') { const r90 = { '1s': 2.66, '2s': 9.13 }[orb] * KL[orb]; bien.setAttribute('r', r90); bien.setAttribute('opacity', .9); bienT.textContent = 'vùng chứa ≈ 90% xác suất gặp electron'; } }
    });
    function doi() {
      g1.style.display = che === 'hanh-tinh' ? '' : 'none'; g2.style.display = che === 'hanh-tinh' ? 'none' : '';
      nOrb.hidden = nChup.hidden = che === 'hanh-tinh';
      if (che === 'hanh-tinh') a.bao('Mô hình hành tinh (E. Rutherford – N. Bohr): electron chạy trên <b>quỹ đạo xác định</b>. Mô hình này không giải thích được nhiều tính chất của nguyên tử.');
      else lamMoi();
    }
    function lamMoi() { cham.innerHTML = ''; so = 0; dangChup = 0; bien.setAttribute('opacity', 0); bienT.textContent = ''; eNay.setAttribute('opacity', 0);
      a.bao('Mô hình hiện đại: electron chuyển động <b>rất nhanh, không theo quỹ đạo xác định</b>. Bấm <b>Chụp</b> để ghi lại vị trí electron.'); }
    a.chon([['hanh-tinh', '🪐 Mô hình hành tinh'], ['hien-dai', '☁️ Mô hình hiện đại']], k => { che = k; doi(); }, { td: 'Mô hình', dau: 'hanh-tinh', imLang: true });
    const nOrb = a.nhom('Electron thuộc orbital'); a.chon([['1s', '1s'], ['2s', '2s'], ['2p', '2p (p<sub>x</sub>)']], k => { orb = k; lamMoi(); }, { vao: nOrb, dau: '1s', imLang: true });
    const nChup = a.nhom('Chụp vị trí electron'), h = a.hang(nChup);
    a.nut('📸 Chụp 1 lần', () => chup(1), { vao: h, nho: true }); a.nut('📸 Chụp 500 lần', () => chup(500), { vao: h, nho: true }); a.nut('↺ Xoá', lamMoi, { vao: h, nho: true, phu: true });
    doi();
    a.ket(`<p>• Mô hình hành tinh: electron chuyển động theo quỹ đạo tròn hay bầu dục xác định — <b>không đầy đủ</b>.</p>
      <p>• Mô hình hiện đại: electron chuyển động rất nhanh, <b>không theo quỹ đạo xác định</b>. Vùng không gian quanh hạt nhân mà xác suất có mặt electron lớn nhất (khoảng <b>90%</b>) gọi là <b>orbital nguyên tử (AO)</b>, hình dung như một đám mây electron.</p>
      <p>• Orbital s có dạng <b>hình cầu</b>; orbital p có dạng <b>hình số tám nổi</b>.</p>`);
    a.hoi([
      { h: 'Theo mô hình hiện đại, electron chuyển động', d: ['trên quỹ đạo tròn xác định', 'rất nhanh, không theo quỹ đạo xác định', 'đứng yên quanh hạt nhân', 'theo hình bầu dục cố định'], dung: 1 },
      { h: 'Orbital nguyên tử là vùng không gian quanh hạt nhân mà xác suất có mặt electron khoảng', d: ['50%', '75%', '90%', '100%'], dung: 2 },
    ]);
  } },

/* ---------- 2. Orbital s, p trong không gian 3D ---------- */
{ id: 'orbital-3d', ic: '🌀', ten: 'Hình dạng orbital s và p (xoay 3D)',
  mo: 'Kéo để xoay: orbital s hình cầu, ba orbital px, py, pz hình số tám nổi định hướng theo ba trục.',
  chay(a) {
    a.huong('<b>Kéo ngón tay (hoặc chuột) trên hình để xoay</b>. Chọn từng orbital, hoặc bật cả ba orbital p để xem chúng định hướng thế nào.');
    const s = a.svg('0 0 400 320'), g = a.s('g', {}, s); a.xoay(s, (dx, dy) => { ax += dx; ay += dy; ve(); });
    let ax = 0.6, ay = -0.35, chon = 'x', tuQuay = true;
    const L = 95, MAU = { s: '#60a5fa', x: '#f97316', y: '#22c55e', z: '#a855f7' };
    function diem(loai) {          // điểm trên bề mặt orbital: r = L|cosθ| theo trục, hoặc mặt cầu
      const ds = []; const n = loai === 's' ? 520 : 460;
      for (let i = 0; i < n; i++) {
        const u = (i + .5) / n, th = Math.acos(1 - 2 * u), ph = i * 2.399963;
        let v = [Math.sin(th) * Math.cos(ph), Math.sin(th) * Math.sin(ph), Math.cos(th)];
        if (loai === 's') ds.push([v[0] * 70, v[1] * 70, v[2] * 70, 0]);
        else { const r = L * Math.abs(v[2]); let p = [v[0] * r, v[1] * r, v[2] * r]; // trục z
          if (loai === 'x') p = [p[2], p[0], p[1]]; if (loai === 'y') p = [p[1], p[2], p[0]]; ds.push([p[0], p[1], p[2], v[2] > 0 ? 1 : -1]); }
      }
      return ds;
    }
    const BO = { s: diem('s'), x: diem('x'), y: diem('y'), z: diem('z') };
    function ve() {
      g.innerHTML = '';
      const truc = [[[-140, 0, 0], [140, 0, 0], 'x'], [[0, -140, 0], [0, 140, 0], 'y'], [[0, 0, -140], [0, 0, 140], 'z']];
      const ht = p => { const q = xoay3([p[0], -p[1], p[2]], ax, ay); return chieu(q, 200, 160, 600, 1); };
      truc.forEach(([p1, p2, t]) => { const a1 = ht(p1), a2 = ht(p2); a.s('line', { x1: a1[0], y1: a1[1], x2: a2[0], y2: a2[1], stroke: 'var(--net2)', 'stroke-width': 1.2, opacity: .6 }, g);
        a.chu(g, a2[0] + 6, a2[1] + 4, t, { 'font-size': 14, 'font-weight': 700, 'font-style': 'italic' }); });
      const ds = chon === 's' ? ['s'] : chon === 'p3' ? ['x', 'y', 'z'] : [chon];
      const tat = []; ds.forEach(k => BO[k].forEach(p => { const q = xoay3([p[0], -p[1], p[2]], ax, ay); tat.push([q, k, p[3]]); }));
      tat.sort((m, n) => n[0][2] - m[0][2]);
      tat.forEach(([q, k, dau]) => { const c = chieu(q, 200, 160, 600, 1), mo = 0.35 + 0.5 * (1 - (q[2] + 100) / 200);
        a.s('circle', { cx: c[0].toFixed(1), cy: c[1].toFixed(1), r: (2.6 * c[2]).toFixed(2), fill: MAU[k], opacity: Math.max(.15, Math.min(.9, mo)) * (dau < 0 ? .75 : 1) }, g); });
      a.s('circle', { cx: 200, cy: 160, r: 4, fill: '#ef4444' }, g);
    }
    a.lap(dt => { if (tuQuay) { ax += dt * .35; ve(); } });
    s.addEventListener('pointerdown', () => { tuQuay = false; nq.innerHTML = '▶ Tự quay'; });
    a.chon([['s', 'Orbital s'], ['x', 'p<sub>x</sub>'], ['y', 'p<sub>y</sub>'], ['z', 'p<sub>z</sub>'], ['p3', 'Cả 3 orbital p']], k => {
      chon = k; ve();
      a.bao({ s: 'Orbital <b>s</b> có dạng <b>hình cầu</b>, tâm là hạt nhân — không có hướng ưu tiên.', x: 'Orbital <b>p<sub>x</sub></b>: hình số tám nổi, định hướng theo trục <b>x</b>.', y: 'Orbital <b>p<sub>y</sub></b>: hình số tám nổi, định hướng theo trục <b>y</b>.', z: 'Orbital <b>p<sub>z</sub></b>: hình số tám nổi, định hướng theo trục <b>z</b>.', p3: 'Ba orbital p (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>) có cùng hình dạng, định hướng theo <b>ba trục vuông góc</b> với nhau. Phân lớp p có 3 AO.' }[k]);
    }, { td: 'Chọn orbital', dau: 'x' });
    const nq = a.nut('⏸ Dừng quay', () => { tuQuay = !tuQuay; nq.innerHTML = tuQuay ? '⏸ Dừng quay' : '▶ Tự quay'; }, { phu: true });
    ve();
    a.ket(`<p>• Orbital <b>s</b> có dạng <b>hình cầu</b>.</p><p>• Orbital <b>p</b> có dạng <b>hình số tám nổi</b>; phân lớp p có <b>3 AO</b>: p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub> định hướng theo ba trục x, y, z vuông góc với nhau.</p>
      <p class="ghi">Phân lớp d có 5 AO, phân lớp f có 7 AO (hình dạng phức tạp hơn).</p>`);
    a.hoi([
      { h: 'Orbital s có dạng', d: ['hình tròn', 'hình số tám nổi', 'hình cầu', 'hình bầu dục'], dung: 2 },
      { h: 'Ba orbital p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub> khác nhau ở', d: ['hình dạng', 'kích thước', 'sự định hướng trong không gian', 'số electron tối đa'], dung: 2 },
    ]);
  } },

/* ---------- 3. Xếp electron vào ô orbital ---------- */
{ id: 'xep-electron', ic: '⬆️', ten: 'Xếp electron vào ô orbital (Z = 1–20)',
  mo: 'Máy xếp từng electron theo nguyên lí vững bền, Pauli, quy tắc Hund — hoặc em tự xếp, máy kiểm tra lỗi.',
  chay(a) {
    a.huong('Chế độ <b>Máy xếp</b>: kéo Z hoặc bấm “Thêm 1 electron” để xem electron đi vào đâu. Chế độ <b>Em tự xếp</b>: chạm vào ô orbital để đặt mũi tên (chạm nhiều lần để đổi), rồi bấm <b>Kiểm tra</b>.');
    const s = a.svg('0 0 400 300'), g = a.s('g', {}, s);
    const PL = [ // phân lớp: tên, số ô, mức (y), x bắt đầu
      ['1s', 1, 270], ['2s', 1, 225], ['2p', 3, 200], ['3s', 1, 160], ['3p', 3, 135], ['4s', 1, 95], ['3d', 5, 70]];
    const O = 34; let Z = 1, che = 'may', tay = {}, loiO = new Set();
    PL.forEach(([t, n]) => tay[t] = Array(n).fill(''));
    function dien(z) { const kq = {}; PL.forEach(([t, n]) => kq[t] = Array(n).fill('')); let con = z;
      for (const [t, n] of PL) { const e = Math.min(con, 2 * n); con -= e;
        for (let i = 0; i < Math.min(e, n); i++) kq[t][i] = '↑'; for (let i = 0; i < e - n; i++) kq[t][i] = '↑↓'; if (con <= 0) break; }
      return kq; }
    function ve() {
      g.innerHTML = '';
      a.s('line', { x1: 30, y1: 285, x2: 30, y2: 30, stroke: 'var(--net2)', 'stroke-width': 2, 'marker-end': '' }, g);
      a.s('path', { d: 'M24 38 L30 26 L36 38', fill: 'none', stroke: 'var(--net2)', 'stroke-width': 2 }, g);
      a.chu(g, 16, 160, 'Năng lượng tăng', { 'font-size': 11, transform: 'rotate(-90 16 160)', class: 'mo' });
      const tt = che === 'may' ? dien(Z) : tay;
      PL.forEach(([t, n, y], i) => {
        const x0 = t.endsWith('s') ? 120 : t.endsWith('p') ? 225 - 0 : 230, xx = t === '3d' ? 210 : t.endsWith('p') ? 200 : 140;
        const mo = t === '3d' ? .35 : 1;
        a.chu(g, xx - 14, y + 6, t, { 'font-size': 15, 'font-weight': 700, 'text-anchor': 'end', opacity: mo });
        for (let k = 0; k < n; k++) {
          const x = xx + k * O, o = a.s('rect', { x, y: y - 14, width: O, height: 28, fill: loiO.has(t + k) ? 'var(--saibg)' : 'var(--card)', stroke: loiO.has(t + k) ? 'var(--sai)' : 'var(--net)', 'stroke-width': 1.5, opacity: mo }, g);
          const v = tt[t][k], c = a.chu(g, x + O / 2, y + 8, v, { 'font-size': 22, 'font-weight': 800, fill: '#2563eb', style: 'fill:#2563eb' });
          if (che === 'tay' && t !== '3d') { o.style.cursor = 'pointer'; const bam = () => { const vong = ['', '↑', '↑↓', '↓']; tay[t][k] = vong[(vong.indexOf(tay[t][k]) + 1) % 4]; loiO.clear(); ve(); capTay(); }; o.addEventListener('click', bam); c.addEventListener('click', bam); c.style.cursor = 'pointer'; }
        }
      });
      a.chu(g, 295, 50, '(3d điền sau 4s)', { 'font-size': 10.5, class: 'mo' });
    }
    function chuCH(tt) { return PL.filter(([t]) => t !== '3d').map(([t]) => { const e = tt[t].reduce((s, v) => s + v.length, 0); return e ? t + mu(e) : ''; }).join(''); }
    function capMay() {
      const nt = NT[Z], L = soLop(Z), ng = L[L.length - 1];
      const ph = cauHinh(Z), cuoi = ph[ph.length - 1];
      a.bao(`<b>${nt.k}</b> (Z = ${Z}, ${nt.ten}): <b>${chuCauHinh(Z)}</b><br>Số electron mỗi lớp: (${L.join(', ')}) · lớp ngoài cùng có <b>${ng}</b> e ⇒ <b>${loaiNT(Z)}</b> · electron cuối vào phân lớp ${cuoi.n}${cuoi.l} ⇒ nguyên tố <b>${cuoi.l}</b>`);
    }
    function capTay() { const e = PL.reduce((s, [t]) => s + tay[t].reduce((x, v) => x + v.length, 0), 0); a.bao(`Em đã đặt <b>${e}</b> electron. Cần xếp cho nguyên tử <b>${NT[Z].k}</b> (Z = ${Z}) ⇒ ${Z} electron. ${e ? 'Cấu hình em xếp: <b>' + chuCH(tay) + '</b>' : ''}`); }
    function kiemTra() {
      loiO.clear(); const loi = []; const e = PL.reduce((s, [t]) => s + tay[t].reduce((x, v) => x + v.length, 0), 0);
      if (e !== Z) loi.push(`Số electron chưa đúng: ${Z} electron, em đặt ${e}.`);
      // vững bền
      let gapThieu = null;
      for (const [t, n] of PL) { if (t === '3d') continue; const so = tay[t].reduce((x, v) => x + v.length, 0);
        if (gapThieu && so > 0) { loi.push(`Sai <b>nguyên lí vững bền</b>: phân lớp ${gapThieu} chưa đầy mà đã điền vào ${t}.`); tay[t].forEach((v, k) => v && loiO.add(t + k)); break; }
        if (so < 2 * n && !gapThieu) gapThieu = t; }
      // Hund + chiều tự quay
      for (const [t, n] of PL) { if (n < 3) { tay[t].forEach((v, k) => { if (v === '↓') { loi.push(`Ô ${t}: electron độc thân phải biểu diễn bằng <b>mũi tên đi lên</b>.`); loiO.add(t + k); } }); continue; }
        const so = tay[t].reduce((x, v) => x + v.length, 0), doi = tay[t].filter(v => v === '↑↓').length, doiDung = Math.max(0, so - n);
        if (doi > doiDung) { loi.push(`Sai <b>quy tắc Hund</b> ở ${t}: phải xếp mỗi ô 1 electron trước (số electron độc thân tối đa) rồi mới ghép đôi.`); tay[t].forEach((v, k) => v === '↑↓' && loiO.add(t + k)); }
        tay[t].forEach((v, k) => { if (v === '↓') { loi.push(`Ô ${t}: các electron độc thân phải <b>cùng chiều tự quay</b> (mũi tên đi lên).`); loiO.add(t + k); } });
      }
      ve();
      a.bao(loi.length ? '❌ ' + loi.join('<br>❌ ') : `✅ Chính xác! ${NT[Z].k}: <b>${chuCauHinh(Z)}</b>. Em đã tuân theo nguyên lí vững bền, nguyên lí Pauli (mỗi ô tối đa 2 electron ngược chiều) và quy tắc Hund.`);
    }
    const nMay = a.nhom(), nTay = a.nhom();
    const tz = a.thanh({ vao: nMay, td: 'Số hiệu nguyên tử Z', min: 1, max: 20, gt: 1, hien: v => v + ' (' + NT[v].k + ')', fn: v => { Z = v; ve(); capMay(); } });
    const hm = a.hang(nMay); a.nut('➖ Bớt 1 electron', () => tz.dat(Math.max(1, Z - 1)), { vao: hm, nho: true, phu: true }); a.nut('➕ Thêm 1 electron', () => tz.dat(Math.min(20, Z + 1)), { vao: hm, nho: true });
    const tz2 = a.thanh({ vao: nTay, td: 'Nguyên tử cần xếp', min: 1, max: 20, gt: 8, hien: v => 'Z = ' + v + ' (' + NT[v].k + ')', fn: v => { Z = v; capTay(); } });
    const ht = a.hang(nTay); a.nut('✔ Kiểm tra', kiemTra, { vao: ht }); a.nut('↺ Xoá hết', () => { PL.forEach(([t, n]) => tay[t] = Array(n).fill('')); loiO.clear(); ve(); capTay(); }, { vao: ht, phu: true });
    a.chon([['may', '🤖 Máy xếp từng bước'], ['tay', '✋ Em tự xếp']], k => { che = k; nMay.hidden = k !== 'may'; nTay.hidden = k !== 'tay'; loiO.clear();
      if (k === 'tay') { Z = tz2.gt(); capTay(); } else { Z = tz.gt(); capMay(); } ve(); }, { td: 'Chế độ', dau: 'may', imLang: true });
    a.dk.insertBefore(a.dk.lastElementChild, nMay);
    nTay.hidden = true; ve(); capMay();
    a.ket(`<p>• <b>Nguyên lí vững bền</b>: electron chiếm các orbital có năng lượng từ thấp đến cao: 1s 2s 2p 3s 3p 4s 3d…</p>
      <p>• <b>Nguyên lí Pauli</b>: mỗi orbital chứa tối đa <b>2 electron</b> có chiều tự quay ngược nhau (↑↓).</p>
      <p>• <b>Quy tắc Hund</b>: trong cùng phân lớp, electron phân bố sao cho số electron độc thân là <b>tối đa</b> và có cùng chiều tự quay.</p>
      <p>• Lớp ngoài cùng có 1, 2, 3 electron: thường là <b>kim loại</b> (trừ H, He, B); 5, 6, 7 electron: thường là <b>phi kim</b>; 8 electron (He có 2): <b>khí hiếm</b>.</p>`);
    a.hoi([
      { h: 'Cấu hình electron của nguyên tử có Z = 16 là', d: ['1s²2s²2p⁶3s²3p³', '1s²2s²2p⁶3s²3p⁵', '1s²2s²2p⁶3s²3p⁴', '1s²2s²2p⁵3s²3p⁵'], dung: 2 },
      { h: 'Nguyên tử nitrogen (Z = 7) có bao nhiêu electron độc thân?', d: ['1', '2', '3', '5'], dung: 2, g: '2p³: ba electron nằm ở ba ô khác nhau, cùng chiều (quy tắc Hund).' },
    ]);
  } },
] });
