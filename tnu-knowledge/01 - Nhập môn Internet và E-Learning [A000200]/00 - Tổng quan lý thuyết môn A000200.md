---
title: "Nhập môn Internet và E-Learning"
courseCode: "A000200"
tags:
  - course-overview
  - A000200
---

# 🎓 TỔNG HỢP KIẾN THỨC & NGÂN HÀNG ĐỀ THI: A000200 - NHẬP MÔN INTERNET VÀ E-LEARNING
> **Kho tài liệu chuẩn hóa eTNU dành riêng cho Google Gemini NotebookLM.**  
> *Bao gồm toàn bộ giáo trình lý thuyết chi tiết, mô hình, giải thuật, cú pháp và ngân hàng câu hỏi trắc nghiệm chính thức 100%.*

---

# PHẦN 1: MÔN A000200 - NHẬP MÔN INTERNET VÀ E-LEARNING

## BÀI 1: NHỮNG KHÁI NIỆM CƠ BẢN VỀ MẠNG MÁY TÍNH & INTERNET

### 1. Khái niệm và Mục đích của Mạng máy tính
- **Định nghĩa:** Mạng máy tính (Computer Network) là một hệ thống gồm hai hay nhiều máy tính và các thiết bị ngoại vi được kết nối với nhau thông qua các đường truyền vật lý (có dây hoặc không dây) và tuân thủ các quy tắc truyền thông (giao thức - protocol) nhằm mục đích trao đổi thông tin và chia sẻ tài nguyên.
- **Mục đích và lợi ích cốt lõi:**
  1. **Chia sẻ tài nguyên phần cứng:** Dùng chung máy in, máy quét, ổ đĩa lưu trữ mạng (NAS/SAN), ổ đĩa quang, năng lực xử lý tính toán.
  2. **Chia sẻ dữ liệu và phần mềm:** Cho phép nhiều người dùng cùng truy cập cơ sở dữ liệu tập trung, các phần mềm quản trị doanh nghiệp (ERP, CRM) mà không cần cài đặt cục bộ trên từng máy.
  3. **Nâng cao độ tin cậy và sẵn sàng:** Dữ liệu có thể được sao lưu phân tán trên nhiều máy chủ dự phòng (Redundancy), đảm bảo hệ thống không bị ngừng trệ khi một nút mạng gặp sự cố.
  4. **Tăng cường khả năng truyền thông:** Cung cấp các công cụ liên lạc tức thì như Email, nhắn tin trực tuyến (Instant Messaging), hội nghị truyền hình (Video Conferencing), cộng tác từ xa.
  5. **Tiết kiệm chi phí đầu tư:** Giảm chi phí mua sắm thiết bị ngoại vi rời rạc và chi phí quản lý vận hành.

### 2. Phân loại Mạng máy tính
#### 2.1. Phân loại theo phạm vi địa lý
- **PAN (Personal Area Network - Mạng cá nhân):** Phạm vi kết nối rất hẹp (dưới 10m), kết nối các thiết bị cá nhân như điện thoại, đồng hồ thông minh, tai nghe, laptop qua Bluetooth, ZigBee, NFC.
- **LAN (Local Area Network - Mạng cục bộ):** Kết nối các máy tính trong phạm vi hẹp như một văn phòng, một tòa nhà hoặc một trường học (bán kính vài chục mét đến vài kilômét). Tốc độ truyền dữ liệu rất cao (100 Mbps đến 10 Gbps), tỷ lệ lỗi đường truyền cực thấp, thuộc quyền sở hữu của một tổ chức/cá nhân.
- **WLAN (Wireless Local Area Network):** Mạng LAN không dây, truyền tín hiệu qua sóng radio theo chuẩn IEEE 802.11 (Wi-Fi: 802.11a/b/g/n/ac/ax).
- **MAN (Metropolitan Area Network - Mạng đô thị):** Kết nối các mạng LAN trong phạm vi một thành phố, thị xã (bán kính vài chục km). Thường do các tập đoàn viễn thông lớn thiết kế và vận hành hạ tầng cáp quang tốc độ cao.
- **WAN (Wide Area Network - Mạng diện rộng):** Kết nối các máy tính trên phạm vi vùng lãnh thổ rộng lớn, một quốc gia hoặc toàn cầu. Tốc độ truyền dữ liệu thường thấp hơn LAN do khoảng cách địa lý xa và độ phức tạp định tuyến cao.
- **GAN (Global Area Network - Mạng toàn cầu):** Hệ thống mạng bao phủ toàn cầu, kết hợp vệ tinh và cáp quang biển xuyên lục địa.

#### 2.2. Phân loại theo cấu trúc hình học (Network Topology)
| Topo mạng | Cấu trúc & Nguyên lý hoạt động | Ưu điểm | Nhược điểm |
| :--- | :--- | :--- | :--- |
| **Bus (Đường trục)** | Tất cả các nút mạng kết nối vào một đường cáp trục chung (Backbone). Hai đầu cáp phải có điện trở kết thúc (**Terminator**) để hấp thụ tín hiệu dội ngược. | Tiết kiệm dây cáp, dễ lắp đặt và mở rộng cho mạng nhỏ. | Đứt cáp trục tại bất kỳ vị trí nào sẽ làm tê liệt toàn bộ mạng. Tốc độ suy giảm mạnh khi nhiều máy cùng gửi tín hiệu (xảy ra xung đột Collision). |
| **Star (Hình sao)** | Tất cả các máy tính nối trực tiếp vào một thiết bị trung tâm (**Hub** hoặc **Switch**). | Dễ lắp đặt, cấu hình. Một máy hoặc một nhánh cáp hỏng không ảnh hưởng đến các máy khác. Dễ cô lập sự cố. | Tốn nhiều dây cáp. Nếu thiết bị trung tâm (Hub/Switch) hỏng thì toàn bộ hệ thống ngừng hoạt động hoàn toàn. |
| **Ring (Vòng tròn)** | Các nút mạng kết nối thành một vòng khép kín. Tín hiệu truyền theo một chiều xác định. Quyền truyền dữ liệu được kiểm soát bằng một gói tin đặc biệt gọi là thẻ bài (**Token**). | Không xảy ra xung đột dữ liệu, tốc độ truyền ổn định. | Một nút hoặc một đoạn cáp đứt sẽ làm tê liệt cả vòng mạng. Khó khăn khi mở rộng hoặc cấu hình lại. (Được khắc phục trong mạng FDDI dùng vòng kép dự phòng). |
| **Mesh (Hình lưới)** | Mỗi nút mạng đều có kết nối trực tiếp đến tất cả các nút mạng khác (Lưới toàn phần - Full Mesh) hoặc đến nhiều nút khác (Lưới từng phần - Partial Mesh). | Độ tin cậy và khả năng dự phòng cao nhất; dữ liệu luôn tìm được tuyến đường thay thế khi có nhánh bị đứt. | Chi phí dây cáp và cổng kết nối vô cùng đắt đỏ, cấu hình phức tạp (Số đường cáp trong Full Mesh $N$ nút = $N(N-1)/2$). |
| **Tree (Hình cây)** | Cấu trúc phân cấp nhiều tầng gồm các mạng hình sao nối vào các thiết bị gom tuyến (Hub/Switch phân tầng). | Dễ quản lý theo cấp bậc, dễ chia sẻ tài nguyên theo phòng ban. | Khi một thiết bị phân nhánh cấp cao hỏng, toàn bộ nhánh con cấp dưới bị mất kết nối. |

#### 2.3. Phân loại theo kiến trúc mạng (Network Architecture)
- **Mô hình Khách - Chủ (Client - Server):**
  - **Server (Máy chủ):** Máy tính có cấu hình mạnh, cung cấp dịch vụ và tài nguyên (Web server, Mail server, Database server, File server).
  - **Client (Máy khách):** Máy tính người dùng gửi yêu cầu (Request) đến máy chủ và nhận kết quả trả về (Response).
  - *Ưu điểm:* Quản lý tập trung, an toàn bảo mật dữ liệu cao, dễ sao lưu và kiểm soát quyền truy cập.
  - *Nhược điểm:* Chi phí đầu tư máy chủ chuyên dụng tốn kém; nếu Server bị sập thì toàn bộ Client mất dịch vụ (Single point of failure).
- **Mô hình Mạng ngang hàng (Peer-to-Peer - P2P):**
  - Tất cả các máy tính trong mạng đều có vai trò bình đẳng, vừa có thể đóng vai trò máy khách (yêu cầu tài nguyên), vừa đóng vai trò máy chủ (cung cấp tài nguyên cho máy khác).
  - *Ưu điểm:* Chi phí thấp, không cần máy chủ chuyên dụng, dễ cài đặt cho nhóm nhỏ (dưới 10 máy).
  - *Nhược điểm:* Bảo mật kém, khó quản lý dữ liệu phân tán, người dùng phải tự bảo vệ dữ liệu trên máy mình.

---

### 3. Lịch sử Phát triển Internet & Các Tổ chức Quản lý
- **Lịch sử hình thành:**
  - **1969:** Cơ quan Chỉ đạo các Dự án Nghiên cứu Tiên tiến thuộc Bộ Quốc phòng Hoa Kỳ (DARPA) thiết lập mạng **ARPANET** kết nối 4 trường đại học đầu tiên (UCLA, Stanford, UC Santa Barbara, Đại học Utah). Đây là tiền thân trực tiếp của mạng Internet.
  - **1983:** ARPANET chính thức chuyển đổi giao thức truyền thông sang bộ giao thức **TCP/IP** (Transmission Control Protocol / Internet Protocol), đánh dấu sự ra đời của mạng Internet toàn cầu.
  - **1989 - 1991:** Nhà khoa học người Anh **Tim Berners-Lee** tại Trung tâm Nghiên cứu Hạt nhân Châu Âu (CERN) phát minh ra dịch vụ **World Wide Web (WWW)**, ngôn ngữ HTML, giao thức HTTP và trình duyệt web đầu tiên, mở ra kỷ nguyên bùng nổ Internet thương mại.
  - **1997:** Việt Nam chính thức hòa mạng Internet quốc tế vào ngày **19/11/1997**.
