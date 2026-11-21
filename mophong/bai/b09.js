/* Bài 9. Ôn tập chương 2 — 2 mô phỏng */
const LUOI9 = [['Li', 'Be', 'B', 'C', 'N', 'O', 'F'], ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl'], ['K', 'Ca', 'Ga', 'Ge', 'As', 'Se', 'Br'], ['Rb', 'Sr', 'In', 'Sn', 'Sb', 'Te', 'I']];
const NHOM9 = ['IA', 'IIA', 'IIIA', 'IVA', 'VA', 'VIA', 'VIIA'];
const dad9 = k => (theoKH(k) && theoKH(k).x) || DAD_THEM[k];
const vt9 = k => { const r = LUOI9.findIndex(h => h.includes(k)); return { r, c: LUOI9[r].indexOf(k) }; };

MP_NAP({ ma: '9', ds: [

/* ---------- 1. So sánh hai nguyên tố qua nguyên tố trung gian ---------- */
{ id: 'so-sanh', ic: '⚖️', ten: 'So sánh hai nguyên tố bất kì: dùng nguyên tố “cầu nối”',
  mo: 'Chọn hai nguyên tố nhóm A. Nếu không cùng chu kì, cùng nhóm, máy tìm nguyên tố trung gian để so sánh theo xu hướng.',
  chay(a) {
    a.huong('Chạm chọn ô <b>A</b> (lần 1) rồi ô <b>B</b> (lần 2). Máy so sánh bán kính, độ âm điện, tính kim loại – phi kim. Đường đi qua nguyên tố cầu nối được vẽ trên bảng.');
    const s = a.svg('0 0 400 200'), g = a.s('g', {}, s);
    let A = 'Na', B = 'S', lan = 0;
    const W = 50, H = 38, X0 = 30, Y0 = 22;
    const tam = k => { const p = vt9(k); return [X0 + p.c * W + W / 2, Y0 + p.r * H + H / 2]; };
    function ve() {
      g.innerHTML = '';
      NHOM9.forEach((t, c) => a.chu(g, X0 + c * W + W / 2, Y0 - 6, t, { 'font-size': 9.5, 'font-weight': 700, class: 'mo' }));
      LUOI9.forEach((hang, r) => { a.chu(g, X0 - 12, Y0 + r * H + H / 2 + 4, String(r + 2), { 'font-size': 10, 'font-weight': 800, class: 'mo' });
        hang.forEach((k, c) => { const o = a.s('g', { style: 'cursor:pointer' }, g), x = X0 + c * W, y = Y0 + r * H, la = k === A ? 'A' : k === B ? 'B' : k === cauNoi() ? 'C' : '';
          a.s('rect', { x: x + 1, y: y + 1, width: W - 2, height: H - 2, rx: 6, fill: la === 'A' ? '#bfdbfe' : la === 'B' ? '#fecaca' : la === 'C' ? '#fef3c7' : 'var(--card)', stroke: la ? '#334155' : 'var(--line)', 'stroke-width': la ? 2 : 1 }, o);
          a.chu(o, x + W / 2, y + 25, k, { 'font-size': 14, 'font-weight': 800, style: la ? 'fill:#0f172a' : '' }); if (la) a.chu(o, x + W - 7, y + 12, la, { 'font-size': 9, 'font-weight': 800, style: 'fill:#dc2626' });
          o.addEventListener('click', () => { if (lan === 0) { A = k; lan = 1; } else { if (k !== A) B = k; lan = 0; } ve(); moTa(); }); }); });
      const C = cauNoi(), duong = C ? [A, C, B] : [A, B];
      let d = ''; duong.forEach((k, i) => { const [x, y] = tam(k); d += (i ? ' L' : 'M') + x + ' ' + y; });
      a.s('path', { d, fill: 'none', stroke: '#dc2626', 'stroke-width': 2.5, 'stroke-dasharray': '6 4', opacity: .8 }, g);
    }
    function cauNoi() { const p = vt9(A), q = vt9(B); if (p.r === q.r || p.c === q.c) return null; return LUOI9[p.r][q.c]; }
    function soXH(x, y, tc) {   // so sánh x với y theo xu hướng (cùng chu kì hoặc cùng nhóm); trả về '<' '>' (x so với y)
      const p = vt9(x), q = vt9(y);
      if (p.r === q.r) { const phai = p.c > q.c; return tc === 'r' ? (phai ? '<' : '>') : tc === 'x' ? (phai ? '>' : '<') : (phai ? '<' : '>'); }   // tc 'kl' tính kim loại
      const duoi = p.r > q.r; return tc === 'r' ? (duoi ? '>' : '<') : tc === 'x' ? (duoi ? '<' : '>') : (duoi ? '>' : '<');
    }
    function moTa() {
      if (lan === 1) { a.bao(`Đã chọn A = <b>${A}</b>. Chạm ô thứ hai để chọn B.`); return; }
      const C = cauNoi(), hang = [];
      const TEN = { r: 'Bán kính nguyên tử', x: 'Độ âm điện', kl: 'Tính kim loại' };
      ['r', 'x', 'kl'].forEach(tc => {
        let kl, cach;
        if (!C) { kl = soXH(A, B, tc); cach = vt9(A).r === vt9(B).r ? 'cùng chu kì' : 'cùng nhóm'; }
        else { const s1 = soXH(A, C, tc), s2 = soXH(C, B, tc); cach = `qua ${C}: ${A} ${s1} ${C} (cùng chu kì) và ${C} ${s2} ${B} (cùng nhóm)`; kl = s1 === s2 ? s1 : '?'; }
        const sl = tc === 'r' ? ` · số liệu: ${BAN_KINH[A]} và ${BAN_KINH[B]} pm` : tc === 'x' ? ` · số liệu: ${String(dad9(A).toFixed(2)).replace('.', ',')} và ${String(dad9(B).toFixed(2)).replace('.', ',')}` : '';
        let canh = '';
        if (kl !== '?' && tc !== 'kl') { const va = tc === 'r' ? BAN_KINH[A] : dad9(A), vb = tc === 'r' ? BAN_KINH[B] : dad9(B), that = va > vb ? '>' : va < vb ? '<' : '=';
          if (that !== kl) canh = ` <span style="color:var(--sai)">⚠ số liệu thực tế ngược xu hướng — đây là trường hợp ngoại lệ</span>`; }
        hang.push(`<b>${TEN[tc]}</b>: ${kl === '?' ? `<span style="color:var(--vang)">hai xu hướng ngược chiều ⇒ không kết luận được chỉ bằng xu hướng</span>` : `${A} <b>${kl}</b> ${B}`} <span class="ghi">(${cach}${sl})</span>${canh}`);
      });
      a.bao(hang.join('<br>'));
    }
    a.nut('↺ Chọn lại A', () => { lan = 0; A = 'Na'; B = 'S'; ve(); moTa(); }, { phu: true });
    ve(); moTa();
    a.ket(`<p>• Cùng chu kì hoặc cùng nhóm: so sánh trực tiếp theo xu hướng.</p>
      <p>• Khác chu kì, khác nhóm: chọn nguyên tố <b>C</b> cùng chu kì với A và cùng nhóm với B. Nếu A so với C và C so với B <b>cùng chiều</b> ⇒ kết luận được; nếu <b>ngược chiều</b> ⇒ phải dùng số liệu.</p>
      <p>• Ví dụ: Na và Cl → bán kính Na > Cl; K và S: K > Na (cùng nhóm) và Na > S (cùng chu kì) ⇒ bán kính K > S.</p>`);
    a.hoi([
      { h: 'So sánh bán kính nguyên tử của Ca và Cl:', d: ['Ca < Cl', 'Ca > Cl', 'bằng nhau', 'không so sánh được'], dung: 1, g: 'Qua Mg: Ca > Mg (cùng nhóm), Mg > Cl (cùng chu kì) ⇒ Ca > Cl.' },
      { h: 'Dãy sắp xếp theo độ âm điện tăng dần là', d: ['Ca, Mg, P, S', 'S, P, Mg, Ca', 'Mg, Ca, S, P', 'P, S, Ca, Mg'], dung: 0 },
    ]);
  } },

/* ---------- 2. Vị trí ⇄ cấu hình electron ---------- */
{ id: 'vi-tri-cau-hinh', ic: '🔁', ten: 'Hai chiều: vị trí trong bảng ⇄ cấu hình electron',
  mo: 'Kéo số lớp electron và số electron lớp ngoài cùng để tìm ô nguyên tố — hoặc chạm ô để đọc ngược ra cấu hình.',
  chay(a) {
    a.huong('<b>Chiều 1</b>: kéo hai thanh (số lớp electron, số electron lớp ngoài cùng) — ô nguyên tố tương ứng sáng lên. <b>Chiều 2</b>: chạm vào một ô bất kì để thanh tự nhảy theo.');
    const s = a.svg('0 0 400 250'), g = a.s('g', {}, s);
    let lop = 3, ng = 5;
    const W = 44, H = 38, X0 = 26, Y0 = 22;
    const zTu = (l, e) => { for (let z = 1; z <= 20; z++) { const L = soLop(z); if (L.length === l && L[L.length - 1] === e) return z; } return null; };
    function ve() {
      g.innerHTML = '';
      ['IA', 'IIA', 'IIIA', 'IVA', 'VA', 'VIA', 'VIIA', 'VIIIA'].forEach((t, c) => a.chu(g, X0 + c * W + W / 2, Y0 - 6, t, { 'font-size': 9.5, 'font-weight': 700, class: 'mo' }));
      const zc = zTu(lop, ng);
      for (let z = 1; z <= 20; z++) { const v = viTri(z), c = z === 2 ? 8 : v.so, x = X0 + (c - 1) * W, y = Y0 + (v.ck - 1) * H, sang = z === zc;
        const o = a.s('g', { style: 'cursor:pointer' }, g);
        a.s('rect', { x: x + 1, y: y + 1, width: W - 2, height: H - 2, rx: 5, fill: sang ? '#fde047' : 'var(--card)', stroke: sang ? '#ca8a04' : 'var(--line)', 'stroke-width': sang ? 2.5 : 1 }, o);
        a.chu(o, x + W / 2, y + 25, NT[z].k, { 'font-size': 14, 'font-weight': 800, style: sang ? 'fill:#0f172a' : '' });
        o.addEventListener('click', () => { const L = soLop(z); tl.dat(L.length, true); te.dat(L[L.length - 1], true); lop = L.length; ng = L[L.length - 1]; ve(); }); }
      // mô hình
      if (zc) { veNguyenTuLop(a, g, 200, 205, zc, { r0: 9, buoc: 9, re: 2.6, toNgoai: true, co: 8 }); }
      a.bao(zc ? `${lop} lớp electron ⇒ <b>chu kì ${lop}</b>; ${ng} electron lớp ngoài cùng ⇒ <b>nhóm ${viTri(zc).nhom}</b> ⇒ <b>${NT[zc].k}</b> (Z = ${zc}): ${chuCauHinh(zc)}`
        : `Không có nguyên tố nào (Z ≤ 20) có ${lop} lớp electron và ${ng} electron lớp ngoài cùng. ${lop === 1 && ng > 2 ? 'Lớp thứ nhất chứa tối đa 2 electron.' : lop === 4 && ng > 2 ? 'Với Z ≤ 20, chu kì 4 mới có K và Ca.' : ''}`);
    }
    const tl = a.thanh({ td: 'Số lớp electron', min: 1, max: 4, gt: 3, fn: v => { lop = v; ve(); } });
    const te = a.thanh({ td: 'Số electron lớp ngoài cùng', min: 1, max: 8, gt: 5, fn: v => { ng = v; ve(); } });
    ve();
    a.ket(`<p>• Số thứ tự chu kì = <b>số lớp electron</b>.</p><p>• Với nguyên tố nhóm A: số thứ tự nhóm = <b>số electron lớp ngoài cùng</b> (= số electron hoá trị).</p>
      <p>• Từ vị trí suy ra cấu hình và ngược lại — đây là kĩ năng nền của cả chương 2.</p>`);
    a.hoi([
      { h: 'Nguyên tử có 3 lớp electron, lớp ngoài cùng có 2 electron. Vị trí là', d: ['chu kì 2, nhóm IIIA', 'chu kì 3, nhóm IIA', 'chu kì 2, nhóm IIA', 'chu kì 3, nhóm IIIA'], dung: 1, g: 'Đó là Mg (Z = 12).' },
      { h: 'Nguyên tố ở chu kì 2, nhóm VA có cấu hình', d: ['1s²2s²2p³', '1s²2s²2p⁵', '1s²2s²2p⁶3s²3p³', '1s²2s³'], dung: 0 },
    ]);
  } },
] });
