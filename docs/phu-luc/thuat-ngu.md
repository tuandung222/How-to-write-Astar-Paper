# Thuật ngữ

Trang này giải thích các thuật ngữ thường gặp khi viết, nộp và review paper ở ba cộng đồng Computer Vision, NLP và Machine Learning. Phần lớn thuật ngữ được giữ nguyên tiếng Anh trong giáo trình, vì đó là cách cộng đồng nghiên cứu, kể cả ở Việt Nam, sử dụng hằng ngày; việc biết chính xác nghĩa của chúng giúp đọc đúng Call for Papers, hướng dẫn tác giả và các review nhận được. Thuật ngữ được nhóm theo chủ đề để dễ tra cứu theo ngữ cảnh. Với những khái niệm mà quy định cụ thể thay đổi theo năm (số trang, lịch, thang điểm), định nghĩa ở đây chỉ nêu ý nghĩa chung; chi tiết xem ở các bài tương ứng của Chương 0 và Chương 6.

## Quy trình review và các vai trò

Reviewer
:   Nhà nghiên cứu được giao đọc và đánh giá bài nộp, thường là nghiên cứu sinh, postdoc hoặc nhà nghiên cứu trong lĩnh vực. Mỗi bài thường có ba đến năm reviewer.

AC (Area Chair)
:   Người phụ trách một nhóm bài nộp trong một lĩnh vực: chọn hoặc xác nhận reviewer, theo dõi thảo luận, tổng hợp các đánh giá và đề xuất quyết định. AC viết meta-review.

SAC (Senior Area Chair)
:   Người giám sát nhiều AC. Trong hệ thống ARR, SAC của hội nghị mà bài được commit tới đóng vai trò quan trọng trong quyết định cuối cùng.

PC (Program Chairs)
:   Ban chủ tịch chương trình của hội nghị, chịu trách nhiệm về chính sách và quyết định cuối cùng.

Meta-review
:   Văn bản đánh giá tổng hợp do AC viết, tóm tắt điểm mạnh, điểm yếu, kết quả thảo luận và đề xuất quyết định. Trong ARR, meta-review đi theo bài khi bài được commit tới hội nghị.

Meta-reviewer
:   Người viết meta-review, thường chính là AC. Trong ARR, author response nên được viết sao cho meta-reviewer dễ dàng thấy các mối lo chính đã được giải quyết.

Bidding
:   Giai đoạn reviewer chọn những bài muốn review dựa trên title và abstract. Đây là một lý do khiến title và abstract cần nêu rõ chủ đề và từ khóa của bài.

Double-blind review
:   Hình thức review trong đó reviewer không biết tác giả là ai và tác giả không biết reviewer. Đây là chuẩn ở phần lớn hội nghị A\* trong cả ba cộng đồng; ICLR vẫn là double-blind dù bài nộp và review được công khai.

Single-blind review
:   Hình thức review trong đó reviewer biết tác giả nhưng tác giả không biết reviewer. Một số journal và một số track đặc biệt từng dùng hình thức này.

Desk reject
:   Bài bị loại mà không qua review, thường do sai định dạng, vượt giới hạn trang, lộ danh tính tác giả, thiếu các mục bắt buộc (như Limitations ở ARR hay checklist ở NeurIPS), hoặc vi phạm chính sách dual submission.

Lọc sớm (phase 1 rejection, summary reject)
:   Giai đoạn loại bớt bài nộp sau một vòng đánh giá nhanh, trước khi bài nhận đủ review và có cơ hội phản hồi. AAAI và IJCAI là các ví dụ những năm gần đây.

Rebuttal / author response
:   Phản hồi của tác giả đối với review, nhằm làm rõ hiểu lầm, bổ sung bằng chứng và cam kết thay đổi. Hình thức khác nhau giữa các cộng đồng: một trang PDF ở nhiều hội nghị CV, văn bản trên OpenReview ở ML và NLP.

OpenReview
:   Nền tảng trực tuyến để nộp bài, review và thảo luận, được nhiều hội nghị CV, ML và hệ thống ARR sử dụng. Tùy hội nghị, các thành phần như review và thảo luận có thể được công khai.

OpenReview discussion
:   Giai đoạn trao đổi nhiều vòng giữa tác giả, reviewer và AC trên OpenReview, kéo dài từ một đến vài tuần. Ở ICLR, thảo luận diễn ra công khai và tác giả có thể tải lên bản PDF đã sửa.

