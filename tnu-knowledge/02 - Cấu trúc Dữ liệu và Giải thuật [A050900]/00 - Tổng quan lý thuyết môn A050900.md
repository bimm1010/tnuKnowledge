---
title: "Cấu trúc Dữ liệu và Giải thuật"
courseCode: "A050900"
tags:
  - course-overview
  - A050900
---

# 🎓 TỔNG HỢP KIẾN THỨC & NGÂN HÀNG ĐỀ THI: A050900 - CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT
> **Kho tài liệu chuẩn hóa eTNU dành riêng cho Google Gemini NotebookLM.**  
> *Bao gồm toàn bộ giáo trình lý thuyết chi tiết, mô hình, giải thuật, cú pháp và ngân hàng câu hỏi trắc nghiệm chính thức 100%.*

---


# PHẦN 2: MÔN A050900 - CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT

## BÀI 1: GIỚI THIỆU CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT

### 1. Các Khái Niệm Nền Tảng
- **Dữ liệu (Data):** Là sự biểu diễn của các sự vật, hiện tượng hoặc khái niệm trong thế giới thực dưới dạng tín hiệu hoặc ký hiệu số mà máy tính điện tử có thể lưu trữ, tiếp nhận và xử lý được.
- **Cấu trúc Dữ liệu (Data Structure - DS):** Là cách thức tổ chức, bố trí và lưu trữ dữ liệu trong bộ nhớ máy tính sao cho các phép toán thao tác trên dữ liệu đó (tìm kiếm, chèn, xóa, cập nhật, sắp xếp) được thực hiện một cách hiệu quả nhất về mặt thời gian và không gian.
- **Kiểu dữ liệu (Data Type):** Bao gồm một tập hợp các giá trị mà một biến có thể nhận và một tập hợp các phép toán hợp lệ có thể thao tác trên các giá trị đó.
  - *Kiểu dữ liệu nguyên thủy (Primitive Types):* Có sẵn trong ngôn ngữ lập trình (`int`, `float`, `char`, `boolean`).
  - *Kiểu dữ liệu trừu tượng (Abstract Data Type - ADT):* Là mô hình toán học định nghĩa cấu trúc dữ liệu thuần túy ở mức giao diện logic: chỉ quy định **tập giá trị** và **hành vi của các phép toán** mà không phụ thuộc vào chi tiết cài đặt cụ thể bằng ngôn ngữ lập trình nào (Ví dụ: ADT List, ADT Stack, ADT Queue).
- **Mối quan hệ kinh điển của Niklaus Wirth:**
  $$\text{Chương trình (Program)} = \text{Cấu trúc Dữ liệu (Data Structure)} + \text{Giải thuật (Algorithm)}$$

---

### 2. Định Nghĩa & 5 Đặc Trưng Bắt Buộc Của Giải Thuật
- **Định nghĩa Giải thuật (Algorithm):** Là một dãy hữu hạn các chỉ thị rõ ràng, xác định, có thể thực hiện được nhằm chuyển đổi tập dữ liệu đầu vào (Input) thành kết quả mong muốn ở đầu ra (Output).
- **5 đặc trưng cơ bản bắt buộc của mọi giải thuật:**
  1. **Tính xác định (Definiteness):** Mỗi chỉ thị trong giải thuật phải rõ ràng, chính xác, đơn nghĩa, không được gây mơ hồ hay dẫn đến nhiều cách hiểu khác nhau.
  2. **Tính hữu hạn / dừng (Finiteness):** Giải thuật phải dừng lại và cho ra kết quả sau một số hữu hạn các bước thực hiện đối với mọi bộ dữ liệu đầu vào.
  3. **Tính đúng đắn (Correctness):** Giải thuật phải tính toán và trả về kết quả chính xác đúng như mục tiêu đặt ra cho tất cả các trường hợp đầu vào hợp lệ.
  4. **Đầu vào (Input):** Có 0 hoặc nhiều dữ liệu đầu vào được xác định trước từ một tập hợp cụ thể.
  5. **Đầu ra (Output):** Phải có ít nhất một kết quả đầu ra có mối quan hệ xác định với dữ liệu đầu vào.
  6. **Tính khả thi (Feasibility / Effectiveness):** Mọi chỉ thị trong giải thuật phải đủ cơ bản để máy tính hoặc con người có thể thực hiện được trên thực tế với tài nguyên hữu hạn.

---

### 3. Đánh Giá Hiệu Năng Giải Thuật & Ký Hiệu Tiệm Cận
#### 3.1. Độ Phức Tạp Thời Gian & Không Gian
- Không đo thời gian chạy bằng giây thực tế (vì phụ thuộc cấu hình phần cứng CPU, RAM, hệ điều hành và trình biên dịch).
- Đo bằng **số lượng các phép toán cơ bản** (phép gán, so sánh, cộng trừ nhân chia) thực hiện theo kích thước dữ liệu đầu vào $n$ $\rightarrow$ gọi là **Độ phức tạp thời gian $T(n)$**.
- Đo **lượng bộ nhớ bổ sung** cần thiết để lưu trữ các biến tạm thời trong quá trình giải thuật chạy $\rightarrow$ gọi là **Độ phức tạp không gian $S(n)$**.
- **Ba trường hợp đánh giá:**
  - **Trường hợp tốt nhất (Best Case):** Số phép tính ít nhất khi gặp dữ liệu thuận lợi nhất (ít dùng để đánh giá vì thiếu tính tổng quát).
  - **Trường hợp xấu nhất (Worst Case):** Số phép tính tối đa khi gặp dữ liệu bất lợi nhất $\rightarrow$ **Đây là thước đo chuẩn quan trọng nhất** vì đảm bảo giải thuật không bao giờ chạy tệ hơn mức này.
  - **Trường hợp trung bình (Average Case):** Số phép tính trung bình trên phân phối xác suất của tất cả các bộ dữ liệu đầu vào khả dĩ.

#### 3.2. Ký Hiệu Tiệm Cận (Asymptotic Notations)
- **Ký hiệu $O$-lớn (Big-O Notation):** Đánh giá **giới hạn trên tiệm cận** (Chặn trên).
  - $T(n) = O(g(n))$ nếu tồn tại hằng số $c > 0$ và số nguyên $n_0$ sao cho: $T(n) \le c \cdot g(n)$ với mọi $n \ge n_0$.
- **Ký hiệu $\Omega$ (Big-Omega Notation):** Đánh giá **giới hạn dưới tiệm cận** (Chặn dưới).
  - $T(n) = \Omega(g(n))$ nếu tồn tại $c > 0, n_0$ sao cho: $T(n) \ge c \cdot g(n)$ với mọi $n \ge n_0$.
- **Ký hiệu $\Theta$ (Big-Theta Notation):** Đánh giá **tiệm cận chặt** (vừa là chặn trên vừa là chặn dưới).
  - $T(n) = \Theta(g(n))$ khi và chỉ khi $T(n) = O(g(n))$ và $T(n) = \Omega(g(n))$.

#### 3.3. Các Quy Tắc Tính Big-O Cơ Bản
- **Quy tắc bỏ hằng số:** $O(c \cdot f(n)) = O(f(n))$ (Ví dụ: $O(5n^2) = O(n^2)$).
- **Quy tắc cộng:** $O(f(n) + g(n)) = O(\max(f(n), g(n)))$ (Ví dụ: $O(n^2 + 100n + 50) = O(n^2)$).
- **Quy tắc nhân:** Hai vòng lặp lồng nhau có độ phức tạp là tích của chúng: $O(f(n) \times g(n))$.

#### 3.4. Bảng Phân Bậc Độ Phức Tạp Tăng Dần (Từ Nhanh Nhất Đến Chậm Nhất)
$$O(1) < O(\log n) < O(\sqrt{n}) < O(n) < O(n \log n) < O(n^2) < O(n^3) < O(2^n) < O(n!) < O(n^n)$$
- $O(1)$: Hằng số (Truy cập mảng theo chỉ số, Push/Pop Stack).
- $O(\log n)$: Lôgarit (Tìm kiếm nhị phân).
- $O(n)$: Tuyến tính (Tìm kiếm tuần tự, duyệt mảng 1 vòng lặp).
- $O(n \log n)$: Tuyến tính nhân lôgarit (Merge Sort, Heap Sort, Quick Sort trung bình).
- $O(n^2)$: Bậc hai (Bubble Sort, Selection Sort, Insertion Sort, 2 vòng lặp lồng nhau).
- $O(2^n), O(n!)$: Cực kỳ chậm - bùng nổ tổ hợp (Bài toán người bán hàng TSP, liệt kê tập con).

---

### 4. Đệ Quy (Recursion)
- **Định nghĩa:** Một giải thuật hoặc hàm được gọi là đệ quy nếu trong quá trình thực thi, nó có lời gọi đến chính nó (trực tiếp hoặc gián tiếp thông qua một hàm trung gian khác).
- **Hai thành phần bắt buộc của giải thuật đệ quy:**
  1. **Phần neo / Điểm dừng (Base Case):** Trường hợp bài toán có kích thước nhỏ nhất, có thể giải trực tiếp ngay lập tức mà không cần gọi lại đệ quy nữa. Nếu thiếu phần neo hoặc điều kiện neo không bao giờ đạt tới, chương trình sẽ rơi vào **vòng lặp đệ quy vô hạn** và làm tràn bộ nhớ ngăn xếp (**Stack Overflow**).
  2. **Bước đệ quy (Recursive Step):** Lời gọi đệ quy thu nhỏ bài toán về các bài toán con cùng dạng nhưng có kích thước nhỏ hơn, đảm bảo sau mỗi bước sẽ tiến gần về điểm neo.
