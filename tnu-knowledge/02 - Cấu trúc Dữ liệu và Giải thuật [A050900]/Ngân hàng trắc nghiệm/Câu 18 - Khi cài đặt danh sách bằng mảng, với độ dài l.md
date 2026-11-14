---
title: "Cấu trúc Dữ liệu và Giải thuật - Câu 18"
course: "Cấu trúc Dữ liệu và Giải thuật"
code: "A050900"
questionId: "Câu 18"
correctAnswer: "O(n)."
tags:
  - qa
  - A050900
---

# ❓ Cấu trúc Dữ liệu và Giải thuật [A050900] - Câu 18

#### Câu 18: Khi cài đặt danh sách bằng mảng, với độ dài là n thì thao tác chèn một phần tử vào danh sách có độ phức tạp:

- A. O(n).
- B. O(n.log2(n)).
- C. O(n2).
- D. O(2n).

> **✅ ĐÁP ÁN ĐÚNG:** `O(n).`
> *Giải thích:* Chỉ cần thực hiện một vòng lặp. Để thực hiện thao tác chèn vào vị trí thứ p, ta phải dịch chuyển các phần tử từ thứ p đến n của mảng sang vị trí mới lần lượt từ thứ p + 1 đến thứ n + 1, sau đó mới chèn phần tử cần chèn vào vị trí thứ p.
> *Căn cứ:* Giáo trình Cấu trúc dữ liệu và giải thuật, bài 2, mục 2.2 Biểu diễn danh sách bằng mảng

---

---

## 🔗 Liên kết liên quan
- Môn học: [[00 - Tổng quan lý thuyết môn A050900]]
- MOC Trung tâm: [[00 - MỤC LỤC TRA CỨU TOÀN DIỆN]]
