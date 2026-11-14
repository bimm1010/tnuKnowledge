---
title: "Nhập môn Lập trình C"
courseCode: "A065200"
tags:
  - course-overview
  - A065200
---

# 🎓 TỔNG HỢP KIẾN THỨC & NGÂN HÀNG ĐỀ THI: A065200 - NHẬP MÔN LẬP TRÌNH C
> **Kho tài liệu chuẩn hóa eTNU dành riêng cho Google Gemini NotebookLM.**  
> *Bao gồm toàn bộ giáo trình lý thuyết chi tiết, mô hình, giải thuật, cú pháp và ngân hàng câu hỏi trắc nghiệm chính thức 100%.*

---


# PHẦN 4: MÔN A065200 - NHẬP MÔN LẬP TRÌNH C

## BÀI 1: CÁC KHÁI NIỆM CƠ BẢN VỀ NGÔN NGỮ C & QUY TRÌNH DỊCH

### 1. Lịch Sử & Đặc Điểm Ngôn Ngữ Lập Trình C
- **Lịch sử ra đời:** Ngôn ngữ C được phát triển bởi **Dennis Ritchie** vào năm **1972** tại phòng thí nghiệm Bell Labs của tập đoàn AT&T, ban đầu nhằm mục đích viết lại hệ điều hành **UNIX** trên dòng máy tính DEC PDP-11.
- **Đặc trưng ưu việt của C:**
  - **Tính cấu trúc (Structured Programming):** Chia chương trình thành các hàm độc lập có cấu trúc, giúp mã nguồn dễ hiểu, dễ gỡ lỗi và bảo trì.
  - **Hiệu năng và tốc độ thực thi siêu cao:** Cung cấp các thao tác can thiệp trực tiếp vào bộ nhớ phần cứng thông qua con trỏ (Pointer), tốc độ chạy gần tương đương với hợp ngữ (Assembly).
  - **Tính khả chuyển (Portability):** Mã nguồn viết bằng C có thể biên dịch và chạy được trên hầu hết mọi nền tảng phần cứng và hệ điều hành (Windows, Linux, macOS, vi điều khiển nhúng) với rất ít hoặc không cần sửa đổi.

---

### 2. Quy Trình Biên Dịch Chương Trình C
Để chuyển đổi từ tệp mã nguồn do lập trình viên viết thành tệp chạy được trên máy tính, hệ thống trải qua 4 giai đoạn liên tiếp:
```
Mã nguồn (.c) 
    |
    v (1. Bộ tiền xử lý - Preprocessor)
Mã nguồn mở rộng (.i)
    |
    v (2. Trình biên dịch - Compiler)
Mã đối tượng (.obj / .o)
    |
    v (3. Trình liên kết - Linker) <--- [Thư viện chuẩn: stdio.h, math.h...]
Tệp thực thi mã máy (.exe / a.out)
    |
    v (4. Bộ nạp - Loader)
Nạp vào RAM và CPU thực thi
```

1. **Bộ tiền xử lý (Preprocessor):**
   - Xử lý tất cả các dòng lệnh bắt đầu bằng ký tự thăng `#` (gọi là **Chỉ thị tiền xử lý**).
   - Chỉ thị `#include <tệp_thư_viện>`: Chèn nội dung của tệp tiêu đề (Header file) vào đầu chương trình.
   - Chỉ thị `#define TÊN GIÁ_TRỊ`: Thay thế tất cả các macro hằng số trong mã nguồn bằng giá trị thực.
   - Loại bỏ toàn bộ các chú thích (Comments).
2. **Trình biên dịch (Compiler):**
   - Kiểm tra cú pháp ngữ pháp của ngôn ngữ C.
   - Dịch mã nguồn mở rộng sang **Mã đối tượng nhị phân (.obj trên Windows hoặc .o trên Linux)** chứa mã máy nhưng chưa thể chạy được vì còn thiếu các hàm thư viện ngoài.
3. **Trình liên kết (Linker):**
   - Ghép nối các tệp mã đối tượng `.obj` với các đoạn mã máy của các hàm thư viện chuẩn (như `printf`, `scanf`, `sqrt`).
   - Tạo ra **Tệp thực thi cuối cùng (.exe trên Windows)**.
4. **Bộ nạp (Loader):**
   - Thành phần của hệ điều hành, nạp tệp `.exe` từ đĩa cứng vào bộ nhớ RAM và thiết lập con trỏ lệnh CPU nhảy vào hàm `main()` để bắt đầu thực thi.

---

### 3. Cấu Trúc Tổng Quát Của Chương Trình C
```c
// 1. Khai báo các thư viện tiền xử lý
#include <stdio.h>
#include <stdlib.h>

// 2. Khai báo hằng số hoặc định nghĩa kiểu mới
#define PI 3.14159

// 3. Khai báo nguyên mẫu hàm (Function Prototypes)
int tinhTong(int a, int b);

// 4. Hàm main() - Điểm bắt đầu bắt buộc của mọi chương trình C
int main() {
    // Khai báo biến
    int x = 10, y = 20;
    int tong;
    
    // Gọi hàm và xử lý
    tong = tinhTong(x, y);
    printf("Tong = %d\n", tong);
    
    return 0; // Trả về 0 báo hiệu chương trình kết thúc thành công
}

// 5. Định nghĩa chi tiết các hàm con
int tinhTong(int a, int b) {
    return a + b;
}
```

- **Quy tắc cú pháp cốt lõi:**
  - Mọi câu lệnh trong C bắt buộc phải kết thúc bằng **dấu chấm phẩy `;`**.
  - Các khối lệnh được bao bọc bên trong cặp **ngoặc nhọn `{ }`**.
  - Chú thích: Chú thích một dòng dùng `//`, chú thích nhiều dòng dùng `/* ... */`.

---

### 4. Tập Ký Tự, Từ Khóa & Tên Định Danh (Identifier)
- **32 Từ khóa chuẩn ANSI C (Keywords):**
  - Các từ dành riêng có ý nghĩa cố định đối với trình biên dịch:
    `auto`, `break`, `case`, `char`, `const`, `continue`, `default`, `do`, `double`, `else`, `enum`, `extern`, `float`, `for`, `goto`, `if`, `int`, `long`, `register`, `return`, `short`, `signed`, `sizeof`, `static`, `struct`, `switch`, `typedef`, `union`, `unsigned`, `void`, `volatile`, `while`.
  - **LƯU Ý:** **Tuyệt đối không được sử dụng từ khóa để đặt tên cho biến, hàm hay nhãn!**
