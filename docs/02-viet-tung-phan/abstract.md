# Abstract

Abstract là **toàn bộ câu chuyện trong 150–250 từ**. Reviewer bid dựa trên Title + Abstract, và hình thành ấn tượng đầu tiên ở đây.

## Cấu trúc 5–6 câu (khuôn vàng)

| # | Vai trò | Mẫu câu tiếng Anh |
|---|---|---|
| 1 | **Bối cảnh & vấn đề** | *"[Task] is fundamental to [application], yet remains challenging when [condition]."* |
| 2 | **Khoảng trống** (hạn chế phương pháp hiện có) | *"Existing methods typically rely on [assumption], which [fails / is costly] in [setting]."* |
| 3 | **Insight / ý tưởng chính** | *"Our key insight is that [observation]."* / *"We observe that…"* |
| 4 | **Phương pháp** | *"Based on this, we propose [Name], a [type of method] that [does what] by [how]."* (+ 1 câu chi tiết nếu cần) |
| 5 | **Kết quả** (định lượng) | *"[Name] achieves [number] on [benchmark], outperforming prior art by [margin], while being [N×] faster."* |
| 6 | (Tùy chọn) **Tác động / code** | *"Code and models are available at [anonymous link]."* |

## Ví dụ phân tích: Abstract kiểu ResNet

Abstract ResNet (CVPR 2016) đi theo trình tự: *mạng sâu khó huấn luyện* (vấn đề) → *chúng tôi trình bày framework residual learning để dễ huấn luyện mạng sâu hơn nhiều* (giải pháp) → *reformulate các layer thành học hàm dư thay vì hàm không tham chiếu* (ý tưởng cụ thể) → *bằng chứng thực nghiệm toàn diện: dễ tối ưu hơn, sâu hơn thì chính xác hơn* → *con số: mạng 152 layer, ensemble đạt 3.57% top-5 error trên ImageNet, thắng ILSVRC 2015* → *tổng quát hóa: cải thiện 28% tương đối trên COCO detection, thắng nhiều track.*

Nhận xét: **mọi câu đều mang thông tin**, có con số cụ thể, có chứng cứ tổng quát hóa sang tác vụ khác.

## Ví dụ: viết lại một abstract yếu

<div class="bad" markdown>

**❌ Bản yếu:** *"In recent years, deep learning has achieved great success in computer vision. 3D object detection is an important task. However, it is still challenging. In this paper, we propose a novel framework called DepthX. Our method contains several novel modules. Extensive experiments on several datasets show that our method achieves state-of-the-art performance."*

Vấn đề: câu 1 vô nghĩa (ai cũng biết), "challenging" không nói *tại sao*, "novel" × 2 mà không nói mới ở đâu, không có insight, không có con số.

</div>

<div class="good" markdown>

**✅ Bản tốt:** *"Monocular 3D object detection is attractive for low-cost autonomous driving, but its accuracy degrades sharply for distant objects. Through a systematic error analysis, we find that over 60% of errors for objects beyond 40m stem from depth estimation rather than classification or localization in the image plane. Motivated by this, we propose DepthX, which treats depth as a per-object distribution and refines it with geometric constraints from object height priors. DepthX is plug-and-play and adds less than 3% latency. On KITTI and nuScenes, it improves the strongest monocular baselines by +2.0 and +1.6 AP overall, and by +6.1 AP for objects beyond 40m."*

</div>

## Checklist Abstract

- [ ] Không bắt đầu bằng câu sáo rỗng ("Deep learning has achieved…").
- [ ] Nói rõ **tại sao** bài toán khó, không chỉ "challenging".
- [ ] Có **insight** hoặc lý do tại sao phương pháp hoạt động.
- [ ] Có **ít nhất 1–2 con số** cụ thể.
- [ ] Dùng **thuật ngữ nhất quán** với Intro và Title.
- [ ] Không có citation, không ký hiệu toán phức tạp, không viết tắt chưa định nghĩa.
- [ ] Abstract trên OpenReview **khớp** với abstract trong PDF (cả hai đều đọc được bởi reviewer).
- [ ] Không vượt giới hạn ký tự của hệ thống (OpenReview thường giới hạn số ký tự).
