# Dùng AI hỗ trợ viết (đúng luật)

LLM (ChatGPT, Claude, Gemini…) là công cụ mạnh cho người viết không phải bản ngữ — nhưng có **luật** và có **bẫy**.

## Chính sách của hội nghị (nguyên tắc chung)

Chính sách cụ thể khác nhau theo năm, nhưng các hội nghị CV/ML gần đây có điểm chung:

- **LLM không được đứng tên tác giả.** Tác giả chịu **toàn bộ trách nhiệm** về nội dung, kể cả lỗi và đạo văn do công cụ sinh ra.
- **Chỉnh sửa ngôn ngữ (grammar, wording)** bằng công cụ thường được chấp nhận.
- Dùng LLM ở mức **đóng góp nội dung/phương pháp** có thể cần **khai báo** (tùy hội nghị — ví dụ NeurIPS/ICLR có yêu cầu mô tả việc dùng LLM nếu nó quan trọng với phương pháp hoặc đóng góp đáng kể vào nghiên cứu/viết).
- **Reviewer bị cấm** đưa paper đang review vào LLM bên ngoài (vi phạm bảo mật). Điều này áp dụng cho bạn khi **bạn** đi review.

!!! warning "Luôn đọc chính sách LLM của đúng hội nghị, đúng năm"
    Chính sách thay đổi nhanh. Một số năm có hội nghị còn phát hiện và xử lý "prompt injection ẩn" trong PDF nhằm thao túng reviewer dùng AI — đây là vi phạm đạo đức nghiêm trọng, đừng bao giờ làm.

## Dùng thế nào cho hiệu quả và an toàn

### ✅ Nên

- **Sửa ngữ pháp, mạo từ, làm câu gọn hơn** — sau khi bạn đã viết ý của mình.
- **Gợi ý cách diễn đạt khác** cho một câu bạn thấy vụng; bạn chọn và chỉnh.
- **Đóng vai reviewer**: "Đọc Introduction này như một reviewer CVPR khó tính, liệt kê 5 điểm yếu."
- **Kiểm tra nhất quán**: "Liệt kê mọi thuật ngữ được dùng để chỉ cùng một khái niệm trong đoạn này."
- **Hỗ trợ LaTeX**: sửa lỗi biên dịch, viết bảng, macro.
- **Dịch nháp** ý tưởng từ tiếng Việt sang tiếng Anh, rồi bạn viết lại bằng giọng của mình.

### ❌ Không nên

- Để LLM **viết toàn bộ** phần nào đó: văn bản chung chung, đầy "delve", "crucial", "landscape", "seamlessly" — reviewer nhận ra ngay và đánh giá thấp.
- Để LLM **sinh trích dẫn**: nó có thể bịa paper không tồn tại. **Mọi** reference phải được kiểm tra trên Google Scholar/DBLP.
- Để LLM **tóm tắt paper khác** rồi đưa vào Related Work mà không tự đọc.
- Đưa **dữ liệu mật / paper chưa công bố của người khác** (ví dụ paper bạn đang review) vào công cụ bên ngoài.
- Để LLM "**làm đẹp**" con số hay diễn giải kết quả vượt quá bằng chứng.

## Prompt mẫu

```text
Bạn là reviewer có kinh nghiệm của CVPR. Dưới đây là phần Introduction
của tôi. Hãy:
1. Tóm tắt lại câu chuyện của paper trong 3 câu (để tôi kiểm tra
   bạn có hiểu đúng không).
2. Liệt kê các claim, và với mỗi claim, chỉ ra liệu Intro đã nêu
   bằng chứng/tham chiếu tới thí nghiệm chưa.
3. Liệt kê 5 điểm yếu có thể khiến bạn cho điểm thấp.
4. Chỉ ra các câu mơ hồ hoặc overclaim.
KHÔNG viết lại đoạn văn của tôi.

[dán Intro]
```

```text
Sửa ngữ pháp và mạo từ cho đoạn sau. Giữ nguyên nội dung, thuật ngữ
và cấu trúc câu càng nhiều càng tốt. Liệt kê từng thay đổi kèm lý do
để tôi học.

[dán đoạn văn]
```

Yêu cầu "liệt kê thay đổi kèm lý do" biến công cụ thành **thầy dạy tiếng Anh** — sau vài paper, bạn sẽ ít cần nó hơn.
