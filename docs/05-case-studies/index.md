# 5. Case studies: mổ xẻ paper kinh điển

Học viết tốt nhất là **đọc paper giỏi với con mắt của người viết**. Mỗi case study phân tích *cách* paper được xây dựng — câu chuyện, cấu trúc, figure, thí nghiệm — chứ không chỉ *nội dung* kỹ thuật.

| Paper | Venue | Kiểu đóng góp | Bài học viết chính |
|---|---|---|---|
| [ResNet](resnet.md) | CVPR 2016 (Best Paper) | Kiến trúc mới | Biến một **quan sát** thành động lực; thí nghiệm "loại trừ giả thuyết" |
| [Mask R-CNN](mask-rcnn.md) | ICCV 2017 (Marr Prize) | Mở rộng đơn giản, tổng quát | Viết về sự **đơn giản**; ablation dạng bảng con |
| [NeRF](nerf.md) | ECCV 2020 (Best Paper Honorable Mention) | Biểu diễn mới | Contributions rõ ràng; ablation từng thành phần; teaser + video |
| [MAE](mae-ldm.md#mae) | CVPR 2022 | Paradigm pre-training | Intro dẫn dắt bằng **câu hỏi**; phân tích "vì sao vision khác language" |
| [Latent Diffusion](mae-ldm.md#ldm) | CVPR 2022 | Framework hiệu quả | Insight từ **phân tích rate–distortion**; một framework, nhiều tác vụ |
| [Segment Anything](sam-controlnet.md#sam) | ICCV 2023 | Task + model + data | Cấu trúc 3 trụ; đánh giá zero-shot diện rộng; Responsible AI |
| [ControlNet](sam-controlnet.md#controlnet) | ICCV 2023 (Marr Prize) | Kiến trúc điều khiển | Một ý tưởng nhỏ (zero conv) được động lực hóa rõ; showcase trực quan |
| [Thực hành từ con số 0](worked-example.md) | — | — | Áp dụng toàn bộ khóa học cho một paper giả định |

!!! note "Về trích dẫn nội dung"
    Các phân tích dưới đây **diễn giải** cấu trúc và lập luận của paper gốc, không chép nguyên văn. Hãy mở bản PDF gốc (CVF Open Access / arXiv) để đọc song song.

## Bài tập chung cho mỗi case study

1. Đọc Abstract — viết lại câu chuyện một dòng.
2. Nhìn Figure 1 — thông điệp là gì? Có khớp Abstract không?
3. Đánh dấu 6 đoạn của Intro theo khuôn ở [Introduction](../02-viet-tung-phan/introduction.md).
4. Với mỗi contribution: bằng chứng ở bảng/hình nào?
5. Tìm một thí nghiệm "phòng thủ" — trả lời trước một phản biện có thể có.