- **Quy tắc đặt Tên định danh (Identifiers):**
  1. Chỉ được chứa các chữ cái (`a-z`, `A-Z`), các chữ số (`0-9`) và **dấu gạch dưới `_`**.
  2. **Bắt buộc phải bắt đầu bằng một chữ cái hoặc dấu gạch dưới `_`** (Không được bắt đầu bằng chữ số!).
  3. **Ngôn ngữ C phân biệt chữ HOA và chữ thường (Case-sensitive):** Biến `Tong`, `tong` và `TONG` là 3 biến hoàn toàn khác nhau!
  4. Không chứa dấu cách và các ký tự đặc biệt (`@, #, $, %, ^, &, *, -`).
  - *Ví dụ tên hợp lệ:* `dem`, `_soLuong`, `diem_tb`, `m172`.
  - *Ví dụ tên KHÔNG hợp lệ:* `2bien` (bắt đầu bằng số), `diem-tb` (chứa dấu trừ), `for` (trùng từ khóa), `ho ten` (chứa dấu cách).

---

## BÀI 2: BIẾN, KIỂU DỮ LIỆU, MẢNG VÀ BIỂU THỨC

### 1. Các Kiểu Dữ Liệu Cơ Sở Trong C
| Kiểu dữ liệu | Số byte | Dải giá trị biểu diễn | Đặc tả định dạng |
| :--- | :---: | :--- | :---: |
| **char** | 1 byte | $-128$ đến $127$ (mã ký tự ASCII) | `%c` |
| **unsigned char** | 1 byte | $0$ đến $255$ | `%c` hoặc `%u` |
| **short int** | 2 bytes | $-32,768$ đến $32,767$ | `%hd` |
| **int** (16-bit / 32-bit) | 2 hoặc 4 bytes | Thường 4 bytes: $-2,147,483,648$ đến $2,147,483,647$ | `%d` hoặc `%i` |
| **unsigned int** | 4 bytes | $0$ đến $4,294,967,295$ | `%u` |
| **long int** | 4 hoặc 8 bytes | $-2^{31}$ đến $2^{31}-1$ (hoặc $-2^{63}$ đến $2^{63}-1$) | `%ld` |
| **float** | 4 bytes | Số thực độ chính xác đơn, 6 chữ số có nghĩa ($10^{-38}$ đến $10^{38}$) | `%f` |
| **double** | 8 bytes | Số thực độ chính xác kép, 15 chữ số có nghĩa ($10^{-308}$ đến $10^{308}$) | `%lf` |

---

### 2. Hằng Số & Biến
- **Biến (Variable):** Là một ô nhớ trong RAM được đặt tên dùng để chứa dữ liệu có thể thay đổi trong quá trình chạy.
  - Cú pháp: `<kiểu_dữ_liệu> <tên_biến> [= giá_trị_khởi_tạo];` (Ví dụ: `int count = 0; float gpa = 3.8;`).
- **Hằng (Constant):** Giá trị cố định không thể bị thay đổi:
  - Hằng số nguyên: Thập phân (`125`), Bát phân (bắt đầu bằng `0`: `0125`), Thập lục phân (bắt đầu bằng `0x`: `0x7B`).
  - Hằng số thực: Dạng thập phân (`3.14159`) hoặc dạng khoa học số mũ (`1.23e+4` = $1.23 \times 10^4$).
  - Hằng ký tự: Đặt trong nháy đơn: `'A'`, `'9'`, ký tự thoát: `'\n'` (xuống dòng), `'\t'` (tab), `'\0'` (ký tự rỗng kết thúc chuỗi), `'\\'` (dấu chéo ngược).
  - Hằng chuỗi: Đặt trong nháy kép: `"Ha Noi"`. Trình biên dịch tự động chèn thêm ký tự `'\0'` vào cuối chuỗi.
  - Khai báo hằng bằng `const`: `const float PI = 3.14159;`.
- **Kiểu liệt kê `enum`:**
  ```c
  enum ThuTrongTuan { HAI = 2, BA, BON, NAM, SAU, BAY, CHU_NHAT };
  // Mặc định các phần tử tiếp theo tự tăng 1: BA = 3, BON = 4...
  ```

---

### 3. Hệ Thống Toán Tử & Biểu Thức Trong C
1. **Toán tử số học:**
   - `+`, `-`, `*`, `/`: Phép chia nguyên nếu cả 2 toán hạng là số nguyên (`7 / 2 = 3`); phép chia thực nếu có ít nhất 1 toán hạng là số thực (`7.0 / 2 = 3.5`).
   - `%`: Phép chia lấy phần dư. **CHỈ ÁP DỤNG ĐƯỢC CHO SỐ NGUYÊN!** (`7 % 2 = 1`).
2. **Toán tử tăng giảm (++ và --):**
   - **Tiền tố (`++x`, `--x`):** Tăng/giảm giá trị của $x$ trước 1 đơn vị, sau đó mới lấy giá trị mới này đưa vào tính toán biểu thức.
   - **Hậu tố (`x++`, `x--`):** Lấy giá trị hiện thời của $x$ đưa vào tính toán biểu thức trước, sau đó mới tăng/giảm $x$ lên 1 đơn vị.
   - *Ví dụ:* Nếu `x = 5`:
     `int y = ++x;` $\rightarrow$ $x = 6, y = 6$.
     `int z = x++;` $\rightarrow$ $z = 6, x = 7$.
3. **Toán tử quan hệ:** `==` (so sánh bằng), `!=` (khác), `<`, `>`, `<=`, `>=`. Trả về `1` nếu đúng, `0` nếu sai.
4. **Toán tử logic & Cơ chế Đoản mạch (Short-circuit):**
   - `&&` (AND): Đúng khi cả hai vế cùng đúng. **Nếu vế trái sai (0), vế phải KHÔNG ĐƯỢC THỰC THI NỮA.**
   - `||` (OR): Đúng khi có ít nhất một vế đúng. **Nếu vế trái đúng (1), vế phải KHÔNG ĐƯỢC THỰC THI NỮA.**
   - `!` (NOT): Đảo ngược giá trị logic.
5. **Toán tử gán kết hợp:** `+=`, `-=`, `*=`, `/=`, `%=` (Ví dụ: `a += b` tương đương `a = a + b`).
6. **Toán tử điều kiện 3 ngôi (Ternary Operator):**
   ```c
   int max = (a > b) ? a : b;
   ```
7. **Toán tử kích thước `sizeof`:** Trả về số byte trong bộ nhớ của biến hoặc kiểu dữ liệu (`sizeof(int)` = 4).
8. **Ép kiểu dữ liệu (Type Casting):**
   - Ép kiểu tường minh: `(float)a / b` (biến $a$ tạm thời thành `float` để thực hiện phép chia số thực).

---

