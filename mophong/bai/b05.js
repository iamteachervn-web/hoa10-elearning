/* Bài 5. Cấu tạo của bảng tuần hoàn — 2 mô phỏng */
const KH118 = ('H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe ' +
  'Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og').split(' ');
const TEN118 = ('hydrogen helium lithium beryllium boron carbon nitrogen oxygen fluorine neon sodium magnesium aluminium silicon phosphorus sulfur chlorine argon potassium calcium ' +
  'scandium titanium vanadium chromium manganese iron cobalt nickel copper zinc gallium germanium arsenic selenium bromine krypton rubidium strontium yttrium zirconium niobium ' +
  'molybdenum technetium ruthenium rhodium palladium silver cadmium indium tin antimony tellurium iodine xenon caesium barium lanthanum cerium praseodymium neodymium promethium ' +
  'samarium europium gadolinium terbium dysprosium holmium erbium thulium ytterbium lutetium hafnium tantalum tungsten rhenium osmium iridium platinum gold mercury thallium lead ' +
  'bismuth polonium astatine radon francium radium actinium thorium protactinium uranium neptunium plutonium americium curium berkelium californium einsteinium fermium ' +
  'mendelevium nobelium lawrencium rutherfordium dubnium seaborgium bohrium hassium meitnerium darmstadtium roentgenium copernicium nihonium flerovium moscovium livermorium tennessine oganesson').split(' ');
const PHI_KIM = ['H', 'B', 'C', 'N', 'O', 'F', 'Si', 'P', 'S', 'Cl', 'As', 'Se', 'Br', 'Te', 'I', 'At'];
const TEN_NHOM = ['', 'IA', 'IIA', 'IIIB', 'IVB', 'VB', 'VIB', 'VIIB', 'VIIIB', 'VIIIB', 'VIIIB', 'IB', 'IIB', 'IIIA', 'IVA', 'VA', 'VIA', 'VIIA', 'VIIIA'];
function oBang(z) {   // trả về {ck, cot (1–18), hang (dòng vẽ 1–9), khoi}
  const p = z <= 2 ? 1 : z <= 10 ? 2 : z <= 18 ? 3 : z <= 36 ? 4 : z <= 54 ? 5 : z <= 86 ? 6 : 7;
  const dau = [0, 1, 3, 11, 19, 37, 55, 87][p];
  if (p === 1) return { ck: 1, cot: z === 1 ? 1 : 18, hang: 1, khoi: 's' };
  if (p <= 3) { const i = z - dau; const cot = i < 2 ? i + 1 : i + 11; return { ck: p, cot, hang: p, khoi: i < 2 ? 's' : 'p' }; }
  if (p <= 5) { const cot = z - dau + 1; return { ck: p, cot, hang: p, khoi: cot <= 2 ? 's' : cot <= 12 ? 'd' : 'p' }; }
  const i = z - dau;                       // chu kì 6, 7: 2 ô s, 15 ô họ f (tách xuống dưới), rồi 4–18
  if (i < 2) return { ck: p, cot: i + 1, hang: p, khoi: 's' };
  if (i < 17) return { ck: p, cot: 3 + (i - 2), hang: p + 2.35, khoi: 'f', f: true };
  const cot = i - 13; return { ck: p, cot, hang: p, khoi: cot <= 12 ? 'd' : 'p' };
}
const loai118 = z => { const o = oBang(z), k = KH118[z - 1]; return o.cot === 18 ? 'kh' : PHI_KIM.includes(k) ? 'pk' : 'kl'; };
const MAU_KHOI = { s: '#fda4af', p: '#fde68a', d: '#93c5fd', f: '#86efac' }, MAU_LOAI = { kl: '#93c5fd', pk: '#fde68a', kh: '#d8b4fe' };

