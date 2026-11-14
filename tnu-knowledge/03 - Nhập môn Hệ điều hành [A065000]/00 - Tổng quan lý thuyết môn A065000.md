---
title: "Nhập môn Hệ điều hành"
courseCode: "A065000"
tags:
  - course-overview
  - A065000
---

# 🎓 TỔNG HỢP KIẾN THỨC & NGÂN HÀNG ĐỀ THI: A065000 - NHẬP MÔN HỆ ĐIỀU HÀNH
> **Kho tài liệu chuẩn hóa eTNU dành riêng cho Google Gemini NotebookLM.**  
> *Bao gồm toàn bộ giáo trình lý thuyết chi tiết, mô hình, giải thuật, cú pháp và ngân hàng câu hỏi trắc nghiệm chính thức 100%.*

---


# PHẦN 3: MÔN A065000 - NHẬP MÔN HỆ ĐIỀU HÀNH

## BÀI 1: TỔNG QUAN VỀ HỆ ĐIỀU HÀNH

### 1. Khái Niệm & Vai Trò Của Hệ Điều Hành
- **Định nghĩa:** Hệ điều hành (Operating System - OS) là một tập hợp các chương trình hệ thống đóng vai trò trung gian giữa phần cứng máy tính và người sử dụng (cũng như các chương trình ứng dụng).
- **Hai vai trò / mục tiêu cơ bản:**
  1. **Nhà quản lý tài nguyên (Resource Manager):** Hệ điều hành theo dõi, kiểm soát và cấp phát các tài nguyên phần cứng (CPU, bộ nhớ trong RAM, bộ nhớ ngoài đĩa từ, các thiết bị vào/ra I/O) cho các tiến trình đang cạnh tranh nhau một cách hiệu quả, công bằng và tối ưu.
  2. **Máy tính mở rộng / Máy tính trừu tượng (Extended / Virtual Machine):** Hệ điều hành che giấu toàn bộ các chi tiết kỹ thuật phức tạp và thô sơ của phần cứng bên dưới, cung cấp cho lập trình viên và người dùng một giao diện giao tiếp trực quan, thống nhất và dễ sử dụng thông qua các **Lời gọi hệ thống (System Calls)** và giao diện đồ họa (GUI).

---

### 2. Lịch Sử Phát Triển Qua 4 Thế Hệ Hệ Điều Hành
| Thế hệ | Thời gian | Phần cứng chủ đạo | Đặc trưng hệ điều hành |
| :--- | :--- | :--- | :--- |
| **Thế hệ 1** | 1945 - 1955 | Bóng đèn chân không (Vacuum Tubes), bảng cắm dây. | **Chưa có hệ điều hành.** Lập trình trực tiếp bằng mã máy nhị phân thô, người dùng tự đặt giờ và thao tác vật lý trên máy. |
| **Thế hệ 2** | 1955 - 1965 | Bóng bán dẫn (Transistors). | **Hệ thống xử lý theo lô đơn giản (Early Batch Systems):** Các công việc (Jobs) được đục lỗ trên thẻ giấy, gom thành từng lô nạp vào băng từ và xử lý tuần tự qua hệ thống (FMS, IBSYS). |
| **Thế hệ 3** | 1965 - 1980 | Mạch tích hợp (IC - Integrated Circuits). | **Xuất hiện họ máy tính IBM System/360; Hệ điều hành đa chương (Multiprogramming)** - giữ nhiều tiến trình đồng thời trong RAM để tận dụng tối đa CPU khi có tiến trình chờ I/O; **Hệ thống phân chia thời gian (Time-sharing)** - cấp phát lát cắt thời gian cho nhiều người dùng đồng thời qua thiết bị đầu cuối (MULTICS, UNIX). |
| **Thế hệ 4** | 1980 - nay | Mạch tích hợp mật độ siêu cao (VLSI, Microprocessors). | **Máy tính cá nhân (PC):** MS-DOS, Apple Macintosh, Microsoft Windows, Linux. Giao diện đồ họa người dùng (GUI), hệ điều hành mạng (NOS), hệ điều hành phân tán và thiết bị di động (Android, iOS). |

---

### 3. Họ Máy Tính IBM System/360 (Đầu Những Năm 1960)
- Trước năm 1964, mỗi dòng máy tính của một hãng lại sử dụng một kiến trúc phần cứng và tập lệnh hoàn toàn khác nhau, phần mềm viết cho máy này không thể chạy được trên máy khác.
- IBM đã tạo nên bước ngoặt lịch sử khi công bố **họ máy tính IBM System/360**:
  - Là dòng máy tính đầu tiên có **tập lệnh tương thích hoàn toàn trên tất cả các phiên bản** (từ các máy tính khoa học nhỏ có giá thuê vài ngàn USD/tháng cho đến các siêu máy tính mainframe khổng lồ).
  - **Khẳng định cực kỳ quan trọng:** **Tất cả các phiên bản khác nhau trong họ IBM System/360 đều có thể sử dụng chung một hệ điều hành thống nhất (OS/360).**
  - Mặc dù OS/360 có kích thước mã nguồn đồ sộ và xuất hiện nhiều lỗi vào thời điểm ban đầu, ý tưởng về một hệ điều hành chạy được trên toàn bộ một dòng máy đã định hình toàn bộ nền công nghiệp phần mềm máy tính hiện đại.

---

### 4. Cơ Chế Chế Độ Kép (Dual-Mode Operation) & Bảo Vệ Hệ Thống
Để ngăn chặn các chương trình người dùng chạy sai làm sập toàn bộ hệ điều hành hoặc can thiệp trái phép vào dữ liệu của tiến trình khác, phần cứng CPU hỗ trợ cơ chế hoạt động kép:
- **Chế độ người dùng (User Mode - Bit chế độ = 1):**
  - Các chương trình ứng dụng thông thường (Word, Trình duyệt, Game) chạy trong chế độ này.
  - Bị nghiêm cấm thực thi các **Chỉ thị đặc quyền (Privileged Instructions)** như: truy cập trực tiếp thanh ghi phần cứng, vô hiệu hóa ngắt hệ thống, ghi đè vào bảng quản lý bộ nhớ của nhân.
- **Chế độ nhân / Giám sát (Kernel Mode / Supervisor Mode / System Mode - Bit chế độ = 0):**
  - Mã nguồn nhân hệ điều hành chạy trong chế độ này.
  - Có toàn quyền tối cao thực thi mọi chỉ thị CPU và truy cập không giới hạn vào toàn bộ không gian địa chỉ vật lý.
- **Cơ chế chuyển đổi chế độ:**
  - Khi chương trình người dùng cần sử dụng dịch vụ phần cứng (như đọc tệp trên đĩa, gửi dữ liệu qua mạng), nó phải phát ra một **Lời gọi hệ thống (System Call)** hoặc gặp lỗi phân chia cho 0/truy cập ô nhớ trái phép $\rightarrow$ CPU kích hoạt ngắt mềm (**Trap / Exception**), tự động chuyển Bit chế độ về `0` (Kernel Mode) để nhân OS xử lý. Sau khi hoàn thành, OS trả lại kết quả và chuyển bit chế độ về `1` (User Mode) cho ứng dụng chạy tiếp.

---

### 5. Các Kiến Trúc Cấu Trúc Hệ Điều Hành
1. **Kiến trúc Đơn khối (Monolithic Structure):**
   - Toàn bộ các thành phần của hệ điều hành (lập lịch tiến trình, quản lý bộ nhớ, hệ thống tệp, trình điều khiển thiết bị driver) được biên dịch thành một khối nhị phân khổng lồ duy nhất và cùng chạy chung trong không gian địa chỉ Kernel Mode.
   - *Ưu điểm:* Hiệu năng cực cao vì các hàm gọi trực tiếp nhau qua con trỏ bộ nhớ mà không tốn chi phí chuyển ngữ cảnh.
   - *Nhược điểm:* Độ an toàn kém; chỉ cần một đoạn mã của driver card mạng bị lỗi có thể làm sập (Crash / Màn hình xanh) toàn bộ hệ điều hành (Ví dụ: Nhân Linux cổ điển, MS-DOS).
2. **Kiến trúc Phân lớp (Layered Approach):**
   - Hệ điều hành được chia thành các lớp xếp chồng lên nhau từ lớp 0 (phần cứng) đến lớp $N$ (giao diện người dùng). Mỗi lớp chỉ được phép sử dụng dịch vụ của lớp ngay bên dưới nó. Dễ thiết kế và kiểm thử gỡ lỗi nhưng hiệu năng giảm do phải đi qua nhiều tầng trung gian (THE system).
3. **Kiến trúc Vi nhân (Microkernel):**
   - Nhân hệ điều hành chỉ giữ lại các chức năng tối thiểu cốt lõi nhất chạy trong Kernel Mode (gồm: Quản lý không gian địa chỉ cơ bản, Lập lịch CPU cơ sở và Cơ chế giao tiếp liên tiến trình - IPC).
   - Tất cả các dịch vụ hệ thống khác (Hệ thống tập tin, Quản lý bộ nhớ nâng cao, Trình điều khiển thiết bị, Giao thức mạng) được đưa ra ngoài chạy trong **Chế độ người dùng (User Mode)** như các tiến trình Server độc lập.
   - *Ưu điểm vượt trội:* **Độ tin cậy và an toàn cực kỳ cao.** Nếu hệ thống tệp hoặc một driver mạng bị crash, nó chỉ bị sập tiến trình user mode đó và có thể khởi động lại ngay mà nhân hệ điều hành vẫn hoạt động hoàn hảo. Dễ dàng mở rộng và bảo trì.
   - *Nhược điểm:* Tốc độ chậm hơn kiến trúc đơn khối do chi phí trao đổi thông điệp (Message Passing IPC) và chuyển đổi ngữ cảnh giữa User Mode và Kernel Mode liên tục. (Ví dụ: Mach, QNX, Minix).
4. **Kiến trúc Lai (Hybrid Architecture):**
   - Kết hợp cấu trúc phân lớp, vi nhân và đơn khối nhằm dung hòa giữa tính an toàn và hiệu năng thực thi cao (Điển hình là nhân Windows NT và macOS XNU).

---

## BÀI 2: QUẢN LÝ TIẾN TRÌNH & ĐỒNG BỘ TIẾN TRÌNH

### 1. Phân Biệt Chương Trình (Program) và Tiến Trình (Process)
- **Chương trình (Program):** Là một thực thể **tĩnh**; tập hợp các câu lệnh mã máy nằm yên trên ổ đĩa lưu trữ (tệp `.exe`).
- **Tiến trình (Process):** Là một thực thể **động**; là một chương trình đang được nạp vào bộ nhớ và đang được CPU thực thi. Mỗi tiến trình được cấp phát một không gian địa chỉ nhớ độc lập.
- **Cấu trúc không gian nhớ của một tiến trình:**
  - **Phân đoạn Mã (Code / Text Segment):** Chứa các câu lệnh máy thực thi của chương trình.
  - **Phân đoạn Dữ liệu (Data Segment):** Chứa các biến toàn cục và biến tĩnh (đã khởi tạo và chưa khởi tạo BSS).
  - **Vùng nhớ Heap:** Vùng nhớ cấp phát động tại thời gian chạy (`malloc`, `calloc`, toán tử `new`), phát triển dần từ địa chỉ thấp lên địa chỉ cao.
  - **Vùng nhớ Ngăn xếp (Stack):** Chứa các biến cục bộ, tham số truyền vào hàm và địa chỉ trở về khi gọi hàm, phát triển dần từ địa chỉ cao xuống địa chỉ thấp.

---

### 2. Khối Quản Lý Tiến Trình PCB (Process Control Block)
Là cấu trúc dữ liệu thẻ căn cước mà hệ điều hành dùng để theo dõi và quản lý mọi thông tin của một tiến trình, bao gồm:
1. **Định danh tiến trình (PID - Process ID):** Số nguyên duy nhất phân biệt tiến trình này với tiến trình khác.
2. **Trạng thái tiến trình (Process State):** Trạng thái hiện tại của tiến trình.
3. **Con trỏ lệnh (Program Counter - PC):** Lưu địa chỉ của lệnh máy tiếp theo sẽ được CPU thực thi.
4. **Các thanh ghi CPU (CPU Registers):** Nội dung các thanh ghi tích lũy, chỉ số, con trỏ ngăn xếp khi tiến trình bị ngắt để phục hồi lại sau đó.
5. **Thông tin lập lịch CPU:** Mức độ ưu tiên, con trỏ trỏ tới hàng đợi lập lịch.
6. **Thông tin quản lý bộ nhớ:** Con trỏ bảng trang (Page Table) hoặc bảng đoạn (Segment Table).
7. **Thông tin vào/ra (I/O Status Information):** Danh sách các tệp đang mở, các thiết bị I/O được cấp phát.