- **Cơ chế hoạt động:** Mỗi lần hàm đệ quy được gọi, hệ thống sẽ đẩy một bản ghi hoạt động (Stack Frame) chứa tham số, biến cục bộ và địa chỉ trở về vào ngăn xếp hệ thống (**Call Stack**). Khi chạm điểm neo, các Stack Frame lần lượt được lấy ra (Pop) để tính toán ngược trở lại.
- **Phân loại đệ quy:**
  - *Đệ quy tuyến tính:* Trong thân hàm chỉ có duy nhất một lời gọi đệ quy (Ví dụ: tính giai thừa $n!$).
  - *Đệ quy nhị phân:* Trong thân hàm có 2 lời gọi đệ quy (Ví dụ: tính số Fibonacci $F(n) = F(n-1) + F(n-2)$).
  - *Đệ quy đuôi (Tail Recursion):* Lời gọi đệ quy là câu lệnh cuối cùng được thực thi trong hàm. Trình biên dịch hiện đại có thể tự động tối ưu đệ quy đuôi thành vòng lặp thông thường để tiết kiệm bộ nhớ.
  - *Đệ quy tương hỗ:* Hàm A gọi hàm B, hàm B lại gọi lại hàm A.
- **So sánh Đệ quy và Vòng lặp (Iteration):**
  - *Đệ quy:* Mã nguồn sáng sủa, ngắn gọn, tự nhiên với các bài toán có bản chất phân rã (Cây, Tháp Hà Nội, Duyệt đồ thị). Nhược điểm: Chậm hơn và tốn nhiều bộ nhớ RAM do chi phí quản lý Call Stack.
  - *Vòng lặp:* Tốc độ thực thi nhanh hơn, tiết kiệm bộ nhớ, nhưng cài đặt bài toán phức tạp sẽ dài dòng hơn.

---

## BÀI 2: CẤU TRÚC DỮ LIỆU DANH SÁCH (LIST)

### 1. Khái Niệm Danh Sách Tuyến Tính
- Danh sách tuyến tính là một tập hợp hữu hạn gồm $n \ge 0$ phần tử có cùng kiểu dữ liệu, có thứ tự trước sau: $(a_1, a_2, ..., a_n)$.
- Các thao tác cơ bản: Khởi tạo rỗng, duyệt danh sách, tìm kiếm phần tử, chèn phần tử vào vị trí $k$, xóa phần tử tại vị trí $k$, cập nhật giá trị.

### 2. Cài Đặt Danh Sách Bằng Mảng Tuyến Tính (Array List)
- **Nguyên lý:** Các phần tử được lưu trữ liên tục trong các ô nhớ kế tiếp nhau trong bộ nhớ RAM.
- **Công thức tính địa chỉ vật lý:**
  $$\text{Địa chỉ}(A[i]) = \text{Địa chỉ cơ sở (Base Address)} + i \times \text{sizeof}(\text{Phần tử})$$
- **Độ phức tạp thao tác:**
  - *Truy xuất phần tử theo chỉ số $i$:* Thời gian **$O(1)$** (Truy xuất ngẫu nhiên cực nhanh).
  - *Chèn phần tử vào vị trí $k$:* Phải dịch chuyển toàn bộ các phần tử từ vị trí $k$ đến $n-1$ lùi về phía sau 1 vị trí $\rightarrow$ Thời gian xấu nhất là **$O(n)$**.
  - *Xóa phần tử tại vị trí $k$:* Phải dịch chuyển toàn bộ các phần tử từ vị trí $k+1$ đến $n-1$ tiến lên phía trước 1 vị trí $\rightarrow$ Thời gian xấu nhất là **$O(n)$**.

### 3. Cài Đặt Danh Sách Bằng Danh Sách Liên Kết (Linked List)
- **Nguyên lý:** Các phần tử (gọi là **Nút - Node**) được phân bố rải rác ở các vị trí nhớ bất kỳ trong RAM. Mỗi nút gồm 2 thành phần chính:
  1. **Vùng dữ liệu (Data):** Lưu giá trị của phần tử.
  2. **Vùng liên kết (Next Pointer):** Chứa địa chỉ con trỏ trỏ đến nút kế tiếp trong danh sách.
- **Các dạng danh sách liên kết:**
  - **Danh sách liên kết đơn (Singly Linked List):** Mỗi nút chỉ có 1 con trỏ `next` trỏ tới nút sau. Nút đầu gọi là **Head**, con trỏ của nút cuối cùng trỏ tới **NULL**. Duyệt chỉ theo 1 chiều từ đầu đến cuối.
  - **Danh sách liên kết kép (Doubly Linked List):** Mỗi nút có 2 con trỏ: `next` (trỏ tới nút phía sau) và `prev` (trỏ tới nút phía trước). Cho phép duyệt hai chiều linh hoạt cả xuôi lẫn ngược. Nhược điểm: tốn thêm bộ nhớ lưu con trỏ `prev` và thao tác cập nhật con trỏ phức tạp hơn.
  - **Danh sách liên kết vòng (Circular Linked List):** Con trỏ của nút cuối cùng không trỏ vào `NULL` mà trỏ quay ngược trở lại nút đầu (**Head**), tạo thành một chu trình khép kín.

### 4. Bảng So Sánh Chi Tiết: Mảng vs Danh Sách Liên Kết
| Tiêu chí so sánh | Mảng (Array) | Danh sách liên kết (Linked List) |
| :--- | :--- | :--- |
| **Cơ chế cấp phát bộ nhớ** | Bộ nhớ tĩnh hoặc động, các phần tử **bắt buộc phải nằm liên tục** kề nhau. | Bộ nhớ động, các nút nằm **rải rác bất kỳ** trong bộ nhớ heap. |
| **Kích thước** | Cố định lúc khai báo ban đầu; khó co giãn linh hoạt. | Co giãn động vô cùng linh hoạt; thêm bao nhiêu cấp phát bấy nhiêu. |
| **Truy xuất phần tử thứ $i$** | **$O(1)$** (Truy cập trực tiếp ngẫu nhiên qua chỉ số). | **$O(n)$** (Bắt buộc phải duyệt tuần tự từ đầu Head). |
| **Chèn/Xóa tại vị trí đã biết**| **$O(n)$** (Do phải dồn dịch toàn bộ các phần tử phía sau). | **$O(1)$** (Chỉ cần thay đổi liên kết con trỏ, không dồn phần tử). |
| **Chi phí bộ nhớ phụ trợ** | Không tốn thêm bộ nhớ cho liên kết con trỏ. | Tốn thêm bộ nhớ để lưu trữ con trỏ (`next`, `prev`) tại mỗi nút. |

---

## BÀI 3: NGĂN XẾP (STACK)

### 1. Định Nghĩa & Nguyên Lý Hoạt Động
- **Định nghĩa:** Ngăn xếp là một kiểu danh sách tuyến tính đặc biệt mà các thao tác thêm phần tử và loại bỏ phần tử chỉ được phép thực hiện tại **duy nhất một đầu**, gọi là **Đỉnh ngăn xếp (Top)**.
- **Nguyên lý hoạt động:** **LIFO (Last In, First Out - Vào sau, Ra trước)** hoặc **FILO (First In, Last Out)**. Phần tử nào được nạp vào sau cùng sẽ là phần tử đầu tiên được lấy ra khỏi ngăn xếp.

### 2. Các Phép Toán Cốt Lõi Trên Stack
- `Push(x)`: Thêm phần tử $x$ vào đỉnh Stack. (Độ phức tạp $O(1)$).
- `Pop()`: Lấy phần tử ở đỉnh ra khỏi Stack và trả về giá trị của nó. (Độ phức tạp $O(1)$). Báo lỗi **Stack Underflow** nếu lấy từ Stack rỗng.
- `Top()` / `Peek()`: Xem giá trị phần tử ở đỉnh Stack mà không xóa nó. (Độ phức tạp $O(1)$).
- `IsEmpty()`: Kiểm tra Stack có rỗng hay không.
- `IsFull()`: Kiểm tra Stack có đầy hay không (chỉ áp dụng với Stack cài đặt bằng mảng cố định). Báo lỗi **Stack Overflow** nếu Push vào Stack đầy.

### 3. Các Phương Án Cài Đặt Stack
- **Cài đặt bằng mảng:** Dùng một mảng `A[0..MAX-1]` và một biến nguyên `top` ghi nhận chỉ số của phần tử đỉnh. Khởi tạo `top = -1` (rỗng).
  - Khi `Push(x)`: `top = top + 1`; `A[top] = x`.
  - Khi `Pop()`: `x = A[top]`; `top = top - 1`; `return x`.
- **Cài đặt bằng danh sách liên kết đơn:** Đỉnh Stack luôn được chọn là **Nút đầu danh sách (Head)**. Khi `Push` thì chèn vào đầu Head ($O(1)$), khi `Pop` thì xóa nút đầu Head ($O(1)$). Cách này không bao giờ bị giới hạn kích thước tối đa.

### 4. Ứng Dụng Thực Tế Kinh Điển Của Stack
1. **Quản lý lời gọi hàm & Khử đệ quy:** Hệ điều hành dùng Call Stack để lưu trữ địa chỉ trở về và các biến cục bộ khi chuyển quyền điều khiển giữa các hàm.
2. **Kiểm tra tính hợp lệ của cặp dấu ngoặc:** Duyệt chuỗi biểu thức, gặp ngoặc mở `(`, `[`, `{` thì `Push` vào Stack; gặp ngoặc đóng thì `Pop` ra so khớp kiểu. Kết thúc chuỗi nếu Stack rỗng thì biểu thức hợp lệ.
3. **Đảo ngược chuỗi ký tự & Chuyển đổi cơ số:** Đẩy lần lượt phần dư phép chia cơ số vào Stack, sau đó Pop ra sẽ được số chuyển đổi.
4. **Xử lý biểu thức toán học dạng Ba Lan (Polish Notation):**
   - *Biểu thức Trung tố (Infix):* Toán tử nằm giữa 2 toán hạng: `A + B`. (Con người dễ đọc nhưng máy tính khó xử lý vì có ngoặc và độ ưu tiên toán tử).
   - *Biểu thức Hậu tố (Postfix / Reverse Polish Notation):* Toán tử nằm sau 2 toán hạng: `A B +`. (Máy tính xử lý cực nhanh bằng Stack mà không cần dấu ngoặc).
   - *Biểu thức Tiền tố (Prefix):* Toán tử nằm trước 2 toán hạng: `+ A B`.
   - **Thuật toán tính giá trị biểu thức Hậu tố (Postfix Evaluation):**
     - Đọc biểu thức từ trái sang phải:
     - Nếu gặp **Toán hạng (con số)**: `Push` vào Stack.
     - Nếu gặp **Toán tử** ($+, -, *, /$): `Pop` ra hai toán hạng (chú ý: toán hạng lấy ra trước là toán hạng sau, toán hạng lấy ra sau là toán hạng trước), thực hiện phép tính, rồi `Push` kết quả trở lại Stack.
     - Sau khi duyệt hết biểu thức, kết quả cuối cùng nằm ở đỉnh Stack.
