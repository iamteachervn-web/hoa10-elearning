/* Bài 10. Quy tắc octet — 2 mô phỏng */
MP_NAP({ ma: '10', ds: [

/* ---------- 1. Nhường hay nhận electron để giống khí hiếm ---------- */
{ id: 'nhuong-nhan', ic: '🎯', ten: 'Nhường hay nhận electron để giống khí hiếm?',
  mo: 'Chọn nguyên tử, xem electron lớp ngoài cùng bay đi hoặc bay đến cho tới khi lớp ngoài cùng giống khí hiếm gần nhất.',
  chay(a) {
    a.huong('Chọn một nguyên tử rồi bấm <b>Đạt octet</b>. Electron <span style="color:#f59e0b">vàng</span> là electron lớp ngoài cùng; electron <span style="color:#16a34a">xanh lá</span> là electron nhận thêm. So sánh với khí hiếm bên phải.');
    const DS = { Na: 11, Mg: 12, Al: 13, K: 19, Ca: 20, N: 7, O: 8, F: 9, S: 16, Cl: 17 };
    const s = a.svg('0 0 400 260'), g = a.s('g', {}, s);
    let k = 'Na', t = 0, chay = false;
    const lopCua = e => { const o = []; let c = e; [2, 8, 8, 2].forEach(x => { const y = Math.min(c, x); if (y > 0) o.push(y); c -= y; }); return o; };
    function veMH(cx, cy, Z, lop, kh, tt) {   // tt: tiến trình 0..1 của việc nhường/nhận
      const L0 = soLop(Z), ng = L0[L0.length - 1], nhuong = ng <= 3, r0 = 18, b = 17;
      L0.forEach((n, i) => {
        const r = r0 + b * (i + 1), ngoai = i === L0.length - 1;
        a.s('circle', { cx, cy, r, fill: 'none', stroke: 'var(--net2)', 'stroke-dasharray': '3 3', opacity: ngoai && nhuong ? 1 - tt : .7 }, g);
        if (!ngoai) { for (let j = 0; j < n; j++) { const q = -Math.PI / 2 + j * 2 * Math.PI / n + i * .4; a.s('circle', { cx: cx + r * Math.cos(q), cy: cy + r * Math.sin(q), r: 3.8, fill: '#2563eb' }, g); } return; }
        if (nhuong) for (let j = 0; j < n; j++) { const q = -Math.PI / 2 + j * 2 * Math.PI / n + .3, rr = r + tt * 120;
          a.s('circle', { cx: cx + rr * Math.cos(q), cy: cy + rr * Math.sin(q), r: 3.8, fill: '#f59e0b', opacity: 1 - tt * .8 }, g); }
        else { const can = 8 - n, tong = n + can;
          for (let j = 0; j < tong; j++) { const q0 = -Math.PI / 2 + j * 2 * Math.PI / tong; let x = cx + r * Math.cos(q0), y = cy + r * Math.sin(q0);
            if (j >= n) { const xa = cx + 170, ya = cy - 60 + (j - n) * 40; x = xa + (x - xa) * tt; y = ya + (y - ya) * tt; }
            a.s('circle', { cx: x, cy: y, r: 3.8, fill: j >= n ? '#16a34a' : '#f59e0b', opacity: j >= n ? Math.min(1, .3 + tt) : 1 }, g); } }
      });
      a.s('circle', { cx, cy, r: r0 - 3, fill: '#ef4444' }, g); a.chu(g, cx, cy + 5, kh, { 'font-size': 13, 'font-weight': 800, style: 'fill:#fff' });
    }
    function ve() {
      g.innerHTML = '';
      const Z = DS[k], L0 = soLop(Z), ng = L0[L0.length - 1], nhuong = ng <= 3, q = nhuong ? ng : -(8 - ng), e = Z - q;
      veMH(115, 125, Z, L0, k, t);
      // khí hiếm gần nhất
      const kh = { 2: 'He', 10: 'Ne', 18: 'Ar' }[e]; const Zk = e;
      a.chu(g, 315, 22, 'Khí hiếm gần nhất', { 'font-size': 11, class: 'mo' });
      veNguyenTuLop(a, g, 315, 125, Zk, { r0: 14, buoc: 14, re: 3.2, co: 11 });
      a.chu(g, 315, 230, `${kh}: ${chuCauHinh(Zk)}`, { 'font-size': 11.5 });
      const ion = k + (q ? '^' + (Math.abs(q) > 1 ? Math.abs(q) : '') + (q > 0 ? '+' : '-') : '');
      a.chu(g, 115, 230, t >= 1 ? '' : `${k}: ${chuCauHinh(Z)}`, { 'font-size': 11.5 });
      if (t >= 1) { const tx = a.chu(g, 115, 230, '', { 'font-size': 11.5 }); ctSVG(tx, ion + ': ' + chuCauHinh(e)); }
      a.chu(g, 115, 252, nhuong ? `nhường ${ng} electron` : `nhận ${8 - ng} electron`, { 'font-size': 11.5, 'font-weight': 700, style: nhuong ? 'fill:#d97706' : 'fill:#16a34a' });
      if (t >= 1) a.bao(`${nhuong ? `${k} có ${ng} electron lớp ngoài cùng (ít) ⇒ dễ <b>nhường ${ng} electron</b>` : `${k} có ${ng} electron lớp ngoài cùng (nhiều) ⇒ dễ <b>nhận thêm ${8 - ng} electron</b>`} để đạt <b>8 electron lớp ngoài cùng</b> như khí hiếm <b>${kh}</b>.<br>${ctHTML(nhuong ? `${k} → ${ion} + ${ng > 1 ? ng : ''}e` : `${k} + ${8 - ng > 1 ? 8 - ng : ''}e → ${ion}`)}`);
      else a.bao(`${k} (Z = ${Z}): lớp ngoài cùng có <b>${ng}</b> electron. Theo em, ${k} sẽ nhường hay nhận electron? Bấm <b>Đạt octet</b> để kiểm tra.`);
    }
    a.lap(dt => { if (!chay) return; t = Math.min(1, t + dt * .6); if (t >= 1) chay = false; ve(); });
    a.chon(Object.keys(DS).map(x => [x, x]), x => { k = x; t = 0; chay = false; ve(); }, { td: 'Nguyên tử', dau: 'Na', imLang: true });
    const h = a.hang(a.nhom());
    a.nut('⚡ Đạt octet', () => { t = 0; chay = true; }, { vao: h }); a.nut('↺ Về nguyên tử', () => { t = 0; chay = false; ve(); }, { vao: h, phu: true });
    ve();
    a.ket(`<p>• Khi hình thành liên kết hoá học, các nguyên tử có xu hướng <b>nhường, nhận hoặc góp chung electron</b> để đạt cấu hình electron bền vững của khí hiếm: <b>8 electron lớp ngoài cùng</b> (riêng He là 2) — <b>quy tắc octet</b>.</p>
      <p>• Kim loại (1, 2, 3 e lớp ngoài cùng) thường nhường electron → ion dương; phi kim (5, 6, 7 e) thường nhận electron → ion âm.</p>
      <p class="ghi">Quy tắc octet có ngoại lệ, ví dụ trong PCl<sub>5</sub> lớp ngoài cùng của P có 10 electron.</p>`);
    a.hoi([
      { h: 'Để đạt cấu hình khí hiếm, nguyên tử Mg (Z = 12) có xu hướng', d: ['nhận 2 electron', 'nhường 2 electron', 'nhận 6 electron', 'nhường 6 electron'], dung: 1 },
      { h: 'Ion O<sup>2−</sup> có cấu hình electron giống khí hiếm', d: ['He', 'Ne', 'Ar', 'Kr'], dung: 1 },
    ]);
  } },

/* ---------- 2. Ba ví dụ trong SGK: Cl2, H2O, NaF ---------- */
{ id: 'cl2-h2o-naf', ic: '🤝', ten: 'Góp chung hay cho – nhận? Ba ví dụ Cl₂, H₂O, NaF',
  mo: 'Xem các nguyên tử tiến lại gần nhau và đạt octet: góp chung electron (Cl₂, H₂O) hoặc nhường – nhận (NaF).',
  chay(a) {
    a.huong('Chọn phân tử rồi bấm <b>Cho các nguyên tử liên kết</b>. Electron của mỗi nguyên tử có màu riêng. Vòng tròn nét đứt bao quanh các electron mà nguyên tử đó “được tính”.');
    const s = a.svg('0 0 400 250'), g = a.s('g', {}, s);
    let pt = 'Cl2', t = 0, chay = false;
    const MAU = ['#2563eb', '#f59e0b', '#16a34a'];
    function ve() {
      g.innerHTML = ''; const e = t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2, cy = 120;
      const ch = (x, y, k, so) => { a.chu(g, x, y + 7, k, { 'font-size': 22, 'font-weight': 800 }); };
      const dot = (x, y, m) => a.s('circle', { cx: x, cy: y, r: 3.8, fill: MAU[m] }, g);
      const vong = (x, y, r, n) => { a.s('circle', { cx: x, cy: y, r, fill: 'none', stroke: '#16a34a', 'stroke-width': 1.6, 'stroke-dasharray': '4 3', opacity: e }, g); a.chu(g, x, y - r - 5, n + ' e ✔', { 'font-size': 11, style: 'fill:#16a34a', 'font-weight': 700, opacity: e }); };
      if (pt === 'Cl2') {
        const xa = 120 + 45 * e, xb = 280 - 45 * e;
        [[xa, 0, 1], [xb, 1, -1]].forEach(([x, m, h]) => { ch(x, cy, 'Cl'); [[-4.5, -22], [4.5, -22], [-4.5, 22], [4.5, 22], [-h * 22, -4.5], [-h * 22, 4.5]].forEach(([dx, dy]) => dot(x + dx, cy + dy, m)); });
        // electron góp chung (mỗi Cl một electron), về giữa
        const xg = (xa + xb) / 2; dot(xa + 22 + (xg - 4 - xa - 22) * e, cy, 0); dot(xb - 22 + (xg + 4 - xb + 22) * e, cy, 1);
        if (e > .95) { vong(xa, cy, 40, 8); vong(xb, cy, 40, 8); }
        a.bao(e > .95 ? 'Mỗi nguyên tử Cl (7 e hoá trị) <b>góp chung 1 electron</b> ⇒ một cặp electron dùng chung. Mỗi Cl có 8 electron lớp ngoài cùng — thoả mãn quy tắc octet.' : 'Hai nguyên tử chlorine, mỗi nguyên tử có 7 electron hoá trị, còn thiếu 1 electron.');
      } else if (pt === 'H2O') {
        const xo = 200, xh1 = 80 + 64 * e, xh2 = 320 - 64 * e, yh = cy + 40 - 20 * e;
        ch(xo, cy, 'O'); [[0, -22], [-4.5, -22], [0, 22], [4.5, 22]].forEach(([dx, dy], i) => dot(xo + (i % 2 ? -4.5 : 4.5) * (i < 2 ? 1 : 1), cy + dy, 0));
        ch(xh1, yh, 'H'); ch(xh2, yh, 'H');
        // electron của O hướng về hai H + electron của H
        const p1 = [xo - 22, cy + 4], p2 = [xo + 22, cy + 4];
        const m1 = [(xo + xh1) / 2, (cy + yh) / 2], m2 = [(xo + xh2) / 2, (cy + yh) / 2];
        dot(p1[0] + (m1[0] + 3 - p1[0]) * e, p1[1] + (m1[1] - 3 - p1[1]) * e, 0); dot(p2[0] + (m2[0] - 3 - p2[0]) * e, p2[1] + (m2[1] - 3 - p2[1]) * e, 0);
        dot(xh1 + 16 + (m1[0] - 3 - xh1 - 16) * e, yh + (m1[1] + 3 - yh) * e, 1); dot(xh2 - 16 + (m2[0] + 3 - xh2 + 16) * e, yh + (m2[1] + 3 - yh) * e, 2);
        if (e > .95) { vong(xo, cy, 36, 8); [xh1, xh2].forEach(x => { a.s('circle', { cx: x, cy: yh, r: 22, fill: 'none', stroke: '#7c3aed', 'stroke-width': 1.4, 'stroke-dasharray': '3 3' }, g); a.chu(g, x, yh + 36, '2 e (như He) ✔', { 'font-size': 10, style: 'fill:#7c3aed', 'font-weight': 700 }); }); }
        a.bao(e > .95 ? 'O (6 e hoá trị) góp chung 2 electron, mỗi H góp 1 electron ⇒ <b>2 cặp electron dùng chung</b>. O có 8 electron lớp ngoài cùng (octet); mỗi H có 2 electron như khí hiếm He.' : 'O cần thêm 2 electron, mỗi H cần thêm 1 electron để đạt cấu hình khí hiếm.');
      } else {
        const xna = 110, xf = 270;
        ch(xna, cy, 'Na'); ch(xf, cy, 'F');
        viTriLewis(7, 24).forEach(([dx, dy]) => { if (dx < -15) dot(xf - 24, cy - 4.5, 1); else dot(xf + dx, cy + dy, 1); });
        // electron của Na bay sang F
        const x0 = xna + 26, x1 = xf - 24;
        dot(x0 + (x1 - x0) * e, cy - 50 * Math.sin(Math.PI * e) + 4.5 * e, 0);
        if (e > .95) {
          a.chu(g, xna + 22, cy - 18, '+', { 'font-size': 18, 'font-weight': 800, style: 'fill:#dc2626' }); a.chu(g, xf + 34, cy - 18, '−', { 'font-size': 18, 'font-weight': 800, style: 'fill:#2563eb' });
          a.s('path', { d: `M${xna - 26} ${cy - 30} L${xna - 32} ${cy - 30} L${xna - 32} ${cy + 30} L${xna - 26} ${cy + 30} M${xna + 26} ${cy - 30} L${xna + 32} ${cy - 30} L${xna + 32} ${cy + 30} L${xna + 26} ${cy + 30}`, fill: 'none', stroke: 'var(--net2)' }, g);
          vong(xf, cy, 36, 8); a.chu(g, 190, cy + 70, 'hai ion trái dấu hút nhau', { 'font-size': 12, class: 'mo' });
        }
        a.bao(e > .95 ? 'Na (1 e hoá trị) <b>nhường 1 electron</b> cho F (7 e hoá trị): tạo Na<sup>+</sup> (cấu hình như Ne) và F<sup>−</sup> (8 e lớp ngoài cùng, như Ne). Hai hạt mang điện trái dấu hút nhau.' : 'Na có 1 electron hoá trị, F có 7 electron hoá trị.');
      }
    }
    a.lap(dt => { if (!chay) return; t = Math.min(1, t + dt * .5); if (t >= 1) chay = false; ve(); });
    a.chon([['Cl2', 'Cl₂'], ['H2O', 'H₂O'], ['NaF', 'NaF']], x => { pt = x; t = 0; chay = false; ve(); }, { td: 'Ví dụ', dau: 'Cl2', imLang: true });
    const h = a.hang(a.nhom());
    a.nut('🔗 Cho các nguyên tử liên kết', () => { t = 0; chay = true; }, { vao: h }); a.nut('↺ Tách ra', () => { t = 0; chay = false; ve(); }, { vao: h, phu: true });
    ve();
    a.ket(`<p>• <b>Cl<sub>2</sub></b>, <b>H<sub>2</sub>O</b>: các nguyên tử <b>góp chung electron</b>, cặp electron dùng chung được tính cho cả hai nguyên tử.</p>
      <p>• <b>NaF</b>: Na <b>nhường</b> electron, F <b>nhận</b> electron → hai ion trái dấu hút nhau.</p>
      <p>• Trong mọi trường hợp, các nguyên tử đều đạt cấu hình electron bền vững của khí hiếm (quy tắc octet; H đạt 2 electron như He).</p>`);
    a.hoi([
      { h: 'Trong phân tử Cl<sub>2</sub>, mỗi nguyên tử Cl góp chung bao nhiêu electron?', d: ['1', '2', '7', '8'], dung: 0 },
      { h: 'Khi tạo NaF, nguyên tử Na', d: ['nhận 1 electron', 'nhường 1 electron', 'góp chung 1 electron', 'nhường 7 electron'], dung: 1 },
    ]);
  } },
] });