---

### 3. Mô Hình 5 Trạng Thái Của Tiến Trình & Sơ Đồ Chuyển Trạng Thái
```
          [New] 
            |
            v (Được nạp vào RAM)
         [Ready] <--------------------+
          |   ^                       |
(Được lập |   | (Hết Time Quantum /   | (I/O hoàn thành /
 lịch CPU)|   |  bị ngắt Preemption)  |  Sự kiện xảy ra)
          v   |                       |
        [Running] ----------------> [Waiting]
            |      (Yêu cầu I/O /    (Blocked)
            |       Chờ sự kiện)
            v (Hoàn thành)
       [Terminated]
```

- **New:** Tiến trình vừa được khởi tạo, đang chờ nạp vào bộ nhớ RAM.
- **Ready (Sẵn sàng):** Tiến trình đã nằm trong bộ nhớ RAM, có đầy đủ mọi tài nguyên, chỉ đang chờ được hệ điều hành cấp CPU để chạy.
- **Running (Đang thực thi):** Các lệnh của tiến trình đang được CPU xử lý trực tiếp.
- **Waiting / Blocked (Chờ / Khóa):** Tiến trình bị tạm ngưng thực thi do phải chờ một sự kiện bên ngoài (chờ người dùng bấm phím, chờ đọc dữ liệu từ đĩa, chờ nhận gói tin mạng).
- **Terminated:** Tiến trình đã kết thúc việc thực thi và đang được hệ điều hành giải phóng các tài nguyên.

---

### 4. Tuyến Trình / Luồng (Thread) vs Tiến Trình (Process)
- **Định nghĩa Tuyến trình (Thread):** Là đơn vị thực thi cơ bản nhất sử dụng CPU bên trong một tiến trình (thường gọi là Tiến trình trọng lượng nhẹ - **Lightweight Process**).
- **Tài nguyên chia sẻ chung:** Các tuyến trình trong cùng một tiến trình **chia sẻ chung không gian địa chỉ nhớ (Code segment, Data segment, Heap)** và các tài nguyên hệ thống (tệp mở, cổng mạng).
- **Tài nguyên sở hữu riêng biệt:** Mỗi tuyến trình sở hữu riêng: **Thread ID, Con trỏ lệnh (PC), Tập thanh ghi CPU và Ngăn xếp riêng (Private Stack)** để lưu trữ các biến cục bộ của riêng nó.
- **So sánh hiệu năng:** Tạo lập và chuyển ngữ cảnh giữa các tuyến trình nhanh hơn từ 10 đến 100 lần so với tiến trình vì không phải tạo lập và tráo đổi không gian nhớ ảo.

---

### 5. Đồng Bộ Hóa Tiến Trình & Giải Quyết Đoạn Găng
#### 5.1. Vùng Tranh Chấp (Race Condition) & Đoạn Găng (Critical Section)
- **Hiện tượng vùng tranh chấp (Race Condition):** Là tình trạng xảy ra khi nhiều tiến trình hoặc tuyến trình cùng truy cập và thao tác đồng thời trên một dữ liệu dùng chung (Shared Data), trong đó kết quả cuối cùng của dữ liệu phụ thuộc vào thứ tự ngẫu nhiên mà các tiến trình được CPU thực thi.
- **Đoạn găng / Miền găng (Critical Section - CS):** Là đoạn mã nguồn trong tiến trình mà tại đó nó truy cập và biến đổi tài nguyên dùng chung.

#### 5.2. 4 Điều Kiện Bắt Buộc Để Giải Quyết Bài Toán Đoạn Găng
Mọi giải pháp đồng bộ hóa muốn được coi là đúng đắn bắt buộc phải thỏa mãn 4 tiêu chí:
1. **Loại trừ tương hỗ (Mutual Exclusion):** Tại một thời điểm bất kỳ, chỉ có **tối đa một tiến trình** được phép thực thi bên trong đoạn găng của nó.
2. **Tiến triển (Progress):** Khi không có tiến trình nào đang ở trong đoạn găng và có các tiến trình đang muốn vào đoạn găng, thì chỉ những tiến trình đang không ở trong phần còn lại mới được tham gia quyết định tiến trình nào sẽ được vào tiếp theo, và quyết định này **không được phép hoãn lại vô hạn**.
3. **Chờ đợi có giới hạn (Bounded Waiting):** Phải có một giới hạn xác định về số lần các tiến trình khác được phép vào đoạn găng sau khi một tiến trình đã đưa ra yêu cầu vào đoạn găng của mình, nhằm đảm bảo **không có tiến trình nào bị bỏ đói vô hạn (Starvation)**.
4. **Độc lập tốc độ phần cứng (Arbitrary Speed):** Không được đưa ra bất kỳ giả thiết nào về tốc độ tương đối giữa các tiến trình cũng như số lượng CPU của hệ thống.

#### 5.3. Các Công Cụ Đồng Bộ Hóa
- **Giải pháp phần cứng:** Các lệnh nguyên tử (Atomic Instructions - thực hiện liền một khối không thể bị ngắt giữa chừng) như **Test-and-Set (TSL)** và **Swap / Compare-and-Swap**.
- **Giải thuật Peterson:** Giải pháp phần mềm kinh điển cho 2 tiến trình luân phiên nhau vào đoạn găng sử dụng 2 biến: mảng `flag[2]` và biến nguyên `turn`.
- **Cơ chế Đèn báo hiệu (Semaphore do Edsger Dijkstra đề xuất):**
  - Là một biến nguyên $S$ được bảo vệ, chỉ có thể khởi tạo và truy xuất thông qua 2 thao tác nguyên tử:
    - `wait(S)` (hay `P(S)`): Kiểm tra nếu $S \le 0$ thì tiến trình phải chờ; khi $S > 0$, giảm $S = S - 1$.
    - `signal(S)` (hay `V(S)`): Tăng giá trị của $S$: $S = S + 1$.
  - **Binary Semaphore (Đèn báo hiệu nhị phân / Mutex Lock):** $S$ chỉ nhận giá trị $0$ hoặc $1$, dùng để bảo vệ đoạn găng cho tài nguyên đơn lẻ.
  - **Counting Semaphore (Đèn báo hiệu đếm):** $S$ có thể nhận giá trị nguyên không âm bất kỳ, dùng để kiểm soát việc truy cập vào một tập tài nguyên gồm $N$ cá thể cùng loại.