5. **Duyệt đồ thị theo chiều sâu (Depth-First Search - DFS) và Thuật toán quay lui (Backtracking).**

---

## BÀI 4: HÀNG ĐỢI (QUEUE)

### 1. Định Nghĩa & Nguyên Lý Hoạt Động
- **Định nghĩa:** Hàng đợi là một cấu trúc dữ liệu tuyến tính trong đó việc bổ sung phần tử chỉ được thực hiện ở **Đuôi (Rear / Back)**, và việc loại bỏ phần tử chỉ được thực hiện ở **Đầu (Front)**.
- **Nguyên lý hoạt động:** **FIFO (First In, First Out - Vào trước, Ra trước)**. Phần tử nào đến trước sẽ được phục vụ và rời khỏi hàng đợi trước.

### 2. Các Phép Toán Cốt Lõi Trên Queue
- `Enqueue(x)`: Thêm phần tử $x$ vào cuối hàng đợi (Rear). ($O(1)$).
- `Dequeue()`: Lấy phần tử ở đầu hàng đợi (Front) ra và trả về giá trị. ($O(1)$).
- `Front()` / `Peek()`: Xem giá trị phần tử ở đầu Front mà không xóa. ($O(1)$).
- `IsEmpty()`, `IsFull()`.

### 3. Vấn Đề Của Mảng Thẳng & Giải Pháp Hàng Đợi Vòng Tròn (Circular Queue)
- **Vấn đề đầy giả tạo trong mảng thẳng:** Khi Enqueue và Dequeue liên tục, con trỏ `Front` và `Rear` cùng tăng dần tiến về phía cuối mảng. Dù các ô nhớ ở đầu mảng đã bị giải phóng và đang để trống, `Rear` đã chạm biên cuối `MAX-1`, mảng vẫn báo đầy không thể Enqueue thêm được.
- **Giải pháp Hàng đợi vòng tròn (Circular Queue):**
  - Xem phần tử cuối mảng kế tiếp với phần tử đầu mảng bằng phép toán **chia lấy dư modulo `% MAX`**:
    - Khi Enqueue: `rear = (rear + 1) % MAX`
    - Khi Dequeue: `front = (front + 1) % MAX`
    - Điều kiện rỗng: `front == rear`
    - Điều kiện đầy: `(rear + 1) % MAX == front` (để dành 1 ô trống để phân biệt trạng thái đầy và rỗng).

### 4. Các Biến Thể Của Queue
- **Hàng đợi hai đầu (Deque - Double Ended Queue):** Cho phép thao tác chèn và xóa ở cả hai đầu Front và Rear.
- **Hàng đợi ưu tiên (Priority Queue):** Mỗi phần tử được gắn một mức độ ưu tiên. Khi lấy ra (Dequeue), phần tử có độ ưu tiên cao nhất luôn được lấy ra trước bất kể nó vào lúc nào (Thường được cài đặt tối ưu bằng cấu trúc Đống - Heap).

### 5. Ứng Dụng Của Queue
- **Điều phối CPU và Lập lịch tiến trình:** Thuật toán Round Robin, FCFS trong Hệ điều hành sử dụng Queue để chứa các tiến trình đang chờ thực thi trong bộ nhớ.
- **Bộ đệm dữ liệu (Buffer I/O):** Bộ đệm in ấn (Spooling), đệm bàn phím, bộ đệm truyền gói tin mạng (Socket packet queue).
- **Duyệt đồ thị theo chiều rộng (Breadth-First Search - BFS).**

---

## BÀI 5: CẤU TRÚC CÂY (TREE)

### 1. Các Khái Niệm Cơ Bản Về Cây
- **Định nghĩa:** Cây là một cấu trúc dữ liệu phi tuyến (Non-linear) bao gồm một tập hợp hữu hạn các nút (Nodes) được kết nối với nhau theo quan hệ phân cấp:
  - Có một nút đặc biệt duy nhất gọi là **Nút gốc (Root)**.
  - Các nút còn lại được chia thành các tập rời nhau $T_1, T_2, ..., T_k$, mỗi tập bản thân nó lại là một cây, gọi là **Cây con (Subtree)** của gốc.
- **Hệ thống thuật ngữ cây:**
  - **Nút lá (Leaf Node):** Nút không có bất kỳ cây con nào (bậc bằng 0).
  - **Nút trong (Internal Node):** Nút có ít nhất một con (khác nút lá).
  - **Nút cha (Parent) & Nút con (Child):** Nếu có nhánh nối từ nút $A$ xuống nút $B$ thì $A$ là cha của $B$, $B$ là con của $A$.
  - **Bậc của một nút (Degree of a node):** Số lượng cây con xuất phát từ nút đó.
  - **Bậc của cây (Degree of a tree):** Bậc lớn nhất của tất cả các nút trong cây.
  - **Mức của một nút (Level):** Nút gốc ở mức 0 (hoặc mức 1 tùy quy ước giáo trình). Con của nút mức $i$ sẽ ở mức $i+1$.
  - **Chiều cao / Độ sâu của cây (Height / Depth):** Mức lớn nhất của các nút lá trong cây.

---

### 2. Cây Nhị Phân (Binary Tree)
- **Định nghĩa:** Cây nhị phân là cây mà trong đó mỗi nút có **tối đa 2 nút con**, được phân biệt rõ ràng thành **Con bên trái (Left Child)** và **Con bên phải (Right Child)**.
- **Các tính chất toán học quan trọng:**
  1. Số nút tối đa ở mức $i$ (với gốc ở mức 0) là: **$2^i$**.
  2. Số nút tối đa của một cây nhị phân có chiều cao $h$ (gốc ở mức 0) là:
     $$N_{\max} = 2^{h+1} - 1$$
  3. Mối quan hệ giữa số nút lá $n_0$ và số nút có đúng 2 con $n_2$:
     $$n_0 = n_2 + 1$$
- **Phân loại cây nhị phân:**
  - **Cây nhị phân đầy đủ (Full / Strictly Binary Tree):** Mọi nút hoặc là nút lá, hoặc có đúng 2 con (không có nút nào chỉ có đúng 1 con).
  - **Cây nhị phân hoàn chỉnh (Complete Binary Tree):** Mọi mức đều được điền đầy đủ nút, ngoại trừ có thể là mức cuối cùng; và tại mức cuối cùng, tất cả các nút phải được điền dồn về phía ngoài cùng bên trái.
  - **Cây nhị phân cân bằng (Balanced Binary Tree):** Tại mỗi nút bất kỳ, chiều cao của cây con trái và cây con phải chênh lệch nhau không quá 1 đơn vị.

---

### 3. Cây Tìm Kiếm Nhị Phân (BST - Binary Search Tree)
- **Định nghĩa & Tính chất:** Cây tìm kiếm nhị phân là cây nhị phân thỏa mãn tính chất sắp thứ tự tại mọi nút $X$:
  $$\text{Mọi khóa trong cây con trái} < \text{Khóa tại } X < \text{Mọi khóa trong cây con phải}$$
- **Các thao tác trên BST:**
  - **Tìm kiếm (Search):** So sánh giá trị cần tìm $K$ với khóa tại nút hiện hành. Nếu bằng thì dừng; nếu $K < Key$ thì rẽ sang cây con trái; nếu $K > Key$ thì rẽ sang cây con phải. Độ phức tạp: Trung bình **$O(\log n)$**, xấu nhất (khi cây bị suy biến thành đường thẳng) là **$O(n)$**.
  - **Chèn (Insert):** Thực hiện tương tự tìm kiếm cho tới khi gặp con trỏ `NULL`, tạo nút mới và móc nối vào vị trí đó.
  - **Xóa nút (Delete) - 3 trường hợp:**
    - *Trường hợp 1 - Nút cần xóa là nút lá:* Xóa trực tiếp và cho con trỏ cha trỏ tới `NULL`.
    - *Trường hợp 2 - Nút cần xóa có đúng 1 con (trái hoặc phải):* Nối trực tiếp nút con duy nhất đó lên thay thế vị trí của nút bị xóa.
    - *Trường hợp 3 - Nút cần xóa có đủ cả 2 con:* Tìm một **Nút thế mạng (Successor)** thay thế, có 2 cách chọn:
      1. Nút cực trái của cây con bên phải (Nút nhỏ nhất trong các nút lớn hơn nó).
      2. Nút cực phải của cây con bên trái (Nút lớn nhất trong các nút nhỏ hơn nó).
      Copy giá trị của nút thế mạng vào nút cần xóa, sau đó xóa nút thế mạng đó đi (nút thế mạng lúc này chỉ rơi vào trường hợp 1 hoặc 2).

---

### 4. Các Phương Pháp Duyệt Cây Nhị Phân (Tree Traversal)
Có 4 phương pháp duyệt cây cơ bản:
1. **Duyệt Tiền thứ tự (Pre-order / NLR):**
   - Bước 1: Thăm nút gốc (**N**).
   - Bước 2: Duyệt đệ quy cây con trái (**L**).
   - Bước 3: Duyệt đệ quy cây con phải (**R**).
   - *Ứng dụng:* Sao chép cấu trúc cây, sinh biểu thức tiền tố (Prefix).
