# Tài nguyên

Trang này tập hợp các nguồn đọc thêm và công cụ hữu ích cho người viết paper ở cả ba cộng đồng. Danh sách được chọn lọc theo hướng ít mà chất: mỗi mục kèm một câu mô tả vì sao nó đáng đọc và nên đọc khi nào. Phần lớn các bài viết và bài giảng dưới đây có thể tìm thấy dễ dàng bằng cách tìm theo tên bài và tên tác giả; đường dẫn cụ thể có thể thay đổi theo thời gian, nên trang này chỉ ghi tên miền ổn định của các trang chính thức. Với các hướng dẫn chính thức của hội nghị, cần đọc lại phiên bản của đúng năm nộp, vì quy định thay đổi hằng năm.

Trang này có một trang anh em là [Lời khuyên từ các nhà nghiên cứu hàng đầu](loi-khuyen.md), và hai trang được chia vai rõ ràng. Trang Tài nguyên nghiêng về *viết paper và công cụ*: bài viết về cách viết, sách về văn phong, hướng dẫn chính thức của hội nghị và phần mềm hỗ trợ. Trang Lời khuyên nghiêng về *nghề nghiên cứu*: chọn bài toán, rèn gu nghiên cứu, cách làm việc hằng ngày để có kết quả đáng viết, với phần giảng giải và nguồn gốc của từng lời khuyên. Một vài bài viết, như hướng dẫn nghiên cứu sinh của Karpathy hay bài của Steinhardt về thứ tự giảm rủi ro, chạm tới cả hai mảng; ở trang này chúng chỉ được giới thiệu ngắn, còn phần phân tích sâu hơn nằm ở các bài tương ứng của Chương 1 và, khi phù hợp, ở trang Lời khuyên.

## Bài viết và bài giảng kinh điển về viết paper

### Viết paper nói chung

- **Simon Peyton Jones**, *How to write a great research paper* (bài giảng, Microsoft Research). Bài giảng ngắn và rất dễ nhớ, với các ý chính: viết sớm như một phần của nghiên cứu, mỗi paper truyền đạt một ý tưởng rõ ràng, nêu contributions ngay ở trang đầu, và dẫn người đọc qua ví dụ trước khi tổng quát hóa. Nên xem trước khi bắt đầu viết paper đầu tiên.
- **Jennifer Widom**, *Tips for Writing Technical Papers* (Stanford). Hướng dẫn ngắn gọn về cấu trúc paper, nổi tiếng với gợi ý xây dựng Introduction quanh một chuỗi câu hỏi: vấn đề là gì, vì sao nó quan trọng, vì sao nó khó, vì sao chưa ai giải được, và đâu là thành phần chính của cách tiếp cận cùng kết quả. Hữu ích khi viết dàn ý Introduction.
- **Jason Eisner**, trang *Advice for Research Students* (Johns Hopkins University). Tập hợp nhiều bài ngắn của một nhà nghiên cứu NLP về đọc paper, viết paper và đời sống nghiên cứu sinh. Phù hợp để đọc dần trong suốt quá trình làm nghiên cứu.

### Computer Vision

- **Bill Freeman**, *How to write a good CVPR submission* (slide, MIT). Nguồn gốc của nhiều lời khuyên trong giáo trình này, đặc biệt về cách reviewer đọc paper, vai trò của Figure 1 và việc paper cần truyền đạt một thông điệp đơn giản. Nên đọc trước khi viết paper CV đầu tiên.
- **Devi Parikh**, loạt bài trên Medium về nghiên cứu và viết paper, trong đó có bài *How we write rebuttals*. Bài về rebuttal mô tả một quy trình viết rebuttal có hệ thống, từ phân loại ý kiến reviewer đến soạn và rà soát câu trả lời. Nên đọc ngay khi nhận được review.

### Machine Learning

- **Zachary C. Lipton và Jacob Steinhardt**, *Troubling Trends in Machine Learning Scholarship* (2018). Phân tích bốn xu hướng đáng lo trong các paper ML: không phân biệt giải thích với suy đoán, không xác định đúng nguồn gốc của cải thiện thực nghiệm, mathiness, và dùng ngôn ngữ thiếu chính xác. Nên đọc trước khi viết phần phân tích và trước khi tự review bản thảo, để tránh overclaim.
- **Jacob Steinhardt**, *Research as a Stochastic Decision Process* (bài blog). Bàn về cách sắp xếp thứ tự các bước trong một dự án nghiên cứu để phát hiện thất bại sớm và giảm rủi ro. Hữu ích ở giai đoạn thẩm định ý tưởng và lập kế hoạch; bài [Lập kế hoạch nghiên cứu](../01-truoc-khi-viet/ke-hoach.md) áp dụng ý tưởng này vào việc xếp thứ tự thí nghiệm.
- **Peter Henderson và cộng sự**, *Deep Reinforcement Learning that Matters* (AAAI 2018). Cho thấy kết quả học tăng cường có thể thay đổi đáng kể theo random seed và chi tiết cài đặt. Là một lập luận thuyết phục cho việc chạy nhiều seed và báo cáo error bars ở mọi lĩnh vực.
- **Joelle Pineau và cộng sự**, *Improving Reproducibility in Machine Learning Research (A Report from the NeurIPS 2019 Reproducibility Program)* (JMLR 2021). Báo cáo về chương trình tái lập của NeurIPS, giúp hiểu nguồn gốc và tinh thần của các checklist tái lập ngày nay.