- **Cấu trúc Màn hình quan sát (Monitor):** Kiểu dữ liệu trừu tượng cao cấp (được hỗ trợ trong Java, C#) tự động đảm bảo tính loại trừ tương hỗ mà lập trình viên không cần gọi thủ công `wait` và `signal`.

---

### 6. Hiện Tượng Tắc Nghẽn / Bế Tắc (Deadlock)
- **Định nghĩa Deadlock:** Là trạng thái mà hai hoặc nhiều tiến trình bị khóa vĩnh viễn, trong đó mỗi tiến trình đang nắm giữ một tài nguyên và đồng thời đang chờ đợi được cấp phát thêm một tài nguyên khác do một tiến trình khác trong nhóm đang chiếm giữ.
- **4 Điều kiện Coffman sinh ra Deadlock (Điều kiện Cần và Đủ):**
  1. **Loại trừ tương hỗ (Mutual Exclusion):** Có ít nhất một tài nguyên được giữ ở chế độ không thể chia sẻ (tại một thời điểm chỉ có 1 tiến trình được dùng).
  2. **Giữ và chờ (Hold and Wait):** Có tiến trình đang giữ ít nhất một tài nguyên và đang chờ cấp thêm tài nguyên mới đang bị tiến trình khác chiếm giữ.
  3. **Không thu hồi độc quyền (No Preemption):** Tài nguyên không thể bị tước đoạt cưỡng bức; nó chỉ có thể được giải phóng tự nguyện bởi tiến trình đang giữ sau khi hoàn thành công việc.
  4. **Chờ đợi vòng tròn (Circular Wait):** Tồn tại một chuỗi tiến trình $\{P_0, P_1, ..., P_n\}$ sao cho $P_0$ đang chờ tài nguyên do $P_1$ giữ, $P_1$ chờ $P_2$, ..., và $P_n$ lại đang chờ tài nguyên do $P_0$ nắm giữ.

#### 4 Chiến Lược Xử Lý Deadlock Của Hệ Điều Hành
1. **Ngăn chặn bế tắc (Deadlock Prevention):** Thiết kế hệ thống sao cho loại trừ ít nhất một trong bốn điều kiện Coffman (Ví dụ: bắt buộc tiến trình phải xin tất cả các tài nguyên cùng một lúc từ đầu; hoặc đánh số thứ tự tài nguyên và chỉ cho phép tiến trình xin tài nguyên theo thứ tự tăng dần để triệt tiêu chờ đợi vòng tròn).
2. **Tránh bế tắc (Deadlock Avoidance):** Hệ điều hành giám sát trạng thái cấp phát tài nguyên theo thời gian thực. Mỗi khi có yêu cầu cấp tài nguyên, OS chỉ chấp thuận nếu hệ thống vẫn duy trì được ở **Trạng thái an toàn (Safe State)**.
   - Sử dụng **Thuật toán Nhân viên ngân hàng (Banker's Algorithm của Dijkstra)** để kiểm tra ma trận tài nguyên hiện có (Available), tối đa (Max), đã cấp (Allocation) và nhu cầu còn lại (Need $\le$ Available).
3. **Phát hiện và Phục hồi bế tắc (Deadlock Detection & Recovery):** Định kỳ chạy thuật toán tìm chu trình trên đồ thị cấp phát tài nguyên (Wait-for Graph). Khi phát hiện deadlock, phục hồi bằng cách: Hủy tiến trình (chấm dứt tất cả hoặc từng tiến trình một) hoặc Thu hồi tài nguyên (tước đoạt tài nguyên và Rollback tiến trình về checkpoint trước đó).
4. **Chiến lược Bỏ qua (Ostrich Algorithm - Thuật toán Đà điểu vùi đầu vào cát):** Xem như bế tắc không bao giờ xảy ra. Vì chi phí phát hiện và phòng ngừa deadlock liên tục tiêu tốn rất nhiều tài nguyên CPU, phần lớn các hệ điều hành phổ thông hiện đại (Windows, Linux) đều áp dụng chiến lược này và để người dùng/quản trị viên tự xử lý khi gặp sự cố (bằng cách End Task trong Task Manager).

---

## BÀI 3: LẬP LỊCH CHO CPU (CPU SCHEDULING)

### 1. Chu Kỳ CPU - Vào/Ra & Các Mức Lập Lịch
- Chu kỳ sống của một tiến trình là sự xen kẽ liên tục giữa các **Xung tính toán CPU (CPU Burst)** và các **Xung chờ vào/ra (I/O Burst)**.
- **Ba cấp độ lập lịch trong hệ điều hành:**
  1. **Lập lịch dài hạn (Long-term Scheduler / Job Scheduler):** Chọn các công việc từ đĩa đưa vào hàng đợi Ready trong RAM. Kiểm soát **Mức độ đa chương (Degree of Multiprogramming)** của hệ thống.
  2. **Lập lịch trung hạn (Medium-term Scheduler / Swapper):** Tạm thời đưa bớt các tiến trình ra khỏi RAM ghi xuống đĩa (**Swap-out**) khi hệ thống bị quá tải bộ nhớ và nạp lại (**Swap-in**) khi RAM đã thông thoáng.
  3. **Lập lịch ngắn hạn (Short-term Scheduler / CPU Scheduler):** Lựa chọn tiến trình trong hàng đợi Ready để trao quyền điều khiển CPU. Hoạt động với tần suất cực cao (vài mili-giây một lần). Đi kèm với bộ phận **Điều vận (Dispatcher)** thực hiện công việc chuyển đổi ngữ cảnh (Context Switch).

---

### 2. Hai Cơ Chế Điều Độ CPU
- **Điều độ không tước đoạt / Không độc quyền (Non-preemptive Scheduling):**
  - Một khi CPU đã được cấp phát cho một tiến trình, tiến trình đó sẽ **giữ CPU toàn quyền** cho đến khi nó tự nguyện từ bỏ CPU (hoặc do kết thúc công việc hoặc do phải chuyển sang trạng thái Waiting chờ vào/ra I/O). Không ai có thể ngắt ngang.
- **Điều độ có tước đoạt / Độc quyền (Preemptive Scheduling):**
  - Hệ điều hành có toàn quyền ngắt ngang tiến trình đang chạy trên CPU và thu hồi CPU để trao cho một tiến trình khác có độ ưu tiên cao hơn, hoặc khi tiến trình hiện tại đã chạy hết lát cắt thời gian cho phép.

---

### 3. Năm Tiêu Chuẩn Đánh Giá Thuật Toán Lập Lịch
1. **Hiệu suất sử dụng CPU (CPU Utilization):** Tỷ lệ phần trăm thời gian CPU bận rộn xử lý công việc hữu ích (càng cao càng tốt, lý tưởng 40% đến 90%).
2. **Thông lượng (Throughput):** Số lượng tiến trình hoàn thành xong trong một đơn vị thời gian (càng cao càng tốt).
3. **Thời gian hoàn thành (Turnaround Time):** Khoảng thời gian từ lúc tiến trình được gửi vào hệ thống đến lúc nó kết thúc hoàn toàn:
   $$T_{\text{hoàn thành}} = T_{\text{kết thúc}} - T_{\text{đến}}$$
4. **Thời gian chờ đợi (Waiting Time):** Tổng thời gian mà tiến trình phải nằm chờ trong hàng đợi Ready:
   $$T_{\text{chờ}} = T_{\text{hoàn thành}} - T_{\text{thực thi CPU}}$$
   *(Tiêu chí quan trọng hàng đầu để so sánh chất lượng thuật toán).*
5. **Thời gian đáp ứng (Response Time):** Khoảng thời gian từ lúc gửi yêu cầu đến khi hệ thống đưa ra phản hồi đầu tiên (cực kỳ quan trọng đối với các hệ thống tương tác chia sẻ thời gian).

---

### 4. Các Thuật Toán Lập Lịch CPU Kinh Điển
#### 4.1. FCFS (First-Come, First-Served)
- Tiến trình nào đến trước trong hàng đợi Ready sẽ được cấp CPU chạy trước. Là thuật toán **không tước đoạt**.
- *Ưu điểm:* Cài đặt bằng Queue cực kỳ đơn giản.
- *Nhược điểm lớn:* Thời gian chờ trung bình thường rất cao; dễ mắc **Hiệu ứng đoàn tàu (Convoy Effect)**: khi một tiến trình có CPU burst rất dài chạy trước giữ chặt CPU, khiến một loạt các tiến trình có burst ngắn phía sau phải chờ đợi mòn mỏi.

#### 4.2. SJF (Shortest Job First)
- Lựa chọn tiến trình có độ dài CPU burst tiếp theo **ngắn nhất** để cấp CPU.
- **ĐẶC ĐIỂM QUAN TRỌNG:** **SJF là thuật toán tối ưu nhất về thời gian chờ trung bình (Minimum Average Waiting Time).**
- *Nhược điểm:* Không thể biết trước chính xác độ dài CPU burst tiếp theo (phải dự đoán bằng trung bình mũ). Có thể gây ra hiện tượng **Bỏ đói (Starvation)**: các tiến trình dài sẽ không bao giờ được chạy nếu liên tục có các tiến trình ngắn mới đến.

#### 4.3. SRTF (Shortest Remaining Time First)
- Là phiên bản **có tước đoạt (Preemptive)** của SJF.
- Khi một tiến trình mới xuất hiện trong hàng đợi Ready có thời gian CPU còn lại ngắn hơn thời gian còn lại của tiến trình đang chạy trên CPU, hệ điều hành sẽ tước đoạt CPU ngay lập tức để cấp cho tiến trình mới đến.

#### 4.4. Round Robin (RR - Lập Lịch Xoay Vòng)
- Được thiết kế tối ưu riêng cho các **Hệ thống phân chia thời gian (Time-sharing)**.
- Mỗi tiến trình được cấp một khoảng thời gian chạy CPU liên tục gọi là **Lát cắt thời gian (Time Quantum / Time Slice)**, thường từ 10 đến 100 mili-giây.
- Hàng đợi Ready được tổ chức như một Queue vòng tròn. Khi tiến trình chạy hết quantum mà chưa xong, nó bị tước đoạt CPU và bị đẩy xuống cuối hàng đợi Ready để chờ lượt kế tiếp.
- **Ảnh hưởng của kích thước Time Quantum ($q$):**
  - Nếu $q$ quá lớn: Thuật toán Round Robin sẽ thoái hóa thành **FCFS**.
  - Nếu $q$ quá nhỏ: Chi phí chuyển đổi ngữ cảnh (**Context Switch Overhead**) sẽ chiếm phần lớn thời gian CPU, làm sụt giảm nghiêm trọng hiệu năng toàn hệ thống.
  - *Quy tắc kinh nghiệm:* Nên chọn $q$ sao cho 80% các CPU burst của tiến trình ngắn hơn $q$.

#### 4.5. Lập Lịch Theo Độ Ưu Tiên (Priority Scheduling)
- Mỗi tiến trình được gán một chỉ số ưu tiên (thường quy ước số nguyên càng nhỏ thì độ ưu tiên càng cao). CPU luôn được cấp cho tiến trình có độ ưu tiên cao nhất trong hàng đợi.
- *Vấn đề bế tắc bỏ đói (Starvation):* Tiến trình có độ ưu tiên thấp có thể không bao giờ được cấp CPU.
- *Giải pháp Khắc phục:* Kỹ thuật **Lão hóa (Aging)** - Tăng dần độ ưu tiên của các tiến trình nằm chờ lâu trong hệ thống theo thời gian (ví dụ cứ chờ 15 phút thì tăng độ ưu tiên lên 1 bậc), đảm bảo mọi tiến trình cuối cùng đều sẽ được thực thi.

#### 4.6. Hàng Đợi Đa Mức (Multilevel Queue) & Đa Mức Phản Hồi (MLFQ)
- **Multilevel Queue (MLQ):** Chia hàng đợi Ready thành nhiều hàng đợi riêng biệt theo tính chất công việc (ví dụ: Hàng đợi tương tác Interactive chạy Round Robin, Hàng đợi chạy ngầm Batch chạy FCFS).
- **Multilevel Feedback Queue (MLFQ):** Cho phép tiến trình **di chuyển linh hoạt giữa các hàng đợi** tùy theo hành vi của nó: tiến trình nào chiếm dụng CPU quá lâu sẽ bị giáng cấp xuống hàng đợi ưu tiên thấp hơn (nhưng có quantum dài hơn); tiến trình nào thiên về I/O sẽ được thăng cấp lên hàng đợi ưu tiên cao.

---

## BÀI 4: QUẢN LÝ BỘ NHỚ (MEMORY MANAGEMENT)

### 1. Địa Chỉ Logic (Địa Chỉ Ảo) vs Địa Chỉ Vật Lý & Đơn Vị MMU
- **Địa chỉ logic (Logical / Virtual Address):** Địa chỉ ô nhớ do CPU phát sinh trong quá trình biên dịch và thực thi chương trình.
- **Địa chỉ vật lý (Physical Address):** Địa chỉ thực tế của các ô nhớ trên các thanh RAM phần cứng.
- **Đơn vị quản lý bộ nhớ MMU (Memory Management Unit):** Thiết bị phần cứng chịu trách nhiệm ánh xạ (chuyển đổi) địa chỉ logic do CPU phát ra thành địa chỉ vật lý trong RAM tại thời gian thực thi:
  $$\text{Địa chỉ vật lý} = \text{Địa chỉ logic} + \text{Thanh ghi tái định vị (Relocation Register)}$$

---

### 2. Cấp Phát Bộ Nhớ Liên Tục & Hiện Tượng Phân Mảnh
- **Phân vùng cố định (Fixed Partitioning):** Bộ nhớ được chia sẵn thành các phân vùng có kích thước cố định. Một tiến trình được nạp vào một phân vùng. Gây ra **Phân mảnh nội vi (Internal Fragmentation)**: Vùng nhớ bên trong phân vùng được cấp cho tiến trình nhưng tiến trình không dùng hết, làm lãng phí không gian nhớ thừa đó.
- **Phân vùng động (Variable / Dynamic Partitioning):** Cấp phát đúng kích thước mà tiến trình yêu cầu. Khi các tiến trình kết thúc và rời khỏi RAM, các khoảng trống nằm rải rác được sinh ra $\rightarrow$ Gây ra **Phân mảnh ngoại vi (External Fragmentation)**: Tổng dung lượng bộ nhớ trống còn lại trong RAM thì đủ cho một tiến trình mới nhưng các khoảng trống này bị xé lẻ không nằm liên tục kề nhau, khiến không thể nạp tiến trình vào được.
- **3 chiến lược chọn vùng trống (Dynamic Storage-Allocation Strategies):**
  - **First-Fit (Phù hợp đầu tiên):** Cấp phát vùng nhớ trống đầu tiên tìm thấy đủ lớn. Chạy nhanh nhất.
  - **Best-Fit (Phù hợp nhất):** Quét toàn bộ danh sách, cấp phát vùng nhớ trống nhỏ nhất nhưng vẫn đủ chứa tiến trình. Để lại các mẩu vụn trống nhỏ nhất khó tái sử dụng.
  - **Worst-Fit (Phù hợp tồi nhất):** Cấp phát vùng nhớ trống lớn nhất hiện có. Để lại khoảng trống còn lại tương đối lớn có thể dùng tiếp cho tiến trình khác.
- **Kỹ thuật Gom cụm (Compaction):** Dồn dịch tất cả các tiến trình đang có về một đầu bộ nhớ để gom toàn bộ các khoảng trống rải rác thành một khối trống liên tục khổng lồ (chỉ thực hiện được khi hệ thống hỗ trợ tái định vị động tại runtime).

---

### 3. Cấp Phát Bộ Nhớ Không Liên Tục: Phân Trang & Phân Đoạn
#### 3.1. Kỹ Thuật Phân Trang (Paging)
- **Nguyên lý:**
  - Chia bộ nhớ vật lý thành các khối có kích thước cố định bằng nhau gọi là **Khung trang (Frame / Page Frame)**, thường có kích thước là lũy thừa của 2 (từ 4KB đến 8KB).
  - Chia không gian địa chỉ logic của tiến trình thành các khối có kích thước bằng đúng khung trang, gọi là **Trang (Page)**.
  - Tiến trình có thể được nạp vào bất kỳ khung trang trống nào trong RAM mà **không bắt buộc phải nằm liên tục**.
- **Cấu trúc địa chỉ logic:** Gồm 2 phần: **$[p, d]$**
  - $p$ (Page number - Số hiệu trang): Dùng làm chỉ mục tra vào Bảng trang (**Page Table**).
  - $d$ (Offset - Độ lệch trong trang): Khoảng cách từ đầu trang đến ô nhớ cần tìm.
- **Công thức ánh xạ sang địa chỉ vật lý:**
  $$\text{Địa chỉ vật lý} = f \times \text{Kích thước khung trang} + d$$
  *(với $f$ là Frame number lấy ra từ dòng thứ $p$ của Bảng trang).*
- **Đặc điểm sống còn:** Phân trang **loại bỏ hoàn toàn phân mảnh ngoại vi**, nhưng vẫn có thể tồn tại **phân mảnh nội vi tại trang cuối cùng** của tiến trình.
- **Bộ đệm TLB (Translation Lookaside Buffer):** Bộ nhớ liên kết phần cứng tốc độ siêu cao đóng vai trò bộ nhớ đệm Cache lưu các ánh xạ bảng trang gần đây nhất. Tỷ lệ trúng TLB (**TLB Hit Ratio**) giúp giảm đáng kể thời gian truy cập bộ nhớ hiệu dụng (**EAT - Effective Access Time**).

#### 3.2. Kỹ Thuật Phân Đoạn (Segmentation)
- Chia không gian nhớ theo quan điểm logic của người lập trình (gồm các đoạn: Đoạn chương trình chính, Đoạn hàm con, Đoạn dữ liệu toàn cục, Đoạn ngăn xếp, Đoạn mảng).
- Mỗi phân đoạn có độ dài khác nhau. Địa chỉ logic gồm: **$[s, d]$** ($s$: số hiệu đoạn, $d$: độ lệch).
- **Bảng đoạn (Segment Table):** Mỗi dòng chứa cặp giá trị: **Base** (địa chỉ cơ sở vật lý trong RAM) và **Limit** (độ dài tối đa của đoạn đó). Nếu $d \ge Limit$, phần cứng CPU phát sinh bẫy lỗi truy cập bộ nhớ trái phép (**Trap addressing error**).

---

### 4. Bộ Nhớ Ảo (Virtual Memory) & Các Thuật Toán Thay Thế Trang
- **Khái niệm Bộ nhớ ảo:** Kỹ thuật cho phép thực thi một tiến trình mà **không đòi hỏi phải nạp toàn bộ không gian địa chỉ của nó vào bộ nhớ RAM vật lý cùng một lúc**. Tách biệt bộ nhớ logic của người dùng khỏi bộ nhớ vật lý, cho phép chạy các chương trình có dung lượng lớn hơn nhiều so với dung lượng RAM thực tế của máy.
- **Phân trang theo yêu cầu (Demand Paging):** Chỉ nạp một trang vào RAM khi tiến trình có lệnh thực sự truy xuất đến trang đó. Sử dụng bit **Hợp lệ / Bất hợp lệ (Valid / Invalid bit)** trong Bảng trang.
- **Lỗi trang (Page Fault):** Hiện tượng xảy ra khi tiến trình cố gắng truy cập vào một trang chưa được nạp vào RAM (bit trạng thái là Invalid).
  - *Quy trình xử lý Page Fault của OS:* Trap về hệ điều hành $\rightarrow$ Kiểm tra hợp lệ $\rightarrow$ Tìm khung trang trống trong RAM $\rightarrow$ Phát lệnh I/O đọc trang từ đĩa (vùng Swap) nạp vào RAM $\rightarrow$ Cập nhật Bảng trang gán bit Valid $\rightarrow$ Khởi động lại chỉ thị CPU bị ngắt.

#### Các Thuật Toán Thay Thế Trang (Page Replacement Algorithms)
Khi xảy ra lỗi trang mà trong RAM đã hết sạch khung trang trống, OS bắt buộc phải chọn một trang trong RAM để hoán đổi ra đĩa (Swap-out) nhường chỗ:
1. **FIFO (First-In, First-Out):** Thay thế trang đã được nạp vào bộ nhớ từ thời điểm sớm nhất (lâu nhất). Đơn giản nhưng mắc phải **Nghịch lý Belady (Belady's Anomaly)**: hiện tượng kỳ lạ khi **tăng số lượng khung trang vật lý nhưng số lỗi trang lại tăng lên** thay vì giảm!
2. **Thuật toán Tối ưu (Optimal / OPT):** Thay thế trang mà trong tương lai xa nhất sẽ không được dùng đến. Cho số lượng lỗi trang ít nhất có thể nhưng **không thể cài đặt được trên thực tế** vì hệ điều hành không thể biết trước tương lai (dùng làm chuẩn lý thuyết để đối sánh).
3. **LRU (Least Recently Used):** Thay thế trang mà khoảng thời gian kể từ lần truy cập cuối cùng cho đến nay là lâu nhất. Hiệu quả thực tế rất cao, tiếp cận xấp xỉ thuật toán tối ưu và **không bao giờ mắc nghịch lý Belady**. Nhược điểm: cài đặt phần cứng tốn kém (dùng bộ đếm Counter hoặc Ngăn xếp Stack).
4. **Thuật toán Đồng hồ / Cơ hội thứ hai (Clock / Second-Chance):** Sử dụng một bit tham chiếu (Reference bit) 0 hoặc 1. Duyệt các trang theo vòng tròn như kim đồng hồ: nếu gặp bit 0 thì chọn thay thế; nếu gặp bit 1 thì xóa về 0 và cho trang đó một cơ hội thứ hai rồi chuyển sang kiểm tra trang kế tiếp.

#### Hiện Tượng Trì Trệ Hệ Thống (Thrashing)
- Là trạng thái hệ điều hành phải dành phần lớn thời gian để giải quyết các lỗi trang và tráo đổi trang liên tục giữa RAM và đĩa, khiến cho **hiệu suất sử dụng CPU bị sụt giảm nghiêm trọng gần về 0**.
- *Nguyên nhân:* Mức độ đa chương quá cao, tổng kích thước tập làm việc (**Working Set**) của tất cả các tiến trình vượt quá tổng dung lượng khung trang thực tế của bộ nhớ RAM.
- *Khắc phục:* Sử dụng mô hình Working-Set Model, giảm bớt mức độ đa chương bằng cách đình chỉ (Swap-out) bớt một số tiến trình ra đĩa.

---

## BÀI 5: BỘ NHỚ NGOÀI VÀ HỆ THỐNG TẬP TIN

### 1. Cấu Trúc Đĩa Từ (Magnetic Disk) & Các Thành Phần Thời Gian
- Cấu trúc vật lý: Gồm các phiến đĩa tròn quay quanh một trục chính. Mỗi mặt đĩa được quét bởi một đầu đọc/ghi (Read/Write Head).
- Mỗi mặt đĩa được chia thành các vòng tròn đồng tâm gọi là **Rãnh từ (Track)**. Tập hợp các track có cùng bán kính trên tất cả các mặt đĩa tạo thành một **Trụ từ (Cylinder)**. Mỗi track lại được chia nhỏ thành các **Cung từ (Sector)** có kích thước cố định (tiêu chuẩn 512 bytes hoặc 4KB).
- **Các thành phần thời gian truy xuất đĩa:**
  1. **Thời gian tìm kiếm (Seek Time):** Thời gian để cánh tay cơ học di chuyển đầu đọc/ghi đến đúng cylinder cần thiết. **(Đây là thành phần chiếm tỷ trọng thời gian lớn nhất và chậm nhất)**.
  2. **Độ trễ quay (Rotational Latency):** Thời gian chờ cho đĩa quay để sector mong muốn đi đến ngay dưới đầu đọc.
  3. **Thời gian truyền dữ liệu (Transfer Time):** Thời gian đọc/ghi luồng bit dữ liệu từ đĩa vào bộ nhớ máy tính.

---

### 2. Các Thuật Toán Lập Lịch Đầu Đọc Đĩa
- **FCFS (First-Come, First-Served):** Phục vụ tuần tự theo thứ tự yêu cầu đến. Đầu đọc di chuyển nhảy cóc qua lại hỗn loạn, thời gian tìm kiếm trung bình lớn.
- **SSTF (Shortest Seek Time First):** Chọn phục vụ yêu cầu có khoảng cách di chuyển đầu đọc gần nhất so với vị trí hiện tại của đầu từ. Giảm mạnh thời gian tìm kiếm nhưng có thể gây **bỏ đói (Starvation)** cho các track ở xa.
- **SCAN (Thuật toán Thang máy - Elevator Algorithm):** Đầu đọc di chuyển liên tục theo một chiều từ một đầu đĩa sang đầu kia của đĩa, phục vụ tất cả các yêu cầu trên đường đi; khi chạm mép tận cùng của đĩa thì đảo chiều quay ngược lại. Triệt tiêu hoàn toàn starvation.
- **C-SCAN (Circular SCAN):** Đầu đọc chỉ phục vụ các yêu cầu khi di chuyển theo một chiều xác định; khi chạm mép đĩa, nó quay ngoắt ngay về đầu đĩa bên kia mà không phục vụ yêu cầu nào trên chiều về, tạo sự công bằng hơn về thời gian chờ giữa các track.
- **LOOK & C-LOOK:** Biến thể cải tiến của SCAN/C-SCAN; đầu đọc chỉ di chuyển đến yêu cầu cuối cùng theo hướng đó rồi đảo chiều ngay chứ không cần đi ra tận mép vật lý của đĩa.

---

### 3. Hệ Thống Tập Tin & Các Phương Pháp Cấp Phát Không Gian Đĩa
- **Khái niệm Tệp (File):** Tập hợp logic các thông tin có liên quan với nhau được lưu trữ trên bộ nhớ ngoài, có tên định danh duy nhất trong thư mục.
- **3 Phương pháp cấp phát không gian lưu trữ cho tệp:**
  1. **Cấp phát liên tục (Contiguous Allocation):** Mỗi tệp chiếm một tập hợp các khối đĩa nằm liên tiếp kề nhau. Truy xuất tuần tự và ngẫu nhiên siêu tốc. Nhược điểm: Gây phân mảnh ngoại vi trên đĩa và rất khó mở rộng kích thước file khi ghi thêm.
  2. **Cấp phát liên kết (Linked Allocation):** Mỗi khối đĩa chứa dữ liệu và một con trỏ trỏ đến khối đĩa tiếp theo của tệp. Loại bỏ hoàn toàn phân mảnh ngoại vi. Nhược điểm: Chỉ truy xuất tuần tự, không truy xuất ngẫu nhiên được; nếu một con trỏ bị hỏng sẽ mất toàn bộ phần sau của tệp. (Khắc phục bằng bảng **FAT - File Allocation Table** đưa toàn bộ các con trỏ vào một bảng tập trung).
  3. **Cấp phát chỉ mục (Indexed Allocation):** Mỗi tệp có một khối đặc biệt gọi là **Khối chỉ mục (Index Block / inode trong Linux/Unix)** chứa danh sách con trỏ trỏ trực tiếp đến các khối dữ liệu của tệp. Hỗ trợ truy xuất ngẫu nhiên cực nhanh, không phân mảnh ngoại vi. Với tệp rất lớn, dùng chỉ mục nhiều cấp (Single/Double/Triple Indirect).

---

## BÀI 6: HỆ ĐIỀU HÀNH MICROSOFT WINDOWS

### 1. Kiến Trúc Nhân Windows NT (New Technology)
Được thiết kế theo mô hình lai (Hybrid) phân tách rõ ràng giữa hai chế độ:
1. **Chế độ người dùng (User Mode):**
   - **Các hệ thống con môi trường (Environment Subsystems):** Cung cấp API cho các ứng dụng khác nhau: **Win32 Subsystem** (hệ thống con chủ đạo cho các ứng dụng Windows 32/64-bit), POSIX Subsystem.
   - **Các tiến trình hệ thống:** `smss.exe` (Session Manager), `winlogon.exe` (Đăng nhập), `services.exe` (Quản lý dịch vụ), `lsass.exe` (Bảo mật tài khoản xác thực).
2. **Chế độ hạt nhân (Kernel Mode):**
   - **HAL (Hardware Abstraction Layer - Tầng trừu tượng hóa phần cứng):** Lớp phần mềm che giấu toàn bộ các khác biệt chi tiết giữa các bo mạch chủ, chipset, CPU, giúp các phần bên trên của Windows độc lập với phần cứng.
   - **Kernel (Nhân cơ sở):** Điều phối các thao tác mức thấp: lập lịch luồng (Thread), xử lý ngắt phần cứng, đồng bộ hóa đa xử lý.
   - **Executive:** Tập hợp các hệ thống con dịch vụ cao cấp:
     - **Object Manager:** Quản lý thống nhất mọi đối tượng trong Windows (Process, Thread, File, Port, Mutex) và cấp phát **Handle** cho ứng dụng.
     - **Process and Thread Manager:** Khởi tạo, theo dõi và hủy tiến trình/luồng.
     - **Virtual Memory Manager (VMM):** Cung cấp không gian địa chỉ ảo 32-bit (4GB) hoặc 64-bit cho mỗi tiến trình.
     - **Security Reference Monitor (SRM):** Thực thi chính sách bảo mật, kiểm tra Access Token của người dùng với danh sách Access Control List (ACL) của đối tượng mỗi khi có yêu cầu truy cập.
     - **I/O Manager:** Quản lý thiết bị vào/ra độc lập phần cứng thông qua các gói yêu cầu I/O (**IRP - I/O Request Packets**) và hệ thống tệp.

---

### 2. So Sánh Các Hệ Thống Tập Tin Trong Windows: FAT16, FAT32 vs NTFS
| Tiêu chí | FAT16 | FAT32 | NTFS (New Technology File System) |
| :--- | :--- | :--- | :--- |
| **Kích thước phân vùng tối đa** | 2 GB (4 GB trong Win NT) | 2 TB (32 GB giới hạn bởi công cụ format Windows) | Lên tới 16 Exabytes (EB) |
| **Kích thước một tệp đơn lẻ tối đa**| 2 GB | **4 GB** (Không thể chứa file phim/video lớn hơn 4GB) | Lên tới 16 TB |
| **Khả năng tự phục hồi (Journaling)**| Không có | Không có | **Có (USN Journal)** - Ghi nhật ký giao dịch, tự động phục hồi tính toàn vẹn khi mất điện đột ngột. |
| **Bảo mật phân quyền (Permissions)**| Không hỗ trợ | Không hỗ trợ | **Hỗ trợ tối đa qua ACL (Access Control List)** cho từng User/Group. |
| **Mã hóa và Nén dữ liệu** | Không | Không | **Tích hợp sẵn EFS (Encrypting File System)** và nén tệp tự động. |
| **Cấu trúc quản trị cốt lõi** | Bảng FAT | Bảng FAT32 | **Bảng tệp chính MFT (Master File Table)** - Mọi thứ đều là bản ghi trong MFT. |

---

## BÀI 7: QUẢN TRỊ HỆ THỐNG WINDOWS (WINDOWS ADMINISTRATION)

### 1. Quản Trị Người Dùng & Nhóm (Users & Groups)
- **Tài khoản cục bộ (Local Accounts):** Lưu trữ trong cơ sở dữ liệu **SAM (Security Accounts Manager)** cục bộ trên máy tính (`C:\Windows\System32\config\SAM`). Chỉ có tác dụng đăng nhập trên chính máy tính đó.
- **Tài khoản miền (Domain Accounts):** Lưu trữ và quản lý tập trung trong dịch vụ thư mục **Active Directory Domain Services (AD DS)** trên máy chủ **Domain Controller (DC)** (tệp `ntds.dit`). Cho phép một tài khoản đăng nhập trên bất kỳ máy trạm nào thuộc miền Domain.
- **Khái niệm SID (Security Identifier):** Chuỗi mã định danh duy nhất (ví dụ: `S-1-5-21-...`) được gán cho mỗi tài khoản người dùng hoặc nhóm ngay khi khởi tạo. **Hệ điều hành nhận diện quyền hạn người dùng thông qua SID chứ không phải qua tên tài khoản.** Nếu bạn xóa một tài khoản rồi tạo lại một tài khoản mới có tên y hệt, tài khoản mới sẽ nhận một SID hoàn toàn khác và mất toàn bộ các quyền hạn trước đó.
- **Các nhóm người dùng mặc định:**
  - **Administrators:** Toàn quyền tối cao quản trị hệ thống.
  - **Users:** Người dùng chuẩn, được phép chạy các ứng dụng thông thường nhưng không được thay đổi cài đặt hệ thống hoặc chỉnh sửa tệp hệ thống.
  - **Guests:** Tài khoản khách vãng lai tạm thời, quyền hạn tối thiểu.

---

### 2. Quản Lý Phân Quyền: NTFS Permissions vs Share Permissions
Khi chia sẻ tài nguyên qua mạng LAN trong Windows:
1. **Quyền chia sẻ (Share Permissions):**
   - Chỉ có tác dụng khi người dùng truy cập thư mục từ xa qua đường dẫn mạng (ví dụ: `\\Server\SharedFolder`). Không có tác dụng đối với người dùng đăng nhập trực tiếp cục bộ tại máy chủ.
   - Gồm 3 mức quyền cơ bản: **Read (Đọc)**, **Change (Thay đổi)**, **Full Control (Toàn quyền)**.
2. **Quyền trên hệ thống tệp NTFS (NTFS Permissions):**
   - Áp dụng trên cả hai phương thức: người dùng đăng nhập cục bộ trực tiếp trên máy và người dùng truy cập qua mạng.
   - Gồm các mức quyền chi tiết: **Read**, **Write**, **Read & Execute**, **List Folder Contents**, **Modify**, **Full Control**.
3. **Quy tắc phối hợp quyền lực cốt lõi (BẮT BUỘC NHỚ KHI THI):**
   - **Quy tắc 1 (Truy cập qua mạng):** Quyền thực tế có hiệu lực (**Effective Permission**) là **GIAO ĐIỂM HẠN CHẾ NHẤT (Most Restrictive)** giữa Share Permission và NTFS Permission.  
     *(Ví dụ: Nếu Share Permission là Full Control nhưng NTFS Permission chỉ là Read $\rightarrow$ Người dùng qua mạng chỉ có quyền Read).*
   - **Quy tắc 2 (Từ chối luôn thắng):** Quyền **Từ chối rõ ràng (Explicit Deny) luôn có ưu tiên cao nhất**, đè bẹp mọi quyền Cho phép (Allow).
   - **Quy tắc 3:** Quyền gán trực tiếp (Explicit) có ưu tiên cao hơn quyền được thừa kế (Inherited) từ thư mục cha.

---

### 3. Các Công Cụ Quản Trị Hệ Thống Windows
- **Computer Management (`compmgmt.msc`):** Bảng điều khiển quản trị tổng thể gồm: Quản lý thiết bị (Device Manager), Quản lý đĩa và phân vùng (Disk Management), Trình xem sự kiện (Event Viewer), Quản lý người dùng và nhóm cục bộ (Local Users and Groups), Quản lý dịch vụ chạy ngầm (Services).
- **Task Manager (`Ctrl + Shift + Esc`):** Giám sát thời gian thực hiệu suất sử dụng tài nguyên CPU, RAM, Disk, Network; xem danh sách tiến trình đang chạy và quản lý ứng dụng khởi động cùng Windows.
- **Cơ sở dữ liệu cấu hình Windows Registry (`regedit`):**
  - Là cơ sở dữ liệu phân cấp trung tâm lưu trữ toàn bộ cấu hình phần cứng, phần mềm, tùy chọn người dùng của Windows.
  - **5 Nhánh gốc (Root Keys):**
    1. **HKEY_CLASSES_ROOT (HKCR):** Lưu thông tin liên kết định dạng phần mở rộng tệp với phần mềm mở tệp tương ứng và cấu hình OLE/COM.
    2. **HKEY_CURRENT_USER (HKCU):** Lưu cấu hình của người dùng đang đăng nhập hiện tại (màn hình desktop, tùy chọn cá nhân).
    3. **HKEY_LOCAL_MACHINE (HKLM):** Lưu cấu hình phần cứng và phần mềm của toàn bộ máy tính (áp dụng cho mọi người dùng).
    4. **HKEY_USERS (HKU):** Lưu trữ hồ sơ cấu hình của tất cả các tài khoản người dùng trên máy.
    5. **HKEY_CURRENT_CONFIG (HKCC):** Lưu cấu hình hồ sơ phần cứng hiện thời đang hoạt động.
- **Chính sách nhóm Group Policy (`gpedit.msc`):** Công cụ quản trị tập trung áp đặt các quy định bảo mật, khóa cổng USB, chặn cài đặt phần mềm lạ hàng loạt trên toàn bộ các máy trạm trong mạng doanh nghiệp.

---

## TỪ ĐIỂN THUẬT NGỮ CHUYÊN NGÀNH IT101 (VIỆT - ANH)

- **Ánh xạ theo khối (Blocking mapping):** 

- **Cơ chế biến đổi địa chỉ động (DAT) phải sử:** 

- **dụng các bảng ánh xạ - để chỉ rằng các ô nhớ:** 

- **ảo nào tại thời điểm hiện thời nằm trong bộ:** 

- **nhớ và ở ô nhớ thực nào, ánh xạ theo khối sẽ:** 

- **gộp các khối - block, và hệ thống theo dõi:** 

- **xem các block của bộ nhớ ảo nằm ở đâu trong:** bộ nhớ.

- **Ánh xạ trực tiếp:** Tiến trình đưa yêu cầu truy cập địa chỉ ảo.

- **trước khi tiến trình tiếp tục thực hiện, hệ điều:** 

- **hành nạp địa chỉ thực của bảng ánh xạ trang:** 

- **vào thanh ghi. Địa chỉ cơ sở được cộng với số:** 

- **trang, thu được địa chỉ thực của dòng chứa:** 

- **ánh xạ trang p. Dòng này chỉ ra page frame:** 

- **của số trang ban đầu. Sau đó page frame được:** cộng với địa chỉ offset và ta có địa chỉ thực.

- **Cách tính này được gọi là ánh xạ trực tiếp, vì:** 

- **bảng ánh xạ trang chứa từng dòng cho mỗi:** trang bộ nhớ ảo của tiến trình.

- **Bộ xử lý trung tâm (Control Processing:** 

- **unit - CPU):** 

- **CPU có thể được xem như não bộ, một trong:** những phần tử cốt lõi nhất của máy vi tính.

- **Nhiệm vụ chính của CPU là xử lý các chương:** trình vi tính và dữ kiện.

- **Bộ điều khiển (Control unit - CU):** 

- **Là các vi xử lí có nhiệm vụ thông dịch các:** 

- **lệnh của chương trình và điều khiển hoạt động:** 

- **xử lí, được điều tiết chính xác bởi xung nhịp:** 

- **đồng hồ hệ thống. Mạch xung nhịp đồng hồ hệ:** 

- **thống dùng để đồng bộ các thao tác xử lí trong:** 

- **và ngoài CPU theo các khoảng thời gian:** 

- **không đổi. Khoảng thời gian chờ giữa hai:** 

- **xung gọi là chu kỳ xung nhịp. Tốc độ theo đó:** 

- **xung nhịp hệ thống tạo ra các xung tín hiệu:** 

- **chuẩn thời gian gọi là tốc độ xung nhịp - tốc độ:** đồng hồ tính bằng triệu đơn vị mỗi giây - Mhz.

- **Bộ điểu khiển đĩa cứng (Hard disk:** 

- **controler –HDC):** 

- **Thực hiện chức năng truyền dữ liệu từ CPU:** 

- **đến ổ đĩa và nhận dữ liệu ừ ổ đĩa cung cấp:** cho CPU.

- **Bộ nhớ truy cập trực tiếp (Direct:** 

- **Memory Access –DMA):** 

- **Là bộ nhớ thực hiện quá trình vào/ra dữ liệu:** 

- **trực tiếp giữa bộ nhớ và thiết bị ngoại vi:** không thông qua CPU.

- **Bộ phân phát (Dispatcher):** 

- **Dispatcher sẽ chuyển quyền điều khiển CPU:** 

- **về cho tiến trình được chọn bởi bộ định thời:** ngắn hạn.

- **Bảng quản lý đoạn (Segment Control:** 

- **block - SCB):** 

- **Chương trình của người sử dụng được biên tập:** 

- **riêng cho từng modul độc lập. Kết quả tập hợp:** 

- **chương trình là một bảng điều khiển cho biết:** chương trình có thể sử dụng những modul nào,

- **độ dài modul là bao nhiêu. Bảng điều khiển này:** được gọi là bảng quản lý đoạn.

- **Bộ nhớ ảo (Virtual Memory):** 

- **Là một kĩ thuật cho phép một chương trình:** 

- **ứng dụng tưởng rằng mình đang có một dải:** 

- **bộ nhớ liên tục (một không gian địa chỉ),:** 

- **trong khi thực ra phần bộ nhớ này có thể bị:** 

- **phân mảnh trong bộ nhớ vật lý và thậm chí có:** thể được lưu trữ cả trong đĩa cứng.

- **Bản ghi vật lý hay block:** 

- **Là đơn vị thông tin thực sự trao đổi với thiết bị:** lưu trữ.

- **Bản ghi logic:** 

- **Là tập hợp thông tin được coi là đơn vị toàn:** vẹn nhìn từ phía người dùng.

- **Bảng cấp phát tập tin (File Allocation:** 

- **Table – FAT):** 

- **Có chức năng::**  Quản lý bộ nhớ phân phối cho từng file.  Quản lý bộ nhớ tự do trên đĩa.  Quản lý bộ nhớ kém chất lượng.

- **Bảng vector ngắt:** 

- **Gồm 256 phần tử, mỗi phần tử gồm 4byte:** 

- **ứng với 256 ngắt. Mỗi phần tử trong bảng:** 

- **vector ngắt chứa 2 địa chỉ: địa chỉ thanh ghi:** 

- **đoạn đưa vào CS và địa chỉ offset của chương:** trình phục vụ ngắt đưa vào IP.

- **Cung khởi động (Boot sector - BS):** 

- ** Trên đĩa mềm: là sector 1 ở track 0 của:** side 0.

- ** Trên đĩa cứng: là sector 0 của một phân:** 

- **vùng chính (Primary Partition).:** 

- **Chuyển ngữ cảnh:** Là công việc giao CPU cho tiến trình khác.

- **Khi đó cần::** 

- ** Lưu ngữ cảnh của tiến trình cũ vào PCB:** của nó.

- ** Nạp ngữ cảnh từ PCB của tiến trình mới để:** tiến trình mới thực thi.

- **Chiến lược FCFS (First Come First:** 

- **Served - FCFS):** 

- **Bộ xử lý phục vụ các tiến trình theo trình tự:** 

- **xuất hiện của tiến trình trong dòng xếp hàng:** 

- **sẵn sàng và mỗi tiến trình được phục vụ đến:** 

- **khi kết thúc hoặc khi nó phải chuyển sang:** trạng thái bị ngắt.

- **Chiến lược SJF (Shortes Job First):** 

- **Là nguyên tắc không hoán đổi, theo đó bài:** 

- **toán có thời gian thực hiện ngắn nhất theo dự:** đoán sẽ được thực hiện trước.

- **Chiến lược SRT (Shortest Rest Time):** 

- **Là nguyên tắc có hoán đổi, tiến trình được:** 

- **đánh giá có khoảng thời gian còn lại đến khi:** 

- **kết thúc là ngắn nhất tiến trình mới được tạo:** ra sẽ được ưu tiên.

- **Chiến lược HRN (Highest Response:** 

- **Ratio Next):** 

- **Là nguyên tắc không hoán đổi và mức ưu tiên:** 

- **động, theo đó mức ưu tiên của tiến trình phụ:** 

- **thuộc không chỉ thời gian cần thực hiện nó:** 

- **mà còn phụ thuộc cả vào thời gian nó phải:** 

- **chờ để được phục vụ, mức ưu tiên càng cao:** thì thời gian thực hiện càng ngắn.

- **Chiến lược quay vòng (Round robin - RR):** 

- **Là nguyên tắc FIFO (First In First Out) có:** 

- **hoán đổi, mỗi tiến trình trong mỗi lần được:** 

- **sử dụng bộ xử lý không được vượt quá:** 

- **khoảng thời gian xác định - chính là lượng tử:** 

- **(Quantum).:** 

- **Chuyển đổi địa chỉ:** 

- **Là quá trình ánh xạ một địa chỉ từ không gian:** địa chỉ này sang không gian địa chỉ khác.

- **Cơ chế phủ lấp (Overlay):** 

- **Tại mỗi thời điểm, chỉ giữ lại trong bộ nhớ:** 

- **những lệnh hoặc dữ liệu cần thiết, giải phóng:** 

- **các lệnh/dữ liệu chưa hoặc không cần dùng:** đến.

- **Cơ chế Swapping:** 

- **Một tiến trình có thể tạm thời bị swap ra khỏi:** 

- **bộ nhớ chính và lưu trên một hệ thống lưu trữ:** 

- **phụ. Sau đó, tiến trình có thể được nạp lại vào:** bộ nhớ để tiếp tục quá trình thực thi.

- **Cơ chế phân trang (Paging):** 

- **Chương trình được tập hợp như trong trường:** 

- **hợp có cấu trúc tuyến tính nhưng sau đó được:** 

- **chính chương trình biên tập chia thành từng:** 

- **phần có độ dài bằng nhau gọi là trang. Sản:** 

- **phẩm biên tập là một bảng quản lý trang, mỗi:** 

- **phần tử của bảng ứng với một trang của:** chương trình người sử dụng.

- **Chiến lược loại bỏ trang tối ưu:** 

- **(Principle Of Optimality):** 

- **Là nguyên tắc để loại bỏ trang, để đảm bảo:** 

- **các đặc tính tốc độ tốt nhất và sử dụng hiệu:** 

- **quả nhất tài nguyên thì phải loại bỏ trang mà:** 

- **trong tương lại sẽ không có yêu cầu truy cập:** 

- **đến nó (trong thời gian lâu nhất).:** 

- **Chiến lược loại bỏ trang ngẫu nhiên:** 

- **Là chiến lược để loại bỏ trang, tất cả các trang:** 

- **đang nằm trong bộ nhớ đều có thể bị chọn và:** 

- **với xác suất như nhau, và có thể trang thường:** 

- **xuyên phải truy cập sẽ bị loại bỏ khỏi bộ nhớ:** vì tính ngẫu nhiên.

- **Chiến lược loại bỏ trang FIFO:** Là một trong những chiến lược loại bỏ trang,

- **khi cần loại bỏ trang nào khỏi bộ nhớ thì sẽ:** 

- **chọn trang nằm trong bộ nhớ lâu nhất (theo:** chỉ số đã gán).

- **Chiến lược loại bỏ trang LRU (Least:** 

- **Recentaly Used):** 

- **Để loại bỏ trang thì chọn trang nào không:** được truy xuất lâu nhất.

- **Chiến lược loại bỏ trang LFU:** 

- **Để loại bỏ trang thì chọn trang nào ít được sử:** 

- **dụng nhất (theo tần số).:** 

- **Danh sách kiểm soát truy xuất(Access:** 

- **Control List - ACL):** 

- **Là danh sách các đặc quyền mà chủ thể có thể:** 

- **được thực hiện trên một đối tượng. Mỗi đối:** 

- **tượng có một danh sách các quyền truy cập:** tương ứng với một chủ thể.

- **Định thời truy cập đĩa:** 

- **Là sắp xếp lại trật tự của các yêu cầu đọc/ghi:** 

- **đĩa sao cho giảm thiểu thời gian di chuyển:** 

- **đầu đọc (Seek Time).:** 

- **Địa chỉ vật lý (Physical Address) (địa:** 

- **chỉ thực):** Là một vị trí thực trong bộ nhớ chính.

- **Địa chỉ logic (Logical Address):** 

- **Là một vị trí nhớ được diễn tả trong một:** chương trình.

- **Địa chỉ tương đối (Relative Address) (địa:** 

- **chỉ khả tái định vị, Relocatable Address):** 

- **Là một kiểu địa chỉ logic trong đó các địa chỉ:** 

- **được biểu diễn tương đối so với một vị trí xác:** định nào đó trong chương trình.

- **Địa chỉ tuyệt đối (Absolute Address)::** Địa chỉ tương đương với địa chỉ thực.

- **Định thời không trưng dụng:** 

- **(Nonpreemptive Scheduling)::** 

- **Chỉ thực thi hàm định thời trong trường hợp::** 

- **chuyển từ trạng thái running sang trạng thái:** waiting hoặc kết thúc thực thi.

- **Định thời trưng dụng (Preemptive:** 

- **Scheduling):** 

- **Thực thi hàm định thời trong các trường hợp::** 

- ** Chuyển từ trạng thái running sang trạng:** thái waiting.

- ** Chuyển từ trạng thái waiting sang trạng:** thái ready.

- ** Chuyển từ trạng thái running sang trạng:** thái ready.  Kết thúc thực thi.

- **Định thời dài hạn (Long - Term:** 

- **Scheduling):** 

- **Là việc xác định tiến trình nào được chấp:** 

- **nhận vào hệ thống:** 

- **Định thời trung hạn (Medium - Term:** 

- **Scheduling):** 

- **Là việc xác định tiến trình nào được đưa vào:** 

- **(Swap in), đưa ra khỏi (Swap out) bộ nhớ:** chính.

- **Định thời ngắn hạn (Short - Term:** 

- **Scheduling):** 

- **Là việc xác định tiến trình nào được thực thi:** tiếp theo.

- **Độ dài của chu kì CPU (CPU - Burst):** Là thời gian sử dụng CPU.

- **Đồ thị cấp phát tài nguyên (Resource:** 

- **Allocation Graph - RAG):** 

- **Đồ thị cấp phát tài nguyên (RAG) là đồ thị:** 

- **có hướng, với tập đỉnh V và tập cạnh E:** 

- ** Tập đỉnh V gồm 2 loại::** 

- **o 	P = {P 1, P2,…, Pn } 	(Tất 	cả 	tiến:** trình trong hệ thống).

- **o 	R = {R1, R2,…, R m } (Tất cả các loại:** tài nguyên trong hệ thống).

- ** Tập cạnh E gồm 2 loại::** 

- **o 	Request edge: cạnh có hướng từ Pi:** 

- **đến Rj:** 

- **o 	Assignment edge: cạnh có hướng từ:** Rj đến Pi .

- **Giao thức (Protocol):** 

- **Là tập luật quy định cách thức truyền thông:** giữa các hệ thống máy tính.

- **Giao diện lập trình ứng dụng:** 

- **(application programing interface -:** 

- **API):** 

- **Là một giao diện mà một hệ thống máy tính:** 

- **hay ứng dụng cung cấp để cho phép các yêu:** 

- **cầu dịch vụ có thể được tạo ra từ các chương:** 

- **trình máy tính khác, và/hoặc cho phép dữ liệu:** có thể được trao đổi qua lại giữa chúng.

- **Chẳng hạn, một chương trình máy tính có thể:** 

- **(và thường là phải) dùng các hàm API của hệ:** 

- **điều hành để xin cấp phát bộ nhớ và truy xuất:** tập tin.

- **Gọi thủ tục từ xa (remote process call:** 

- **- RPC):** 

- **Cho phép một chương trình gọi một thủ tục:** nằm trên máy tính ở xa qua mạng.

- **Hệ thống tập tin ảo (Virtual file system:** 

- **- VFS):** 

- **Cung cấp giao diện lập trình ứng dụng chung:** 

- **để truy xuất nhiều loại hệ thống file khác:** nhau.

- **Hệ thống tập tin (File System – FS):** 

- **Là một cấu thành của hệ điều hành có nhiệm:** 

- **vụ điều khiển thao tác với các file trên bộ nhớ:** 

- **ngoài. Nó còn đảm bảo khả năng chia sẻ và:** an toàn thông tin giữa nhiều người dùng.

- **Hệ điều hành (Operating System – OS):**  Là một chương trình chạy trên máy tính,

- **dùng để điều hành, quản lý các thiết bị:** 

- **phần cứng và các tài nguyên phần mềm:** trên máy tính.

- ** Hệ điều hành đóng vai trò trung gian trong:** 

- **việc giao tiếp giữa người sử dụng và phần:** 

- **cứng máy tính, cung cấp một môi trường:** 

- **cho phép người sử dụng phát triển và thực:** 

- **hiện các ứng dụng của họ một cách dễ:** dàng.

- **Hạt nhân (Kernel):** Tất cả các thao tác liên quan đến tiến trình,

- **thực hiện bởi một phần của hệ điều hành được:** 

- **gọi là hạt nhân. Hạt nhân chỉ là một phần:** 

- **không lớn của hệ điều hành nhưng nó là một:** 

- **trong số những thành phần được sử dụng:** 

- **nhiều nhất trong hệ điều hành, nó thường:** được nạp vào bộ nhớ.

- **Hệ thống nhập/xuất cơ bản (Basic:** 

- **Input/Output System - BIOS):** 

- **BIOS nằm bên trong máy tính cá nhân, trên bo:** 

- **mạch chính. BIOS được xem như là chương:** 

- **trình được chạy đầu tiên khi máy tính khởi:** 

- **động. Chức năng chính của BIOS là chuẩn bị:** 

- **cho máy tính để các chương trình phần mềm:** 

- **được lưu trữ trên các thiết bị lưu trữ (chẳng:** 

- **hạn như ổ cứng, đĩa mềm và đĩa CD) có thể:** 

- **được nạp, thực thi và điều khiển máy tính, quá:** trình này gọi là khởi động.

- **Khối điều khiển tệp (File Control Block:** 

- **– FCB):** 

- **Nằm trên đĩa cứng, chứa thông tin về bảo mật:** file và thông tin lưu trữ file.

- **Khối tính toán số học (Arithmetic Logic:** 

- **Unit - ALU):** 

- **Có chức năng thực hiện các lệnh của đơn vị:** 

- **điều khiển và xử lý tín hiệu. Theo tên gọi, đơn:** 

- **vị này dùng để thực hiện các phép tính số học:** 

- **(+, - ,*,/) hay các phép tính logic (so sánh lớn:** hơn, nhỏ hơn...).

- **Khối quản lý tiến trình (Process Cotrol:** 

- **Block - PCB):** 

- **PCB là nơi hệ điều hành lưu các thông tin về:** 

- **tiến trình. Là một trong những cấu trúc quan:** trọng nhất của hệ điều hành.

- **Kỹ thuật kiểm tra và xác lập (Test and:** 

- **Set):** 

- **Đây là giải pháp phần cứng để thực hiện loại:** 

- **trừ lẫn nhau, để đảm bảo giải quyết vấn đề là:** 

- **có một lệnh phần cứng: lệnh này đọc biến, ghi:** 

- **giá trị của biến vào vùng lưu trữ và đặt giá trị:** 

- **cụ thể cho biến đó. Lệnh này gọi là test and:** 

- **set. Tất cả các thao tác trên được gói gọn:** 

- **trong một lệnh và được thực hiện trọn vẹn:** không bị ngắt.

- **Lập lịch (Scheduling):** 

- **Đó là việc giải quyết vấn đề phân chia, lựa:** 

- **chọn tiến trình thực thi sao cho được hiệu quả:** nhất.

- **LINUX:** 

- **Linux là tên gọi của một hệ điều hành máy:** tính và cũng là tên hạt nhân của hệ điều hành.

- **Nó có lẽ là một ví dụ nổi tiếng nhất về phần:** mềm tự do và việc phát triển mã nguồn mở.

- **Phiên bản Linux đầu tiên do Linus Torvalds:** 

- **viết vào năm 1991, lúc ông còn là một sinh:** 

- **viên của Đại học Helsinki tại Phần Lan. thuật:** 

- **ngữ "Linux" được sử dụng để chỉ Nhân:** 

- **Linux, nhưng tên này được sử dụng một cách:** 

- **rộng rãi để miêu tả tổng thể một hệ điều hành:** 

- **giống Unix (còn được biết đến dưới tên:** 

- **GNU/Linux) được tạo ra bởi việc đóng gói:** 

- **nhân Linux cùng với các thư viện và công cụ:** GNU, cũng như là các bản phân phối Linux.

- **Thực tế thì đó là tập hợp một số lượng lớn các:** 

- **phần mềm như máy chủ web, các ngôn ngữ:** 

- **lập trình, các hệ quản trị cơ sở dữ liệu, các:** 

- **môi trường làm việc desktop:** 

- **như GNOME và KDE, và các ứng dụng thích:** 

- **hợp 	cho 	công 	việc 	văn 	phòng 	như:** OpenOffice.

- **Mô tả file (File Descriptor):** 

- **Là bản ghi đầy đủ các thông tin về file mà hệ:** 

- **điều hành quan tâm, quản lý. File descriptor:** 

- **nằm trên bộ nhớ ngoài và chúng được nạp vào:** 

- **bộ nhớ khi mở file, người dùng không có:** quyền truy cập trực tiếp.

- **NTFS:** Hệ thống tập tin tiêu chuẩn của Windows NT,

- **bao 	gồm cả các phiên 	bản 	sau này của:** Windows như Windows 2000, Windows XP, Windows Server 2003, Windows Server 2008, Windows Vista, và Windows 7.

- **NTFS thay thế hệ thống tập tin FAT vốn là:** 

- **hệ thống tập tin ưa thích cho các hệ điều hành:** 

- **Windows của Microsoft. NTFS có nhiều cải:** 

- **tiến hơn FAT và HPFS (High Performance:** 

- **File System - Hệ thống tập tin hiệu năng cao):** 

- **như hỗ trợ cải tiến cho các siêu dữ liệu và sử:** 

- **dụng các cấu trúc dữ liệu tiên tiến để cải thiện:** 

- **hiệu suất, độ tin cậy, và sử dụng không gian:** 

- **ổ đĩa, cộng thêm phần mở rộng như các danh:** 

- **sách kiểm soát truy cập bảo mật (access:** 

- **control list - ACL) và bản ghi hệ thống tập:** tin.

- **Ngắt (Interupt):** 

- **Là sự kiện làm thay đổi trình tự thực hiện lệnh:** 

- **bình thường của bộ xử lý. Tín hiệu ngắt được:** xử lý bởi phần cứng.

- **Phần mềm tự do:** 

- **Là phần mềm mà tự do dùng chương trình:** 

- **cho bất kỳ mục đích nào, tự do sửa đổi:** chương trình thích hợp với nhu cầu của mình,

- **tự do phân bố các bản sao miễn phí hoặc lệ:** 

- **phí, tự do phân bố các phiên bản đã được sửa:** 

- **đổi của chương trình với mục đích cộng đồng:** 

- **người dùng được phúc lợi của sự nâng cao:** chương trình từ đóng góp của người dùng.

- **Phần mềm mã nguồn mở (Open:** 

- **Source):** 

- **Là phần mềm được phân phối tự do, phải:** 

- **phân phối mã nguồn, người dùng được quyền:** 

- **sửa đổi, nhất quán với mã gốc, không cấm sử:** 

- **dụng với cá nhân hoặc tổ chức, không cấm sử:** 

- **dụng cho lĩnh vực hoặc mục đích, bản quyền:** 

- **được phân phối, áp dụng cho người sử dụng:** 

- **không kèm thêm bản quyền bổ sung, bản:** 

- **quyền không gắn riêng cho một sản phẩm, với:** bản quyền phần mềm khác.

- **Phân mảnh (Fragmentation):** 

- **Phân mảnh xảy ra trong bất kỳ hệ thống nào:** 

- **không phụ thuộc vào tổ chức bộ nhớ. Trong:** các hệ đa nhiệm với các phân đoạn cố định,

- **phân mảng xảy ra do các chương trình ứng:** 

- **dụng không chiếm hết toàn bộ phân đoạn của:** 

- **nó hoặc là do các phân đoạn quá nhỏ để có:** thể nạp các chương trình đang chờ vào.

- **Quyền truy cập:** 

- **Quyền được cho phép truy cập hoặc không:** 

- **được truy cập trên các file nào đó của hệ:** thống.

- **Quản lý bộ nhớ:** 

- **Là công việc của hệ điều hành với sự hỗ trợ:** 

- **của phần cứng nhằm phân phối, sắp xếp các:** tiến trình trong bộ nhớ sao cho hiệu quả.

- **Semaphore:** 

- **Semaphore là biến được bảo vệ, giá trị của nó:** 

- **chỉ có thể đọc, ghi bằng các lệnh đặc biệt P,V:** 

- **và lệnh khởi tạo. Semaphore nhị phân (Binary:** Semaphore) chỉ có thể nhận 2 giá trị là 0 và 1.

- **Semaphore đếm (Counting Semaphore) chỉ có:** thể nhận giá trị tự nhiên.

- **Thời gian trễ (Latency):** 

- **Là thời gian đầu đọc chờ đến đúng sector cần:** đọc, phụ thuộc vào tốc độ quay của đĩa.

- **Thư mục (Directory, Folder)::** 

- **Là một tiện ích của hệ điều hành để người:** dùng tổ chức các file của mình.

- **Tập tin (File):** 

- **File là một chuỗi các dữ liệu được đặt tên, các:** 

- **tác vụ có thể thực thi lên một file là: write và:** read.

- **Thời gian lượng tử (Quantum Time):** 

- **Hệ điều hành thiết lập đồng hồ hệ thống, xác:** 

- **định khoảng thời gian gọi là lượng tử theo đó:** sinh ra các tín hiệu ngắt thời gian.

- **Thông năng (Throughput):** 

- **Số lượng tiến trình hoàn tất trong một đơn vị:** thời gian.

- **Thời gian đáp ứng (Response Time):** 

- **Thời gian từ lúc có yêu cầu của người dùng:** 

- **(user request) đến khi có đáp ứng đầu tiên:** 

- **(lưu ý: đáp ứng đầu tiên, chứ không phải:** output).

- **Thời gian quay vòng (Turnaround Time):** 

- **Thời gian để một tiến trình hoàn tất, kể từ lúc:** 

- **vào hệ thống (Submission) đến lúc kết thúc:** 

- **(Termination).:** 

- **Truyền thông liên tiến trình:** 

- **(Interprocess Comunication - IPC):** 

- **Là cơ chế cung cấp bởi hệ điều hành nhằm:** 

- **giúp các quá trình::**  Giao tiếp với nhau.

- ** Đồng bộ hoạt động mà không cần chia sẻ:** không gian địa chỉ.

- ** IPC có thể được cung cấp bởi message:** passing system.

- **Tiến trình kế tiếp:** 

- **Hai tiến trình được gọi là kế tiếp nếu thời:** 

- **điểm bắt đầu của tiến trình này là sau thời:** điểm kết thúc của tiến trình khác.

- **Tiến trình song song:** 

- **Hai tiến trình được gọi là song song nếu thời:** 

- **điểm bắt đầu của tiến trình này nằm giữa thời:** điểm bắt đầu và kết thúc của tiến trình khác.

- **Tắc nghẽn (Deadlock):** 

- **Hai hay nhiều tiến trình đang chờ đợi vô hạn:** 

- **định một sự kiện không bao giờ xảy ra (ví dụ::** 

- **sự kiện do một trong các tiến trình đang đợi:** tạo ra).

- **Tiến trình (Process):** 

- **Tiến trình là một chương trình đang xử lý, sở:** 

- **hữu một con trỏ lệnh, tập các thanh ghi và các:** biến.

- **Thanh ghi (Register):** 

- **Là một bộ nhớ dung lượng nhỏ và rất nhanh:** 

- **được sử dụng để tăng tốc độ xử lý của các:** 

- **chương trình máy tính bằng cách cung cấp:** các truy cập trực tiếp đến các giá trị cần dùng.

- **Hầu hết, nhưng không phải tất cả, các máy:** 

- **tính hiện đại hoạt động theo nguyên lý chuyển:** 

- **dữ liệu từ bộ nhớ chính vào các thanh ghi, tính:** 

- **toán trên chúng, sau đó chuyển kết quả vào:** bộ nhớ chính.

- **UNIX:** 

- **Là một hệ điều hành máy tính viết vào:** 

- **những năm 1960 và 1970 do một số nhân:** 

- **viên của công ty AT&T Bell Labs bao gồm:** 

- **Ken Thompson, Dennis Ritchie và Douglas:** 

- **McIlroy. Ngày nay hệ điều hành Unix được:** phân ra thành nhiều nhánh khác nhau,

- **nhánh của AT&T, nhánh của một số nhà:** 

- **phân phối thương mại và nhánh của những:** 

- **tổ chức phi lợi nhuận. Nó là một hệ điều:** 

- **hành đa nhiệm (có thể cùng lúc thực hiện:** 

- **nhiều nhiệm vụ) hỗ trợ một cách lý tưởng:** đối với các ứng dụng nhiều người dùng. Unix được viết bằng ngôn ngữ lập trình C,

- **một ngôn ngữ rất mạnh và mềm dẻo. Unix:** 

- **hỗ trợ các ứng dụng mạng và hỗ trợ nhiều:** môi trường lập trình khác nhau.

- **Vùng tương tranh (Critical Section):** 

- **Khi các tiến trình cùng truy cập đến một dữ:** 

- **liệu chung, hay khi chúng thực hiện các:** 

- **thao tác có thể dẫn tới tranh chấp dữ liệu:** 

- **nói chung thì khi đó các tiến trình nằm:** trong vùng tương tranh.

---


---


## 📝 NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM & ĐÁP ÁN CHÍNH THỨC (30 CÂU HỎI)

> **Ngân hàng câu hỏi trích xuất từ các bài kiểm tra trắc nghiệm chính thức của eTNU - Đại học Thái Nguyên.**

### 🎯 Bài luyện tập 1

#### Câu 1: Khẳng định nào sau đây là SAI?

- A. Các máy tính trong họ IBM System/360 tương thích với nhau về kiến trúc.
- B. Ưu điểm vượt trội của System/360 là tính tương thích và cung cấp các bộ mô phỏng cho các hệ thống khác.
- C. Người dùng trên các hệ thống khác có thể chuyển sang sử dụng trên System/360 nhờ bộ mô phỏng.
- D. Các phiên bản khác nhau trong họ IBM System/360 không thể sử dụng chung hệ điều hành.

> **✅ ĐÁP ÁN ĐÚNG:** `Các phiên bản khác nhau trong họ IBM System/360 không thể sử dụng chung hệ điều hành.`
> *Giải thích:* Các máy tính trong họ IBM System 360 tương thích nhau về kiến trúc nên các máy tính trong họ có thể sử dụng chung hệ điều hành. System/360 có ưu điểm vượt trội là tính tương thích và cung cấp các bộ mô phỏng lớn nhất trong lịch sử các hệ thống khác.

---

#### Câu 2: Hệ điều hành đảm nhiệm việc nào trong những việc dưới đây?

- A. Chơi trò chơi điện tử.
- B. Giao tiếp với ổ đĩa cứng, quản lí bộ nhớ trong.
- C. Giải các bài toán trên máy tính.
- D. Soạn thảo văn bản.

> **✅ ĐÁP ÁN ĐÚNG:** `Giao tiếp với ổ đĩa cứng, quản lí bộ nhớ trong.`

---

#### Câu 3: Phần cứng máy tính (Hardware) thông thường bao gồm những gì?

- A. Bộ xử lý trung tâm CPU, bộ nhớ, hệ điều hành.
- B. Thiết bị nhập/ xuất, bộ xử lý trung tâm, hệ thống file.
- C. Thiết bị nhập/ xuất, bộ nhớ, bộ xử lý trung tâm.
- D. Trình biên dịch ứng dụng.

> **✅ ĐÁP ÁN ĐÚNG:** `Thiết bị nhập/ xuất, bộ nhớ, bộ xử lý trung tâm.`

---

#### Câu 4: Chức năng nào sau đây phản ánh bản chất của việc giao tiếp giữa người dùng và máy (thông qua hệ điều hành) trong hệ thống tin học?

- A. Nhập, xuất thông tin.
- B. Lưu trữ thông tin
- C. Xử lí thông tin.
- D. Truyền thông tin.

> **✅ ĐÁP ÁN ĐÚNG:** `Nhập, xuất thông tin.`

---

#### Câu 5: Lịch sử phát triển của hệ điều hành qua:

- A. 3 giai đoạn.
- B. 2 giai đoạn.
- C. 4 giai đoạn.
- D. 5 giai đoạn.

> **✅ ĐÁP ÁN ĐÚNG:** `4 giai đoạn.`

---

#### Câu 6: Hệ điều hành thường được lưu trữ lâu ở đâu?

- A. ROM.
- B. Bộ xử lí trung tâm (CPU).
- C. RAM.
- D. Bộ nhớ ngoài.

> **✅ ĐÁP ÁN ĐÚNG:** `Bộ nhớ ngoài.`

---

#### Câu 7: Hệ điều hành được coi là:

- A. Phần mềm công cụ.
- B. Phần mềm ứng dụng.
- C. Phần mềm tiện ích.
- D. Phần mềm hệ thống.

> **✅ ĐÁP ÁN ĐÚNG:** `Phần mềm hệ thống.`

---

#### Câu 8: Xét các tính chất sau:1. System throughput: càng nhiều processor thì các công việc càng được giải quyết nhanh hơn. 2. Multiprocessor system ít tốn kém hơn multiple single-processor system: vì có thể dùng chung tài nguyên (đĩa,…)3. Độ tin cậy: khi một processor hỏng thì công việc của nó được chia sẻ giữa các processor còn lại4. Tính đơn nhiệm: hệ thống chỉ có thể thực hiện duy nhất một chương trình tại một thời điểmNhững tính chất nào là tính chất của hệ thống song song?

- A. 1,2,3, và 4
- B. 1,2, và 3
- C. 1,2, và 4
- D. 2,3, và 4

> **✅ ĐÁP ÁN ĐÚNG:** `1,2, và 3`

---

#### Câu 9: Khẳng định nào sau đây là đúng?

- A. Hệ điều hành quản lý tài nguyên phần cứng và dữ liệu.
- B. Hệ điều hành không quản lý dữ liệu.
- C. Hệ điều hành không có chức năng quản lý phần cứng.
- D. Hệ điều hành không quản lý phần cứng và dữ liệu.

> **✅ ĐÁP ÁN ĐÚNG:** `Hệ điều hành quản lý tài nguyên phần cứng và dữ liệu.`

---

#### Câu 10: Mục tiêu chính của hệ điều hành là gì?

- A. Dễ dàng sử dụng và điều hành hữu hiệu hệ thống máy tính.
- B. Thực hiện tính toán và trả kết quả cho người dùng.
- C. Dễ dàng sử dụng.
- D. Điều hành hữu hiệu hệ thống máy tính.

> **✅ ĐÁP ÁN ĐÚNG:** `Dễ dàng sử dụng và điều hành hữu hiệu hệ thống máy tính.`

---

#### Câu 11: Trong năm 1960, IBM đã xây dựng mấy phiên bản HĐH cho System/360?

- A. 4
- B. 2
- C. 3
- D. 5

> **✅ ĐÁP ÁN ĐÚNG:** `4`

---

#### Câu 12: Xét các tính chất sau:1.Nhiều công việc được nạp đồng thời vào bộ nhớ chính.2.Thời gian xử lý của CPU được phân chia giữa các công việc.3.Tận dụng được thời gian rảnh, tăng hiệu suất sử dụng CPU (CPU utilization).4.Chỉ cho phép một chương trình ứng dụng được hoạt động trong hệ thống.Đặc điểm của hệ thống đa chương trình có những tính chất nào?

- A. 1,2, và 3
- B. 1 và 4
- C. 1,2,3 và 4
- D. 2,3 và 4

> **✅ ĐÁP ÁN ĐÚNG:** `1,2, và 3`
> *Giải thích:* Đặc điểm:Nhiều công việc được nạp đồng thời vào bộ nhớ chính.Thời gian xử lý của CPU được phân chia giữa các công việc đóTận dụng được thời gian rảnh, tăng hiệu suất sử dụng CPU (CPU utilization).
> *Căn cứ:* Giáo trình Hệ Điều Hành Bài 1, Mục 1.5.

---

#### Câu 13: Đặc điểm nổi bật của máy tính PC là gì?

- A. Rẻ tiền và thân thiện.
- B. Chỉ dùng cho các chuyên gia.
- C. Thân thiện.
- D. Rẻ tiền.

> **✅ ĐÁP ÁN ĐÚNG:** `Rẻ tiền và thân thiện.`

---

#### Câu 14: Hệ điều hành được nạp và hệ thống khi nào?

- A. Khi các chương trình ứng dụng có yêu cầu nạp hệ điều hành.
- B. Sau khi các chương trình ứng dụng được kích hoạt.
- C. Trong khi các chương trình ứng dụng được kích hoạt.
- D. Trước khi các chương trình ứng dụng được kích hoạt.

> **✅ ĐÁP ÁN ĐÚNG:** `Trước khi các chương trình ứng dụng được kích hoạt.`

---

#### Câu 15: Đặc trưng của HĐH đa nhiệm là gì?

- A. Hệ thống điều phối bộ vi xử lý theo kiểm time – sharing.
- B. Hệ thống quản lý tiến trình theo lô.
- C. Hệ thống quản lý nhiều người dùng (multi user).
- D. Hệ thống quản lý làm việc phân tán.

> **✅ ĐÁP ÁN ĐÚNG:** `Hệ thống điều phối bộ vi xử lý theo kiểm time – sharing.`

---

### 🎯 Bài luyện tập 2

#### Câu 16: Tính chất về danh sách các Blocked Process là như thế nào?

- A. Xếp theo thứ tự tiến trình nào bị block trước thì đứng sau.
- B. Không có thứ tự.
- C. Xếp theo thứ tự tiến trình nào bị block trước thì đứng trước.
- D. Xếp theo thứ tự độ ưu tiên.

> **✅ ĐÁP ÁN ĐÚNG:** `Không có thứ tự.`

---

#### Câu 17: Hàng đợi dành cho tiến trình xếp hàng chờ bộ xử lý được gọi là:

- A. waitting queue.
- B. busy –waitting buffer.
- C. ready queue.
- D. over time.

> **✅ ĐÁP ÁN ĐÚNG:** `ready queue.`

---

#### Câu 18: Khi xảy ra ngắt, Hệ Điều Hành làm gì?

- A. Ghi lại trạng thái của tiến trình bị ngắt và chuyển điều khiển cho chương trình xử lý ngắt tương ứng.
- B. Tạo 1 tiến trình mới để thay thế tiến trình đang chạy.
- C. Ghi lại trạng thái của tiến trình bị ngắt.
- D. Hủy tiến trình đang chạy.

> **✅ ĐÁP ÁN ĐÚNG:** `Ghi lại trạng thái của tiến trình bị ngắt và chuyển điều khiển cho chương trình xử lý ngắt tương ứng.`

---

#### Câu 19: Giả sử có tiến trình A đang hoạt động và sinh ra tiến trình mới B. Hỏi A là tiến trình gì?

- A. Parent Process.
- B. Active Process.
- C. Suspended Process.
- D. Child Process.

> **✅ ĐÁP ÁN ĐÚNG:** `Parent Process.`

---

#### Câu 20: Quá trình chuyển trạng thái nào không thể xảy ra đối với quá trình biến đổi trạng thái của tiến trình?

- A. blocked Þ ready.
- B. blocked Þ running.
- C. running Þ ready.
- D. running Þ blocked.

> **✅ ĐÁP ÁN ĐÚNG:** `blocked Þ running.`

---

#### Câu 21: Tiến trình là?

- A. Một chương trình được nạp vào bộ nhớ.
- B. Một chương trình được nạp vào bộ nhớ và đang được CPU thực thi.
- C. Một chương trình lưu trên đĩa.
- D. Chuỗi thao tác vận hành một chương trình.

> **✅ ĐÁP ÁN ĐÚNG:** `Một chương trình được nạp vào bộ nhớ và đang được CPU thực thi.`

---

#### Câu 22: Giả thiết nào không thỏa mãn để áp dụng cho thuật toán Banker?

- A. Người dùng phải báo trước số lượng lớn nhất tài nguyên cần dùng.
- B. Người dùng phải trả lại các tài nguyên được cấp sau khoảng thời gian nào đó.
- C. Số tài nguyên luôn thay đổi.
- D. Số người dùng là không thay đổi.

> **✅ ĐÁP ÁN ĐÚNG:** `Số tài nguyên luôn thay đổi.`
> *Giải thích:* Thuật toán Banker xuất phát từ giả thiết:

---

#### Câu 23: Thành phần nào sau đây KHÔNG thuộc về luồng?

- A. Định danh luồng (Thread ID).
- B. Bộ đếm chương trình.
- C. Hàng đợi Queue.
- D. Tập thanh ghi.

> **✅ ĐÁP ÁN ĐÚNG:** `Hàng đợi Queue.`

---

#### Câu 24: Khi xóa một tiến trình khỏi hệ thống thì?

- A. Hệ điều hành cấp phát các tài nguyên phân chia cho tiến trình.
- B. PCB được giải phóng.
- C. Tiến trình không tiếp tục được thực hiện cho đến khi có một tiến trình khác kích hoạt nó.
- D. Tên của tiến trình được xoá khỏi PCB.

> **✅ ĐÁP ÁN ĐÚNG:** `PCB được giải phóng.`

---

#### Câu 25: Các điều kiện nào sau đây KHÔNG dẫn đến việc xảy ra tắc nghẽn (deadlock)?

- A. Các tiến trình yêu cầu quyền độc quyền sử dụng tài nguyên được cấp phát.
- B. Tiến trình yêu cầu tài nguyên bổ sung.
- C. Tài nguyên không được lấy lại từ tiến trình khi các tài nguyên đó chưa được sử dụng để kết thúc công việc.
- D. Tiến trình thực hiện độc lập với các tiến trình khác.

> **✅ ĐÁP ÁN ĐÚNG:** `Tiến trình thực hiện độc lập với các tiến trình khác.`

---

#### Câu 26: Các giải thuật phát hiện deadlock thường sử dụng mô hình nào?

- A. RAG.
- B. Graph.
- C. ARG.
- D. GRA.

> **✅ ĐÁP ÁN ĐÚNG:** `RAG.`

---

#### Câu 27: Hệ điều hành sẽ thực thi hành động nào khi một tiến trình mới sinh ra?

- A. Xóa tất cả các tiến trình khác trong hệ thống.
- B. Thu hồi bộ nhớ của tất cả các tiến trình khác trong hệ thống.
- C. Tạo ngay khối PCB để quản lý tiến trình.
- D. Tạm ngưng tất các các tiến trình khác trong hệ thống.

> **✅ ĐÁP ÁN ĐÚNG:** `Tạo ngay khối PCB để quản lý tiến trình.`

---

#### Câu 28: Các tiến trình được gọi là tương tranh nếu:

- A. các tiến trình tồn tại ở hai thời điểm khác nhau.
- B. các tiến trình tồn tại đồng thời.
- C. các tiến trình tồn tại liên tục nhau.
- D. kết quả của tiến trình này là điều kiện thực thi của tiến trình kia.

> **✅ ĐÁP ÁN ĐÚNG:** `các tiến trình tồn tại đồng thời.`

---

#### Câu 29: Thời gian xử lý song song song với xử lý tuần tự như thế nào?

- A. Nhỏ hơn nhiều.
- B. Xấp xỉ nhau.
- C. Bằng nhau.
- D. Lớn hơn nhiều.

> **✅ ĐÁP ÁN ĐÚNG:** `Nhỏ hơn nhiều.`

---

#### Câu 30: Đâu KHÔNG phải là thao tác mà hệ thống điều khiển tiến trình có thể thực hiện đối với một tiến trình?

- A. Sửa.
- B. Kích hoạt tiến trình.
- C. Hủy.
- D. Thay đổi độ ưu tiên.

> **✅ ĐÁP ÁN ĐÚNG:** `Sửa.`

---