2. **Duyệt Trung thứ tự (In-order / LNR):**
   - Bước 1: Duyệt đệ quy cây con trái (**L**).
   - Bước 2: Thăm nút gốc (**N**).
   - Bước 3: Duyệt đệ quy cây con phải (**R**).
   - **ĐẶC ĐIỂM SỐ 1 BẮT BUỘC NHỚ:** **Khi duyệt LNR trên Cây Tìm Kiếm Nhị Phân (BST), ta luôn luôn thu được dãy khóa được sắp xếp tăng dần!**
3. **Duyệt Hậu thứ tự (Post-order / LRN):**
   - Bước 1: Duyệt đệ quy cây con trái (**L**).
   - Bước 2: Duyệt đệ quy cây con phải (**R**).
   - Bước 3: Thăm nút gốc (**N**).
   - *Ứng dụng:* Giải phóng/xóa toàn bộ bộ nhớ cây, tính chiều cao cây, tính giá trị cây biểu thức (Postfix).
4. **Duyệt theo mức (Level-order / Breadth-first Traversal):**
   - Duyệt lần lượt từ mức 0 đến mức $h$, từ trái qua phải tại mỗi mức. Sử dụng cấu trúc **Hàng đợi (Queue)** để cài đặt.

---

## BÀI 6: THUẬT TOÁN TÌM KIẾM (SEARCHING)

### 1. Bài Toán Tìm Kiếm
Cho một tập hợp gồm $n$ phần tử $A = \{a_0, a_1, ..., a_{n-1}\}$ và một khóa cần tìm $X$. Xác định xem $X$ có xuất hiện trong tập $A$ hay không; nếu có thì trả về vị trí (chỉ số) của nó trong mảng, ngược lại thông báo không tìm thấy.

### 2. Thuật Toán Tìm Kiếm Tuần Tự (Linear Search)
- **Nguyên lý:** Duyệt lần lượt từng phần tử từ đầu mảng đến cuối mảng, so sánh từng phần tử với khóa $X$. Dừng lại ngay khi tìm thấy phần tử bằng $X$ hoặc khi đã duyệt hết mảng.
- **Độ phức tạp:**
  - Tốt nhất: **$O(1)$** (khi phần tử cần tìm nằm ngay vị trí đầu tiên $A[0]$).
  - Xấu nhất: **$O(n)$** (khi phần tử nằm ở cuối cùng hoặc không tồn tại trong mảng).
  - Trung bình: **$O(n)$** (trung bình thực hiện $(n+1)/2$ phép so sánh).
- **Ưu điểm:** Cực kỳ đơn giản, áp dụng được cho mọi tập dữ liệu (dù đã có thứ tự hay chưa có thứ tự), hoạt động tốt trên cả Mảng và Danh sách liên kết.
- **Kỹ thuật Lính canh (Sentinel):** Gán $A[n] = X$. Khi duyệt không cần kiểm tra điều kiện chạm biên `i < n`, giảm được một phép so sánh trong mỗi vòng lặp.

### 3. Thuật Toán Tìm Kiếm Nhị Phân (Binary Search)
- **ĐIỀU KIỆN TIÊN QUYẾT BẮT BUỘC:** **Dãy phần tử bắt buộc phải được sắp xếp theo một thứ tự xác định (tăng dần hoặc giảm dần) và cho phép truy xuất ngẫu nhiên (Mảng).**
- **Nguyên lý (Chia để trị):**
  - Khởi tạo đoạn tìm kiếm: `left = 0`, `right = n - 1`.
  - Tính vị trí giữa: `mid = (left + right) / 2`.
  - So sánh $X$ với $A[mid]$:
    - Nếu $X == A[mid]$: Tìm thấy tại vị trí `mid`.
    - Nếu $X < A[mid]$: Thu hẹp phạm vi sang nửa bên trái bằng cách gán `right = mid - 1`.
    - Nếu $X > A[mid]$: Thu hẹp phạm vi sang nửa bên phải bằng cách gán `left = mid + 1`.
  - Lặp lại cho đến khi `left > right` thì kết luận không tìm thấy.
- **Độ phức tạp:**
  - Tốt nhất: **$O(1)$** (khi phần tử ở ngay chính giữa mảng).
  - Xấu nhất & Trung bình: **$O(\log_2 n)$**. (Mỗi bước giảm một nửa không gian tìm kiếm. Với $n = 1,000,000$ phần tử, chỉ mất tối đa khoảng 20 phép so sánh!).

---

### 4. Bảng Băm (Hash Table)
- **Khái niệm:** Bảng băm là cấu trúc dữ liệu cho phép tìm kiếm, chèn, xóa với thời gian trung bình lý tưởng đạt **$O(1)$**.
- **Hàm băm (Hash Function):** Chuyển đổi một khóa bất kỳ $K$ thành một chỉ số nguyên $h(K)$ trong bảng băm kích thước $M$ (Ví dụ: hàm băm phép chia $h(K) = K \pmod M$).
- **Hiện tượng đụng độ / xung đột (Collision):** Xảy ra khi hai khóa khác nhau $K_1 \neq K_2$ nhưng hàm băm lại cho ra cùng một chỉ số $h(K_1) = h(K_2)$.
- **Các phương pháp giải quyết đụng độ:**
  1. **Phương pháp nối kết trực tiếp (Chaining / Separate Chaining):** Mỗi ô trong bảng băm là một danh sách liên kết lưu trữ tất cả các phần tử có cùng giá trị băm.
  2. **Phương pháp địa chỉ mở (Open Addressing):** Tất cả các phần tử đều được lưu trực tiếp trong bảng băm. Khi xảy ra xung đột, thuật toán sẽ dò tìm ô trống tiếp theo theo các quy luật:
     - *Dò tuyến tính (Linear Probing):* Thử lần lượt các ô kế tiếp: $(h(K) + i) \pmod M$. (Dễ bị hiện tượng gom cụm sơ cấp - Primary Clustering).
     - *Dò bậc hai (Quadratic Probing):* Thử các ô cách nhau theo hàm bậc hai: $(h(K) + c_1 i + c_2 i^2) \pmod M$.
     - *Băm kép (Double Hashing):* Dùng một hàm băm thứ hai để tính bước nhảy: $(h_1(K) + i \cdot h_2(K)) \pmod M$.

---

## BÀI 7: THUẬT TOÁN SẮP XẾP (SORTING)

### 1. Khái Niệm & Tính Ổn Định Của Thuật Toán Sắp Xếp
- **Bài toán sắp xếp:** Biến đổi thứ tự các phần tử trong danh sách sao cho các khóa của chúng thỏa mãn một trật tự xác định (thường là tăng dần: $K_0 \le K_1 \le ... \le K_{n-1}$).
- **Tính ổn định (Stability):** Một thuật toán sắp xếp được gọi là **ổn định (Stable)** nếu nó **bảo toàn vị trí tương đối ban đầu** giữa các phần tử có cùng giá trị khóa. (Ví dụ: danh sách học sinh đã xếp theo tên, sắp xếp lại theo điểm số mà hai học sinh cùng điểm vẫn giữ nguyên thứ tự tên ban đầu).

---

### 2. Các Thuật Toán Sắp Xếp Cơ Bản ($O(n^2)$)
1. **Sắp xếp đổi chỗ trực tiếp (Interchange Sort):**
   - So sánh từng cặp $A[i]$ và $A[j]$ ($i$ chạy từ $0$ đến $n-2$, $j$ chạy từ $i+1$ đến $n-1$), nếu $A[i] > A[j]$ thì đổi chỗ ngay lập tức.
   - Độ phức tạp: Luôn là **$O(n^2)$**.
2. **Sắp xếp chọn trực tiếp (Selection Sort):**
   - Tại mỗi bước thứ $i$, tìm phần tử có giá trị nhỏ nhất trong đoạn còn lại từ $i$ đến $n-1$, sau đó hoán đổi nó với phần tử tại vị trí $i$.
   - **Đặc điểm cần nhớ:** Số phép so sánh luôn luôn là $n(n-1)/2$, **không phụ thuộc vào tình trạng ban đầu của dãy**. Do đó trong mọi trường hợp (tốt nhất, xấu nhất, trung bình) đều có độ phức tạp **$O(n^2)$**. Không ổn định (Unstable).
3. **Sắp xếp chèn trực tiếp (Insertion Sort):**
   - Giả sử đoạn $A[0..i-1]$ đã có thứ tự. Duyệt phần tử $A[i]$, tìm vị trí thích hợp của $A[i]$ trong đoạn trước đó và dồn các phần tử lớn hơn lùi về sau để chèn $A[i]$ vào.
   - Độ phức tạp:
     - Tốt nhất: **$O(n)$** (khi mảng đã được sắp xếp sẵn, chỉ tốn $n-1$ phép so sánh và không cần dời chỗ).
     - Xấu nhất & Trung bình: **$O(n^2)$** (khi mảng có thứ tự ngược).
   - Rất hiệu quả đối với các mảng có kích thước nhỏ hoặc dữ liệu gần như đã được sắp xếp. Ổn định (Stable).
4. **Sắp xếp nổi bọt (Bubble Sort):**
   - Duyệt từ cuối mảng lên đầu (hoặc từ đầu xuống cuối), so sánh hai phần tử đứng cạnh nhau $A[j]$ và $A[j-1]$. Nếu sai thứ tự thì đổi chỗ chúng. Sau mỗi lượt, phần tử nhẹ nhất (nhỏ nhất) sẽ nổi dần lên đầu mảng như bọt khí.
   - Độ phức tạp: Tốt nhất $O(n)$ (nếu dùng cờ kiểm tra không có phép hoán đổi nào), Xấu nhất $O(n^2)$. Ổn định (Stable).

---

