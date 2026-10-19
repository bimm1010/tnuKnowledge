# 📚 Kho Tri Thức & Ngân Hàng Đề Thi eTNU (Đại học Thái Nguyên)

Kho tài liệu, đề cương, giáo trình và ngân hàng câu hỏi trắc nghiệm chính thức của eTNU, tự động đồng bộ và bóc tách dữ liệu để phục vụ học tập và tra cứu thi cử.

---

## ⚡ Hướng dẫn sử dụng trên máy bên ngoài (Remote / Local)

### 1. Kéo dữ liệu mới nhất về máy của bạn
Mỗi khi có slide/tài liệu mới hoặc câu hỏi mới được giải, hệ thống từ máy chủ sẽ tự động commit và đẩy lên GitHub. Trên máy của bạn, chỉ cần chạy:

```bash
git pull origin main
```

---

### 2. Tra cứu đáp án siêu tốc (Offline trên máy của bạn)
Bạn có thể tra cứu tức thì mọi câu hỏi trắc nghiệm hoặc kiến thức trong giáo trình mà **không cần phụ thuộc vào mạng hay đường truyền remote**:

```bash
node quick_search.js "<từ khóa câu hỏi>"
```

**Ví dụ:**
```bash
node quick_search.js "phân công trách nhiệm cá nhân"
```
➡️ Kết quả trả về trong **0.05 giây** kèm phương án đúng và căn cứ bài học!

---

## 🛠️ Cấu trúc thư mục
- `etnu_full_qa_database.json`: Ngân hàng câu hỏi trắc nghiệm & đáp án chính thức 100%.
- `etnu_knowledge_index.json`: Chỉ mục phân đoạn (chunks) toàn bộ giáo trình text.
- `A000200_Nhập_môn_Internet_và_E_Learning/`: Môn Nhập môn Internet & E-Learning.
  - `tailieu/`: File PDF gốc của nhà trường.
  - `giao_trinh_text/`: File văn bản trích xuất sạch dùng tra cứu nhanh.
- `A066101_Phát_triển_kỹ_năng_cá_nhân/`: Môn Phát triển kỹ năng cá nhân.
  - `tailieu/`: File PDF gốc.
  - `giao_trinh_text/`: File văn bản trích xuất sạch.
- `auto_git_sync.js`: Script tự động commit & đẩy lên GitHub khi có tài liệu mới.
- `quick_search.js`: Công cụ tra cứu siêu tốc.