Reciprocal reviewing
:   Chính sách yêu cầu tác giả đủ điều kiện của bài nộp tham gia review cho hội nghị. Nhiều hội nghị lớn ở cả ba cộng đồng áp dụng chính sách này những năm gần đây, với chế tài cụ thể khác nhau.

## Hệ thống ARR và cộng đồng NLP

ARR (ACL Rolling Review)
:   Hệ thống review chung của các hội nghị lớn thuộc ACL như ACL, EMNLP, NAACL, EACL. Tác giả nộp bài vào một chu kỳ, nhận review và meta-review, rồi chọn hội nghị để commit.

Chu kỳ ARR (cycle)
:   Một đợt nhận bài và review của ARR. Mỗi năm có vài chu kỳ; mỗi hội nghị chấp nhận commit từ những chu kỳ nhất định.

Commitment
:   Bước tác giả chuyển bài cùng các review và meta-review đã nhận từ ARR tới một hội nghị cụ thể. Ban tổ chức hội nghị đó đưa ra quyết định accept vào main conference, vào Findings, hoặc từ chối.

Findings
:   Tuyển tập (proceedings) đi kèm các hội nghị như ACL, EMNLP, NAACL, dành cho những bài vững vàng về kỹ thuật nhưng không được chọn vào main conference. Findings được đưa vào ACL Anthology.

Resubmission và revision notes
:   Việc nộp lại một bài vào chu kỳ ARR sau, kèm liên kết tới lần nộp trước và văn bản revision notes giải thích những thay đổi đã thực hiện để đáp ứng review cũ.

Long paper / short paper
:   Hai độ dài bài chính ở các hội nghị ACL. Short paper không phải là long paper bị nén lại, mà là bài có một đóng góp tập trung với bằng chứng gọn.

Limitations section
:   Mục bắt buộc ở các hội nghị dùng ARR, đặt sau phần kết luận và trước tài liệu tham khảo, thảo luận các hạn chế của nghiên cứu. Thiếu mục này có thể bị desk reject.

Responsible NLP Checklist
:   Bộ câu hỏi bắt buộc của ARR về hạn chế và rủi ro, tài sản khoa học (dataset, mô hình, phần mềm), thí nghiệm tính toán, người gán nhãn và người tham gia nghiên cứu, và việc dùng trợ lý AI. Câu trả lời trỏ tới các section của bài.

Ethics statement
:   Đoạn thảo luận về các vấn đề đạo đức của nghiên cứu. Ở ARR là tùy chọn nhưng được khuyến khích khi có rủi ro; ở một số hội nghị ML được khuyến khích hoặc yêu cầu dưới tên gọi khác.

ACL Anthology
:   Kho lưu trữ mở toàn bộ bài của các hội nghị và journal thuộc ACL, kèm BibTeX chuẩn. Là nguồn chính để tìm và trích dẫn tài liệu NLP.

## Hội nghị ML và journal

NeurIPS Paper Checklist
:   Bộ câu hỏi bắt buộc của NeurIPS về claims, limitations, giả định và chứng minh, khả năng tái lập, dữ liệu và code, chi tiết thí nghiệm, ý nghĩa thống kê, tài nguyên tính toán, đạo đức, tác động xã hội, biện pháp bảo vệ, license, tài sản mới, nghiên cứu có con người tham gia và việc sử dụng LLM. Những năm gần đây được đặt ở cuối PDF; thiếu checklist có thể bị desk reject.

Impact statement / broader impacts
:   Đoạn thảo luận về tác động xã hội tích cực và tiêu cực của nghiên cứu. ICML những năm gần đây yêu cầu impact statement ở cuối bài; NeurIPS hỏi về broader impacts trong checklist.

Datasets & Benchmarks track
:   Track của NeurIPS dành cho đóng góp mà giá trị chính nằm ở dataset, benchmark hay công cụ đánh giá. Có yêu cầu riêng về tài liệu hóa, license và khả năng truy cập dữ liệu.

TMLR (Transactions on Machine Learning Research)
:   Journal về học máy ra đời năm 2022, review trên OpenReview và nhận bài liên tục. Tiêu chí chấp nhận tập trung vào việc claim có được hỗ trợ bởi bằng chứng chính xác, rõ ràng và có được một bộ phận cộng đồng quan tâm hay không.

JMLR (Journal of Machine Learning Research)
:   Journal truy cập mở lâu đời về học máy, phù hợp với công trình dài và kỹ lưỡng, đặc biệt là công trình lý thuyết.

TACL (Transactions of the ACL)
:   Journal của ACL với độ dài bài gần với paper hội nghị; bài được chấp nhận thường có cơ hội trình bày tại các hội nghị ACL.