### 3. Các Thuật Toán Sắp Xếp Nâng Cao Theo Kiểu Chia Để Trị
#### 3.1. Sắp Xếp Nhanh (Quick Sort - Hoare, 1960)
- **Nguyên lý:**
  1. **Chọn chốt (Pivot):** Chọn một phần tử bất kỳ trong đoạn làm chốt (thường chọn phần tử đầu, cuối hoặc ở giữa).
  2. **Phân hoạch (Partition):** Sắp xếp lại đoạn sao cho tất cả các phần tử nhỏ hơn chốt nằm ở nửa bên trái chốt, và tất cả các phần tử lớn hơn chốt nằm ở nửa bên phải chốt.
  3. **Đệ quy:** Gọi đệ quy Quick Sort để sắp xếp độc lập hai nửa trái và phải.
- **Độ phức tạp:**
  - Trung bình: **$O(n \log n)$** (Thực tế là thuật toán sắp xếp nhanh nhất trong họ so sánh).
  - Tốt nhất: **$O(n \log n)$** (Khi chốt luôn chia đôi mảng thành 2 nửa bằng nhau).
  - Xấu nhất: **$O(n^2)$** (Xảy ra khi mảng đã có thứ tự sẵn và chốt luôn rơi trúng phần tử cực trị lớn nhất hoặc nhỏ nhất). Không ổn định (Unstable).

#### 3.2. Sắp Xếp Trộn (Merge Sort)
- **Nguyên lý:**
  1. **Chia:** Chia mảng thành hai nửa bằng nhau tại vị trí giữa `mid`.
  2. **Trị:** Gọi đệ quy Merge Sort sắp xếp riêng từng nửa cho đến khi mảng chỉ còn 1 phần tử.
  3. **Trộn (Merge):** Trộn hai mảng con đã có thứ tự thành một mảng lớn hoàn chỉnh bằng cách so sánh từng cặp phần tử đầu của hai mảng con.
- **Độ phức tạp:**
  - Luôn luôn là **$O(n \log n)$** trong **TẤT CẢ các trường hợp (Tốt nhất, Xấu nhất, Trung bình)**.
  - **Nhược điểm:** Cần thêm bộ nhớ phụ trợ **$O(n)$** để lưu mảng trung gian khi trộn. Ổn định (Stable).

#### 3.3. Sắp Xếp Vun Đống (Heap Sort)
- **Cấu trúc Đống (Heap):** Là một cây nhị phân hoàn chỉnh được lưu trữ dưới dạng mảng tuyến tính thỏa mãn tính chất đống:
  - **Max-Heap:** Giá trị của nút cha luôn lớn hơn hoặc bằng các nút con của nó: $A[parent] \ge A[child]$. Nút gốc $A[0]$ luôn chứa giá trị lớn nhất toàn đống.
  - Vị trí nút trong mảng (với gốc chỉ số 0): Nút $i$ có con trái là $2i+1$, con phải là $2i+2$, nút cha là $\lfloor(i-1)/2\rfloor$.
- **Quy trình giải thuật Heap Sort:**
  1. Xây dựng Max-Heap từ mảng ban đầu (Độ phức tạp $O(n)$).
  2. Lặp $n-1$ lần:
     - Hoán đổi phần tử lớn nhất ở gốc $A[0]$ với phần tử cuối cùng của đống hiện thời $A[size-1]$.
     - Giảm kích thước đống đi 1.
     - Vun lại đống (**Heapify**) từ gốc xuống để khôi phục tính chất Max-Heap (Thời gian mỗi lần vun đống là $O(\log n)$).
- **Độ phức tạp:**
  - Luôn là **$O(n \log n)$** trong mọi trường hợp.
  - **Ưu điểm vượt trội so với Merge Sort:** Không cần bộ nhớ phụ trợ ngoài (**$O(1)$ Extra Space**). Không ổn định (Unstable).

---

### 4. Bảng Tổng Hợp So Sánh Toàn Bộ Các Thuật Toán Sắp Xếp
| Thuật toán | Độ phức tạp Tốt nhất | Độ phức tạp Trung bình | Độ phức tạp Xấu nhất | Bộ nhớ phụ (Space) | Tính ổn định (Stable) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Selection Sort** | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Không (Unstable) |
| **Insertion Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | **Có (Stable)** |
| **Bubble Sort** | $O(n)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | **Có (Stable)** |
| **Interchange Sort** | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | $O(1)$ | Không (Unstable) |
| **Quick Sort** | $O(n \log n)$ | **$O(n \log n)$** | $O(n^2)$ | $O(\log n)$ | Không (Unstable) |
| **Merge Sort** | **$O(n \log n)$** | **$O(n \log n)$** | **$O(n \log n)$** | $O(n)$ | **Có (Stable)** |
| **Heap Sort** | **$O(n \log n)$** | **$O(n \log n)$** | **$O(n \log n)$** | **$O(1)$** | Không (Unstable) |

---

## TỪ ĐIỂN THUẬT NGỮ CHUYÊN NGÀNH CS101 (VIỆT - ANH)

- **Array (Mảng):** Cấu trúc dữ liệu kiểu mảng.

- **Bậc:** 

- **Số các cây con của một đỉnh gọi là bậc của:** đỉnh đó.

- **Biểu thức số học:** 

- **Biểu thức số học là một dãy các toán hạng:** 

- **(hằng, biến hoặc hàm) nối với nhau bởi các:** 

- **phép toán số học. Trong các biểu thức số học:** 

- **có thể chứa các dấu ngoặc tròn để chỉ ra thứ:** tự, trong đó các phép toán cần thực hiện.

- **Boolean:** Kiểu dữ liệu logic.

- **Cập nhật (sửa đổi) giá trị cho một phần tử:** 

- **trong danh sách:** 

- **Thao tác này nhằm thay đổi nội dung của một:** 

- **phân tử trong danh sách. Tương tự như thao:** tác loại bỏ, trước khi thay đổi chúng ta phải

- **thực hiện thao tác tìm kiếm phần tử cần được:** thay đổi.

- **Câu lệnh điều kiện NẾU THÌ (IF THEN:** 

- **ELSE):** 

- **Câu lệnh điều kiện được sử dụng để quản lý:** logic của thuật toán. Cụ thể, với cấu câu lệnh

- **điều kiện, một lệnh hoặc đoạn lệnh chỉ được:** 

- **thực hiện trong trường hợp một hoặc nhiều:** 

- **điều kiện được thỏa mãn. Trong trường hợp:** 

- **ngược lại, một lệnh/đoạn lệnh thay thế sẽ:** được thực hiện.

- **Câu lệnh gán:** 

- **Câu lệnh gán dùng để gán giá trị cho một:** 

- **biến. Giá trị có thể là một hằng số hoặc một:** biểu thức có cùng kiểu giá trị với biến.

- **Câu lệnh hiển thị (Display):** 

- **Câu lệnh hiển thị được dùng để hiển thị (đưa:** 

- **ra màn hình, ghi vào file ...) một xâu ký tự:** hằng số, hoặc để hiển thị giá trị của một biến.

- **Câu lệnh vòng lặp không xác định:** Khi số lần lặp chưa được biết trước, chúng ta

- **không thể sử dụng câu lệnh vòng lặp xác:** 

- **định. Khi đó, câu lệnh vòng lặp không xác:** định sẽ được sử dụng.

- **Câu lệnh vòng lặp xác định (For):** 

- **Câu lệnh lặp xác định được dùng để thực hiện:** lặp lại một đoạn lệnh với số lần lặp xác định

- **trước. Câu lệnh lặp xác định thường sử dụng:** 

- **một biến chạy để kiểm soát số lần lặp. Biến:** chạy này thường thuộc kiểu số nguyên.

- **Cây (Tree):** 

- **Cây là một cấu trúc dữ liệu trừu tượng gồm:** 

- **một tập hữu hạn các phần tử gọi là nút (hay:** 

- **đỉnh). Giữa các nút có một quan hệ phân cấp:** 

- **gọi là quan hệ “cha – con” và một tập hợp:** hữu hạn những cạnh nối các cặp nút với nhau.

- **Nếu cây không rỗng, có một nút gọi là nút:** 

- **gốc (root).:** 

- **Cây biểu thức:** 

- **Cây biểu thức là cây nhị phân gắn nhãn, biểu:** 

- **diễn cấu trúc của một biểu thức (số học hoặc:** logic).

- **Cây con:** 

- **Từ định nghĩa cây ta có, mỗi đỉnh a bất kỳ:** 

- **của cây T là gốc của một cây nào đó, ta gọi:** 

- **cây này là cây con của cây T. Nó gồm đỉnh a:** 

- **và tất cả các đỉnh là hậu thế của a. Chẳng:** hạn, với cây T trong hình 5.1, T1 = {c, f, g, h, k} là một cây con.

- **Cây được sắp xếp:** 

- **Trong một cây, nếu các cây con của mỗi đỉnh:** 

- **được sắp xếp theo một thứ tự nhất định, thì:** cây được gọi là cây được sắp xếp.

- **Cây gắn nhãn:** 

- **Cây gắn nhãn là cây mà mỗi đỉnh của nó:** 

- **được gắn với một giá trị (nhãn) nào đó. Nói:** 

- **một cách khác, cây gắn nhãn là một cây cùng:** 

- **với một ánh xạ từ tập hợp các đỉnh của cây:** 

- **vào tập hợp nào đó các giá trị (các nhãn).:** 

- **Cây nhị phân:** 

- **Cây nhị phân là một cây, trong đó mỗi nút có:** nhiều nhất hai con.

- **Cây nhị phân đầy đủ (Full binary tree):** 

- **Nếu chiều cao của cây là h thì mọi nút có:** mức <= h – 1 đều có đúng 2 nút con.

- **Cây nhị phân hoàn chỉnh (Complete binary:** 

- **tree):** 

- **Nếu chiều cao của cây là h thì mọi nút có:** 

- **mức < h – 1 đều có đúng 2 nút con:** 

- **Cây nhị phân tìm kiếm:** 

- **Cây tìm kiếm nhị phân là cây nhị phân hoặc:** trống, hoặc thoả mãn các điều kiện sau.

- **– Khoá của các đỉnh thuộc cây con trái nhỏ:** hơn khoá của gốc.

