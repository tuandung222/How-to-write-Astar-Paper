# Submission checklist

## Những lỗi dẫn tới DESK REJECT (bị loại không cần review)

| Lỗi | Ghi chú |
|---|---|
| **Vượt giới hạn trang** | Kể cả 1 dòng. Chỉ References được vượt (và đôi khi phần ethics/checklist được quy định riêng). |
| **Sửa template** | Margin, font, khoảng cách, cỡ chữ caption… |
| **Lộ danh tính** | Tên/affiliation trong PDF, acknowledgement, link GitHub cá nhân, self-citation kiểu "our previous work [5]"… |
| **Dual submission** | Nộp cùng nội dung (hoặc chồng lấn đáng kể) tới hội nghị/journal khác đang review cùng lúc. |
| **Thiếu abstract registration** | Không đăng ký đúng hạn → không nộp được full paper. |
| **Không tuân thủ nghĩa vụ review** | Ở các năm áp dụng: tác giả đủ điều kiện không đăng ký/không hoàn thành review có thể khiến paper bị loại. |
| **Plagiarism** | Kể cả tự đạo văn từ paper cũ của mình mà không trích dẫn. |
| **Supp chứa thứ không được phép** | Ví dụ thêm kết quả mới sau deadline paper ở dạng sửa paper chính. |

## Ẩn danh (double-blind) — chi tiết

- [ ] Không tên tác giả, affiliation, email trong PDF (template `review` mode đã ẩn — nhưng kiểm tra lại).
- [ ] **Không có Acknowledgements / funding** ở bản nộp.
- [ ] **Self-citation ở ngôi thứ ba:** ✅ *"Nguyen et al. [5] showed…"* — ❌ *"In our previous work [5]…"*. Không được xóa trích dẫn paper cũ của mình (đó cũng là lộ danh tính kiểu khác và thiếu trung thực).
- [ ] Link code/project: dùng dịch vụ ẩn danh (ví dụ **anonymous.4open.science**), hoặc nộp zip; không link GitHub cá nhân.
- [ ] **Metadata PDF** (author field) và metadata của hình PDF nhúng.
- [ ] Ảnh/hình không có logo lab, watermark, tên người.
- [ ] Code: xóa tên, đường dẫn tuyệt đối, `.git`, license có tên.
- [ ] Video supp: không có giọng/khuôn mặt tác giả, không logo.

!!! info "arXiv có được không?"
    CVPR/ICCV/ECCV thường **cho phép** đăng preprint lên arXiv trước/trong khi review (reviewer được hướng dẫn không chủ động tìm danh tính tác giả). Tuy nhiên có thể có quy định về **thời điểm** hoặc **quảng bá trên mạng xã hội** trong giai đoạn review ở một số năm/hội nghị. Đọc kỹ chính sách năm đó. Lưu ý chiến lược: đăng arXiv giúp xác lập ưu tiên, nhưng nếu tên tuổi lab lớn có thể ảnh hưởng tới review — đây là quyết định của nhóm.

## Dual submission & tiền công bố

- Không nộp song song cùng một paper tới hai venue có peer-review.
- **Workshop paper có proceedings** (thường > 4 trang theo định nghĩa của CVPR/ECCV) có thể được tính là công bố trước → không nộp lại nguyên nội dung vào main conference.
- Paper journal đang review trùng nội dung cũng tính là dual submission.
- Thesis, tech report, arXiv thường **không** tính là công bố trước.

## Quy trình trên OpenReview

1. **Tạo profile OpenReview cho mọi tác giả** — từ sớm (duyệt profile mới có thể mất vài ngày đến 2 tuần, nhất là với email không thuộc tổ chức học thuật).
2. Điền **DBLP, Google Scholar, email tổ chức, lịch sử công tác** → dùng để xác định **conflict of interest**.
3. **Abstract registration:** title, abstract, tác giả, subject areas — tác giả thường **không được thêm/bớt sau thời điểm này** ở một số hội nghị.
4. Nộp PDF paper (bản review, có line numbers).
5. Nộp supp (PDF + zip/video).
6. Điền các **checklist/form** bắt buộc (reproducibility, ethics, đăng ký làm reviewer, LLM usage…).
7. **Tải lại PDF đã nộp** từ hệ thống và kiểm tra.

## Final check 24 giờ trước deadline

- [ ] Biên dịch sạch, không `??`, không `[?]`.
- [ ] Đã **tắt mọi comment/todo** (`\commentsfalse`).
- [ ] Số trang đúng giới hạn (đếm trong PDF thật, không tin cảm giác).
- [ ] Mọi con số trong Abstract / Intro **khớp** với bảng.
- [ ] Mọi Figure/Table được tham chiếu, đánh số đúng thứ tự xuất hiện.
- [ ] Không còn "XX", "TBD", "Lorem".
- [ ] References: không trùng, không thiếu venue/năm.
- [ ] Spell check toàn bộ.
- [ ] Đọc lại Title, Abstract, caption Figure 1, contributions **lần cuối, thành tiếng**.
- [ ] PDF đã upload, đã tải về kiểm tra.
- [ ] Ghi lại đầy đủ giờ deadline theo giờ Việt Nam (AoE = UTC−12 → 19:00 ngày hôm sau theo giờ VN).