### 4. Mảng Một Chiều & Mảng Hai Chiều
- **Mảng 1 chiều:**
  - Khai báo: `int a[100];` (Cấp phát 100 phần tử liên tiếp từ `a[0]` đến `a[99]`).
  - Khởi tạo: `int a[5] = {1, 2, 3, 4, 5};`.
  - **Quy tắc bắt buộc:** Chỉ số mảng trong C luôn bắt đầu từ **`0` đến `n - 1`**. Ngôn ngữ C không tự động kiểm tra vượt biên mảng (Out of bounds), lập trình viên phải tự kiểm soát để tránh ghi đè bộ nhớ!
- **Mảng 2 chiều (Ma trận):**
  - Khai báo: `int mt[3][4];` (Ma trận 3 hàng, 4 cột). Lưu trữ trong RAM theo thứ tự ưu tiên từng hàng (Row-major order).
- **Chuỗi ký tự (String):**
  - Trong C, chuỗi ký tự bản chất là **mảng một chiều các ký tự kết thúc bằng ký tự null `'\0'`**.
  - Khai báo: `char str[20] = "Hello";` $\rightarrow$ Mảng `str` chiếm 6 bytes (`'H', 'e', 'l', 'l', 'o', '\0'`).

---

## BÀI 3: VÀO RA DỮ LIỆU CHUẨN (I/O) TRONG C

### 1. Hàm Xuất Chuẩn `printf()`
- Khai báo trong thư viện: `#include <stdio.h>`.
- Cú pháp: `printf("chuỗi_định_dạng", danh_sách_đối_số);`
- **Bảng mã đặc tả định dạng chuẩn:**
  - `%d` hoặc `%i`: Số nguyên có dấu (hệ thập phân).
  - `%u`: Số nguyên không dấu.
  - `%o`: Số nguyên hệ bát phân (Octal).
  - `%x` hoặc `%X`: Số nguyên hệ thập lục phân (Hexadecimal thường/hoa).
  - `%f`: Số thực `float`. Mặc định in ra 6 chữ số phần thập phân.
  - `%lf`: Số thực độ chính xác kép `double`.
  - `%c`: In ra một ký tự đơn.
  - `%s`: In ra một chuỗi ký tự kết thúc bằng `'\0'`.
  - `%p`: In ra địa chỉ ô nhớ của con trỏ dạng Hex.
  - `%%`: In ra dấu phần trăm `%`.
- **Định dạng độ rộng và căn lề:**
  - `%5d`: In số nguyên chiếm tối thiểu 5 vị trí, căn lề phải.
  - `%-5d`: In số nguyên chiếm tối thiểu 5 vị trí, căn lề trái.
  - `%8.2f`: In số thực chiếm tối thiểu 8 vị trí, trong đó có đúng 2 chữ số phần thập phân.

---

### 2. Hàm Nhập Chuẩn `scanf()`
- Cú pháp: `scanf("chuỗi_định_dạng", &biến1, &biến2, ...);`
- **QUY TẮC BẮT BUỘC:** **Phải có toán tử lấy địa chỉ `&` trước tên biến đơn lẻ để truyền địa chỉ ô nhớ cho `scanf` ghi dữ liệu vào!**
  - *Ngoại lệ duy nhất:* Đối với mảng ký tự chuỗi (`char str[50];`), tên mảng `str` bản thân nó đã là một địa chỉ con trỏ, nên viết `scanf("%s", str);` (không có dấu `&`).
- **Hiện tượng Trôi lệnh khi nhập chuỗi/ký tự sau số nguyên:**
  - Khi nhập số nguyên rồi nhấn phím `Enter`, ký tự xuống dòng `'\n'` vẫn còn lưu lại trong bộ đệm bàn phím (stdin). Lệnh nhập `scanf("%c", &ch)` hoặc `gets(str)` ngay sau đó sẽ đọc trúng ngay ký tự `'\n'` này và bị trôi qua mà không dừng lại cho người dùng nhập!
  - *Cách khắc phục triệt để:*
    1. Đặt khoảng trắng trước mã định dạng ký tự: `scanf(" %c", &ch);`.
    2. Sử dụng vòng lặp xóa bộ đệm: `while((getchar()) != '\n');`.

---

### 3. Các Hàm Vào Ra Ký Tự & Chuỗi Khác
- **Ký tự:**
  - `getchar()`: Đọc một ký tự duy nhất từ bàn phím.
  - `putchar(c)`: In một ký tự ra màn hình.
- **Chuỗi ký tự:**
  - `gets(str)`: Đọc cả dòng văn bản có chứa dấu cách cho tới khi gặp phím Enter. *(Cảnh báo: Hàm này không kiểm tra độ dài mảng, rất dễ gây tràn bộ đệm Buffer Overflow)*.
  - `fgets(str, sizeof(str), stdin)`: **Phương thức nhập chuỗi an toàn nhất trong C hiện đại**, giới hạn kích thước đọc tối đa.
  - `puts(str)`: In chuỗi ra màn hình và **tự động thêm ký tự xuống dòng `'\n'` vào cuối**.

---

## BÀI 4: CẤU TRÚC ĐIỀU KHIỂN RẼ NHÁNH

### 1. Câu Lệnh `if` và `if - else`
```c
// Dạng if đơn
if (điều_kiện) {
    khối_lệnh_khi_đúng;
}

// Dạng if - else
if (điều_kiện) {
    khối_lệnh_1;
} else {
    khối_lệnh_2;
}

// Dạng if - else if đa nhánh
if (điểm >= 8.5) {
    printf("Xep loai A\n");
} else if (điểm >= 7.0) {
    printf("Xep loai B\n");
} else {
    printf("Xep loai C\n");
}
```
- **Cảnh báo lỗi bẫy kinh điển khi thi cử:**
  - Câu lệnh `if (a = 5)`: Đây là phép gán, gán 5 cho $a$. Biểu thức gán trả về giá trị 5 (khác 0 $\rightarrow$ tương đương Đúng - True), do đó nhánh if này **luôn luôn được thực hiện bất kể $a$ ban đầu là bao nhiêu**!
  - Cú pháp so sánh đúng phải là: `if (a == 5)`.

---

### 2. Cấu Trúc Lựa Chọn `switch - case`
```c
switch (biểu_thức_nguyên) {
    case hằng_nguyên_1:
        câu_lệnh_1;
        break; // Thoát khỏi switch
    case hằng_nguyên_2:
        câu_lệnh_2;
        break;
    ...
    default:
        câu_lệnh_mặc_định; // Thực thi khi không khớp case nào
        break;
}
```
- **CÁC QUY TẮC CẦN NHỚ VỀ SWITCH:**
  1. `biểu_thức_nguyên` và giá trị sau các nhãn `case` **bắt buộc phải là kiểu số nguyên (`int`, `char`, `enum`)**. **KHÔNG ĐƯỢC DÙNG SỐ THỰC FLOAT HAY CHUỖI KÝ TỰ!**
  2. Các giá trị sau `case` phải là các **hằng số phân biệt duy nhất**, không được chứa biến số hay biểu thức động.
  3. **Vai trò sống còn của lệnh `break`:** Nếu một nhánh `case` không có câu lệnh `break;`, luồng thực thi của chương trình sẽ **tiếp tục rơi xuống (Fall-through) và thực thi tiếp tất cả các câu lệnh của các case bên dưới** cho đến khi gặp lệnh `break` hoặc hết `switch`.