- **– Khoá của gốc nhỏ hơn khoá của các đỉnh:** thuộc cây con phải của gốc.

- **– Cây con trái và cây con phải của gốc cũng:** là cây tìm kiếm nhị phân.

- **Cây tổng quát:** 

- **Cấu trúc cây, trong đó mỗi nút có nhiều hơn:** hai cây con gọi là cây tổng quát.

- **Cây trò chơi:** 

- **Để thuận lợi cho việc nghiên cứu các chiến:** lược chọn nước đi cho trò chơi, chúng ta biểu

- **diễn không gian trạng thái trên dưới dạng:** cây, gọi là cây trò chơi.

- **Char:** Kiểu dữ liệu ký tự.

- **Chiều dài đường đi:** Một dãy các đỉnh a1 , a2 ,... an , sao cho ai (i = 1, 2,..., n – 1) là cha của ai + 1 được gọi là đường đi từ a1 đến an . Chiều dài đường đi này là số cành trên nó đó là n – 1. Ta có nhận xét rằng,

- **luôn luôn tồn tại một đường đi duy nhất từ:** gốc tới một đỉnh bất kỳ trong cây. Mỗi nút có đường đi chiều dài bằng 0 đến chính nó.

- **Clearstack (Xóa ngăn xếp):** Chức năng: xóa tất cả các nút ở trong stack. Dữ liệu nhập: không. Dữ liệu xuất: stack top về vị trí khởi đầu.

- **Copystack (Sao chép ngăn xếp):** Chức năng: sao chép stack sang stack mới. Dữ liệu nhập: stack nguồn. Dữ liệu xuất: stack đích giống stack nguồn.

- **Danh sách:** 

- **Danh sách là một cấu trúc dữ liệu gồm một:** 

- **tập hữu hạn các phần tử có kiểu dữ liệu xác:** 

- **định và giữa các phần tử có mối liên hệ với:** nhau.

- **Danh sách liên kết:** Danh sách liên kết là tập hợp các phần tử gọi

- **là nút (node). Mỗi nút chứa dữ liệu về phần:** tử của danh sách và con trỏ chỉ vị trí của nút chứa phần tử khác trong danh sách. Con trỏ là địa chỉ trong bộ nhớ về nút tiếp theo của danh

- **sách. Do vậy, các nút trong danh sách không:** 

- **cần phải lưu trữ liên tiếp nhau trong bộ nhớ:** 

- **và kích thức của danh sách có thể mở rộng:** 

- **tùy ý (chỉ giới hạn về dung lượng bộ nhớ).:** 

- **Danh sách liên kết đơn:** 

- **Danh sách liên kết đơn là danh sách liên kết:** 

- **bao gồm các nút được nối với nhau theo một:** chiều.

- **Danh sách liên kết đôi/kép:** 

- **Danh sách liên kết kép là danh sách liên kết:** 

- **mà mỗi nút trong danh sách ngoài thành phần:** dữ liệu còn có hai con trỏ; một trỏ tới nút kế tiếp; một trở đến nút liền trước nó.

- **Danh sách liên kết vòng đơn:** Trong danh sách liên kết đơn, trường liên kết

- **của nút cuối cùng được gán một giá trị đặc:** biệt. Nếu ta cho trường liên kết của nút cuối cùng trỏ thẳng về nút đầu tiên của danh sách, khi đó ta sẽ được một kiểu danh sách liên kết mới gọi là danh sách liên kết vòng đơn.

- **Danh sách liên kết vòng kép:** Danh sách liên kết vòng kép là danh sách liên

- **liên kết kép trong trường hợp con trỏ Prev:** 

- **của nút đầu tiên trong danh sách trỏ thẳng:** 

- **đến nút cuối cùng trong danh sách và con trỏ:** 

- **Link của nút cuối cùng trong danh sách đó:** chỉ thẳng đến nút đầu tiên của danh sách.

- **Duyệt các nút trên cây nhị phân:** Phép duyệt cây là phép duyệt các nút trên cây

- **một cách hệ thống sao cho mỗi nút chỉ được:** thăm một lần. Trong thao tác này, chúng ta tìm cách duyệt qua tất cả các nút trên cây nhị phân để thực hiện một thao tác xử lý nào đó đối với

- **nút (như xem nội dung thành phần dữ liệu).:** 

- **Đ:** 

- **Đệ quy (Recurrence):** 

- **Recurrence trong tiếng Anh có nghĩa là gọi:** lại. Bản chất của việc thiết kế giải thuật theo phương pháp đệ quy là việc gọi lại chính giải thuật đó trong quá trình thiết kế giải thuật. Các giải thuật được thiết kế theo phương pháp đệ quy được gọi chung là giải thuật đệ quy.

- **Độ cao, mức:** 

- **Trong một cây, độ cao của một đỉnh a là độ:** dài của đường đi dài nhất từ a đến một lá. Độ

- **cao của gốc được gọi là độ cao của cây. Mức:** 

- **(độ sâu) của đỉnh a là độ dài của đường đi từ:** gốc đến a. Như vậy, gốc có mức 0.

- **Empty:** Chức năng kiểm tra stack có bị rỗng không. Dữ liệu nhập: Không.

- **Dữ liệu xuất: True or False (True: khi stack:** rỗng, False: stack không bị rỗng).

- **Hàng đợi:** 

- **Kiểu dữ liệu hàng đợi là kiểu dữ liệu, trong:** 

- **đó phần tử được đưa vào trước sẽ được loại:** 

- **bỏ trước. Kiểu dữ liệu hàng đợi còn được gọi:** 

- **là kiểu dữ liệu FIFO (First – In, First – Out),:** có nghĩa là vào trước ra trước.

- **Hủy danh sách:** 

- **Thao tác này thực hiện việc xóa bỏ toàn bộ:** 

- **nội dung của một danh sách để thành một:** danh sách rỗng.

- **Hủy một nút trên cây nhị phân:** Việc hủy một nút trong cây có thể làm cho cây thành rừng. Vì vậy, khi tiến hành hủy một nút

- **nếu nút đó là lá thì không có điều gì xẩy ra:** 

- **song nếu hủy một nút không phải là lá thì:** chúng ta phải tìm cách chuyển các nút gốc cây con của nút cần hủy thành các nút gốc cây con của các nút khác rồi mới tiến hành hủy nút này.

- **Initialize (Khởi động) Chức:** 

- **năng: Khởi động stack. Dữ:** liệu nhập: Không. Dữ liệu xuất: stack top về vị trí khởi đầu.

- **Interger:** Kiểu dữ liệu số nguyên.

- **Khởi tạo cây nhị phân:** 

- **Việc khởi tạo cây nhị phân chỉ đơn giản là:** cho con trỏ quản lí địa chỉ nút gốc về con trỏ NULL.

- **Ký pháp trung tố (Infix):** 

- **Chẳng hạn, xét biểu thức::** 

- **5 + 8 / (3 + 1) * 3:** Giá trị của biểu thức này được tính như sau :

- **5 + 8/(3 + 1) * 3 = 5 + 8/4 * 3:** 

- **= 5 + 2 * 3 = 5 + 6 = 11:** 

- **Trong đa số các ngôn ngữ lập trình, các biểu:** 

- **thức được biểu diễn như trên gọi là kí pháp:** 

- **trung tố (Infix).:** 

- **Lá:** 

- **Các đỉnh có bậc bằng không được gọi là lá:** của cây.

- **Loại bỏ bớt một phần tử ra khỏi danh:** 

- **sách:** 

- **Thao tác này sẽ loại bớt một phần tử ra khỏi:** danh sách. Do vậy, nếu việc loại bỏ này thành công thì chiều dài của danh sách sẽ bị giảm đi 1.

- **Ngăn xếp:** 

- **Ngăn xếp (còn gọi là bộ xếp chồng, tiếng:** Anh: stack) là một cấu trúc dữ liệu trừu tượng

- **hoạt động theo nguyên lý "vào sau ra trước":** 

- **(Last In, First Out: LIFO).:** 

- **Nhập 	nhiều 	danh 	sách 	thành 	một:** 

- **danh sách:** 

- **Thao tác này tiến hành nhập nhiều danh sách:** 

- **con thành một danh sách có chiều dài bằng:** tổng chiều dài các danh sách con.

- **Phương pháp quay lui:** 

- **Vấn đề khi cần giải quyết thường được chia:** nhỏ thành nhiều tầng theo hướng đệ quy.

- **Việc tìm lời giải cho tầng dưới sẽ được thực:** 

- **hiện bằng một lời gọi đệ quy. Nếu không tìm:** 

- **được lời giải cho tầng dưới thì quay lui lên:** tầng trên để thử lời giải tiếp theo. Vì vậy,

- **phương pháp này được gọi là phương pháp:** quay lui.

- **Pointer (Con trỏ):** 

- **Con trỏ là địa chỉ ấn định trong bộ nhớ, để:** 

- **đánh dấu vị trí cất gửi dữ liệu của một đối:** tượng. Kiểu dữ liệu con trỏ.

- **Pop:** Chức năng: xóa nút tại đỉnh stack. Dữ liệu nhập: Không. Điều kiện: stack không bị rỗng. Dữ liệu xuất: nút bị xóa.

- **Push:** Chức năng: thêm nút mới tại đỉnh stack. Dữ liệu nhập: nút mới. Dữ liệu xuất: không.

- **Real:** Kiểu dữ liệu số thực.

- **Record:** 

- **Cấu trúc dữ liệu bản ghi. Có trường hợp gọi:** 

- **là mẩu tin:** 

- **Rừng:** 

- **Một rừng F là một danh sách các cây::** 

- **F = (T 1 , T2 , ..., Tn ):** 

- **trong đó Ti (i = 1, ..., n) là cây (cây được sắp).:** 

- **Sao chép một danh sách:** 

- **Thao tác này thực hiện việc sao chép toàn:** 

- **bộ nội dung từ một danh sách này sang một:** danh sách khác sao cho sau khi sao chép ta có

