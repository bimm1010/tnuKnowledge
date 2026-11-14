---
title: "Cấu trúc Dữ liệu và Giải thuật - Câu 15"
course: "Cấu trúc Dữ liệu và Giải thuật"
code: "A050900"
questionId: "Câu 15"
correctAnswer: "Duyệt qua các nút trong danh sách và hiển thị nội dung của mỗi nút"
tags:
  - qa
  - A050900
---

# ❓ Cấu trúc Dữ liệu và Giải thuật [A050900] - Câu 15

#### Câu 15: Với cấu trúc dữ liệu như sautypedef struct DNode{int Key;DNode * NextNode;DNode * PreNode;} DOneNode;typedef DOneNode * DPointerType;typedef struct DLLPairNode{DPointerType  DLLFirst;DPointerType  DLLLast;} DLLPType;Hãy cho biết hàm sau dùng để làm gì?void DLLTravelling (DLLPType DList){DPointerType CurrNode = DList.DLLFirst;while (CurrNode != NULL){cout &lt;&lt; CurrNode-&gt;Key;CurrNode =  CurrNode-&gt;NextNode ;}return;}

- A. Xoá một phần tử khỏi danh sách
- B. Duyệt qua các nút trong danh sách và hiển thị nội dung của mỗi nút
- C. Duyệt danh sách
- D. Thêm một phần tử vào danh sách

> **✅ ĐÁP ÁN ĐÚNG:** `Duyệt qua các nút trong danh sách và hiển thị nội dung của mỗi nút`
> *Căn cứ:* Giáo trình CTDL&amp;GT, Bài 2, mục 2.3. Danh sách liên kết

---

---

## 🔗 Liên kết liên quan
- Môn học: [[00 - Tổng quan lý thuyết môn A050900]]
- MOC Trung tâm: [[00 - MỤC LỤC TRA CỨU TOÀN DIỆN]]