---

## BÀI 5: CẤU TRÚC LẶP (LOOPS)

### 1. Vòng Lặp `for`
```c
for (khởi_tạo_biến; điều_kiện_lặp; bước_nhảy) {
    thân_vòng_lặp;
}
```
- **Quy trình thực thi:**
  1. Thực hiện `khởi_tạo_biến` đúng 1 lần duy nhất lúc bắt đầu.
  2. Kiểm tra `điều_kiện_lặp`: Nếu Sai (0) $\rightarrow$ thoát vòng lặp ngay; Nếu Đúng (khác 0) $\rightarrow$ thực thi `thân_vòng_lặp`.
  3. Thực hiện `bước_nhảy`.
  4. Quay lại bước 2.
- Cả 3 biểu thức đều có thể bỏ trống (Ví dụ: `for (;;)` là vòng lặp vô tận).

---

### 2. Vòng Lặp `while` (Vòng Lặp Tiền Điều Kiện)
```c
while (điều_kiện) {
    thân_vòng_lặp;
}
```
- **Kiểm tra điều kiện trước khi thực thi thân vòng lặp.** Nếu điều kiện sai ngay từ đầu, thân vòng lặp sẽ **không được thực thi lần nào (0 lần)**.

---

### 3. Vòng Lặp `do - while` (Vòng Lặp Hậu Điều Kiện)
```c
do {
    thân_vòng_lặp;
} while (điều_kiện); // Bắt buộc có dấu chấm phẩy ở cuối!
```
- **Thực thi thân vòng lặp trước rồi mới kiểm tra điều kiện sau.**
- **ĐẶC ĐIỂM QUAN TRỌNG:** **Thân vòng lặp `do - while` luôn luôn được thực thi ÍT NHẤT 1 LẦN** bất kể điều kiện đúng hay sai lúc ban đầu. Thường dùng để tạo menu lựa chọn hoặc kiểm tra nhập dữ liệu hợp lệ.

---

### 4. Các Lệnh Điều Khiển Luồng Vòng Lặp
- **`break`:** Lập tức chấm dứt hoàn toàn vòng lặp (hoặc switch) gần nhất chứa nó, chuyển quyền điều khiển sang câu lệnh tiếp theo sau khối lặp.
- **`continue`:** Bỏ qua toàn bộ các câu lệnh còn lại trong thân vòng lặp ở lần lặp hiện tại, lập tức nhảy ngay sang lần lặp kế tiếp (với `for`, nhảy về biểu thức bước nhảy).
- **`goto <nhãn>`:** Nhảy vô điều kiện đến vị trí nhãn lệnh `<nhãn>:` trong cùng một hàm. Hạn chế sử dụng vì làm phá vỡ cấu trúc lập trình sáng sủa.

---

## BÀI 6: HÀM, CON TRỎ (POINTER) & CẤU TRÚC CHƯƠNG TRÌNH

### 1. Hàm & Cơ Chế Truyền Tham Số
- **Nguyên mẫu hàm (Function Prototype):** Khai báo ở đầu chương trình trước hàm `main` để trình biên dịch biết tên hàm, kiểu trả về và danh sách kiểu dữ liệu tham số:
  `int hoanDoi(int *a, int *b);`
- **Hai cơ chế truyền tham số:**
  1. **Truyền tham trị (Pass by Value):**
     - Giá trị của đối số thực tế được sao chép sang một vùng nhớ mới của tham số hình thức.
     - **Mọi sự thay đổi giá trị của tham số bên trong thân hàm hoàn toàn KHÔNG ẢNH HƯỞNG đến biến gốc ngoài hàm gọi!**
  2. **Truyền tham chiếu / địa chỉ qua con trỏ (Pass by Reference / Pointer):**
     - Truyền địa chỉ ô nhớ của biến gốc vào hàm (sử dụng toán tử `&`).
     - Trong thân hàm, thông qua con trỏ giải tham chiếu (`*ptr`), hàm có thể đọc và **thay đổi trực tiếp giá trị của biến gốc nằm ở ngoài hàm**.

---

### 2. Con Trỏ (Pointer) - Bản Chất & Cú Pháp
- **Định nghĩa:** Con trỏ là một biến đặc biệt dùng để **lưu trữ địa chỉ của một ô nhớ** (chứ không lưu trữ giá trị dữ liệu thông thường).
- **Cú pháp khai báo:** `<kiểu_dữ_liệu> *<tên_con_trỏ>;` (Ví dụ: `int *p;`).
- **Hai toán tử then chốt làm việc với con trỏ:**
  1. **Toán tử lấy địa chỉ `&` (Address-of Operator):** Trả về địa chỉ ô nhớ của biến (`p = &x;` nghĩa là con trỏ $p$ trỏ tới biến $x$).
  2. **Toán tử giải tham chiếu `*` (Dereference / Indirection Operator):** Truy xuất trực tiếp đến giá trị của ô nhớ mà con trỏ đang trỏ tới (`*p = 100;` tương đương gán biến $x = 100$).
- **Con trỏ `NULL`:** Con trỏ trỏ tới địa chỉ $0$ (không trỏ tới vùng nhớ hợp lệ nào). Khởi tạo con trỏ an toàn: `int *ptr = NULL;`.
- **Mối quan hệ mật thiết giữa Con trỏ và Mảng:**
  - Tên của một mảng bản chất là một **Hằng con trỏ** trỏ đến phần tử đầu tiên của mảng đó:
    $$\text{Tên mảng } a \equiv \&a[0]$$
  - Phép toán truy xuất chỉ số `a[i]` tương đương hoàn toàn với biểu thức số học con trỏ:
    $$a[i] \equiv *(a + i)$$
  - Phép toán số học con trỏ: Khi cộng con trỏ với 1 số nguyên $k$ (`p + k`), địa chỉ thực tế tăng lên một lượng là $k \times \text{sizeof}(Kiểu)$ bytes.

---

