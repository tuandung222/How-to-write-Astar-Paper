# Đọc & lập bản đồ literature

Mục tiêu không phải "đọc nhiều", mà là **biết chính xác paper của mình nằm ở đâu** trên bản đồ, và **ai sẽ là reviewer** (thường chính là tác giả các paper bạn trích dẫn).

## Phương pháp đọc 3 lượt (Keshav, "How to Read a Paper")

| Lượt | Thời gian | Đọc gì | Mục tiêu |
|---|---|---|---|
| 1 | 5–10 phút | Title, abstract, intro, headings, figures, conclusion | Phân loại: liên quan? kiểu đóng góp? có cần đọc tiếp? |
| 2 | ~1 giờ | Toàn bộ, bỏ qua chứng minh/chi tiết | Hiểu ý chính, ghi chú phương pháp, kết quả, điểm yếu |
| 3 | vài giờ | "Tái hiện" trong đầu, đọc code | Chỉ cho 5–10 paper **cốt lõi** nhất của bạn |

!!! tip "Đọc như người viết, không chỉ như người học"
    Với mỗi paper tốt, ghi thêm: *Họ mở đầu Intro thế nào? Figure 1 truyền đạt điều gì? Đoạn contributions viết ra sao? Họ phòng thủ điểm yếu nào bằng thí nghiệm nào?* Đây là cách nhanh nhất để học văn phong.

## Công cụ

- **Tìm kiếm:** Google Scholar (alert theo từ khóa + theo tác giả chủ chốt), Semantic Scholar, arXiv (`cs.CV` listing hằng ngày), Papers with Code (leaderboard), Connected Papers / ResearchRabbit (đồ thị trích dẫn), Hugging Face Daily Papers.
- **Quản lý:** Zotero (miễn phí, có plugin Better BibTeX xuất `.bib` tự động) hoặc Paperpile/Mendeley.
- **Ghi chú:** Một bảng (Notion/Sheet/Obsidian) — xem template bên dưới.

## Bảng literature (template)

| Paper | Năm/Venue | Bài toán | Ý tưởng chính (1 câu) | Giả định / hạn chế | Kết quả trên benchmark X | Code? | Liên quan tới mình |
|---|---|---|---|---|---|---|---|
| ... | CVPR'25 | ... | ... | Cần camera pose | 45.2 mAP | ✓ | Baseline chính |

Bảng này sẽ trở thành:

- **Related Work** (gom theo cột "Ý tưởng chính").
- **Bảng so sánh tính chất** (kiểu: "phương pháp nào không cần pose / chạy real-time / ...") — rất hay xuất hiện trong paper CV.
- **Danh sách baseline** cho Experiments.

## Bản đồ vị trí (positioning map)

Vẽ ra giấy 2 trục quan trọng nhất của bài toán (ví dụ: *độ chính xác* vs *tốc độ*, hay *cần supervision* vs *không*, *2D* vs *3D*), đặt các phương pháp hiện có lên đó. **Paper của bạn phải chiếm một vị trí trống có ý nghĩa.**

```
          Độ chính xác cao
                 ↑
        [A]      |      [B]
                 |
 Chậm  ←---------+---------→  Nhanh
                 |
        [C]      |     ★ Của bạn?  ← (phải lên được góc trên-phải,
                 |                    hoặc giải thích tại sao góc này quan trọng)
                 ↓
          Độ chính xác thấp
```

## Bao nhiêu trích dẫn là đủ?

Paper CVPR điển hình có **40–80 references**. Ít hơn ~30 thường bị cho là "chưa khảo sát đủ". Quan trọng hơn số lượng:

- **Phải có** các paper SOTA 12 tháng gần nhất trong đúng bài toán.
- **Phải có** paper gốc (seminal) của các kỹ thuật bạn dùng.
- **Nên có** paper từ mảng lân cận nếu ý tưởng của bạn tương tự.
- Trích dẫn **bản đã công bố** (CVPR 2025) thay vì bản arXiv nếu có.

!!! danger "Đừng 'bỏ quên' paper gần nhất với bạn"
    Cố tình không trích dẫn paper tương tự để trông "mới" hơn là chiến lược tệ nhất: xác suất cao reviewer *chính là tác giả* của paper đó. Hãy trích dẫn và **nói rõ khác biệt** một cách tôn trọng.