- **Các tổ chức quản lý Internet thế giới & Việt Nam:**
  - **ISOC (Internet Society):** Xã hội Internet - Tổ chức quốc tế phi lợi nhuận thúc đẩy sự phát triển cởi mở, sử dụng và phát triển Internet vì lợi ích của toàn nhân loại.
  - **IETF (Internet Engineering Task Force):** Lực lượng kỹ thuật Internet - Chịu trách nhiệm phát triển và xúc tiến các tiêu chuẩn kỹ thuật Internet (đặc biệt là các tài liệu tiêu chuẩn RFC - Request for Comments).
  - **W3C (World Wide Web Consortium):** Hiệp hội WWW quốc tế - Do Tim Berners-Lee sáng lập, chuyên xây dựng các chuẩn cho web (HTML5, CSS3, XML, DOM...).
  - **ICANN (Internet Corporation for Assigned Names and Numbers):** Tập đoàn Internet cấp phát số hiệu và tên miền - Quản lý không gian địa chỉ IP toàn cầu và hệ thống tên miền cấp cao nhất (gTLD, ccTLD).
  - **VNNIC (Vietnam Internet Network Information Center):** Trung tâm Internet Việt Nam (thuộc Bộ Thông tin & Truyền thông) - Chịu trách nhiệm quản lý, phân bổ tài nguyên địa chỉ IP và tên miền quốc gia cấp cao nhất `.vn`.

---

### 4. Các Loại Nhà Cung Cấp Dịch Vụ Internet ở Việt Nam
Hiểu rõ vai trò và mối quan hệ giữa 4 loại nhà cung cấp dịch vụ mạng là nội dung câu hỏi thi rất quan trọng:
1. **IAP (Internet Access Provider - Nhà cung cấp cổng/đường truyền truy cập Internet):**
   - Đơn vị được Nhà nước cấp phép mở cổng kết nối quốc tế và cung cấp đường truyền trục (Backbone) kết nối các mạng trong nước ra quốc tế.
   - *Ví dụ:* VNPT, Viettel, FPT Telecom (phân hệ hạ tầng cổng quốc tế).
   - **Quy tắc quan trọng:** **IAP có thể thực hiện cả chức năng của ISP, nhưng một ISP thông thường thì không thể thực hiện chức năng của IAP.**
2. **ISP (Internet Service Provider - Nhà cung cấp dịch vụ Internet):**
   - Đơn vị thuê đường truyền từ IAP để cung cấp dịch vụ kết nối Internet trực tiếp cho các cơ quan, doanh nghiệp và người dùng gia đình (qua Dial-up, cáp đồng ADSL, cáp quang FTTH, 4G/5G).
   - *Ví dụ:* VNPT, Viettel, FPT Telecom, CMC Telecom, NetNam.
3. **ICP (Internet Content Provider - Nhà cung cấp nội dung thông tin trên Internet):**
   - Đơn vị tạo lập, phát hành và cung cấp các nội dung số, thông tin báo chí, văn hóa, kinh tế, xã hội trên mạng Internet (Báo điện tử VnExpress, Dân Trí, Cổng thông tin Chính phủ, Zing...).
4. **OSP (Online Service Provider - Nhà cung cấp dịch vụ trực tuyến/ứng dụng trên Internet):**
   - Đơn vị khai thác các dịch vụ gia tăng trên nền Internet như: Thương mại điện tử (Shopee, Tiki), Dịch vụ ngân hàng số (Internet Banking), Cổng thanh toán trực tuyến, Đào tạo từ xa (E-Learning), Trò chơi trực tuyến (Online Gaming).

---

### 5. E-Learning và Tiến trình Phát triển
- **Định nghĩa E-Learning (Electronic Learning):** Hình thức học tập và đào tạo dựa trên công nghệ thông tin và truyền thông, trong đó bài giảng, tài liệu học tập, các hoạt động tương tác giữa người học - giảng viên được truyền tải chủ yếu qua mạng Internet hoặc môi trường mạng máy tính.
- **Đặc trưng ưu việt của E-Learning:**
  - **Phi biên giới và thời gian:** Học viên có thể học mọi lúc, mọi nơi (Anytime, Anywhere).
  - **Cá nhân hóa lộ trình:** Học viên tự điều chỉnh tốc độ học tập phù hợp với khả năng nhận thức cá nhân.
  - **Tính tái sử dụng học liệu cao:** Bài giảng số hóa có thể phân phối cho hàng ngàn người học đồng thời với chi phí biên gần như bằng không.
  - **Tương tác đa chiều:** Tương tác linh hoạt qua diễn đàn, bài tập trực tuyến, phòng học ảo.
- **Tiến trình phát triển qua các thế hệ:**
  1. **CBT (Computer-Based Training):** Đào tạo qua máy tính độc lập (thập niên 1980 - 1990), học liệu phân phối qua đĩa mềm, đĩa CD-ROM, không có kết nối mạng.
  2. **WBT (Web-Based Training):** Đào tạo dựa trên nền tảng Web (cuối thập niên 1990), bài học đưa lên trang web nhưng chủ yếu là văn bản và hình ảnh tĩnh một chiều.
  3. **E-Learning 2.0:** Tích hợp các công cụ cộng tác trực tuyến, mạng xã hội, diễn đàn thảo luận hai chiều, bài giảng điện tử đa phương tiện tương tác chuẩn SCORM.
  4. **M-Learning (Mobile Learning):** Học tập trên thiết bị di động (Smartphones, Máy tính bảng), học liệu dạng micro-learning linh hoạt.
  5. **Smart Learning / AI Learning:** Ứng dụng trí tuệ nhân tạo (AI) và phân tích dữ liệu lớn (Learning Analytics) để gợi ý lộ trình học tập thích ứng theo từng học viên.

---

## BÀI 2: KIẾN TRÚC MẠNG INTERNET & GIAO THỨC TRUYỀN THÔNG

### 1. Các Phương Thức Kết Nối Internet Phổ Biến
1. **Kết nối quay số qua mạng điện thoại (Dial-up):**
   - Sử dụng Modem chuyển đổi tín hiệu số sang tín hiệu tương tự để truyền trên mạng điện thoại cố định (PSTN).
   - Tốc độ tối đa lý thuyết: **56 Kbps**. Chiếm dụng hoàn toàn đường dây thoại (khi vào mạng thì không nghe/gọi điện thoại bàn được). Hiện nay đã lỗi thời.
2. **Kết nối mạng băng rộng ISDN:**
   - ISDN BRI (Basic Rate Interface): 2 kênh B (64 Kbps) + 1 kênh D (16 Kbps) = 144 Kbps.
   - ISDN PRI (Primary Rate Interface): T1 (1.544 Mbps - Bắc Mỹ/Nhật) hoặc E1 (2.048 Mbps - Châu Âu/Việt Nam).
3. **Kết nối băng rộng ADSL (Asymmetric Digital Subscriber Line):**
   - Đường thuê bao số bất đối xứng, truyền trên đôi cáp đồng điện thoại có sẵn bằng cách sử dụng các dải tần số cao ngoài dải tần thoại (dùng thiết bị tách tín hiệu **Splitter** để có thể vừa gọi điện thoại vừa truy cập Internet đồng thời).
   - Tính bất đối xứng: Tốc độ tải xuống (Downstream) luôn lớn hơn rất nhiều so với tốc độ tải lên (Upstream) - phù hợp với hành vi tiêu thụ nội dung của người dùng gia đình.
4. **Kết nối cáp quang FTTH (Fiber To The Home):**
   - Tín hiệu truyền bằng ánh sáng qua sợi thủy tinh, tốc độ siêu cao (từ hàng trăm Mbps đến hàng chục Gbps), khoảng cách truyền dẫn rất xa mà không bị suy hao tín hiệu hay nhiễu điện từ.
5. **Kết nối không dây và di động:**
   - Mạng di động thế hệ 3G, 4G LTE, 5G thông qua SIM và trạm thu phát sóng BTS.
   - Kết nối qua vệ tinh (VSAT - Very Small Aperture Terminal): Phù hợp cho vùng sâu, vùng xa, hải đảo, tàu biển nơi cáp quang không thể vươn tới; nhược điểm là độ trễ (latency) tương đối cao.

---

### 2. Mô Hình OSI 7 Tầng (Open Systems Interconnection)
Mô hình chuẩn do tổ chức ISO ban hành để chuẩn hóa kiến trúc mạng truyền thông:
```
[Tầng 7: Application  ] -> Đơn vị: Data (HTTP, FTP, SMTP, DNS)
[Tầng 6: Presentation ] -> Đơn vị: Data (Định dạng, mã hóa ASCII, JPEG, SSL/TLS)
[Tầng 5: Session      ] -> Đơn vị: Data (Thiết lập, duy trì, ngắt phiên liên lạc)
[Tầng 4: Transport    ] -> Đơn vị: Segment (TCP, UDP - Điều khiển luồng, sửa lỗi)
[Tầng 3: Network      ] -> Đơn vị: Packet (IP, ICMP, ARP - Định tuyến, địa chỉ IP)
[Tầng 2: Data Link    ] -> Đơn vị: Frame (Ethernet, MAC, đóng khung, CRC)
[Tầng 1: Physical     ] -> Đơn vị: Bit (Dây cáp, sóng, xung điện, đầu nối RJ45)
```

