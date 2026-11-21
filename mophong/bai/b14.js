/* Bài 14. Ôn tập chương 3 — 2 mô phỏng */
MP_NAP({ ma: '14', ds: [

/* ---------- 1. Phòng thí nghiệm: thử tính chất, đoán loại liên kết ---------- */
{ id: 'tham-tu-lien-ket', ic: '🔎', ten: 'Thám tử liên kết: thử tính chất để đoán loại liên kết',
  mo: 'Với mỗi chất: đun nóng chảy, hoà tan vào nước, thử dẫn điện — rồi đoán chất có liên kết ion hay cộng hoá trị.',
  chay(a) {
    a.huong('Chọn một chất, làm lần lượt <b>3 phép thử</b>. Kết quả ghi vào bảng. Sau đó chọn đáp án của em ở mục <b>Em đoán</b>.');
    const CHAT = {
      NaCl: { t: 'muối ăn NaCl', nc: '801 °C', tan: 'tan nhiều', dien: 'dung dịch và chất nóng chảy dẫn điện', lk: 'ion', mau: '#f8fafc', nmo: 801 },
      MgO: { t: 'magnesium oxide MgO', nc: '2 852 °C', tan: 'rất ít tan', dien: 'chất nóng chảy dẫn điện', lk: 'ion', mau: '#f1f5f9', nmo: 2852 },
      duong: { t: 'đường saccharose', nc: 'khoảng 186 °C (bắt đầu bị phân huỷ)', tan: 'tan nhiều', dien: 'dung dịch không dẫn điện', lk: 'phan-cuc', mau: '#fffbeb', nmo: 186 },
      C2H5OH: { t: 'ethanol (cồn) C2H5OH', nc: '−114 °C (thể lỏng ở nhiệt độ phòng)', tan: 'tan vô hạn', dien: 'dung dịch không dẫn điện', lk: 'phan-cuc', mau: '#f0f9ff', nmo: -114 },
      I2: { t: 'iodine I2', nc: '113,6 °C', tan: 'rất ít tan trong nước (tan tốt trong benzene)', dien: 'không dẫn điện', lk: 'khong-cuc', mau: '#4c1d95', nmo: 113.6 },
    };
    const LK = { ion: 'liên kết ion', 'phan-cuc': 'liên kết cộng hoá trị phân cực', 'khong-cuc': 'liên kết cộng hoá trị không phân cực' };
    const s = a.svg('0 0 400 250'), g = a.s('g', {}, s);
    let c = 'NaCl', da = {}, hieuUng = null, tg = 0;
    function ve() {
      g.innerHTML = ''; const C = CHAT[c];
      // ba trạm thử
      [['nc', '🔥', 'Đun nóng chảy'], ['tan', '💧', 'Hoà tan vào nước'], ['dien', '💡', 'Thử dẫn điện']].forEach(([k, ic, t], i) => {
        const x = 20 + i * 128;
        a.s('rect', { x, y: 14, width: 118, height: 120, rx: 12, fill: da[k] ? 'var(--soft)' : 'var(--card)', stroke: hieuUng === k ? '#d97706' : 'var(--line)', 'stroke-width': hieuUng === k ? 2.5 : 1 }, g);
        a.chu(g, x + 59, 36, ic + ' ' + t, { 'font-size': 11, 'font-weight': 700 });
        // hình minh hoạ nhỏ
        if (k === 'nc') { a.s('path', { d: `M${x + 40} 60 L${x + 40} 105 Q${x + 40} 115 ${x + 50} 115 L${x + 68} 115 Q${x + 78} 115 ${x + 78} 105 L${x + 78} 60`, fill: 'none', stroke: 'var(--kinhvien)', 'stroke-width': 2 }, g);
          a.s('rect', { x: x + 44, y: 95, width: 30, height: 16, fill: C.mau, stroke: '#94a3b8', opacity: da.nc && C.nmo < 25 ? .2 : 1 }, g);
          if (hieuUng === 'nc') a.s('path', { d: `M${x + 50} 128 q4 -10 8 0 q4 -10 8 0`, fill: '#f97316' }, g); }
        if (k === 'tan') { a.s('rect', { x: x + 34, y: 62, width: 50, height: 52, rx: 4, fill: '#bfdbfe', opacity: .7 }, g);
          const tan = C.tan.startsWith('tan'); if (da.tan && !tan) a.s('rect', { x: x + 48, y: 102, width: 22, height: 10, fill: C.mau, stroke: '#94a3b8' }, g); }
        if (k === 'dien') { const sang = da.dien && /dẫn điện/.test(C.dien) && !/không dẫn/.test(C.dien);
          a.s('circle', { cx: x + 59, cy: 80, r: 16, fill: sang ? '#fde047' : '#e5e7eb', stroke: 'var(--net)' }, g); if (sang) a.s('circle', { cx: x + 59, cy: 80, r: 28, fill: '#fde047', opacity: .35 }, g); }
        const kq = a.chu(g, x + 59, 128, da[k] ? '✔ đã thử' : 'chưa thử', { 'font-size': 10, class: 'mo' });
      });
      // bảng kết quả
      const R = [['Nhiệt độ nóng chảy', da.nc ? C.nc : '?'], ['Tính tan trong nước', da.tan ? C.tan : '?'], ['Tính dẫn điện', da.dien ? C.dien : '?']];
      R.forEach(([t, v], i) => { a.chu(g, 24, 166 + i * 26, t + ':', { 'font-size': 12, 'text-anchor': 'start', 'font-weight': 700 }); a.chu(g, 150, 166 + i * 26, v.length > 40 ? v.slice(0, 40) + '…' : v, { 'font-size': 11.5, 'text-anchor': 'start' }); });
    }
    a.lap(dt => { if (hieuUng) { tg += dt; if (tg > 1) { da[hieuUng] = 1; hieuUng = null; tg = 0; moTa(); } } ve(); });
    function moTa() { const C = CHAT[c]; const n = Object.keys(da).length;
      a.bao(`Chất: <b>${ctHTML(C.t)}</b>. ` + (n < 3 ? `Đã làm ${n}/3 phép thử.` : `Đủ 3 phép thử: nóng chảy ở ${C.nc}; ${C.tan} trong nước; ${C.dien}. Giờ em đoán loại liên kết nhé!`)); }
    a.chon(Object.keys(CHAT).map(k => [k, k === 'duong' ? 'đường' : k === 'C2H5OH' ? 'ethanol' : ctHTML(k)]), k => { c = k; da = {}; hieuUng = null; dd.innerHTML = ''; moTa(); }, { td: 'Chất', dau: 'NaCl', imLang: true });
    const h = a.hang(a.nhom('Phép thử'));
    a.nut('🔥 Đun', () => { if (!hieuUng) hieuUng = 'nc'; }, { vao: h, nho: true }); a.nut('💧 Hoà tan', () => { if (!hieuUng) hieuUng = 'tan'; }, { vao: h, nho: true }); a.nut('💡 Thử điện', () => { if (!hieuUng) hieuUng = 'dien'; }, { vao: h, nho: true });
    const nd = a.nhom('Em đoán: chất này có'), hd = a.hang(nd), dd = document.createElement('div'); dd.style.marginTop = '8px'; nd.appendChild(dd);
    Object.keys(LK).forEach(k => a.nut(LK[k], () => { const C = CHAT[c];
      if (Object.keys(da).length < 3) { dd.innerHTML = '⚠ Em làm đủ 3 phép thử trước đã.'; return; }
      dd.innerHTML = k === C.lk ? `✅ Chính xác: ${ctHTML(C.t)} có <b>${LK[k]}</b>.` : `❌ Chưa đúng. ${ctHTML(C.t)} có <b>${LK[C.lk]}</b>.`;
      dd.innerHTML += { ion: ' Hợp chất ion: rắn, nhiệt độ nóng chảy cao, dẫn điện khi nóng chảy hoặc tan trong nước.', 'phan-cuc': ' Chất cộng hoá trị phân cực: thường tan nhiều trong nước, không dẫn điện, nhiệt độ nóng chảy thấp hơn nhiều so với hợp chất ion.', 'khong-cuc': ' Chất cộng hoá trị không phân cực: ít tan trong nước, tan trong dung môi không phân cực (benzene, CCl<sub>4</sub>), không dẫn điện.' }[C.lk]; }, { vao: hd, nho: true, phu: true }));
    moTa();
    a.ket(`<table class="bang"><tr><th></th><th>Hợp chất ion</th><th>Chất cộng hoá trị</th></tr>
      <tr><td>Trạng thái</td><td>rắn ở điều kiện thường</td><td>rắn, lỏng hoặc khí</td></tr>
      <tr><td>Nhiệt độ nóng chảy, sôi</td><td>cao</td><td>thấp hơn nhiều</td></tr>
      <tr><td>Tính tan</td><td>thường tan nhiều trong nước</td><td>phân cực: thường tan trong nước; không phân cực: ít tan trong nước</td></tr>
      <tr><td>Dẫn điện</td><td>khi nóng chảy hoặc tan trong nước</td><td>thường không dẫn điện</td></tr></table>`);
    a.hoi([{ h: 'Một chất rắn có nhiệt độ nóng chảy rất cao, dẫn điện khi nóng chảy. Chất đó có liên kết', d: ['cộng hoá trị không phân cực', 'cộng hoá trị phân cực', 'ion', 'hydrogen'], dung: 2 }]);
  } },

/* ---------- 2. Máy phân loại liên kết ---------- */
{ id: 'may-phan-loai', ic: '🗃️', ten: 'Máy tổng hợp: hai nguyên tố → loại liên kết, công thức, cấu tạo',
  mo: 'Chọn hai nguyên tố: máy cho biết chúng nhường – nhận hay góp chung electron, công thức chất, công thức cấu tạo, loại liên kết.',
  chay(a) {
    a.huong('Chọn hai nguyên tố. Máy suy luận theo <b>quy tắc octet</b> và <b>hiệu độ âm điện</b> (Bảng 6.2, Bảng 12.1).');
    const X = { H: 2.20, C: 2.55, N: 3.04, O: 3.44, F: 3.98, S: 2.58, Cl: 3.16, Na: 0.93, Mg: 1.31, Al: 1.61, K: 0.82, Ca: 1.00 };
    const KL = { Na: 1, Mg: 2, Al: 3, K: 1, Ca: 2 }, PK = { O: 2, F: 1, Cl: 1 };
    const CHT = { 'H-H': ['H2', 'H–H'], 'H-C': ['CH4', 'C liên kết đơn với 4 nguyên tử H'], 'H-N': ['NH3', 'N liên kết đơn với 3 H, còn 1 cặp electron chưa liên kết'], 'H-O': ['H2O', 'H–O–H, O còn 2 cặp electron chưa liên kết'],
      'H-F': ['HF', 'H–F'], 'H-S': ['H2S', 'H–S–H'], 'H-Cl': ['HCl', 'H–Cl'], 'C-O': ['CO2', 'O=C=O (hai liên kết đôi)'], 'C-F': ['CF4', 'C liên kết đơn với 4 F'], 'C-Cl': ['CCl4', 'C liên kết đơn với 4 Cl'],
      'Cl-Cl': ['Cl2', 'Cl–Cl'], 'O-O': ['O2', 'O=O (liên kết đôi)'], 'N-N': ['N2', 'N≡N (liên kết ba)'], 'F-F': ['F2', 'F–F'], 'C-S': ['CS2', 'S=C=S'] };
    const s = a.svg('0 0 400 210'), g = a.s('g', {}, s);
    let A = 'Na', B = 'Cl';
    function ve() {
      g.innerHTML = ''; let [p, q] = [A, B]; if (KL[q] || (!KL[p] && X[q] < X[p])) [p, q] = [q, p];   // p: kim loại hoặc nguyên tử có χ nhỏ hơn
      const dd = Math.abs(X[A] - X[B]); let ct = '', ctao = '', loai = '', ghi = '';
      if (KL[p] && KL[q]) { a.bao(`${A} và ${B} đều là kim loại — em chọn ít nhất một phi kim nhé.`); return; }
      if (KL[p] && PK[q]) { const m = KL[p], n = PK[q], u = (x, y) => y ? u(y, x % y) : x, k = u(m, n), x = n / k, y = m / k;
        ct = p + (x > 1 ? x : '') + q + (y > 1 ? y : ''); loai = dd >= 1.7 ? 'ion' : 'cộng hoá trị phân cực';
        ctao = `${p} → ${p}^${m > 1 ? m : ''}+ + ${m > 1 ? m : ''}e ; ${q} + ${n > 1 ? n : ''}e → ${q}^${n > 1 ? n : ''}-`; ghi = dd >= 1.7 ? `Kim loại ${p} nhường ${m} e, phi kim ${q} nhận ${n} e. Hai loại ion trái dấu hút nhau.` : `Theo hiệu độ âm điện |Δχ| = ${dd.toFixed(2).replace('.', ',')} &lt; 1,7 nên liên kết trong ${ctHTML(ct)} là <b>cộng hoá trị phân cực</b> (dù ${p} là kim loại).`; if (dd < 1.7) ctao = p + ' và ' + q + ' góp chung electron, cặp dùng chung lệch về ' + q; }
      else if (KL[p]) { a.bao(`Cặp ${A} – ${B}: chưa xét trong bài này. Em ghép kim loại với O, F hoặc Cl nhé.`); return; }
      else { const kh = [p, q].sort().join('-'), kh2 = [p, q].join('-'), kh3 = [q, p].join('-'), d = CHT[kh2] || CHT[kh3] || CHT[kh];
        if (!d) { a.bao(`Cặp ${A} – ${B} có thể tạo nhiều hợp chất khác nhau (ví dụ các oxide của nitrogen, sulfur) — chưa xét ở chương này. Em thử cặp khác nhé.`); return; }
        ct = d[0]; ctao = d[1]; loai = dd < 0.4 ? 'cộng hoá trị không phân cực' : dd < 1.7 || kh3 === 'H-F' || kh2 === 'H-F' ? 'cộng hoá trị phân cực' : 'ion';
        ghi = A === B ? 'Hai nguyên tử giống nhau góp chung electron, cặp dùng chung không lệch.' : `Hai phi kim góp chung electron; cặp dùng chung lệch về ${X[A] > X[B] ? A : B}.`;
        if (ct === 'CO2' || ct === 'CS2' || ct === 'CF4' || ct === 'CCl4') ghi += ' Phân tử có cấu tạo đối xứng nên các liên kết phân cực triệt tiêu nhau: phân tử không phân cực.'; }
      const t = a.chu(g, 200, 70, '', { 'font-size': 40, 'font-weight': 800 }); ctSVG(t, ct);
      const t2 = a.chu(g, 200, 104, '', { 'font-size': 13 }); ctSVG(t2, ctao.length > 60 ? ctao.slice(0, 60) + '…' : ctao);
      a.chu(g, 200, 136, 'Liên kết ' + loai, { 'font-size': 16, 'font-weight': 800, style: loai === 'ion' ? 'fill:#dc2626' : loai.includes('không') ? 'fill:#16a34a' : 'fill:#d97706' });
      // thang Δχ
      const X0 = 40, X1 = 360, k = (X1 - X0) / 3.2, y = 168;
      [[0, .4, '#bbf7d0'], [.4, 1.7, '#fde68a'], [1.7, 3.2, '#fecaca']].forEach(([u, v, m]) => a.s('rect', { x: X0 + u * k, y, width: (v - u) * k, height: 14, fill: m }, g));
      const mx = X0 + Math.min(3.2, dd) * k; a.s('path', { d: `M${mx} ${y + 16} l-6 10 l12 0 z`, fill: 'var(--net)' }, g); a.chu(g, mx, y + 40, '|Δχ| = ' + dd.toFixed(2).replace('.', ','), { 'font-size': 11, 'font-weight': 700 });
      a.bao(`${A} (χ = ${String(X[A]).replace('.', ',')}) và ${B} (χ = ${String(X[B]).replace('.', ',')}): ${ghi}` + (ct === 'HF' ? ' (HF: ngoại lệ, |Δχ| ≥ 1,7 nhưng là liên kết cộng hoá trị phân cực.)' : ''));
    }
    const ds = Object.keys(X).map(k => [k, k]);
    a.chon(ds, k => { A = k; ve(); }, { td: 'Nguyên tố thứ nhất', dau: 'Na', imLang: true });
    a.chon(ds, k => { B = k; ve(); }, { td: 'Nguyên tố thứ hai', dau: 'Cl', imLang: true });
    ve();
    a.ket(`<p>• <b>Kim loại điển hình + phi kim điển hình</b> → nhường – nhận electron → <b>liên kết ion</b>.</p>
      <p>• <b>Phi kim + phi kim</b> → góp chung electron → <b>liên kết cộng hoá trị</b> (không phân cực nếu |Δχ| &lt; 0,4; phân cực nếu 0,4 ≤ |Δχ| &lt; 1,7).</p>
      <p>• Liên kết hydrogen và tương tác van der Waals là tương tác <b>giữa các phân tử</b>, yếu hơn nhiều so với liên kết ion, cộng hoá trị.</p>`);
    a.hoi([{ h: 'Phân tử CO<sub>2</sub> có liên kết C=O phân cực nhưng phân tử không phân cực vì', d: ['C và O có độ âm điện bằng nhau', 'phân tử có cấu tạo thẳng nên độ phân cực của hai liên kết triệt tiêu nhau', 'CO<sub>2</sub> là chất khí', 'trong CO<sub>2</sub> có liên kết ion'], dung: 1 }]);
  } },
] });