### NLP

- **Emily M. Bender và Batya Friedman**, *Data Statements for Natural Language Processing* (TACL 2018). Đề xuất một khuôn mô tả dữ liệu ngôn ngữ (ai tạo ra, ngôn ngữ và biến thể nào, ai gán nhãn…). Nên đọc khi xây dựng hoặc sử dụng một dataset.
- **Emily M. Bender**, *The #BenderRule: On Naming the Languages We Study and Why It Matters* (The Gradient, 2019). Giải thích vì sao luôn cần gọi tên ngôn ngữ được nghiên cứu, kể cả tiếng Anh. Ngắn và ảnh hưởng trực tiếp tới cách viết claim.
- **Rotem Dror và cộng sự**, *The Hitchhiker's Guide to Testing Statistical Significance in Natural Language Processing* (ACL 2018). Hướng dẫn chọn và báo cáo kiểm định thống kê phù hợp cho các metric NLP. Nên đọc khi thiết kế Section thực nghiệm.
- **ARR Reviewer Guidelines** (trên trang aclrollingreview.org). Hướng dẫn chính thức cho reviewer của ARR, bao gồm cách đánh giá từng loại đóng góp và những kiểu nhận xét bị coi là thiếu căn cứ. Đọc để biết bài sẽ được chấm theo tiêu chí nào.

### Tài liệu hóa dữ liệu và mô hình (chung cho ba cộng đồng)

- **Timnit Gebru và cộng sự**, *Datasheets for Datasets* (Communications of the ACM, 2021; bản arXiv từ 2018). Bộ câu hỏi tài liệu hóa dataset theo động cơ, thành phần, quy trình thu thập, mục đích sử dụng và bảo trì. Được dùng rộng rãi trong các paper dataset, kể cả ở Datasets & Benchmarks track.
- **Margaret Mitchell và cộng sự**, *Model Cards for Model Reporting* (FAT\* 2019). Khuôn tài liệu hóa mô hình đã huấn luyện, bao gồm mục đích sử dụng, đánh giá theo nhóm và hạn chế. Hữu ích khi công bố mô hình kèm paper.

### Đọc paper và đời sống nghiên cứu

Hai mục dưới đây là điểm khởi đầu. Kỹ năng đọc được giảng đầy đủ ở hai bài [Đọc và lập bản đồ tài liệu](../01-truoc-khi-viet/literature.md) và [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md); các bài viết về đời sống và nghề nghiên cứu được tập hợp ở trang [Lời khuyên từ các nhà nghiên cứu hàng đầu](loi-khuyen.md).

- **S. Keshav**, *How to Read a Paper* (ACM SIGCOMM Computer Communication Review, 2007). Phương pháp đọc paper ba lượt, từ lướt nhanh để nắm cấu trúc đến đọc sâu để tái hiện lập luận. Rất hữu ích khi lập bản đồ tài liệu ở Chương 1.
- **Andrej Karpathy**, *A Survival Guide to a PhD* (bài blog, 2016). Chia sẻ kinh nghiệm về chọn đề tài, viết paper, trình bày và đời sống nghiên cứu sinh. Phù hợp với nghiên cứu sinh năm đầu.

## Sách

- *The Craft of Research*, Wayne C. Booth, Gregory G. Colomb, Joseph M. Williams (các ấn bản sau có thêm đồng tác giả). Cuốn sách nền tảng về cách xây dựng một lập luận nghiên cứu: từ câu hỏi, claim, bằng chứng đến việc lường trước phản biện. Đặc biệt hữu ích cho bài [Xây "câu chuyện" của paper](../01-truoc-khi-viet/cau-chuyen.md) ở Chương 1.
- *Style: Lessons in Clarity and Grace*, Joseph M. Williams (các ấn bản sau có Joseph Bizup). Dạy cách viết câu rõ ràng: đặt nhân vật làm chủ ngữ, hành động làm động từ, thông tin cũ trước thông tin mới. Là cuốn nên đọc nhất để cải thiện văn phong tiếng Anh học thuật.
- *Writing Science*, Joshua Schimel. Tiếp cận việc viết khoa học như kể chuyện, với cấu trúc mở đầu, xung đột và giải quyết. Hữu ích khi viết Abstract và Introduction.
- *The Elements of Style*, William Strunk Jr. và E. B. White. Cuốn sách ngắn, cổ điển về các quy tắc viết tiếng Anh súc tích. Nên đọc như một tài liệu nhập môn, kết hợp với cuốn của Williams.