- **các danh sách giống hệt nhau về nội dung và:** cấu trúc.

- **Sắp xếp:** 

- **Sắp xếp là quá trình xử lý một danh sách:** 

- **các phần tử (hoặc các mẫu tin) để đặt chúng:** 

- **theo một thứ tự thỏa mãn tiêu chuẩn nào đó:** 

- **dựa trên nội dung thông tin lưu giữ tại mỗi:** phần tử.

- **Sắp xếp thứ tự các phần tử trong:** 

- **danh sách:** 

- **Trong thao tác này chúng ta sẽ vận dụng các:** 

- **thuật toán sắp xếp để sắp các phần tử trong:** danh sách theo một trật tự nào đó.

- **Stacksize (Kích thước ngăn xếp):** Chức năng: xác định số nút hiện có trong stack. Dữ liệu: Không. Dữ liệu xuất: số nút hiện có trong stack.

- **Stacktop (Đỉnh ngăn xếp):** Chức năng: truy xuất nút tại đỉnh stack. Dữ liệu nhập: Không. Điều kiện: stack không bị rỗng. Dữ liệu xuất: nút tại đỉnh stack.

- **Tách 	một 	danh 	sách 	thành 	nhiều:** 

- **danh sách:** 

- **Thao tác này thực hiện việc chia một danh:** 

- **sách thành nhiều danh sách con theo một qui:** định nào đó. Kết quả: sau khi tách, tổng chiều

- **dài trong các danh sách con phải bằng chiều:** dài của danh sách ban đầu cộng lại.

- **Tạo mới một danh sách:** 

- **Chúng ta sẽ đưa vào danh sách nội dung của:** các phần tử, để thiết lập một danh sách mới.

- **Tạo một nút mới:** 

- **Việc cài đặt thủ tục này tương tự như cài:** 

- **đặt thủ tục tạo một nút mới cho danh sách:** liên kết.

- **Thao tác lấy ra khỏi hàng đợi (Dequeue):** 

- **Phần tử được lấy ra là phần tử đầu tiên của:** 

- **hàng đợi, hay chính là phần tử được trỏ bởi:** 

- **con trỏ H. Như vậy, phần tử đầu tiên của:** 

- **hàng đợi bây giờ chính là phần tử đứng:** 

- **ngay sau phần tử được trỏ bởi con trỏ H, hay:** 

- **chính là phần tử được qui định bởi trường:** tiep_theo.

- **Thao tác xếp vào hàng đợi (Enqueue) Một:** 

- **phần tử mới được xếp vào hàng đợi sẽ nằm ở:** 

- **cuối hàng đợi, hay nằm ở cuối danh sách:** 

- **q.noi_dung. Vì vậy việc đưa một phần:** 

- **tử vào hàng đợi chính là tạo và đưa một phần:** tử mới vào danh sách.

- **Thêm một nút vào trong cây nhị phân Việc:** thêm một nút mới vào vào cây có thể diễn ra ở cây con bên trái hoặc cây con bên phải.

- **Thêm một phần tử vào danh sách:** 

- **Thao tác này nhằm thêm một phần tử vào:** 

- **trong danh sách. Nếu việc thêm thành công:** thì chiều dài danh sách sẽ tăng lên 1.

- **Tìm kiếm một phần tử trong danh sách:** 

- **Thao tác này sẽ vận dụng các thuật toán tìm:** 

- **kiếm để tìm kiếm một phần tử trên danh sách:** thỏa mãn một tiêu chuẩn nào đó.

---


---


## 📝 NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM & ĐÁP ÁN CHÍNH THỨC (20 CÂU HỎI)

> **Ngân hàng câu hỏi trích xuất từ các bài kiểm tra trắc nghiệm chính thức của eTNU - Đại học Thái Nguyên.**

### 🎯 Bài luyện tập 1

#### Câu 1: Yêu cầu khi chọn kiểu dữ liệu cho chương trình là?

- A. Có thể chọn bất cứ kiểu dữ liệu nào
- B. Kiểu dữ liệu càng lớn càng tốt.
- C. Kiểu dữ liệu càng nhỏ càng tốt.
- D. Kiểu dữ liệu cần sát với kiểu giá trị của các thông tin đó trong thực tế.

> **✅ ĐÁP ÁN ĐÚNG:** `Kiểu dữ liệu cần sát với kiểu giá trị của các thông tin đó trong thực tế.`
> *Giải thích:* Như thế vừa lưu được các thông tin vừa không lãng phí bộ nhớ
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 1, mục 1.2 Kiểu dữ liệu,

---

#### Câu 2: Đâu là một trong những tiêu chí khi chọn ngôn ngữ diễn đạt giải thuật ?

- A. Gần với ngôn ngữ lập trình hiện có.
- B. Chọn ngôn ngữ nào bạn thích
- C. Ngôn ngữ càng gần với ngôn ngữ máy càng tốt
- D. Ngôn ngữ tiếng Việt.

> **✅ ĐÁP ÁN ĐÚNG:** `Gần với ngôn ngữ lập trình hiện có.`
> *Giải thích:* Gần với ngôn ngữ lập trình thì dễ triển khai phần mềm
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, Bài 1, mục 1.3. Ngôn ngữ diễn đạt giải thuật

---

#### Câu 3: Hãy cho biết kết quả của phép MOD hai số nguyên có kiểu gì?

- A. Kiểu ký tự.
- B. Kiểu số thực.
- C. Kiểu logic.
- D. Kiểu số nguyên.

> **✅ ĐÁP ÁN ĐÚNG:** `Kiểu số nguyên.`
> *Giải thích:* Phép MOD là phép chia lấy dư nguyên của 2 số nguyên, do đó giá trị của phép MOD là số nguyên.
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, Bài 1, mục 1.2.1.1. Kiểu nguyên

---

#### Câu 4: Đâu là kiểu dữ liệu cơ bản trong các kiểu dữ liệu dưới đây?

- A. Kiểu tệp tin.
- B. Kiểu cấu trúc bản ghi.
- C. Kiểu mảng.
- D. Kiểu số nguyên.

> **✅ ĐÁP ÁN ĐÚNG:** `Kiểu số nguyên.`
> *Giải thích:* Kiểu dữ liệu cơ bản là:
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, Bài 1, mục 1.2.1

---

#### Câu 5: Hãy cho biết giá trị của “con trỏ” là gì?

- A. Là giá trị tại một vùng bộ nhớ
- B. Là địa chỉ vị trí của con trỏ
- C. Là địa chỉ đến một vùng bộ nhớ nhất định.
- D. Là giá trị của các kiểu dữ liệu khác.

> **✅ ĐÁP ÁN ĐÚNG:** `Là địa chỉ đến một vùng bộ nhớ nhất định.`
> *Giải thích:* Giá trị của “con trỏ” là địa chỉ đến một vùng bộ nhớ nhất định.
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, Bài 1, mục 1.2.1.5

---

#### Câu 6: Hãy cho biết ý nghĩa của kiểu dữ liệu logic (Boolean)

- A. Dùng trong các phép toán logic.
- B. Dùng trong tính toán số học.
- C. Dùng trong các phép so sánh.
- D. Dùng để biểu diễn các giá trị logic bao gồm 2 giá trị đúng (true) và sai (false).

> **✅ ĐÁP ÁN ĐÚNG:** `Dùng để biểu diễn các giá trị logic bao gồm 2 giá trị đúng (true) và sai (false).`
> *Giải thích:* Kiểu dữ liệu logic được dùng để biểu diễn các giá trị logic, bao gồm hai giá trị là đúng (TRUE) và sai (FALSE). Kiểu dữ liệu này được sử dụng để biểu diễn kết quả so sánh giữa các giá trị thuộc kiểu dữ liệu số (nguyên hoặc thực).
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, Bài 1, mục 1.1.1.3 Kiểu dữ liệu Logic

---

#### Câu 7: Hãy cho biết ưu điểm của các kiểu dữ liệu trừu tượng.

- A. Giúp cho giải thuật đơn giản hơn.
- B. Giúp cho người dùng dễ sử dụng chương trình.
- C. Giúp cho người lập trình dễ viết chương trình.
- D. Giúp cho người lập trình không phải quá quan tâm đến các cách thức biểu diễn cụ thể các dữ liệu đó trên máy tính.

> **✅ ĐÁP ÁN ĐÚNG:** `Giúp cho người lập trình không phải quá quan tâm đến các cách thức biểu diễn cụ thể các dữ liệu đó trên máy tính.`
> *Giải thích:* Kiểu RECORD và ARRAY người lập trình không phải quá quan tâm đến các cách thức biểu diễn cụ thể các dữ liệu đó trên máy tính
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 1, mục 1.2 Kiểu dữ liệu,

---

#### Câu 8: Chọn định nghĩa đúng nhất cho từ Giải thuật?

- A. Là tập hợp các lệnh xử lý dữ liệu.
- B. Là một tập hợp hữu hạn của các chỉ thị hay phương cách được định nghĩa rõ ràng cho việc hoàn tất một số sự việc từ một trạng thái ban đầu cho trước; khi các chỉ thị này được áp dụng triệt để thì sẽ dẫn đến kết quả sau cùng như đã dự đoán.
- C. Là cách biểu diễn cấu trúc dữ liệu dưới dạng giả mã, ngôn ngữ tự nhiên, sơ đồ khối…
- D. Là các giải thích về các thuật ngữ trong tin học.

> **✅ ĐÁP ÁN ĐÚNG:** `Là một tập hợp hữu hạn của các chỉ thị hay phương cách được định nghĩa rõ ràng cho việc hoàn tất một số sự việc từ một trạng thái ban đầu cho trước; khi các chỉ thị này được áp dụng triệt để thì sẽ dẫn đến kết quả sau cùng như đã dự đoán.`
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 1, mục 1.1

---

#### Câu 9: Kiểu dữ liệu cơ bản là gì?

