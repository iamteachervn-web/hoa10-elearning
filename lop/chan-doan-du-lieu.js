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
 "X": "Nhiễu thường (không gắn quan niệm sai cụ thể)"
};
Object.assign(KHAO_SAT, {
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
 }
});
