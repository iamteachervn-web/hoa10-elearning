/* Bài 6. Xu hướng biến đổi một số tính chất của nguyên tử — 3 mô phỏng */
const LUOI6 = [['Li', 'Be', 'B', 'C', 'N', 'O', 'F'], ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl'], ['K', 'Ca', 'Ga', 'Ge', 'As', 'Se', 'Br'], ['Rb', 'Sr', 'In', 'Sn', 'Sb', 'Te', 'I']];
const Z6 = { Li: 3, Be: 4, B: 5, C: 6, N: 7, O: 8, F: 9, Na: 11, Mg: 12, Al: 13, Si: 14, P: 15, S: 16, Cl: 17, K: 19, Ca: 20, Ga: 31, Ge: 32, As: 33, Se: 34, Br: 35, Rb: 37, Sr: 38, In: 49, Sn: 50, Sb: 51, Te: 52, I: 53 };
const dad6 = k => (theoKH(k) && theoKH(k).x) || DAD_THEM[k];
const so = v => String(v).replace('.', ',');

/* hình cốc thí nghiệm dùng chung */
function veCoc(a, g, x, y, w, h, o) {
  o = o || {};
  const nuoc = a.s('path', { d: `M${x + 3} ${y + h * (1 - (o.muc || .7))} L${x + w - 3} ${y + h * (1 - (o.muc || .7))} L${x + w - 3} ${y + h - 6} Q${x + w - 3} ${y + h - 2} ${x + w - 8} ${y + h - 2} L${x + 8} ${y + h - 2} Q${x + 3} ${y + h - 2} ${x + 3} ${y + h - 6} Z`, fill: o.mau || 'var(--nuoc)', opacity: .85 }, g);
  a.s('path', { d: `M${x - 4} ${y} L${x} ${y + 4} L${x} ${y + h - 6} Q${x} ${y + h} ${x + 8} ${y + h} L${x + w - 8} ${y + h} Q${x + w} ${y + h} ${x + w} ${y + h - 6} L${x + w} ${y + 4} L${x + w + 4} ${y}`, fill: 'none', stroke: 'var(--kinhvien)', 'stroke-width': 2.5 }, g);
  return nuoc;
}

MP_NAP({ ma: '6', ds: [

/* ---------- 1. Bản đồ xu hướng ---------- */
{ id: 'ban-do-xu-huong', ic: '🗺️', ten: 'Bản đồ xu hướng: bán kính, độ âm điện, tính kim loại – phi kim',
  mo: 'Số liệu thật trong SGK (Hình 6.2, Bảng 6.2). Đi dọc chu kì, xuống nhóm để thấy quy luật và lí do.',
  chay(a) {
    a.huong('Chọn tính chất. Chạm vào một ô để xem số liệu và mô hình nguyên tử. Bấm <b>Đi theo chu kì →</b> hoặc <b>Đi xuống nhóm ↓</b> để máy dẫn đường.');
    const s = a.svg('0 0 400 312'), g = a.s('g', {}, s), mh = a.s('g', {}, s);
    let tc = 'r', chon = 'Na', dan = null, buoc = 0, tg = 0;
    const W = 48, H = 40, X0 = 40, Y0 = 24;
    function ve() {
      g.innerHTML = '';
      ['IA', 'IIA', 'IIIA', 'IVA', 'VA', 'VIA', 'VIIA'].forEach((t, c) => a.chu(g, X0 + c * W + W / 2, Y0 - 8, t, { 'font-size': 10, 'font-weight': 700, class: 'mo' }));
      LUOI6.forEach((hang, r) => { a.chu(g, X0 - 14, Y0 + r * H + H / 2 + 4, String(r + 2), { 'font-size': 11, 'font-weight': 800, class: 'mo' });
        hang.forEach((k, c) => {
          const x = X0 + c * W, y = Y0 + r * H, o = a.s('g', { style: 'cursor:pointer' }, g), dangDan = dan && dan.ds[buoc] === k, trenDuong = dan && dan.ds.includes(k);
          a.s('rect', { x: x + 1, y: y + 1, width: W - 2, height: H - 2, rx: 5, fill: trenDuong ? 'var(--vangbg)' : 'var(--card)', stroke: k === chon || dangDan ? '#dc2626' : 'var(--line)', 'stroke-width': k === chon || dangDan ? 2.2 : 1 }, o);
          if (tc === 'r') { const r0 = BAN_KINH[k] / 248 * 17; a.s('circle', { cx: x + W / 2, cy: y + H / 2 - 2, r: r0, fill: '#60a5fa', opacity: .75 }, o);
            a.chu(o, x + W / 2, y + H / 2 + 2, k, { 'font-size': 10, 'font-weight': 800 }); a.chu(o, x + W / 2, y + H - 3, String(BAN_KINH[k]), { 'font-size': 7.5, class: 'mo' }); }
          else if (tc === 'x') { const v = dad6(k), h = v / 4 * (H - 14); a.s('rect', { x: x + 8, y: y + H - 4 - h, width: 10, height: h, rx: 2, fill: `hsl(${200 - v * 50},80%,55%)` }, o);
            a.chu(o, x + 32, y + 17, k, { 'font-size': 10.5, 'font-weight': 800 }); a.chu(o, x + 32, y + 31, so(v.toFixed(2)), { 'font-size': 8.5 }); }
          else { const kl = (r * 1.2 - c) , t = Math.max(0, Math.min(1, (kl + 6) / 9.6));
            a.s('rect', { x: x + 4, y: y + 4, width: W - 8, height: H - 8, rx: 4, fill: `hsl(${30 + t * 180},80%,${70 - Math.abs(t - .5) * 20}%)` }, o);
            a.chu(o, x + W / 2, y + H / 2 + 4, k, { 'font-size': 12, 'font-weight': 800, style: 'fill:#0f172a' }); }
          o.addEventListener('click', () => { chon = k; dan = null; ve(); moTa(); });
        }); });
      if (tc === 'kl') { a.chu(g, X0, Y0 + 4 * H + 14, '◀ tính kim loại mạnh', { 'font-size': 10, 'text-anchor': 'start', style: 'fill:#0284c7' }); a.chu(g, X0 + 7 * W, Y0 + 4 * H + 14, 'tính phi kim mạnh ▶', { 'font-size': 10, 'text-anchor': 'end', style: 'fill:#ea580c' }); }
      // mô hình nguyên tử của ô đang chọn
      mh.innerHTML = ''; const k = dan ? dan.ds[buoc] : chon, z = Z6[k];
      if (z <= 20) { const L = soLop(z); veNguyenTuLop(a, mh, 200, 238, z, { r0: 14, buoc: 10, re: 3, toNgoai: true, co: 9 });
        const rN = 14 + 10 * L.length; a.s('path', { d: `M${200 - rN - 22} 238 L${200 - rN + 2} 238 M${200 - rN - 4} 234 L${200 - rN + 2} 238 L${200 - rN - 4} 242`, stroke: '#dc2626', 'stroke-width': 2, fill: 'none' }, mh); a.chu(mh, 200 - rN - 24, 234, 'lực hút', { 'font-size': 9, 'text-anchor': 'end', style: 'fill:#dc2626' });
        a.chu(mh, 200, 238 + rN + 11, `${k}: Z = ${z}, ${L.length} lớp e`, { 'font-size': 9.5 }); }
      else a.chu(mh, 200, 240, `${k}: Z = ${z} (chu kì ${z > 36 ? 5 : 4})`, { 'font-size': 10 });
    }
    function moTa() {
      const k = dan ? dan.ds[buoc] : chon, z = Z6[k], r = LUOI6.findIndex(h => h.includes(k)), c = LUOI6[r].indexOf(k);
      let h = `<b>${k}</b> (Z = ${z}) · chu kì ${r + 2}, nhóm ${['IA', 'IIA', 'IIIA', 'IVA', 'VA', 'VIA', 'VIIA'][c]} · bán kính <b>${BAN_KINH[k]} pm</b> · độ âm điện <b>${so(dad6(k).toFixed(2))}</b>`;
      if (dan) {
        const truoc = dan.ds[buoc - 1];
        if (truoc) {
          const dr = BAN_KINH[k] - BAN_KINH[truoc], dx = dad6(k) - dad6(truoc);
          h += `<br>So với ${truoc}: bán kính ${dr < 0 ? 'giảm' : dr > 0 ? 'tăng' : 'bằng'} (${BAN_KINH[truoc]} → ${BAN_KINH[k]} pm), độ âm điện ${dx > 0 ? 'tăng' : dx < 0 ? 'giảm' : 'bằng'} (${so(dad6(truoc).toFixed(2))} → ${so(dad6(k).toFixed(2))}).`;
          if ((dan.loai === 'nh' && (dr < 0 || dx > 0)) || (dan.loai === 'ck' && (dr > 0 || dx < 0))) h += '<br><span style="color:var(--sai)">⚠ Ở cặp này số liệu thực tế ngược với xu hướng chung — đây là trường hợp ngoại lệ (do ảnh hưởng của các electron d, f bên trong).</span>';
          h += dan.loai === 'ck' ? '<br>💡 Cùng số lớp electron, điện tích hạt nhân tăng ⇒ hạt nhân hút electron lớp ngoài <b>mạnh hơn</b>.' : '<br>💡 Thêm một lớp electron ⇒ electron lớp ngoài <b>xa hạt nhân hơn</b>, bị hút <b>yếu hơn</b>.';
        }
      } else if (tc === 'kl') h += `<br>Càng về phía <b>dưới, bên trái</b>: nguyên tử càng dễ nhường electron (tính kim loại mạnh). Càng về phía <b>trên, bên phải</b>: càng dễ nhận electron (tính phi kim mạnh).`;
      a.bao(h);
    }
    function chay(loai) {
      const k = chon, r = LUOI6.findIndex(h => h.includes(k)), c = LUOI6[r].indexOf(k);
      dan = { loai, ds: loai === 'ck' ? LUOI6[r].slice() : LUOI6.map(h => h[c]) }; buoc = 0; tg = 0; ve(); moTa();
    }
    a.lap(dt => { if (!dan) return; tg += dt; if (tg > 1.6 && buoc < dan.ds.length - 1) { tg = 0; buoc++; ve(); moTa(); } });
    a.chon([['r', '⚪ Bán kính nguyên tử'], ['x', '📶 Độ âm điện'], ['kl', '⚖️ Tính kim loại – phi kim']], k => { tc = k; ve(); moTa(); }, { td: 'Tính chất', dau: 'r', imLang: true });
    const h = a.hang(a.nhom('Máy dẫn đường từ ô đang chọn'));
    a.nut('Đi theo chu kì →', () => chay('ck'), { vao: h, nho: true }); a.nut('Đi xuống nhóm ↓', () => chay('nh'), { vao: h, nho: true });
    ve(); moTa();
    a.ket(`<table class="bang"><tr><th></th><th>Trong một chu kì (trái → phải)</th><th>Trong một nhóm A (trên → dưới)</th></tr>
      <tr><td>Bán kính nguyên tử</td><td>giảm</td><td>tăng</td></tr><tr><td>Độ âm điện</td><td>tăng</td><td>giảm</td></tr>
      <tr><td>Tính kim loại</td><td>giảm</td><td>tăng</td></tr><tr><td>Tính phi kim</td><td>tăng</td><td>giảm</td></tr></table>
      <p>Nguyên nhân: trong chu kì, số lớp electron không đổi mà điện tích hạt nhân tăng ⇒ lực hút electron lớp ngoài tăng; trong nhóm, số lớp electron tăng ⇒ lực hút giảm.</p>`);
    a.hoi([
      { h: 'Dãy sắp xếp theo chiều bán kính nguyên tử tăng dần là', d: ['Si, Al, Mg', 'Mg, Al, Si', 'Al, Si, Mg', 'Si, Mg, Al'], dung: 0, g: 'Cùng chu kì 3: Si (118) < Al (143) < Mg (160) pm.' },
      { h: 'Nguyên tố có độ âm điện lớn nhất trong bảng là', d: ['Cl', 'O', 'F', 'N'], dung: 2, g: 'F: 3,98.' },
    ]);
  } },

/* ---------- 2. Na, Mg với nước ---------- */
{ id: 'na-mg-nuoc', ic: '💧', ten: 'Thí nghiệm ảo: so sánh tính kim loại của sodium và magnesium',
  mo: 'Thả mẩu Na và dây Mg vào hai cốc nước có phenolphthalein. Kim loại nào phản ứng mạnh hơn?',
  chay(a) {
    a.huong('Mỗi cốc chứa khoảng 200 mL nước có vài giọt phenolphthalein. Bấm để thả <b>mẩu Na</b> vào cốc (1), <b>dây Mg</b> (đã làm sạch) vào cốc (2). Có thể <b>đun nóng</b> cốc (2).');
    const s = a.svg('0 0 400 280'), g = a.s('g', {}, s), bot = a.s('g', {}, s);
    const n1 = veCoc(a, g, 40, 70, 140, 170, { muc: .72 }), n2 = veCoc(a, g, 220, 70, 140, 170, { muc: .72 });
    a.chu(g, 110, 262, '(1) nước + phenolphthalein', { 'font-size': 11, class: 'mo' }); a.chu(g, 290, 262, '(2) nước + phenolphthalein', { 'font-size': 11, class: 'mo' });
    const hong1 = a.s('ellipse', { cx: 110, cy: 125, rx: 0, ry: 0, fill: '#ec4899', opacity: 0 }, g), hong2 = a.s('ellipse', { cx: 290, cy: 205, rx: 0, ry: 0, fill: '#ec4899', opacity: 0 }, g);
    const na = a.s('circle', { cx: 110, cy: 20, r: 7, fill: '#cbd5e1', stroke: '#64748b', opacity: 0 }, g);
    const mg = a.s('rect', { x: 286, y: 10, width: 6, height: 70, rx: 2, fill: '#d1d5db', stroke: '#6b7280', opacity: 0 }, g);
    const lua = a.s('circle', { cx: 0, cy: 0, r: 0, fill: '#fde047', opacity: 0 }, g);
    const den = a.s('g', { opacity: 0 }, g); a.s('rect', { x: 236, y: 244, width: 108, height: 12, rx: 3, fill: '#f97316' }, den); a.chu(den, 290, 254, '🔥 đun nóng', { 'font-size': 9, style: 'fill:#fff' });
    let naT = -1, naX = 110, naV = 60, kichNa = 7, mgT = -1, nong = false, h1 = 0, h2 = 0;
    const MAT = 70 + 170 * .28;
    a.lap(dt => {
      if (naT >= 0) {
        naT += dt;
        if (naT < .6) { na.setAttribute('cy', 20 + (MAT - 20) * naT / .6); }
        else if (kichNa > 0.4) {
          naX += naV * dt; if (naX < 58 || naX > 162) naV = -naV; if (Math.random() < .04) naV = (Math.random() < .5 ? -1 : 1) * (50 + Math.random() * 60);
          kichNa -= dt * 0.75; na.setAttribute('cx', naX); na.setAttribute('cy', MAT - 2); na.setAttribute('r', Math.max(0, kichNa)); na.setAttribute('fill', '#e2e8f0');
          lua.setAttribute('cx', naX); lua.setAttribute('cy', MAT - 4); lua.setAttribute('r', Math.random() * 4 + kichNa * .6); lua.setAttribute('opacity', .55);
          h1 = Math.min(1, h1 + dt * .2);
          if (Math.random() < .9) bot.appendChild(Object.assign(a.s('circle', { cx: naX + (Math.random() - .5) * 10, cy: MAT - 2, r: 1.5 + Math.random() * 2, fill: 'none', stroke: '#94a3b8' }), { _v: 30 + Math.random() * 30, _h: 30 }));
        } else { na.setAttribute('opacity', 0); lua.setAttribute('opacity', 0); h1 = Math.min(1, h1 + dt * .1); }
        hong1.setAttribute('cx', naX * .3 + 110 * .7); hong1.setAttribute('rx', 30 + h1 * 40); hong1.setAttribute('ry', 20 + h1 * 60); hong1.setAttribute('cy', MAT + 20 + h1 * 40); hong1.setAttribute('opacity', h1 * .55);
      }
      if (mgT >= 0) {
        mgT += dt; if (mgT < .6) mg.setAttribute('y', 10 + 150 * mgT / .6);
        const toc = nong ? 1 : 0.05;
        h2 = Math.min(nong ? .45 : .08, h2 + dt * .03 * toc * 3);
        if (Math.random() < .12 * toc + .01) bot.appendChild(Object.assign(a.s('circle', { cx: 289 + (Math.random() - .5) * 8, cy: 160 + Math.random() * 70, r: 1 + Math.random() * 1.5, fill: 'none', stroke: '#94a3b8' }), { _v: 25, _h: 30 }));
        hong2.setAttribute('rx', 14 + h2 * 50); hong2.setAttribute('ry', 30 + h2 * 50); hong2.setAttribute('cy', 200); hong2.setAttribute('opacity', h2);
      }
      [...bot.children].forEach(b => { const y = +b.getAttribute('cy') - b._v * dt; b.setAttribute('cy', y); if (y < MAT) b.remove(); });
      capNhat();
    });
    let lanCuoi = '';
    function capNhat() {
      const t = [];
      if (naT >= 0) t.push(kichNa > 0.4 ? 'Cốc (1): mẩu Na <b>nóng chảy thành giọt tròn, chạy nhanh trên mặt nước</b>, có khí thoát ra mạnh; dung dịch chuyển <b>hồng</b> nhanh.' : 'Cốc (1): Na tan hết, dung dịch có màu <b>hồng đậm</b>.');
      if (mgT >= 0) t.push(nong ? 'Cốc (2) khi đun nóng: có bọt khí nhỏ thoát ra chậm, quanh dây Mg dung dịch chuyển <b>hồng nhạt</b>.' : 'Cốc (2): ở nhiệt độ thường dây Mg <b>hầu như không phản ứng</b> (chỉ vài bọt khí rất nhỏ).');
      const x = t.join('<br>') || 'Chưa thả kim loại vào cốc.'; if (x !== lanCuoi) { lanCuoi = x; a.bao(x); }
    }
    const h = a.hang(a.nhom('Thao tác'));
    const bNa = a.nut('Thả mẩu Na vào cốc (1)', () => { naT = 0; na.setAttribute('opacity', 1); bNa.disabled = true; }, { vao: h, nho: true });
    const bMg = a.nut('Thả dây Mg vào cốc (2)', () => { mgT = 0; mg.setAttribute('opacity', 1); bMg.disabled = true; }, { vao: h, nho: true });
    const bNong = a.nut('🔥 Đun nóng cốc (2)', () => { nong = !nong; den.setAttribute('opacity', nong ? 1 : 0); bNong.innerHTML = nong ? 'Tắt đèn' : '🔥 Đun nóng cốc (2)'; }, { vao: h, nho: true, phu: true });
    a.nut('↺ Làm lại', () => { naT = mgT = -1; naX = 110; kichNa = 7; h1 = h2 = 0; nong = false; den.setAttribute('opacity', 0); bNong.innerHTML = '🔥 Đun nóng cốc (2)';
      na.setAttribute('opacity', 0); na.setAttribute('cy', 20); na.setAttribute('cx', 110); na.setAttribute('r', 7); mg.setAttribute('opacity', 0); mg.setAttribute('y', 10); bot.innerHTML = ''; lua.setAttribute('opacity', 0);
      [hong1, hong2].forEach(e => e.setAttribute('opacity', 0)); bNa.disabled = bMg.disabled = false; }, { vao: h, nho: true, phu: true });
    capNhat();
    a.ket(`<p>• <b>2Na + 2H<sub>2</sub>O → 2NaOH + H<sub>2</sub>↑</b> — phản ứng mãnh liệt ngay ở nhiệt độ thường.</p>
      <p>• <b>Mg + 2H<sub>2</sub>O → Mg(OH)<sub>2</sub> + H<sub>2</sub>↑</b> — phản ứng rất chậm, chỉ thấy rõ khi đun nóng.</p>
      <p>• Dung dịch có phenolphthalein hoá hồng vì tạo base. Na phản ứng mạnh hơn ⇒ <b>tính kim loại Na &gt; Mg</b>: trong chu kì 3, tính kim loại giảm từ trái sang phải.</p>
      <p class="ghi">⚠ Kim loại kiềm phản ứng với nước rất mạnh: chỉ dùng mẩu nhỏ, làm theo hướng dẫn của thầy cô.</p>`);
    a.hoi([
      { h: 'Vì sao dung dịch trong cốc (1) chuyển màu hồng?', d: ['Vì tạo khí H<sub>2</sub>', 'Vì tạo dung dịch base NaOH', 'Vì Na có màu hồng', 'Vì nước bị nóng'], dung: 1 },
      { h: 'Kết luận đúng là', d: ['Tính kim loại Mg > Na', 'Tính kim loại Na > Mg', 'Hai kim loại mạnh như nhau', 'Mg không phải kim loại'], dung: 1 },
    ]);
  } },

/* ---------- 3. Nước chlorine với KI ---------- */
{ id: 'clo-ki', ic: '🧪', ten: 'Thí nghiệm ảo: so sánh tính phi kim của chlorine và iodine',
  mo: 'Nhỏ nước chlorine vào dung dịch potassium iodide, xem màu dung dịch đổi thế nào và vì sao.',
  chay(a) {
    a.huong('Bấm <b>Nhỏ 1 giọt nước chlorine</b> vào ống nghiệm chứa dung dịch KI (không màu). Có thể nhỏ thêm hồ tinh bột để nhận ra iodine. Chuyển sang <b>Nhìn vi mô</b> để thấy các hạt.');
    const s = a.svg('0 0 400 280'), vi = a.s('g', {}, s), vm = a.s('g', {}, s);
    // vĩ mô: ống nghiệm
    const ong = a.s('path', { d: 'M150 40 L150 220 Q150 250 175 250 Q200 250 200 220 L200 40', fill: 'none', stroke: 'var(--kinhvien)', 'stroke-width': 3 }, vi);
    const dd = a.s('path', { d: 'M152 120 L152 220 Q152 248 175 248 Q198 248 198 220 L198 120 Z', fill: '#e0f2fe', opacity: .9 }, vi);
    a.s('path', { d: 'M110 8 L110 26 L130 26 L130 8', fill: '#fef9c3', stroke: 'var(--net2)' }, vi); a.s('path', { d: 'M114 26 L120 34 L126 26', fill: '#fde68a', stroke: 'var(--net2)' }, vi);
    a.chu(vi, 120, 52, 'nước chlorine', { 'font-size': 10, class: 'mo' }); a.chu(vi, 175, 268, 'dung dịch KI', { 'font-size': 11, class: 'mo' });
    const giot = a.s('circle', { cx: 120, cy: 38, r: 4, fill: '#fde047', opacity: 0 }, vi);
    const bang = a.s('g', {}, vi);
    // vi mô
    a.s('rect', { x: 10, y: 10, width: 380, height: 250, rx: 14, fill: '#e0f2fe55', stroke: 'var(--line)' }, vm);
    const hat = a.s('g', {}, vm); vm.style.display = 'none';
    let giotSo = 0, tinhBot = false, roi = -1;
    const HAT = [];
    function taoHat() { hat.innerHTML = ''; HAT.length = 0;
      for (let i = 0; i < 8; i++) HAT.push({ t: 'I-', x: 30 + Math.random() * 340, y: 30 + Math.random() * 210 });
      for (let i = 0; i < 8; i++) HAT.push({ t: 'K+', x: 30 + Math.random() * 340, y: 30 + Math.random() * 210 });
      HAT.forEach(h => { h.vx = (Math.random() - .5) * 40; h.vy = (Math.random() - .5) * 40; }); }
    function mauDD() { const pr = Math.min(1, giotSo / 6); // tỉ lệ I2 tạo thành
      if (tinhBot && giotSo) return `hsl(${250},${50 + pr * 30}%,${80 - pr * 45}%)`;
      return giotSo ? `hsl(${45 - pr * 20},${70 + pr * 20}%,${88 - pr * 45}%)` : '#e0f2fe'; }
    function capNhat() {
      dd.setAttribute('fill', mauDD());
      a.bao(!giotSo ? 'Dung dịch KI <b>không màu</b>. Hãy nhỏ nước chlorine.' : tinhBot ? 'Dung dịch chuyển <b>xanh tím</b> khi có hồ tinh bột ⇒ chứng tỏ đã có <b>iodine (I<sub>2</sub>)</b> sinh ra.' :
        `Đã nhỏ ${giotSo} giọt: dung dịch chuyển dần sang màu <b>${giotSo < 3 ? 'vàng' : 'vàng nâu'}</b> — màu của iodine (I<sub>2</sub>) tan trong dung dịch.`);
      nTB.disabled = !giotSo || tinhBot;
    }
    function nho() { if (roi >= 0) return; roi = 0; giot.setAttribute('opacity', 1);
      // vi mô: thêm 1 phân tử Cl2 rơi vào
      HAT.push({ t: 'Cl2', x: 60 + Math.random() * 280, y: 20, vx: (Math.random() - .5) * 30, vy: 60 }); }
    a.lap(dt => {
      if (roi >= 0) { roi += dt; giot.setAttribute('cy', 38 + roi * 180); if (38 + roi * 180 > 120) { roi = -1; giot.setAttribute('opacity', 0); giot.setAttribute('cy', 38); giotSo++; capNhat(); } }
      // vi mô
      for (const h of HAT) { h.x += h.vx * dt; h.y += h.vy * dt; if (h.x < 24 || h.x > 376) h.vx *= -1; if (h.y < 24 || h.y > 246) h.vy *= -1; if (h.vy > 40 && h.t === 'Cl2') h.vy *= 0.98; }
      // Cl2 + 2I- -> 2Cl- + I2: Cl2 gặp I- thì lấy electron
      for (const c of HAT.filter(h => h.t === 'Cl2')) {
        const io = HAT.filter(h => h.t === 'I-').sort((p, q) => Math.hypot(p.x - c.x, p.y - c.y) - Math.hypot(q.x - c.x, q.y - c.y));
        if (io.length >= 2 && Math.hypot(io[0].x - c.x, io[0].y - c.y) < 40) {
          c.t = 'Cl-'; HAT.push({ t: 'Cl-', x: c.x + 10, y: c.y, vx: -c.vx, vy: (Math.random() - .5) * 40 });
          io[0].t = 'I2'; io[1].t = 'xoa'; io[0].hien = 1.2;
        } else { const d = io[0]; if (d) { c.vx += (d.x - c.x) * dt * .8; c.vy += (d.y - c.y) * dt * .8; } }
      }
      for (let i = HAT.length - 1; i >= 0; i--) if (HAT[i].t === 'xoa') HAT.splice(i, 1);
      if (vm.style.display !== 'none') { hat.innerHTML = '';
        HAT.forEach(h => { const g = a.s('g', { transform: `translate(${h.x.toFixed(1)} ${h.y.toFixed(1)})` }, hat);
          if (h.t === 'I-') { a.s('circle', { r: 11, fill: '#a855f7' }, g); a.chu(g, 0, 4, 'I^-', { 'font-size': 10, style: 'fill:#fff', 'font-weight': 700 }); }
          if (h.t === 'K+') { a.s('circle', { r: 8, fill: '#94a3b8' }, g); a.chu(g, 0, 4, 'K^+', { 'font-size': 9, style: 'fill:#fff', 'font-weight': 700 }); }
          if (h.t === 'Cl-') { a.s('circle', { r: 9, fill: '#22c55e' }, g); a.chu(g, 0, 4, 'Cl^-', { 'font-size': 9, style: 'fill:#fff', 'font-weight': 700 }); }
          if (h.t === 'Cl2') { a.s('circle', { cx: -6, r: 8, fill: '#facc15' }, g); a.s('circle', { cx: 6, r: 8, fill: '#facc15' }, g); a.chu(g, 0, 4, 'Cl2', { 'font-size': 9, 'font-weight': 700, style: 'fill:#713f12' }); }
          if (h.t === 'I2') { a.s('circle', { cx: -8, r: 11, fill: '#7c2d12' }, g); a.s('circle', { cx: 8, r: 11, fill: '#7c2d12' }, g); a.chu(g, 0, 4, 'I2', { 'font-size': 10, 'font-weight': 700, style: 'fill:#fff' });
            if (h.hien > 0) { h.hien -= dt; a.chu(g, 0, -16, '2I⁻ đã nhường 2e cho Cl₂', { 'font-size': 9, style: 'fill:#dc2626', 'font-weight': 700 }); } }
        }); }
    });
    a.chon([['vi', '🧪 Ống nghiệm'], ['vm', '🔬 Nhìn vi mô (các hạt)']], k => { vi.style.display = k === 'vi' ? '' : 'none'; vm.style.display = k === 'vm' ? '' : 'none'; }, { td: 'Cách nhìn', dau: 'vi', imLang: true });
    const h = a.hang(a.nhom('Thao tác'));
    a.nut('💧 Nhỏ 1 giọt nước chlorine', nho, { vao: h, nho: true });
    const nTB = a.nut('Nhỏ hồ tinh bột', () => { tinhBot = true; capNhat(); }, { vao: h, nho: true, phu: true });
    a.nut('↺ Làm lại', () => { giotSo = 0; tinhBot = false; taoHat(); capNhat(); }, { vao: h, nho: true, phu: true });
    taoHat(); capNhat();
    a.ket(`<p>• Phương trình: <b>Cl<sub>2</sub> + 2KI → 2KCl + I<sub>2</sub></b>. Dung dịch chuyển vàng nâu do I<sub>2</sub> sinh ra (hồ tinh bột hoá xanh tím khi gặp I<sub>2</sub>).</p>
      <p>• Chlorine <b>nhận electron</b> của ion iodide, đẩy iodine ra khỏi muối ⇒ chlorine dễ nhận electron hơn iodine ⇒ <b>tính phi kim Cl &gt; I</b>.</p>
      <p>• Cl (chu kì 3) và I (chu kì 5) cùng nhóm VIIA: trong một nhóm A, tính phi kim <b>giảm</b> từ trên xuống dưới.</p>`);
    a.hoi([
      { h: 'Chất làm dung dịch chuyển màu vàng nâu là', d: ['KCl', 'Cl<sub>2</sub>', 'I<sub>2</sub>', 'KI'], dung: 2 },
      { h: 'Thí nghiệm chứng tỏ', d: ['tính phi kim I > Cl', 'tính phi kim Cl > I', 'tính kim loại Cl > I', 'Cl và I có tính phi kim bằng nhau'], dung: 1 },
    ]);
  } },
] });
