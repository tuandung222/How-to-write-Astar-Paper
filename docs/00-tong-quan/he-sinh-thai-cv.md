# Hệ sinh thái CVPR / ICCV / ECCV

## Ba "đại hội" của Computer Vision

| | **CVPR** | **ICCV** | **ECCV** |
|---|---|---|---|
| Tên đầy đủ | IEEE/CVF Conference on Computer Vision and Pattern Recognition | IEEE/CVF International Conference on Computer Vision | European Conference on Computer Vision |
| Tần suất | Hằng năm | **Năm lẻ** (2023, 2025, 2027…) | **Năm chẵn** (2022, 2024, 2026…) |
| Deadline (điển hình) | Đầu–giữa **tháng 11** năm trước | Đầu **tháng 3** | Đầu **tháng 3** |
| Diễn ra | **Tháng 6** | Tháng 10 | Tháng 9–10 |
| Template | CVPR LaTeX (2 cột, IEEE-style) | Giống CVPR | **Springer LNCS** (1 cột) |
| Giới hạn trang (điển hình) | **8 trang** nội dung, không tính references | 8 trang, không tính references | **14 trang** LNCS, không tính references |
| Hệ thống nộp | OpenReview (những năm gần đây) | OpenReview | OpenReview |
| Tỉ lệ accept (gần đây) | ~22–26% | ~25–27% | ~25–28% |
| Số submission | > 10.000 (2024–2025: ~11–13k) | ~8–11k | ~8–9k |

!!! warning "Con số chỉ mang tính tham khảo"
    Deadline, số trang, hệ thống nộp có thể thay đổi. Luôn kiểm tra trang chính thức (`cvpr.thecvf.com`, `iccv.thecvf.com`, `eccv.ecva.net`) của năm bạn nộp.

### Hệ quả thực tế cho người viết

- **Ba hội nghị gần như "tương đương nhau" về uy tín.** ICCV/ECCV đôi khi được xem là ngang hoặc nhỉnh hơn CVPR một chút về độ chọn lọc, nhưng với hội đồng đánh giá ở Việt Nam thì cả ba đều là A\*.
- **Vòng lặp nộp lại tự nhiên:** bị reject ở CVPR (kết quả ~cuối tháng 2) → sửa và nộp **ICCV/ECCV** (deadline tháng 3) → nếu tiếp tục reject (kết quả ~tháng 6–7) → nộp **CVPR** năm sau (tháng 11), hoặc rẽ sang NeurIPS (tháng 5), WACV, BMVC, AAAI (tháng 8). Hiểu vòng này giúp bạn bình tĩnh khi bị reject.
- **Chuyển template CVPR ↔ ECCV tốn công thật sự**: 8 trang 2 cột ≈ 14 trang LNCS 1 cột về lượng chữ, nhưng hình và bảng phải bố trí lại hoàn toàn. Dự trù 2–3 ngày.

## Các loại bài & track

- **Main conference paper** — cái bạn nhắm tới. Sau khi accept sẽ được phân loại **poster / highlight / oral** (oral thường chỉ ~3–4% submission; "highlight" ~10% số paper accept tùy năm).
- **Workshop paper** — nộp cho các workshop đi kèm hội nghị (deadline thường tháng 3 với CVPR). Dễ hơn nhiều, **không** được tính là A\* main track. Lưu ý: workshop paper > 4 trang có proceedings có thể bị coi là *đã công bố* → ảnh hưởng dual submission. Nhiều workshop có track "non-archival" để tránh vấn đề này.
- **Challenge report / tech report** — không phải paper peer-reviewed chính thức.

## Đề tài nào đang được accept nhiều?

Danh sách subject area của CVPR (tham khảo, thay đổi theo năm) gồm hàng chục mảng, ví dụ: 3D from multi-view and sensors; Image and video synthesis and generation; Vision, language, and reasoning; Representation learning; Recognition: categorization, detection, retrieval; Low-level vision; Autonomous driving; Medical and biological vision; Efficient and scalable vision; Transparency, fairness, privacy, ethics…

Hai lời khuyên:

1. **Chọn subject area chính xác khi submit** — nó quyết định reviewer là ai. Chọn sai = reviewer không đúng chuyên môn = review ngẫu nhiên.
2. **Mảng "nóng" (generation, VLM, 3DGS…) cạnh tranh khốc liệt và lỗi thời nhanh**; mảng "ít người" (ví dụ một bài toán ứng dụng cụ thể có benchmark tốt) có thể dễ tạo khác biệt hơn — miễn là bạn thuyết phục được tầm quan trọng.

## CVF Open Access — kho học liệu miễn phí của bạn

Toàn bộ paper CVPR/ICCV (và nhiều workshop) có ở **openaccess.thecvf.com**; ECCV có ở **ecva.net** và Springer. Đây là nơi bạn sẽ "luyện đọc" để học văn phong. Mẹo:

- Mỗi năm chọn **10 paper oral/award candidate** trong mảng của bạn, đọc và ghi chú *cấu trúc* (không chỉ nội dung).
- Đọc cả **supplementary** — nhiều thứ "giấu" trong supp mới là thứ thuyết phục reviewer.
