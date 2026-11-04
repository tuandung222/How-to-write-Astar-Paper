# Camera-ready, poster, code

## Camera-ready

Sau khi accept, bạn có vài tuần để nộp bản cuối.

- [ ] Chuyển template sang chế độ **final** (`\usepackage{cvpr}` thay vì `[review]`): hiện tên tác giả, bỏ line numbers.
- [ ] Thêm **tác giả, affiliation, email**, ký hiệu đóng góp ngang nhau (\*) nếu có.
- [ ] Thêm **Acknowledgements** (funding, GPU grant…).
- [ ] **Thực hiện mọi thay đổi đã hứa trong rebuttal** và điểm hợp lý từ review/meta-review. AC/PC có thể kiểm tra.
- [ ] Thay link ẩn danh bằng link thật (project page, GitHub).
- [ ] Giới hạn trang camera-ready (thường được thêm hoặc không — CVPR có năm cho phép thêm trang; kiểm tra).
- [ ] Ký **copyright form** (IEEE cho CVPR/ICCV; Springer cho ECCV).
- [ ] Kiểm tra PDF theo yêu cầu (IEEE PDF eXpress với CVPR/ICCV ở một số năm; font nhúng…).
- [ ] Ít nhất một tác giả **đăng ký hội nghị** (thường bắt buộc để paper được đưa vào proceedings).
- [ ] Cập nhật arXiv với bản camera-ready, ghi chú "Accepted to CVPR 20XX".

## Poster

- Kích thước theo hướng dẫn hội nghị (thường khổ lớn, ngang — kiểm tra kích thước bảng poster năm đó).
- **Không phải paper thu nhỏ.** Người xem đứng cách 2m và dành 30 giây quyết định có dừng lại.
- Cấu trúc: Title lớn + tác giả/logo · **Vấn đề (1 hình)** · **Insight (1 câu to)** · Phương pháp (Figure 2) · Kết quả chính (1 bảng/biểu đồ nổi bật) · QR code tới paper/code.
- Chuẩn bị **pitch 30 giây** và **giải thích 3 phút**.

## Oral / Highlight / Video

- Nếu được oral: luyện talk nhiều lần, đúng thời gian (thường rất ngắn, ~5–10 phút). Một ý chính, nhiều hình, ít chữ.
- Nhiều năm hội nghị yêu cầu **video thuyết trình ngắn** cho mọi paper — làm sớm.

## Code release & project page

Paper CV có code công khai được trích dẫn nhiều hơn đáng kể. Chuẩn bị:

- **README** rõ ràng: cài đặt, tải dữ liệu, tải checkpoint, lệnh train/eval tái hiện **từng con số trong Table 1**.
- `requirements.txt` / `environment.yml` với phiên bản cụ thể.
- Checkpoint (Hugging Face Hub, Google Drive…).
- **License** (MIT/Apache-2.0 phổ biến; kiểm tra license của code/dữ liệu bạn dùng).
- **Project page** (GitHub Pages — template phổ biến như "Nerfies" style): teaser video, abstract, BibTeX, link.
- Demo (Hugging Face Spaces / Gradio) nếu có thể — tăng lan tỏa rất nhiều.

## Quảng bá

- Thread ngắn trên X/LinkedIn/Bluesky với teaser figure/video.
- Gửi tới các nhóm/blog liên quan, đăng lên Papers with Code.
- Viết blog tiếng Việt giải thích paper — tốt cho cộng đồng và cho bạn.