- **Chức năng chi tiết từng tầng:**
  - **Tầng 7 - Ứng dụng (Application):** Cung cấp giao diện trực tiếp cho các ứng dụng người dùng truy cập các dịch vụ mạng.
  - **Tầng 6 - Trình diễn (Presentation):** Chuyển đổi định dạng dữ liệu (Data formatting), nén dữ liệu (Compression), mã hóa và giải mã bảo mật dữ liệu (Encryption/Decryption).
  - **Tầng 5 - Phiên (Session):** Thiết lập, quản lý, đồng bộ hóa (điểm kiểm tra - checkpoint) và giải phóng các phiên đối thoại giữa các ứng dụng chạy trên các máy khác nhau.
  - **Tầng 4 - Vận chuyển (Transport):** Đảm bảo truyền dữ liệu tin cậy từ đầu cuối đến đầu cuối (End-to-End). Phân đoạn dữ liệu (Segmentation), điều khiển luồng (Flow Control), phát hiện và sửa lỗi, ghép kênh (Port multiplexing).
  - **Tầng 3 - Mạng (Network):** Định tuyến đường đi tối ưu cho gói tin (Routing) qua các mạng khác nhau, gán địa chỉ logic (IP Addressing). Thiết bị hoạt động chính: **Router (Bộ định tuyến)**.
  - **Tầng 2 - Liên kết dữ liệu (Data Link):** Đóng gói dữ liệu thành các Khung tin (**Frame**), kiểm soát truy cập đường truyền vật lý, định địa chỉ vật lý (**Địa chỉ MAC** 48-bit), kiểm tra lỗi khung bằng mã kiểm dư thừa tuần hoàn (**CRC**). Thiết bị hoạt động: **Switch (Bộ chuyển mạch), Bridge (Cầu nối)**.
  - **Tầng 1 - Vật lý (Physical):** Truyền dòng bit nhị phân thô ($0$ và $1$) qua môi trường vật lý (dây đồng cáp xoắn đôi, cáp quang, sóng radio). Quy định về điện áp, đầu cắm kết nối, chuẩn chân cắm. Thiết bị hoạt động: **Hub, Repeater, Cáp mạng**.

---

### 3. Mô Hình TCP/IP và So Sánh Với OSI
Mô hình kiến trúc thực tế của Internet bao gồm 4 tầng:
1. **Tầng Ứng dụng (Application Layer):** Tương đương với tầng 5, 6, 7 của mô hình OSI. Chứa các giao thức: HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, Telnet, SSH, SNMP.
2. **Tầng Vận chuyển (Transport Layer):** Tương đương tầng 4 của OSI. Chứa 2 giao thức chủ lực:
   - **TCP (Transmission Control Protocol):** Giao thức **hướng liên kết (Connection-oriented)**. Thiết lập kết nối trước khi truyền dữ liệu qua cơ chế **Bắt tay 3 bước (Three-way Handshake: SYN -> SYN-ACK -> ACK)**. Đảm bảo truyền tin cậy 100%, tự động truyền lại gói tin bị mất, kiểm soát luồng và chống nghẽn mạng. Dùng cho web (HTTP/HTTPS), tải tệp (FTP), thư điện tử (SMTP).
   - **UDP (User Datagram Protocol):** Giao thức **phi liên kết (Connectionless)**. Truyền dữ liệu ngay không cần thiết lập kết nối, không có cơ chế báo nhận (ACK), không bảo đảm thứ tự gói tin đến nơi nhưng có tốc độ truyền cực nhanh và chi phí gói tin nhỏ. Thích hợp cho truyền phát trực tuyến (Video/Audio streaming), thoại qua IP (VoIP), game online, DNS query.
3. **Tầng Mạng / Internet (Internet Layer):** Tương đương tầng 3 của OSI. Giao thức chính:
   - **IP (Internet Protocol):** Đóng gói và định tuyến gói tin (IPv4, IPv6).
   - **ICMP (Internet Control Message Protocol):** Báo cáo lỗi và gửi thông điệp điều khiển (dùng cho lệnh `ping`, `traceroute`).
   - **ARP (Address Resolution Protocol):** Phân giải địa chỉ IP (logic) sang địa chỉ MAC (vật lý).
4. **Tầng Giao tiếp mạng (Network Access / Link Layer):** Tương đương tầng 1 và tầng 2 của OSI. Xử lý các giao thức phần cứng vật lý và card mạng (Ethernet, Wi-Fi 802.11, PPP).

---

### 4. Hệ Thống Địa Chỉ IP (IPv4 & IPv6)
#### 4.1. Cấu trúc Địa chỉ IPv4
- **Độ dài:** Gồm **32 bit nhị phân**, được chia thành 4 nhóm (octet), mỗi nhóm 8 bit (1 byte), được viết dưới dạng 4 số thập phân cách nhau bằng dấu chấm (`x.x.x.x`).
- Giá trị mỗi octet nằm trong khoảng từ **0 đến 255**.
- Cấu trúc địa chỉ gồm 2 phần: **[NetID]** (Địa chỉ mạng) và **[HostID]** (Địa chỉ máy trạm trong mạng).
- **Phân lớp địa chỉ IP theo chuẩn Classful:**
  - **Lớp A (Class A):**
    - Bit nhận dạng đầu tiên: `0`.
    - Dải địa chỉ octet 1: **1.0.0.0 đến 126.255.255.255**.
    - Phân bổ: NetID chiếm 8 bit, HostID chiếm 24 bit.
    - Subnet Mask mặc định: `255.0.0.0` (hoặc `/8`).
    - Số mạng tối đa: $2^7 - 2 = 126$ mạng. Số host/mạng: $2^{24} - 2 = 16,777,214$ máy.
    - *Lưu ý:* Mạng `127.0.0.0/8` (đặc biệt là `127.0.0.1`) dành riêng cho địa chỉ Loopback (kiểm tra cục bộ card mạng).
  - **Lớp B (Class B):**
    - Bit nhận dạng đầu tiên: `10`.
    - Dải địa chỉ octet 1: **128.0.0.0 đến 191.255.255.255**.
    - Phân bổ: NetID chiếm 16 bit, HostID chiếm 16 bit.
    - Subnet Mask mặc định: `255.255.0.0` (hoặc `/16`).
    - Số host/mạng: $2^{16} - 2 = 65,534$ máy. Dành cho các trường đại học lớn, tập đoàn vừa và lớn.
  - **Lớp C (Class C):**
    - Bit nhận dạng đầu tiên: `110`.
    - Dải địa chỉ octet 1: **192.0.0.0 đến 223.255.255.255**.
    - Phân bổ: NetID chiếm 24 bit, HostID chiếm 8 bit.
    - Subnet Mask mặc định: `255.255.255.0` (hoặc `/24`).
    - Số host/mạng: $2^8 - 2 = 254$ máy. Dành cho các mạng nhỏ, hộ gia đình, văn phòng.
  - **Lớp D (Class D):**
    - Bit nhận dạng đầu tiên: `1110`.
    - Dải địa chỉ octet 1: **224.0.0.0 đến 239.255.255.255**.
    - Dùng riêng cho truyền thông đa hướng (**Multicast**), không dùng cấp phát cho các máy tính thông thường.
  - **Lớp E (Class E):**
    - Bit nhận dạng đầu tiên: `1111`.
    - Dải địa chỉ: **240.0.0.0 đến 255.255.255.255**. Dành cho nghiên cứu và thử nghiệm (Experimental).

#### 4.2. Dải Địa chỉ IP Riêng (Private IP Address - RFC 1918)
Không được định tuyến trực tiếp trên mạng Internet công cộng; được sử dụng miễn phí trong mạng nội bộ và đi ra ngoài Internet thông qua cơ chế **NAT (Network Address Translation)**:
- **Lớp A Private:** `10.0.0.0` đến `10.255.255.255` (1 dải mạng `/8`).
- **Lớp B Private:** `172.16.0.0` đến `172.31.255.255` (16 dải mạng `/16`).
- **Lớp C Private:** `192.168.0.0` đến `192.168.255.255` (256 dải mạng `/24`).

#### 4.3. Các Quy Tắc Tính Toán Địa Chỉ Mạng
- **Địa chỉ mạng (Network Address):** Có tất cả các bit của phần HostID bằng 0. (Ví dụ: `192.168.1.0/24`).
- **Địa chỉ quảng bá (Broadcast Address):** Có tất cả các bit của phần HostID bằng 1. (Ví dụ: `192.168.1.255/24`).
- **Công thức tính số lượng Host hợp lệ có thể gán cho máy:**
  $$\text{Số Host} = 2^h - 2$$
  *(với $h$ là số lượng bit dành cho phần HostID. Trừ đi 2 vì phải dành 1 địa chỉ mạng và 1 địa chỉ broadcast).*