Bản mở rộng journal (journal extension)
:   Phiên bản journal của một paper hội nghị, cần có nội dung mới đáng kể (thường được nhắc tới ở mức khoảng 30%, tùy chính sách từng journal) và phải trích dẫn bản hội nghị.

Response letter
:   Văn bản tác giả gửi kèm bản thảo sửa cho journal, trả lời từng nhận xét của reviewer và chỉ rõ vị trí thay đổi trong bản thảo.

Major revision / minor revision
:   Hai mức quyết định trung gian của journal: sửa lớn (thường được review lại đầy đủ) và sửa nhỏ (thường chỉ cần kiểm tra các thay đổi).

## Kết quả và hình thức trình bày

Camera-ready
:   Bản cuối cùng của bài sau khi được chấp nhận, có tên tác giả và acknowledgments, được đưa vào proceedings.

Oral / Spotlight / Highlight / Poster
:   Các hình thức trình bày bài được chấp nhận. Oral là chọn lọc nhất. Spotlight (ở NeurIPS, ICML, ICLR) và Highlight (ở CVPR) là mức ghi nhận giữa oral và poster; tên gọi và hình thức cụ thể thay đổi theo hội nghị và năm.

Proceedings
:   Tuyển tập chính thức các bài được chấp nhận của một hội nghị.

Supplementary material (supp)
:   Tài liệu bổ sung nộp kèm bài, có thể gồm PDF, video, code. Ở nhiều hội nghị CV, supp là file riêng nộp cùng hoặc ngay sau bài chính.

Appendix
:   Phần phụ lục đặt sau tài liệu tham khảo trong cùng file PDF, chứa chứng minh, chi tiết thí nghiệm và kết quả bổ sung. Phổ biến ở hội nghị ML và NLP. Reviewer không bắt buộc đọc appendix, nên phần chính phải tự đủ cho claim chính.

Teaser figure
:   Hình đầu tiên (Figure 1), đặt ở trang đầu, truyền đạt thông điệp chính của bài. Đặc biệt quan trọng ở CV.

Workshop (archival / non-archival)
:   Hội thảo nhỏ đi kèm hội nghị lớn. Workshop có proceedings chính thức (archival) có thể được coi là đã công bố, ảnh hưởng tới việc nộp bản đầy đủ sau đó; workshop không lưu trữ (non-archival) thường không gặp vấn đề này.

Preprint
:   Bản bài báo được công bố công khai (thường trên arXiv) trước hoặc trong khi được review. Mỗi hội nghị có chính sách riêng về preprint và ẩn danh.

## Thí nghiệm và đánh giá

Baseline
:   Phương pháp được dùng để so sánh với phương pháp đề xuất. Baseline cần mạnh, gần đây và được chạy trong cùng điều kiện.

SOTA (state of the art)
:   Kết quả tốt nhất hiện có trên một benchmark.

Benchmark
:   Bộ dữ liệu cùng giao thức đánh giá chuẩn mà cộng đồng dùng để so sánh các phương pháp.

Ablation study
:   Thí nghiệm bỏ hoặc thay từng thành phần của phương pháp để đo đóng góp của thành phần đó.

Toy experiment
:   Thí nghiệm trên bối cảnh đơn giản hóa có chủ đích (thường là dữ liệu tổng hợp), nơi ground truth được biết và có thể thay đổi từng yếu tố một, nhằm cô lập cơ chế mà paper khẳng định. Đặc biệt được coi trọng ở hội nghị ML.

Random seed
:   Giá trị khởi tạo của bộ sinh số ngẫu nhiên, quyết định khởi tạo mô hình, thứ tự dữ liệu và các yếu tố ngẫu nhiên khác. Chạy nhiều seed giúp ước lượng độ dao động của kết quả.

Error bars
:   Biểu diễn độ không chắc chắn của kết quả trên bảng hoặc hình, ví dụ độ lệch chuẩn qua các seed, sai số chuẩn của trung bình hay khoảng tin cậy 95%. Cần nói rõ error bars biểu diễn đại lượng nào và tính qua bao nhiêu lần chạy.

Kiểm định ý nghĩa thống kê (significance test)
:   Phép kiểm định xem khác biệt giữa hai hệ thống có thể giải thích bằng ngẫu nhiên hay không, ví dụ paired bootstrap hay permutation test. Được kỳ vọng nhiều ở NLP khi khác biệt nhỏ.

Out-of-distribution (OOD)
:   Dữ liệu có phân phối khác với dữ liệu huấn luyện. Đánh giá OOD giúp kiểm tra độ vững của phương pháp.