### 3. Phạm Vi Biến & Lớp Lưu Trữ (Storage Classes)
- **Biến cục bộ (Local / Auto):** Khai báo bên trong khối lệnh hoặc hàm. Chỉ tồn tại và có hiệu lực trong phạm vi khối đó; được tự động cấp phát và giải phóng trên ngăn xếp (Stack).
- **Biến toàn cục (Global):** Khai báo bên ngoài tất cả các hàm. Tồn tại trong suốt quá trình chạy chương trình và có thể được truy xuất từ bất kỳ hàm nào trong file.
- **Từ khóa `static` (Biến tĩnh):**
  - Biến cục bộ `static`: Giữ nguyên giá trị của nó giữa các lần gọi hàm khác nhau (chỉ khởi tạo đúng 1 lần duy nhất khi chạy chương trình).
  - Biến toàn cục `static`: Giới hạn phạm vi truy cập của biến chỉ nằm bên trong file `.c` hiện tại (che giấu với các file khác).
- **Từ khóa `extern`:** Khai báo biến toàn cục được định nghĩa ở một tệp nguồn khác trong cùng dự án.

---

## BÀI 7: KIỂU DỮ LIỆU CẤU TRÚC (STRUCT) VÀ HỢP (UNION)

### 1. Kiểu Cấu Trúc (Struct)
- **Định nghĩa:** Cho phép gom nhóm các biến có **kiểu dữ liệu khác nhau** thành một thực thể dữ liệu mới duy nhất.
```c
struct SinhVien {
    char maSV[15];
    char hoTen[50];
    int tuoi;
    float gpa;
};
```
- **Khai báo biến struct:** `struct SinhVien sv1, sv2;`.
- **Truy xuất thành viên của struct:**
  - Với biến struct thông thường: Sử dụng **Toán tử dấu chấm `.`** (Ví dụ: `sv1.tuoi = 20; sv1.gpa = 3.5;`).
  - Với con trỏ trỏ tới struct: Sử dụng **Toán tử mũi tên `->`** (Ví dụ: `ptr->tuoi = 20;` tương đương `(*ptr).tuoi = 20;`).
- **Từ khóa `typedef`:** Tạo bí danh mới cho kiểu struct ngắn gọn:
  ```c
  typedef struct SinhVien SV;
  SV sv1; // Khai báo nhanh không cần viết từ khóa struct
  ```

---

### 2. Kiểu Hợp (Union) & So Sánh Với Struct
```c
union DuLieu {
    int i;
    float f;
    char str[20];
};
```
- **Nguyên lý hoạt động của `union`:**
  - Cú pháp khai báo hoàn toàn giống `struct`, **NHƯNG TẤT CẢ CÁC THÀNH VIÊN TRONG UNION DÙNG CHUNG MỘT VÙNG NHỚ DUY NHẤT!**
  - **Kích thước bộ nhớ:**
    - Kích thước của `struct` = Tổng kích thước của tất cả các thành viên (cộng thêm bộ nhớ đệm padding).
    - Kích thước của `union` = **Bằng đúng kích thước của thành viên có dung lượng lớn nhất** (Trong ví dụ trên là `sizeof(str)` = 20 bytes).
  - Tại một thời điểm bất kỳ, `union` chỉ có thể lưu trữ hợp lệ giá trị của **duy nhất một thành viên**. Ghi đè thành viên này sẽ làm mất giá trị của thành viên khác.

---

## BÀI 8: QUẢN LÝ MÀN HÌNH VÀ CỬA SỔ VĂN BẢN (CONIO)

- Sử dụng thư viện tiêu đề: `#include <conio.h>` (Trong các trình biên dịch Borland C, Turbo C trên MS-DOS/Windows Console).
- Màn hình văn bản tiêu chuẩn gồm **80 cột (ngang) và 25 dòng (dọc)**. Gốc tọa độ `(1, 1)` nằm ở góc trên cùng bên trái.
- **Các hàm điều khiển màn hình văn bản cốt lõi:**
  - `clrscr()`: Xóa sạch toàn bộ nội dung màn hình và đưa con trỏ về vị trí góc trên trái `(1, 1)`.
  - `gotoxy(int x, int y)`: Di chuyển con trỏ màn hình đến tọa độ cột $x$ ($1..80$) và dòng $y$ ($1..25$).
  - `textcolor(int color)`: Thiết lập màu chữ hiển thị (mã màu từ 0 đến 15: 0: `BLACK`, 1: `BLUE`, 2: `GREEN`, 4: `RED`, 14: `YELLOW`, 15: `WHITE`. Thêm `+ BLINK` để tạo hiệu ứng chữ nhấp nháy).
  - `textbackground(int color)`: Thiết lập màu nền văn bản (mã màu từ 0 đến 7).
  - `cprintf("chuỗi định dạng", ...)`: In văn bản ra màn hình có áp dụng màu chữ và màu nền vừa thiết lập.
  - `cscanf("chuỗi định dạng", ...)`: Nhập dữ liệu trong chế độ văn bản conio.
  - `window(int x1, int y1, int x2, int y2)`: Định nghĩa một cửa sổ làm việc con hình chữ nhật trên màn hình. Mọi thao tác `clrscr`, `gotoxy` sau đó sẽ chỉ giới hạn bên trong cửa sổ này.

---

## BÀI 9: ĐỒ HỌA MÁY TÍNH CƠ BẢN TRONG C (GRAPHICS)

- Sử dụng thư viện tiêu đề: `#include <graphics.h>`.
- Màn hình đồ họa được cấu thành từ hàng trăm ngàn điểm ảnh (**Pixel**). Gốc tọa độ `(0, 0)` nằm ở **góc trên cùng bên trái**. Trục hoành $X$ hướng từ trái sang phải, trục tung $Y$ hướng từ trên xuống dưới.
- **Khởi tạo và kết thúc chế độ đồ họa:**
  ```c
  int gd = DETECT, gm;
  initgraph(&gd, &gm, "C:\\TC\\BGI"); // Nạp driver và mở màn hình đồ họa
  if (graphresult() != grOk) {
      printf("Loi khoi tao do hoa!\n");
      exit(1);
  }
  // Các lệnh vẽ hình tại đây...
  getch();
  closegraph(); // Đóng đồ họa, giải phóng bộ nhớ, chuyển về chế độ văn bản
  ```
- **Các hàm vẽ hình cơ bản:**
  - `putpixel(int x, int y, int color)`: Vẽ một điểm ảnh tại tọa độ $(x, y)$ với màu chỉ định.
  - `line(int x1, int y1, int x2, int y2)`: Vẽ đoạn thẳng nối giữa 2 điểm.
  - `rectangle(int x1, int y1, int x2, int y2)`: Vẽ khung viền hình chữ nhật với 2 đỉnh đối diện.
  - `circle(int x, int y, int radius)`: Vẽ đường tròn tâm $(x, y)$ bán kính $r$.
  - `ellipse(int x, int y, int stangle, int endangle, int xradius, int yradius)`: Vẽ cung hoặc hình elip.
  - `bar(int x1, int y1, int x2, int y2)`: Vẽ một hình chữ nhật đặc được tô màu bên trong.