MP_NAP({ ma: '5', ds: [

/* ---------- 1. Bảng tuần hoàn tương tác ---------- */
{ id: 'bang-tuan-hoan', ic: '🗂️', ten: 'Bảng tuần hoàn tương tác: ô, chu kì, nhóm, khối',
  mo: 'Chạm vào ô nguyên tố để xem vì sao nó nằm ở chu kì, nhóm đó. Tô màu theo khối s, p, d, f hoặc kim loại – phi kim – khí hiếm.',
  chay(a) {
    a.huong('Chạm vào một ô nguyên tố. Đổi cách tô màu ở bên dưới. Chạm vào số chu kì (bên trái) hoặc tên nhóm (phía trên) để tô sáng cả hàng, cả cột.');
    const s = a.svg('0 0 400 268'), g = a.s('g', {}, s), W = 21.2, H = 24, X0 = 14, Y0 = 20;
    let to = 'khoi', chon = 13, sang = null;
    const xO = c => X0 + (c - 1) * W, yO = h => Y0 + (h - 1) * H;
    function ve() {
      g.innerHTML = '';
      for (let c = 1; c <= 18; c++) { const t = a.chu(g, xO(c) + W / 2, Y0 - 5, (c <= 2 || c >= 13) ? TEN_NHOM[c] : TEN_NHOM[c].replace('VIIIB', c === 9 ? 'VIIIB' : ''), { 'font-size': 6.4, 'font-weight': 700, class: 'mo' }); t.style.cursor = 'pointer'; t.onclick = () => { sang = { cot: c }; ve(); moTa(); }; }
      for (let p = 1; p <= 7; p++) { const t = a.chu(g, X0 - 6, yO(p) + H / 2 + 3, String(p), { 'font-size': 9, 'font-weight': 800, class: 'mo' }); t.style.cursor = 'pointer'; t.onclick = () => { sang = { ck: p }; ve(); moTa(); }; }
      for (let z = 1; z <= 118; z++) {
        const o = oBang(z), x = xO(o.cot), y = yO(o.hang), mau = to === 'khoi' ? MAU_KHOI[o.khoi] : MAU_LOAI[loai118(z)];
        const mo = sang ? ((sang.ck && sang.ck === o.ck) || (sang.cot && sang.cot === o.cot && !o.f) ? 1 : .18) : 1;
        const o2 = a.s('g', { opacity: mo, style: 'cursor:pointer' }, g);
        a.s('rect', { x: x + .6, y: y + .6, width: W - 1.2, height: H - 1.2, rx: 2.5, fill: mau, stroke: z === chon ? '#dc2626' : '#0003', 'stroke-width': z === chon ? 2 : .5 }, o2);
        const t1 = a.s('text', { x: x + 2, y: y + 7.5, 'font-size': 5.6, style: 'fill:#334155' }, o2); t1.textContent = z;
        const t2 = a.s('text', { x: x + W / 2, y: y + 18.5, 'font-size': 9.5, 'font-weight': 800, 'text-anchor': 'middle', style: 'fill:#0f172a' }, o2); t2.textContent = KH118[z - 1];
        o2.addEventListener('click', () => { chon = z; sang = null; ve(); moTa(); });
      }
      // ô chỉ dẫn họ lanthanide, actinide
      [[6, '57–71'], [7, '89–103']].forEach(([p, t]) => { a.s('rect', { x: xO(3) + .6, y: yO(p) + .6, width: W - 1.2, height: H - 1.2, rx: 2.5, fill: MAU_KHOI.f, opacity: .5 }, g); a.chu(g, xO(3) + W / 2, yO(p) + 15, t, { 'font-size': 5.2 }); });
      a.chu(g, xO(3) - 2, yO(8.35) + 15, 'họ lanthanide', { 'font-size': 7, 'text-anchor': 'end', class: 'mo' }); a.chu(g, xO(3) - 2, yO(9.35) + 15, 'họ actinide', { 'font-size': 7, 'text-anchor': 'end', class: 'mo' });
      // chú thích
      const cs = to === 'khoi' ? [['s', 'khối s'], ['p', 'khối p'], ['d', 'khối d'], ['f', 'khối f']] : [['kl', 'kim loại'], ['pk', 'phi kim'], ['kh', 'khí hiếm']];
      cs.forEach(([k, t], i) => { a.s('rect', { x: 70 + i * 60, y: 252, width: 12, height: 12, rx: 2, fill: to === 'khoi' ? MAU_KHOI[k] : MAU_LOAI[k] }, g); a.chu(g, 86 + i * 60, 262, t, { 'font-size': 9, 'text-anchor': 'start' }); });
    }
    function moTa() {
      if (sang) { a.bao(sang.ck ? `<b>Chu kì ${sang.ck}</b>: các nguyên tố có <b>${sang.ck} lớp electron</b>, xếp theo chiều tăng dần điện tích hạt nhân. ${sang.ck <= 3 ? 'Chu kì nhỏ.' : 'Chu kì lớn.'} Chu kì ${sang.ck} có ${[0, 2, 8, 8, 18, 18, 32, 32][sang.ck]} nguyên tố.`
        : `<b>Nhóm ${TEN_NHOM[sang.cot]}</b> (cột ${sang.cot}): các nguyên tố có ${sang.cot <= 2 || sang.cot >= 13 ? 'cùng số electron lớp ngoài cùng (' + (sang.cot <= 2 ? sang.cot : sang.cot - 10) + ' electron) ⇒ tính chất hoá học gần giống nhau. Nhóm A gồm nguyên tố s và p.' : 'cùng số electron hoá trị (electron ở phân lớp (n−1)d và ns). Nhóm B gồm nguyên tố d và f, đều là kim loại.'}`); return; }
      const z = chon, o = oBang(z), k = KH118[z - 1], ten = TEN118[z - 1];
      let h = `<b>${k}</b> — ${ten} · số hiệu nguyên tử <b>Z = ${z}</b> ⇒ ô số ${z}` + (z <= 36 ? ` · nguyên tử khối ${String(NT[z].m).replace('.', ',')}` : '') + '<br>';
      if (z <= 36) {
        const L = soLop(z), v = viTri(z), ph = cauHinh(z), cuoi = ph[ph.length - 1];
        h += `Cấu hình: <b>${chuCauHinh(z, z > 20)}</b><br>• Có <b>${L.length} lớp electron</b> ⇒ <b>chu kì ${o.ck}</b>.<br>`;
        h += o.khoi === 'd' ? `• Electron cuối điền vào phân lớp <b>${cuoi.n}${cuoi.l}</b> ⇒ nguyên tố <b>d</b>; ${(ph.find(p => p.l === 'd') || {}).e} e ở 3d + ${(ph.find(p => p.n === 4 && p.l === 's') || {}).e} e ở 4s ⇒ nhóm <b>${v.nhom}</b>.`
          : `• Electron cuối điền vào phân lớp <b>${cuoi.n}${cuoi.l}</b> ⇒ nguyên tố <b>${o.khoi}</b>; có <b>${z === 2 ? 2 : v.so}</b> electron lớp ngoài cùng ⇒ nhóm <b>${TEN_NHOM[o.cot]}</b>.`;
      } else h += `Chu kì <b>${o.ck}</b> · ${o.f ? 'thuộc họ ' + (o.ck === 6 ? 'lanthanide' : 'actinide') + ' (nguyên tố <b>f</b>, nhóm IIIB)' : 'nhóm <b>' + TEN_NHOM[o.cot] + '</b> · nguyên tố <b>' + o.khoi + '</b>'}.` + (z >= 104 ? ' Nguyên tố nhân tạo.' : '');
      h += ` · ${{ kl: 'kim loại', pk: 'phi kim', kh: 'khí hiếm' }[loai118(z)]}`;
      a.bao(h);
    }
    a.chon([['khoi', 'Tô theo khối s, p, d, f'], ['loai', 'Kim loại – phi kim – khí hiếm']], k => { to = k; ve(); }, { td: 'Cách tô màu', dau: 'khoi', imLang: true });
    a.nut('↺ Bỏ tô sáng hàng / cột', () => { sang = null; ve(); moTa(); }, { phu: true });
    ve(); moTa();
    a.ket(`<p>• Các nguyên tố được xếp theo chiều <b>tăng dần điện tích hạt nhân</b>; cùng số lớp electron xếp thành một hàng (<b>chu kì</b>); cùng số electron hoá trị xếp thành một cột (<b>nhóm</b>).</p>
      <p>• Số thứ tự ô = Z · số thứ tự chu kì = số lớp electron · nhóm A: số thứ tự nhóm = số electron lớp ngoài cùng.</p>
      <p>• Bảng có 7 chu kì (1, 2, 3 là chu kì nhỏ; 4–7 là chu kì lớn), 8 nhóm A (nguyên tố s, p) và 8 nhóm B (nguyên tố d, f).</p>`);
    a.hoi([
      { h: 'Nguyên tử X có cấu hình 1s²2s²2p⁶3s²3p⁴. X ở', d: ['chu kì 3, nhóm IVA', 'chu kì 3, nhóm VIA', 'chu kì 4, nhóm VIA', 'chu kì 2, nhóm VIA'], dung: 1, g: '3 lớp ⇒ chu kì 3; 6 electron lớp ngoài cùng, nguyên tố p ⇒ nhóm VIA.' },
      { h: 'Nhóm B gồm các nguyên tố', d: ['s và p', 'p và d', 'd và f', 's và f'], dung: 2 },
    ]);
  } },

/* ---------- 2. Xây bảng tuần hoàn từ Z = 1 đến 36 ---------- */
{ id: 'xay-bang', ic: '🧱', ten: 'Xây bảng tuần hoàn từ Z = 1 đến Z = 36',
  mo: 'Thêm từng nguyên tố theo chiều tăng Z: thấy vì sao mỗi chu kì kết thúc ở khí hiếm và vì sao có khối s, p, d.',
  chay(a) {
    a.huong('Bấm <b>Thêm nguyên tố tiếp theo</b> (hoặc <b>Tự chạy</b>). Phân lớp vừa nhận electron được tô sáng; ô mới bay vào đúng chỗ của nó.');
    const s = a.svg('0 0 400 250'), bang = a.s('g', {}, s), ph = a.s('g', {}, s);
    const W = 21.2, H = 28, X0 = 9, Y0 = 16;
    let n = 0, chay = false, t0 = 0;
    function ve() {
      bang.innerHTML = ''; ph.innerHTML = '';
      for (let z = 1; z <= 36; z++) { const o = oBang(z), x = X0 + (o.cot - 1) * W, y = Y0 + (o.hang - 1) * H;
        a.s('rect', { x: x + .6, y: y + .6, width: W - 1.2, height: H - 1.2, rx: 2.5, fill: z <= n ? MAU_KHOI[o.khoi] : 'none', stroke: z === n ? '#dc2626' : 'var(--line)', 'stroke-width': z === n ? 2 : 1, 'stroke-dasharray': z <= n ? '' : '2 2' }, bang);
        if (z <= n) { const t = a.s('text', { x: x + W / 2, y: y + 19, 'font-size': 9.5, 'font-weight': 800, 'text-anchor': 'middle', style: 'fill:#0f172a' }, bang); t.textContent = KH118[z - 1];
          const t2 = a.s('text', { x: x + 2, y: y + 7.5, 'font-size': 5.6, style: 'fill:#334155' }, bang); t2.textContent = z; } }
      // thang phân lớp
      const PL = [['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 2], ['3d', 10], ['4p', 6]];
      const ch = n ? cauHinh(n) : [], cuoi = ch[ch.length - 1];
      PL.forEach(([t, max], i) => { const pp = ch.find(p => p.n + p.l === t), e = pp ? pp.e : 0, x = 14 + i * 48, y = 150;
        const dang = cuoi && cuoi.n + cuoi.l === t;
        a.s('rect', { x, y, width: 42, height: 66, rx: 6, fill: dang ? '#fef3c7' : 'var(--card)', stroke: dang ? '#d97706' : 'var(--line)', 'stroke-width': dang ? 2 : 1 }, ph);
        a.s('rect', { x: x + 4, y: y + 62 - e / max * 40, width: 34, height: e / max * 40, rx: 3, fill: MAU_KHOI[t[1]] }, ph);
        a.chu(ph, x + 21, y + 14, t, { 'font-size': 12, 'font-weight': 800 }); a.chu(ph, x + 21, y + 60, e + '/' + max, { 'font-size': 10 }); });
      a.chu(ph, 200, 236, 'Thứ tự điền electron: 1s 2s 2p 3s 3p 4s 3d 4p', { 'font-size': 11, class: 'mo' });
      if (!n) { a.bao('Bảng đang trống. Bấm <b>Thêm nguyên tố tiếp theo</b> để bắt đầu với hydrogen (Z = 1).'); return; }
      const o = oBang(n), v = viTri(n), kh = KH118[n - 1];
      let h = `<b>Z = ${n}: ${kh}</b> (${TEN118[n - 1]}) — ${chuCauHinh(n, n > 20)}<br>Electron thứ ${n} vào phân lớp <b>${cuoi.n}${cuoi.l}</b> ⇒ ô ${n}, <b>chu kì ${o.ck}</b>, nhóm <b>${v.nhom}</b>, nguyên tố <b>${o.khoi}</b>.`;
      if (o.cot === 18) h += `<br>🔔 ${kh} có lớp ngoài cùng bão hoà (${n === 2 ? '2' : '8'} electron) ⇒ <b>kết thúc chu kì ${o.ck}</b>. Nguyên tố tiếp theo mở lớp mới ⇒ sang chu kì mới.`;
      if (n === 21) h += '<br>🔔 Sau 4s là <b>3d</b>: bắt đầu dãy nguyên tố <b>d</b> (nhóm B) chen vào giữa chu kì 4.';
      if (n === 24 || n === 29) h += '<br>⚠ Ngoại lệ: một electron 4s chuyển vào 3d để phân lớp 3d bán bão hoà hoặc bão hoà (bền hơn).';
      a.bao(h);
    }
    const di = d => { n = Math.max(0, Math.min(36, n + d)); ve(); };
    a.lap(dt => { if (!chay) return; t0 += dt; if (t0 > 1.1) { t0 = 0; if (n >= 36) { chay = false; nc.innerHTML = '▶ Tự chạy'; } else di(1); } });
    const h = a.hang(a.nhom('Điều khiển'));
    a.nut('⏮ Bớt', () => di(-1), { vao: h, nho: true, phu: true }); a.nut('➕ Thêm nguyên tố tiếp theo', () => di(1), { vao: h, nho: true });
    const nc = a.nut('▶ Tự chạy', () => { chay = !chay; nc.innerHTML = chay ? '⏸ Dừng' : '▶ Tự chạy'; if (chay && n >= 36) n = 0; }, { vao: h, nho: true, phu: true });
    a.nut('↺ Xoá bảng', () => { n = 0; chay = false; nc.innerHTML = '▶ Tự chạy'; ve(); }, { vao: h, nho: true, phu: true });
    ve();
    a.ket(`<p>• Mỗi chu kì bắt đầu khi electron vào <b>lớp mới (ns)</b> và kết thúc ở <b>khí hiếm</b> có lớp ngoài cùng bão hoà ⇒ số thứ tự chu kì = số lớp electron.</p>
      <p>• Electron cuối vào phân lớp s, p, d, f ⇒ nguyên tố s, p, d, f. Nguyên tố s, p thuộc nhóm A; nguyên tố d, f thuộc nhóm B.</p>
      <p>• Chu kì 4 dài hơn (18 nguyên tố) vì sau 4s có thêm 10 electron điền vào 3d.</p>`);
    a.hoi([
      { h: 'Chu kì 3 kết thúc ở nguyên tố', d: ['Cl', 'Ar', 'K', 'Ne'], dung: 1 },
      { h: 'Vì sao chu kì 4 có 18 nguyên tố?', d: ['Vì có 4 lớp electron', 'Vì sau 4s có thêm phân lớp 3d (10 electron) rồi đến 4p', 'Vì có phân lớp 4f', 'Vì có 18 nhóm'], dung: 1, g: '4s (2) + 3d (10) + 4p (6) = 18.' },
    ]);
  } },
] });