#### 4.4. Địa Chỉ IPv6
- Ra đời nhằm giải quyết triệt để sự cạn kiệt không gian địa chỉ 32-bit của IPv4.
- **Độ dài:** **128 bit**, được viết dưới dạng **8 nhóm**, mỗi nhóm gồm **4 chữ số thập lục phân (Hexadecimal)** cách nhau bằng dấu hai chấm `:` (Ví dụ: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`).
- Cung cấp $2^{128} \approx 3.4 \times 10^{38}$ địa chỉ (gần như vô hạn). Tích hợp sẵn chuẩn bảo mật IPsec và tự động cấu hình không trạng thái (SLAAC).

---

### 5. Hệ Thống Tên Miền DNS & Cấu Trúc URL
#### 5.1. Hệ thống tên miền DNS (Domain Name System)
- **Chức năng:** Là một hệ thống cơ sở dữ liệu phân tán có nhiệm vụ ánh xạ (dịch đổi) qua lại giữa **Tên miền dạng chữ dễ nhớ** (ví dụ: `elearning.tnu.edu.vn`) và **Địa chỉ IP số học** của máy chủ lưu trữ (ví dụ: `203.162.x.x`).
- Hoạt động trên cổng mặc định: **Cổng 53** (sử dụng cả UDP cho truy vấn nhanh và TCP cho đồng bộ vùng Zone Transfer).
- **Cấu trúc phân cấp hình cây:**
  - **Gốc (Root Domain):** Ký hiệu là dấu chấm `.` (quản lý bởi 13 cụm máy chủ gốc Root Servers từ `a.root-servers.net` đến `m.root-servers.net`).
  - **Tên miền cấp cao nhất (TLD - Top-Level Domain):**
    - *gTLD (Generic TLD - dùng chung):* `.com` (thương mại), `.org` (tổ chức phi lợi nhuận), `.net` (hạ tầng mạng), `.edu` (giáo dục), `.gov` (chính phủ), `.mil` (quân đội), `.int` (quốc tế).
    - *ccTLD (Country Code TLD - mã quốc gia):* `.vn` (Việt Nam), `.us` (Mỹ), `.uk` (Anh), `.jp` (Nhật Bản)...
  - **Tên miền cấp hai (Second-Level Domain):** Ví dụ `edu.vn`, `tnu.edu.vn`, `google.com`.
  - **Tên miền con (Subdomain):** Ví dụ `elearning.tnu.edu.vn`, `mail.google.com`.

#### 5.2. Cấu trúc URL (Uniform Resource Locator)
Định vị tài nguyên thống nhất trên mạng Internet:
```
https://elearning.tnu.edu.vn:443/course/view.php?id=105#section2
|___|   |__________________| |_| |_______________| |____| |______|
Giao      Tên máy chủ/Miền   Cổng   Đường dẫn tệp     Tham   Neo định
thức                         mạng   (Path to file)    số     vị (Hash)
```

#### 5.3. Bảng Cổng (Port) Dịch Vụ Mạng Tiêu Chuẩn
| Cổng (Port) | Giao thức | Tên đầy đủ & Chức năng |
| :--- | :--- | :--- |
| **20 / 21** | **FTP** | File Transfer Protocol (20: Truyền dữ liệu Data, 21: Điều khiển lệnh Control) |
| **22** | **SSH** | Secure Shell (Phiên điều khiển dòng lệnh từ xa được mã hóa an toàn) |
| **23** | **Telnet** | Telecommunication Network (Điều khiển từ xa không mã hóa - văn bản thuần) |
| **25** | **SMTP** | Simple Mail Transfer Protocol (Gửi thư điện tử giữa các máy chủ mail) |
| **53** | **DNS** | Domain Name System (Phân giải tên miền) |
| **67 / 68** | **DHCP** | Dynamic Host Configuration Protocol (Cấp phát địa chỉ IP động tự động) |
| **80** | **HTTP** | HyperText Transfer Protocol (Truyền tải siêu văn bản web không mã hóa) |
| **110** | **POP3** | Post Office Protocol version 3 (Tải thư điện tử về máy người dùng) |
| **143** | **IMAP** | Internet Message Access Protocol (Quản lý và đồng bộ thư trực tiếp trên server) |
| **443** | **HTTPS** | HTTP Secure (Truyền tải web mã hóa qua lớp bảo mật SSL/TLS) |

---

## BÀI 3: HƯỚNG DẪN SỬ DỤNG MỘT SỐ DỊCH VỤ INTERNET THÔNG DỤNG

### 1. Dịch Vụ World Wide Web (WWW) & Trình Duyệt Web
- **WWW:** Mạng lưới toàn cầu các tài liệu siêu văn bản được liên kết với nhau qua các siêu liên kết (Hyperlinks) và truy xuất thông qua Internet.
- **Trình duyệt Web (Web Browser):** Phần mềm ứng dụng cho phép người dùng biên dịch mã HTML/CSS/JS thành trang hiển thị trực quan (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera).
- **Các khái niệm quan trọng khi dùng trình duyệt:**
  - **Cache (Bộ nhớ đệm):** Lưu trữ tạm thời các file tĩnh (hình ảnh, logo, script, stylesheet) của trang web đã ghé thăm để tải nhanh hơn ở những lần sau.
  - **Cookie:** Tệp văn bản nhỏ mà máy chủ web gửi về lưu trên máy người dùng để ghi nhớ trạng thái phiên làm việc (Session), thông tin giỏ hàng, tùy chọn cá nhân.
  - **Chế độ ẩn danh (Incognito Mode):** Trình duyệt không lưu lại Lịch sử duyệt web (History), Cookies và dữ liệu trang web sau khi đóng cửa sổ.
  - **Bookmark (Đánh dấu trang):** Lưu lại địa chỉ các trang web yêu thích để truy cập nhanh.

### 2. Kỹ Thuật Tìm Kiếm Thông Tin Nâng Cao Trên Google
Nắm chắc các toán tử tìm kiếm chuyên nghiệp:
- **Toán tử ngoặc kép `"cụm từ"`:** Tìm kiếm chính xác từng từ theo đúng thứ tự (Ví dụ: `"Nhập môn Internet và E-Learning"`).
- **Toán tử `site:`:** Giới hạn phạm vi tìm kiếm chỉ bên trong một trang web hoặc tên miền chỉ định (Ví dụ: `site:tnu.edu.vn lịch thi`).
- **Toán tử `filetype:` hoặc `ext:`:** Chỉ tìm kiếm các tệp có phần mở rộng định dạng cụ thể (Ví dụ: `giáo trình cấu trúc dữ liệu filetype:pdf`, `bài giảng hệ điều hành filetype:pptx`).
- **Toán tử dấu trừ `-`:** Loại trừ các kết quả chứa từ khóa phía sau dấu trừ (Ví dụ: `lập trình C -C++`).
- **Toán tử `OR` (hoặc dấu gạch đứng `|`):** Tìm kiếm trang có chứa từ khóa này HOẶC từ khóa kia (Ví dụ: `"học trực tuyến" OR "e-learning"`).
- **Toán tử `intitle:`:** Chỉ tìm các trang web có tiêu đề bài viết chứa từ khóa chỉ định (Ví dụ: `intitle:"Đại học Thái Nguyên"`).
- **Toán tử `inurl:`:** Tìm các trang web mà trong đường dẫn URL có chứa từ khóa.

### 3. Dịch Vụ Thư Điện Tử (Email)
- **Cấu trúc địa chỉ email:** `<tên_người_dùng>@<tên_miền_máy_chủ_mail>` (Ví dụ: `sinhvien@tnu.edu.vn`). Tên người dùng không phân biệt chữ hoa, chữ thường và không chứa dấu cách tiếng Việt.
- **Phân biệt hai phương thức nhận thư:**
  - **POP3 (Post Office Protocol 3):** Tải toàn bộ email từ máy chủ về ổ đĩa máy tính cục bộ của người dùng và mặc định sẽ xóa thư trên máy chủ (hoặc tùy chọn giữ lại bản sao). Nhược điểm: khó đồng bộ khi sử dụng trên nhiều thiết bị (điện thoại và laptop).
  - **IMAP (Internet Message Access Protocol):** Lưu trữ toàn bộ email trực tiếp trên máy chủ đám mây, các thiết bị chỉ đồng bộ danh sách thư. Bất kỳ thao tác đọc, xóa, chuyển thư mục ở máy này đều được cập nhật tức thì trên tất cả các thiết bị khác.
- **Các trường địa chỉ người nhận:**
  - **To (Gửi tới):** Người nhận trực tiếp, chịu trách nhiệm chính về nội dung thư.
  - **Cc (Carbon Copy - Bản sao gửi):** Người nhận để biết thông tin, cùng theo dõi tiến độ công việc. Tất cả người nhận trong mục To và Cc đều nhìn thấy địa chỉ email của nhau.
  - **Bcc (Blind Carbon Copy - Bản sao gửi ẩn danh):** Người nhận nhận được bản sao nhưng **được ẩn hoàn toàn danh tính**; không ai trong danh sách To và Cc biết email đó đã được gửi kèm cho người trong mục Bcc.

### 4. An Toàn Thông Tin & Lưu Trữ Đám Mây
- **Dịch vụ lưu trữ đám mây:** Google Drive, Microsoft OneDrive, Dropbox. Cho phép lưu trữ, đồng bộ tệp đa nền tảng và chia sẻ phân quyền (Chỉ xem - Viewer, Nhận xét - Commenter, Chỉnh sửa - Editor).
- **Quy tắc an toàn mật khẩu:** Tối thiểu 8-12 ký tự, kết hợp chữ hoa, chữ thường, chữ số và ký tự đặc biệt (`@, #, $, %`), không đặt theo ngày sinh hoặc số điện thoại.
- **Xác thực 2 yếu tố (2FA - Two-Factor Authentication):** Kết hợp cái bạn biết (mật khẩu) và cái bạn sở hữu (mã OTP qua SMS hoặc ứng dụng Authenticator).
- **Nhận diện tấn công giả mạo (Phishing):** Các email giả mạo ngân hàng, trường học yêu cầu nhập tài khoản mật khẩu vào đường link lạ có tên miền sai lệch (ví dụ `tnu-portal.fake.com` thay vì `tnu.edu.vn`).

---

## BÀI 4: MÔ HÌNH HỆ THỐNG E-LEARNING & TIÊU CHUẨN QUỐC TẾ

### 1. Phân Hệ Nền Tảng: LMS và LCMS
Một hệ thống E-Learning tiêu chuẩn hoàn chỉnh được cấu thành từ hai phân hệ cốt lõi:

| Tiêu chí so sánh | LMS (Learning Management System) - Hệ Thống Quản Trị Học Tập | LCMS (Learning Content Management System) - Hệ Thống Quản Trị Nội Dung Học Tập |
| :--- | :--- | :--- |
| **Đối tượng người dùng chính** | Người học (Học viên/Sinh viên), Giảng viên, Nhà quản lý đào tạo. | Chuyên gia nội dung (SME), Nhà thiết kế học liệu (Instructional Designer), Tác giả bài giảng. |
| **Mục đích cốt lõi** | **Quản lý con người và tiến trình đào tạo:** Phân phối khóa học, đăng ký lớp, theo dõi thời gian học, tổ chức thi trắc nghiệm, ghi nhận bảng điểm, điểm danh. | **Quản lý và biên tập học liệu số:** Tạo lập, chỉnh sửa, lưu trữ, quản lý phiên bản và lắp ráp các đơn vị tri thức số. |
| **Đơn vị xử lý nhỏ nhất** | Khóa học (Course), Lớp học (Class), Học viên (Learner). | Đối tượng học tập nhỏ (**Learning Objects - LO**), trang slide, khối media. |
| **Khả năng tái sử dụng** | Quản lý khóa học nguyên khối. | Tái sử dụng linh hoạt các LO để lắp ghép thành nhiều khóa học khác nhau. |
| **Ví dụ phần mềm** | Moodle, Canvas LMS, Blackboard Learn. | Kenexa LCMS, eXact learning, Xyleme. |

### 2. Công Cụ Tác Giả (Authoring Tools)
- Phần mềm chuyên dụng cho phép giảng viên và chuyên gia thiết kế các bài giảng điện tử tương tác đa phương tiện mà không đòi hỏi phải biết lập trình phức tạp.
- Hỗ trợ chèn video, âm thanh, câu hỏi tương tác dạng kéo thả, quiz kiểm tra kiến thức giữa bài, mô phỏng thao tác phần mềm.
- Cho phép xuất bản bài giảng đóng gói theo đúng các tiêu chuẩn quốc tế: SCORM, xAPI, HTML5.
- *Các công cụ phổ biến:* Adobe Presenter, Articulate Storyline, iSpring Suite, Adobe Captivate, Camtasia Studio.

### 3. Các Tiêu Chuẩn Công Nghệ E-Learning Quốc Tế
1. **Chuẩn SCORM (Sharable Content Object Reference Model):**
   - Do tổ chức **ADL (Advanced Distributed Learning)** thuộc Bộ Quốc phòng Hoa Kỳ phát hành. Là chuẩn phổ biến và quan trọng nhất trong đào tạo trực tuyến.
   - Định nghĩa phương thức đóng gói bài học thành một tệp nén `.zip` (kèm tệp chỉ mục `imsmanifest.xml`) để có thể đưa lên **bất kỳ hệ thống LMS nào mà vẫn hoạt động đồng nhất** (tính độc lập nền tảng).
   - Hai thành phần cốt lõi:
     - **Mô hình đóng gói nội dung (Content Packaging):** Quy định cấu trúc thư mục, tài nguyên và siêu dữ liệu (Metadata).
     - **Môi trường thực thi (Run-Time Environment - RTE):** Quy định cơ chế giao tiếp thời gian thực giữa bài giảng (**SCO - Sharable Content Object**) và hệ thống LMS qua giao tiếp JavaScript API (gồm các hàm khởi tạo `LMSInitialize()`, đọc dữ liệu `LMSGetValue()`, ghi điểm số `LMSSetValue()`, đồng bộ `LMSCommit()` và kết thúc `LMSFinish()`).
   - Các phiên bản: **SCORM 1.2** (phổ biến nhất hiện nay) và **SCORM 2004** (hỗ trợ điều hướng tuần tự phức tạp - Sequencing and Navigation).
2. **Chuẩn AICC:**
   - Do Ủy ban Đào tạo Máy tính Hàng không phát triển từ năm 1988, là chuẩn cổ nhất, sử dụng giao tiếp qua HTTP API (HACP).
3. **Chuẩn IMS Content Packaging:**
   - Tiêu chuẩn của tổ chức IMS Global, chuyên về cấu trúc đóng gói học liệu và mô tả siêu dữ liệu học tập bằng XML.
4. **Chuẩn xAPI (Experience API / Tin Can API):**
   - Tiêu chuẩn thế hệ mới kế thừa và khắc phục các nhược điểm của SCORM.
   - Không bị bó hẹp trong trình duyệt web; có thể ghi nhận hoạt động học tập từ game mô phỏng, ứng dụng di động, học tập ngoại tuyến, hoạt động nhóm thực tế.
   - Cấu trúc thông điệp chuẩn hóa theo cú pháp dạng câu: **[Actor] + [Verb] + [Object]** (Ví dụ: *"Sinh viên A" [đã xem] "Video Bài 2"*).
   - Toàn bộ dữ liệu được lưu trữ tập trung trong **LRS (Learning Record Store)**.

---

## BÀI 5: HƯỚNG DẪN SỬ DỤNG HỆ THỐNG TNU-ELEARNING

### 1. Giới Thiệu Cổng Đào Tạo Trực Tuyến eTNU
- Hệ thống TNU E-learning của Đại học Thái Nguyên được phát triển dựa trên nền tảng nguồn mở **Moodle (Modular Object-Oriented Dynamic Learning Environment)**.
- Địa chỉ truy cập chính thức qua trình duyệt web trên máy tính hoặc thiết bị di động.
- Cung cấp toàn bộ không gian số cho học viên: Tiếp nhận kế hoạch học tập, tải tài liệu PDF, học bài giảng đa phương tiện, làm bài kiểm tra trắc nghiệm định kỳ, trao đổi diễn đàn và theo dõi kết quả học tập cá nhân.

### 2. Quy Trình Vận Hành & Học Tập Của Học Viên
1. **Đăng nhập và Bảo mật tài khoản:**
   - Đăng nhập bằng mã sinh viên và mật khẩu được nhà trường cấp.
   - Ngay trong lần đầu đăng nhập, học viên bắt buộc phải cập nhật địa chỉ email chính xác và đổi mật khẩu mới để bảo mật.
   - Nếu quên mật khẩu, sử dụng chức năng *"Quên mật khẩu"* để nhận liên kết khôi phục gửi tự động về hòm thư điện tử đã đăng ký.
2. **Học Bài giảng điện tử (SCORM Package):**
   - Bấm vào tên môn học trong danh sách khóa học (**My Courses**).
   - Mở bài giảng điện tử từng tuần. Để được hệ thống ghi nhận hoàn thành bài học (đạt 100% tiến độ), học viên phải bấm xem tuần tự qua tất cả các trang slide của bài giảng và trả lời đầy đủ các câu hỏi tương tác xuất hiện giữa bài.
3. **Làm Bài Luyện tập Trắc nghiệm (LTTN):**
   - Mỗi bài học tương ứng với một bài luyện tập trắc nghiệm (thường gồm 10 đến 15 câu).
   - Hệ thống cho phép học viên làm lại nhiều lần để rèn luyện cọ xát kiến thức. Điểm bài tập được ghi nhận thường là **điểm cao nhất** trong các lần làm bài.
   - Sau khi hoàn thành bài nộp, hệ thống sẽ tự động chấm điểm và hiển thị kết quả đúng/sai kèm giải thích căn cứ bài học.
4. **Tham gia Diễn đàn Thảo luận (Forum):**
   - Đây là tiêu chí bắt buộc để tính **Điểm chuyên cần / Điểm quá trình**:
   - Học viên phải tham gia đặt câu hỏi thảo luận về nội dung bài học hoặc phản hồi, trao đổi ý kiến đóng góp vào bài viết của các bạn học viên khác và giảng viên.
   - Số lượng bài thảo luận tối thiểu được quy định chi tiết trong Đề cương học phần (thường tối thiểu 2 đến 3 bài thảo luận chất lượng/môn).
5. **Nộp Bài tập lớn / Tiểu luận (Assignment):**
   - Đối với các môn yêu cầu bài tập nhóm hoặc tiểu luận kết thúc, học viên tải đề bài, làm bài theo mẫu quy định và nộp file trực tiếp lên hệ thống trước thời hạn đóng cổng (**Cut-off date / Deadline**).
   - Chú ý định dạng file cho phép (PDF, DOCX) và dung lượng tệp không được vượt quá giới hạn hệ thống cho phép.
6. **Quy chế Đánh giá và Thi kết thúc học phần:**
   - **Điểm tổng kết môn học** = (Điểm chuyên cần + Điểm bài tập luyện tập) $\times$ Hệ số quá trình + Điểm thi kết thúc môn $\times$ Hệ số thi.
   - Điều kiện bắt buộc để được dự thi kết thúc học phần: Học viên phải hoàn thành đủ 100% bài giảng số hóa và hoàn thành đầy đủ các bài luyện tập trắc nghiệm theo tiến độ quy định.

---


---


## 📝 NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM & ĐÁP ÁN CHÍNH THỨC (76 CÂU HỎI)

> **Ngân hàng câu hỏi trích xuất từ các bài kiểm tra trắc nghiệm chính thức của eTNU - Đại học Thái Nguyên.**

### 🎯 Bài luyện tập 1

#### Câu 1: Khi nói về chức năng của các nhà cung cấp dịch vụ Internet ở Việt Nam, có 2 phát biểu như sau: PB1: IAP có thể thực hiện cả chức năng của ISP nhưng ngược lại thì không. PB2: ICP cung cấp các dịch vụ trên cơ sở ứng dụng Internet như: mua bán qua mạng, giao dịch ngân hàng, tư vấn, đào tạo… Hỏi khẳng định nào sau đây là đúng?

- A. PB1 sai, PB2 sai.
- B. PB1 đúng, PB2 đúng.
- C. PB1 đúng, PB2 sai.
- D. PB1 sai, PB2 đúng.

> **✅ ĐÁP ÁN ĐÚNG:** `PB1 đúng, PB2 sai.`

---

#### Câu 2: HTML là tên viết tắt của cụm từ nào?

- A. HyperText Media Languages.
- B. HyperText Markup Languages.
- C. HyperText Media Learn.
- D. HyperText Markup Learn.

> **✅ ĐÁP ÁN ĐÚNG:** `HyperText Markup Languages.`

---

#### Câu 3: Mạng cục bộ LAN là viết tắt của cụm từ tiếng Anh nào?

- A. Local Area Network.
- B. Link Address Network.
- C. Link Area Network.
- D. Local Address Network.

> **✅ ĐÁP ÁN ĐÚNG:** `Local Area Network.`

---

#### Câu 4: Mạng diện rộng WAN là viết tắt của cụm từ tiếng Anh nào?

- A. Wide Area Network.
- B. WiMAX Area Network.
- C. Wire Area Network.
- D. Web Area Network.

> **✅ ĐÁP ÁN ĐÚNG:** `Wide Area Network.`

---

#### Câu 5: Khẳng định nào sau đây là sai?

- A. Internet là từ viết tắt của International Terminal Network.
- B. Internet là một mạng máy tính rất lớn kết nối các mạng máy tính khác nhau trên khắp toàn cầu.
- C. Các mạng máy tính liên kết với nhau dựa trên bộ giao thức TCP/IP.
- D. Internet là từ viết tắt của Inter-network.

> **✅ ĐÁP ÁN ĐÚNG:** `Internet là từ viết tắt của International Terminal Network.`
> *Giải thích:* Internet (là từ viết tắt của Inter-network) là một mạng máy tính rất lớn kết nối các mạng máy tính khác nhau trên khắp toàn cầu. Một mạng máy tính (network) là một nhóm máy tính được kết nối nhau. Các mạng máy tính này lại liên kết với nhau bằng nhiều loại phương tiện và tốc độ truyền tin khác nhau. Vì thế, có thể coi Internet như là mạng của các mạng máy tính. Các mạng này liên kết với nhau dựa trên một bộ giao thức (là ngôn ngữ giao tiếp chung giữa các máy tính) TCP/IP (Transmision Control Protocol – Internet Protocol): Giao thức điều khiển truyền dẫn - giao thức Internet. Bộ giao thức này cho phép mọi máy tính liên kết, giao tiếp với nhau theo một ngôn ngữ máy tính thống nhất giống như một ngôn ngữ quốc tế (ví dụ như Tiếng Anh) mà mọi người sử dụng để giao tiếp. Tham khảo: Bài 1, mục 1.1.1. Khái niệm về Internet (BG, tr.3).

---

#### Câu 6: OSP là viết tắt của cụm từ tiếng Anh nào?

- A. Online Search Provider.
- B. Online Service Provider.
- C. Offline Service Provider.
- D. Organization Service Protocol.

> **✅ ĐÁP ÁN ĐÚNG:** `Online Service Provider.`

---

#### Câu 7: Mạng đô thị MAN là viết tắt của cụm từ tiếng Anh nào?

- A. Metropolitan Address Network.
- B. Metropolitan Area Network.
- C. Metropolitan Application Network.
- D. Metropolitan Access Network.

> **✅ ĐÁP ÁN ĐÚNG:** `Metropolitan Area Network.`

---

#### Câu 8: Việt Nam hòa vào mạng Internet toàn cầu vào khoảng năm nào?

- A. 1997
- B. 1990
- C. 2000
- D. 1987

> **✅ ĐÁP ÁN ĐÚNG:** `1997`

---

#### Câu 9: ICP là viết tắt của cụm từ tiếng Anh nào?

- A. International Communication Processing.
- B. Internet Content Provider.
- C. International Communication Protocol.
- D. Internet Cab Provider.

> **✅ ĐÁP ÁN ĐÚNG:** `Internet Content Provider.`

---

#### Câu 10: TCP/IP là viết tắt của cụm từ tiếng Anh nào?

- A. Transmision Control Protocol/ Internet Protocol.
- B. Telecoms Communication Protocol/ Internet Protocol.
- C. Transport Control Provider/ Internet Provider.
- D. Transport Control Processing/ Internet Processing.

> **✅ ĐÁP ÁN ĐÚNG:** `Transmision Control Protocol/ Internet Protocol.`

---

#### Câu 11: Khi nói về chức năng của các nhà cung cấp dịch vụ Internet ở Việt Nam, có 2 phát biểu như sau: PB1: OSP cấp quyền truy cập Internet qua mạng viễn thông và các dịch vụ như: Email, Web, FTP, Telnet, Chat. PB2: ICP cung cấp các thông tin về: kinh tế, giáo dục, thể thao, chính trị, quân sự (thường xuyên cập nhật thông tin mới theo định kỳ) đưa lên mạng. Hỏi khẳng định nào sau đây là đúng?

- A. PB1 đúng, PB2 sai.
- B. PB1 sai, PB2 sai.
- C. PB1 sai, PB2 đúng.
- D. PB1 đúng, PB2 đúng.

> **✅ ĐÁP ÁN ĐÚNG:** `PB1 sai, PB2 đúng.`

---

#### Câu 12: IXP là viết tắt của cụm từ tiếng Anh nào?

- A. International Exchange Protocol.
- B. Internet Extent Protocol.
- C. Improve External Protocol.
- D. Internet Exchange Provider.

> **✅ ĐÁP ÁN ĐÚNG:** `Internet Exchange Provider.`

---

#### Câu 13: Mạng ARPANET hình thành vào khoảng năm nào?

- A. 1979
- B. 1974
- C. 1968
- D. 1960

> **✅ ĐÁP ÁN ĐÚNG:** `1968`

---

#### Câu 14: Thuật ngữ "Internet" xuất hiện lần đầu vào khoảng năm nào?

- A. 1964
- B. 1984
- C. 1974
- D. 1980

> **✅ ĐÁP ÁN ĐÚNG:** `1974`

---

#### Câu 15: Internet được hình thành từ dự án nào sau đây?

- A. Từ một dự án nghiên cứu của Bộ quốc phòng Anh.
- B. Từ một dự án nghiên cứu của Bộ giáo dục Mỹ.
- C. Từ một dự án nghiên cứu của Bộ giáo dục Anh.
- D. Từ một dự án nghiên cứu của Bộ quốc phòng Mỹ.

> **✅ ĐÁP ÁN ĐÚNG:** `Từ một dự án nghiên cứu của Bộ quốc phòng Mỹ.`

---

#### Câu 16: IM là viết tắt của từ tiếng Anh nào dưới đây?

- A. Instant Message.
- B. Important Message.
- C. Invite Message.
- D. Internet Message.

> **✅ ĐÁP ÁN ĐÚNG:** `Instant Message.`

---

#### Câu 17: Để xem các trang tài liệu siêu văn bản (trang web) trên Internet, bạn sử dụng dịch vụ nào sau đây?

- A. Dịch vụ Chat.
- B. Dịch vụ tải tệp tin.
- C. Dịch vụ thư điện tử.
- D. Dịch vụ World Wide Web.

> **✅ ĐÁP ÁN ĐÚNG:** `Dịch vụ World Wide Web.`

---

#### Câu 18: Dịch vụ Telnet trên mạng Internet là gì?

- A. Là dịch vụ truyền các tệp từ máy tính này đến máy tính khác trên mạng Internet.
- B. Là dịch vụ thiết lập sự liên hệ giữa MTĐT của ta với một máy chủ ở xa để người dùng có thể sử dụng khả năng xử lý của máy chủ đó.
- C. Là dịch vụ giúp người dùng tìm kiếm thông tin trên Internet bằng bảng chọn.
- D. Là dịch vụ Internet có khả năng duy trì hàng ngàn nhóm tin với sự tham gia của hàng triệu người.

> **✅ ĐÁP ÁN ĐÚNG:** `Là dịch vụ thiết lập sự liên hệ giữa MTĐT của ta với một máy chủ ở xa để người dùng có thể sử dụng khả năng xử lý của máy chủ đó.`

---

### 🎯 Bài luyện tập 2

#### Câu 19: Có một tên miền như sau: tnu.edu.vn thì thành phần “edu” thường được gọi là tên miền cấp mấy?

- A. 1
- B. 2
- C. 3
- D. 0

> **✅ ĐÁP ÁN ĐÚNG:** `2`

---

#### Câu 20: Có 2 khẳng định sau: KĐ1: Đây là công nghệ DSL đối xứng KĐ2: Để có thể kết nối Internet, người dùng sẽ cần phải lắp đặt một modem ADSL chuyên dụng. Nhận xét nào sau đây là đúng khi nói về công nghệ ADSL?

- A. KĐ1 sai, KĐ2 đúng.
- B. KĐ1 đúng, KĐ2 đúng.
- C. KĐ1 đúng, KĐ2 sai.
- D. KĐ1 sai, KĐ2 sai.

> **✅ ĐÁP ÁN ĐÚNG:** `KĐ1 sai, KĐ2 đúng.`

---

#### Câu 21: RARP là viết tắt của cụm từ tiếng Anh nào?

- A. Reverse Access Resolution Protocol.
- B. Reverse Address Resolution Protocol.
- C. Replace Access Resolution Protocol.
- D. Replace Address Resolution Protocol.

> **✅ ĐÁP ÁN ĐÚNG:** `Reverse Address Resolution Protocol.`

---

#### Câu 22: Tất cả các Web Server đều hiểu và chạy được file nào?

- A. *.php
- B. *.jsp
- C. *.asp
- D. *.htm

> **✅ ĐÁP ÁN ĐÚNG:** `*.htm`

---

#### Câu 23: Đâu là 1 địa chỉ IPv6 không hợp lệ?

- A. 2001:0DC8::1005:2F43::ABC6
- B. 2001:0DC8:1005:2F43::ABC6
- C. 2001:0DC8::1005:2F43:0BCD:ABC6
- D. 2001:DC8::2F43:BCD:ABC6

> **✅ ĐÁP ÁN ĐÚNG:** `2001:0DC8::1005:2F43::ABC6`

---

#### Câu 24: Các cụm số hexa trong địa chỉ Ipv6 được tách biệt với nhau bằng dấu nào?

- A. Dấu hỏi “?”
- B. Dấu chấm “.”
- C. Dấu hai chấm “:”
- D. Dấu nhân “*”

> **✅ ĐÁP ÁN ĐÚNG:** `Dấu hai chấm “:”`

---

#### Câu 25: Có 2 khẳng định sau: KĐ1: Có tốc độ kết nối cao hơn ADSL KĐ2: Cho phép chia sẻ chung với đường điện thoại Nhận xét nào sau đây là đúng khi nói về công nghệ HDSL?

- A. KĐ1 sai, KĐ2 đúng.
- B. KĐ1 sai, KĐ2 sai.
- C. KĐ1 đúng, KĐ2 đúng.
- D. KĐ1 đúng, KĐ2 sai.

> **✅ ĐÁP ÁN ĐÚNG:** `KĐ1 đúng, KĐ2 sai.`

---

#### Câu 26: Khẳng định nào sau đây là SAI khi nói về trình duyệt web?

- A. Là một phần mềm hệ thống được cài đặt trên máy tính của người sử dụng.
- B. Là một phần mềm ứng dụng được cài đặt trên máy tính của người sử dụng.
- C. Cho phép người dùng duyệt các tài liệu siêu văn bản trên Web.
- D. Là một phần mềm ứng dụng được cài đặt để sử dụng dịch vụ WWW.

> **✅ ĐÁP ÁN ĐÚNG:** `Là một phần mềm hệ thống được cài đặt trên máy tính của người sử dụng.`

---

#### Câu 27: Có mấy phiên bản địa chỉ IP?

- A. 2
- B. 3
- C. 4
- D. 1

> **✅ ĐÁP ÁN ĐÚNG:** `2`

---

#### Câu 28: Đâu là một phương thức kết nối Internet?

- A. TCP/IP
- B. Leased-Line
- C. IPX/SPX
- D. NetBEUI

> **✅ ĐÁP ÁN ĐÚNG:** `Leased-Line`

---

#### Câu 29: Một tên miền đầy đủ có chiều dài không vượt quá 255 ký tự. Vậy chiều dài tối đa của tên miền ở mỗi cấp là bao nhiêu ký tự (bao gồm cả dấu “.”)?

- A. 60
- B. 61
- C. 62
- D. 63

> **✅ ĐÁP ÁN ĐÚNG:** `63`

---

#### Câu 30: Đâu là 1 bộ giao thức kết nối mạng?

- A. HTTPS
- B. HTTP
- C. TCP/IP
- D. HTML

> **✅ ĐÁP ÁN ĐÚNG:** `TCP/IP`

---

#### Câu 31: Hệ thống quản lý tên miền DNS là viết tắt của cụm từ tiêng Anh nào?

- A. Dot Name System.
- B. Dot Name Science.
- C. Domain Name System.
- D. Domain Name Science.

> **✅ ĐÁP ÁN ĐÚNG:** `Domain Name System.`

---

#### Câu 32: Địa chỉ IP v6 sử dụng bao nhiêu bit để đánh địa chỉ?

- A. 32
- B. 128
- C. 64
- D. 256

> **✅ ĐÁP ÁN ĐÚNG:** `128`

---

#### Câu 33: Có 2 khẳng định sau: KĐ1: là loại hình kết nối Internet tốc độ cao KĐ2: luôn trong trạng thái kết nối 24/24. Nhận xét nào sau đây là đúng khi nói về phương thức kết nối Internet băng rộng?

- A. KĐ1 đúng, KĐ2 đúng.
- B. KĐ1 sai, KĐ2 sai.
- C. KĐ1 sai, KĐ2 đúng.
- D. KĐ1 đúng, KĐ2 sai.

> **✅ ĐÁP ÁN ĐÚNG:** `KĐ1 đúng, KĐ2 đúng.`

---

#### Câu 34: Khẳng định nào sau đây là sai khi nói về địa chỉ IP công cộng?

- A. Là duy nhất.
- B. Không được định tuyến trên Internet Backbone.
- C. Có tính toàn cầu và được tiêu chuẩn hóa.
- D. Được lấy từ nhà cung cấp dịch vụ hay đăng ký với 1 chi phí nào đó.

> **✅ ĐÁP ÁN ĐÚNG:** `Không được định tuyến trên Internet Backbone.`

---

#### Câu 35: Đâu là một địa chỉ IPv4 hợp lệ?

- A. 192:168:10:6
- B. 192.168.10.256
- C. 192:168:10:256
- D. 192.168.10.6

> **✅ ĐÁP ÁN ĐÚNG:** `192.168.10.6`

---

#### Câu 36: Đâu không phải là 1 bộ giao thức kết nối mạng?

- A. IPX/SPX
- B. NetBEUI
- C. HTML
- D. TCP/IP

> **✅ ĐÁP ÁN ĐÚNG:** `HTML`

---

#### Câu 37: Trong cách biểu diễn địa chỉ IPv4 được chia thành bao nhiêu octet?

- A. 4
- B. 7
- C. 5
- D. 6

> **✅ ĐÁP ÁN ĐÚNG:** `4`

---

#### Câu 38: Đâu là tên của trình duyệt Web?

- A. Web Browser.
- B. Internet Browser.
- C. Internet Explorer.
- D. Web Explorer.

> **✅ ĐÁP ÁN ĐÚNG:** `Internet Explorer.`

---

#### Câu 39: Khi đặt tên miền không được dùng ký tự nào dưới đây?

- A. Ký tự @
- B. Ký tự “-”
- C. Các chữ số
- D. Các chữ cái

> **✅ ĐÁP ÁN ĐÚNG:** `Ký tự @`

---

#### Câu 40: Trong các tên dưới đây đâu là 1 tên miền hợp lệ?

- A. tnu.edu@vn
- B. tnu@edu.vn
- C. tnu_edu@vn
- D. tnu.edu.vn

> **✅ ĐÁP ÁN ĐÚNG:** `tnu.edu.vn`

---

#### Câu 41: Khẳng định nào sau đây là sai khi nói về phương thức kết nối quay số qua mạng điện thoại (Dial-up)?

- A. Máy tính của người dùng kết nối với Modem và modem được kết nối tới đường điện thoại.
- B. Để kết nối, người dùng cần có một đường điện thoại và một modem.
- C. Kết nối kiểu này luôn thường trực 24/24.
- D. Kiểu kết nối này có tốc độ chậm nhất trong các phương thức kết nối Internet.

> **✅ ĐÁP ÁN ĐÚNG:** `Kết nối kiểu này luôn thường trực 24/24.`

---

#### Câu 42: Trong tên miền, dấu nào được sử dụng làm dấu phân cách?

- A. Dấu chấm (.)
- B. Dấu gạch dưới (_)
- C. Dấu hỏi (?)
- D. Dấu

> **✅ ĐÁP ÁN ĐÚNG:** `Dấu chấm (.)`

---

#### Câu 43: Phương thức kết nối nào là chậm nhất trong số các công nghệ truy cập Internet?

- A. Kết nối băng rộng.
- B. Kết nối thông qua kênh thuê riêng (Leased-Line).
- C. Kết nối không dây.
- D. Quay số qua mạng điện thoại (Dial-up).

> **✅ ĐÁP ÁN ĐÚNG:** `Quay số qua mạng điện thoại (Dial-up).`

---

#### Câu 44: Tên miền nào sau đây KHÔNG thuộc về quốc gia Việt Nam?

- A. tnu.org.vn
- B. jnto.edu.vn
- C. jnto.org.fr
- D. tnu.edu.vn

> **✅ ĐÁP ÁN ĐÚNG:** `jnto.org.fr`

---

#### Câu 45: Địa chỉ IP nào không thể gán cho các thiết bị trên mạng?

- A. Địa chỉ IP công cộng.
- B. Địa chỉ 10.10.10.10.
- C. Địa chỉ IP riêng.
- D. Địa chỉ quảng bá.

> **✅ ĐÁP ÁN ĐÚNG:** `Địa chỉ quảng bá.`

---

#### Câu 46: Địa chỉ IP v4 sử dụng bao nhiêu bit để đánh địa chỉ?

- A. 32
- B. 128
- C. 256
- D. 64

> **✅ ĐÁP ÁN ĐÚNG:** `32`

---

#### Câu 47: Hotspot là một địa điểm mà tại đó có cung cấp các dịch vụ:

- A. kết nối có dây và dịch vụ truy cập Internet tốc độ cao thông qua hoạt động của các thiết bị thu phát không dây
- B. kết nối có dây và dịch vụ truy cập Internet tốc độ cao thông qua hoạt động của các thiết bị thu phát có dây.
- C. kết nối không dây và dịch vụ truy cập Internet tốc độ cao thông qua hoạt động của các thiết bị thu phát không dây
- D. kết nối không dây và dịch vụ truy cập Internet tốc độ cao thông qua hoạt động của các thiết bị thu phát có dây

> **✅ ĐÁP ÁN ĐÚNG:** `kết nối không dây và dịch vụ truy cập Internet tốc độ cao thông qua hoạt động của các thiết bị thu phát không dây`

---

#### Câu 48: Để các máy tính trên Internet có thể liên lạc với nhau, mỗi máy tính cần có một địa chỉ liên lạc và địa chỉ này được gọi là gì?

- A. Địa chỉ URL
- B. Địa chỉ TCP.
- C. Địa chỉ Web.
- D. Địa chỉ IP.

> **✅ ĐÁP ÁN ĐÚNG:** `Địa chỉ IP.`

---

#### Câu 49: Hệ thống thư điện tử được chia làm hai phần: MUA và MTA. MTA là viết tắt của cụm từ tiếng Anh nào?

- A. Message Transfer Application.
- B. Message Transfer Agent.
- C. Mail Transfer Application.
- D. Mail Transfer Agent.

> **✅ ĐÁP ÁN ĐÚNG:** `Message Transfer Agent.`

---

#### Câu 50: Trong các giao thức sau giao thức nào là giao thức truyền thư điện tử?

- A. NFS.
- B. Telnet.
- C. FTP.
- D. SMTP.

> **✅ ĐÁP ÁN ĐÚNG:** `SMTP.`

---

#### Câu 51: Hệ thống thư điện tử được chia làm hai phần: MUA và MTA. MUA là viết tắt của cụm từ tiếng Anh nào?

- A. Mail User Agent.
- B. Message Use Application.
- C. Mail User Application.
- D. Mail Use Agent.

> **✅ ĐÁP ÁN ĐÚNG:** `Mail User Agent.`

---

#### Câu 52: Dịch vụ web sử dụng giao thức nào?

- A. IPX/SPX
- B. TCP/IP
- C. HTTP
- D. NetBEUI

> **✅ ĐÁP ÁN ĐÚNG:** `HTTP`

---

#### Câu 53: Đâu là 1 bộ giao thức hệ thống file phân tán (được phát triển bởi Sun Microsystems) cho phép truy xuất file đến các thiết bị ở xa như 1 đĩa cứng trên mạng?

- A. FTP
- B. NFS
- C. SMTP
- D. Telnet

> **✅ ĐÁP ÁN ĐÚNG:** `NFS`

---

### 🎯 Bài luyện tập 3

#### Câu 54: Khi sử dụng Mail để đính kèm tệp tin bạn bấm vào nút nào sau đây?

- A. Get Files
- B. Attach Files
- C. Show Files
- D. Add Files

> **✅ ĐÁP ÁN ĐÚNG:** `Attach Files`

---

#### Câu 55: Mục nào trong cấu trúc của một email mô tả ngắn gọn nội dung của email?

- A. Subject
- B. Body
- C. CC
- D. BCC

> **✅ ĐÁP ÁN ĐÚNG:** `Subject`

---

#### Câu 56: Chương trình nào dưới đây cho phép bạn tải tệp tin từ Internet xuống máy tính của bạn?

- A. DMI
- B. FOXIT READER
- C. IDM
- D. MDI

> **✅ ĐÁP ÁN ĐÚNG:** `IDM`

---

#### Câu 57: Khi sử dụng phần mềm Mail, thư mục nào dưới đây chứa các thư bạn đã gửi đi?

- A. Inbox
- B. Drafts
- C. Sent
- D. Deleted

> **✅ ĐÁP ÁN ĐÚNG:** `Sent`

---

#### Câu 58: Trong quá trình duyệt Web, bạn không thể thực hiện thao tác nào dưới đây?

- A. In trang Web.
- B. Chỉnh sửa nội dung trang Web.
- C. Đưa trang Web vào danh mục các trang yêu thích.
- D. Lưu trang Web.

> **✅ ĐÁP ÁN ĐÚNG:** `Chỉnh sửa nội dung trang Web.`

---

#### Câu 59: Khi sử dụng công cụ tìm kiếm Google, nếu muốn kết quả trả về là các trang Web vừa chứa cụm từ: kinh tế, vừa chứa cụm từ quốc dân thì trong ô tìm kiếm bạn nhập vào từ khóa nào sau đây?

- A. “kinh tế” + “quốc dân”
- B. “kinh tế” - “quốc dân”
- C. kinh tế quốc dân
- D. “kinh tế quốc dân”

> **✅ ĐÁP ÁN ĐÚNG:** `“kinh tế” + “quốc dân”`
> *Giải thích:* đây là quy định của google

---

#### Câu 60: Anh An muốn đồng gửi bức thư điện tử tới anh Hải và chị Huệ, tuy nhiên anh An không muốn chị Huệ biết mình đã gửi bức thư này cho anh Hải. Khi đó anh An phải nhập địa chỉ email của anh Hải vào ô nào?

- A. Re
- B. Bcc
- C. Cc
- D. To

> **✅ ĐÁP ÁN ĐÚNG:** `Bcc`

---

#### Câu 61: Chương trình nào dưới đây cho phép bạn tải tệp tin từ Intenet xuống máy tính của bạn?

- A. DMI
- B. FOXIT READER
- C. IDM
- D. MDI

> **✅ ĐÁP ÁN ĐÚNG:** `IDM`

---

### 🎯 Bài luyện tập 4

#### Câu 62: Mô hình SCORM do tổ chức nào đưa ra?

- A. Viện nghiên cứu công nghệ giáo dục từ xa (ADL).
- B. Trường đại học tổng hợp Utah.
- C. Quỹ khoa học quốc gia Mỹ (NSF).
- D. Viện Nghiên cứu Standford.

> **✅ ĐÁP ÁN ĐÚNG:** `Viện nghiên cứu công nghệ giáo dục từ xa (ADL).`

---

#### Câu 63: Quy trình sinh viên học tập trên hệ thống e-learning KHÔNG bao gồm bước nào?

- A. Học tập.
- B. Gặp gỡ giáo viên.
- C. Tìm hiểu thông tin lớp học.
- D. Đăng ký học tập.

> **✅ ĐÁP ÁN ĐÚNG:** `Gặp gỡ giáo viên.`

---

#### Câu 64: Theo Sloan Consortium lớp học nào dưới đây được coi là lớp học sử dụng công nghệ Internet?

- A. Lớp học có 30 – 79% nội dung được truyền tải qua Internet.
- B. Lớp học tập trung, thầy và trò gặp trực tiếp.
- C. Lớp học có 1-29% nội dung được truyền tải qua Internet.
- D. Lớp học có 0% nội dung được truyền tải qua Internet.

> **✅ ĐÁP ÁN ĐÚNG:** `Lớp học có 1-29% nội dung được truyền tải qua Internet.`

---

#### Câu 65: Khi nói về quá trình phát triển E-learning, có 2 phát biểu như sau: PB1: Trước năm 1983: phương pháp giáo dục “Lấy giảng viên làm trung tâm” là phương pháp phổ biến nhất trong các trường học. PB2: Giai đoạn 1984-1993: Khi công nghệ Web được phát minh ra, các nhà cung cấp dịch vụ đào tạo bắt đầu nghiên cứu cách thức cải tiến phương pháp giáo dục bằng công nghệ này. Hỏi khẳng định nào sau đây là đúng?

- A. PB1 đúng, PB2 sai.
- B. PB1 đúng, PB2 đúng.
- C. PB1 sai, PB2 đúng.
- D. PB1 sai, PB2 sai.

> **✅ ĐÁP ÁN ĐÚNG:** `PB1 đúng, PB2 sai.`

---

#### Câu 66: Trong quá trình học e-learning, đâu không phải là 1 trong 4 hoạt động chính của sinh viên e-learning?

- A. Thi cử.
- B. Lướt web.
- C. Thực hành.
- D. Thảo luận.

> **✅ ĐÁP ÁN ĐÚNG:** `Lướt web.`

---

#### Câu 67: Đâu không phải là một trong các yêu cầu kỹ thuật của một hệ thống LMS điển hình?

- A. Tương thích với các trình duyệt chuẩn.
- B. Sử dụng lại, quản lý và phân phối nội dung học tập trong môi trường số từ một kho dữ liệu trung tâm.
- C. Được thiết kế theo module để có thể dễ dàng nâng cấp trong tương lai.
- D. Có khả năng tích hợp ứng dụng thư điện tử.

> **✅ ĐÁP ÁN ĐÚNG:** `Sử dụng lại, quản lý và phân phối nội dung học tập trong môi trường số từ một kho dữ liệu trung tâm.`

---

#### Câu 68: Đâu không phải là một trong các yêu cầu giao diện người dùng của một hệ thống LMS điển hình?

- A. Hỗ trợ giao diện người dùng trên cơ sở trình duyệt Web.
- B. Có khả năng tùy chỉnh và thân thiện người dùng.
- C. Hỗ trợ chức năng trợ giúp và hướng dẫn trực tuyến.
- D. Không cho phép thiết lập nhiều giao diện riêng biệt cho các nhóm người dùng khác nhau.

> **✅ ĐÁP ÁN ĐÚNG:** `Không cho phép thiết lập nhiều giao diện riêng biệt cho các nhóm người dùng khác nhau.`

---

#### Câu 69: Trong số các đặc điểm sau, đâu không phải là đặc điểm của hệ thống E-Learning?

- A. Nội dung thay đổi phù hợp cho từng cá nhân.
- B. Cập nhật mới nhanh.
- C. Học mọi lúc, mọi nơi.
- D. Học không có sự hợp tác, phối hợp.

> **✅ ĐÁP ÁN ĐÚNG:** `Học không có sự hợp tác, phối hợp.`

---

#### Câu 70: LMS là viết tắt của cụm từ tiếng Anh nào?

- A. Learning Management Site.
- B. Learning Model Site.
- C. Learning Management System.
- D. Learning Model Sharable.

> **✅ ĐÁP ÁN ĐÚNG:** `Learning Management System.`

---

#### Câu 71: Đâu KHÔNG phải là hệ thống hỗ trợ học tập trong môi trường elearning?

- A. Hệ thống diễn đàn.
- B. Hệ thống gửi tin nhắn đến giảng viên.
- C. Hệ thống thư điện tử của NEU-ELEARNING.
- D. Hệ thống phần mềm quản lý truy cập mạng Internet.

> **✅ ĐÁP ÁN ĐÚNG:** `Hệ thống phần mềm quản lý truy cập mạng Internet.`
> *Giải thích:* đây không phải là chức năng mang tính đặc thù, nó có ở nhiều hề thống khác.

---

#### Câu 72: Chữ E trong cụm từ E-learning là viết tắt của từ tiêng Anh nào dưới đây?

- A. External
- B. Electronic
- C. Email
- D. Extent

> **✅ ĐÁP ÁN ĐÚNG:** `Electronic`

---

#### Câu 73: LCMS là viết tắt của cụm từ tiếng Anh nào?

- A. Learning Content Model Site.
- B. Lecture Control Model Sharable.
- C. Learning Content Managerment System.
- D. Lecture Content Management Site.

> **✅ ĐÁP ÁN ĐÚNG:** `Learning Content Managerment System.`

---

#### Câu 74: Chọn phát biểu SAI?

- A. E-learning nghĩa là việc học tập hay đào tạo được chuẩn bị, truyền tải hoặc quản lý sử dụng nhiều công cụ của công nghệ thông tin, truyền thông khác nhau và được thực hiện ở mức cục bộ hay toàn cục.
- B. E-learning là viết tắt của từ Electronic Learning.
- C. E-learning là một thuật ngữ dùng để mô tả việc học tập không dựa trên công nghệ thông tin và truyền thông.
- D. E-learning là sử dụng các công nghệ Web và Internet trong học tập.

> **✅ ĐÁP ÁN ĐÚNG:** `E-learning là một thuật ngữ dùng để mô tả việc học tập không dựa trên công nghệ thông tin và truyền thông.`

---

#### Câu 75: Trong mô hình hệ thống E-Learning không bao gồm thành phần nào?

- A. Nội dung đào tạo.
- B. Hạ tầng truyền thông và mạng.
- C. Hạ tầng phần mềm.
- D. Đội ngũ kỹ sư công nghệ thông tin.

> **✅ ĐÁP ÁN ĐÚNG:** `Đội ngũ kỹ sư công nghệ thông tin.`

---

#### Câu 76: Khi nói về kiến trúc Web để phát triển hệ thống E-learning, có 2 phát biểu như sau: PB1: Mô hình kiến trúc Web không cho phép tăng cường sự tương hợp và mở rộng trên cơ sở hạ tầng mạng và các ứng dụng khác nhau sẵn có trên thị trường e-learning. PB2: Mô hình kiến trúc Web cho phép phát triển và sử dụng Intranet cũng như các dịch vụ Internet công cộng. Điều đó cho phép việc lựa chọn các công nghệ mạng là hoàn toàn trong suốt đối với các đơn vị phát triển nội dung và các nhà cung cấp dịch vụ. Hỏi khẳng định nào sau đây là đúng?

- A. PB1 đúng, PB2 đúng.
- B. PB1 sai, PB2 sai.
- C. PB1 đúng, PB2 sai.
- D. PB1 sai, PB2 đúng.

> **✅ ĐÁP ÁN ĐÚNG:** `PB1 sai, PB2 đúng.`

---