- **Màu sắc và tô miền:**
  - `setcolor(int color)`: Đặt màu vẽ cho các đường nét viền.
  - `setbkcolor(int color)`: Đặt màu nền cho toàn màn hình đồ họa.
  - `setfillstyle(int pattern, int color)`: Thiết lập mẫu hoa văn tô (như tô đặc `SOLID_FILL`, tô sọc caro) và màu tô.
  - `floodfill(int x, int y, int border_color)`: Tô kín một vùng kín chứa điểm xuất phát hạt giống $(x, y)$ có màu đường biên là `border_color`.
- **Hiển thị văn bản trong đồ họa:**
  - `outtextxy(int x, int y, char *text)`: In chuỗi ký tự tại tọa độ đồ họa $(x, y)$.
  - `settextstyle(int font, int direction, int size)`: Đặt kiểu font chữ, hướng chữ (ngang `HORIZ_DIR` hay dọc `VERT_DIR`) và kích cỡ phóng to chữ.

---


---


## 📝 NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM & ĐÁP ÁN CHÍNH THỨC (38 CÂU HỎI)

> **Ngân hàng câu hỏi trích xuất từ các bài kiểm tra trắc nghiệm chính thức của eTNU - Đại học Thái Nguyên.**

### 🎯 Bài luyện tập 1

#### Câu 1: Chọn tên đúng cách theo cú pháp C?

- A. 12a
- B. m172
- C. 12
- D. -123

> **✅ ĐÁP ÁN ĐÚNG:** `B. m172`
> *Giải thích:* Trong C ký tự đầu của tên phải là chữ cái hoặc ký tự _

---

#### Câu 2: Hãy chọn phát biểu đúng về tập ký tự dùng trong ngôn ngữ lập trình C?

- A. Không thể là các chữ cái
- B. Có thể dùng bất kỳ ký hiệu nào
- C. Có thể sử dụng ký tự gạch dưới
- D. Không thể là các ký hiệu đặc biệt

> **✅ ĐÁP ÁN ĐÚNG:** `C. Có thể sử dụng ký tự gạch dưới`
> *Giải thích:* Tập ký tự trong ngôn ngữ C có thể là các chữ cái hoa, chữ cái thường, chữ số, các ký hiệu đặc biệt, các ký hiệu toán học, ký tự gạch nối

---

#### Câu 3: Đoạn mã nào có lỗi?

- A. int m=7; long t=6; double x= 2*m;
- B. int m=7, t=6; double x= 2*m;
- C. int m=7; t=6; double x= 2*t;
- D. int m=7, t=6, x= 2*m*t;

> **✅ ĐÁP ÁN ĐÚNG:** `C. int m=7; t=6; double x= 2*t;`
> *Giải thích:* Có thể khai báo biến như sau: DataType var1, var2, var3; hoặc khai báo cùng với giá trị khởi tạo DataType var = Giá trị.

---

#### Câu 4: Trong C độ dài cực đại của tên mặc định là bao nhiêu?

- A. 24
- B. 32
- C. 64
- D. 16

> **✅ ĐÁP ÁN ĐÚNG:** `B. 32`
> *Giải thích:* Độ dài cực đại của tên mặc định là 32. Tuy nhiên chúng ta có thể đặt lại một giá trị từ 1 đến 32 trong chức năng: Options à Compiler à Source à Indentifier length

---

#### Câu 5: Chọn 2 phát biểu SAI. Một tên trong C bắt đầu bằng?

- a) Chữ cái.
- b) Ký tự _
- c) Chữ số
- d) Ký hiệu toán tử

> **✅ ĐÁP ÁN ĐÚNG:** `c) Chữ số và d) Ký hiệu toán tử`

---

#### Câu 6: Trong các khai báo biến sau, khai báo nào là đúng?

- A. int _7;
- B. int f(x);
- C. int case;
- D. int be ta;

> **✅ ĐÁP ÁN ĐÚNG:** `A. int _7;`
> *Giải thích:* Các khai báo biến sai:

---

#### Câu 7: Đâu là từ khóa trong C ?

- A. int
- B. integer
- C. Int
- D. INT

> **✅ ĐÁP ÁN ĐÚNG:** `A. int`

---

#### Câu 8: Khi gán trị mới cho một dữ liệu thì?

- A. Giá trị của biến thay đổi và nhận một giá trị ngẫu nhiên
- B. Giá trị của biến không thay đổi và nhận giá trị mới
- C. Giá trị của biến không thay đổi
- D. Giá trị biến thay đổi và nhận giá trị mới

> **✅ ĐÁP ÁN ĐÚNG:** `D. Giá trị biến thay đổi và nhận giá trị mới`
> *Giải thích:* Trong C khi gán trị mới cho một dữ liệu thì giá trị cũ bị mất đi

---

#### Câu 9: Trong các tên sau đây, tên nào là tên biến hợp lệ?

- A. char
- B. double
- C. float
- D. dx (hoặc yl, vb, x)

> **✅ ĐÁP ÁN ĐÚNG:** `D. dx (hoặc yl, vb, x)`

---

#### Câu 10: Chọn 2 phát biểu SAI. Một tên trong C bắt đầu bằng?a)  Chữ cái.                  b)  Ký tự _c)  Chữ số                    d)  Ký hiệu toán tử

- A. a và c
- B. c và d
- C. b và d
- D. a và b

> **✅ ĐÁP ÁN ĐÚNG:** `c và d`
> *Giải thích:* Trong C ký tự đầu của tên phải là chữ cái hoặc ký tự _

---

#### Câu 11: Đâu là từ khóa trong C ?

- A. int
- B. integer
- C. Int
- D. INT

> **✅ ĐÁP ÁN ĐÚNG:** `int`
> *Giải thích:* Từ khóa trong C phải được viết bằng chữ thường. Để khai báo một biến kiểu nguyên chúng ta dùng từ khóa: int

---

#### Câu 12: void main(){int a=10;int b=2*a+a++;}Giá trị b là bao nhiêu?

- A. 32
- B. 31
- C. 30
- D. 33

> **✅ ĐÁP ÁN ĐÚNG:** `30`
> *Giải thích:* a++ tăng sau khi thực hiện phép nhân và cộng nên b=30 và sau đó a=11.

---

### 🎯 Bài luyện tập 2

#### Câu 13: void main()
{
int a=10;
int b=2*a+a++;
}
Giá trị b là bao nhiêu?

- A. 32
- B. 31
- C. 30
- D. 33

> **✅ ĐÁP ÁN ĐÚNG:** `C. 30`

