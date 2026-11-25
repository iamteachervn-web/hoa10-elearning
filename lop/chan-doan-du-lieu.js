/* =========================================================
   CÂU CHẨN ĐOÁN HAI BẬC (trước / sau tiết) — MÁY SINH từ Thi-GVDG-Hoa-10/cau-2-bac/dung.py, ĐỪNG sửa tay.
   Bậc 1: chọn đáp án (mỗi phương án sai gắn 1 mã quan niệm sai trong QNS) · Bậc 2: «chắc chắn / đoán».
   ========================================================= */
const QNS = {
 "O1": "Nguyên tử liên kết vì «cần đủ 8 electron mới tồn tại được» — không thấy lí do là hệ giảm năng lượng, bền hơn",
 "O2": "Quy tắc octet đúng cho mọi nguyên tử, mọi phân tử (không có ngoại lệ)",
 "O3": "Nguyên tử H cũng đạt 8 electron khi liên kết (quên H đạt 2 electron như He)",
 "O4": "Nhầm số electron hoá trị với số electron cần thêm để đạt octet",
 "O5": "Không tính cặp electron dùng chung cho cả hai nguyên tử khi đếm electron quanh mỗi nguyên tử",
 "O6": "Đảo chiều: phi kim nhường electron, kim loại nhận electron",
 "O7": "Ion đạt cấu hình của khí hiếm cùng chu kì (không phải khí hiếm gần nhất)",
 "O8": "Nghĩ nguyên tử trung hoà vốn mang điện nên hút nhau",
 "O9": "Mọi liên kết đều do nhường – nhận electron tạo ion, kể cả giữa hai phi kim",
 "O10": "Tạo thành liên kết thì hệ phải thu thêm năng lượng (thực ra năng lượng giảm)",
 "I1": "Nhầm dấu điện tích: nhường electron thì thành ion âm",
 "I2": "Ion giữ nguyên cấu hình electron của nguyên tử ban đầu",
 "I3": "Liên kết ion LÀ sự chuyển electron (không phải lực hút tĩnh điện giữa các ion)",
 "I4": "Ion cùng dấu cũng hút nhau tạo liên kết ion",
 "I5": "Một nguyên tử nhường chỉ kết hợp với đúng một nguyên tử nhận (bỏ qua cân bằng điện tích)",
 "I6": "Liên kết ion là cặp electron dùng chung (nhầm với liên kết cộng hoá trị)",
 "I7": "Hợp chất ion gồm các «phân tử» riêng rẽ, mỗi ion chỉ liên kết với một ion trái dấu (không thấy mạng tinh thể)",
 "I8": "Hợp chất ion dẫn điện cả ở thể rắn (vì «có ion» là dẫn điện)",
 "I9": "Hợp chất ion mềm, dễ nóng chảy hoặc ở thể lỏng, khí",
 "I10": "Ion chỉ hút đúng ion đã trao / nhận electron với nó",
 "I11": "Hợp chất ion ở thể rắn không chứa ion, chỉ khi tan hoặc nóng chảy mới tạo ion",
 "C1": "Liên kết cộng hoá trị chỉ có giữa hai nguyên tử của cùng một nguyên tố",
 "C2": "Nhầm số cặp electron dùng chung với số electron hoá trị / tổng số electron góp",
 "C3": "Hiểu sai liên kết cho – nhận (đảo bên cho, hoặc coi nó yếu, khác hẳn liên kết cộng hoá trị thường)",
 "C4": "Cứ kim loại với phi kim là liên kết ion (không xét hiệu độ âm điện)",
 "C6": "Nhầm độ phân cực của LIÊN KẾT với độ phân cực của PHÂN TỬ",
 "C7": "Liên kết đôi / ba toàn là liên kết π (hoặc toàn σ) — không thấy luôn có đúng 1 liên kết σ",
 "C8": "Liên kết π tạo thành do xen phủ trục",
 "C9": "Năng lượng liên kết càng nhỏ thì liên kết càng bền",
 "C10": "Áp dụng sai mốc hiệu độ âm điện (dùng tổng, hoặc đặt sai ngưỡng 0,4 / 1,7)",
 "C11": "Mọi liên kết cộng hoá trị giữa hai phi kim đều không phân cực",
 "C12": "Phá vỡ liên kết thì toả năng lượng",
 "C13": "Cứ hai nguyên tố khác nhau là liên kết phân cực (không xét hiệu độ âm điện)",
 "H1": "Liên kết hydrogen là liên kết cộng hoá trị O–H (trong phân tử) hoặc liên kết giữa hai nguyên tử H",
 "H2": "Phân tử nào có H cũng tạo liên kết hydrogen (kể cả H liên kết với C, S…)",
 "H3": "Liên kết hydrogen mạnh bằng hoặc mạnh hơn liên kết cộng hoá trị",
 "H4": "Khi chất sôi / nóng chảy / tan, liên kết cộng hoá trị TRONG phân tử bị phá vỡ",
 "H5": "Nhiệt độ sôi, nóng chảy cao hơn chỉ do khối lượng phân tử lớn hơn",
 "V1": "Phân tử không phân cực, nguyên tử khí hiếm không có tương tác nào với nhau",
 "V2": "Tương tác van der Waals là liên kết bên trong phân tử (hoặc nhầm với liên kết cộng hoá trị)",
 "V3": "Phân tử càng nhiều electron (càng lớn) thì tương tác van der Waals càng yếu",
 "V4": "Phân tử mạch nhánh có tương tác van der Waals mạnh hơn mạch thẳng",
 "A1": "Nguyên tử đặc khít — không thấy nguyên tử rỗng, hạt nhân rất nhỏ so với nguyên tử",
 "A2": "Nhầm điện tích các hạt (neutron mang điện, proton không mang điện, electron nằm trong hạt nhân)",
 "A3": "Khối lượng nguyên tử không tập trung ở hạt nhân (nghĩ vỏ nặng, hoặc lẫn kích thước với khối lượng)",
 "A4": "Nhầm số khối: A = Z, A = số neutron, hoặc cộng cả electron vào số khối",
 "A5": "Nghĩ số electron khác số proton trong nguyên tử (nhầm điều kiện trung hoà về điện)",
 "A6": "Nguyên tố hoá học được xác định bởi số khối hoặc số neutron (không phải số proton Z)",
 "A7": "Hiểu sai đồng vị (khác số proton, khác số electron, hoặc khác tính chất hoá học)",
 "A8": "Nguyên tử khối trung bình = trung bình cộng các số khối (bỏ qua % số nguyên tử)",
 "A9": "Nguyên tử khối là khối lượng tính bằng gam (không phải khối lượng tương đối theo amu)",
 "A10": "Electron chuyển động theo quỹ đạo xác định (mô hình hành tinh); orbital là đường đi của electron",
 "A11": "Nhầm hình dạng orbital s (hình cầu) và orbital p (hình số 8 nổi)",
 "A12": "Sai nguyên lí Pauli: một orbital chứa quá 2 electron, hoặc 2 electron cùng chiều",
 "A13": "Electron gần hạt nhân có năng lượng cao hơn / bị hút yếu hơn (đảo quan hệ khoảng cách – năng lượng)",
 "A14": "Sai quan hệ lớp – phân lớp – số orbital – số electron tối đa (n phân lớp, n² AO, 2n² electron)",
 "A15": "Điền electron không theo thứ tự năng lượng 1s 2s 2p 3s 3p 4s (VD điền 3d trước 4s, bỏ phân lớp)",
 "A16": "Sai quy tắc Hund: ghép đôi electron trước khi điền đơn, hoặc electron độc thân ngược chiều",
 "A17": "Bài toán tổng số hạt: quên electron, chỉ coi proton là hạt mang điện",
 "A18": "Nhầm số electron lớp ngoài cùng với số electron của phân lớp cuối cùng",
 "A19": "Sai liên hệ số electron lớp ngoài cùng ↔ kim loại / phi kim / khí hiếm (VD cứ nguyên tố p là phi kim)",
 "T1": "Bảng tuần hoàn xếp theo nguyên tử khối (hoặc số neutron) tăng dần",
 "T2": "Nhầm chu kì (số lớp electron) với nhóm (số electron hoá trị)",
 "T3": "Xác định sai số thứ tự nhóm A (lấy 8 − số electron lớp ngoài cùng, hoặc chỉ đếm electron phân lớp cuối)",
 "T4": "Phân loại sai nguyên tố s, p, d hoặc nhầm nhóm A với nhóm B",
 "T5": "Nghĩ nguyên tố p đều là phi kim",
 "T6": "Sai xu hướng bán kính trong chu kì (nghĩ nhiều electron hơn thì lớn hơn, hoặc cùng số lớp thì bằng nhau)",
 "T7": "Trong nhóm A, nghĩ bán kính giảm vì điện tích hạt nhân tăng (bỏ qua số lớp electron tăng)",
 "T8": "Nhầm độ âm điện với khả năng nhường electron (độ âm điện lớn = tính kim loại mạnh)",
 "T9": "Đảo chiều xu hướng độ âm điện trong chu kì hoặc trong nhóm",
 "T10": "Nhầm tính kim loại (khả năng nhường electron) với tính chất vật lí của kim loại (dẫn điện, ánh kim)",
 "T11": "Đảo chiều xu hướng tính kim loại / tính phi kim trong chu kì hoặc trong nhóm",
 "T12": "Nghĩ các nguyên tố cùng nhóm (hoặc cùng chu kì) có tính chất như nhau, không biến đổi",
 "T13": "Sai hoá trị cao nhất với oxygen (lấy 8 − số thứ tự nhóm, hoặc nhầm với hợp chất với hydrogen)",
 "T14": "Nhầm basic oxide / base với acidic oxide / acid (oxide kim loại kiềm cho acid…)",
 "T15": "Đảo chiều xu hướng tính acid – base của oxide, hydroxide trong chu kì",
 "T16": "Cứ có nhóm OH là base (càng nhiều nhóm OH càng mạnh)",
 "T17": "So sánh tính acid hoặc xác định nhóm theo số nguyên tử H, O trong công thức",
 "T18": "Nghĩ mọi đại lượng đều biến đổi tuần hoàn (nhầm đại lượng nào biến đổi tuần hoàn)",
 "K1": "Coi số oxi hoá là hoá trị (không dấu, luôn dương) hoặc viết sai dấu",
 "K2": "Nghĩ nguyên tử trong đơn chất có số oxi hoá khác 0",
 "K3": "Tính số oxi hoá sai: quên nhân chỉ số, quên điện tích ion, không dùng «tổng bằng 0»",
 "K4": "Nghĩ số oxi hoá là điện tích thật của nguyên tử (kể cả trong hợp chất cộng hoá trị)",
 "K5": "Đảo khái niệm: chất khử nhận electron, chất oxi hoá nhường electron",
 "K6": "Nghĩ chất oxi hoá là chất chứa oxygen / phản ứng có oxygen là phản ứng oxi hoá – khử",
 "K7": "Nhầm chất khử với chất bị khử; nhầm quá trình oxi hoá với quá trình khử",
 "K8": "Nhầm hướng: số oxi hoá tăng là nhận electron (chất có số oxi hoá tăng là chất oxi hoá)",
 "K9": "Cứ có khí, kết tủa, toả nhiệt là phản ứng oxi hoá – khử (không xét số oxi hoá)",
 "K10": "Chọn sản phẩm làm chất oxi hoá / chất khử",
 "K11": "Lập phương trình sai: không cân bằng tổng electron nhường = nhận, quên số nguyên tử trong phân tử (O2, Cl2, Fe2O3…)",
 "K12": "Số mol electron = số mol chất (quên nhân số electron mỗi nguyên tử nhường, nhận)",
 "K13": "Bỏ sót phản ứng oxi hoá – khử giữa các phi kim, phản ứng phân huỷ (nghĩ phải có kim loại nhường electron)",
 "K14": "Coi mọi phân tử acid (HNO3, H2SO4) đều là chất oxi hoá, quên phần tạo muối",
 "E1": "Đảo khái niệm toả nhiệt – thu nhiệt, hoặc đảo dấu ΔrH (toả nhiệt mà ΔrH > 0)",
 "E2": "Phản ứng phải đun nóng / châm lửa mới xảy ra là phản ứng thu nhiệt (nhầm khơi mào với thu nhiệt)",
 "E3": "Nhầm hệ với môi trường: phản ứng toả nhiệt làm môi trường lạnh đi, thu nhiệt làm môi trường nóng lên",
 "E4": "Hình thành liên kết thì phải thu năng lượng",
 "E5": "Sai nhiệt tạo thành: đơn chất bền có ΔfH khác 0, hoặc đơn chất ở dạng nào (kim cương, O3…) cũng có ΔfH = 0",
 "E6": "Tính ΔrH theo nhiệt tạo thành bị đảo: lấy chất đầu trừ sản phẩm",
 "E7": "Quên nhân hệ số các chất khi tính ΔrH (theo nhiệt tạo thành hoặc năng lượng liên kết)",
 "E8": "Tính ΔrH theo năng lượng liên kết bị đảo: lấy Eb sản phẩm trừ Eb chất đầu",
 "E9": "Đếm sai số liên kết trong phân tử (CO2 chỉ 1 liên kết C=O, H2O chỉ 1 liên kết O–H, coi C=C bằng 2 liên kết C–C, quên C–H)",
 "E10": "Nghĩ ΔrH không đổi khi đảo chiều phản ứng, đổi hệ số hoặc đổi trạng thái chất (lỏng / hơi)",
 "E11": "Chất có mức năng lượng cao hơn thì bền hơn (đảo quan hệ năng lượng – độ bền)",
 "E12": "Nhầm điều kiện chuẩn với «0 °C, 1 atm» (đktc cũ, 22,4 L/mol)",
 "E13": "Nhiệt lượng toả ra / thu vào không tỉ lệ với lượng chất (dùng nguyên ΔrH cho lượng chất bất kì)",
 "E14": "So sánh nhiệt lượng theo giá trị đại số: −726 > −890 nên toả nhiều hơn (không xét giá trị tuyệt đối)",
 "E15": "Bỏ qua hoặc áp sai hiệu suất (nhân thay vì chia)",
 "R1": "Nhầm tốc độ phản ứng với thời gian phản ứng (phản ứng kéo dài hơn là nhanh hơn)",
 "R2": "Tính tốc độ trung bình sai: không chia cho hệ số, không chia cho thời gian, hoặc để tốc độ mang dấu âm",
 "R3": "Nghĩ tốc độ phản ứng không đổi hoặc tăng dần theo thời gian",
 "R4": "Nghĩ hằng số tốc độ k phụ thuộc nồng độ, thời gian hoặc áp suất",
 "R5": "Bỏ số mũ (hệ số) hoặc bỏ một nồng độ trong biểu thức v = k·C(A)ᵃ·C(B)ᵇ",
 "R6": "Nghĩ áp suất ảnh hưởng tốc độ của mọi phản ứng, kể cả không có chất khí tham gia",
 "R7": "Nhầm cơ chế: tăng nồng độ làm hạt chuyển động nhanh hơn, hoặc tăng nhiệt độ làm tăng nồng độ",
 "R8": "Áp dụng sai hệ số Van't Hoff: cộng (2γ, 3γ) thay vì luỹ thừa γⁿ, hoặc chỉ nhân γ một lần",
 "R9": "Hiểu sai chất xúc tác: bị tiêu hao / biến đổi về chất, cung cấp năng lượng cho phản ứng, hoặc làm tăng năng lượng hoạt hoá",
 "R10": "Nhầm diện tích bề mặt với khối lượng hay kích thước: chất rắn dạng khối to phản ứng nhanh hơn, hoặc như nhau",
 "R11": "Nhầm tốc độ với lượng sản phẩm: tăng tốc độ (xúc tác, nhiệt độ) thì thu được nhiều sản phẩm hơn",
 "R12": "Nghĩ mọi va chạm giữa các hạt đều gây ra phản ứng (không phân biệt va chạm hiệu quả)",
 "R13": "Nghĩ tăng nhiệt độ chỉ làm nhanh phản ứng thu nhiệt (phản ứng toả nhiệt sẽ chậm lại)",
 "R14": "Nhầm năng lượng hoạt hoá với biến thiên enthalpy (nhiệt toả ra / thu vào) của phản ứng",
 "G1": "Nghĩ halogen tồn tại ở dạng đơn chất trong tự nhiên (nước biển chứa Cl2, I2…)",
 "G2": "Nghĩ halogen có xu hướng nhường electron / có tính khử là chủ yếu",
 "G3": "Đảo chiều tính oxi hoá: tăng dần từ F2 đến I2 (I2 đẩy được Cl2, Br2 ra khỏi muối…)",
 "G4": "Sai số oxi hoá của halogen: F có số oxi hoá dương như Cl, hoặc Cl, Br, I luôn là −1",
 "G5": "Sai xu hướng hoặc nguyên nhân biến đổi nhiệt độ sôi, nhiệt độ nóng chảy của đơn chất halogen",
 "G7": "Không thấy Cl2 tự oxi hoá – tự khử (với H2O, dung dịch kiềm): coi Cl2 chỉ là chất oxi hoá hoặc chỉ là chất khử",
 "G8": "Đảo chiều tính acid của HX: HF mạnh nhất vì F có tính phi kim mạnh nhất",
 "G9": "Quên liên kết hydrogen giữa các phân tử HF: nghĩ HF có nhiệt độ sôi thấp nhất",
 "G10": "Nghĩ AgF cũng kết tủa (dùng AgNO3 nhận được cả ion F⁻)",
 "G11": "Đảo chiều tính khử của ion halide (Cl⁻ khử mạnh hơn Br⁻, I⁻)",
 "G12": "Nghĩ hydrochloric acid tác dụng với mọi kim loại, kể cả Cu, Ag",
 "G13": "Nhầm sản phẩm của iron: Fe + Cl2 tạo FeCl2, Fe + HCl tạo FeCl3",
 "G14": "Nghĩ nước Javel, nước chlorine tẩy màu – diệt khuẩn nhờ NaCl, HCl hoặc NaOH (không phải nhờ NaClO, HClO có tính oxi hoá mạnh)",
 "G15": "Giải thích tính acid / độ bền của HX theo độ phân cực, độ âm điện (không xét độ dài và độ bền liên kết H–X)",
 "G17": "Nhầm cách điều chế chlorine trong phòng thí nghiệm với trong công nghiệp",
 "X": "Nhiễu thường (không gắn quan niệm sai cụ thể)"
};
Object.assign(KHAO_SAT, {
 "cd-b1-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 1. Thành phần của nguyên tử (tiết 1)",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "1",
  "loai": "truoc",
  "tiet": "Tiết 3",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Trong thí nghiệm bắn phá lá vàng của Rutherford, hầu hết các hạt α đi thẳng qua lá vàng. Điều đó chứng tỏ",
    "chon": [
     "nguyên tử có cấu tạo rỗng, hạt nhân rất nhỏ so với nguyên tử",
     "nguyên tử là khối đặc, nhưng hạt α đủ mạnh để xuyên qua",
     "hạt nhân mang điện âm nên đẩy hạt α đi thẳng",
     "lá vàng bị thủng nhiều lỗ nhỏ trước khi làm thí nghiệm"
    ],
    "ma": [
     "DUNG",
     "A1",
     "A2",
     "X"
    ],
    "dung": 0,
    "giai": "Hầu hết hạt α xuyên thẳng, chỉ một số rất ít bị lệch hoặc bật lại → nguyên tử rỗng, ở tâm có hạt nhân mang điện dương, kích thước rất nhỏ so với nguyên tử (SGK tr.13).",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Trong hạt nhân nguyên tử (trừ ¹H) có những hạt nào?",
    "chon": [
     "Proton mang điện dương và neutron không mang điện",
     "Proton mang điện dương và neutron mang điện âm",
     "Proton mang điện dương và electron mang điện âm",
     "Proton không mang điện và neutron mang điện dương"
    ],
    "ma": [
     "DUNG",
     "A2",
     "A2",
     "A2"
    ],
    "dung": 0,
    "giai": "Hạt nhân chứa proton (điện tích +1) và neutron (không mang điện); electron mang điện âm ở vỏ nguyên tử (SGK tr.14, Bảng 1.1)."
   },
   {
    "muc": "H",
    "de": "Khối lượng của nguyên tử tập trung chủ yếu ở đâu?",
    "chon": [
     "Ở hạt nhân, vì khối lượng electron rất nhỏ so với proton và neutron",
     "Ở vỏ nguyên tử, vì vỏ chiếm gần hết thể tích nguyên tử",
     "Chia đều cho hạt nhân và vỏ, vì số proton bằng số electron",
     "Ở vỏ nguyên tử, vì electron chuyển động rất nhanh"
    ],
    "ma": [
     "DUNG",
     "A3",
     "A3",
     "A3"
    ],
    "dung": 0,
    "giai": "Electron chỉ nặng khoảng 0,00055 amu (≈ 1/1837 proton), còn proton, neutron mỗi hạt khoảng 1 amu → khối lượng nguyên tử tập trung hầu hết ở hạt nhân (SGK tr.14). Vỏ «to» nhưng «nhẹ».",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Đường kính nguyên tử khoảng 10⁻¹⁰ m, đường kính hạt nhân khoảng 10⁻¹⁴ m. Nếu phóng to để hạt nhân có đường kính 1 cm thì đường kính nguyên tử khoảng",
    "chon": [
     "100 m",
     "2 cm",
     "10 cm",
     "1 000 km"
    ],
    "ma": [
     "DUNG",
     "A1",
     "A1",
     "X"
    ],
    "dung": 0,
    "giai": "Nguyên tử lớn hơn hạt nhân 10⁻¹⁰ : 10⁻¹⁴ = 10⁴ = 10 000 lần → 1 cm × 10 000 = 10 000 cm = 100 m. Hạt nhân chỉ như hạt cát giữa sân vận động (SGK tr.14–15).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nguyên tử trung hoà về điện vì",
    "chon": [
     "số proton bằng số electron",
     "số proton bằng số neutron",
     "neutron trung hoà điện tích của proton",
     "electron không mang điện"
    ],
    "ma": [
     "DUNG",
     "A5",
     "A5",
     "A2"
    ],
    "dung": 0,
    "giai": "Proton (+1) và electron (−1) có điện tích bằng nhau, trái dấu; trong nguyên tử số proton bằng số electron nên nguyên tử trung hoà về điện (SGK tr.14)."
   }
  ]
 },
 "cd-b1-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 1. Thành phần của nguyên tử (tiết 2)",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "1",
  "loai": "truoc",
  "tiet": "Tiết 4",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Hạt nhân nguyên tử sodium có 11 proton và 12 neutron. Số khối của nguyên tử sodium là",
    "chon": [
     "23",
     "11",
     "12",
     "34"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A4",
     "A4"
    ],
    "dung": 0,
    "giai": "Số khối A = Z + N = 11 + 12 = 23 (SGK tr.15). Không cộng electron vào số khối."
   },
   {
    "muc": "H",
    "de": "Hạt nhân của một nguyên tử có điện tích +15 và số khối 31. Số proton, neutron, electron của nguyên tử đó lần lượt là",
    "chon": [
     "15, 16, 15",
     "15, 31, 15",
     "16, 15, 16",
     "15, 16, 0"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A4",
     "A5"
    ],
    "dung": 0,
    "giai": "Z = 15 → 15 proton, 15 electron; N = A − Z = 31 − 15 = 16 (SGK tr.15).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nguyên tử oxygen có 8 proton và 8 neutron. Số đơn vị điện tích hạt nhân của oxygen là",
    "chon": [
     "Z = 8",
     "Z = 16",
     "Z = 0, vì nguyên tử trung hoà về điện",
     "Z = 24"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A5",
     "A4"
    ],
    "dung": 0,
    "giai": "Số đơn vị điện tích hạt nhân Z = số proton = 8; neutron không mang điện nên không tính vào điện tích (SGK tr.15). Nguyên tử trung hoà, nhưng HẠT NHÂN vẫn mang điện dương."
   },
   {
    "muc": "V",
    "de": "Tổng số hạt proton, neutron, electron trong nguyên tử X là 40; số hạt mang điện nhiều hơn số hạt không mang điện là 12. X là",
    "chon": [
     "Al (Z = 13)",
     "Fe (Z = 26)",
     "Ca (Z = 20)",
     "Si (Z = 14)"
    ],
    "ma": [
     "DUNG",
     "A17",
     "A4",
     "X"
    ],
    "dung": 0,
    "giai": "Hạt mang điện gồm proton VÀ electron: 2Z + N = 40; 2Z − N = 12 → Z = 13, N = 14 → Al. Nếu quên electron (Z + N = 40; Z − N = 12) sẽ ra Z = 26, sai.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Phát biểu nào ĐÚNG về số khối?",
    "chon": [
     "Số khối bằng tổng số proton và số neutron trong hạt nhân",
     "Số khối bằng tổng số proton, neutron và electron",
     "Số khối bằng số proton trong hạt nhân",
     "Số khối là khối lượng của nguyên tử tính bằng gam"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A4",
     "A9"
    ],
    "dung": 0,
    "giai": "Số khối (số nucleon) A = Z + N (SGK tr.15). Đây là một số nguyên đếm hạt trong hạt nhân, không phải khối lượng tính bằng gam."
   }
  ]
 },
 "cd-b2-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 2. Nguyên tố hoá học (tiết 1)",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "2",
  "loai": "truoc",
  "tiet": "Tiết 5",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Hai nguyên tử thuộc cùng một nguyên tố hoá học khi chúng có cùng",
    "chon": [
     "số proton (số đơn vị điện tích hạt nhân)",
     "số khối",
     "số neutron",
     "nguyên tử khối"
    ],
    "ma": [
     "DUNG",
     "A6",
     "A6",
     "A6"
    ],
    "dung": 0,
    "giai": "Nguyên tố hoá học là tập hợp các nguyên tử có cùng số đơn vị điện tích hạt nhân (SGK tr.17); số neutron, số khối có thể khác nhau.",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Nguyên tử ²⁷₁₃Al có",
    "chon": [
     "13 proton, 14 neutron, 13 electron",
     "13 proton, 27 neutron, 13 electron",
     "14 proton, 13 neutron, 14 electron",
     "13 proton, 14 neutron, 27 electron"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A4",
     "A5"
    ],
    "dung": 0,
    "giai": "Trong kí hiệu nguyên tử, số ở dưới là Z = 13 (13 proton, 13 electron), số ở trên là A = 27 → N = 27 − 13 = 14 (SGK tr.18)."
   },
   {
    "muc": "H",
    "de": "Cho các nguyên tử: L (Z = 8, A = 16), M (Z = 8, A = 17), Q (Z = 9, A = 17), R (Z = 7, A = 16). Hai nguyên tử nào thuộc cùng một nguyên tố hoá học?",
    "chon": [
     "L và M",
     "M và Q",
     "L và R",
     "Q và R"
    ],
    "ma": [
     "DUNG",
     "A6",
     "A6",
     "X"
    ],
    "dung": 0,
    "giai": "Cùng nguyên tố ⇔ cùng Z. L và M đều có Z = 8 (oxygen). M và Q, L và R chỉ trùng số khối, khác Z → khác nguyên tố."
   },
   {
    "muc": "H",
    "de": "Các nguyên tử của cùng một nguyên tố hoá học có tính chất hoá học giống nhau vì chúng có cùng",
    "chon": [
     "số electron (bằng số proton), mà electron quyết định tính chất hoá học",
     "số neutron trong hạt nhân",
     "khối lượng nguyên tử",
     "số khối"
    ],
    "ma": [
     "DUNG",
     "A6",
     "A6",
     "A6"
    ],
    "dung": 0,
    "giai": "Trong nguyên tử, số đơn vị điện tích hạt nhân bằng số electron; các electron quyết định tính chất hoá học, nên nguyên tử cùng nguyên tố có tính chất hoá học giống nhau (SGK tr.17).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nguyên tử X có 17 electron và 18 neutron. Kí hiệu nguyên tử của X là",
    "chon": [
     "³⁵₁₇Cl",
     "¹⁸₁₇Cl",
     "³⁵₁₈Ar",
     "¹⁷₃₅Cl"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A6",
     "X"
    ],
    "dung": 0,
    "giai": "Z = số electron = 17 (chlorine); A = Z + N = 17 + 18 = 35. Số khối viết phía trên, số hiệu nguyên tử phía dưới, bên trái kí hiệu (SGK tr.18)."
   }
  ]
 },
 "cd-b2-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 2. Nguyên tố hoá học (tiết 2)",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "2",
  "loai": "truoc",
  "tiet": "Tiết 6",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Đồng vị là những nguyên tử có",
    "chon": [
     "cùng số proton nhưng khác số neutron",
     "cùng số neutron nhưng khác số proton",
     "cùng số khối nhưng khác số proton",
     "cùng số proton và cùng số neutron"
    ],
    "ma": [
     "DUNG",
     "A7",
     "A7",
     "X"
    ],
    "dung": 0,
    "giai": "Đồng vị: cùng số đơn vị điện tích hạt nhân (cùng số proton) nhưng khác số neutron (SGK tr.18–19)."
   },
   {
    "muc": "H",
    "de": "Về hai đồng vị ³⁵₁₇Cl và ³⁷₁₇Cl, phát biểu nào ĐÚNG?",
    "chon": [
     "Có tính chất hoá học giống nhau, khác nhau về một số tính chất vật lí",
     "Là hai nguyên tố khác nhau vì số khối khác nhau",
     "Có số electron khác nhau",
     "Có tính chất hoá học khác nhau vì khối lượng khác nhau"
    ],
    "ma": [
     "DUNG",
     "A6",
     "A7",
     "A7"
    ],
    "dung": 0,
    "giai": "Hai đồng vị cùng 17 proton, 17 electron (cùng nguyên tố, tính chất hoá học giống nhau), chỉ khác số neutron → khác khối lượng hạt nhân và một số tính chất vật lí (SGK tr.19).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nguyên tử khối của một nguyên tử cho biết",
    "chon": [
     "khối lượng nguyên tử đó nặng gấp bao nhiêu lần đơn vị khối lượng nguyên tử (amu)",
     "khối lượng của một nguyên tử tính bằng gam",
     "tổng số hạt proton, neutron và electron",
     "số proton trong hạt nhân"
    ],
    "ma": [
     "DUNG",
     "A9",
     "A4",
     "A6"
    ],
    "dung": 0,
    "giai": "Nguyên tử khối là khối lượng tương đối của nguyên tử, cho biết nguyên tử nặng gấp bao nhiêu lần 1 amu; có thể coi gần đúng bằng số khối (SGK tr.19)."
   },
   {
    "muc": "V",
    "de": "Boron có hai đồng vị bền: ¹⁰B chiếm 20% và ¹¹B chiếm 80% số nguyên tử. Nguyên tử khối trung bình của boron là",
    "chon": [
     "10,8",
     "10,5",
     "10,2",
     "21,0"
    ],
    "ma": [
     "DUNG",
     "A8",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Ā = (10·20 + 11·80) : 100 = 10,8 (công thức SGK tr.20). Không lấy trung bình cộng (10 + 11) : 2 vì hai đồng vị có tỉ lệ khác nhau.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Vì sao nguyên tử khối của chlorine trong bảng tuần hoàn không phải là một số nguyên?",
    "chon": [
     "Vì chlorine trong tự nhiên là hỗn hợp các đồng vị, giá trị đó là nguyên tử khối trung bình",
     "Vì một số nguyên tử chlorine có «nửa neutron»",
     "Vì số proton của chlorine không phải là số nguyên",
     "Vì nguyên tử khối là khối lượng tính bằng gam nên có phần thập phân"
    ],
    "ma": [
     "DUNG",
     "X",
     "A6",
     "A9"
    ],
    "dung": 0,
    "giai": "Nguyên tử khối của một nguyên tố là nguyên tử khối trung bình của hỗn hợp các đồng vị (SGK tr.20); mỗi đồng vị có số khối nguyên, nhưng trung bình theo tỉ lệ thì ra số thập phân."
   }
  ]
 },
 "cd-b2-t3": {
  "ten": "Chẩn đoán trước tiết — Bài 2. Nguyên tố hoá học (tiết 3: luyện tập)",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "2",
  "loai": "truoc",
  "tiet": "Tiết 7",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "V",
    "de": "Lithium có hai đồng vị ⁶Li và ⁷Li; nguyên tử khối trung bình của lithium là 6,94. Phần trăm số nguyên tử của đồng vị ⁶Li là",
    "chon": [
     "6%",
     "94%",
     "50%",
     "60%"
    ],
    "ma": [
     "DUNG",
     "X",
     "A8",
     "X"
    ],
    "dung": 0,
    "giai": "Gọi % ⁶Li là x: 6x + 7(100 − x) = 694 → 700 − x = 694 → x = 6%. Nguyên tử khối 6,94 gần 7 → đồng vị ⁷Li chiếm phần lớn (94%).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Hai nguyên tử nào có cùng số neutron?",
    "chon": [
     "²³₁₁Na và ²⁴₁₂Mg",
     "¹⁶₈O và ¹⁸₈O",
     "¹⁴₆C và ¹⁴₇N",
     "⁴⁰₁₈Ar và ⁴⁰₂₀Ca"
    ],
    "ma": [
     "DUNG",
     "A7",
     "A4",
     "A4"
    ],
    "dung": 0,
    "giai": "N = A − Z: Na có 23 − 11 = 12, Mg có 24 − 12 = 12. ¹⁶O và ¹⁸O là đồng vị (cùng proton, khác neutron); cùng số khối chưa chắc cùng số neutron."
   },
   {
    "muc": "H",
    "de": "Hydrogen có ba đồng vị ¹₁H, ²₁H, ³₁H. Phát biểu nào ĐÚNG?",
    "chon": [
     "Cả ba đều có 1 proton, 1 electron; số neutron lần lượt là 0, 1, 2",
     "Số proton lần lượt là 1, 2, 3",
     "Đó là ba nguyên tố hoá học khác nhau",
     "Nguyên tử ³₁H có 3 electron"
    ],
    "ma": [
     "DUNG",
     "A7",
     "A6",
     "A5"
    ],
    "dung": 0,
    "giai": "Đồng vị cùng Z = 1 → cùng 1 proton, 1 electron; khác số neutron: 0 (protium), 1 (deuterium), 2 (tritium) — SGK tr.19, Hình 2.2.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Một nguyên tố có hai đồng vị ⁷⁹X (chiếm 50,7%) và ⁸¹X. Nguyên tử khối trung bình của nguyên tố đó là",
    "chon": [
     "79,99",
     "80,00",
     "80,01",
     "160,00"
    ],
    "ma": [
     "DUNG",
     "A8",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Ā = (79·50,7 + 81·49,3) : 100 = 79,986 ≈ 79,99. Đồng vị ⁷⁹X nhiều hơn một chút nên Ā hơi nghiêng về 79, không đúng bằng trung bình cộng 80."
   },
   {
    "muc": "V",
    "de": "Nguyên tử X có tổng số hạt proton, neutron, electron là 52, trong đó số hạt không mang điện là 18. Kí hiệu nguyên tử của X là",
    "chon": [
     "³⁵₁₇Cl",
     "⁵²₁₇Cl",
     "⁵²₃₄Se",
     "¹⁷₃₅Cl"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A17",
     "X"
    ],
    "dung": 0,
    "giai": "N = 18; p + e = 2Z = 52 − 18 = 34 → Z = 17 (Cl); A = Z + N = 17 + 18 = 35. Tổng số hạt (52) không phải số khối.",
    "viSao": true
   }
  ]
 },
 "cd-b3-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 3. Cấu trúc lớp vỏ electron (tiết 1)",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "3",
  "loai": "truoc",
  "tiet": "Tiết 8",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Theo mô hình hiện đại, electron chuyển động trong nguyên tử như thế nào?",
    "chon": [
     "Chuyển động rất nhanh, không theo quỹ đạo xác định; chỉ xác định được vùng có xác suất gặp electron lớn nhất",
     "Quay quanh hạt nhân theo những quỹ đạo tròn xác định, như hành tinh quay quanh Mặt Trời",
     "Đứng yên ở những vị trí cố định quanh hạt nhân",
     "Chuyển động bên trong hạt nhân"
    ],
    "ma": [
     "DUNG",
     "A10",
     "A10",
     "A2"
    ],
    "dung": 0,
    "giai": "Mô hình hành tinh (quỹ đạo tròn, bầu dục) không giải thích được nhiều tính chất; theo mô hình hiện đại electron chuyển động rất nhanh, không theo quỹ đạo xác định (SGK tr.21).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Orbital nguyên tử (AO) là",
    "chon": [
     "vùng không gian quanh hạt nhân mà xác suất tìm thấy electron lớn nhất (khoảng 90%)",
     "quỹ đạo tròn mà electron chạy trên đó",
     "đường bầu dục mà electron vạch ra quanh hạt nhân",
     "vùng không gian bên trong hạt nhân"
    ],
    "ma": [
     "DUNG",
     "A10",
     "A10",
     "A2"
    ],
    "dung": 0,
    "giai": "AO là vùng không gian quanh hạt nhân có xác suất có mặt electron lớn nhất, hình dung như đám mây electron — không phải «đường đi» của electron (SGK tr.21)."
   },
   {
    "muc": "B",
    "de": "Orbital p có dạng",
    "chon": [
     "hình số 8 nổi",
     "hình cầu",
     "đường tròn phẳng",
     "đường xoắn ốc"
    ],
    "ma": [
     "DUNG",
     "A11",
     "A10",
     "A10"
    ],
    "dung": 0,
    "giai": "Orbital s có dạng hình cầu, orbital p có dạng hình số 8 nổi (SGK tr.22, Hình 3.3)."
   },
   {
    "muc": "H",
    "de": "Một orbital nguyên tử chứa tối đa",
    "chon": [
     "2 electron có chiều tự quay ngược nhau",
     "2 electron có chiều tự quay giống nhau",
     "8 electron",
     "1 electron"
    ],
    "ma": [
     "DUNG",
     "A12",
     "A12",
     "X"
    ],
    "dung": 0,
    "giai": "Nguyên lí loại trừ Pauli: trong 1 orbital chỉ chứa tối đa 2 electron có chiều tự quay ngược nhau (SGK tr.22)."
   },
   {
    "muc": "H",
    "de": "So với electron ở lớp L (n = 2), electron ở lớp K (n = 1)",
    "chon": [
     "bị hạt nhân hút mạnh hơn nên có năng lượng thấp hơn",
     "có năng lượng cao hơn vì ở gần hạt nhân hơn",
     "bị hạt nhân hút yếu hơn vì lớp K nhỏ hơn",
     "có năng lượng bằng nhau vì mọi electron đều giống nhau"
    ],
    "ma": [
     "DUNG",
     "A13",
     "A13",
     "X"
    ],
    "dung": 0,
    "giai": "Electron ở lớp gần hạt nhân bị hút mạnh hơn nên có năng lượng thấp hơn electron ở lớp xa hạt nhân (SGK tr.22).",
    "viSao": true
   }
  ]
 },
 "cd-b3-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 3. Cấu trúc lớp vỏ electron (tiết 2)",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "3",
  "loai": "truoc",
  "tiet": "Tiết 9",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Lớp L (n = 2) gồm các phân lớp",
    "chon": [
     "2s và 2p",
     "chỉ có 2s",
     "2s, 2p và 2d",
     "2p và 2d"
    ],
    "ma": [
     "DUNG",
     "A14",
     "A14",
     "A14"
    ],
    "dung": 0,
    "giai": "Số phân lớp trong mỗi lớp bằng số thứ tự lớp (n ≤ 4): lớp L có 2 phân lớp 2s, 2p (SGK tr.23)."
   },
   {
    "muc": "H",
    "de": "Lớp M (n = 3) chứa tối đa bao nhiêu electron?",
    "chon": [
     "18",
     "8",
     "9",
     "6"
    ],
    "ma": [
     "DUNG",
     "A14",
     "A14",
     "X"
    ],
    "dung": 0,
    "giai": "Lớp M có 3s (1 AO), 3p (3 AO), 3d (5 AO) = 9 AO = n²; mỗi AO tối đa 2 electron → 18 electron (SGK tr.23). Số 8 chỉ là số electron lớp NGOÀI CÙNG bền như khí hiếm.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Phân lớp p chứa tối đa bao nhiêu electron?",
    "chon": [
     "6",
     "3",
     "8",
     "2"
    ],
    "ma": [
     "DUNG",
     "A12",
     "A14",
     "A11"
    ],
    "dung": 0,
    "giai": "Phân lớp p có 3 AO (px, py, pz), mỗi AO tối đa 2 electron → 6 electron (SGK tr.23)."
   },
   {
    "muc": "H",
    "de": "Cấu hình electron của nguyên tử potassium (Z = 19) là",
    "chon": [
     "1s²2s²2p⁶3s²3p⁶4s¹",
     "1s²2s²2p⁶3s²3p⁶3d¹",
     "1s²2s²2p⁶3s²3p⁷",
     "1s²2s²2p⁶3s²3p⁵4s²"
    ],
    "ma": [
     "DUNG",
     "A15",
     "A14",
     "X"
    ],
    "dung": 0,
    "giai": "Electron điền theo thứ tự năng lượng 1s 2s 2p 3s 3p 4s… (nguyên lí vững bền): phân lớp 4s có năng lượng thấp hơn 3d nên được điền trước (SGK tr.24, ví dụ potassium).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nguyên tử có 13 electron có cấu hình electron là",
    "chon": [
     "1s²2s²2p⁶3s²3p¹",
     "1s²2s²2p⁶3s³",
     "1s²2s²2p⁹",
     "1s²2s²2p⁶3p³"
    ],
    "ma": [
     "DUNG",
     "A14",
     "A14",
     "A15"
    ],
    "dung": 0,
    "giai": "Điền lần lượt: 1s² (2) 2s² (4) 2p⁶ (10) 3s² (12) 3p¹ (13). Phân lớp s tối đa 2 electron, p tối đa 6 electron; không bỏ qua phân lớp 3s."
   }
  ]
 },
 "cd-b3-t3": {
  "ten": "Chẩn đoán trước tiết — Bài 3. Cấu trúc lớp vỏ electron (tiết 3)",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "3",
  "loai": "truoc",
  "tiet": "Tiết 10",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Nguyên tử nitrogen (Z = 7) có cấu hình 1s²2s²2p³. Ba electron ở phân lớp 2p được phân bố",
    "chon": [
     "mỗi electron một ô orbital, cùng chiều (3 electron độc thân)",
     "một ô có 2 electron, một ô có 1 electron, một ô trống",
     "cả 3 electron trong cùng một ô orbital",
     "mỗi electron một ô, mũi tên xen kẽ lên – xuống"
    ],
    "ma": [
     "DUNG",
     "A16",
     "A12",
     "A16"
    ],
    "dung": 0,
    "giai": "Quy tắc Hund: trong cùng phân lớp, electron phân bố sao cho số electron độc thân là tối đa và cùng chiều tự quay → 3 ô 2p mỗi ô 1 mũi tên đi lên (SGK tr.24).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nguyên tử oxygen (Z = 8) có bao nhiêu electron độc thân?",
    "chon": [
     "2",
     "4",
     "6",
     "0"
    ],
    "ma": [
     "DUNG",
     "A18",
     "A18",
     "A16"
    ],
    "dung": 0,
    "giai": "2p⁴: 3 electron đầu điền đơn vào 3 ô, electron thứ 4 ghép đôi vào ô đầu → còn 2 ô có 1 electron → 2 electron độc thân."
   },
   {
    "muc": "B",
    "de": "Các nguyên tố mà nguyên tử có 1, 2 hoặc 3 electron ở lớp ngoài cùng (trừ H, He, B) là",
    "chon": [
     "kim loại",
     "phi kim",
     "khí hiếm",
     "chưa xác định được"
    ],
    "ma": [
     "DUNG",
     "A19",
     "A19",
     "X"
    ],
    "dung": 0,
    "giai": "Lớp ngoài cùng có 1, 2, 3 electron → kim loại (trừ H, He, B); 5, 6, 7 → thường là phi kim; 8 → khí hiếm (SGK tr.25)."
   },
   {
    "muc": "V",
    "de": "Nguyên tử chlorine có Z = 17. Nhận xét nào ĐÚNG?",
    "chon": [
     "Lớp ngoài cùng có 7 electron nên chlorine là phi kim",
     "Lớp ngoài cùng có 5 electron (3p⁵) nên chlorine là phi kim",
     "Lớp ngoài cùng có 7 electron, nhiều electron nên dễ nhường → kim loại",
     "Lớp ngoài cùng có 2 electron (3s²) nên chlorine là kim loại"
    ],
    "ma": [
     "DUNG",
     "A18",
     "A19",
     "A18"
    ],
    "dung": 0,
    "giai": "1s²2s²2p⁶3s²3p⁵: lớp ngoài cùng (lớp 3) gồm 3s²3p⁵ = 7 electron → phi kim (SGK tr.25). Lớp ngoài cùng tính CẢ phân lớp s và p của lớp đó.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nguyên tử có cấu hình electron 1s²2s²2p⁶3s²3p⁶ thuộc loại nguyên tố",
    "chon": [
     "khí hiếm",
     "phi kim, vì electron cuối cùng điền vào phân lớp p",
     "kim loại, vì có 2 electron ở phân lớp 3s",
     "kim loại, vì có tới 18 electron"
    ],
    "ma": [
     "DUNG",
     "A19",
     "A18",
     "X"
    ],
    "dung": 0,
    "giai": "Lớp ngoài cùng (lớp 3) có 3s²3p⁶ = 8 electron → khí hiếm (argon), rất bền, hầu như không tham gia phản ứng (SGK tr.25)."
   }
  ]
 },
 "cd-b4": {
  "ten": "Chẩn đoán trước tiết — Bài 4. Ôn tập Chương 1",
  "chuong": 1,
  "mo": true,
  "phut": 10,
  "haiBac": true,
  "bai": "4",
  "loai": "truoc",
  "tiet": "Tiết 11–13",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Hạt nhân nguyên tử mang điện dương vì",
    "chon": [
     "chứa proton mang điện dương; neutron không mang điện",
     "chứa proton và neutron đều mang điện dương",
     "chứa proton dương và electron âm nhưng proton nhiều hơn",
     "chứa neutron mang điện dương"
    ],
    "ma": [
     "DUNG",
     "A2",
     "A2",
     "A2"
    ],
    "dung": 0,
    "giai": "Hạt nhân gồm proton (+1) và neutron (0); electron ở vỏ (SGK tr.14).",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Nguyên tử ⁴⁰₂₀Ca có số proton, neutron, electron lần lượt là",
    "chon": [
     "20, 20, 20",
     "20, 40, 20",
     "40, 20, 40",
     "20, 20, 40"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A4",
     "A5"
    ],
    "dung": 0,
    "giai": "Z = 20 → 20 proton, 20 electron; N = 40 − 20 = 20."
   },
   {
    "muc": "H",
    "de": "Nguyên tử ¹₁H khác nguyên tử của các nguyên tố khác ở chỗ",
    "chon": [
     "hạt nhân không có neutron",
     "không có electron",
     "hạt nhân không có proton",
     "hạt nhân lớn hơn vỏ nguyên tử"
    ],
    "ma": [
     "DUNG",
     "A5",
     "A2",
     "A1"
    ],
    "dung": 0,
    "giai": "Proton, neutron, electron cấu tạo nên nguyên tử, trừ ¹H — hạt nhân ¹H chỉ có 1 proton, không có neutron (SGK tr.14)."
   },
   {
    "muc": "V",
    "de": "Magnesium có ba đồng vị: ²⁴Mg (79%), ²⁵Mg (10%), ²⁶Mg (11%). Nguyên tử khối trung bình của magnesium là",
    "chon": [
     "24,32",
     "25,00",
     "24,00",
     "75,00"
    ],
    "ma": [
     "DUNG",
     "A8",
     "A8",
     "X"
    ],
    "dung": 0,
    "giai": "Ā = (24·79 + 25·10 + 26·11) : 100 = 24,32. Phải nhân với % từng đồng vị, không lấy trung bình cộng, cũng không chỉ lấy đồng vị nhiều nhất.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Ở trạng thái cơ bản, nguyên tử sodium (Z = 11) có bao nhiêu orbital chứa electron?",
    "chon": [
     "6",
     "11",
     "4",
     "3"
    ],
    "ma": [
     "DUNG",
     "A12",
     "A14",
     "A14"
    ],
    "dung": 0,
    "giai": "1s²2s²2p⁶3s¹: 1s (1 AO) + 2s (1) + 2p (3) + 3s (1) = 6 orbital. Mỗi orbital chứa tới 2 electron, nên số orbital không bằng số electron."
   },
   {
    "muc": "H",
    "de": "Nguyên tử phosphorus (Z = 15) có bao nhiêu electron độc thân?",
    "chon": [
     "3",
     "1",
     "5",
     "0"
    ],
    "ma": [
     "DUNG",
     "A16",
     "A18",
     "A16"
    ],
    "dung": 0,
    "giai": "…3s²3p³: theo quy tắc Hund, 3 electron 3p ở 3 ô khác nhau, cùng chiều → 3 electron độc thân.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Tổng số hạt proton, neutron, electron của nguyên tử X là 28; số hạt mang điện nhiều hơn số hạt không mang điện là 8. X là",
    "chon": [
     "F (Z = 9)",
     "Ar (Z = 18)",
     "Si (Z = 14)",
     "O (Z = 8)"
    ],
    "ma": [
     "DUNG",
     "A17",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "2Z + N = 28; 2Z − N = 8 → Z = 9, N = 10 → fluorine. Quên electron (Z + N = 28; Z − N = 8) sẽ ra Z = 18, sai."
   },
   {
    "muc": "V",
    "de": "Nguyên tử X có cấu hình electron kết thúc ở phân lớp 4s¹. Nhận xét nào ĐÚNG?",
    "chon": [
     "X có Z = 19, là kim loại",
     "X có Z = 19, là phi kim vì electron cuối ở lớp 4, xa hạt nhân",
     "X có Z = 1, là phi kim giống hydrogen vì có 1 electron lớp ngoài cùng",
     "X có Z = 21, vì phải điền 3d trước 4s"
    ],
    "ma": [
     "DUNG",
     "A19",
     "A19",
     "A15"
    ],
    "dung": 0,
    "giai": "1s²2s²2p⁶3s²3p⁶4s¹ → 19 electron, Z = 19 (potassium); 1 electron lớp ngoài cùng → kim loại (SGK tr.24–25).",
    "viSao": true
   }
  ]
 },
 "cd-b1-sau": {
  "ten": "Kiểm tra sau tiết — Bài 1. Thành phần của nguyên tử",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "1",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b1-t1",
   "cd-b1-t2"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "H",
    "de": "Trong thí nghiệm của Rutherford, một số rất ít hạt α bị bật ngược trở lại. Điều đó cho thấy",
    "chon": [
     "ở tâm nguyên tử có hạt nhân rất nhỏ, mang điện dương",
     "nguyên tử là một khối đặc chắc như viên bi",
     "hạt nhân mang điện âm nên hút hạt α quay lại",
     "lá vàng quá dày"
    ],
    "ma": [
     "DUNG",
     "A1",
     "A2",
     "X"
    ],
    "dung": 0,
    "giai": "Hạt α (mang điện dương) chỉ bị bật lại khi đến rất gần hạt nhân mang điện dương; vì số hạt bị bật lại rất ít nên hạt nhân rất nhỏ so với nguyên tử (SGK tr.13).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Một nguyên tử nitrogen có 7 proton, 7 neutron, 7 electron. So với khối lượng của cả nguyên tử, khối lượng hạt nhân",
    "chon": [
     "gần bằng (chiếm hơn 99,9%)",
     "chỉ khoảng một nửa",
     "rất nhỏ, vì hạt nhân rất nhỏ so với nguyên tử",
     "bằng khối lượng lớp vỏ"
    ],
    "ma": [
     "DUNG",
     "A3",
     "A3",
     "A3"
    ],
    "dung": 0,
    "giai": "Hạt nhân: 14 hạt × khoảng 1 amu ≈ 14 amu; vỏ: 7 × 0,00055 ≈ 0,004 amu → hạt nhân chiếm hơn 99,9% khối lượng. Hạt nhân nhỏ về KÍCH THƯỚC nhưng nặng về KHỐI LƯỢNG (SGK tr.15, câu hỏi 4)."
   },
   {
    "muc": "B",
    "de": "Nguyên tử potassium có 19 proton và 20 neutron. Số electron của nguyên tử potassium là",
    "chon": [
     "19",
     "20",
     "39",
     "1"
    ],
    "ma": [
     "DUNG",
     "A5",
     "A4",
     "X"
    ],
    "dung": 0,
    "giai": "Trong nguyên tử, số electron = số proton = 19 (SGK tr.14)."
   },
   {
    "muc": "V",
    "de": "Tổng số hạt proton, neutron, electron trong nguyên tử Y là 34; số hạt mang điện nhiều hơn số hạt không mang điện là 10. Y là",
    "chon": [
     "Na (Z = 11)",
     "Ti (Z = 22)",
     "Mg (Z = 12)",
     "Se (Z = 34)"
    ],
    "ma": [
     "DUNG",
     "A17",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "2Z + N = 34; 2Z − N = 10 → Z = 11, N = 12 → sodium. Hạt mang điện gồm cả proton và electron (2Z)."
   },
   {
    "muc": "H",
    "de": "Hạt nhân nguyên tử fluorine có 9 proton và 10 neutron. Phát biểu nào ĐÚNG?",
    "chon": [
     "Điện tích hạt nhân là +9, số khối là 19",
     "Điện tích hạt nhân là +19, số khối là 19",
     "Nguyên tử fluorine có 10 electron",
     "Điện tích hạt nhân là +9, số khối là 28"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A5",
     "A4"
    ],
    "dung": 0,
    "giai": "Z = số proton = 9 → điện tích hạt nhân +9; A = 9 + 10 = 19; nguyên tử có 9 electron.",
    "viSao": true
   }
  ]
 },
 "cd-b2-sau": {
  "ten": "Kiểm tra sau tiết — Bài 2. Nguyên tố hoá học",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "2",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b2-t1",
   "cd-b2-t2",
   "cd-b2-t3"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "H",
    "de": "Nguyên tử nào thuộc cùng nguyên tố hoá học với nguyên tử có 6 proton và 6 neutron?",
    "chon": [
     "Nguyên tử có 6 proton và 8 neutron",
     "Nguyên tử có 7 proton và 6 neutron",
     "Nguyên tử có 5 proton và 7 neutron",
     "Nguyên tử có 12 proton và 12 neutron"
    ],
    "ma": [
     "DUNG",
     "A6",
     "A6",
     "X"
    ],
    "dung": 0,
    "giai": "Cùng nguyên tố ⇔ cùng số proton (Z = 6, carbon). Cùng số neutron hay cùng số khối (5 + 7 = 12) không quyết định nguyên tố."
   },
   {
    "muc": "B",
    "de": "Nguyên tử ³¹₁₅P có số proton, neutron, electron lần lượt là",
    "chon": [
     "15, 16, 15",
     "15, 31, 15",
     "16, 15, 16",
     "15, 16, 31"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A4",
     "A5"
    ],
    "dung": 0,
    "giai": "Z = 15 → 15 proton, 15 electron; N = 31 − 15 = 16 (SGK tr.18)."
   },
   {
    "muc": "H",
    "de": "Oxygen có ba đồng vị ¹⁶₈O, ¹⁷₈O, ¹⁸₈O. Phát biểu nào ĐÚNG?",
    "chon": [
     "Cả ba đều có 8 proton, 8 electron; khác nhau về số neutron",
     "Đó là ba nguyên tố khác nhau vì số khối khác nhau",
     "Số electron lần lượt là 16, 17, 18",
     "Ba đồng vị có tính chất hoá học khác hẳn nhau"
    ],
    "ma": [
     "DUNG",
     "A6",
     "A5",
     "A7"
    ],
    "dung": 0,
    "giai": "Đồng vị: cùng proton (cùng electron) → cùng nguyên tố, tính chất hoá học giống nhau; khác số neutron (8, 9, 10) — SGK tr.19.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nitrogen có hai đồng vị ¹⁴N (99,63%) và ¹⁵N (0,37%). Nguyên tử khối trung bình của nitrogen (lấy 2 chữ số thập phân) là",
    "chon": [
     "14,00",
     "14,50",
     "15,00",
     "29,00"
    ],
    "ma": [
     "DUNG",
     "A8",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Ā = (14·99,63 + 15·0,37) : 100 = 14,0037 ≈ 14,00. Đồng vị ¹⁴N chiếm gần hết nên Ā gần bằng 14.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Một nguyên tử có 11 proton và 12 neutron. Nguyên tử khối của nó xấp xỉ",
    "chon": [
     "23",
     "11",
     "34",
     "23 gam"
    ],
    "ma": [
     "DUNG",
     "A4",
     "A4",
     "A9"
    ],
    "dung": 0,
    "giai": "Proton, neutron đều ≈ 1 amu, electron rất nhỏ → nguyên tử khối ≈ số khối = 11 + 12 = 23 (SGK tr.19). Nguyên tử khối là số đo tương đối, không có đơn vị gam."
   }
  ]
 },
 "cd-b3-sau": {
  "ten": "Kiểm tra sau tiết — Bài 3. Cấu trúc lớp vỏ electron nguyên tử",
  "chuong": 1,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "3",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b3-t1",
   "cd-b3-t2",
   "cd-b3-t3"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "H",
    "de": "Phát biểu nào ĐÚNG về chuyển động của electron?",
    "chon": [
     "Không xác định được đường đi của electron, chỉ xác định được vùng có khả năng gặp electron lớn nhất",
     "Electron chuyển động trên các quỹ đạo hình số 8",
     "Orbital s là quỹ đạo tròn mà electron chạy quanh hạt nhân",
     "Electron ở lớp ngoài cùng bị hạt nhân hút mạnh nhất"
    ],
    "ma": [
     "DUNG",
     "A10",
     "A10",
     "A13"
    ],
    "dung": 0,
    "giai": "Theo mô hình hiện đại, electron chuyển động rất nhanh, không theo quỹ đạo; AO là vùng không gian có xác suất có mặt electron lớn nhất (SGK tr.21). Electron lớp ngoài bị hút YẾU nhất.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Lớp N (n = 4) có bao nhiêu orbital?",
    "chon": [
     "16",
     "4",
     "32",
     "8"
    ],
    "ma": [
     "DUNG",
     "A14",
     "A14",
     "A14"
    ],
    "dung": 0,
    "giai": "Lớp thứ n có n² AO (n ≤ 4): 4² = 16 AO (4s: 1, 4p: 3, 4d: 5, 4f: 7). Số 32 là số electron tối đa (SGK tr.23)."
   },
   {
    "muc": "H",
    "de": "Cấu hình electron của nguyên tử calcium (Z = 20) là",
    "chon": [
     "1s²2s²2p⁶3s²3p⁶4s²",
     "1s²2s²2p⁶3s²3p⁶3d²",
     "1s²2s²2p⁶3s²3p⁸",
     "1s²2s²2p⁶3s²3p⁶4s¹4p¹"
    ],
    "ma": [
     "DUNG",
     "A15",
     "A14",
     "A16"
    ],
    "dung": 0,
    "giai": "Thứ tự năng lượng 1s 2s 2p 3s 3p 4s: sau 3p⁶ điền 4s (trước 3d). 3p tối đa 6 electron.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nguyên tử silicon (Z = 14) có 2 electron ở phân lớp 3p. Hai electron này được biểu diễn",
    "chon": [
     "ở hai ô orbital khác nhau, cùng chiều",
     "trong cùng một ô orbital, ngược chiều",
     "trong cùng một ô orbital, cùng chiều",
     "ở hai ô orbital khác nhau, ngược chiều"
    ],
    "ma": [
     "DUNG",
     "A16",
     "A12",
     "A16"
    ],
    "dung": 0,
    "giai": "Quy tắc Hund: số electron độc thân tối đa và cùng chiều tự quay → 2 electron 3p ở 2 ô khác nhau, cùng mũi tên đi lên (SGK tr.24, câu hỏi 8)."
   },
   {
    "muc": "V",
    "de": "Nguyên tử X có cấu hình electron kết thúc ở phân lớp 3p¹. X là",
    "chon": [
     "kim loại, vì lớp ngoài cùng có 3 electron",
     "phi kim, vì electron cuối cùng điền vào phân lớp p",
     "kim loại, vì lớp ngoài cùng chỉ có 1 electron",
     "khí hiếm"
    ],
    "ma": [
     "DUNG",
     "A19",
     "A18",
     "X"
    ],
    "dung": 0,
    "giai": "1s²2s²2p⁶3s²3p¹ (Z = 13, aluminium): lớp ngoài cùng 3s²3p¹ có 3 electron → kim loại (SGK tr.25).",
    "viSao": true
   }
  ]
 },
 "cd-b5": {
  "ten": "Chẩn đoán trước tiết — Bài 5. Cấu tạo của bảng tuần hoàn",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "5",
  "loai": "truoc",
  "tiet": "Tiết 14",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Trong bảng tuần hoàn hiện đại, các nguyên tố được sắp xếp theo chiều tăng dần của",
    "chon": [
     "điện tích hạt nhân nguyên tử",
     "nguyên tử khối",
     "số neutron",
     "thời gian được tìm ra"
    ],
    "ma": [
     "DUNG",
     "T1",
     "T1",
     "X"
    ],
    "dung": 0,
    "giai": "Bảng tuần hoàn hiện đại sắp xếp 118 nguyên tố theo chiều tăng của điện tích hạt nhân nguyên tử (SGK tr.31)."
   },
   {
    "muc": "H",
    "de": "Các nguyên tố trong cùng một chu kì có cùng",
    "chon": [
     "số lớp electron",
     "số electron hoá trị",
     "số electron lớp ngoài cùng",
     "tính chất hoá học"
    ],
    "ma": [
     "DUNG",
     "T2",
     "T2",
     "T12"
    ],
    "dung": 0,
    "giai": "Chu kì là dãy nguyên tố có cùng số lớp electron (hàng); cùng số electron hoá trị thì xếp cùng cột (nhóm) — SGK tr.31–32.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nguyên tử magnesium (Z = 12) có cấu hình 1s²2s²2p⁶3s². Vị trí của Mg trong bảng tuần hoàn là",
    "chon": [
     "chu kì 3, nhóm IIA",
     "chu kì 2, nhóm IIIA",
     "chu kì 3, nhóm VIA",
     "chu kì 3, nhóm IIB"
    ],
    "ma": [
     "DUNG",
     "T2",
     "T3",
     "T4"
    ],
    "dung": 0,
    "giai": "3 lớp electron → chu kì 3; 2 electron hoá trị, electron cuối ở phân lớp s → nhóm IIA (SGK tr.32)."
   },
   {
    "muc": "H",
    "de": "Nguyên tử aluminium (Z = 13) có cấu hình 1s²2s²2p⁶3s²3p¹. Aluminium là",
    "chon": [
     "nguyên tố p, kim loại",
     "nguyên tố p, phi kim",
     "nguyên tố s, kim loại",
     "nguyên tố d, kim loại"
    ],
    "ma": [
     "DUNG",
     "T5",
     "T4",
     "T4"
    ],
    "dung": 0,
    "giai": "Electron cuối cùng điền vào phân lớp p → nguyên tố p (SGK tr.33, ví dụ Al); nhóm IIIA gồm kim loại (trừ B) — nguyên tố p không phải lúc nào cũng là phi kim.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nguyên tố X ở chu kì 3, nhóm VIA. Nhận xét nào ĐÚNG?",
    "chon": [
     "Nguyên tử X có 6 electron lớp ngoài cùng, Z = 16",
     "Nguyên tử X có 3 electron lớp ngoài cùng, Z = 13",
     "Nguyên tử X có 2 electron lớp ngoài cùng (8 − 6), Z = 12",
     "Nguyên tử X có 6 electron lớp ngoài cùng, Z = 8"
    ],
    "ma": [
     "DUNG",
     "T2",
     "T3",
     "T2"
    ],
    "dung": 0,
    "giai": "Chu kì 3 → 3 lớp electron; nhóm VIA → 6 electron lớp ngoài cùng: 1s²2s²2p⁶3s²3p⁴, Z = 16 (sulfur) — SGK tr.33, câu hỏi 7."
   }
  ]
 },
 "cd-b6-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 6. Xu hướng biến đổi tính chất (tiết 1: bán kính, độ âm điện)",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "6",
  "loai": "truoc",
  "tiet": "Tiết 15",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Sodium (Z = 11) và chlorine (Z = 17) cùng ở chu kì 3. So sánh bán kính nguyên tử:",
    "chon": [
     "Na lớn hơn Cl",
     "Cl lớn hơn Na, vì Cl có nhiều electron hơn",
     "Bằng nhau, vì cùng có 3 lớp electron",
     "Cl lớn hơn Na, vì độ âm điện của Cl lớn hơn"
    ],
    "ma": [
     "DUNG",
     "T6",
     "T6",
     "X"
    ],
    "dung": 0,
    "giai": "Trong một chu kì, số lớp electron không đổi nhưng điện tích hạt nhân tăng → lực hút electron lớp ngoài tăng → bán kính giảm: Na 186 pm, Cl 100 pm (SGK tr.35–36, Hình 6.2).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Trong nhóm IA, từ Li đến Cs, bán kính nguyên tử",
    "chon": [
     "tăng dần, vì số lớp electron tăng",
     "giảm dần, vì điện tích hạt nhân tăng",
     "không đổi, vì cùng có 1 electron hoá trị",
     "tăng rồi giảm"
    ],
    "ma": [
     "DUNG",
     "T7",
     "T12",
     "X"
    ],
    "dung": 0,
    "giai": "Trong một nhóm A, theo chiều tăng điện tích hạt nhân, số lớp electron tăng nên bán kính nguyên tử tăng (SGK tr.36)."
   },
   {
    "muc": "B",
    "de": "Độ âm điện của nguyên tử đặc trưng cho",
    "chon": [
     "khả năng hút electron của nguyên tử khi tạo liên kết hoá học",
     "khả năng nhường electron của nguyên tử",
     "điện tích hạt nhân của nguyên tử",
     "số electron lớp ngoài cùng"
    ],
    "ma": [
     "DUNG",
     "T8",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Độ âm điện (χ) là đại lượng đặc trưng cho khả năng hút electron của nguyên tử khi tạo liên kết; nguyên tử có χ nhỏ dễ nhường electron (SGK tr.36)."
   },
   {
    "muc": "H",
    "de": "Dãy nào sắp xếp theo chiều độ âm điện TĂNG dần?",
    "chon": [
     "Na, Mg, Al, Cl",
     "Cl, Al, Mg, Na",
     "Cl, Br, I, F",
     "I, Br, F, Cl"
    ],
    "ma": [
     "DUNG",
     "T9",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Trong một chu kì, độ âm điện tăng từ trái qua phải: Na 0,93 < Mg 1,31 < Al 1,61 < Cl 3,16 (Bảng 6.2, SGK tr.37).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Dựa vào bảng tuần hoàn, dãy nào sắp xếp theo chiều bán kính nguyên tử TĂNG dần: Al (Z = 13), Mg (Z = 12), Ca (Z = 20)?",
    "chon": [
     "Al, Mg, Ca",
     "Ca, Mg, Al",
     "Mg, Al, Ca",
     "Al, Ca, Mg"
    ],
    "ma": [
     "DUNG",
     "T7",
     "T6",
     "T7"
    ],
    "dung": 0,
    "giai": "Mg, Al cùng chu kì 3: Al (143 pm) < Mg (160 pm); Mg, Ca cùng nhóm IIA: Mg < Ca (197 pm) — Hình 6.2."
   }
  ]
 },
 "cd-b6-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 6. Xu hướng biến đổi tính chất (tiết 2: tính kim loại, phi kim)",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "6",
  "loai": "truoc",
  "tiet": "Tiết 16",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Tính kim loại là tính chất của một nguyên tố mà nguyên tử của nó",
    "chon": [
     "dễ nhường electron để trở thành ion dương",
     "dễ nhận electron để trở thành ion âm",
     "dẫn điện, dẫn nhiệt tốt",
     "có độ âm điện lớn"
    ],
    "ma": [
     "DUNG",
     "T8",
     "T10",
     "T8"
    ],
    "dung": 0,
    "giai": "Nguyên tử càng dễ nhường electron để thành ion dương thì tính kim loại càng mạnh (SGK tr.37)."
   },
   {
    "muc": "H",
    "de": "Sodium phản ứng với nước mãnh liệt hơn magnesium. Giải thích hợp lí là",
    "chon": [
     "Na có bán kính lớn hơn, electron lớp ngoài bị hút yếu hơn nên dễ nhường hơn",
     "Na có độ âm điện lớn hơn Mg",
     "Mg có điện tích hạt nhân lớn hơn nên Mg dễ nhường electron hơn",
     "Na có nhiều electron lớp ngoài cùng hơn Mg"
    ],
    "ma": [
     "DUNG",
     "T8",
     "T11",
     "X"
    ],
    "dung": 0,
    "giai": "Trong chu kì, bán kính giảm, lực hút electron lớp ngoài tăng → khả năng nhường electron giảm → tính kim loại Na > Mg (SGK tr.38, thí nghiệm 1). Độ âm điện Na (0,93) nhỏ hơn Mg (1,31).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Trong nhóm VIIA, từ F đến I, tính phi kim",
    "chon": [
     "giảm dần",
     "tăng dần, vì nguyên tử càng lớn càng hút được nhiều electron",
     "không đổi, vì đều có 7 electron lớp ngoài cùng",
     "mạnh nhất ở iodine vì iodine có nhiều electron nhất"
    ],
    "ma": [
     "DUNG",
     "T11",
     "T12",
     "T11"
    ],
    "dung": 0,
    "giai": "Trong nhóm A, bán kính tăng nhanh, lực hút electron lớp ngoài giảm → khả năng nhận electron giảm → tính phi kim giảm: F > Cl > Br > I (SGK tr.39)."
   },
   {
    "muc": "V",
    "de": "Khi nhỏ nước chlorine vào dung dịch potassium iodide thì có iodine tạo thành (Cl2 + 2KI → 2KCl + I2). Điều này cho thấy",
    "chon": [
     "tính phi kim của chlorine mạnh hơn iodine",
     "tính phi kim của iodine mạnh hơn chlorine",
     "độ âm điện của iodine lớn hơn chlorine",
     "tính kim loại của potassium mạnh hơn chlorine"
    ],
    "ma": [
     "DUNG",
     "T11",
     "T9",
     "X"
    ],
    "dung": 0,
    "giai": "Chlorine dễ nhận electron hơn nên đẩy được iodine ra khỏi muối → phi kim Cl > I, phù hợp xu hướng giảm tính phi kim trong nhóm VIIA (SGK tr.38, Hình 6.5).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Dãy nào sắp xếp theo chiều tính kim loại GIẢM dần?",
    "chon": [
     "K, Na, Mg",
     "Mg, Na, K",
     "Na, K, Mg",
     "K, Mg, Na"
    ],
    "ma": [
     "DUNG",
     "T11",
     "T11",
     "X"
    ],
    "dung": 0,
    "giai": "K và Na cùng nhóm IA: K > Na; Na và Mg cùng chu kì 3: Na > Mg → K > Na > Mg (SGK tr.39)."
   }
  ]
 },
 "cd-b7-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 7. Xu hướng biến đổi của oxide, hydroxide (tiết 1)",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "7",
  "loai": "truoc",
  "tiet": "Tiết 17",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Phosphorus thuộc nhóm VA. Công thức oxide ứng với hoá trị cao nhất của phosphorus là",
    "chon": [
     "P2O5",
     "P2O3",
     "PH3",
     "PO2"
    ],
    "ma": [
     "DUNG",
     "T13",
     "T13",
     "X"
    ],
    "dung": 0,
    "giai": "Hoá trị cao nhất với oxygen của nguyên tố nhóm A bằng số thứ tự nhóm (từ I đến VII trong chu kì) → P hoá trị V → P2O5 (Bảng 7.1, SGK tr.40).",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Cho Na2O vào nước rồi nhúng giấy quỳ tím vào dung dịch thu được, quỳ tím",
    "chon": [
     "chuyển màu xanh",
     "chuyển màu đỏ",
     "không đổi màu",
     "mất màu"
    ],
    "ma": [
     "DUNG",
     "T14",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Na2O + H2O → 2NaOH: dung dịch base làm quỳ tím chuyển xanh đậm (SGK tr.41). Na2O là basic oxide."
   },
   {
    "muc": "H",
    "de": "Trong chu kì 3, theo chiều tăng của điện tích hạt nhân, tính acid của các hydroxide ứng với hoá trị cao nhất",
    "chon": [
     "tăng dần",
     "giảm dần",
     "không đổi",
     "tăng rồi giảm"
    ],
    "ma": [
     "DUNG",
     "T15",
     "T12",
     "X"
    ],
    "dung": 0,
    "giai": "Trong một chu kì, tính base của oxide, hydroxide giảm dần, đồng thời tính acid tăng dần: từ NaOH (base mạnh) đến HClO4 (acid rất mạnh) — Bảng 7.2, SGK tr.42."
   },
   {
    "muc": "H",
    "de": "Al(OH)3 là",
    "chon": [
     "hydroxide lưỡng tính",
     "base mạnh, vì có nhóm OH như NaOH",
     "acid mạnh hơn H2SO4",
     "base mạnh hơn NaOH, vì có tới 3 nhóm OH"
    ],
    "ma": [
     "DUNG",
     "T16",
     "T15",
     "T16"
    ],
    "dung": 0,
    "giai": "Al(OH)3 là hydroxide lưỡng tính (Bảng 7.2). Có nhóm OH trong công thức không có nghĩa là base mạnh; trong chu kì 3, tính base giảm từ NaOH đến Al(OH)3.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nhỏ dung dịch Na2CO3 vào dung dịch HNO3 thấy có bọt khí CO2 thoát ra. Kết luận nào ĐÚNG?",
    "chon": [
     "HNO3 có tính acid mạnh hơn H2CO3",
     "H2CO3 có tính acid mạnh hơn HNO3",
     "Tính phi kim của carbon mạnh hơn nitrogen",
     "Khí CO2 sinh ra do HNO3 bị phân huỷ"
    ],
    "ma": [
     "DUNG",
     "T15",
     "T11",
     "X"
    ],
    "dung": 0,
    "giai": "Na2CO3 + 2HNO3 → 2NaNO3 + CO2 + H2O: acid mạnh đẩy acid yếu (H2CO3 → CO2 + H2O) ra khỏi muối; C và N cùng chu kì 2, N đứng sau nên HNO3 mạnh hơn (SGK tr.41)."
   }
  ]
 },
 "cd-b7-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 7. Xu hướng biến đổi của oxide, hydroxide (tiết 2: luyện tập)",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "7",
  "loai": "truoc",
  "tiet": "Tiết 18",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Trong các hydroxide sau, chất có tính acid mạnh nhất là",
    "chon": [
     "HClO4",
     "H2SiO3",
     "Al(OH)3",
     "H3PO4"
    ],
    "ma": [
     "DUNG",
     "T15",
     "T16",
     "T17"
    ],
    "dung": 0,
    "giai": "Chu kì 3: tính acid tăng dần H2SiO3 (yếu) < H3PO4 (trung bình) < H2SO4 (mạnh) < HClO4 (rất mạnh) — Bảng 7.2."
   },
   {
    "muc": "V",
    "de": "Chlorine thuộc nhóm VIIA. Công thức oxide và hydroxide ứng với hoá trị cao nhất của chlorine là",
    "chon": [
     "Cl2O7 và HClO4",
     "Cl2O và HClO",
     "HCl và HClO4",
     "ClO7 và HClO7"
    ],
    "ma": [
     "DUNG",
     "T13",
     "T13",
     "X"
    ],
    "dung": 0,
    "giai": "Nhóm VIIA → hoá trị cao nhất với oxygen là VII → Cl2O7, hydroxide tương ứng HClO4 (Bảng 7.1). HCl là hợp chất với hydrogen, không phải oxide.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Dãy nào sắp xếp theo chiều tính acid TĂNG dần?",
    "chon": [
     "H2SiO3, H3PO4, H2SO4, HClO4",
     "HClO4, H2SO4, H3PO4, H2SiO3",
     "H2SO4, H3PO4, H2SiO3, HClO4",
     "H3PO4, H2SO4, H2SiO3, HClO4"
    ],
    "ma": [
     "DUNG",
     "T15",
     "T17",
     "X"
    ],
    "dung": 0,
    "giai": "Si, P, S, Cl cùng chu kì 3, Z tăng → tính acid của hydroxide cao nhất tăng (Bảng 7.2). Không so tính acid bằng số nguyên tử H hay O trong công thức.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Cho MgO vào nước, nhúng quỳ tím vào phần dung dịch. Hiện tượng và kết luận đúng là",
    "chon": [
     "MgO tan một phần, quỳ tím chuyển xanh nhạt; MgO là basic oxide",
     "MgO tan hoàn toàn, quỳ tím chuyển đỏ; MgO là acidic oxide",
     "quỳ tím chuyển xanh đậm hơn so với dung dịch của Na2O",
     "MgO không phản ứng vì MgO là oxide lưỡng tính"
    ],
    "ma": [
     "DUNG",
     "T14",
     "T15",
     "X"
    ],
    "dung": 0,
    "giai": "Theo thí nghiệm SGK tr.41: MgO tan một phần, quỳ xanh nhạt → Mg(OH)2 là base yếu (yếu hơn NaOH) — Bảng 7.2."
   },
   {
    "muc": "V",
    "de": "Nguyên tố X thuộc chu kì 3; oxide cao nhất của X có công thức X2O3, hydroxide tương ứng có tính lưỡng tính. X là",
    "chon": [
     "Al",
     "P, vì P có oxide P2O3",
     "Na",
     "Mg"
    ],
    "ma": [
     "DUNG",
     "T13",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Oxide cao nhất X2O3 → X hoá trị III, nhóm IIIA; chu kì 3 → Al; Al2O3, Al(OH)3 lưỡng tính (Bảng 7.1, 7.2).",
    "viSao": true
   }
  ]
 },
 "cd-b8-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 8. Định luật tuần hoàn. Ý nghĩa của bảng tuần hoàn (tiết 1)",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "8",
  "loai": "truoc",
  "tiet": "Tiết 19",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Theo định luật tuần hoàn, tính chất của các nguyên tố và đơn chất, thành phần và tính chất của hợp chất biến đổi tuần hoàn theo chiều tăng của",
    "chon": [
     "điện tích hạt nhân nguyên tử",
     "nguyên tử khối",
     "số neutron",
     "số lớp electron"
    ],
    "ma": [
     "DUNG",
     "T1",
     "T1",
     "T2"
    ],
    "dung": 0,
    "giai": "Định luật tuần hoàn: «… biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử» (SGK tr.43)."
   },
   {
    "muc": "H",
    "de": "Đại lượng nào sau đây KHÔNG biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân?",
    "chon": [
     "Nguyên tử khối",
     "Số electron lớp ngoài cùng",
     "Bán kính nguyên tử",
     "Độ âm điện"
    ],
    "ma": [
     "DUNG",
     "T18",
     "T18",
     "T18"
    ],
    "dung": 0,
    "giai": "Số electron lớp ngoài cùng, bán kính, độ âm điện lặp lại xu hướng sau mỗi chu kì; nguyên tử khối nói chung chỉ tăng dần, không lặp lại theo chu kì (SGK tr.43; Bài 7 câu hỏi 4).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nguyên tố sulfur ở ô số 16, chu kì 3, nhóm VIA. Nguyên tử sulfur có",
    "chon": [
     "16 electron, 3 lớp electron, 6 electron lớp ngoài cùng",
     "16 electron, 6 lớp electron, 3 electron lớp ngoài cùng",
     "16 electron, 3 lớp electron, 2 electron lớp ngoài cùng",
     "32 electron, 3 lớp electron, 6 electron lớp ngoài cùng"
    ],
    "ma": [
     "DUNG",
     "T2",
     "T3",
     "X"
    ],
    "dung": 0,
    "giai": "Số electron = Z = 16; số lớp = số thứ tự chu kì = 3; số electron lớp ngoài cùng = số thứ tự nhóm A = 6 (SGK tr.43, ví dụ 1)."
   },
   {
    "muc": "V",
    "de": "Nguyên tử X có cấu hình electron 1s²2s²2p⁶3s²3p³. Nhận xét nào ĐÚNG về X?",
    "chon": [
     "Chu kì 3, nhóm VA, phi kim; oxide cao nhất là acidic oxide",
     "Chu kì 3, nhóm IIIA (có 3 electron ở 3p), kim loại",
     "Chu kì 5, nhóm IIIA",
     "Chu kì 3, nhóm VA, kim loại vì có 3 lớp electron"
    ],
    "ma": [
     "DUNG",
     "T3",
     "T2",
     "A19"
    ],
    "dung": 0,
    "giai": "3 lớp → chu kì 3; lớp ngoài cùng 3s²3p³ có 5 electron → nhóm VA (phosphorus), phi kim; P2O5 là acidic oxide, H3PO4 là acid (SGK tr.44, ví dụ 2).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "So sánh tính phi kim của silicon (Z = 14) với carbon (Z = 6) và phosphorus (Z = 15):",
    "chon": [
     "Si có tính phi kim yếu hơn cả C và P",
     "Si có tính phi kim mạnh hơn C, vì Si có nhiều lớp electron hơn",
     "Si có tính phi kim mạnh hơn P, vì Si đứng trước P",
     "Si, C, P có tính phi kim như nhau vì đều là phi kim"
    ],
    "ma": [
     "DUNG",
     "T11",
     "T11",
     "T12"
    ],
    "dung": 0,
    "giai": "C và Si cùng nhóm IVA: phi kim giảm từ trên xuống → C > Si; Si và P cùng chu kì 3: phi kim tăng từ trái qua phải → P > Si (cách so sánh như SGK tr.44)."
   }
  ]
 },
 "cd-b8-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 8. Định luật tuần hoàn. Ý nghĩa của bảng tuần hoàn (tiết 2: luyện tập)",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "8",
  "loai": "truoc",
  "tiet": "Tiết 20",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Potassium có Z = 19. Nhận xét nào ĐÚNG?",
    "chon": [
     "Chu kì 4, nhóm IA; kim loại mạnh; KOH là base mạnh",
     "Chu kì 1, nhóm IVA",
     "Chu kì 4, nhóm IA; KOH có tính acid",
     "Chu kì 4, nhóm IA; phi kim vì có 4 lớp electron"
    ],
    "ma": [
     "DUNG",
     "T2",
     "T14",
     "A19"
    ],
    "dung": 0,
    "giai": "1s²2s²2p⁶3s²3p⁶4s¹: 4 lớp → chu kì 4; 1 electron lớp ngoài cùng → nhóm IA, kim loại kiềm; hydroxide nhóm IA là base mạnh (SGK tr.42, tr.44).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Hai nguyên tố A, B đứng kế tiếp nhau trong cùng một chu kì, tổng số đơn vị điện tích hạt nhân là 31. Nhận xét nào ĐÚNG?",
    "chon": [
     "A, B là P và S; S có tính phi kim mạnh hơn P",
     "A, B là P và S; P có tính phi kim mạnh hơn vì đứng trước",
     "A, B là P và S; hai nguyên tố có tính phi kim như nhau vì cùng chu kì",
     "A, B là Si và Cl"
    ],
    "ma": [
     "DUNG",
     "T11",
     "T12",
     "X"
    ],
    "dung": 0,
    "giai": "Z(A) + Z(B) = 31, kế tiếp → 15 (P) và 16 (S), cùng chu kì 3; trong chu kì, tính phi kim tăng dần → S > P."
   },
   {
    "muc": "V",
    "de": "Nguyên tố X ở chu kì 2 có oxide cao nhất là XO2 và hợp chất với hydrogen là XH4. X là",
    "chon": [
     "carbon, nhóm IVA",
     "nguyên tố nhóm IIA, vì công thức XO2 có «2»",
     "silicon, nhóm IVA",
     "nguyên tố nhóm VIA, vì 2 + 4 = 6"
    ],
    "ma": [
     "DUNG",
     "T17",
     "T2",
     "X"
    ],
    "dung": 0,
    "giai": "Oxide cao nhất XO2 → hoá trị IV → nhóm IVA; chu kì 2 → carbon (CO2, CH4). Silicon cũng nhóm IVA nhưng ở chu kì 3.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nguyên tố ở chu kì 2, nhóm VIIA có đặc điểm nào sau đây?",
    "chon": [
     "Z = 9 (fluorine), là phi kim mạnh nhất",
     "Z = 17 (chlorine), là phi kim mạnh nhất",
     "Z = 9, là kim loại vì chỉ có 2 lớp electron",
     "Z = 7, vì nhóm VII có 7 electron"
    ],
    "ma": [
     "DUNG",
     "T2",
     "A19",
     "X"
    ],
    "dung": 0,
    "giai": "Chu kì 2 → 2 lớp, nhóm VIIA → 7 electron lớp ngoài: 1s²2s²2p⁵, Z = 9 (F); F có độ âm điện lớn nhất (3,98), phi kim mạnh nhất."
   },
   {
    "muc": "V",
    "de": "Sắp xếp các hydroxide NaOH, Mg(OH)2, Al(OH)3 theo chiều tính base GIẢM dần:",
    "chon": [
     "NaOH, Mg(OH)2, Al(OH)3",
     "Al(OH)3, Mg(OH)2, NaOH",
     "Al(OH)3, Mg(OH)2, NaOH — vì càng nhiều nhóm OH càng mạnh",
     "Mg(OH)2, NaOH, Al(OH)3"
    ],
    "ma": [
     "DUNG",
     "T15",
     "T16",
     "X"
    ],
    "dung": 0,
    "giai": "Na, Mg, Al cùng chu kì 3, Z tăng → tính base của hydroxide giảm: NaOH (mạnh) > Mg(OH)2 (yếu) > Al(OH)3 (lưỡng tính) — Bảng 7.2.",
    "viSao": true
   }
  ]
 },
 "cd-b9": {
  "ten": "Chẩn đoán trước tiết — Bài 9. Ôn tập Chương 2",
  "chuong": 2,
  "mo": true,
  "phut": 10,
  "haiBac": true,
  "bai": "9",
  "loai": "truoc",
  "tiet": "Tiết 21–22",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Bảng tuần hoàn hiện nay có",
    "chon": [
     "7 chu kì, 18 cột chia thành 8 nhóm A và 8 nhóm B",
     "8 chu kì và 7 nhóm",
     "7 chu kì, 18 nhóm A",
     "18 chu kì, 8 nhóm"
    ],
    "ma": [
     "DUNG",
     "T2",
     "X",
     "T2"
    ],
    "dung": 0,
    "giai": "Bảng tuần hoàn có 7 chu kì; 18 cột chia thành 8 nhóm A (IA–VIIIA) và 8 nhóm B (IB–VIIIB, riêng VIIIB gồm 3 cột) — SGK tr.32."
   },
   {
    "muc": "H",
    "de": "Theo nguyên tắc sắp xếp của bảng tuần hoàn, các nguyên tố được xếp vào cùng một cột khi nguyên tử của chúng có cùng",
    "chon": [
     "số electron hoá trị",
     "số lớp electron",
     "nguyên tử khối",
     "số neutron"
    ],
    "ma": [
     "DUNG",
     "T2",
     "T1",
     "T1"
    ],
    "dung": 0,
    "giai": "Cùng số electron hoá trị → cùng cột (nhóm); cùng số lớp electron → cùng hàng (chu kì) — SGK tr.31.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Oxygen (Z = 8) và sulfur (Z = 16): nhận xét nào ĐÚNG?",
    "chon": [
     "Cùng nhóm VIA; độ âm điện của O lớn hơn S",
     "Cùng chu kì; độ âm điện của S lớn hơn O",
     "Cùng nhóm VIA; độ âm điện của S lớn hơn vì S có nhiều electron hơn",
     "Cùng nhóm VIA nên độ âm điện bằng nhau"
    ],
    "ma": [
     "DUNG",
     "T2",
     "T9",
     "T12"
    ],
    "dung": 0,
    "giai": "O: 2s²2p⁴, S: 3s²3p⁴ → cùng nhóm VIA; trong nhóm A, độ âm điện giảm từ trên xuống: O 3,44 > S 2,58 (Bảng 6.2)."
   },
   {
    "muc": "V",
    "de": "Dãy nào sắp xếp theo chiều bán kính nguyên tử TĂNG dần: N (Z = 7), P (Z = 15), Si (Z = 14)?",
    "chon": [
     "N, P, Si",
     "Si, P, N",
     "P, Si, N",
     "N, Si, P"
    ],
    "ma": [
     "DUNG",
     "T7",
     "T7",
     "T6"
    ],
    "dung": 0,
    "giai": "N và P cùng nhóm VA: N (75 pm) < P (110 pm); Si và P cùng chu kì 3: P < Si (118 pm) — Hình 6.2.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Hydroxide của các nguyên tố nhóm IA (như NaOH, KOH) có tính",
    "chon": [
     "base mạnh",
     "acid mạnh",
     "lưỡng tính",
     "acid yếu"
    ],
    "ma": [
     "DUNG",
     "T14",
     "X",
     "T14"
    ],
    "dung": 0,
    "giai": "Nói chung, hydroxide của các nguyên tố nhóm IA thể hiện tính base mạnh (SGK tr.42)."
   },
   {
    "muc": "V",
    "de": "Nguyên tử X có lớp ngoài cùng 3s¹, nguyên tử Y có lớp ngoài cùng 3s²3p⁴. Nhận xét nào ĐÚNG?",
    "chon": [
     "X là kim loại, Y là phi kim; bán kính nguyên tử X lớn hơn Y",
     "X là kim loại; bán kính Y lớn hơn vì Y có nhiều electron hơn",
     "X là phi kim vì chỉ có 1 electron lớp ngoài cùng",
     "Y thuộc nhóm IVA vì có 4 electron ở phân lớp 3p"
    ],
    "ma": [
     "DUNG",
     "T6",
     "A19",
     "T3"
    ],
    "dung": 0,
    "giai": "X: Na (nhóm IA, kim loại); Y: S (6 electron lớp ngoài → nhóm VIA, phi kim). Cùng chu kì 3 → bán kính Na (186 pm) > S (103 pm).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Trong nhóm IIA, từ Be đến Ba, phát biểu nào ĐÚNG?",
    "chon": [
     "Tính kim loại tăng, độ âm điện giảm",
     "Tính kim loại giảm, độ âm điện tăng",
     "Bán kính nguyên tử giảm dần",
     "Tính kim loại không đổi vì đều có 2 electron hoá trị"
    ],
    "ma": [
     "DUNG",
     "T11",
     "T7",
     "T12"
    ],
    "dung": 0,
    "giai": "Trong nhóm A, Z tăng → số lớp tăng, bán kính tăng → nhường electron dễ hơn: tính kim loại tăng, độ âm điện giảm (Be 1,57 … Ba 0,89)."
   },
   {
    "muc": "V",
    "de": "Nguyên tố R thuộc nhóm VA, hợp chất với hydrogen là RH3. Công thức oxide cao nhất của R là",
    "chon": [
     "R2O5",
     "R2O3, vì trong RH3 R có hoá trị III",
     "RO2",
     "R2O7"
    ],
    "ma": [
     "DUNG",
     "T13",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Hoá trị cao nhất với oxygen = số thứ tự nhóm = V → R2O5 (như N2O5, P2O5 — Bảng 7.1). Hoá trị III là hoá trị với hydrogen."
   }
  ]
 },
 "cd-b5-sau": {
  "ten": "Kiểm tra sau tiết — Bài 5. Cấu tạo của bảng tuần hoàn",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "5",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b5"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "H",
    "de": "Argon (nguyên tử khối ≈ 39,95) đứng TRƯỚC potassium (nguyên tử khối ≈ 39,10) trong bảng tuần hoàn. Vì sao?",
    "chon": [
     "Vì các nguyên tố xếp theo chiều tăng điện tích hạt nhân: Ar có Z = 18, K có Z = 19",
     "Vì xếp nhầm, đúng ra K phải đứng trước Ar",
     "Vì bảng tuần hoàn xếp theo nguyên tử khối giảm dần",
     "Vì khí hiếm luôn được xếp cuối bảng"
    ],
    "ma": [
     "DUNG",
     "T1",
     "T1",
     "X"
    ],
    "dung": 0,
    "giai": "Bảng tuần hoàn hiện đại xếp theo điện tích hạt nhân tăng dần, không theo nguyên tử khối (SGK tr.31). Mendeleev cũng từng đổi chỗ một số nguyên tố cho phù hợp tính chất.",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Các nguyên tố trong cùng một nhóm A có cùng",
    "chon": [
     "số electron hoá trị",
     "số lớp electron",
     "số khối",
     "số proton"
    ],
    "ma": [
     "DUNG",
     "T2",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Nguyên tử các nguyên tố cùng nhóm A có số electron hoá trị bằng nhau và bằng số thứ tự nhóm (trừ He) — SGK tr.32."
   },
   {
    "muc": "H",
    "de": "Nguyên tử calcium (Z = 20) có cấu hình 1s²2s²2p⁶3s²3p⁶4s². Vị trí của Ca là",
    "chon": [
     "chu kì 4, nhóm IIA",
     "chu kì 2, nhóm IVA",
     "chu kì 4, nhóm VIA",
     "chu kì 4, nhóm IIB"
    ],
    "ma": [
     "DUNG",
     "T2",
     "T3",
     "T4"
    ],
    "dung": 0,
    "giai": "4 lớp electron → chu kì 4; 2 electron lớp ngoài cùng ở phân lớp s → nhóm IIA (SGK tr.33, câu hỏi 6)."
   },
   {
    "muc": "H",
    "de": "Nguyên tử chlorine (Z = 17) có cấu hình 1s²2s²2p⁶3s²3p⁵. Chlorine là",
    "chon": [
     "nguyên tố p, nhóm VIIA",
     "nguyên tố p, nhóm VA (vì có 5 electron ở 3p)",
     "nguyên tố s, nhóm IIA (vì có 3s²)",
     "nguyên tố p, nhóm VIIB"
    ],
    "ma": [
     "DUNG",
     "T3",
     "T4",
     "T4"
    ],
    "dung": 0,
    "giai": "Electron cuối ở phân lớp p → nguyên tố p, thuộc nhóm A; lớp ngoài cùng 3s²3p⁵ có 7 electron → nhóm VIIA.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nguyên tố X có Z = 19. Nhận xét nào ĐÚNG?",
    "chon": [
     "X ở chu kì 4, nhóm IA, là kim loại",
     "X ở chu kì 1, nhóm IVA",
     "X ở chu kì 3, nhóm IIIB (vì điền 3d¹)",
     "X ở chu kì 4, nhóm IA, là phi kim"
    ],
    "ma": [
     "DUNG",
     "T2",
     "A15",
     "X"
    ],
    "dung": 0,
    "giai": "1s²2s²2p⁶3s²3p⁶4s¹ (điền 4s trước 3d): 4 lớp → chu kì 4; 1 electron hoá trị ở phân lớp s → nhóm IA, kim loại kiềm."
   }
  ]
 },
 "cd-b6-sau": {
  "ten": "Kiểm tra sau tiết — Bài 6. Xu hướng biến đổi một số tính chất của nguyên tử",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "6",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b6-t1",
   "cd-b6-t2"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "H",
    "de": "Oxygen (Z = 8) và sulfur (Z = 16) cùng nhóm VIA. So sánh bán kính nguyên tử:",
    "chon": [
     "S lớn hơn O, vì S có nhiều lớp electron hơn",
     "O lớn hơn S, vì hạt nhân S hút electron mạnh hơn",
     "Bằng nhau, vì cùng nhóm VIA",
     "O lớn hơn S, vì độ âm điện của O lớn hơn"
    ],
    "ma": [
     "DUNG",
     "T7",
     "T12",
     "X"
    ],
    "dung": 0,
    "giai": "Trong nhóm A, từ trên xuống số lớp electron tăng → bán kính tăng: O 73 pm < S 103 pm (Hình 6.2).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Silicon (Z = 14) và chlorine (Z = 17) cùng chu kì 3. So sánh bán kính nguyên tử:",
    "chon": [
     "Si lớn hơn Cl",
     "Cl lớn hơn Si, vì Cl có nhiều electron hơn",
     "Bằng nhau, vì cùng có 3 lớp electron",
     "Cl lớn hơn Si, vì Cl là phi kim"
    ],
    "ma": [
     "DUNG",
     "T6",
     "T6",
     "X"
    ],
    "dung": 0,
    "giai": "Cùng chu kì, điện tích hạt nhân tăng, lực hút electron lớp ngoài tăng → bán kính giảm: Si 118 pm > Cl 100 pm."
   },
   {
    "muc": "B",
    "de": "Trong một chu kì, theo chiều tăng của điện tích hạt nhân, độ âm điện",
    "chon": [
     "tăng dần",
     "giảm dần",
     "không đổi",
     "tăng rồi giảm"
    ],
    "ma": [
     "DUNG",
     "T9",
     "T12",
     "X"
    ],
    "dung": 0,
    "giai": "Độ âm điện tăng từ trái qua phải trong một chu kì, giảm từ trên xuống trong một nhóm A (SGK tr.37)."
   },
   {
    "muc": "H",
    "de": "Trong các nguyên tố N, O, P, S, nguyên tố có tính phi kim mạnh nhất là",
    "chon": [
     "O",
     "S, vì S có nhiều electron nhất",
     "N, vì N đứng trước O trong chu kì",
     "P"
    ],
    "ma": [
     "DUNG",
     "T11",
     "T11",
     "X"
    ],
    "dung": 0,
    "giai": "O > N (cùng chu kì 2, phi kim tăng từ trái qua phải); O > S và N > P (cùng nhóm, phi kim giảm từ trên xuống) → O mạnh nhất.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "So sánh tính kim loại của magnesium (Z = 12) và calcium (Z = 20):",
    "chon": [
     "Ca mạnh hơn Mg, vì bán kính Ca lớn hơn nên dễ nhường electron hơn",
     "Mg mạnh hơn Ca, vì điện tích hạt nhân Mg nhỏ hơn",
     "Ca mạnh hơn Mg, vì độ âm điện của Ca lớn hơn",
     "Như nhau, vì cùng nhóm IIA"
    ],
    "ma": [
     "DUNG",
     "T11",
     "T8",
     "T12"
    ],
    "dung": 0,
    "giai": "Mg, Ca cùng nhóm IIA; từ trên xuống bán kính tăng, lực hút electron lớp ngoài giảm → nhường electron dễ hơn → Ca > Mg. Độ âm điện Ca (1,00) NHỎ hơn Mg (1,31).",
    "viSao": true
   }
  ]
 },
 "cd-b7-sau": {
  "ten": "Kiểm tra sau tiết — Bài 7. Xu hướng biến đổi thành phần, tính chất của oxide, hydroxide",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "7",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b7-t1",
   "cd-b7-t2"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "H",
    "de": "Sulfur thuộc nhóm VIA. Oxide ứng với hoá trị cao nhất của sulfur là",
    "chon": [
     "SO3",
     "SO",
     "H2S",
     "SO2"
    ],
    "ma": [
     "DUNG",
     "T13",
     "T13",
     "X"
    ],
    "dung": 0,
    "giai": "Nhóm VIA → hoá trị cao nhất với oxygen là VI → SO3 (Bảng 7.1). H2S là hợp chất với hydrogen; SO2 có S hoá trị IV, chưa phải cao nhất.",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Cho P2O5 vào nước rồi nhúng quỳ tím vào dung dịch thu được, quỳ tím",
    "chon": [
     "chuyển màu đỏ",
     "chuyển màu xanh",
     "không đổi màu",
     "mất màu"
    ],
    "ma": [
     "DUNG",
     "T14",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "P2O5 + 3H2O → 2H3PO4: dung dịch acid làm quỳ tím chuyển đỏ; P2O5 là acidic oxide (SGK tr.41)."
   },
   {
    "muc": "H",
    "de": "Trong chu kì 3, từ NaOH đến Al(OH)3, tính base",
    "chon": [
     "giảm dần",
     "tăng dần",
     "mạnh nhất ở Al(OH)3 vì có nhiều nhóm OH nhất",
     "không đổi vì đều có nhóm OH"
    ],
    "ma": [
     "DUNG",
     "T15",
     "T16",
     "T16"
    ],
    "dung": 0,
    "giai": "NaOH base mạnh → Mg(OH)2 base yếu → Al(OH)3 lưỡng tính (Bảng 7.2)."
   },
   {
    "muc": "H",
    "de": "So sánh tính acid của H3PO4 và H2SO4:",
    "chon": [
     "H2SO4 mạnh hơn, vì S đứng sau P trong chu kì 3",
     "H3PO4 mạnh hơn, vì có nhiều nguyên tử H hơn",
     "Bằng nhau, vì đều có 4 nguyên tử O",
     "H3PO4 mạnh hơn, vì P có Z nhỏ hơn"
    ],
    "ma": [
     "DUNG",
     "T17",
     "T17",
     "T15"
    ],
    "dung": 0,
    "giai": "P và S cùng chu kì 3, Z tăng → tính acid của hydroxide cao nhất tăng: H3PO4 (trung bình) < H2SO4 (mạnh) — Bảng 7.2.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Oxide nào sau đây là acidic oxide?",
    "chon": [
     "SO3",
     "Na2O",
     "MgO",
     "Al2O3"
    ],
    "ma": [
     "DUNG",
     "T14",
     "T14",
     "X"
    ],
    "dung": 0,
    "giai": "Chu kì 3: Na2O, MgO là basic oxide; Al2O3 lưỡng tính; SiO2, P2O5, SO3, Cl2O7 là acidic oxide (Bảng 7.2)."
   }
  ]
 },
 "cd-b8-sau": {
  "ten": "Kiểm tra sau tiết — Bài 8. Định luật tuần hoàn. Ý nghĩa của bảng tuần hoàn",
  "chuong": 2,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "8",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b8-t1",
   "cd-b8-t2"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "B",
    "de": "Nguyên nhân của sự biến đổi tuần hoàn tính chất các nguyên tố là",
    "chon": [
     "sự biến đổi tuần hoàn cấu hình electron lớp ngoài cùng khi điện tích hạt nhân tăng",
     "sự tăng dần của nguyên tử khối",
     "sự tăng dần của số neutron",
     "sự tăng dần của số lớp electron"
    ],
    "ma": [
     "DUNG",
     "T1",
     "T1",
     "T2"
    ],
    "dung": 0,
    "giai": "Sự biến đổi tuần hoàn cấu hình electron lớp ngoài cùng khi điện tích hạt nhân tăng dần là nguyên nhân của sự biến đổi tuần hoàn tính chất (SGK tr.35)."
   },
   {
    "muc": "H",
    "de": "Magnesium ở ô 12, chu kì 3, nhóm IIA. Nhận xét nào ĐÚNG?",
    "chon": [
     "Nguyên tử Mg có 3 lớp electron, 2 electron lớp ngoài cùng; Mg là kim loại, MgO là basic oxide",
     "Nguyên tử Mg có 2 lớp electron, 3 electron lớp ngoài cùng",
     "Nguyên tử Mg có 3 lớp electron, 6 electron lớp ngoài cùng",
     "Mg là kim loại, nhưng MgO là acidic oxide"
    ],
    "ma": [
     "DUNG",
     "T2",
     "T3",
     "T14"
    ],
    "dung": 0,
    "giai": "Số lớp = số thứ tự chu kì (3); số electron lớp ngoài cùng = số thứ tự nhóm A (2) → kim loại; MgO basic oxide, Mg(OH)2 base yếu (SGK tr.44, câu hỏi 2).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nguyên tử X có cấu hình electron 1s²2s²2p⁶3s²3p⁵. Vị trí của X là",
    "chon": [
     "chu kì 3, nhóm VIIA",
     "chu kì 3, nhóm VA",
     "chu kì 7, nhóm IIIA",
     "chu kì 3, nhóm VIIB"
    ],
    "ma": [
     "DUNG",
     "T3",
     "T2",
     "T4"
    ],
    "dung": 0,
    "giai": "3 lớp → chu kì 3; lớp ngoài cùng 3s²3p⁵ có 7 electron, nguyên tố p → nhóm VIIA (chlorine)."
   },
   {
    "muc": "V",
    "de": "So sánh tính kim loại của sodium với magnesium (cùng chu kì) và với potassium (cùng nhóm):",
    "chon": [
     "Na mạnh hơn Mg nhưng yếu hơn K",
     "Na mạnh hơn cả Mg và K",
     "Na yếu hơn cả Mg và K",
     "Na mạnh hơn K vì điện tích hạt nhân Na nhỏ hơn"
    ],
    "ma": [
     "DUNG",
     "T11",
     "T11",
     "T11"
    ],
    "dung": 0,
    "giai": "Chu kì 3: tính kim loại giảm từ trái qua phải → Na > Mg; nhóm IA: tính kim loại tăng từ trên xuống → K > Na.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nguyên tố X ở chu kì 3, hydroxide ứng với hoá trị cao nhất là H2XO4 và có tính acid mạnh. X là",
    "chon": [
     "S (nhóm VIA)",
     "C (nhóm IVA, vì có 4 nguyên tử O)",
     "Se (nhóm VIA)",
     "Mg (vì có 2 nguyên tử H)"
    ],
    "ma": [
     "DUNG",
     "T17",
     "T2",
     "X"
    ],
    "dung": 0,
    "giai": "H2XO4 ↔ X hoá trị VI (oxide XO3) → nhóm VIA; chu kì 3 → sulfur, H2SO4 là acid mạnh (SGK tr.43, ví dụ 1). Se cũng nhóm VIA nhưng ở chu kì 4."
   }
  ]
 },
 "cd-b10": {
  "ten": "Chẩn đoán trước tiết — Bài 10. Quy tắc octet",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "10",
  "loai": "truoc",
  "tiet": "Tiết 23",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Vì sao các nguyên tử kết hợp với nhau tạo thành phân tử hay tinh thể?",
    "chon": [
     "Vì khi kết hợp, hệ có năng lượng thấp hơn nên bền vững hơn",
     "Vì mỗi nguyên tử cần có đủ 8 electron lớp ngoài cùng thì mới tồn tại được",
     "Vì các nguyên tử mang điện tích trái dấu nên hút nhau",
     "Vì phi kim luôn nhường electron cho kim loại"
    ],
    "ma": [
     "DUNG",
     "O1",
     "O8",
     "O6"
    ],
    "dung": 0,
    "giai": "Liên kết được giải thích bằng sự giảm năng lượng khi các nguyên tử kết hợp; tạo thành phân tử, tinh thể bền vững hơn (SGK tr.49). Nguyên tử trung hoà về điện; đạt 8 electron là XU HƯỚNG, không phải điều kiện để tồn tại.",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Trong phân tử H2O (H:O:H, oxygen còn 2 cặp electron riêng), xung quanh mỗi nguyên tử hydrogen có bao nhiêu electron?",
    "chon": [
     "2",
     "8",
     "1",
     "0"
    ],
    "ma": [
     "DUNG",
     "O3",
     "O5",
     "X"
    ],
    "dung": 0,
    "giai": "Mỗi H góp chung 1 electron với O; cặp dùng chung tính cho cả hai nguyên tử → quanh H có 2 electron, giống cấu hình của He (SGK tr.50)."
   },
   {
    "muc": "H",
    "de": "Phân tử Cl2 được biểu diễn :Cl:Cl: (mỗi Cl còn 3 cặp electron riêng). Xung quanh mỗi nguyên tử chlorine có bao nhiêu electron?",
    "chon": [
     "8",
     "7",
     "14",
     "6"
    ],
    "ma": [
     "DUNG",
     "O5",
     "X",
     "O5"
    ],
    "dung": 0,
    "giai": "Mỗi Cl có 7 electron hoá trị, góp chung 1 electron; cặp dùng chung được tính cho CẢ HAI nguyên tử → mỗi Cl có 6 + 2 = 8 electron (SGK tr.50)."
   },
   {
    "muc": "V",
    "de": "Nguyên tử nitrogen (nhóm VA) liên kết với 3 nguyên tử hydrogen tạo phân tử NH3. Theo quy tắc octet, nguyên tử N đã",
    "chon": [
     "góp chung 3 electron, mỗi electron với một nguyên tử H",
     "góp chung 5 electron với các nguyên tử H",
     "nhường 5 electron cho các nguyên tử H",
     "nhận 3 electron từ các nguyên tử H, tạo thành ion N³⁻"
    ],
    "ma": [
     "DUNG",
     "O4",
     "O6",
     "O9"
    ],
    "dung": 0,
    "giai": "N có 5 electron hoá trị, cần thêm 3 để đủ 8 → góp chung 3 electron với 3 nguyên tử H, tạo 3 cặp dùng chung (cùng cách giải thích với NF3 — SGK tr.50, câu hỏi 3). Giữa hai phi kim không tạo ion.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Phát biểu nào sau đây ĐÚNG?",
    "chon": [
     "Quy tắc octet có ngoại lệ, ví dụ trong PCl5 lớp ngoài cùng của P có 10 electron",
     "Trong mọi phân tử, mọi nguyên tử đều có 8 electron lớp ngoài cùng",
     "Khi liên kết, nguyên tử hydrogen cũng đạt 8 electron lớp ngoài cùng",
     "Ion Na⁺ có cấu hình electron giống nguyên tử argon"
    ],
    "ma": [
     "DUNG",
     "O2",
     "O3",
     "O7"
    ],
    "dung": 0,
    "giai": "Quy tắc octet chỉ đúng với nguyên tử các nguyên tố chu kì 2 và một số kim loại, phi kim điển hình; có ngoại lệ như PCl5 (SGK tr.50, Em có biết). H đạt 2 electron; Na⁺ giống Ne."
   }
  ]
 },
 "cd-b11-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 11. Liên kết ion (tiết 1)",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "11",
  "loai": "truoc",
  "tiet": "Tiết 24",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Nguyên tử sodium (Na) nhường 1 electron. Hạt tạo thành là",
    "chon": [
     "Na⁺",
     "Na⁻",
     "Na (vẫn trung hoà về điện)",
     "Na⁷⁻"
    ],
    "ma": [
     "DUNG",
     "I1",
     "X",
     "O6"
    ],
    "dung": 0,
    "giai": "Số đơn vị điện tích của cation bằng số electron nguyên tử đã nhường: Na → Na⁺ + 1e (SGK tr.51). Mất electron (mang điện âm) thì hạt còn lại mang điện dương."
   },
   {
    "muc": "H",
    "de": "Ion Mg²⁺ (Mg có Z = 12) có cấu hình electron giống cấu hình electron của nguyên tử",
    "chon": [
     "neon (Ne)",
     "argon (Ar)",
     "magnesium (Mg)",
     "sodium (Na)"
    ],
    "ma": [
     "DUNG",
     "O7",
     "I2",
     "X"
    ],
    "dung": 0,
    "giai": "Mg (1s²2s²2p⁶3s²) nhường 2 electron → Mg²⁺: 1s²2s²2p⁶, giống Ne — khí hiếm gần Mg nhất trong bảng tuần hoàn (SGK tr.51).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Trong sodium chloride, điều giữ ion Na⁺ và ion Cl⁻ ở cạnh nhau là",
    "chon": [
     "lực hút tĩnh điện giữa hai ion mang điện tích trái dấu",
     "sự chuyển 1 electron từ Na sang Cl",
     "cặp electron dùng chung giữa Na và Cl",
     "lực hút giữa hạt nhân Na và electron của Cl"
    ],
    "ma": [
     "DUNG",
     "I3",
     "I6",
     "X"
    ],
    "dung": 0,
    "giai": "Sự chuyển electron chỉ TẠO RA các ion; liên kết ion là lực hút tĩnh điện giữa các ion mang điện trái dấu (SGK tr.52).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Calcium (nhóm IIA) kết hợp với chlorine (nhóm VIIA) tạo hợp chất ion. Nhận xét nào ĐÚNG?",
    "chon": [
     "Mỗi Ca nhường 2 electron cho 2 nguyên tử Cl, tạo hợp chất CaCl2",
     "Mỗi Ca nhường 2 electron cho 1 nguyên tử Cl, tạo hợp chất CaCl",
     "Không tạo được hợp chất vì Ca nhường 2 electron mà Cl chỉ nhận 1 electron",
     "Mỗi Cl nhường 1 electron cho Ca, tạo hợp chất CaCl2"
    ],
    "ma": [
     "DUNG",
     "I5",
     "I5",
     "O6"
    ],
    "dung": 0,
    "giai": "Ca → Ca²⁺ + 2e; mỗi Cl nhận 1e → Cl⁻. Một Ca²⁺ cần hai Cl⁻ để trung hoà điện tích → CaCl2 (SGK tr.52)."
   },
   {
    "muc": "H",
    "de": "Cho các ion: Na⁺, Mg²⁺, O²⁻, Cl⁻. Hai ion nào sau đây hút nhau tạo liên kết ion?",
    "chon": [
     "Mg²⁺ và O²⁻",
     "Na⁺ và Mg²⁺",
     "O²⁻ và Cl⁻",
     "Không có cặp nào, vì liên kết ion chỉ tạo thành giữa các nguyên tử"
    ],
    "ma": [
     "DUNG",
     "I4",
     "I4",
     "X"
    ],
    "dung": 0,
    "giai": "Chỉ các ion mang điện tích trái dấu mới hút nhau tạo liên kết ion (SGK tr.52, câu hỏi 4)."
   }
  ]
 },
 "cd-b11-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 11. Liên kết ion (tiết 2: tinh thể ion)",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "11",
  "loai": "truoc",
  "tiet": "Tiết 25",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Trong tinh thể sodium chloride (muối ăn), mỗi ion Na⁺ được bao quanh gần nhất bởi",
    "chon": [
     "6 ion Cl⁻",
     "1 ion Cl⁻ — chính ion đã nhận electron của nó",
     "1 ion Cl⁻, tạo thành một phân tử NaCl riêng biệt",
     "6 ion Na⁺"
    ],
    "ma": [
     "DUNG",
     "I10",
     "I7",
     "I4"
    ],
    "dung": 0,
    "giai": "Trong tinh thể NaCl, mỗi ion Na⁺ được bao quanh bởi 6 ion Cl⁻ gần nhất và ngược lại (SGK tr.53). Lực hút tĩnh điện không có hướng, nên Na⁺ hút mọi Cl⁻ xung quanh chứ không riêng ion «đã nhận electron của nó».",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Muối ăn khan (rắn) không dẫn điện, nhưng dung dịch muối ăn dẫn điện. Giải thích nào ĐÚNG?",
    "chon": [
     "Ở thể rắn các ion không di chuyển tự do; khi tan trong nước các ion chuyển động khá tự do",
     "Muối ăn rắn không chứa ion, khi tan trong nước mới tạo ra ion",
     "Muối ăn rắn vẫn dẫn điện vì có ion, nhưng yếu quá nên đèn không sáng",
     "Chỉ nước dẫn điện, muối ăn không tham gia dẫn điện"
    ],
    "ma": [
     "DUNG",
     "I11",
     "I8",
     "X"
    ],
    "dung": 0,
    "giai": "Muối ăn rắn đã gồm các ion Na⁺ và Cl⁻ nhưng chúng nằm cố định ở nút mạng; khi tan trong nước (hoặc nóng chảy), ion chuyển động khá tự do nên dẫn điện (SGK tr.54)."
   },
   {
    "muc": "B",
    "de": "Ở điều kiện thường, các hợp chất ion thường",
    "chon": [
     "là chất rắn, khó nóng chảy, khá giòn",
     "là chất lỏng hoặc chất khí",
     "mềm, dễ dát mỏng như kim loại",
     "dẫn điện ở mọi trạng thái"
    ],
    "ma": [
     "DUNG",
     "I9",
     "I9",
     "I8"
    ],
    "dung": 0,
    "giai": "Lực hút tĩnh điện giữa các ion rất mạnh nên hợp chất ion thường là chất rắn, khó nóng chảy, khó bay hơi, khá rắn chắc nhưng giòn (SGK tr.53)."
   },
   {
    "muc": "V",
    "de": "MgO nóng chảy ở 2 852 °C, cao hơn nhiều so với NaCl (801 °C). Giải thích hợp lí nhất là",
    "chon": [
     "ion Mg²⁺ và O²⁻ mang điện tích lớn hơn nên lực hút tĩnh điện giữa chúng mạnh hơn",
     "MgO có khối lượng lớn hơn NaCl",
     "trong MgO có các cặp electron dùng chung bền hơn",
     "mỗi ion Mg²⁺ chỉ hút một ion O²⁻ nên liên kết chặt hơn"
    ],
    "ma": [
     "DUNG",
     "H5",
     "I6",
     "I7"
    ],
    "dung": 0,
    "giai": "Điện tích ion càng lớn thì lực hút tĩnh điện càng mạnh, mạng tinh thể càng khó phá vỡ. Chú ý: MgO (40 g/mol) còn NHẸ hơn NaCl (58,5 g/mol), nên không phải do khối lượng. Số liệu nhiệt độ nóng chảy: SGK tr.53–54.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Trong tinh thể muối ăn, công thức NaCl cho biết",
    "chon": [
     "tỉ lệ số ion Na⁺ và số ion Cl⁻ là 1 : 1",
     "mỗi ion Na⁺ chỉ liên kết với đúng một ion Cl⁻",
     "nguyên tử Na và Cl dùng chung một cặp electron",
     "ion Na⁺ chỉ hút ion Cl⁻ đã nhận electron của nó"
    ],
    "ma": [
     "DUNG",
     "I7",
     "I6",
     "I10"
    ],
    "dung": 0,
    "giai": "Tinh thể ion là mạng lưới các ion xếp luân phiên; công thức NaCl chỉ cho biết tỉ lệ ion 1 : 1, mỗi Na⁺ thực ra có 6 Cl⁻ gần nhất (SGK tr.53)."
   }
  ]
 },
 "cd-b12-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 12. Liên kết cộng hoá trị (tiết 1)",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "12",
  "loai": "truoc",
  "tiet": "Tiết 26",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Liên kết giữa hai nguyên tử trong phân tử hydrogen chloride (HCl) là",
    "chon": [
     "liên kết cộng hoá trị: H và Cl góp chung một cặp electron",
     "liên kết ion: H nhường 1 electron cho Cl",
     "không phải liên kết cộng hoá trị, vì H và Cl là hai nguyên tố khác nhau",
     "liên kết cộng hoá trị, trong đó mỗi nguyên tử đều có 8 electron lớp ngoài cùng"
    ],
    "ma": [
     "DUNG",
     "O9",
     "C1",
     "O3"
    ],
    "dung": 0,
    "giai": "H và Cl mỗi nguyên tử góp 1 electron tạo một cặp dùng chung (liên kết đơn); H có 2 electron (như He), Cl có 8 (SGK tr.56).",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Trong phân tử oxygen (O2), số cặp electron dùng chung giữa hai nguyên tử oxygen là",
    "chon": [
     "2",
     "6",
     "4",
     "1"
    ],
    "ma": [
     "DUNG",
     "C2",
     "C2",
     "X"
    ],
    "dung": 0,
    "giai": "Mỗi nguyên tử O có 6 electron hoá trị, góp 2 electron → 2 cặp dùng chung, liên kết đôi O=O (SGK tr.57)."
   },
   {
    "muc": "H",
    "de": "Khi hai nguyên tử nitrogen (nhóm VA) liên kết tạo phân tử N2, mỗi nguyên tử nitrogen",
    "chon": [
     "góp chung 3 electron, tạo liên kết ba",
     "góp chung 5 electron, tạo 5 cặp electron dùng chung",
     "góp chung 1 electron, tạo liên kết đơn",
     "nhường 3 electron cho nguyên tử nitrogen kia"
    ],
    "ma": [
     "DUNG",
     "C2",
     "X",
     "O9"
    ],
    "dung": 0,
    "giai": "Mỗi N có 5 electron hoá trị, cần thêm 3 → mỗi N góp 3 electron, tạo 3 cặp dùng chung: N≡N (SGK tr.57)."
   },
   {
    "muc": "H",
    "de": "Ion NH4⁺ được tạo thành khi phân tử NH3 kết hợp với ion H⁺. Phát biểu nào ĐÚNG?",
    "chon": [
     "Nguyên tử N đóng góp cặp electron chưa liên kết; bốn liên kết N–H trong NH4⁺ hoàn toàn tương đương nhau",
     "Ion H⁺ đóng góp cặp electron cho nguyên tử N",
     "Liên kết cho – nhận yếu hơn hẳn ba liên kết N–H còn lại",
     "Bốn liên kết giữa N và H đều là liên kết ion"
    ],
    "ma": [
     "DUNG",
     "C3",
     "C3",
     "O9"
    ],
    "dung": 0,
    "giai": "Ion H⁺ có orbital trống, không có electron; N đóng góp cặp electron chưa liên kết (N là nguyên tử cho). Trong NH4⁺ bốn liên kết N–H hoàn toàn tương đương (SGK tr.56).",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Liên kết cộng hoá trị KHÔNG phân cực có trong phân tử",
    "chon": [
     "Cl2",
     "HCl",
     "NaCl",
     "H2O"
    ],
    "ma": [
     "DUNG",
     "C11",
     "I6",
     "C11"
    ],
    "dung": 0,
    "giai": "Trong Cl2, O2, N2… cặp electron dùng chung không bị hút lệch về nguyên tử nào → không phân cực; trong HCl cặp electron lệch về Cl → phân cực (SGK tr.57)."
   }
  ]
 },
 "cd-b12-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 12. Liên kết cộng hoá trị (tiết 2)",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "12",
  "loai": "truoc",
  "tiet": "Tiết 27",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "V",
    "de": "Cho độ âm điện: Al = 1,61; Cl = 3,16. Liên kết giữa Al và Cl trong AlCl3 là",
    "chon": [
     "liên kết cộng hoá trị phân cực",
     "liên kết ion, vì Al là kim loại còn Cl là phi kim",
     "liên kết cộng hoá trị không phân cực",
     "liên kết ion, vì tổng độ âm điện lớn hơn 1,7"
    ],
    "ma": [
     "DUNG",
     "C4",
     "C10",
     "C10"
    ],
    "dung": 0,
    "giai": "Hiệu độ âm điện |Δχ| = 3,16 − 1,61 = 1,55, nằm trong khoảng 0,4 ≤ |Δχ| < 1,7 → cộng hoá trị phân cực (Bảng 12.1, SGK tr.59). Không phải cứ kim loại – phi kim là liên kết ion.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Phân tử CO2 có cấu tạo thẳng O=C=O. Phát biểu nào ĐÚNG?",
    "chon": [
     "Liên kết C=O phân cực, nhưng toàn bộ phân tử CO2 không phân cực",
     "Liên kết C=O không phân cực vì phân tử thẳng",
     "Phân tử CO2 phân cực vì có liên kết phân cực",
     "Liên kết giữa C và O là liên kết ion"
    ],
    "ma": [
     "DUNG",
     "C6",
     "C6",
     "C4"
    ],
    "dung": 0,
    "giai": "Δχ(O, C) = 3,44 − 2,55 = 0,89 → liên kết C=O phân cực; nhưng phân tử thẳng nên độ phân cực của hai liên kết triệt tiêu nhau, phân tử không phân cực (SGK tr.59).",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Một liên kết đôi gồm",
    "chon": [
     "1 liên kết σ và 1 liên kết π",
     "2 liên kết π",
     "2 liên kết σ",
     "1 liên kết σ và 2 liên kết π"
    ],
    "ma": [
     "DUNG",
     "C7",
     "C7",
     "X"
    ],
    "dung": 0,
    "giai": "Liên kết đôi gồm 1 liên kết σ và 1 liên kết π; liên kết ba gồm 1 σ và 2 π (SGK tr.61)."
   },
   {
    "muc": "H",
    "de": "Liên kết π được tạo thành do",
    "chon": [
     "sự xen phủ bên của hai orbital",
     "sự xen phủ trục của hai orbital",
     "hai nguyên tử dùng chung hai cặp electron",
     "lực hút tĩnh điện giữa hai ion"
    ],
    "ma": [
     "DUNG",
     "C8",
     "C7",
     "X"
    ],
    "dung": 0,
    "giai": "Xen phủ theo trục liên kết tạo liên kết σ; xen phủ bên (trục orbital song song nhau, vuông góc đường nối hai hạt nhân) tạo liên kết π (SGK tr.61)."
   },
   {
    "muc": "V",
    "de": "Năng lượng liên kết (kJ/mol): H–F 569; H–Cl 432; H–Br 366; H–I 299. Phát biểu nào ĐÚNG?",
    "chon": [
     "Liên kết H–F bền nhất, phân tử HF khó bị phân huỷ nhất",
     "Liên kết H–I bền nhất vì năng lượng liên kết nhỏ nhất",
     "Khi phá vỡ 1 mol liên kết H–F thì toả ra 569 kJ",
     "Phân tử HI bền nhất vì có khối lượng lớn nhất"
    ],
    "ma": [
     "DUNG",
     "C9",
     "C12",
     "H5"
    ],
    "dung": 0,
    "giai": "Năng lượng liên kết là năng lượng CẦN để phá vỡ liên kết; càng lớn thì liên kết càng bền, phân tử càng khó phân huỷ (SGK tr.61–62, Bảng 12.2).",
    "viSao": true
   }
  ]
 },
 "cd-b12-t3": {
  "ten": "Chẩn đoán trước tiết — Bài 12. Liên kết cộng hoá trị (tiết 3: luyện tập)",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "12",
  "loai": "truoc",
  "tiet": "Tiết 28",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Phân tử ethene có công thức cấu tạo CH2=CH2. Số liên kết σ và liên kết π trong phân tử lần lượt là",
    "chon": [
     "5 và 1",
     "4 và 2",
     "6 và 0",
     "4 và 1"
    ],
    "ma": [
     "DUNG",
     "C7",
     "C7",
     "X"
    ],
    "dung": 0,
    "giai": "4 liên kết C–H (σ) + liên kết đôi C=C (1 σ + 1 π) → 5 σ và 1 π (SGK tr.61, câu hỏi 4)."
   },
   {
    "muc": "V",
    "de": "Cho độ âm điện: K = 0,82; Br = 2,96. Liên kết trong KBr là",
    "chon": [
     "liên kết ion",
     "liên kết cộng hoá trị phân cực",
     "liên kết cộng hoá trị không phân cực",
     "liên kết cho – nhận"
    ],
    "ma": [
     "DUNG",
     "C10",
     "C10",
     "C3"
    ],
    "dung": 0,
    "giai": "|Δχ| = 2,96 − 0,82 = 2,14 ≥ 1,7 → liên kết ion (Bảng 12.1, SGK tr.59)."
   },
   {
    "muc": "H",
    "de": "Trong công thức Lewis của phân tử NH3, nguyên tử N có",
    "chon": [
     "3 liên kết đơn và 1 cặp electron chưa liên kết",
     "3 liên kết đơn và không còn electron chưa liên kết",
     "5 liên kết đơn với các nguyên tử H",
     "3 liên kết đôi"
    ],
    "ma": [
     "DUNG",
     "O5",
     "O4",
     "X"
    ],
    "dung": 0,
    "giai": "N có 5 electron hoá trị: góp 3 electron tạo 3 liên kết đơn N–H, còn 1 cặp electron chưa liên kết (SGK tr.56, Hình 12.4)."
   },
   {
    "muc": "V",
    "de": "Cho độ âm điện: H = 2,20; N = 3,04; O = 3,44. Phát biểu nào ĐÚNG về liên kết O–H và N–H?",
    "chon": [
     "Cả hai đều là liên kết cộng hoá trị phân cực; liên kết O–H phân cực mạnh hơn",
     "O–H là liên kết ion vì hiệu độ âm điện lớn hơn 1",
     "N–H không phân cực vì N và H đều là phi kim",
     "Hai liên kết phân cực như nhau vì đều có nguyên tử H"
    ],
    "ma": [
     "DUNG",
     "C10",
     "C11",
     "X"
    ],
    "dung": 0,
    "giai": "Δχ(O–H) = 1,24; Δχ(N–H) = 0,84 → đều trong khoảng 0,4–1,7: cộng hoá trị phân cực; Δχ lớn hơn thì phân cực mạnh hơn (SGK tr.59).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Dãy nào gồm các chất CHỈ có liên kết cộng hoá trị?",
    "chon": [
     "HCl, CO2, NH3",
     "NaCl, HCl, H2O",
     "MgO, KCl, CaF2",
     "Na2O, CO2, N2"
    ],
    "ma": [
     "DUNG",
     "I6",
     "X",
     "C4"
    ],
    "dung": 0,
    "giai": "HCl, CO2, NH3 đều gồm các nguyên tử phi kim góp chung electron. NaCl, Na2O, MgO, KCl, CaF2 là hợp chất ion (SGK tr.52, 56–57)."
   }
  ]
 },
 "cd-b13-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 13. Liên kết hydrogen (tiết 1)",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "13",
  "loai": "truoc",
  "tiet": "Tiết 29",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Liên kết hydrogen giữa các phân tử nước là",
    "chon": [
     "lực hút giữa nguyên tử H (δ+) của phân tử nước này với cặp electron chưa liên kết của nguyên tử O ở phân tử nước khác",
     "liên kết cộng hoá trị O–H bên trong mỗi phân tử nước",
     "liên kết giữa hai nguyên tử H của hai phân tử nước",
     "liên kết ion giữa H⁺ và O²⁻"
    ],
    "ma": [
     "DUNG",
     "H1",
     "H1",
     "X"
    ],
    "dung": 0,
    "giai": "Nguyên tử H (δ+) liên kết với O hút cặp electron hoá trị chưa liên kết trên nguyên tử O của phân tử khác → liên kết hydrogen, kí hiệu bằng dấu ba chấm (SGK tr.64–65).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Giữa các phân tử của chất nào sau đây có liên kết hydrogen?",
    "chon": [
     "NH3",
     "CH4",
     "H2S",
     "H2"
    ],
    "ma": [
     "DUNG",
     "H2",
     "H2",
     "H2"
    ],
    "dung": 0,
    "giai": "Cần nguyên tử H liên kết với nguyên tử có độ âm điện lớn như F, O, N còn cặp electron chưa liên kết (SGK tr.65). C, S, H không đủ điều kiện."
   },
   {
    "muc": "V",
    "de": "Khi nước sôi ở 100 °C, điều gì xảy ra với các phân tử nước?",
    "chon": [
     "Liên kết hydrogen giữa các phân tử bị phá vỡ, các phân tử H2O vẫn nguyên vẹn",
     "Liên kết O–H trong phân tử bị phá vỡ, tạo ra khí H2 và O2",
     "Phân tử H2O tách thành nguyên tử H và O rồi kết hợp lại khi nguội",
     "Không có liên kết hay tương tác nào bị phá vỡ"
    ],
    "ma": [
     "DUNG",
     "H4",
     "H4",
     "X"
    ],
    "dung": 0,
    "giai": "Sôi là chuyển thể: các phân tử tách xa nhau, chỉ tương tác GIỮA các phân tử (liên kết hydrogen) bị phá vỡ; liên kết cộng hoá trị O–H trong phân tử không bị phá vỡ (SGK tr.64–65).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nước sôi ở 100 °C còn H2S sôi ở −60,75 °C, dù phân tử H2S nặng hơn H2O. Nguyên nhân chính là",
    "chon": [
     "giữa các phân tử H2O có liên kết hydrogen",
     "liên kết O–H trong phân tử bền hơn liên kết S–H",
     "phân tử nước nhẹ hơn nên khó sôi hơn",
     "giữa các phân tử H2S có liên kết hydrogen mạnh hơn"
    ],
    "ma": [
     "DUNG",
     "H4",
     "H5",
     "H2"
    ],
    "dung": 0,
    "giai": "Do ảnh hưởng của liên kết hydrogen, nhiệt độ nóng chảy và nhiệt độ sôi của H2O cao hơn nhiều so với H2S, CH4 (SGK tr.65, Bảng 13.1)."
   },
   {
    "muc": "H",
    "de": "So với liên kết cộng hoá trị, lực tương tác giữa các phân tử (như liên kết hydrogen)",
    "chon": [
     "yếu hơn rất nhiều",
     "mạnh hơn",
     "mạnh tương đương",
     "chính là một loại liên kết cộng hoá trị"
    ],
    "ma": [
     "DUNG",
     "H3",
     "H3",
     "H1"
    ],
    "dung": 0,
    "giai": "Lực tương tác giữa các phân tử yếu hơn rất nhiều so với lực liên kết ion, liên kết cộng hoá trị (SGK tr.64)."
   }
  ]
 },
 "cd-b13-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 13. Tương tác van der Waals (tiết 2)",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "13",
  "loai": "truoc",
  "tiet": "Tiết 30",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Tương tác van der Waals là",
    "chon": [
     "tương tác tĩnh điện lưỡng cực – lưỡng cực giữa các nguyên tử hay phân tử",
     "liên kết cộng hoá trị giữa các nguyên tử trong phân tử",
     "tương tác chỉ có giữa các phân tử phân cực",
     "lực hút giữa ion dương và ion âm"
    ],
    "ma": [
     "DUNG",
     "V2",
     "V1",
     "X"
    ],
    "dung": 0,
    "giai": "Tương tác van der Waals là tương tác tĩnh điện lưỡng cực – lưỡng cực giữa các nguyên tử hay phân tử, có cả ở chất không phân cực nhờ lưỡng cực tạm thời (SGK tr.66)."
   },
   {
    "muc": "V",
    "de": "Ở nhiệt độ thường, F2 và Cl2 là chất khí, Br2 là chất lỏng, I2 là chất rắn. Nguyên nhân là",
    "chon": [
     "số electron trong phân tử tăng nên tương tác van der Waals tăng",
     "liên kết I–I trong phân tử I2 bền nhất",
     "giữa các phân tử I2 có liên kết hydrogen",
     "phân tử càng lớn thì tương tác van der Waals càng yếu"
    ],
    "ma": [
     "DUNG",
     "V2",
     "H2",
     "V3"
    ],
    "dung": 0,
    "giai": "Trong dãy halogen, tương tác van der Waals tăng theo số electron, làm tăng nhiệt độ nóng chảy, nhiệt độ sôi (SGK tr.66–67, Bảng 13.2). Liên kết I–I (151 kJ/mol) thực ra yếu nhất trong dãy (Bảng 12.2).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Ở nhiệt độ thấp, khí hiếm neon có thể hoá lỏng. Điều đó chứng tỏ",
    "chon": [
     "giữa các nguyên tử neon có tương tác van der Waals",
     "các nguyên tử neon liên kết cộng hoá trị với nhau",
     "nguyên tử neon không phân cực nên không có tương tác nào",
     "giữa các nguyên tử neon có liên kết hydrogen"
    ],
    "ma": [
     "DUNG",
     "X",
     "V1",
     "H2"
    ],
    "dung": 0,
    "giai": "Ở nhiệt độ thấp, giữa các nguyên tử khí hiếm tồn tại tương tác yếu giữ chúng ở thể lỏng — đó là tương tác van der Waals (SGK tr.66)."
   },
   {
    "muc": "V",
    "de": "Pentane (mạch thẳng) sôi ở 36 °C, còn neopentane (mạch nhánh) sôi ở 9,5 °C, dù cùng công thức C5H12. Nguyên nhân là",
    "chon": [
     "phân tử pentane có diện tích tiếp xúc lớn hơn nên tương tác van der Waals mạnh hơn",
     "neopentane nặng hơn pentane",
     "giữa các phân tử pentane có liên kết hydrogen",
     "mạch nhánh có tương tác van der Waals mạnh hơn nên sôi ở nhiệt độ thấp hơn"
    ],
    "ma": [
     "DUNG",
     "H5",
     "H2",
     "V4"
    ],
    "dung": 0,
    "giai": "Cùng khối lượng, nhưng pentane mạch thẳng có diện tích tiếp xúc giữa các phân tử lớn hơn → cần nhiều năng lượng hơn để tách các phân tử (SGK tr.67, Hình 13.5)."
   },
   {
    "muc": "H",
    "de": "Khi đun nóng chảy iodine rắn, cái bị phá vỡ là",
    "chon": [
     "tương tác van der Waals giữa các phân tử I2",
     "liên kết cộng hoá trị I–I trong phân tử",
     "liên kết ion giữa các nguyên tử iodine",
     "liên kết hydrogen giữa các phân tử I2"
    ],
    "ma": [
     "DUNG",
     "V2",
     "X",
     "H2"
    ],
    "dung": 0,
    "giai": "Nóng chảy là chuyển thể; phân tử I2 vẫn nguyên vẹn, chỉ tương tác van der Waals giữa các phân tử bị phá vỡ (SGK tr.66)."
   }
  ]
 },
 "cd-b14": {
  "ten": "Chẩn đoán trước tiết — Bài 14. Ôn tập Chương 3",
  "chuong": 3,
  "mo": true,
  "phut": 10,
  "haiBac": true,
  "bai": "14",
  "loai": "truoc",
  "tiet": "Tiết 31–32",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Phát biểu nào ĐÚNG về liên kết ion?",
    "chon": [
     "Là lực hút tĩnh điện giữa các ion mang điện tích trái dấu",
     "Chính là quá trình chuyển electron từ nguyên tử này sang nguyên tử kia",
     "Cứ kim loại kết hợp với phi kim là tạo liên kết ion",
     "Là cặp electron dùng chung giữa kim loại và phi kim"
    ],
    "ma": [
     "DUNG",
     "I3",
     "C4",
     "I6"
    ],
    "dung": 0,
    "giai": "Sự chuyển electron chỉ tạo ra các ion; lực hút tĩnh điện giữa các ion trái dấu mới là liên kết ion (SGK tr.52). Loại liên kết dự đoán theo hiệu độ âm điện, không chỉ theo kim loại – phi kim (SGK tr.59).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho độ âm điện: H = 2,20; S = 2,58. Liên kết giữa H và S trong phân tử H2S là",
    "chon": [
     "liên kết cộng hoá trị không phân cực",
     "liên kết cộng hoá trị phân cực, vì H và S là hai nguyên tố khác nhau",
     "liên kết ion",
     "liên kết hydrogen"
    ],
    "ma": [
     "DUNG",
     "C13",
     "C10",
     "H1"
    ],
    "dung": 0,
    "giai": "|Δχ| = 2,58 − 2,20 = 0,38 < 0,4 → liên kết cộng hoá trị không phân cực (Bảng 12.1, SGK tr.59). Không phải cứ khác nguyên tố là phân cực."
   },
   {
    "muc": "H",
    "de": "Phát biểu nào ĐÚNG về tinh thể sodium chloride?",
    "chon": [
     "Mỗi ion Na⁺ được bao quanh bởi 6 ion Cl⁻ gần nhất",
     "Tinh thể gồm các phân tử NaCl riêng rẽ",
     "Tinh thể dẫn điện ở thể rắn",
     "Tinh thể có nhiệt độ nóng chảy thấp"
    ],
    "ma": [
     "DUNG",
     "I7",
     "I8",
     "I9"
    ],
    "dung": 0,
    "giai": "Xem SGK tr.53–54: mạng tinh thể ion, mỗi Na⁺ có 6 Cl⁻ gần nhất; rắn, nóng chảy ở 801 °C; chỉ dẫn điện khi nóng chảy hoặc tan trong nước."
   },
   {
    "muc": "B",
    "de": "Liên kết đôi O=O trong phân tử O2 gồm",
    "chon": [
     "1 liên kết σ và 1 liên kết π",
     "2 liên kết π",
     "2 liên kết σ",
     "1 liên kết ion và 1 liên kết cộng hoá trị"
    ],
    "ma": [
     "DUNG",
     "C7",
     "C7",
     "O9"
    ],
    "dung": 0,
    "giai": "Mọi liên kết đôi gồm 1 σ và 1 π (SGK tr.61)."
   },
   {
    "muc": "H",
    "de": "Khi đun sôi chlorine lỏng (Cl2), cái bị phá vỡ là",
    "chon": [
     "tương tác van der Waals giữa các phân tử Cl2",
     "liên kết cộng hoá trị Cl–Cl trong phân tử",
     "liên kết hydrogen giữa các phân tử Cl2",
     "liên kết ion giữa các nguyên tử chlorine"
    ],
    "ma": [
     "DUNG",
     "H4",
     "H2",
     "X"
    ],
    "dung": 0,
    "giai": "Sôi là chuyển thể: phân tử Cl2 vẫn nguyên vẹn, chỉ tương tác giữa các phân tử bị phá vỡ (SGK tr.66).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Ion Ca²⁺ (calcium có Z = 20) có cấu hình electron giống cấu hình electron của nguyên tử",
    "chon": [
     "argon (Ar)",
     "krypton (Kr)",
     "calcium (Ca)",
     "neon (Ne)"
    ],
    "ma": [
     "DUNG",
     "O7",
     "I2",
     "X"
    ],
    "dung": 0,
    "giai": "Ca (1s²2s²2p⁶3s²3p⁶4s²) nhường 2 electron → Ca²⁺: 1s²2s²2p⁶3s²3p⁶, giống Ar — khí hiếm gần Ca nhất (SGK tr.51)."
   },
   {
    "muc": "H",
    "de": "Phát biểu nào ĐÚNG?",
    "chon": [
     "Phân tử CO2 có liên kết phân cực nhưng phân tử không phân cực",
     "Phân tử có liên kết phân cực thì luôn là phân tử phân cực",
     "Liên kết C=O trong CO2 không phân cực vì phân tử thẳng",
     "CO2 là hợp chất ion"
    ],
    "ma": [
     "DUNG",
     "C6",
     "C6",
     "C4"
    ],
    "dung": 0,
    "giai": "Liên kết C=O phân cực (Δχ = 0,89) nhưng phân tử thẳng nên độ phân cực triệt tiêu (SGK tr.59)."
   },
   {
    "muc": "V",
    "de": "Trong phân tử ethanol CH3CH2OH, những nguyên tử hydrogen có thể tham gia liên kết hydrogen với phân tử khác là",
    "chon": [
     "chỉ nguyên tử H trong nhóm O–H",
     "cả 6 nguyên tử H",
     "các nguyên tử H liên kết với C",
     "không có nguyên tử H nào, vì ethanol không chứa F"
    ],
    "ma": [
     "DUNG",
     "H2",
     "H2",
     "X"
    ],
    "dung": 0,
    "giai": "Chỉ H liên kết với nguyên tử có độ âm điện lớn (O) mới đủ δ+ để tạo liên kết hydrogen; H liên kết với C thì không (SGK tr.64–66, câu hỏi 2)."
   }
  ]
 },
 "cd-b10-sau": {
  "ten": "Kiểm tra sau tiết — Bài 10. Quy tắc octet",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "10",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b10"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "H",
    "de": "Khi hai nguyên tử H kết hợp thành phân tử H2, năng lượng của hệ",
    "chon": [
     "giảm, nên phân tử H2 bền hơn hai nguyên tử H riêng rẽ",
     "tăng, vì phải tốn năng lượng để tạo liên kết",
     "không đổi; H liên kết chỉ để có đủ 8 electron",
     "giảm, vì hai nguyên tử H mang điện trái dấu hút nhau"
    ],
    "ma": [
     "DUNG",
     "O10",
     "O3",
     "O8"
    ],
    "dung": 0,
    "giai": "Phân tử H2 bền hơn và có năng lượng thấp hơn tổng năng lượng hai nguyên tử H riêng rẽ (SGK tr.60); liên kết hình thành kèm theo sự giảm năng lượng (tr.49). H đạt 2 electron như He.",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Trong phân tử methane CH4 (C liên kết với 4 nguyên tử H bằng 4 cặp electron dùng chung), xung quanh nguyên tử C có bao nhiêu electron?",
    "chon": [
     "8",
     "4",
     "16",
     "2"
    ],
    "ma": [
     "DUNG",
     "O5",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "C có 4 electron hoá trị, góp chung 4 electron với 4 H; 4 cặp dùng chung tính cho cả C → C có 8 electron."
   },
   {
    "muc": "H",
    "de": "Trong phân tử NH3, xung quanh mỗi nguyên tử hydrogen có bao nhiêu electron?",
    "chon": [
     "2",
     "8",
     "1",
     "0, vì nguyên tử N đã nhận electron của H"
    ],
    "ma": [
     "DUNG",
     "O3",
     "O5",
     "O9"
    ],
    "dung": 0,
    "giai": "Mỗi H góp chung 1 electron với N; cặp dùng chung tính cho cả hai → H có 2 electron như He."
   },
   {
    "muc": "V",
    "de": "Nguyên tử oxygen (nhóm VIA) liên kết với 2 nguyên tử hydrogen tạo phân tử H2O. Theo quy tắc octet, nguyên tử O đã",
    "chon": [
     "góp chung 2 electron, mỗi electron với một nguyên tử H",
     "góp chung 6 electron với các nguyên tử H",
     "nhường 2 electron cho các nguyên tử H",
     "nhận 2 electron từ các nguyên tử H, tạo ion O²⁻"
    ],
    "ma": [
     "DUNG",
     "O4",
     "O6",
     "O9"
    ],
    "dung": 0,
    "giai": "O có 6 electron hoá trị, cần thêm 2 → góp chung 2 electron với 2 H (SGK tr.50). Giữa hai phi kim không tạo ion.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nguyên tử aluminium (Z = 13) nhường 3 electron. Ion tạo thành có cấu hình electron giống nguyên tử",
    "chon": [
     "neon (Ne)",
     "argon (Ar)",
     "aluminium (Al)",
     "magnesium (Mg)"
    ],
    "ma": [
     "DUNG",
     "O7",
     "I2",
     "X"
    ],
    "dung": 0,
    "giai": "Al: 1s²2s²2p⁶3s²3p¹ → Al³⁺: 1s²2s²2p⁶, giống Ne — khí hiếm gần Al nhất (SGK tr.51)."
   }
  ]
 },
 "cd-b11-sau": {
  "ten": "Kiểm tra sau tiết — Bài 11. Liên kết ion",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "11",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b11-t1",
   "cd-b11-t2"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "B",
    "de": "Nguyên tử sulfur (S) nhận 2 electron. Ion tạo thành là",
    "chon": [
     "S²⁻",
     "S²⁺",
     "S⁶⁺",
     "S (vẫn trung hoà về điện)"
    ],
    "ma": [
     "DUNG",
     "I1",
     "O6",
     "X"
    ],
    "dung": 0,
    "giai": "Số đơn vị điện tích của anion bằng số electron đã nhận: S + 2e → S²⁻ (SGK tr.51)."
   },
   {
    "muc": "H",
    "de": "Ion K⁺ (potassium có Z = 19) có cấu hình electron giống nguyên tử",
    "chon": [
     "argon (Ar)",
     "krypton (Kr)",
     "potassium (K)",
     "neon (Ne)"
    ],
    "ma": [
     "DUNG",
     "O7",
     "I2",
     "X"
    ],
    "dung": 0,
    "giai": "K: …3p⁶4s¹ → K⁺: 1s²2s²2p⁶3s²3p⁶, giống Ar — khí hiếm gần K nhất (SGK tr.51–52, câu hỏi 2)."
   },
   {
    "muc": "H",
    "de": "Sau khi nguyên tử Mg nhường 2 electron cho nguyên tử O tạo ra Mg²⁺ và O²⁻, điều gì tạo nên liên kết ion trong MgO?",
    "chon": [
     "Lực hút tĩnh điện giữa ion Mg²⁺ và ion O²⁻",
     "Chính quá trình nhường – nhận 2 electron",
     "Hai cặp electron dùng chung giữa Mg và O",
     "Lực hút giữa hạt nhân Mg và hạt nhân O"
    ],
    "ma": [
     "DUNG",
     "I3",
     "I6",
     "X"
    ],
    "dung": 0,
    "giai": "Sự chuyển electron chỉ tạo ra ion; liên kết ion là lực hút tĩnh điện giữa các ion trái dấu (SGK tr.52).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Aluminium (nhóm IIIA) kết hợp với fluorine (nhóm VIIA) tạo hợp chất ion. Nhận xét nào ĐÚNG?",
    "chon": [
     "Mỗi Al nhường 3 electron cho 3 nguyên tử F, tạo hợp chất AlF3",
     "Mỗi Al nhường 3 electron cho 1 nguyên tử F, tạo hợp chất AlF",
     "Không tạo được hợp chất vì Al nhường 3 electron mà F chỉ nhận 1 electron",
     "Mỗi F nhường 1 electron cho Al, tạo hợp chất AlF3"
    ],
    "ma": [
     "DUNG",
     "I5",
     "I5",
     "O6"
    ],
    "dung": 0,
    "giai": "Al → Al³⁺ + 3e; mỗi F nhận 1e → F⁻. Một Al³⁺ cần ba F⁻ để trung hoà điện tích → AlF3."
   },
   {
    "muc": "H",
    "de": "Potassium chloride (KCl) là hợp chất ion. Phát biểu nào ĐÚNG?",
    "chon": [
     "KCl rắn không dẫn điện vì các ion không di chuyển tự do; KCl nóng chảy thì dẫn điện",
     "KCl rắn dẫn điện vì có chứa ion",
     "KCl rắn không chứa ion, khi nóng chảy mới tạo thành ion",
     "Trong tinh thể KCl, mỗi ion K⁺ chỉ liên kết với một ion Cl⁻"
    ],
    "ma": [
     "DUNG",
     "I8",
     "I11",
     "I7"
    ],
    "dung": 0,
    "giai": "Ở thể rắn các ion không di chuyển tự do nên không dẫn điện; ở trạng thái nóng chảy các ion chuyển động khá tự do nên dẫn điện (SGK tr.54).",
    "viSao": true
   }
  ]
 },
 "cd-b12-sau": {
  "ten": "Kiểm tra sau tiết — Bài 12. Liên kết cộng hoá trị",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "12",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b12-t1",
   "cd-b12-t2",
   "cd-b12-t3"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "V",
    "de": "Cho độ âm điện: H = 2,20; O = 3,44. Liên kết O–H trong phân tử nước là",
    "chon": [
     "liên kết cộng hoá trị phân cực",
     "liên kết ion, vì O nhận electron của H",
     "liên kết cộng hoá trị không phân cực, vì O và H đều là phi kim",
     "liên kết cho – nhận"
    ],
    "ma": [
     "DUNG",
     "O9",
     "C11",
     "C3"
    ],
    "dung": 0,
    "giai": "|Δχ| = 3,44 − 2,20 = 1,24, trong khoảng 0,4–1,7 → cộng hoá trị phân cực (Bảng 12.1, SGK tr.59)."
   },
   {
    "muc": "V",
    "de": "Cho độ âm điện: Mg = 1,31; Cl = 3,16. Liên kết trong MgCl2 là",
    "chon": [
     "liên kết ion",
     "liên kết cộng hoá trị phân cực",
     "liên kết cộng hoá trị không phân cực",
     "chưa xác định được, vì chỉ dựa vào kim loại – phi kim mới biết"
    ],
    "ma": [
     "DUNG",
     "C10",
     "C10",
     "C4"
    ],
    "dung": 0,
    "giai": "|Δχ| = 3,16 − 1,31 = 1,85 ≥ 1,7 → liên kết ion (Bảng 12.1, SGK tr.59).",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Liên kết ba N≡N trong phân tử nitrogen gồm",
    "chon": [
     "1 liên kết σ và 2 liên kết π",
     "3 liên kết π",
     "3 liên kết σ",
     "2 liên kết σ và 1 liên kết π"
    ],
    "ma": [
     "DUNG",
     "C7",
     "C7",
     "X"
    ],
    "dung": 0,
    "giai": "Liên kết ba gồm 1 liên kết σ và 2 liên kết π (SGK tr.61)."
   },
   {
    "muc": "V",
    "de": "Năng lượng liên kết (kJ/mol): Cl–Cl 243; Br–Br 193; I–I 151. Phát biểu nào ĐÚNG?",
    "chon": [
     "Liên kết trong Cl2 bền nhất",
     "Liên kết trong I2 bền nhất vì năng lượng liên kết nhỏ nhất",
     "Phá vỡ 1 mol liên kết Cl–Cl thì toả ra 243 kJ",
     "Liên kết trong I2 bền nhất vì phân tử nặng nhất"
    ],
    "ma": [
     "DUNG",
     "C9",
     "C12",
     "H5"
    ],
    "dung": 0,
    "giai": "Năng lượng liên kết càng lớn thì liên kết càng bền: Cl2 > Br2 > I2 (SGK tr.62, câu hỏi 6). Phá vỡ liên kết cần cung cấp năng lượng.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Trong ion NH4⁺, cặp electron của liên kết cho – nhận do",
    "chon": [
     "nguyên tử N đóng góp",
     "ion H⁺ đóng góp",
     "N và H mỗi bên góp 1 electron",
     "không có cặp electron nào, vì đó là liên kết ion"
    ],
    "ma": [
     "DUNG",
     "C3",
     "X",
     "O9"
    ],
    "dung": 0,
    "giai": "Ion H⁺ không có electron (orbital trống); nguyên tử N đóng góp cặp electron chưa liên kết (SGK tr.56)."
   }
  ]
 },
 "cd-b13-sau": {
  "ten": "Kiểm tra sau tiết — Bài 13. Liên kết hydrogen và tương tác van der Waals",
  "chuong": 3,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "13",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b13-t1",
   "cd-b13-t2"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "H",
    "de": "Giữa các phân tử của chất nào sau đây có liên kết hydrogen?",
    "chon": [
     "HF",
     "HCl",
     "CH4",
     "H2S"
    ],
    "ma": [
     "DUNG",
     "H2",
     "H2",
     "H2"
    ],
    "dung": 0,
    "giai": "H liên kết với F (độ âm điện 3,98) còn cặp electron chưa liên kết → tạo liên kết hydrogen (SGK tr.64–66)."
   },
   {
    "muc": "V",
    "de": "Khi nước đá tan thành nước lỏng, cái bị phá vỡ một phần là",
    "chon": [
     "liên kết hydrogen giữa các phân tử nước",
     "liên kết O–H trong phân tử nước",
     "liên kết ion trong nước đá",
     "cả liên kết O–H và liên kết hydrogen"
    ],
    "ma": [
     "DUNG",
     "H4",
     "X",
     "H4"
    ],
    "dung": 0,
    "giai": "Khi nước đá tan, cấu trúc tứ diện tạo bởi liên kết hydrogen bị phá vỡ một phần; phân tử H2O vẫn nguyên vẹn (SGK tr.65).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nước sôi ở 100 °C, methane (CH4) sôi ở −161,58 °C. Nguyên nhân chính là",
    "chon": [
     "giữa các phân tử H2O có liên kết hydrogen",
     "liên kết O–H bền hơn liên kết C–H",
     "phân tử H2O nặng hơn phân tử CH4",
     "giữa các phân tử CH4 có liên kết hydrogen yếu"
    ],
    "ma": [
     "DUNG",
     "H4",
     "H5",
     "H2"
    ],
    "dung": 0,
    "giai": "Nhiệt độ sôi của H2O cao hơn nhiều so với CH4 do liên kết hydrogen giữa các phân tử nước (SGK tr.65, Bảng 13.1). Khối lượng hai phân tử gần bằng nhau (18 và 16)."
   },
   {
    "muc": "V",
    "de": "Butane (mạch thẳng) và isobutane (mạch nhánh) có cùng công thức C4H10. Chất có nhiệt độ sôi cao hơn là",
    "chon": [
     "butane, vì diện tích tiếp xúc giữa các phân tử lớn hơn nên tương tác van der Waals mạnh hơn",
     "isobutane, vì mạch nhánh có tương tác van der Waals mạnh hơn",
     "bằng nhau, vì cùng khối lượng phân tử",
     "butane, vì giữa các phân tử butane có liên kết hydrogen"
    ],
    "ma": [
     "DUNG",
     "V4",
     "H5",
     "H2"
    ],
    "dung": 0,
    "giai": "Giống pentane và neopentane: mạch thẳng có diện tích tiếp xúc lớn hơn → tương tác van der Waals mạnh hơn → sôi ở nhiệt độ cao hơn (SGK tr.67, câu hỏi 3).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Tương tác van der Waals có giữa",
    "chon": [
     "các phân tử và nguyên tử nói chung, kể cả phân tử không phân cực và nguyên tử khí hiếm",
     "chỉ các phân tử phân cực",
     "chỉ các phân tử có H liên kết với F, O, N",
     "chỉ các ion trái dấu"
    ],
    "ma": [
     "DUNG",
     "V1",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Cả nguyên tử khí hiếm và phân tử không phân cực cũng tạo được lưỡng cực tạm thời, nên đều có tương tác van der Waals (SGK tr.66)."
   }
  ]
 },
 "cd-b15-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 15. Phản ứng oxi hoá – khử (tiết 1: số oxi hoá)",
  "chuong": 4,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "15",
  "loai": "truoc",
  "tiet": "Tiết 33",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Số oxi hoá của nguyên tử chlorine trong đơn chất Cl2 là",
    "chon": [
     "0",
     "−1",
     "+1",
     "1 (hoá trị I)"
    ],
    "ma": [
     "DUNG",
     "K2",
     "K2",
     "K1"
    ],
    "dung": 0,
    "giai": "Quy tắc 1: trong đơn chất, số oxi hoá của nguyên tử bằng 0 (SGK tr.72). Hai nguyên tử Cl giống nhau, electron liên kết không lệch về bên nào."
   },
   {
    "muc": "H",
    "de": "Số oxi hoá của sulfur trong SO2 là",
    "chon": [
     "+4",
     "+2",
     "−4",
     "−2"
    ],
    "ma": [
     "DUNG",
     "K3",
     "K1",
     "X"
    ],
    "dung": 0,
    "giai": "O có số oxi hoá −2; tổng số oxi hoá trong phân tử bằng 0: x + 2·(−2) = 0 → x = +4 (quy tắc 2, 3 — SGK tr.72).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Số oxi hoá của nitrogen trong ion NH4⁺ là",
    "chon": [
     "−3",
     "−4",
     "+3",
     "+5"
    ],
    "ma": [
     "DUNG",
     "K3",
     "K1",
     "X"
    ],
    "dung": 0,
    "giai": "Trong ion đa nguyên tử, tổng số oxi hoá bằng điện tích ion: x + 4·(+1) = +1 → x = −3 (quy tắc 4, ví dụ NH4⁺ SGK tr.72)."
   },
   {
    "muc": "H",
    "de": "Số oxi hoá là",
    "chon": [
     "điện tích quy ước của nguyên tử trong phân tử, khi coi các electron liên kết chuyển hẳn về nguyên tử có độ âm điện lớn hơn",
     "hoá trị của nguyên tố trong hợp chất",
     "điện tích thật mà mọi nguyên tử mang trong phân tử",
     "số electron lớp ngoài cùng của nguyên tử"
    ],
    "ma": [
     "DUNG",
     "K1",
     "K4",
     "X"
    ],
    "dung": 0,
    "giai": "Số oxi hoá là điện tích QUY ƯỚC (SGK tr.71); nó có dấu (+, −), khác hoá trị. Trong H2O, H không thật sự mang điện +1, ta chỉ quy ước như vậy.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Số oxi hoá của iron trong Fe2O3 và trong FeO lần lượt là",
    "chon": [
     "+3 và +2",
     "+6 và +2",
     "−3 và −2",
     "+2 và +3"
    ],
    "ma": [
     "DUNG",
     "K3",
     "K1",
     "X"
    ],
    "dung": 0,
    "giai": "Fe2O3: 2x + 3·(−2) = 0 → x = +3; FeO: x + (−2) = 0 → x = +2 (SGK tr.72, câu hỏi 1). Nhớ chia cho chỉ số 2 của Fe."
   }
  ]
 },
 "cd-b15-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 15. Phản ứng oxi hoá – khử (tiết 2: chất oxi hoá, chất khử)",
  "chuong": 4,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "15",
  "loai": "truoc",
  "tiet": "Tiết 34",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Chất khử là chất",
    "chon": [
     "nhường electron",
     "nhận electron",
     "có chứa oxygen",
     "bị khử trong phản ứng"
    ],
    "ma": [
     "DUNG",
     "K5",
     "K6",
     "K7"
    ],
    "dung": 0,
    "giai": "Chất khử là chất nhường electron (số oxi hoá tăng), chất oxi hoá là chất nhận electron (SGK tr.73). Chất khử «bị oxi hoá», không phải «bị khử»."
   },
   {
    "muc": "H",
    "de": "Cho đinh sắt vào dung dịch H2SO4 loãng: Fe + H2SO4 → FeSO4 + H2. Quá trình oxi hoá là",
    "chon": [
     "Fe⁰ → Fe⁺² + 2e",
     "2H⁺¹ + 2e → H2⁰",
     "Fe⁰ + 2e → Fe⁺²",
     "S⁺⁶ + 2e → S⁺⁴"
    ],
    "ma": [
     "DUNG",
     "K7",
     "K8",
     "X"
    ],
    "dung": 0,
    "giai": "Quá trình oxi hoá là quá trình chất khử NHƯỜNG electron: Fe → Fe⁺² + 2e; còn 2H⁺¹ + 2e → H2 là quá trình khử (SGK tr.73, thí nghiệm 2). S giữ nguyên +6.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Phản ứng nào sau đây là phản ứng oxi hoá – khử?",
    "chon": [
     "Mg + 2HCl → MgCl2 + H2",
     "CaCO3 + 2HCl → CaCl2 + CO2 + H2O",
     "AgNO3 + NaCl → AgCl + NaNO3",
     "CaO + CO2 → CaCO3"
    ],
    "ma": [
     "DUNG",
     "K9",
     "K9",
     "K6"
    ],
    "dung": 0,
    "giai": "Mg: 0 → +2, H: +1 → 0 → có thay đổi số oxi hoá. Ba phản ứng còn lại có khí, kết tủa hay có oxygen nhưng không nguyên tử nào đổi số oxi hoá (dấu hiệu nhận biết — SGK tr.74)."
   },
   {
    "muc": "H",
    "de": "Đưa than nóng đỏ vào bình khí oxygen: C + O2 → CO2. Chất oxi hoá là",
    "chon": [
     "O2",
     "C",
     "CO2",
     "cả C và O2, vì cùng tham gia phản ứng"
    ],
    "ma": [
     "DUNG",
     "K5",
     "K10",
     "X"
    ],
    "dung": 0,
    "giai": "C nhường 4 electron (0 → +4) là chất khử; O2 nhận 4 electron (0 → −2) là chất oxi hoá (SGK tr.72–73, ví dụ 1). Chất oxi hoá, chất khử là CHẤT PHẢN ỨNG, không phải sản phẩm.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Lập phương trình hoá học Mg + O2 → MgO theo phương pháp thăng bằng electron (hệ số nguyên, tối giản). Hệ số của O2 là",
    "chon": [
     "1",
     "2",
     "4",
     "3"
    ],
    "ma": [
     "DUNG",
     "K11",
     "K11",
     "X"
    ],
    "dung": 0,
    "giai": "Mg → Mg⁺² + 2e (×2); O2 + 4e → 2O⁻² (×1) → 2Mg + O2 → 2MgO. Mỗi phân tử O2 có 2 nguyên tử nên nhận 4 electron."
   }
  ]
 },
 "cd-b15-t3": {
  "ten": "Chẩn đoán trước tiết — Bài 15. Phản ứng oxi hoá – khử (tiết 3: lập phương trình, thực tiễn)",
  "chuong": 4,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "15",
  "loai": "truoc",
  "tiet": "Tiết 35",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Nguyên tắc của phương pháp thăng bằng electron là",
    "chon": [
     "tổng số electron chất khử nhường bằng tổng số electron chất oxi hoá nhận",
     "số nguyên tử của chất khử bằng số nguyên tử của chất oxi hoá",
     "chất khử nhường nhiều electron hơn số electron chất oxi hoá nhận",
     "số oxi hoá của chất khử bằng số oxi hoá của chất oxi hoá"
    ],
    "ma": [
     "DUNG",
     "K11",
     "K11",
     "X"
    ],
    "dung": 0,
    "giai": "Nguyên tắc: tổng số electron chất khử nhường = tổng số electron chất oxi hoá nhận (SGK tr.74)."
   },
   {
    "muc": "V",
    "de": "Lập phương trình hoá học NH3 + O2 → N2 + H2O theo phương pháp thăng bằng electron (hệ số nguyên, tối giản). Hệ số của O2 là",
    "chon": [
     "3",
     "2",
     "6",
     "5"
    ],
    "ma": [
     "DUNG",
     "K11",
     "K11",
     "X"
    ],
    "dung": 0,
    "giai": "2N⁻³ → N2⁰ + 6e (×2); O2 + 4e → 2O⁻² (×3) → 4NH3 + 3O2 → 2N2 + 6H2O. Tổng electron nhường (12) = nhận (12).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Sắt để lâu trong không khí ẩm bị gỉ: 4Fe + 3O2 + xH2O → 2Fe2O3.xH2O. Nhận xét nào ĐÚNG?",
    "chon": [
     "Fe là chất khử, O2 là chất oxi hoá",
     "Fe là chất oxi hoá vì Fe bị gỉ",
     "H2O là chất oxi hoá",
     "Không phải phản ứng oxi hoá – khử vì không có ion nào được tạo ra"
    ],
    "ma": [
     "DUNG",
     "K5",
     "X",
     "K13"
    ],
    "dung": 0,
    "giai": "Fe: 0 → +3 (nhường electron, chất khử); O: 0 → −2 (O2 nhận electron, chất oxi hoá); H, O trong H2O không đổi số oxi hoá (SGK tr.75, sự han gỉ kim loại).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Phản ứng nhiệt nhôm: Al + Fe2O3 → Al2O3 + Fe. Chất oxi hoá và tổng hệ số (nguyên, tối giản) của phương trình là",
    "chon": [
     "Fe2O3; tổng hệ số 6",
     "Al; tổng hệ số 6",
     "Fe2O3; tổng hệ số 4",
     "Al2O3; tổng hệ số 6"
    ],
    "ma": [
     "DUNG",
     "K5",
     "K11",
     "K10"
    ],
    "dung": 0,
    "giai": "Al → Al⁺³ + 3e (×2); Fe2⁺³ + 6e → 2Fe⁰ (×1) → 2Al + Fe2O3 → Al2O3 + 2Fe; tổng 2 + 1 + 1 + 2 = 6. Fe⁺³ nhận electron → Fe2O3 là chất oxi hoá."
   },
   {
    "muc": "V",
    "de": "Cho 2,4 gam Mg tác dụng hết với dung dịch HCl dư (Mg = 24). Số mol electron mà Mg đã nhường là",
    "chon": [
     "0,2 mol",
     "0,1 mol",
     "0,05 mol",
     "0,4 mol"
    ],
    "ma": [
     "DUNG",
     "K12",
     "K12",
     "X"
    ],
    "dung": 0,
    "giai": "n(Mg) = 2,4 : 24 = 0,1 mol; Mg → Mg⁺² + 2e → n(e) = 2 × 0,1 = 0,2 mol.",
    "viSao": true
   }
  ]
 },
 "cd-b16": {
  "ten": "Chẩn đoán trước tiết — Bài 16. Ôn tập Chương 4",
  "chuong": 4,
  "mo": true,
  "phut": 10,
  "haiBac": true,
  "bai": "16",
  "loai": "truoc",
  "tiet": "Tiết 36",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Quá trình khử là quá trình",
    "chon": [
     "chất oxi hoá nhận electron",
     "chất khử nhường electron",
     "chất khử nhận electron",
     "chất oxi hoá nhường electron"
    ],
    "ma": [
     "DUNG",
     "K7",
     "K5",
     "K5"
    ],
    "dung": 0,
    "giai": "Quá trình oxi hoá: chất khử nhường electron; quá trình khử: chất oxi hoá nhận electron (SGK tr.73)."
   },
   {
    "muc": "H",
    "de": "Số oxi hoá của manganese trong MnO2 là",
    "chon": [
     "+4",
     "+2",
     "−4",
     "+7"
    ],
    "ma": [
     "DUNG",
     "K3",
     "K1",
     "X"
    ],
    "dung": 0,
    "giai": "x + 2·(−2) = 0 → x = +4."
   },
   {
    "muc": "H",
    "de": "Trong phản ứng Ca + 2H2O → Ca(OH)2 + H2, chất oxi hoá là",
    "chon": [
     "H2O",
     "Ca",
     "Ca(OH)2",
     "H2"
    ],
    "ma": [
     "DUNG",
     "K5",
     "K10",
     "K10"
    ],
    "dung": 0,
    "giai": "Ca: 0 → +2 (chất khử); H: +1 (trong H2O) → 0 (trong H2) → H2O nhận electron, là chất oxi hoá.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Cho nước chlorine vào dung dịch KI: Cl2 + 2KI → 2KCl + I2. Chất bị oxi hoá là",
    "chon": [
     "KI",
     "Cl2",
     "KCl",
     "I2"
    ],
    "ma": [
     "DUNG",
     "K7",
     "K10",
     "K10"
    ],
    "dung": 0,
    "giai": "I: −1 → 0, nhường electron → KI là chất khử, «bị oxi hoá»; Cl2 nhận electron, bị khử."
   },
   {
    "muc": "V",
    "de": "Lập phương trình hoá học P + O2 → P2O5 theo phương pháp thăng bằng electron (hệ số nguyên, tối giản). Tổng hệ số của các chất là",
    "chon": [
     "11",
     "7",
     "9",
     "5"
    ],
    "ma": [
     "DUNG",
     "K11",
     "K11",
     "X"
    ],
    "dung": 0,
    "giai": "P → P⁺⁵ + 5e (×4); O2 + 4e → 2O⁻² (×5) → 4P + 5O2 → 2P2O5; tổng 4 + 5 + 2 = 11.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Phản ứng nào sau đây là phản ứng oxi hoá – khử?",
    "chon": [
     "Fe + S → FeS (đun nóng)",
     "SO3 + H2O → H2SO4",
     "BaCl2 + H2SO4 → BaSO4 + 2HCl",
     "Na2CO3 + 2HCl → 2NaCl + CO2 + H2O"
    ],
    "ma": [
     "DUNG",
     "K6",
     "K9",
     "K9"
    ],
    "dung": 0,
    "giai": "Fe: 0 → +2, S: 0 → −2 → có thay đổi số oxi hoá. Ba phản ứng còn lại không có nguyên tử nào đổi số oxi hoá."
   },
   {
    "muc": "V",
    "de": "Cho phản ứng Cu + 4HNO3 (đặc) → Cu(NO3)2 + 2NO2 + 2H2O. Số phân tử HNO3 đóng vai trò chất oxi hoá là",
    "chon": [
     "2",
     "4",
     "1",
     "6"
    ],
    "ma": [
     "DUNG",
     "K14",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Cu → Cu⁺² + 2e (×1); N⁺⁵ + 1e → N⁺⁴ (×2). Chỉ 2 phân tử HNO3 bị khử thành NO2; 2 phân tử còn lại tạo muối Cu(NO3)2, N giữ nguyên +5.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho 6,5 gam Zn tác dụng hết với dung dịch HCl dư (Zn = 65). Số mol electron mà Zn đã nhường là",
    "chon": [
     "0,2 mol",
     "0,1 mol",
     "0,05 mol",
     "0,4 mol"
    ],
    "ma": [
     "DUNG",
     "K12",
     "K12",
     "X"
    ],
    "dung": 0,
    "giai": "n(Zn) = 6,5 : 65 = 0,1 mol; Zn → Zn⁺² + 2e → n(e) = 0,2 mol."
   }
  ]
 },
 "cd-b15-sau": {
  "ten": "Kiểm tra sau tiết — Bài 15. Phản ứng oxi hoá – khử",
  "chuong": 4,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "15",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b15-t1",
   "cd-b15-t2",
   "cd-b15-t3"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "H",
    "de": "Số oxi hoá của chlorine trong HClO4 là",
    "chon": [
     "+7",
     "+8",
     "−7",
     "−1"
    ],
    "ma": [
     "DUNG",
     "K3",
     "K1",
     "X"
    ],
    "dung": 0,
    "giai": "(+1) + x + 4·(−2) = 0 → x = +7. Nhớ tính cả số oxi hoá +1 của H."
   },
   {
    "muc": "B",
    "de": "Số oxi hoá của oxygen trong đơn chất O2 là",
    "chon": [
     "0",
     "−2",
     "+2",
     "2 (hoá trị II)"
    ],
    "ma": [
     "DUNG",
     "K2",
     "K2",
     "K1"
    ],
    "dung": 0,
    "giai": "Trong đơn chất, số oxi hoá của nguyên tử bằng 0; −2 là số oxi hoá thường gặp của O trong HỢP CHẤT (SGK tr.72)."
   },
   {
    "muc": "H",
    "de": "Ngâm lá kẽm trong dung dịch CuSO4: Zn + CuSO4 → ZnSO4 + Cu. Nhận xét nào ĐÚNG?",
    "chon": [
     "Zn là chất khử, CuSO4 là chất oxi hoá",
     "Zn là chất oxi hoá vì số oxi hoá của Zn tăng",
     "CuSO4 là chất khử vì có chứa oxygen",
     "Cu là chất oxi hoá"
    ],
    "ma": [
     "DUNG",
     "K8",
     "K6",
     "K10"
    ],
    "dung": 0,
    "giai": "Zn: 0 → +2, nhường electron (chất khử); Cu: +2 → 0, nhận electron → CuSO4 là chất oxi hoá. Số oxi hoá tăng ⇔ nhường electron.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Phản ứng nào sau đây KHÔNG phải là phản ứng oxi hoá – khử?",
    "chon": [
     "NaOH + HCl → NaCl + H2O",
     "2H2 + O2 → 2H2O",
     "2KClO3 → 2KCl + 3O2 (đun nóng)",
     "Cl2 + 2NaBr → 2NaCl + Br2"
    ],
    "ma": [
     "DUNG",
     "K13",
     "K13",
     "K13"
    ],
    "dung": 0,
    "giai": "Phản ứng trung hoà không có nguyên tử nào đổi số oxi hoá. Phản ứng giữa hai phi kim (H2 với O2) hay phản ứng phân huỷ (KClO3) vẫn là oxi hoá – khử vì có thay đổi số oxi hoá.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Lập phương trình hoá học Al + Cl2 → AlCl3 theo phương pháp thăng bằng electron (hệ số nguyên, tối giản). Hệ số của Cl2 là",
    "chon": [
     "3",
     "1",
     "6",
     "2"
    ],
    "ma": [
     "DUNG",
     "K11",
     "K11",
     "X"
    ],
    "dung": 0,
    "giai": "Al → Al⁺³ + 3e (×2); Cl2 + 2e → 2Cl⁻ (×3) → 2Al + 3Cl2 → 2AlCl3. Mỗi phân tử Cl2 nhận 2 electron."
   }
  ]
 },
 "cd-b17-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 17. Biến thiên enthalpy (tiết 1: phản ứng toả nhiệt, thu nhiệt)",
  "chuong": 5,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "17",
  "loai": "truoc",
  "tiet": "Tiết 37",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Phản ứng toả nhiệt là phản ứng",
    "chon": [
     "giải phóng năng lượng dưới dạng nhiệt",
     "hấp thụ năng lượng dưới dạng nhiệt",
     "phải đun nóng liên tục mới xảy ra",
     "làm nhiệt độ môi trường xung quanh giảm xuống"
    ],
    "ma": [
     "DUNG",
     "E1",
     "E2",
     "E3"
    ],
    "dung": 0,
    "giai": "Phản ứng toả nhiệt giải phóng năng lượng dưới dạng nhiệt ra môi trường nên môi trường nóng lên; phản ứng thu nhiệt hấp thụ nhiệt (SGK Bài 17)."
   },
   {
    "muc": "H",
    "de": "Thả viên sủi vitamin C vào cốc nước, khi viên sủi tan thấy nước trong cốc mát hơn. Quá trình xảy ra là",
    "chon": [
     "thu nhiệt, vì đã lấy nhiệt của nước trong cốc",
     "toả nhiệt, vì cốc nước mát hơn",
     "toả nhiệt, vì có khí sủi bọt thoát ra",
     "không trao đổi nhiệt, nước mát là do khí thoát ra vốn lạnh"
    ],
    "ma": [
     "DUNG",
     "E3",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Nước mát đi là do quá trình hấp thụ nhiệt của môi trường (nước) → quá trình thu nhiệt (ví dụ SGK Bài 17). Toả nhiệt thì môi trường phải nóng lên.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Khi nung vôi, người ta đốt than để cung cấp nhiệt cho đá vôi phân huỷ. Phản ứng đốt than và phản ứng phân huỷ đá vôi lần lượt là",
    "chon": [
     "toả nhiệt và thu nhiệt",
     "thu nhiệt và toả nhiệt",
     "đều toả nhiệt, vì đều xảy ra trong lò nóng",
     "đều thu nhiệt, vì đều cần lửa"
    ],
    "ma": [
     "DUNG",
     "E1",
     "E3",
     "E2"
    ],
    "dung": 0,
    "giai": "Than cháy giải phóng nhiệt (toả nhiệt); đá vôi phải nhận nhiệt liên tục mới phân huỷ (thu nhiệt) — ví dụ nung vôi SGK Bài 17."
   },
   {
    "muc": "H",
    "de": "Cồn trong đèn cồn phải được châm lửa mới cháy. Phản ứng cháy của cồn là",
    "chon": [
     "phản ứng toả nhiệt; châm lửa chỉ để khơi mào phản ứng",
     "phản ứng thu nhiệt, vì phải lấy nhiệt từ que diêm",
     "phản ứng thu nhiệt, vì cồn bay hơi làm mát tay",
     "không toả, không thu nhiệt"
    ],
    "ma": [
     "DUNG",
     "E2",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Sau khi châm, cồn tự cháy tiếp và toả rất nhiều nhiệt → phản ứng toả nhiệt. Nhiệt ban đầu chỉ để khơi mào; phản ứng thu nhiệt thì phải cấp nhiệt liên tục (SGK Bài 17, Em có biết: đốt nhiên liệu toả nhiều nhiệt).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Trộn 50 mL dung dịch HCl 0,5 M với 50 mL dung dịch NaOH 0,5 M, nhiệt độ tăng thêm khoảng 3 °C. Nếu thay bằng các dung dịch HCl 0,25 M và NaOH 0,25 M (thể tích như cũ) thì nhiệt độ",
    "chon": [
     "tăng ít hơn, vì lượng chất phản ứng ít hơn nên nhiệt toả ra ít hơn",
     "tăng nhiều hơn, vì dung dịch loãng phản ứng dễ hơn",
     "tăng đúng 3 °C như cũ, vì vẫn là cùng một phản ứng",
     "giảm xuống, vì phản ứng chuyển thành thu nhiệt"
    ],
    "ma": [
     "DUNG",
     "E13",
     "E13",
     "E1"
    ],
    "dung": 0,
    "giai": "Nhiệt toả ra tỉ lệ với số mol chất phản ứng; dung dịch loãng hơn (cùng thể tích) chứa ít mol hơn → nhiệt độ tăng ít hơn (thí nghiệm phản ứng trung hoà, SGK Bài 17)."
   }
  ]
 },
 "cd-b17-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 17. Biến thiên enthalpy (tiết 2: ΔrH, phương trình nhiệt hoá học)",
  "chuong": 5,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "17",
  "loai": "truoc",
  "tiet": "Tiết 38",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Phản ứng thu nhiệt có biến thiên enthalpy",
    "chon": [
     "ΔrH > 0",
     "ΔrH < 0",
     "ΔrH = 0",
     "ΔrH > 0 hay < 0 tuỳ vào lượng chất đem phản ứng"
    ],
    "ma": [
     "DUNG",
     "E1",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "ΔrH > 0: phản ứng thu nhiệt; ΔrH < 0: phản ứng toả nhiệt (SGK Bài 17)."
   },
   {
    "muc": "B",
    "de": "Điều kiện chuẩn để xác định biến thiên enthalpy chuẩn là",
    "chon": [
     "áp suất 1 bar (chất khí), nồng độ 1 mol/L (chất tan), nhiệt độ thường chọn 25 °C (298 K)",
     "áp suất 1 atm, nhiệt độ 0 °C (273 K)",
     "áp suất 1 bar, nhiệt độ 0 °C (273 K)",
     "áp suất 1 bar, nồng độ 1 mol/L, nhiệt độ 100 °C"
    ],
    "ma": [
     "DUNG",
     "E12",
     "E12",
     "X"
    ],
    "dung": 0,
    "giai": "Điều kiện chuẩn: 1 bar (khí), 1 mol/L (chất tan), thường chọn 25 °C = 298 K (SGK Bài 17). «0 °C, 1 atm» là đktc cũ, không dùng ở đây."
   },
   {
    "muc": "H",
    "de": "Cho phương trình nhiệt hoá học: 2H2(g) + O2(g) → 2H2O(l)   ΔrH = −571,6 kJ. Nhận xét nào ĐÚNG?",
    "chon": [
     "Tạo thành 2 mol H2O lỏng thì toả ra 571,6 kJ",
     "Phản ứng thu vào 571,6 kJ",
     "Tạo thành 1 mol H2O lỏng thì toả ra 571,6 kJ",
     "Nếu nước tạo thành ở thể hơi, ΔrH vẫn là −571,6 kJ"
    ],
    "ma": [
     "DUNG",
     "E1",
     "E7",
     "E10"
    ],
    "dung": 0,
    "giai": "ΔrH ứng với đúng số mol theo hệ số và đúng trạng thái ghi trong phương trình: 2 mol H2O(l) → toả 571,6 kJ (ví dụ 1, SGK Bài 17). Đổi trạng thái chất thì ΔrH đổi.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "CH4(g) + 2O2(g) → CO2(g) + 2H2O(l)  ΔrH = −890 kJ;  CH3OH(l) + 3/2O2(g) → CO2(g) + 2H2O(l)  ΔrH = −726 kJ. Đốt cháy 1 mol mỗi chất, chất toả ra nhiều nhiệt hơn là",
    "chon": [
     "CH4",
     "CH3OH, vì −726 lớn hơn −890",
     "như nhau, vì cùng tạo CO2 và H2O",
     "CH3OH, vì có khối lượng mol lớn hơn"
    ],
    "ma": [
     "DUNG",
     "E14",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Giá trị tuyệt đối của ΔrH càng lớn thì nhiệt toả ra càng nhiều: |−890| > |−726| → đốt CH4 toả nhiều hơn (SGK Bài 17)."
   },
   {
    "muc": "V",
    "de": "Cho CO(g) + 1/2O2(g) → CO2(g)   ΔrH = −283,0 kJ. Đốt cháy hoàn toàn 4,958 L khí CO (điều kiện chuẩn) thì nhiệt lượng toả ra là",
    "chon": [
     "56,6 kJ",
     "283,0 kJ",
     "28,3 kJ",
     "113,2 kJ"
    ],
    "ma": [
     "DUNG",
     "E13",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "n(CO) = 4,958 : 24,79 = 0,2 mol; 1 mol CO toả 283,0 kJ → 0,2 mol toả 0,2 × 283,0 = 56,6 kJ. Nhiệt lượng tỉ lệ với lượng chất.",
    "viSao": true
   }
  ]
 },
 "cd-b17-t3": {
  "ten": "Chẩn đoán trước tiết — Bài 17. Biến thiên enthalpy (tiết 3: nhiệt tạo thành)",
  "chuong": 5,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "17",
  "loai": "truoc",
  "tiet": "Tiết 39",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Nhiệt tạo thành chuẩn của khí oxygen O2(g) là",
    "chon": [
     "0 kJ/mol",
     "+494 kJ/mol (bằng năng lượng liên kết O=O)",
     "−285,8 kJ/mol",
     "không có giá trị, vì O2 là đơn chất"
    ],
    "ma": [
     "DUNG",
     "E5",
     "X",
     "E5"
    ],
    "dung": 0,
    "giai": "Nhiệt tạo thành chuẩn của đơn chất ở dạng bền vững nhất bằng 0, ví dụ O2(g) = 0 kJ/mol (SGK Bài 17)."
   },
   {
    "muc": "H",
    "de": "Nhiệt tạo thành (ΔfH) của một chất là biến thiên enthalpy của phản ứng tạo thành",
    "chon": [
     "1 mol chất đó từ các đơn chất ở dạng bền vững nhất",
     "1 mol chất đó từ các đơn chất ở dạng bất kì (kim cương hay graphite đều được)",
     "1 gam chất đó từ các đơn chất",
     "1 mol chất đó từ bất kì chất nào"
    ],
    "ma": [
     "DUNG",
     "E5",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Định nghĩa SGK Bài 17: tạo thành 1 mol chất từ các đơn chất ở dạng BỀN VỮNG NHẤT. Với carbon, dạng bền là graphite.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Dùng Bảng 17.1: ΔfH(CaCO3, s) = −1 206,9; ΔfH(CaO, s) = −635,1; ΔfH(CO2, g) = −393,5 (kJ/mol). Biến thiên enthalpy chuẩn của phản ứng CaCO3(s) → CaO(s) + CO2(g) là",
    "chon": [
     "+178,3 kJ",
     "−178,3 kJ",
     "−2 235,5 kJ",
     "−1 028,6 kJ"
    ],
    "ma": [
     "DUNG",
     "E6",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "ΔrH = ΣΔfH(sp) − ΣΔfH(cđ) = (−635,1 − 393,5) − (−1 206,9) = +178,3 kJ → phản ứng thu nhiệt (nung vôi)."
   },
   {
    "muc": "V",
    "de": "Dùng Bảng 17.1: ΔfH(CH4, g) = −74,9; ΔfH(CO2, g) = −393,5; ΔfH(H2O, l) = −285,8 (kJ/mol). Biến thiên enthalpy chuẩn của phản ứng CH4(g) + 2O2(g) → CO2(g) + 2H2O(l) là",
    "chon": [
     "−890,2 kJ",
     "−604,4 kJ",
     "+890,2 kJ",
     "−1 040,0 kJ"
    ],
    "ma": [
     "DUNG",
     "E7",
     "E6",
     "X"
    ],
    "dung": 0,
    "giai": "ΔrH = [−393,5 + 2·(−285,8)] − [−74,9 + 2·0] = −965,1 + 74,9 = −890,2 kJ. Nhớ nhân 2 cho H2O; ΔfH(O2) = 0.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Cho C(kim cương) → C(graphite)   ΔrH = −1,9 kJ. Nhận xét nào ĐÚNG?",
    "chon": [
     "Graphite có mức năng lượng thấp hơn nên bền hơn kim cương",
     "Kim cương có mức năng lượng thấp hơn vì rất cứng",
     "Kim cương bền hơn graphite vì phản ứng toả nhiệt",
     "Hai dạng có năng lượng bằng nhau vì đều là carbon"
    ],
    "ma": [
     "DUNG",
     "E11",
     "E11",
     "X"
    ],
    "dung": 0,
    "giai": "Chuyển kim cương → graphite toả nhiệt nên graphite ở mức năng lượng thấp hơn, bền hơn. Vì vậy C(graphite) là dạng bền dùng khi tính nhiệt tạo thành (SGK Bài 17, câu hỏi 5)."
   }
  ]
 },
 "cd-b17-t4": {
  "ten": "Chẩn đoán trước tiết — Bài 17. Biến thiên enthalpy (tiết 4: năng lượng liên kết)",
  "chuong": 5,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "17",
  "loai": "truoc",
  "tiet": "Tiết 40",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Trong phản ứng hoá học, nhận xét nào ĐÚNG?",
    "chon": [
     "Phá vỡ liên kết cần cung cấp năng lượng, hình thành liên kết giải phóng năng lượng",
     "Phá vỡ liên kết giải phóng năng lượng, hình thành liên kết cần cung cấp năng lượng",
     "Phá vỡ và hình thành liên kết đều cần cung cấp năng lượng",
     "Phá vỡ và hình thành liên kết đều giải phóng năng lượng"
    ],
    "ma": [
     "DUNG",
     "C12",
     "E4",
     "C12"
    ],
    "dung": 0,
    "giai": "SGK Bài 17: sự phá vỡ liên kết cần cung cấp năng lượng, sự hình thành liên kết lại giải phóng năng lượng."
   },
   {
    "muc": "H",
    "de": "Với phản ứng mà các chất đều ở thể khí, biến thiên enthalpy tính theo năng lượng liên kết là",
    "chon": [
     "ΔrH = ΣEb(chất đầu) − ΣEb(sản phẩm)",
     "ΔrH = ΣEb(sản phẩm) − ΣEb(chất đầu)",
     "ΔrH = ΣEb(chất đầu) + ΣEb(sản phẩm)",
     "ΔrH = Eb của một phân tử chất đầu − Eb của một phân tử sản phẩm, không cần nhân hệ số"
    ],
    "ma": [
     "DUNG",
     "E8",
     "X",
     "E7"
    ],
    "dung": 0,
    "giai": "ΔrH = ΣEb(cđ) − ΣEb(sp) (SGK Bài 17) — ngược thứ tự so với công thức tính theo nhiệt tạo thành; phải nhân hệ số và số liên kết trong mỗi phân tử."
   },
   {
    "muc": "V",
    "de": "Cho Eb(H–H) = 436, Eb(O=O) = 494, Eb(O–H) = 459 (kJ/mol). Biến thiên enthalpy của phản ứng 2H2(g) + O2(g) → 2H2O(g) là",
    "chon": [
     "−470 kJ",
     "+470 kJ",
     "+448 kJ",
     "+12 kJ"
    ],
    "ma": [
     "DUNG",
     "E8",
     "E9",
     "E7"
    ],
    "dung": 0,
    "giai": "ΣEb(cđ) = 2·436 + 494 = 1 366; mỗi H2O có 2 liên kết O–H → ΣEb(sp) = 2·2·459 = 1 836. ΔrH = 1 366 − 1 836 = −470 kJ.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Cho Eb(N≡N) = 945, Eb(O=O) = 494, Eb(N=O) = 607 (kJ/mol); phản ứng N2(g) + O2(g) → 2NO(g) có ΔrH = +225 kJ. Vì sao N2 chỉ phản ứng với O2 ở nhiệt độ rất cao hoặc khi có tia lửa điện?",
    "chon": [
     "Liên kết N≡N rất bền, phải cung cấp nhiều năng lượng để phá vỡ; phản ứng lại thu nhiệt",
     "Phản ứng toả nhiệt rất mạnh nên phải làm ở nhiệt độ cao cho an toàn",
     "Hình thành liên kết N=O cần nhiều năng lượng",
     "N2 là khí trơ, không bao giờ phản ứng"
    ],
    "ma": [
     "DUNG",
     "E1",
     "E4",
     "X"
    ],
    "dung": 0,
    "giai": "ΔrH = 945 + 494 − 2·607 = +225 kJ > 0 (thu nhiệt) và Eb(N≡N) = 945 kJ/mol rất lớn → cần nhiệt độ cao, tia lửa điện (SGK Bài 17, câu 7).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho Eb (kJ/mol): C=C 612; C–H 418; O=O 494; C=O 732; O–H 459. Biến thiên enthalpy của phản ứng C2H4(g) + 3O2(g) → 2CO2(g) + 2H2O(g) là",
    "chon": [
     "−998 kJ",
     "+998 kJ",
     "+466 kJ",
     "−2 670 kJ"
    ],
    "ma": [
     "DUNG",
     "E8",
     "E9",
     "E9"
    ],
    "dung": 0,
    "giai": "ΣEb(cđ) = 612 + 4·418 + 3·494 = 3 766; ΣEb(sp) = 2·(2·732) + 2·(2·459) = 4 764 → ΔrH = 3 766 − 4 764 = −998 kJ. CO2 có 2 liên kết C=O, H2O có 2 liên kết O–H, C2H4 có 4 liên kết C–H."
   }
  ]
 },
 "cd-b17-t5": {
  "ten": "Chẩn đoán trước tiết — Bài 17. Biến thiên enthalpy (tiết 5: luyện tập)",
  "chuong": 5,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "17",
  "loai": "truoc",
  "tiet": "Tiết 41",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Phản ứng nào sau đây là phản ứng toả nhiệt?",
    "chon": [
     "C(graphite) + O2(g) → CO2(g)   ΔrH = −393,5 kJ",
     "CaCO3(s) → CaO(s) + CO2(g)   ΔrH = +178,3 kJ",
     "Cu(OH)2(s) → CuO(s) + H2O(l)   ΔrH = +9,0 kJ",
     "1/2N2(g) + 1/2O2(g) → NO(g)   ΔrH = +90,3 kJ"
    ],
    "ma": [
     "DUNG",
     "E1",
     "E1",
     "E1"
    ],
    "dung": 0,
    "giai": "Chỉ phản ứng có ΔrH < 0 là toả nhiệt; ba phản ứng còn lại có ΔrH > 0 (thu nhiệt)."
   },
   {
    "muc": "H",
    "de": "Cho 2H2(g) + O2(g) → 2H2O(l)   ΔrH = −571,6 kJ. Biến thiên enthalpy của phản ứng H2O(l) → H2(g) + 1/2O2(g) là",
    "chon": [
     "+285,8 kJ",
     "−285,8 kJ",
     "+571,6 kJ",
     "−571,6 kJ"
    ],
    "ma": [
     "DUNG",
     "E10",
     "E7",
     "E10"
    ],
    "dung": 0,
    "giai": "Đảo chiều phản ứng thì đổi dấu ΔrH; tính cho 1 mol H2O (một nửa hệ số) thì ΔrH cũng chia đôi: +571,6 : 2 = +285,8 kJ.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(l)   ΔrH = −2 220 kJ. Đốt cháy hoàn toàn 4,4 gam propane (C3H8 = 44) thì nhiệt lượng toả ra là",
    "chon": [
     "222 kJ",
     "2 220 kJ",
     "444 kJ",
     "22,2 kJ"
    ],
    "ma": [
     "DUNG",
     "E13",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "n(C3H8) = 4,4 : 44 = 0,1 mol → Q = 0,1 × 2 220 = 222 kJ."
   },
   {
    "muc": "V",
    "de": "Đốt cháy 1 mol CH4 toả ra 890 kJ. Cần cung cấp 445 kJ nhiệt cho nồi nước, biết chỉ 50% nhiệt toả ra được nồi hấp thụ. Số mol CH4 cần đốt là",
    "chon": [
     "1 mol",
     "0,5 mol",
     "0,25 mol",
     "2 mol"
    ],
    "ma": [
     "DUNG",
     "E15",
     "E15",
     "X"
    ],
    "dung": 0,
    "giai": "Nhiệt cần toả ra = 445 : 50% = 890 kJ → n(CH4) = 890 : 890 = 1 mol. Có hiệu suất thì lượng nhiên liệu phải NHIỀU hơn tính lí thuyết.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Phản ứng nhiệt phân Cu(OH)2: Cu(OH)2(s) → CuO(s) + H2O(l)   ΔrH = +9,0 kJ. Nhận xét nào ĐÚNG?",
    "chon": [
     "Phản ứng thu nhiệt, cần đun nóng mới xảy ra",
     "Phản ứng toả 9,0 kJ",
     "Phản ứng toả nhiệt nên chỉ cần châm lửa là tự xảy ra",
     "|ΔrH| nhỏ nên phản ứng không trao đổi nhiệt với môi trường"
    ],
    "ma": [
     "DUNG",
     "E1",
     "E1",
     "X"
    ],
    "dung": 0,
    "giai": "ΔrH > 0 → thu nhiệt; các phản ứng thu nhiệt thường xảy ra khi đun nóng (ví dụ 2, SGK Bài 17)."
   }
  ]
 },
 "cd-b17-sau": {
  "ten": "Kiểm tra sau tiết — Bài 17. Biến thiên enthalpy trong các phản ứng hoá học",
  "chuong": 5,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "17",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b17-t1",
   "cd-b17-t2",
   "cd-b17-t3",
   "cd-b17-t4",
   "cd-b17-t5"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "B",
    "de": "Phản ứng có ΔrH < 0 là phản ứng",
    "chon": [
     "toả nhiệt",
     "thu nhiệt",
     "phải đun nóng liên tục mới xảy ra",
     "không xảy ra được"
    ],
    "ma": [
     "DUNG",
     "E1",
     "E2",
     "X"
    ],
    "dung": 0,
    "giai": "ΔrH < 0: phản ứng toả nhiệt (SGK Bài 17)."
   },
   {
    "muc": "H",
    "de": "Muốn nhóm bếp than phải có mồi lửa. Phản ứng than cháy là",
    "chon": [
     "phản ứng toả nhiệt",
     "phản ứng thu nhiệt, vì phải có mồi lửa",
     "phản ứng thu nhiệt, vì làm không khí quanh bếp ấm lên",
     "vừa thu vừa toả nên ΔrH = 0"
    ],
    "ma": [
     "DUNG",
     "E2",
     "E3",
     "X"
    ],
    "dung": 0,
    "giai": "Than cháy toả nhiệt làm không khí xung quanh ấm lên (SGK Bài 17). Mồi lửa chỉ khơi mào.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Chất nào sau đây có nhiệt tạo thành chuẩn bằng 0?",
    "chon": [
     "Cl2(g)",
     "HCl(g)",
     "C(kim cương)",
     "H2O(l)"
    ],
    "ma": [
     "DUNG",
     "E5",
     "E5",
     "X"
    ],
    "dung": 0,
    "giai": "Chỉ đơn chất ở dạng bền vững nhất có ΔfH chuẩn = 0: Cl2(g). Kim cương không phải dạng bền nhất của carbon (graphite mới là).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Dùng Bảng 17.1: ΔfH(SO2, g) = −296,8; ΔfH(SO3, l) = −441,0 (kJ/mol). Biến thiên enthalpy chuẩn của phản ứng 2SO2(g) + O2(g) → 2SO3(l) là",
    "chon": [
     "−288,4 kJ",
     "−144,2 kJ",
     "+288,4 kJ",
     "−1 475,6 kJ"
    ],
    "ma": [
     "DUNG",
     "E7",
     "E6",
     "X"
    ],
    "dung": 0,
    "giai": "ΔrH = 2·(−441,0) − [2·(−296,8) + 0] = −882,0 + 593,6 = −288,4 kJ."
   },
   {
    "muc": "V",
    "de": "Cho Eb (kJ/mol): C–H 418; O=O 494; C=O 732; O–H 459. Biến thiên enthalpy của phản ứng CH4(g) + 2O2(g) → CO2(g) + 2H2O(g) là",
    "chon": [
     "−640 kJ",
     "+640 kJ",
     "+278 kJ",
     "−216 kJ"
    ],
    "ma": [
     "DUNG",
     "E8",
     "E9",
     "E7"
    ],
    "dung": 0,
    "giai": "ΣEb(cđ) = 4·418 + 2·494 = 2 660; ΣEb(sp) = 2·732 + 2·(2·459) = 3 300 → ΔrH = 2 660 − 3 300 = −640 kJ.",
    "viSao": true
   }
  ]
 },
 "cd-b18": {
  "ten": "Chẩn đoán trước tiết — Bài 18. Ôn tập Chương 5",
  "chuong": 5,
  "mo": true,
  "phut": 10,
  "haiBac": true,
  "bai": "18",
  "loai": "truoc",
  "tiet": "Tiết 42",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Phản ứng toả nhiệt là phản ứng có",
    "chon": [
     "ΔrH < 0",
     "ΔrH > 0",
     "khả năng làm môi trường lạnh đi",
     "điều kiện phải đun nóng mới xảy ra"
    ],
    "ma": [
     "DUNG",
     "E1",
     "E3",
     "E2"
    ],
    "dung": 0,
    "giai": "Toả nhiệt: ΔrH < 0, môi trường nóng lên (SGK Bài 17, 83)."
   },
   {
    "muc": "H",
    "de": "Cho 3O2(g) → 2O3(g)   ΔrH = +285,4 kJ. Nhận xét nào ĐÚNG?",
    "chon": [
     "Phản ứng thu nhiệt; O2 bền hơn O3",
     "Phản ứng toả nhiệt; O2 bền hơn O3",
     "Phản ứng thu nhiệt; O3 bền hơn O2",
     "Phản ứng toả nhiệt; O3 bền hơn O2"
    ],
    "ma": [
     "DUNG",
     "E1",
     "E11",
     "E1"
    ],
    "dung": 0,
    "giai": "ΔrH > 0 → thu nhiệt: O3 ở mức năng lượng cao hơn O2 nên kém bền hơn (giống P đỏ → P trắng, SGK Bài 18).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Bảng 17.1: ΔfH(H2O, l) = −285,8 kJ/mol; ΔfH(H2O, g) = −241,8 kJ/mol. Nhận xét nào ĐÚNG?",
    "chon": [
     "Tạo 1 mol nước lỏng từ H2 và O2 toả nhiều nhiệt hơn tạo 1 mol hơi nước",
     "Tạo hơi nước toả nhiều nhiệt hơn, vì −241,8 lớn hơn −285,8",
     "Toả nhiệt như nhau, vì đều là H2O",
     "Tạo nước lỏng là quá trình thu nhiệt"
    ],
    "ma": [
     "DUNG",
     "E14",
     "E10",
     "E1"
    ],
    "dung": 0,
    "giai": "|−285,8| > |−241,8| → tạo nước lỏng toả nhiều nhiệt hơn; trạng thái chất khác nhau thì ΔfH khác nhau.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Dùng Bảng 17.1: ΔfH(NH3, g) = −45,9; ΔfH(H2O, l) = −285,8 (kJ/mol). Biến thiên enthalpy chuẩn của phản ứng 4NH3(g) + 3O2(g) → 2N2(g) + 6H2O(l) là",
    "chon": [
     "−1 531,2 kJ",
     "+1 531,2 kJ",
     "−239,9 kJ",
     "−1 898,4 kJ"
    ],
    "ma": [
     "DUNG",
     "E6",
     "E7",
     "X"
    ],
    "dung": 0,
    "giai": "ΔrH = [2·0 + 6·(−285,8)] − [4·(−45,9) + 3·0] = −1 714,8 + 183,6 = −1 531,2 kJ."
   },
   {
    "muc": "V",
    "de": "Cho Eb (kJ/mol): C–C 346; C=C 612; C–H 418; H–H 436. Biến thiên enthalpy của phản ứng C2H6(g) → C2H4(g) + H2(g) là",
    "chon": [
     "+134 kJ",
     "−134 kJ",
     "+54 kJ",
     "−702 kJ"
    ],
    "ma": [
     "DUNG",
     "E8",
     "E9",
     "E9"
    ],
    "dung": 0,
    "giai": "ΣEb(cđ) = 346 + 6·418 = 2 854; ΣEb(sp) = 612 + 4·418 + 436 = 2 720 → ΔrH = +134 kJ (thu nhiệt). C=C có Eb 612, không phải 2 × 346.",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Trong kí hiệu ΔrH°298, con số 298 cho biết",
    "chon": [
     "nhiệt độ 298 K (25 °C)",
     "nhiệt độ 0 °C",
     "áp suất 298 kPa",
     "nhiệt lượng 298 kJ"
    ],
    "ma": [
     "DUNG",
     "E12",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Biến thiên enthalpy chuẩn đo ở 298 K = 25 °C (SGK Bài 17)."
   },
   {
    "muc": "V",
    "de": "Cho C2H5OH(l) + 3O2(g) → 2CO2(g) + 3H2O(l)   ΔrH = −1 365 kJ. Đốt cháy hoàn toàn 9,2 gam ethanol (C2H5OH = 46) toả ra",
    "chon": [
     "273 kJ",
     "1 365 kJ",
     "136,5 kJ",
     "546 kJ"
    ],
    "ma": [
     "DUNG",
     "E13",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "n = 9,2 : 46 = 0,2 mol → Q = 0,2 × 1 365 = 273 kJ.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho C4H10(g) + 13/2O2(g) → 4CO2(g) + 5H2O(l)   ΔrH = −2 874 kJ. Đun một ấm nước cần 500 kJ, hiệu suất hấp thụ nhiệt 80%. Khối lượng butane (C4H10 = 58) cần đốt gần nhất với",
    "chon": [
     "12,6 g",
     "10,1 g",
     "8,1 g",
     "29,0 g"
    ],
    "ma": [
     "DUNG",
     "E15",
     "E15",
     "X"
    ],
    "dung": 0,
    "giai": "Nhiệt cần toả = 500 : 0,8 = 625 kJ → n = 625 : 2 874 ≈ 0,2175 mol → m ≈ 0,2175 × 58 ≈ 12,6 g."
   }
  ]
 },
 "cd-b19-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 19. Tốc độ phản ứng (tiết 1: khái niệm, tốc độ trung bình)",
  "chuong": 6,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "19",
  "loai": "truoc",
  "tiet": "Tiết 46",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Tốc độ phản ứng được xác định bằng",
    "chon": [
     "sự thay đổi lượng chất đầu hoặc sản phẩm trong một đơn vị thời gian",
     "tổng thời gian để phản ứng kết thúc",
     "lượng sản phẩm thu được sau khi phản ứng kết thúc",
     "nhiệt lượng toả ra trong phản ứng"
    ],
    "ma": [
     "DUNG",
     "R1",
     "R11",
     "X"
    ],
    "dung": 0,
    "giai": "SGK Bài 19: tốc độ phản ứng là sự thay đổi lượng chất đầu hoặc sản phẩm trong một đơn vị thời gian."
   },
   {
    "muc": "H",
    "de": "Phân huỷ H2O2: nồng độ H2O2 là 1,000 M (0 giờ) → 0,707 M (3 giờ) → 0,500 M (6 giờ) → 0,354 M (9 giờ). Nhận xét nào ĐÚNG?",
    "chon": [
     "Tốc độ phản ứng giảm dần theo thời gian",
     "Tốc độ phản ứng không đổi, vì mỗi khoảng đều là 3 giờ",
     "Tốc độ phản ứng tăng dần, vì sản phẩm sinh ra ngày càng nhiều",
     "Tốc độ phản ứng bằng 0 sau 3 giờ đầu"
    ],
    "ma": [
     "DUNG",
     "R3",
     "R3",
     "X"
    ],
    "dung": 0,
    "giai": "Lượng H2O2 mất đi trong mỗi 3 giờ: 0,293 → 0,207 → 0,146 M, ngày càng ít → tốc độ giảm dần (Bảng 19.1, SGK Bài 19). Đa số phản ứng có tốc độ giảm theo thời gian.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Phản ứng (1) tạo ra 10 gam sản phẩm trong 1 phút; phản ứng (2) tạo ra 30 gam sản phẩm trong 10 phút. Phản ứng xảy ra nhanh hơn là",
    "chon": [
     "phản ứng (1)",
     "phản ứng (2), vì tạo ra nhiều sản phẩm hơn",
     "phản ứng (2), vì kéo dài lâu hơn",
     "hai phản ứng nhanh như nhau"
    ],
    "ma": [
     "DUNG",
     "R11",
     "R1",
     "X"
    ],
    "dung": 0,
    "giai": "So lượng chất trong một đơn vị thời gian: (1) 10 g/phút; (2) 30 : 10 = 3 g/phút → (1) nhanh hơn.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Xét phản ứng 2CO + O2 → 2CO2. Trong cùng một khoảng thời gian, nồng độ O2 giảm 0,1 M thì nồng độ CO",
    "chon": [
     "giảm 0,2 M",
     "giảm 0,1 M",
     "giảm 0,05 M",
     "tăng 0,2 M"
    ],
    "ma": [
     "DUNG",
     "R2",
     "R2",
     "X"
    ],
    "dung": 0,
    "giai": "Theo phương trình, 2 mol CO phản ứng với 1 mol O2 → CO giảm gấp đôi O2: 0,2 M (SGK Bài 19). Vì vậy tốc độ trung bình phải chia cho hệ số."
   },
   {
    "muc": "V",
    "de": "Xét phản ứng A → B. Nồng độ ban đầu của A là 0,50 M; sau 20 giây còn 0,40 M. Tốc độ trung bình của phản ứng trong 20 giây đầu là",
    "chon": [
     "5·10⁻³ mol/(L·s)",
     "−5·10⁻³ mol/(L·s)",
     "2·10⁻² mol/(L·s)",
     "0,1 mol/(L·s)"
    ],
    "ma": [
     "DUNG",
     "R2",
     "X",
     "R2"
    ],
    "dung": 0,
    "giai": "v = −(0,40 − 0,50) : 20 = 0,10 : 20 = 5·10⁻³ mol/(L·s). Đặt dấu «−» trước biến thiên nồng độ chất đầu để tốc độ luôn dương."
   }
  ]
 },
 "cd-b19-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 19. Tốc độ phản ứng (tiết 2: nồng độ, áp suất, nhiệt độ)",
  "chuong": 6,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "19",
  "loai": "truoc",
  "tiet": "Tiết 47",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Vì sao tăng nồng độ chất phản ứng thì tốc độ phản ứng tăng?",
    "chon": [
     "Số va chạm giữa các hạt tăng nên số va chạm hiệu quả tăng",
     "Các hạt chuyển động nhanh hơn",
     "Mọi va chạm giữa các hạt đều gây ra phản ứng",
     "Năng lượng hoạt hoá của phản ứng giảm"
    ],
    "ma": [
     "DUNG",
     "R7",
     "R12",
     "X"
    ],
    "dung": 0,
    "giai": "Nồng độ tăng → nhiều hạt hơn trong cùng thể tích → nhiều va chạm, nhiều va chạm hiệu quả hơn (SGK Bài 19). Chỉ va chạm đủ năng lượng mới gây phản ứng.",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Áp suất ảnh hưởng đến tốc độ của phản ứng nào sau đây?",
    "chon": [
     "2SO2(g) + O2(g) → 2SO3(g)",
     "Zn(s) + CuSO4(aq) → ZnSO4(aq) + Cu(s)",
     "AgNO3(aq) + NaCl(aq) → AgCl(s) + NaNO3(aq)",
     "CaO(s) + SiO2(s) → CaSiO3(s)"
    ],
    "ma": [
     "DUNG",
     "R6",
     "R6",
     "R6"
    ],
    "dung": 0,
    "giai": "Áp suất chỉ ảnh hưởng tới phản ứng có chất khí tham gia (SGK Bài 19)."
   },
   {
    "muc": "H",
    "de": "Phản ứng đơn giản 2NO + O2 → 2NO2 có v = k·C(NO)²·C(O2). Nếu tăng nồng độ NO lên gấp đôi, giữ nguyên nồng độ O2 thì tốc độ phản ứng",
    "chon": [
     "tăng 4 lần",
     "tăng 2 lần",
     "tăng 8 lần",
     "không đổi"
    ],
    "ma": [
     "DUNG",
     "R5",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "v′ = k·(2C(NO))²·C(O2) = 4·v (ví dụ SGK Bài 19). Số mũ 2 là hệ số của NO."
   },
   {
    "muc": "H",
    "de": "Hằng số tốc độ k của một phản ứng phụ thuộc vào",
    "chon": [
     "nhiệt độ (và bản chất của phản ứng)",
     "nồng độ các chất phản ứng",
     "thời gian phản ứng",
     "thể tích bình phản ứng"
    ],
    "ma": [
     "DUNG",
     "R4",
     "R4",
     "R4"
    ],
    "dung": 0,
    "giai": "k đặc trưng cho mỗi phản ứng, chỉ phụ thuộc nhiệt độ, không phụ thuộc nồng độ chất phản ứng (SGK Bài 19).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Một phản ứng có hệ số nhiệt độ Van't Hoff γ = 3. Khi tăng nhiệt độ từ 20 °C lên 40 °C thì tốc độ phản ứng tăng",
    "chon": [
     "9 lần",
     "6 lần",
     "3 lần",
     "20 lần"
    ],
    "ma": [
     "DUNG",
     "R8",
     "R8",
     "X"
    ],
    "dung": 0,
    "giai": "Tăng 20 °C = 2 lần 10 °C → tốc độ tăng γ² = 3² = 9 lần (SGK Bài 19)."
   }
  ]
 },
 "cd-b19-t3": {
  "ten": "Chẩn đoán trước tiết — Bài 19. Tốc độ phản ứng (tiết 3: diện tích bề mặt, chất xúc tác)",
  "chuong": 6,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "19",
  "loai": "truoc",
  "tiet": "Tiết 48",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Chất xúc tác là chất",
    "chon": [
     "làm tăng tốc độ phản ứng và không bị biến đổi về lượng và chất sau phản ứng",
     "bị tiêu hao dần như chất phản ứng",
     "làm tăng năng lượng hoạt hoá của phản ứng",
     "làm tăng lượng sản phẩm thu được"
    ],
    "ma": [
     "DUNG",
     "R9",
     "R9",
     "R11"
    ],
    "dung": 0,
    "giai": "Chất xúc tác làm tăng tốc độ phản ứng nhưng không bị biến đổi về lượng và chất sau phản ứng (SGK Bài 19)."
   },
   {
    "muc": "H",
    "de": "Cho cùng 2 gam đá vôi vào hai bình chứa cùng thể tích dung dịch HCl 0,5 M: bình (1) đá vôi dạng viên, bình (2) đá vôi đập nhỏ. Khí thoát ra nhanh hơn ở",
    "chon": [
     "bình (2), vì tổng diện tích bề mặt tiếp xúc lớn hơn",
     "bình (1), vì viên đá vôi to, nặng hơn từng hạt nhỏ",
     "hai bình như nhau, vì cùng khối lượng đá vôi",
     "bình (1), vì đá vôi đập nhỏ bị bụi bám"
    ],
    "ma": [
     "DUNG",
     "R10",
     "R10",
     "X"
    ],
    "dung": 0,
    "giai": "Đập nhỏ làm tổng diện tích bề mặt tăng → nhiều va chạm hiệu quả hơn → tốc độ tăng (SGK Bài 19).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Chất xúc tác làm tăng tốc độ phản ứng vì",
    "chon": [
     "phản ứng xảy ra qua nhiều giai đoạn có năng lượng hoạt hoá thấp hơn",
     "chất xúc tác cung cấp nhiệt cho phản ứng",
     "chất xúc tác làm các hạt chuyển động nhanh hơn",
     "chất xúc tác làm biến thiên enthalpy của phản ứng âm hơn (toả nhiều nhiệt hơn)"
    ],
    "ma": [
     "DUNG",
     "R9",
     "R7",
     "R14"
    ],
    "dung": 0,
    "giai": "Có xúc tác, phản ứng đi qua nhiều giai đoạn, mỗi giai đoạn có năng lượng hoạt hoá thấp hơn → nhiều hạt đủ năng lượng hơn (Hình 19.5, SGK Bài 19)."
   },
   {
    "muc": "H",
    "de": "Hai bình chứa cùng một lượng dung dịch H2O2; chỉ một bình có thêm MnO2. Khi phản ứng ở cả hai bình đã kết thúc hoàn toàn, thể tích khí O2 thu được",
    "chon": [
     "bằng nhau, chỉ là bình có MnO2 đạt tới sớm hơn",
     "ở bình có MnO2 nhiều hơn",
     "ở bình không có MnO2 nhiều hơn",
     "ở bình có MnO2 ít hơn, vì MnO2 giữ lại một phần khí"
    ],
    "ma": [
     "DUNG",
     "R11",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Lượng O2 do lượng H2O2 quyết định; xúc tác chỉ làm phản ứng nhanh hơn, không làm tăng lượng sản phẩm (Câu 9, SGK Bài 19).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho đinh sắt vào dung dịch HCl 1 M ở nhiệt độ phòng. Xét các thay đổi: (1) thay đinh sắt bằng bột sắt cùng khối lượng; (2) thay dung dịch HCl 1 M bằng HCl 0,5 M cùng thể tích; (3) đun nóng lên 50 °C. Các thay đổi làm tốc độ phản ứng tăng là",
    "chon": [
     "(1) và (3)",
     "chỉ (3)",
     "(2) và (3)",
     "(1), (2) và (3)"
    ],
    "ma": [
     "DUNG",
     "R10",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "(1) tăng diện tích bề mặt → nhanh hơn; (3) tăng nhiệt độ → nhanh hơn; (2) giảm nồng độ → chậm hơn."
   }
  ]
 },
 "cd-b19-t4": {
  "ten": "Chẩn đoán trước tiết — Bài 19. Tốc độ phản ứng (tiết 4: ứng dụng, luyện tập)",
  "chuong": 6,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "19",
  "loai": "truoc",
  "tiet": "Tiết 49",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Bảo quản thực phẩm trong tủ lạnh giữ được lâu hơn vì",
    "chon": [
     "nhiệt độ thấp làm giảm tốc độ các phản ứng làm hỏng thực phẩm",
     "nhiệt độ thấp làm mọi phản ứng dừng hẳn",
     "trong tủ lạnh có chất xúc tác bảo quản",
     "tủ lạnh làm tăng nồng độ khí oxygen quanh thực phẩm"
    ],
    "ma": [
     "DUNG",
     "X",
     "R9",
     "R7"
    ],
    "dung": 0,
    "giai": "Giảm nhiệt độ → giảm tốc độ phản ứng (Hình 19.7b, SGK Bài 19). Phản ứng vẫn xảy ra, chỉ chậm đi, nên thực phẩm vẫn có hạn dùng."
   },
   {
    "muc": "H",
    "de": "Trong đèn xì hàn cắt kim loại, người ta đốt acetylene bằng oxygen nguyên chất thay cho không khí nhằm",
    "chon": [
     "tăng nồng độ oxygen để phản ứng cháy nhanh hơn, cho nhiệt độ cao hơn",
     "dùng oxygen làm chất xúc tác cho phản ứng",
     "tăng diện tích bề mặt của acetylene",
     "giảm năng lượng hoạt hoá nhờ oxygen tinh khiết"
    ],
    "ma": [
     "DUNG",
     "R9",
     "R10",
     "X"
    ],
    "dung": 0,
    "giai": "Oxygen nguyên chất có nồng độ lớn hơn nhiều so với trong không khí (~21%) → acetylene cháy nhanh, nhiệt độ cao (SGK Bài 19). O2 là chất phản ứng, không phải xúc tác.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Người ta đập nhỏ đá vôi trước khi cho vào lò nung vôi nhằm",
    "chon": [
     "tăng diện tích bề mặt tiếp xúc, làm phản ứng xảy ra nhanh hơn",
     "tăng lượng vôi sống thu được",
     "làm phản ứng chuyển thành toả nhiệt",
     "để đá vôi đóng vai trò chất xúc tác"
    ],
    "ma": [
     "DUNG",
     "R11",
     "X",
     "R9"
    ],
    "dung": 0,
    "giai": "Hạt càng nhỏ, tổng diện tích bề mặt càng lớn → tốc độ phản ứng tăng (SGK Bài 19). Lượng vôi sống do lượng đá vôi quyết định."
   },
   {
    "muc": "V",
    "de": "Giai đoạn sản xuất nitric acid: 4NH3(g) + 5O2(g) → 4NO(g) + 6H2O(g), xúc tác Pt, khoảng 850 °C. Biện pháp nào KHÔNG làm tăng tốc độ phản ứng này?",
    "chon": [
     "Giảm áp suất của hỗn hợp khí",
     "Tăng áp suất của hỗn hợp khí",
     "Dùng chất xúc tác Pt",
     "Tăng nồng độ oxygen"
    ],
    "ma": [
     "DUNG",
     "R6",
     "R9",
     "X"
    ],
    "dung": 0,
    "giai": "Các chất phản ứng đều là khí: giảm áp suất làm nồng độ khí giảm → tốc độ giảm. Tăng áp suất, dùng xúc tác, tăng nồng độ O2 đều làm tăng tốc độ (Câu 11, SGK Bài 19).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Một phản ứng ở 30 °C kết thúc sau 40 phút. Hệ số nhiệt độ Van't Hoff γ = 2. Nếu tiến hành ở 50 °C thì phản ứng kết thúc sau",
    "chon": [
     "10 phút",
     "160 phút",
     "20 phút",
     "5 phút"
    ],
    "ma": [
     "DUNG",
     "R1",
     "R8",
     "X"
    ],
    "dung": 0,
    "giai": "Tăng 20 °C → tốc độ tăng 2² = 4 lần → thời gian giảm 4 lần: 40 : 4 = 10 phút. Tốc độ tăng thì thời gian phản ứng GIẢM."
   }
  ]
 },
 "cd-b19-sau": {
  "ten": "Kiểm tra sau tiết — Bài 19. Tốc độ phản ứng",
  "chuong": 6,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "19",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b19-t1",
   "cd-b19-t2",
   "cd-b19-t3",
   "cd-b19-t4"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "B",
    "de": "Khi lượng chất tính bằng nồng độ mol/L và thời gian tính bằng giây, đơn vị của tốc độ phản ứng là",
    "chon": [
     "mol/(L·s)",
     "mol/L",
     "giây (s)",
     "L/(mol·s)"
    ],
    "ma": [
     "DUNG",
     "R2",
     "R1",
     "X"
    ],
    "dung": 0,
    "giai": "Tốc độ = biến thiên nồng độ : thời gian → mol/L : s = mol/(L·s) (SGK Bài 19)."
   },
   {
    "muc": "H",
    "de": "Vì sao khi tăng nhiệt độ thì tốc độ phản ứng tăng?",
    "chon": [
     "Các hạt chuyển động nhanh hơn, số va chạm hiệu quả tăng",
     "Nồng độ các chất phản ứng tăng",
     "Chỉ phản ứng thu nhiệt mới nhanh hơn khi đun, phản ứng toả nhiệt chậm lại",
     "Nhiệt độ làm chất phản ứng biến thành chất xúc tác"
    ],
    "ma": [
     "DUNG",
     "R7",
     "R13",
     "R9"
    ],
    "dung": 0,
    "giai": "Nhiệt độ tăng → động năng các hạt tăng → nhiều va chạm hiệu quả hơn (SGK Bài 19). Điều này đúng cho cả phản ứng toả nhiệt và thu nhiệt.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Coi phản ứng H2 + I2 → 2HI là phản ứng đơn giản, ở một nhiệt độ có k = 0,16 L/(mol·s). Khi C(H2) = C(I2) = 0,1 M, tốc độ phản ứng là",
    "chon": [
     "1,6·10⁻³ mol/(L·s)",
     "1,6·10⁻² mol/(L·s)",
     "3,2·10⁻² mol/(L·s)",
     "1,6·10⁻⁴ mol/(L·s)"
    ],
    "ma": [
     "DUNG",
     "R5",
     "R5",
     "X"
    ],
    "dung": 0,
    "giai": "v = k·C(H2)·C(I2) = 0,16 × 0,1 × 0,1 = 1,6·10⁻³ mol/(L·s). Phải nhân cả hai nồng độ."
   },
   {
    "muc": "H",
    "de": "Áp suất ảnh hưởng đến tốc độ của phản ứng nào sau đây?",
    "chon": [
     "C(s) + O2(g) → CO2(g)",
     "NaOH(aq) + HCl(aq) → NaCl(aq) + H2O(l)",
     "Fe(s) + S(s) → FeS(s)",
     "BaCl2(aq) + Na2SO4(aq) → BaSO4(s) + 2NaCl(aq)"
    ],
    "ma": [
     "DUNG",
     "R6",
     "R6",
     "R6"
    ],
    "dung": 0,
    "giai": "Chỉ phản ứng có chất KHÍ tham gia (O2) mới chịu ảnh hưởng của áp suất (SGK Bài 19).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Một phản ứng có γ = 2; ở 20 °C tốc độ là 0,05 mol/(L·min). Ở 50 °C tốc độ phản ứng là",
    "chon": [
     "0,40 mol/(L·min)",
     "0,30 mol/(L·min)",
     "0,10 mol/(L·min)",
     "0,15 mol/(L·min)"
    ],
    "ma": [
     "DUNG",
     "R8",
     "R8",
     "X"
    ],
    "dung": 0,
    "giai": "Tăng 30 °C → tốc độ tăng 2³ = 8 lần: 0,05 × 8 = 0,40 mol/(L·min)."
   }
  ]
 },
 "cd-b20": {
  "ten": "Chẩn đoán trước tiết — Bài 20. Ôn tập Chương 6",
  "chuong": 6,
  "mo": true,
  "phut": 10,
  "haiBac": true,
  "bai": "20",
  "loai": "truoc",
  "tiet": "Tiết 50",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Quá trình nào sau đây xảy ra chậm nhất?",
    "chon": [
     "Sắt bị gỉ trong không khí ẩm",
     "Đốt cháy xăng trong động cơ",
     "Trung hoà dung dịch HCl bằng dung dịch NaOH",
     "Pháo hoa nổ"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Sắt gỉ xảy ra chậm (Hình 19.2b, SGK Bài 19); cháy, nổ, trung hoà xảy ra rất nhanh."
   },
   {
    "muc": "H",
    "de": "Với phản ứng N2(g) + 3H2(g) → 2NH3(g), biểu thức tốc độ trung bình ĐÚNG là",
    "chon": [
     "v = −ΔC(N2)/Δt = −(1/3)·ΔC(H2)/Δt = (1/2)·ΔC(NH3)/Δt",
     "v = −ΔC(N2)/Δt = −ΔC(H2)/Δt = ΔC(NH3)/Δt",
     "v = −ΔC(N2)/Δt = −3·ΔC(H2)/Δt = 2·ΔC(NH3)/Δt",
     "v = ΔC(N2)/Δt = (1/3)·ΔC(H2)/Δt = −(1/2)·ΔC(NH3)/Δt"
    ],
    "ma": [
     "DUNG",
     "R2",
     "R2",
     "R2"
    ],
    "dung": 0,
    "giai": "Chia biến thiên nồng độ mỗi chất cho hệ số của nó; chất đầu có dấu «−» vì nồng độ giảm (SGK Bài 19).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Phản ứng đơn giản 2A + B → C có v = k·C(A)²·C(B). Nếu nồng độ A giảm một nửa và nồng độ B tăng gấp đôi thì tốc độ phản ứng",
    "chon": [
     "giảm 2 lần",
     "không đổi",
     "tăng 2 lần",
     "giảm 4 lần"
    ],
    "ma": [
     "DUNG",
     "R5",
     "X",
     "R5"
    ],
    "dung": 0,
    "giai": "v′ = k·(C(A)/2)²·(2C(B)) = (1/4)·2·v = v/2 → giảm 2 lần."
   },
   {
    "muc": "H",
    "de": "Cho kẽm vào dung dịch H2SO4 loãng. Thay kẽm hạt bằng kẽm bột cùng khối lượng thì tốc độ phản ứng tăng vì",
    "chon": [
     "diện tích bề mặt tiếp xúc của kẽm lớn hơn",
     "khối lượng kẽm tham gia lớn hơn",
     "kẽm bột đóng vai trò chất xúc tác",
     "nồng độ acid tăng lên"
    ],
    "ma": [
     "DUNG",
     "R10",
     "R9",
     "R7"
    ],
    "dung": 0,
    "giai": "Cùng khối lượng nhưng hạt nhỏ hơn → tổng diện tích bề mặt lớn hơn → nhiều va chạm hiệu quả hơn.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho đá vôi vào dung dịch HCl, đo thể tích CO2: 0 mL (0 s); 24 mL (10 s); 40 mL (20 s); 50 mL (30 s). Tốc độ trung bình của phản ứng (theo CO2) trong khoảng từ 10 s đến 20 s là",
    "chon": [
     "1,6 mL/s",
     "2,0 mL/s",
     "2,4 mL/s",
     "4,0 mL/s"
    ],
    "ma": [
     "DUNG",
     "R2",
     "R3",
     "R2"
    ],
    "dung": 0,
    "giai": "v = (40 − 24) : (20 − 10) = 16 : 10 = 1,6 mL/s; chỉ lấy lượng khí sinh ra TRONG khoảng đó. Tốc độ giảm dần: 2,4 → 1,6 → 1,0 mL/s."
   },
   {
    "muc": "V",
    "de": "Một phản ứng ở 60 °C có tốc độ 0,32 mol/(L·min); γ = 2. Muốn tốc độ phản ứng chỉ còn 0,04 mol/(L·min) thì phải hạ nhiệt độ xuống",
    "chon": [
     "30 °C",
     "40 °C",
     "20 °C",
     "90 °C"
    ],
    "ma": [
     "DUNG",
     "R8",
     "X",
     "R13"
    ],
    "dung": 0,
    "giai": "0,32 : 0,04 = 8 = 2³ → phải giảm 3 × 10 = 30 °C: 60 − 30 = 30 °C.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nấu thức ăn bằng nồi áp suất nhanh chín hơn nồi thường vì",
    "chon": [
     "nước trong nồi sôi ở nhiệt độ cao hơn, tốc độ các phản ứng làm chín tăng",
     "áp suất cao làm tăng nồng độ các chất trong thức ăn",
     "thành nồi áp suất có chất xúc tác",
     "nồi giữ hơi nước lại nên thu được nhiều sản phẩm hơn"
    ],
    "ma": [
     "DUNG",
     "R6",
     "R9",
     "R11"
    ],
    "dung": 0,
    "giai": "Áp suất trong nồi cao làm nước sôi trên 100 °C; nhiệt độ cao → phản ứng làm chín thực phẩm nhanh hơn. Thức ăn không có chất khí tham gia phản ứng làm chín."
   },
   {
    "muc": "V",
    "de": "Cho 0,1 gam MnO2 vào dung dịch H2O2, khí thoát ra mạnh. Khi phản ứng kết thúc, lọc, rửa, sấy khô chất rắn rồi cân, thu được",
    "chon": [
     "0,1 gam MnO2",
     "ít hơn 0,1 gam, vì MnO2 đã phản ứng một phần",
     "nhiều hơn 0,1 gam, vì MnO2 nhận thêm oxygen",
     "không còn chất rắn, vì MnO2 đã chuyển hết thành Mn"
    ],
    "ma": [
     "DUNG",
     "R9",
     "X",
     "R9"
    ],
    "dung": 0,
    "giai": "MnO2 là chất xúc tác: sau phản ứng khối lượng và bản chất hoá học không đổi (SGK Bài 19).",
    "viSao": true
   }
  ]
 },
 "cd-b21-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 21. Nhóm halogen (tiết 1: tự nhiên, cấu tạo, tính chất vật lí)",
  "chuong": 7,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "21",
  "loai": "truoc",
  "tiet": "Tiết 53",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Trong tự nhiên, các nguyên tố halogen tồn tại",
    "chon": [
     "chỉ ở dạng hợp chất, phần lớn là muối halide",
     "chủ yếu ở dạng đơn chất",
     "ở cả dạng đơn chất và hợp chất, giống oxygen",
     "chỉ ở dạng khí trong khí quyển"
    ],
    "ma": [
     "DUNG",
     "G1",
     "G1",
     "X"
    ],
    "dung": 0,
    "giai": "Halogen hoạt động hoá học mạnh nên trong tự nhiên chỉ tồn tại ở dạng hợp chất, phổ biến là muối halide như NaCl, CaF2 (SGK Bài 21)."
   },
   {
    "muc": "H",
    "de": "Nguyên tử halogen có cấu hình electron lớp ngoài cùng ns²np⁵. Khi hình thành liên kết, nguyên tử halogen có xu hướng",
    "chon": [
     "nhận thêm 1 electron (hoặc góp chung 1 electron) để đạt cấu hình của khí hiếm gần nhất",
     "nhường 7 electron lớp ngoài cùng",
     "nhường 1 electron để thành ion dương",
     "nhận thêm 7 electron"
    ],
    "ma": [
     "DUNG",
     "G2",
     "G2",
     "O4"
    ],
    "dung": 0,
    "giai": "ns²np⁵ + 1e → ns²np⁶: chỉ thiếu 1 electron là đạt cấu hình khí hiếm (SGK Bài 21) → halogen có tính oxi hoá.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Trong các hợp chất, số oxi hoá của fluorine",
    "chon": [
     "luôn là −1",
     "có thể là −1, +1, +3, +5, +7 như chlorine",
     "luôn là +1",
     "bằng 0"
    ],
    "ma": [
     "DUNG",
     "G4",
     "G4",
     "K2"
    ],
    "dung": 0,
    "giai": "Fluorine có độ âm điện lớn nhất nên luôn có số oxi hoá −1 trong mọi hợp chất (SGK Bài 21)."
   },
   {
    "muc": "H",
    "de": "Nhận xét nào ĐÚNG về nhiệt độ sôi của các đơn chất halogen từ F2 đến I2?",
    "chon": [
     "Tăng dần, do tương tác van der Waals giữa các phân tử tăng",
     "Tăng dần, do liên kết cộng hoá trị trong phân tử bền dần",
     "Giảm dần, do bán kính nguyên tử tăng",
     "Tăng dần, do liên kết hydrogen giữa các phân tử tăng"
    ],
    "ma": [
     "DUNG",
     "H4",
     "G5",
     "H2"
    ],
    "dung": 0,
    "giai": "Từ F2 đến I2, khối lượng phân tử và tương tác van der Waals tăng → nhiệt độ sôi tăng (Bảng 21.2, SGK Bài 21). Khi sôi, liên kết trong phân tử không bị phá vỡ.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Một nhà máy nước dùng 5 mg Cl2 để khử trùng 1 L nước. Khối lượng Cl2 cần để khử trùng 20 000 m³ nước là",
    "chon": [
     "100 kg",
     "100 g",
     "10 kg",
     "1 000 kg"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "20 000 m³ = 2·10⁷ L → m = 2·10⁷ × 5 mg = 10⁸ mg = 100 kg (dạng Câu 6, SGK Bài 21)."
   }
  ]
 },
 "cd-b21-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 21. Nhóm halogen (tiết 2: tính chất hoá học)",
  "chuong": 7,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "21",
  "loai": "truoc",
  "tiet": "Tiết 54",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Các đơn chất halogen có tính",
    "chon": [
     "oxi hoá mạnh, giảm dần từ F2 đến I2",
     "khử mạnh",
     "oxi hoá mạnh, tăng dần từ F2 đến I2",
     "oxi hoá như nhau, vì cùng nhóm"
    ],
    "ma": [
     "DUNG",
     "G2",
     "G3",
     "T12"
    ],
    "dung": 0,
    "giai": "Halogen là phi kim điển hình, tính oxi hoá mạnh, giảm dần từ fluorine đến iodine (SGK Bài 21)."
   },
   {
    "muc": "H",
    "de": "Dây sắt nung đỏ cháy trong khí chlorine tạo khói màu nâu đỏ. Sản phẩm là",
    "chon": [
     "FeCl3",
     "FeCl2",
     "Fe2Cl3",
     "FeCl"
    ],
    "ma": [
     "DUNG",
     "G13",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "2Fe + 3Cl2 → 2FeCl3 (SGK Bài 21): Cl2 có tính oxi hoá mạnh, đưa Fe lên số oxi hoá +3.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Halogen phản ứng với hydrogen ngay ở nhiệt độ phòng, trong bóng tối và gây nổ mạnh là",
    "chon": [
     "F2",
     "I2",
     "Br2",
     "Cl2"
    ],
    "ma": [
     "DUNG",
     "G3",
     "G3",
     "X"
    ],
    "dung": 0,
    "giai": "Bảng 21.3 (SGK Bài 21): F2 nổ mạnh ngay trong bóng tối; Cl2 cần ánh sáng; Br2 ~200 °C; I2 ~300 °C và thuận nghịch."
   },
   {
    "muc": "H",
    "de": "Trong phản ứng Cl2 + H2O ⇌ HCl + HClO, chlorine đóng vai trò",
    "chon": [
     "vừa là chất oxi hoá, vừa là chất khử",
     "chỉ là chất oxi hoá",
     "chỉ là chất khử",
     "không thay đổi số oxi hoá"
    ],
    "ma": [
     "DUNG",
     "G7",
     "G7",
     "X"
    ],
    "dung": 0,
    "giai": "Cl: 0 → −1 (HCl) và 0 → +1 (HClO): Cl2 tự oxi hoá – tự khử (SGK Bài 21).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Phản ứng nào sau đây KHÔNG xảy ra?",
    "chon": [
     "I2 + 2NaCl → 2NaI + Cl2",
     "Cl2 + 2NaI → 2NaCl + I2",
     "Br2 + 2NaI → 2NaBr + I2",
     "Cl2 + 2KBr → 2KCl + Br2"
    ],
    "ma": [
     "DUNG",
     "G3",
     "G3",
     "G3"
    ],
    "dung": 0,
    "giai": "Halogen mạnh hơn oxi hoá được ion halide của halogen yếu hơn (SGK Bài 21). I2 yếu hơn Cl2 nên không đẩy được Cl2."
   }
  ]
 },
 "cd-b21-t3": {
  "ten": "Chẩn đoán trước tiết — Bài 21. Nhóm halogen (tiết 3: điều chế chlorine, luyện tập)",
  "chuong": 7,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "21",
  "loai": "truoc",
  "tiet": "Tiết 55",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Trong phòng thí nghiệm, khí chlorine được điều chế bằng cách",
    "chon": [
     "cho MnO2 (hoặc KMnO4) tác dụng với dung dịch HCl đặc",
     "điện phân dung dịch NaCl bão hoà có màng ngăn",
     "cho NaCl tác dụng với dung dịch HCl",
     "nhiệt phân KCl"
    ],
    "ma": [
     "DUNG",
     "G17",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Phòng thí nghiệm: MnO2 + 4HCl(đặc) → MnCl2 + Cl2 + 2H2O; điện phân dung dịch muối ăn có màng ngăn là cách sản xuất trong công nghiệp (SGK Bài 21)."
   },
   {
    "muc": "H",
    "de": "Nước Javel (tạo từ Cl2 + 2NaOH → NaCl + NaClO + H2O) tẩy màu, khử trùng được là nhờ",
    "chon": [
     "NaClO có tính oxi hoá mạnh",
     "NaCl có trong nước Javel",
     "NaOH còn dư",
     "nước có trong dung dịch"
    ],
    "ma": [
     "DUNG",
     "G14",
     "G14",
     "X"
    ],
    "dung": 0,
    "giai": "Sodium hypochlorite NaClO (Cl có số oxi hoá +1) có tính oxi hoá mạnh → tẩy màu, diệt khuẩn (SGK Bài 21).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Khi điện phân dung dịch NaCl bão hoà để sản xuất chlorine, cần màng ngăn xốp giữa hai điện cực vì",
    "chon": [
     "để Cl2 sinh ra không tác dụng với NaOH sinh ra ở cực âm",
     "để tăng tốc độ điện phân",
     "để NaCl không bị điện phân",
     "để Cl2 không tan trong nước"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Không có màng ngăn, Cl2 gặp NaOH tạo nước Javel, không thu được Cl2 (Câu 9, SGK Bài 21)."
   },
   {
    "muc": "V",
    "de": "Trong phản ứng MnO2 + 4HCl(đặc) → MnCl2 + Cl2 + 2H2O, số phân tử HCl đóng vai trò chất khử là",
    "chon": [
     "2",
     "4",
     "1",
     "3"
    ],
    "ma": [
     "DUNG",
     "K14",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Chỉ 2 Cl⁻ bị oxi hoá thành Cl2 (−1 → 0); 2 phân tử HCl còn lại tạo muối MnCl2 (Cl giữ −1).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho 8,7 gam MnO2 (MnO2 = 87) tác dụng hết với dung dịch HCl đặc, dư. Thể tích khí Cl2 thu được ở điều kiện chuẩn là",
    "chon": [
     "2,479 L",
     "9,916 L",
     "1,239 L",
     "2,24 L"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "E12"
    ],
    "dung": 0,
    "giai": "n(MnO2) = 0,1 mol = n(Cl2) → V = 0,1 × 24,79 = 2,479 L."
   }
  ]
 },
 "cd-b21-sau": {
  "ten": "Kiểm tra sau tiết — Bài 21. Nhóm halogen",
  "chuong": 7,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "21",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b21-t1",
   "cd-b21-t2",
   "cd-b21-t3"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "B",
    "de": "Nguyên tố halogen có độ âm điện lớn nhất là",
    "chon": [
     "F",
     "I",
     "Cl",
     "Br"
    ],
    "ma": [
     "DUNG",
     "T9",
     "X",
     "T9"
    ],
    "dung": 0,
    "giai": "Độ âm điện giảm từ F (3,98) đến I (2,66) (Bảng 6.2)."
   },
   {
    "muc": "H",
    "de": "Nhỏ nước bromine vào dung dịch NaI: Br2 + 2NaI → 2NaBr + I2. Nhận xét nào ĐÚNG?",
    "chon": [
     "Br2 có tính oxi hoá mạnh hơn I2",
     "I2 có tính oxi hoá mạnh hơn Br2",
     "NaI là chất oxi hoá",
     "Br2 là chất khử"
    ],
    "ma": [
     "DUNG",
     "G3",
     "K5",
     "G2"
    ],
    "dung": 0,
    "giai": "Br2 nhận electron của I⁻ (chất oxi hoá) → tính oxi hoá Br2 > I2 (SGK Bài 21).",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Số oxi hoá của chlorine trong NaClO là",
    "chon": [
     "+1",
     "−1",
     "+2",
     "0"
    ],
    "ma": [
     "DUNG",
     "G4",
     "K3",
     "X"
    ],
    "dung": 0,
    "giai": "(+1) + x + (−2) = 0 → x = +1. Chlorine có số oxi hoá dương khi liên kết với nguyên tố có độ âm điện lớn hơn (O)."
   },
   {
    "muc": "H",
    "de": "Cồn iodine (iodine hoà tan trong ethanol) được dùng làm thuốc sát trùng. Nhận xét nào ĐÚNG?",
    "chon": [
     "Halogen ít tan trong nước nhưng tan nhiều trong dung môi hữu cơ như ethanol",
     "Iodine tan rất tốt trong nước",
     "Iodine phản ứng với ethanol tạo muối iodide",
     "Iodine tan trong ethanol nhờ liên kết hydrogen giữa I2 và ethanol"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "H2"
    ],
    "dung": 0,
    "giai": "SGK Bài 21: halogen ít tan trong nước, tan nhiều trong alcohol, benzene; dung dịch iodine loãng trong ethanol dùng sát trùng.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Đốt cháy hết 5,6 gam Fe (Fe = 56) trong khí Cl2 dư. Khối lượng muối thu được là",
    "chon": [
     "16,25 g",
     "12,70 g",
     "32,50 g",
     "8,125 g"
    ],
    "ma": [
     "DUNG",
     "G13",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "2Fe + 3Cl2 → 2FeCl3; n(FeCl3) = n(Fe) = 0,1 mol → m = 0,1 × 162,5 = 16,25 g."
   }
  ]
 },
 "cd-b22-t1": {
  "ten": "Chẩn đoán trước tiết — Bài 22. Hydrogen halide. Muối halide (tiết 1: hydrogen halide, tính acid)",
  "chuong": 7,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "22",
  "loai": "truoc",
  "tiet": "Tiết 56",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Ở điều kiện thường, các hydrogen halide",
    "chon": [
     "là chất khí, tan tốt trong nước tạo dung dịch acid",
     "là chất lỏng",
     "là chất khí, không tan trong nước",
     "là chất rắn màu trắng"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Hydrogen halide ở thể khí, tan tốt trong nước tạo hydrohalic acid (SGK Bài 22)."
   },
   {
    "muc": "H",
    "de": "Hydrogen fluoride có nhiệt độ sôi cao bất thường (+19,5 °C) so với HCl, HBr, HI vì",
    "chon": [
     "giữa các phân tử HF có liên kết hydrogen",
     "HF có khối lượng phân tử lớn nhất",
     "liên kết H–F bền nhất nên khó phá vỡ khi sôi",
     "HF là acid mạnh nhất"
    ],
    "ma": [
     "DUNG",
     "H5",
     "H4",
     "G8"
    ],
    "dung": 0,
    "giai": "HF phân cực mạnh, tạo liên kết hydrogen H–F···H–F (SGK Bài 22). Thực ra HF có khối lượng phân tử nhỏ nhất; khi sôi, liên kết H–F không bị phá.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Tính acid của các hydrohalic acid biến đổi theo chiều",
    "chon": [
     "tăng dần từ HF đến HI",
     "giảm dần từ HF đến HI",
     "không đổi, vì cùng là acid",
     "HCl mạnh nhất, HF và HI yếu"
    ],
    "ma": [
     "DUNG",
     "G8",
     "T12",
     "X"
    ],
    "dung": 0,
    "giai": "Tính acid tăng từ HF (acid yếu) đến HI (acid rất mạnh) (SGK Bài 22)."
   },
   {
    "muc": "H",
    "de": "Từ HF đến HI, độ dài liên kết H–X tăng (92 → 160 pm), năng lượng liên kết giảm (569 → 299 kJ/mol). Vì sao HI là acid mạnh nhất?",
    "chon": [
     "Liên kết H–I dài, kém bền nhất nên dễ phân li ra ion H⁺",
     "Iodine có độ âm điện lớn nhất",
     "Liên kết H–I phân cực mạnh nhất",
     "Phân tử HI nhẹ nhất"
    ],
    "ma": [
     "DUNG",
     "T9",
     "G15",
     "X"
    ],
    "dung": 0,
    "giai": "Liên kết H–X càng dài, càng kém bền thì càng dễ tách H⁺ → tính acid tăng (Bảng 22.1). Thực ra H–I phân cực yếu nhất (Δχ nhỏ nhất).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Nhiệt độ sôi (°C): HF +19,5; HCl −84,9; HBr −66,7; HI −35,8. Thứ tự nhiệt độ sôi TĂNG dần là",
    "chon": [
     "HCl < HBr < HI < HF",
     "HF < HCl < HBr < HI",
     "HI < HBr < HCl < HF",
     "HF < HI < HBr < HCl"
    ],
    "ma": [
     "DUNG",
     "G9",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Đọc Bảng 22.2: −84,9 < −66,7 < −35,8 < +19,5. Từ HCl đến HI tăng do van der Waals; HF cao nhất do liên kết hydrogen."
   }
  ]
 },
 "cd-b22-t2": {
  "ten": "Chẩn đoán trước tiết — Bài 22. Hydrogen halide. Muối halide (tiết 2: tính chất của hydrochloric acid)",
  "chuong": 7,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "22",
  "loai": "truoc",
  "tiet": "Tiết 57",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Dãy kim loại đều tác dụng được với dung dịch HCl loãng là",
    "chon": [
     "Zn, Fe, Mg",
     "Zn, Cu, Fe",
     "Ag, Mg, Al",
     "Cu, Ag, Zn"
    ],
    "ma": [
     "DUNG",
     "G12",
     "G12",
     "G12"
    ],
    "dung": 0,
    "giai": "Cu, Ag không tác dụng với dung dịch HCl (thí nghiệm Zn và Cu, SGK Bài 22)."
   },
   {
    "muc": "H",
    "de": "Cho đinh sắt vào dung dịch HCl loãng. Phương trình hoá học ĐÚNG là",
    "chon": [
     "Fe + 2HCl → FeCl2 + H2",
     "2Fe + 6HCl → 2FeCl3 + 3H2",
     "Fe + 2HCl → FeCl2 + Cl2",
     "Fe + 3HCl → FeCl3 + 3/2H2O"
    ],
    "ma": [
     "DUNG",
     "G13",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Ion H⁺ của HCl chỉ oxi hoá Fe lên +2 → FeCl2. Với Cl2 (chất oxi hoá mạnh) mới tạo FeCl3.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Hydrochloric acid được dùng để đánh sạch lớp gỉ (oxide, hydroxide, carbonate) trên bề mặt thép trước khi sơn, mạ. Ứng dụng này dựa vào",
    "chon": [
     "tính acid của HCl",
     "tính oxi hoá của HCl",
     "tính khử của HCl",
     "tính tẩy màu của HCl"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "G14"
    ],
    "dung": 0,
    "giai": "HCl tác dụng với oxide, hydroxide, muối carbonate của kim loại → thể hiện tính acid (Câu 5, SGK Bài 22)."
   },
   {
    "muc": "H",
    "de": "Trong phản ứng 2KMnO4 + 16HCl → 2KCl + 2MnCl2 + 5Cl2 + 8H2O, hydrochloric acid thể hiện",
    "chon": [
     "vừa tính khử (10 phân tử HCl tạo Cl2), vừa tính acid (6 phân tử HCl tạo muối)",
     "chỉ tính oxi hoá",
     "chỉ tính acid",
     "chỉ tính khử, cả 16 phân tử HCl đều bị oxi hoá"
    ],
    "ma": [
     "DUNG",
     "K5",
     "X",
     "K14"
    ],
    "dung": 0,
    "giai": "10 Cl⁻ → 5Cl2 (−1 → 0): tính khử; 6 Cl⁻ còn lại đi vào 2KCl + 2MnCl2: tính acid (SGK Bài 22).",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho 6,5 gam Zn (Zn = 65) tác dụng hết với dung dịch HCl dư. Thể tích khí H2 thu được ở điều kiện chuẩn là",
    "chon": [
     "2,479 L",
     "4,958 L",
     "2,24 L",
     "1,239 L"
    ],
    "ma": [
     "DUNG",
     "X",
     "E12",
     "X"
    ],
    "dung": 0,
    "giai": "Zn + 2HCl → ZnCl2 + H2; n(H2) = n(Zn) = 0,1 mol → V = 0,1 × 24,79 = 2,479 L."
   }
  ]
 },
 "cd-b22-t3": {
  "ten": "Chẩn đoán trước tiết — Bài 22. Hydrogen halide. Muối halide (tiết 3: muối halide)",
  "chuong": 7,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "22",
  "loai": "truoc",
  "tiet": "Tiết 58",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Muối nào sau đây KHÔNG tan trong nước?",
    "chon": [
     "AgCl",
     "AgF",
     "NaCl",
     "CaCl2"
    ],
    "ma": [
     "DUNG",
     "G10",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Hầu hết muối halide dễ tan, trừ AgCl, AgBr, AgI (không tan) và PbCl2, PbBr2 (ít tan) (SGK Bài 22). AgF tan."
   },
   {
    "muc": "H",
    "de": "Nhỏ dung dịch AgNO3 vào dung dịch NaF. Hiện tượng là",
    "chon": [
     "không có kết tủa",
     "có kết tủa trắng",
     "có kết tủa vàng nhạt",
     "có kết tủa vàng"
    ],
    "ma": [
     "DUNG",
     "G10",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "AgF tan trong nước nên không có kết tủa → dùng AgNO3 nhận ra NaF vì «không hiện tượng».",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Nhỏ dung dịch AgNO3 vào dung dịch NaBr thu được kết tủa",
    "chon": [
     "AgBr màu vàng nhạt",
     "AgBr màu trắng",
     "AgBr màu đen",
     "AgNO3 màu trắng"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "NaBr + AgNO3 → AgBr↓ (vàng nhạt) + NaNO3. AgCl trắng, AgI vàng."
   },
   {
    "muc": "H",
    "de": "Tính khử của các ion halide biến đổi theo chiều",
    "chon": [
     "Cl⁻ < Br⁻ < I⁻",
     "Cl⁻ > Br⁻ > I⁻",
     "như nhau, vì cùng điện tích −1",
     "Br⁻ < Cl⁻ < I⁻"
    ],
    "ma": [
     "DUNG",
     "G11",
     "T12",
     "G11"
    ],
    "dung": 0,
    "giai": "Tính khử của ion halide tăng dần Cl⁻ < Br⁻ < I⁻ (SGK Bài 22) — ngược chiều tính oxi hoá của đơn chất.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho NaCl, NaBr, NaI lần lượt tác dụng với H2SO4 đặc. Chỉ NaCl tạo ra HCl mà không khử được H2SO4 thành SO2 hay H2S, vì",
    "chon": [
     "ion Cl⁻ có tính khử yếu nhất trong ba ion",
     "ion Cl⁻ có tính khử mạnh nhất",
     "NaCl là chất oxi hoá mạnh",
     "Cl2 sinh ra bay đi ngay nên không thấy"
    ],
    "ma": [
     "DUNG",
     "G11",
     "K5",
     "X"
    ],
    "dung": 0,
    "giai": "NaBr khử H2SO4 đặc thành SO2, NaI khử thành H2S; NaCl chỉ phản ứng trao đổi (SGK Bài 22) → Cl⁻ khử yếu nhất."
   }
  ]
 },
 "cd-b22-t4": {
  "ten": "Chẩn đoán trước tiết — Bài 22. Hydrogen halide. Muối halide (tiết 4: luyện tập)",
  "chuong": 7,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "22",
  "loai": "truoc",
  "tiet": "Tiết 59",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "H",
    "de": "Không dùng nước biển để tưới cây vì",
    "chon": [
     "nồng độ muối cao làm cây bị mất nước",
     "nước biển chứa nhiều khí Cl2 độc",
     "nước biển có tính acid mạnh",
     "nước biển chứa I2 làm cháy lá"
    ],
    "ma": [
     "DUNG",
     "G1",
     "X",
     "G1"
    ],
    "dung": 0,
    "giai": "Nước biển chứa nhiều muối (chủ yếu NaCl), làm cây mất nước (Câu 7, SGK Bài 22). Halogen trong nước biển ở dạng ion halide, không phải đơn chất."
   },
   {
    "muc": "V",
    "de": "Pha 1 lít nước muối sinh lí NaCl 0,9% (coi khối lượng riêng là 1 g/mL) cần khối lượng muối ăn là",
    "chon": [
     "9 g",
     "0,9 g",
     "90 g",
     "1 g"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "m(dung dịch) = 1 000 g → m(NaCl) = 1 000 × 0,9% = 9 g.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho dung dịch chứa 10,3 gam NaBr (NaBr = 103) tác dụng với dung dịch AgNO3 dư. Khối lượng kết tủa (AgBr = 188) là",
    "chon": [
     "18,8 g",
     "14,35 g",
     "23,5 g",
     "17,0 g"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "n(AgBr) = n(NaBr) = 0,1 mol → m = 0,1 × 188 = 18,8 g."
   },
   {
    "muc": "V",
    "de": "Cho dung dịch chứa 0,1 mol NaF và 0,1 mol NaCl tác dụng với dung dịch AgNO3 dư. Khối lượng kết tủa thu được là",
    "chon": [
     "14,35 g",
     "27,05 g",
     "28,70 g",
     "12,70 g"
    ],
    "ma": [
     "DUNG",
     "G10",
     "X",
     "G10"
    ],
    "dung": 0,
    "giai": "Chỉ AgCl kết tủa: 0,1 × 143,5 = 14,35 g; AgF tan nên không tính.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Dung dịch HCl tác dụng được với TẤT CẢ các chất trong dãy",
    "chon": [
     "Fe, MgO, Cu(OH)2, AgNO3",
     "Cu, MgO, NaHCO3, AgNO3",
     "Fe, CO2, Cu(OH)2, NaHCO3",
     "Zn, CaCO3, NaNO3, Ag"
    ],
    "ma": [
     "DUNG",
     "G12",
     "X",
     "G12"
    ],
    "dung": 0,
    "giai": "Cu, Ag không tác dụng với HCl; CO2 (oxide acid) và NaNO3 không phản ứng với HCl."
   }
  ]
 },
 "cd-b22-sau": {
  "ten": "Kiểm tra sau tiết — Bài 22. Hydrogen halide. Muối halide",
  "chuong": 7,
  "mo": true,
  "phut": 7,
  "haiBac": true,
  "bai": "22",
  "loai": "sau",
  "tiet": "",
  "truoc": [
   "cd-b22-t1",
   "cd-b22-t2",
   "cd-b22-t3",
   "cd-b22-t4"
  ],
  "loiDan": "Làm SAU tiết học. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — so với bài trước tiết để em và cô thấy chỗ hiểu nhầm đã được gỡ chưa.",
  "cau": [
   {
    "muc": "H",
    "de": "Từ HCl đến HI, nhiệt độ sôi tăng dần vì",
    "chon": [
     "tương tác van der Waals và khối lượng phân tử tăng",
     "liên kết hydrogen giữa các phân tử tăng",
     "liên kết H–X trong phân tử bền dần",
     "tính acid tăng dần"
    ],
    "ma": [
     "DUNG",
     "H2",
     "H4",
     "X"
    ],
    "dung": 0,
    "giai": "SGK Bài 22: từ HCl đến HI nhiệt độ sôi tăng do van der Waals tăng, khối lượng phân tử tăng. HCl, HBr, HI không tạo liên kết hydrogen như HF.",
    "viSao": true
   },
   {
    "muc": "B",
    "de": "Thuốc thử dùng để phân biệt hai dung dịch NaCl và NaI là",
    "chon": [
     "dung dịch AgNO3",
     "quỳ tím",
     "dung dịch HCl",
     "dung dịch NaOH"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "AgNO3: NaCl cho kết tủa trắng AgCl, NaI cho kết tủa vàng AgI."
   },
   {
    "muc": "H",
    "de": "Phản ứng nào sau đây thể hiện tính khử của ion halide?",
    "chon": [
     "8NaI + 9H2SO4(đặc) → 8NaHSO4 + 4I2 + H2S + 4H2O",
     "NaCl + AgNO3 → AgCl + NaNO3",
     "NaCl(rắn) + H2SO4(đặc) → NaHSO4 + HCl",
     "HCl + NaOH → NaCl + H2O"
    ],
    "ma": [
     "DUNG",
     "K9",
     "G11",
     "X"
    ],
    "dung": 0,
    "giai": "I⁻ (−1) → I2 (0): nhường electron → tính khử. Các phản ứng còn lại là phản ứng trao đổi, không đổi số oxi hoá."
   },
   {
    "muc": "H",
    "de": "Dãy acid được xếp theo chiều tính acid TĂNG dần là",
    "chon": [
     "HF < HCl < HBr < HI",
     "HI < HBr < HCl < HF",
     "HCl < HF < HBr < HI",
     "HF < HI < HBr < HCl"
    ],
    "ma": [
     "DUNG",
     "G8",
     "X",
     "G15"
    ],
    "dung": 0,
    "giai": "Tính acid tăng từ HF (yếu) đến HI (rất mạnh) vì liên kết H–X kém bền dần.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho 12 gam hỗn hợp Fe và Cu tác dụng với dung dịch HCl dư, thu được 2,479 L khí H2 (điều kiện chuẩn). Phần trăm khối lượng Cu trong hỗn hợp là (Fe = 56, Cu = 64)",
    "chon": [
     "53,33%",
     "46,67%",
     "100%, vì chỉ Cu tạo H2",
     "không tính được, vì Cu cũng tạo H2"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "G12"
    ],
    "dung": 0,
    "giai": "Chỉ Fe phản ứng: n(Fe) = n(H2) = 0,1 mol → m(Fe) = 5,6 g → m(Cu) = 6,4 g → %Cu = 6,4 : 12 × 100% ≈ 53,33%."
   }
  ]
 },
 "cd-b23": {
  "ten": "Chẩn đoán trước tiết — Bài 23. Ôn tập Chương 7",
  "chuong": 7,
  "mo": true,
  "phut": 10,
  "haiBac": true,
  "bai": "23",
  "loai": "truoc",
  "tiet": "Tiết 60",
  "truoc": [],
  "loiDan": "Làm SAU khi học xong bài E-learning, TRƯỚC giờ lên lớp. Mỗi câu 2 bước: chọn đáp án, rồi bấm «Em chắc chắn» hoặc «Em đoán». Không lấy điểm — cô xem để biết lớp còn hiểu nhầm chỗ nào và dạy đúng chỗ đó. Em cứ chọn theo suy nghĩ thật của mình nhé.",
  "cau": [
   {
    "muc": "B",
    "de": "Cấu hình electron lớp ngoài cùng của các nguyên tử halogen là",
    "chon": [
     "ns²np⁵",
     "ns²np⁶",
     "ns²np⁴",
     "ns¹"
    ],
    "ma": [
     "DUNG",
     "X",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Halogen thuộc nhóm VIIA: 7 electron lớp ngoài cùng ns²np⁵ (SGK Bài 21)."
   },
   {
    "muc": "H",
    "de": "Dãy liên kết được xếp theo chiều độ dài liên kết TĂNG dần là",
    "chon": [
     "H–F < H–Cl < H–Br < H–I",
     "H–I < H–Br < H–Cl < H–F",
     "H–Cl < H–F < H–Br < H–I",
     "H–F < H–Br < H–Cl < H–I"
    ],
    "ma": [
     "DUNG",
     "G15",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "Bán kính nguyên tử halogen tăng từ F đến I → độ dài liên kết H–X tăng: 92 < 127 < 141 < 160 pm (Bảng 22.1)."
   },
   {
    "muc": "H",
    "de": "Nhỏ nước chlorine vào dung dịch KI có sẵn vài giọt hồ tinh bột, dung dịch chuyển màu xanh tím vì",
    "chon": [
     "Cl2 oxi hoá I⁻ thành I2, I2 làm hồ tinh bột hoá xanh tím",
     "Cl2 làm hồ tinh bột hoá xanh tím",
     "I⁻ oxi hoá Cl2 thành Cl⁻",
     "KCl tạo thành làm hồ tinh bột đổi màu"
    ],
    "ma": [
     "DUNG",
     "X",
     "K5",
     "X"
    ],
    "dung": 0,
    "giai": "Cl2 + 2KI → 2KCl + I2; hồ tinh bột là thuốc thử nhận ra I2 (hoạt động SGK Bài 21). I⁻ là chất khử, Cl2 là chất oxi hoá.",
    "viSao": true
   },
   {
    "muc": "H",
    "de": "Halogen phản ứng mạnh với nước ngay ở nhiệt độ thường, giải phóng khí oxygen là",
    "chon": [
     "F2",
     "I2",
     "Br2",
     "Cl2"
    ],
    "ma": [
     "DUNG",
     "G3",
     "G3",
     "X"
    ],
    "dung": 0,
    "giai": "2F2 + 2H2O → 4HF + O2 (Em có biết, SGK Bài 21); Cl2, Br2, I2 phản ứng chậm với nước, giảm dần từ Cl2 đến I2."
   },
   {
    "muc": "V",
    "de": "Cho dung dịch chứa 0,01 mol NaF và 0,01 mol NaI tác dụng với dung dịch AgNO3 dư (AgF = 127, AgI = 235). Khối lượng kết tủa là",
    "chon": [
     "2,35 g",
     "3,62 g",
     "1,27 g",
     "4,70 g"
    ],
    "ma": [
     "DUNG",
     "G10",
     "G10",
     "X"
    ],
    "dung": 0,
    "giai": "Chỉ AgI kết tủa: 0,01 × 235 = 2,35 g. AgF tan.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Một ruộng muối chứa 50 000 L nước biển; mỗi lít chứa 25 gam NaCl; hiệu suất thu muối 80%. Khối lượng muối thu được là",
    "chon": [
     "1 000 kg",
     "1 250 kg",
     "1 562,5 kg",
     "100 kg"
    ],
    "ma": [
     "DUNG",
     "E15",
     "E15",
     "X"
    ],
    "dung": 0,
    "giai": "m(lí thuyết) = 50 000 × 25 = 1 250 000 g = 1 250 kg → m(thực tế) = 1 250 × 80% = 1 000 kg."
   },
   {
    "muc": "H",
    "de": "Trong công nghiệp, chlorine được sản xuất bằng cách",
    "chon": [
     "điện phân dung dịch NaCl bão hoà có màng ngăn",
     "cho MnO2 tác dụng với dung dịch HCl đặc",
     "điện phân dung dịch NaCl không có màng ngăn",
     "nhiệt phân NaCl"
    ],
    "ma": [
     "DUNG",
     "G17",
     "X",
     "X"
    ],
    "dung": 0,
    "giai": "2NaCl + 2H2O → 2NaOH + H2 + Cl2 (điện phân có màng ngăn, SGK Bài 21). MnO2 + HCl đặc là cách điều chế trong phòng thí nghiệm.",
    "viSao": true
   },
   {
    "muc": "V",
    "de": "Cho phản ứng 3Cl2 + 6KOH → 5KCl + KClO3 + 3H2O (đun nóng). Tỉ lệ số nguyên tử chlorine bị khử : số nguyên tử chlorine bị oxi hoá là",
    "chon": [
     "5 : 1",
     "1 : 5",
     "1 : 1",
     "3 : 1"
    ],
    "ma": [
     "DUNG",
     "K7",
     "G7",
     "X"
    ],
    "dung": 0,
    "giai": "5 nguyên tử Cl: 0 → −1 (bị khử, vào KCl); 1 nguyên tử Cl: 0 → +5 (bị oxi hoá, vào KClO3) → 5 : 1."
   }
  ]
 }
});