- A. Là kiểu dữ liệu có sẵn trên hầu hết các máy tính và được hỗ trợ trong hầu hết các ngôn ngữ lập trình.
- B. Là kiểu dữ liệu đơn giản.
- C. Là kiểu dữ liệu giúp cho việc lập trình dễ dàng hơn.
- D. Là kiểu dữ liệu không đòi hỏi kĩ thuật cao trong xử lý.

> **✅ ĐÁP ÁN ĐÚNG:** `Là kiểu dữ liệu có sẵn trên hầu hết các máy tính và được hỗ trợ trong hầu hết các ngôn ngữ lập trình.`
> *Giải thích:* Kiểu dữ liệu cơ bản là các kiểu dữ liệu có sẵn trên hầu hết các máy tính, và được hỗ trợ trong hầu hết các ngôn ngữ lập trình. Chúng bao gồm kiểu dữ liệu số nguyên (INTEGER), kiểu dữ liệu số thực (REAL), kiểu dữ liệu giá trị logic (BOOLEAN), kiểu dữ liệu ký tự (CHAR). Ngoài ra còn một kiểu dữ liệu nữa hay được sử dụng trong các thuật toán là kiểu dữ liệu con trỏ (POINTER).
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 1, mục 1.2 Kiểu dữ liệu,

---

#### Câu 10: Kiểu truy cập các phần tử trong một mảng là kiểu truy cập nào trong các kiểu dưới đây?

- A. Kiểu truy cập nhanh
- B. Kiểu truy cập song song
- C. Kiểu truy cập tuần tự.
- D. Kiểu truy cập ngẫu nhiên

> **✅ ĐÁP ÁN ĐÚNG:** `Kiểu truy cập ngẫu nhiên`
> *Giải thích:* Có thể truy cập ngẫu nhiên đến các phần tử trong mảng bằng chỉ số của phần tử đó trong mảng.
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, Bài 1, mục 1.2.2.2

---

### 🎯 Bài luyện tập 2

#### Câu 11: Biểu diễn danh sách bằng mảng được mô tả như sau:#define Max_Size Ntypedef  Kieu_du_lieu E_Type;struct ListType{E_Type Element[Max_Size];int Size;} List;Điều kiện danh sách đầy là:

- A. Size.List = Max_Size
- B. Size = 0
- C. List.Size = Max_Size
- D. List = Max_Size

> **✅ ĐÁP ÁN ĐÚNG:** `List.Size = Max_Size`
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 2, mục 2.2 Biểu diễn danh sách bằng mảng

---

#### Câu 12: Trong việc ứng dụng danh sách liên kết để tính toán giá trị của một đa thức 1 ẩn bậc n, để lưu trữ đa thức trong danh sách liên kết thì mỗi nút của danh sách thường có mấy trường:

- A. 1
- B. 2
- C. 4
- D. 3

> **✅ ĐÁP ÁN ĐÚNG:** `3`
> *Giải thích:* Một trường lưu trữ hệ số khác không của các hạng thức, một trường chứa số mũ tương ứng và một trường chứa địa chỉ của nút tiếp theo trong danh sách
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, Bài 2, mục 2.3. Danh sách liên kết

---

#### Câu 13: Một danh sách rỗng khi:

- A. độ dài của danh sách bằng 1
- B. độ dài của danh sách bằng 0
- C. độ dài của danh sách không xác định
- D. tổng giá trị các phần tử của danh sách bằng 0

> **✅ ĐÁP ÁN ĐÚNG:** `độ dài của danh sách bằng 0`
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, Bài 2, mục 2.1.1. Khái niệm danh sách

---

#### Câu 14: Lựa chọn câu đúng nhất về danh sách liên kết đôi (Doubly Linked List)

- A. Vùng liên kết của một phần tử trong danh sách liên đôi có 01 mối liên kết với 02 phần tử khác trong danh sách.
- B. Vùng liên kết của một phần tử trong danh sách liên đôi có 02 mối liên kết với phần tử đầu và cuối của danh sách.
- C. Vùng liên kết của một phần tử trong danh sách liên đôi có 02 mối liên kết, 01 với phần tử trước và 01 với phần tử  sau nó trong danh sách.
- D. Vùng liên kết của một phần tử trong danh sách liên đôi có 02 mối liên kết với 01 phần tử khác trong danh sách.

> **✅ ĐÁP ÁN ĐÚNG:** `Vùng liên kết của một phần tử trong danh sách liên đôi có 02 mối liên kết, 01 với phần tử trước và 01 với phần tử  sau nó trong danh sách.`
> *Giải thích:* Danh sách liên kết đôi, mỗi nút liên kết đến phần tử ngay trước và sau nó.
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 2, mục 2.3 Danh sách liên kết.

---

#### Câu 15: Với cấu trúc dữ liệu như sautypedef struct DNode{int Key;DNode * NextNode;DNode * PreNode;} DOneNode;typedef DOneNode * DPointerType;typedef struct DLLPairNode{DPointerType  DLLFirst;DPointerType  DLLLast;} DLLPType;Hãy cho biết hàm sau dùng để làm gì?void DLLTravelling (DLLPType DList){DPointerType CurrNode = DList.DLLFirst;while (CurrNode != NULL){cout &lt;&lt; CurrNode-&gt;Key;CurrNode =  CurrNode-&gt;NextNode ;}return;}

- A. Xoá một phần tử khỏi danh sách
- B. Duyệt qua các nút trong danh sách và hiển thị nội dung của mỗi nút
- C. Duyệt danh sách
- D. Thêm một phần tử vào danh sách

> **✅ ĐÁP ÁN ĐÚNG:** `Duyệt qua các nút trong danh sách và hiển thị nội dung của mỗi nút`
> *Căn cứ:* Giáo trình CTDL&amp;GT, Bài 2, mục 2.3. Danh sách liên kết

---

#### Câu 16: Lựa chọn định nghĩa đúng nhất về danh sách?

- A. Danh sách là tập hợp các phần tử mà giữa chúng có một mối liên hệ nào đó.
- B. Danh sách là tập hợp các phần tử có kiểu dữ liệu xác định và giữa chúng có một mối liên hệ nào đó.
- C. Danh sách là tập hợp các phần tử có cùng giá trị
- D. Danh sách là tập hợp các phần tử có cùng kiểu dữ liệu.

> **✅ ĐÁP ÁN ĐÚNG:** `Danh sách là tập hợp các phần tử có kiểu dữ liệu xác định và giữa chúng có một mối liên hệ nào đó.`
> *Giải thích:* Theo định nghĩa
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, Bài 2, mục 2.1.1. Khái niệm danh sách

---

#### Câu 17: Cho danh sách L = (1, 8, 9, 2, 4, 0, 6, 7, 5). Thủ tục DSC_L(Pos1; Pos2: position ; var List: ListType) để đưa ra một danh sách con của List bắt đầu từ vị trí Pos1 đến vị trí Pos2 và trả giá trị cho List. Thủ tục Delete_L(Pos: position ; var List: ListType) để xóa một phần tử tại vị trí Pos khỏi danh sách List. Thủ tục Insert_L(Pos: position ; X: Item; var List: ListType) để thêm một phần tử X vào vị trí Pos trong danh sách List.  Khi đó nếu ta thực hiện liên tiếp DSC_L(2,7,L), Delete_L (2,L), Insert_L(2,3,L) thì kết quả sẽ được danh sách L như sau?

- A. (1, 3, 4, 0, 6, 7)
- B. (8, 3, 9, 4, 0, 6)
- C. (8, 3, 2, 4, 0, 6)
- D. (8, 2, 3, 4, 0, 6)

> **✅ ĐÁP ÁN ĐÚNG:** `(8, 3, 2, 4, 0, 6)`
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 2, mục 2.1 Khái niệm và các thao tác trên danh sách

---

#### Câu 18: Khi cài đặt danh sách bằng mảng, với độ dài là n thì thao tác chèn một phần tử vào danh sách có độ phức tạp:

- A. O(n).
- B. O(n.log2(n)).
- C. O(n2).
- D. O(2n).

> **✅ ĐÁP ÁN ĐÚNG:** `O(n).`
> *Giải thích:* Chỉ cần thực hiện một vòng lặp. Để thực hiện thao tác chèn vào vị trí thứ p, ta phải dịch chuyển các phần tử từ thứ p đến n của mảng sang vị trí mới lần lượt từ thứ p + 1 đến thứ n + 1, sau đó mới chèn phần tử cần chèn vào vị trí thứ p.
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 2, mục 2.2 Biểu diễn danh sách bằng mảng

---

#### Câu 19: Định nghĩa nào là đúng với danh sách liên kết?

- A. Danh sách liên kết là cấu trúc dữ liệu tự định nghĩa.
- B. Danh sách liên kết là cấu trúc dữ liệu dạng cây.
- C. Danh sách liên kết là tập hợp các phần tử mà giữa chúng có một sự nối kết với nhau thông qua vùng liên kết của chúng.
- D. Danh sách liên kết là tập hợp các phần tử mà đặt kề cận với nhau trong vùng nhớ.

> **✅ ĐÁP ÁN ĐÚNG:** `Danh sách liên kết là tập hợp các phần tử mà giữa chúng có một sự nối kết với nhau thông qua vùng liên kết của chúng.`
> *Giải thích:* Theo định nghĩa về danh sách liên kết
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 2, mục 2.3 Danh sách liên kết

---

#### Câu 20: Cho danh sách L = (1, 5, 3, 2, 4, 0, 6). Thủ tục Delete_L(Pos: position ; var List: ListType) để xóa một phần tử tại vị trí Pos khỏi danh sách List. Khi đó nếu ta thực hiện liên tiếp Delete_L(2,L), Delete_L(4,L) thì kết quả sẽ được danh sách L như sau?

- A. (1, 3, 4, 0, 6)
- B. (1, 2, 4, 0, 6)
- C. (1, 5, 2, 4, 6)
- D. (1, 3, 2, 0, 6)

> **✅ ĐÁP ÁN ĐÚNG:** `(1, 3, 2, 0, 6)`
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 2, mục 2.1 Khái niệm và các thao tác trên danh sách

---