---

#### Câu 14: Biểu thức: 3*5%4-2*16&gt;32 &amp;&amp; 31/6&lt;7 cho kết quả bằng bao nhiêu?

- A. False
- B. 1
- C. True
- D. 0

> **✅ ĐÁP ÁN ĐÚNG:** `0`
> *Giải thích:* 3*5%4-2*16&gt;32 &amp;&amp; 31/6&lt;7 = 15%4-32 &gt; 32 &amp;&amp; 5&lt;7 = -29&gt;32 &amp;&amp; 5&lt;7 = 0 &amp;&amp; 1 = 0

---

#### Câu 15: Đoạn code nào sau đây sẽ hoán vị 2 số a, b?

- A. a=t; b=a; t=b;
- B. t=a; a=b; t=b;
- C. t=a=b;
- D. t=a; a=b; b=t;

> **✅ ĐÁP ÁN ĐÚNG:** `t=a; a=b; b=t;`
> *Giải thích:* Thuật toán hoán vị a và b:

---

#### Câu 16: Chọn câu SAI?

- A. Chỉ số phần tử mảng có thể nhận giá trị kiểu float
- B. Một xâu là một mảng các ký tự
- C. Mảng hai chiều có thể xem như là một mảng của các mảng một chiều
- D. Phần tử mảng có thể nhận kiểu dữ liệu là int, char, float hoặc double

> **✅ ĐÁP ÁN ĐÚNG:** `Chỉ số phần tử mảng có thể nhận giá trị kiểu float`

---

#### Câu 17: Điều gì sẽ quyết định thứ tự thực hiện các phép toán trong biểu thức?

- A. Toán tử
- B. Toán hạng
- C. Biểu thức
- D. Độ ưu tiên tính toán

> **✅ ĐÁP ÁN ĐÚNG:** `Độ ưu tiên tính toán`
> *Giải thích:* Độ ưu tiên tính toán sẽ quyết định thứ tự thực hiện của các phép toán trong biểu thức.

---

#### Câu 18: Trong các biểu hiện dưới đây, biểu hiện nào cho thấy đối tác của bạn KHÔNG sử dụng hình thức đàm phán kiểu cứng?

- A. Tên mảng, không đi kèm với chỉ số, là địa chỉ của mảng
- B. Kiểu chỉ số là kiểu đếm được
- C. Khai báo biến mảng không cần chỉ rõ số phần tử của mảng
- D. Xâu ký tự là mảng các ký tự

> **✅ ĐÁP ÁN ĐÚNG:** `Khai báo biến mảng không cần chỉ rõ số phần tử của mảng`
> *Giải thích:* Mảng là một cấu trúc tĩnh, khi khai báo phải chỉ rõ số phần tử của mảng.

---

#### Câu 19: Chọn phát biểu SAI? Biến toàn cục là biến:

- A. Được khai báo ở ngoài thân hàm
- B. Tồn tại trong suốt thời gian chương trình hoạt động
- C. Được sử dụng ở mọi nơi trong chương trình
- D. Được khai báo ở trong thân hàm

> **✅ ĐÁP ÁN ĐÚNG:** `Được khai báo ở trong thân hàm`
> *Giải thích:* Bạn nên khai báo tất cả các biến toàn cục ở ngay đầu chương trình

---

#### Câu 20: Kết quả của biểu thức sau là bao nhiêu?(10 – (8 – 2)*10)/ ( 5 – 5 *2)

- A. 10
- B. 50
- C. Có lỗi vì chia cho 0
- D. -10

> **✅ ĐÁP ÁN ĐÚNG:** `10`
> *Giải thích:* Kết quả = ( 10 – 60 ) / ( 5 – 10 ) =10

---

#### Câu 21: Biểu thức: 3*(5%4*3)+(31/2&gt;7) cho kết quả bằng bao nhiêu?

- A. 10
- B. 8
- C. 1
- D. 9

> **✅ ĐÁP ÁN ĐÚNG:** `10`
> *Giải thích:* Lần lượt tính các giá trị:

---

#### Câu 22: Kết xuất là bao nhiêu khi đoạn code sau được thực thi?int n=92, m=11, t= --n/m, u= m+n+t;printf("%d",u);

- A. 110
- B. 111
- C. 113
- D. 109

> **✅ ĐÁP ÁN ĐÚNG:** `110`
> *Giải thích:* n = -- 92 = 91

---

#### Câu 23: Chọn phát biểu đúng?

- A. Một biến a được đặc trưng bởi địa chỉ của nó, kí hiệu là *a
- B. &amp;a là kí hiệu giá trị được lưu trữ trong biến a
- C. Tầm vực của một biến bắt đầu từ đầu chương trình
- D. Tầm vực của một biến bắt đầu từ dòng lệnh khai báo biến đến hết khối lệnh chứa biến này

> **✅ ĐÁP ÁN ĐÚNG:** `Tầm vực của một biến bắt đầu từ dòng lệnh khai báo biến đến hết khối lệnh chứa biến này`
> *Giải thích:* Biến a cần được khai báo trước khi sử dụng và:

---

### 🎯 Bài luyện tập 3

#### Câu 24: Hàm nào dưới đây không được dùng để nhập dữ liệu từ bàn phím?

- A. gets
- B. getchar
- C. scanf
- D. printf

> **✅ ĐÁP ÁN ĐÚNG:** `printf`
> *Giải thích:* Một số hàm thông dụng để nhập dữ liệu từ bàn phím là: scanf(), getchar(), gets()

---

#### Câu 25: Khi in dữ liệu ra màn hình, để in dữ liệu trong một trang mới bạn sử dụng chuỗi điều khiển nào dưới đây?

- A. \n
- B. \f
- C. \p
- D. \b

> **✅ ĐÁP ÁN ĐÚNG:** `\f`

---

#### Câu 26: Đoạn chương trình sau in ra màn hình thông tin gì?#include &lt;stdio.h&gt;#include&lt;conio.h&gt;void main(){ int x=5; double y=9.8;   printf(“%d    %5.4f”,x,y);   getch();}

- A. 5   9.80
- B. 5  9.8000
- C. Thông báo lỗi
- D. 5  9.800

> **✅ ĐÁP ÁN ĐÚNG:** `5  9.8000`
> *Giải thích:* Định dạng %5.4f quy định phải có 4 chữ số sau dấu.

---

#### Câu 27: Cho đoạn code sau:khai bao  int m;switch (m){case 1: printf (“so cap ”);case 2: printf (“trung cap ”);default: printf(“cao cap ”);}Với m=2 kết quả xuất ra màn hình sẽ là?

- A. sơ cấp
- B. trung cấp
- C. trung cấp cao cấp
- D. Cao cấp