Contamination (nhiễm dữ liệu)
:   Hiện tượng dữ liệu kiểm tra của một benchmark đã xuất hiện trong dữ liệu huấn luyện của mô hình, khiến điểm số phản ánh khả năng ghi nhớ thay vì khả năng tổng quát. Là câu hỏi mặc định khi đánh giá LLM trên benchmark công khai.

Prompt sensitivity
:   Mức độ kết quả của LLM thay đổi theo cách diễn đạt prompt, định dạng hay thứ tự ví dụ few-shot. Báo cáo kết quả trên nhiều prompt giúp kết luận đáng tin hơn.

LLM-as-a-judge
:   Việc dùng LLM để chấm điểm đầu ra của các hệ thống. Cần kiểm chứng độ đồng thuận với người chấm và lưu ý các thiên lệch như ưu tiên vị trí hay ưu tiên câu trả lời dài.

Human evaluation
:   Đánh giá do con người thực hiện, thường dùng cho tác vụ sinh văn bản hoặc sinh ảnh. Cần một giao thức được báo cáo đầy đủ: người đánh giá, hướng dẫn, thiết kế, trả công, độ đồng thuận và kiểm định thống kê.

Inter-annotator agreement (IAA)
:   Mức độ đồng thuận giữa các người gán nhãn hoặc người chấm, đo bằng các chỉ số như Cohen's κ (hai người), Fleiss' κ (nhiều người, số lượng cố định mỗi mục) hay Krippendorff's α (linh hoạt, xử lý được dữ liệu thiếu và thang thứ bậc).

## Nộp bài và chính sách

Abstract registration
:   Bước đăng ký title, abstract và tác giả trước hạn nộp bài đầy đủ, thường khoảng một tuần. Không đăng ký đúng hạn có thể mất quyền nộp bài.

Ẩn danh (anonymity)
:   Yêu cầu bản nộp không tiết lộ danh tính tác giả: không tên, không acknowledgments, tự trích dẫn ở ngôi thứ ba, link code và project page ẩn danh, metadata của file sạch.

Conflict of interest
:   Quan hệ (cùng cơ quan, hợp tác gần đây, quan hệ hướng dẫn…) khiến một người không được review bài của người khác. Tác giả cần khai báo đầy đủ trên hệ thống nộp bài.

Dual submission
:   Việc nộp cùng một nội dung, hoặc nội dung về cơ bản giống nhau, tới hai nơi có quy trình bình duyệt trong cùng khoảng thời gian. Bị cấm ở hầu hết hội nghị và journal; viết lại framing không làm thay đổi bản chất này.

Concurrent work
:   Công trình tương tự được công bố trong cùng khoảng thời gian với bài nộp. Thường không bắt buộc so sánh thực nghiệm, nhưng nên được nhắc tới; mỗi hội nghị có quy định riêng về mốc thời gian.

AoE (Anywhere on Earth)
:   Múi giờ UTC−12, thường dùng cho hạn nộp. Hạn 23:59 AoE tương ứng khoảng 19:00 ngày hôm sau theo giờ Việt Nam (UTC+7).

## Ngôn ngữ phê bình thường gặp trong review

Incremental
:   Lời phê bình cho rằng đóng góp nhỏ, chỉ cải tiến ít so với công trình trước mà không có hiểu biết mới.

Overclaim
:   Khẳng định vượt quá những gì bằng chứng trong paper hỗ trợ, ví dụ tuyên bố một phương pháp "general" khi chỉ thử trên một benchmark.

Mathiness
:   Việc dùng toán học để tạo vẻ sâu sắc thay vì để làm rõ, ví dụ những định lý không liên quan tới phương pháp hay thí nghiệm. Thuật ngữ được phổ biến qua bài viết của Lipton và Steinhardt về các xu hướng đáng lo trong học thuật ML.

"More suitable for [venue]"
:   Lời nhận xét cho rằng đóng góp chủ yếu có giá trị trong một lĩnh vực chuyên ngành và phù hợp hơn với hội nghị khác. Thường gặp ở hội nghị ML đối với bài có framing quanh một tác vụ cụ thể.

Without bells and whistles
:   Cụm từ tác giả dùng để nhấn mạnh rằng kết quả đạt được mà không cần các mẹo phụ (ensemble, test-time augmentation…), qua đó nhấn mạnh tính đơn giản của phương pháp.

Plug-and-play
:   Thành phần có thể gắn vào nhiều phương pháp khác mà không cần sửa đổi lớn.