## Hướng dẫn chính thức

Đọc hướng dẫn chính thức của hội nghị là việc bắt buộc mỗi lần nộp. Bên cạnh Call for Papers và Author Guidelines, các trang này thường có Reviewer Guidelines, Code of Ethics, chính sách về LLM và dual submission, cùng author kit LaTeX.

| Cộng đồng | Trang chính thức | Nên đọc |
|---|---|---|
| Computer Vision | `cvpr.thecvf.com`, `iccv.thecvf.com` | Author Guidelines, Reviewer Guidelines, Author Kit, chính sách supplementary và rebuttal |
| Computer Vision | `eccv.ecva.net` | Hướng dẫn định dạng LNCS, chính sách nộp bài |
| Computer Vision | `openaccess.thecvf.com` | Kho paper CVPR, ICCV và nhiều workshop để đọc học văn phong |
| Machine Learning | `neurips.cc` | Call for Papers, Paper Checklist, Datasets & Benchmarks track, chính sách LLM |
| Machine Learning | `icml.cc`, `iclr.cc` | Call for Papers, Author Guide, các statement yêu cầu |
| Machine Learning | `openreview.net` | Bài nộp, review và thảo luận công khai (đặc biệt của ICLR) |
| Machine Learning | `jmlr.org` | Hướng dẫn tác giả của JMLR và TMLR |
| NLP | `aclrollingreview.org` | Call for Papers, Responsible NLP Checklist, Reviewer Guidelines, quy trình resubmission |
| NLP | `aclweb.org` | Thông tin về ACL, các hội nghị, chính sách chung, template |
| NLP | `aclanthology.org` | Kho toàn bộ paper ACL kèm BibTeX chuẩn |

!!! tip "Đọc Reviewer Guidelines"
    Hướng dẫn dành cho reviewer là cách nhanh nhất để biết bài nộp sẽ được chấm theo tiêu chí gì, và những lời phê bình nào bị hội nghị coi là thiếu căn cứ. Đọc tài liệu này trước khi viết bản thảo đầy đủ, và một lần nữa trước khi viết rebuttal.

## Công cụ

| Mục đích | Công cụ |
|---|---|
| Viết LaTeX cộng tác | Overleaf |
| Quản lý tài liệu tham khảo | Zotero kèm Better BibTeX, Paperpile |
| BibTeX chuẩn | DBLP, ACL Anthology (cho NLP), Google Scholar (cần kiểm tra lại) |
| Tìm paper | Google Scholar, Semantic Scholar, arXiv, ACL Anthology, Connected Papers, Hugging Face Papers |
| Đọc review công khai | OpenReview |
| Theo dõi thí nghiệm | Weights & Biases, MLflow, TensorBoard (cách tổ chức xem bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md)) |
| Vẽ sơ đồ | PowerPoint hoặc Keynote, Figma, draw.io, Inkscape, TikZ |
| Biểu đồ | matplotlib, seaborn, pgfplots |
| Ngữ pháp | Grammarly, LanguageTool, LLM (xem [chính sách](../03-ky-thuat/ai-tools.md)) |
| Trợ lý AI cho đọc tài liệu, lập trình, thực nghiệm | Xem [Chương 8. AI làm cộng sự nghiên cứu](../08-ai-cong-su/index.md) về cách dùng, giới hạn và rủi ro |
| So sánh phiên bản bản thảo | latexdiff |
| Ẩn danh code | anonymous.4open.science |
| Hạn nộp | aideadlin.es (AI Conference Deadlines) và phiên bản trên Hugging Face Spaces (`huggingface/ai-deadlines`); luôn đối chiếu với trang chính thức |
| Thống kê tỉ lệ accept | Các repo tổng hợp trên GitHub (ví dụ "Conference-Acceptance-Rate") |

## Đóng góp cho tài liệu này

Giáo trình được phát triển công khai tại repo [tuandung222/How-to-write-Astar-Paper](https://github.com/tuandung222/How-to-write-Astar-Paper), và mọi đóng góp đều được hoan nghênh: sửa lỗi chính tả, cập nhật quy định đã thay đổi của hội nghị, bổ sung ví dụ cho một cộng đồng còn ít ví dụ, hay đề xuất một case study mới. Cách đóng góp là sửa các file Markdown trong thư mục `docs/` rồi mở một Pull Request; site và bản PDF được tự động build bằng GitHub Actions, nên có thể kiểm tra kết quả ngay trong Pull Request. Khi viết nội dung mới, nên giữ giọng văn giáo trình của các chương hiện có: văn xuôi giảng giải là chính, giải thích lý do trước khi đưa lời khuyên, có ví dụ minh họa, cân bằng giữa ba cộng đồng, và ghi rõ những con số chỉ mang tính điển hình. Với các thông tin về quy định của hội nghị, nên kèm nguồn chính thức trong mô tả Pull Request để việc rà soát được nhanh chóng.