> **✅ ĐÁP ÁN ĐÚNG:** `trung cấp cao cấp`
> *Giải thích:* giá trị m =2 và không có lệnh break do vậy chương trình sẽ chạy các lệnh tương ứng với m=2 và nhánh default.

---

#### Câu 28: Cho đoạn code sau:if (biểu thức 1) khối lệnh 1;else if (biểu thức 2) khối lệnh 2;.........else if (biểu thức n-1) khối lệnh n-1;else khối lệnh n;Đối với đoạn code trên thì khẳng định nào sau đây là SAI?

- A. Nếu n-1 biểu thức đầu đều có giá trị bằng 0 thì khối lệnh n được thực hiện
- B. Khối lệnh n luôn được thực hiện
- C. Chỉ một trong n khối lệnh trên được thực hiện
- D. Nếu biểu thức thứ i là biểu thức đầu tiên khác 0 (i=1,...,n-1) khối lệnh i được thực hiện

> **✅ ĐÁP ÁN ĐÚNG:** `Khối lệnh n luôn được thực hiện`
> *Giải thích:* Đoạn code trên chính là cấu trúc của toán tử: if....else if...Đối với toán tử này thì chỉ một trong n khối lệnh được thực hiện, nếu biểu thức đầu tiên khác 0 là i (i&lt;n) khối lệnh i được thực hiện, nếu không thì khối lệnh n được thực hiện. Do đó tất cả các khẳng định đều đúng.

---

#### Câu 29: Giá trị của z là bao nhiêu sau khi thực hiện đoạn code sau?int x=3, y, z ;if (x&lt;5) {y=7; z=2;}else z=4;

- A. 2
- B. Thông báo lỗi
- C. 3
- D. 4

> **✅ ĐÁP ÁN ĐÚNG:** `2`
> *Giải thích:* Cấu trúc lệnh điều kiện:

---

#### Câu 30: Cho đoạn lệnh sau:int x=1;switch (x) {case 0: x = 1;case 1: x = 3;case 2: x+=4;case 3: x = 2;default: x += 2;}Giá trị của x sau khi thực hiện là bao nhiêu?

- A. 7
- B. 1
- C. 3
- D. 4

> **✅ ĐÁP ÁN ĐÚNG:** `4`
> *Giải thích:* Do không có lệnh break nên chương trình chạy qua các trường hợp từ case 1 …default

---

#### Câu 31: Cho đoạn lệnh:int n;for (n = 0; n &lt; 25; n++)if (n == 10)continue;elseprintf("%d ", n);Đoạn lệnh trên thực hiện tương đương với đoạn lệnh nào sau đây?

- A. int n = 0;while (n &lt; 25){if (n != 10)printf("%d ", n);n++;}
- B. int n = 0;while (n &lt; 25)switch (++n) {case 10: break;default:printf("%d ", n);}
- C. int n = 0;L1: if (n &gt;= 25) goto L1;if (n != 10) printf("%d ", n);
- D. int n = 0;L1: if (n &gt;= 25) goto L1;

> **✅ ĐÁP ÁN ĐÚNG:** `int n = 0;while (n &lt; 25){if (n != 10)printf("%d ", n);n++;}`

---

#### Câu 32: Đoạn chương trình sau in ra màn hình thông tin gì?#include&lt;stdio.h&gt;#include&lt;conio.h&gt;void main(){int i =10;printf("%o",i);getch();}

- A. 12
- B. 10
- C. 8
- D. 0

> **✅ ĐÁP ÁN ĐÚNG:** `12`
> *Giải thích:* printf("%o",i); kí hiệu %o là để in ra màn hình định dạng số bát phân. Đổi 10 ra hệ bát phân: 10=1*8+2, nên10=12 (hệ 8)

---

#### Câu 33: Đoạn code sau có gây ra lỗi gì?int x=3,y,z ;if (x&lt;5)    y=7;    z=2;else z=4;

- A. Lỗi do sử dụng sai cú pháp lệnh if
- B. Không có lỗi
- C. Lỗi do khai báo biến sai
- D. Lỗi do thiếu dấu chấm phẩy

> **✅ ĐÁP ÁN ĐÚNG:** `Lỗi do sử dụng sai cú pháp lệnh if`
> *Giải thích:* if (biểu thức) lệnh_1 else lệnh_2;

---

#### Câu 34: Đoạn chương trình sau có bao nhiêu lỗi ?#include &lt;stdio.h&gt;void main(){int sum;sum=453+343printf("Ket qua la ", sum);}

- A. 4
- B. 1
- C. 2
- D. 3

> **✅ ĐÁP ÁN ĐÚNG:** `1`
> *Giải thích:* Kết thúc câu lệnh trong C phải có dấu chấm phẩy.

---

#### Câu 35: Các hàm nhập xuất có định dạng là các hàm nào?

- A. printf() và scanf()
- B. puts() và gets()
- C. getchar() và putchar()
- D. sqrt()

> **✅ ĐÁP ÁN ĐÚNG:** `printf() và scanf()`
> *Giải thích:* Để nhập dữ liệu có định dạng ta dùng hàm scanf(). Để nhập dữ liệu có định dạng ta dùng hàm printf ()

---

#### Câu 36: Kết xuất của đoạn code sau là gì? int x = 35;int y = 45;int z;if (x &gt; y) z = x + y;else z = y – x;printf(“%d %d %d”, x, y, z) ;

- A. 35 45 –10
- B. 35 45 80
- C. 35 45 0
- D. 35 45 10

> **✅ ĐÁP ÁN ĐÚNG:** `35 45 10`
> *Giải thích:* Do x &lt; y nên z = y - x = 45 – 35 =10

---

#### Câu 37: Chương trình sau có bao nhiêu lỗi lúc biên dịch?#include &lt;stdio.h&gt;#include &lt;conio.h&gt;void main(){    printf(“%c”,“Hello”);   getch();}

- A. 0
- B. 3
- C. 1
- D. 2

> **✅ ĐÁP ÁN ĐÚNG:** `0`
> *Giải thích:* Mẫu hàm printf:

---

#### Câu 38: int n=3, m=4, k=5;if (m*m &gt;n*k &amp;&amp; 2*m+3*n&gt; 4*k)  m=n=k=0;else m=n=k=1;Sau khi thực thi code trên, trị của biến k và n là bao nhiêu?

- A. k=0 n=0
- B. k=0 n=1
- C. k=1 n=0
- D. k=1 n=1

> **✅ ĐÁP ÁN ĐÚNG:** `k=1 n=1`
> *Giải thích:* Biểu thức điều kiện trong bài là: if ( 16&gt;15 &amp;&amp; 17&gt;20). Biểu thức này sẽ cho giá trị false. Do đó k = n = 1;

---


