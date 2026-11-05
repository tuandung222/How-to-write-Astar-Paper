# Thuật ngữ

Trang này giải thích các thuật ngữ thường gặp khi viết, nộp và review paper ở ba cộng đồng Computer Vision, NLP và Machine Learning. Phần lớn thuật ngữ được giữ nguyên tiếng Anh trong giáo trình, vì đó là cách cộng đồng nghiên cứu, kể cả ở Việt Nam, sử dụng hằng ngày; việc biết chính xác nghĩa của chúng giúp đọc đúng Call for Papers, hướng dẫn tác giả và các review nhận được. Thuật ngữ được nhóm theo chủ đề để dễ tra cứu theo ngữ cảnh: từ quy trình review và các hệ thống nộp bài, qua ý tưởng, lập kế hoạch và thí nghiệm, tới việc dùng AI trong nghiên cứu. Với những khái niệm mà quy định cụ thể thay đổi theo năm (số trang, lịch, thang điểm), định nghĩa ở đây chỉ nêu ý nghĩa chung; chi tiết xem ở các bài tương ứng của Chương 0 và Chương 6. Các thuật ngữ về nghiên cứu được giảng kỹ ở [Chương 1](../01-truoc-khi-viet/index.md), còn các thuật ngữ về AI được giảng ở [Chương 8](../08-ai-cong-su/index.md).

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

## Ý tưởng và lập kế hoạch nghiên cứu

Research gap (khoảng trống nghiên cứu)
:   Câu hỏi hoặc điểm yếu mà các công trình hiện có chưa giải quyết thỏa đáng, và là chỗ đứng của đóng góp mới; xem bài [Tìm khoảng trống và nguồn ý tưởng](../01-truoc-khi-viet/tim-khoang-trong.md).

Novelty
:   Lượng hiểu biết mới mà paper mang lại cho người đọc, có thể nằm ở bài toán, phương pháp, phát hiện hay bằng chứng; không đồng nghĩa với độ phức tạp của phương pháp.

Insight
:   Nhận định then chốt giải thích vì sao bài toán nên được nhìn theo cách mới hoặc vì sao phương pháp hoạt động; thường là hạt nhân của câu chuyện paper.

Contribution và claim
:   Contribution là điều paper đóng góp; mỗi contribution cần được phát biểu thành một claim kiểm chứng được, có thí nghiệm hoặc chứng minh đi kèm.

Bit flip (lật giả định)
:   Cách tìm ý tưởng bằng việc gọi tên một giả định mà lĩnh vực đang ngầm chấp nhận rồi thử đảo ngược nó.

Research taste (gu nghiên cứu)
:   Khả năng phán đoán bài toán nào vừa quan trọng vừa có cách tấn công, được rèn qua kinh nghiệm, đọc nhiều và nhận phản hồi.

Pilot experiment
:   Thí nghiệm thăm dò quy mô nhỏ, chạy nhanh, để xem ý tưởng có tín hiệu hay không trước khi đầu tư lớn; nên có tiêu chí dừng đặt trước.

Heilmeier Catechism
:   Bộ câu hỏi kinh điển để thẩm định một đề xuất nghiên cứu: định làm gì, hiện người ta làm thế nào và giới hạn ở đâu, điều gì mới, ai quan tâm, rủi ro, chi phí, thời gian và cách đo thành công.

Premortem
:   Kỹ thuật giả định rằng dự án đã thất bại rồi liệt kê các nguyên nhân có thể, để phát hiện và giảm rủi ro ngay từ khi lập kế hoạch.

Cổng quyết định (decision gate, go/no-go)
:   Mốc trong kế hoạch mà ở đó kết quả được so với tiêu chí viết sẵn để quyết định đi tiếp, điều chỉnh hay dừng.

Kế hoạch B (fallback plan)
:   Phương án thu hẹp phạm vi hoặc chuyển hướng được chuẩn bị trước, dùng khi giả thuyết chính không đứng vững.

HARKing
:   Viết tắt của *hypothesizing after the results are known*: đặt giả thuyết sau khi đã biết kết quả rồi trình bày như thể giả thuyết có từ trước. Đổi khung câu chuyện sau khi có kết quả là bình thường, miễn là có khai báo phần nào là phân tích khám phá. Trình bày giả thuyết hậu nghiệm như thể nó đã có từ trước thì nằm ở vùng xám tới sai phạm. Xem [Ranh giới trung thực](../07-tinh-huong-kho/ranh-gioi-trung-thuc.md).

Khu vườn rẽ nhánh (garden of forking paths)
:   Hiện tượng do Gelman và Loken mô tả: người nghiên cứu có rất nhiều lựa chọn phân tích (seed, checkpoint, metric, tập con dữ liệu, tiền xử lý), và khi những lựa chọn này phụ thuộc vào dữ liệu đã thấy, kết quả công bố bị thiên lệch ngay cả khi không ai cố ý.

Pre-registration (đăng ký trước)
:   Ghi lại giả thuyết, thiết kế thí nghiệm và tiêu chí đánh giá *trước khi* chạy, để phân biệt kiểm định có xác nhận với phân tích khám phá. Trong ML, CV và NLP, hình thức chính thức chưa phổ biến, nhưng một bản ghi nội bộ có ngày tháng cũng mang lại phần lớn lợi ích.

Salami slicing
:   Cắt một kết quả nghiên cứu thành nhiều paper nhỏ, mỗi paper chỉ mang một phần đóng góp, để tăng số lượng công bố. Bị coi là thực hành xấu và có thể vi phạm quy định về nộp trùng hoặc nộp chồng lấn.

Scooped (bị trùng ý tưởng)
:   Tình huống một nhóm khác công bố công trình rất gần với ý tưởng đang làm, trước khi nhóm tác giả kịp nộp. Khác với concurrent work ở chỗ thường mang nghĩa đã bị vượt trước. Xem Tình huống 24 ở [Áp lực từ bên ngoài](../07-tinh-huong-kho/ap-luc-ben-ngoai.md).

## Thí nghiệm và đánh giá

Baseline
:   Phương pháp được dùng để so sánh với phương pháp đề xuất. Baseline cần mạnh, gần đây và được chạy trong cùng điều kiện.

SOTA (state of the art)
:   Kết quả tốt nhất hiện có trên một benchmark.

Benchmark
:   Bộ dữ liệu cùng giao thức đánh giá chuẩn mà cộng đồng dùng để so sánh các phương pháp.

Ablation study
:   Thí nghiệm bỏ hoặc thay từng thành phần của phương pháp để đo đóng góp của thành phần đó.

Sanity check
:   Phép kiểm tra nhanh để bắt lỗi trước khi tin vào kết quả, ví dụ cho mô hình overfit một batch nhỏ, kiểm tra giá trị loss ban đầu, hay chạy một baseline không nhìn đầu vào.

Scientific, nuisance và fixed hyperparameter
:   Theo Deep Learning Tuning Playbook: scientific là siêu tham số mà thí nghiệm muốn đo tác động; nuisance là siêu tham số phải tinh chỉnh lại cho từng cấu hình để so sánh công bằng (learning rate là ví dụ điển hình); fixed là siêu tham số giữ cố định, kéo theo giới hạn cho kết luận.

Experiment tracking
:   Việc ghi lại có hệ thống config, commit hash, seed, log và kết quả của mỗi run, thường bằng các công cụ chuyên dụng, để có thể tái lập và so sánh; xem bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md).

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

Reality check (paper đánh giá lại)
:   Thể loại paper đánh giá lại một dòng phương pháp trong điều kiện so sánh công bằng, thường cho thấy cải thiện được công bố thu hẹp đáng kể khi baseline được tune kỹ. Ví dụ: *A Metric Learning Reality Check* (ECCV 2020).

Data leakage (rò rỉ dữ liệu)
:   Thông tin từ tập test lọt vào quá trình huấn luyện, chọn mô hình hoặc tiền xử lý, khiến kết quả đẹp hơn thực tế. Dạng phổ biến gần đây là contamination của dữ liệu pre-training.

Winner's curse
:   Thiên lệch khi chọn kết quả tốt nhất trong rất nhiều lần thử: con số được chọn thường cao hơn hiệu năng thật. Tên được dùng trong bài *Winner's Curse? On Pace, Progress, and Empirical Rigor* (Sculley và cộng sự, 2018).

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

General response
:   Phản hồi chung gửi tới mọi reviewer trên OpenReview, dùng cho những điểm nhiều reviewer cùng nêu. Một số hội nghị ML những năm gần đây đã bỏ hoặc giới hạn hình thức này; kiểm tra hướng dẫn rebuttal của năm nộp.

Anonymity period
:   Quy định cũ của ACL cấm đăng hoặc cập nhật preprint trong một khoảng thời gian quanh deadline. ACL đã bãi bỏ quy định này từ đầu năm 2024; bản nộp vẫn phải ẩn danh.

Summary reject
:   Quyết định từ chối sớm, trước hoặc ngay sau vòng review đầu, thường do vi phạm định dạng, ẩn danh hoặc chất lượng quá thấp. Gần nghĩa với desk reject; tên gọi và tiêu chí khác nhau giữa các hội nghị.

Evaluations & Datasets track
:   Tên mới của Datasets & Benchmarks track ở NeurIPS từ năm 2026, dành cho các đóng góp về dataset, benchmark và phương pháp đánh giá.

## AI trong nghiên cứu

Hallucination
:   Hiện tượng mô hình ngôn ngữ sinh ra nội dung nghe hợp lý nhưng sai hoặc bịa, chẳng hạn một trích dẫn không tồn tại hay một con số không có trong nguồn.

Sycophancy
:   Xu hướng mô hình chiều theo ý kiến hoặc kỳ vọng của người dùng thay vì đánh giá độc lập; vì vậy lời khen của AI dành cho một ý tưởng không phải là bằng chứng về giá trị của ý tưởng đó.

Deep research
:   Chế độ của một số trợ lý AI tự tìm kiếm, đọc nhiều nguồn và tổng hợp thành báo cáo; hữu ích để khởi đầu một khảo sát, nhưng mọi nguồn và nhận định trong báo cáo cần được kiểm tra lại.

Coding agent
:   Trợ lý AI có thể tự đọc codebase, sửa nhiều file, chạy lệnh và kiểm thử theo yêu cầu; code nó viết vẫn phải được kiểm tra kỹ như code của một đồng nghiệp mới.

Prompt injection
:   Kiểu tấn công chèn chỉ thị vào dữ liệu mà mô hình hoặc agent xử lý (trang web, tài liệu, ảnh), khiến hệ thống làm theo ý kẻ tấn công; xem [Chương 9](../09-ai-security/index.md).

Khai báo sử dụng AI (AI disclosure)
:   Việc nêu rõ trong paper hoặc trong form nộp bài cách công cụ AI đã được dùng, theo chính sách của từng hội nghị; xem bài [Dùng AI hỗ trợ (đúng luật)](../03-ky-thuat/ai-tools.md).

Bảo mật bài đang review
:   Nghĩa vụ không chia sẻ nội dung bài được giao review ra ngoài; nhiều hội nghị cấm hoặc hạn chế việc đưa nội dung đó vào công cụ AI bên ngoài.

## AI Security

Các thuật ngữ dưới đây được dùng trong [Chương 9](../09-ai-security/index.md).

Threat model
:   Mô tả giả định về kẻ tấn công: biết những gì (white-box hay black-box), làm được gì, muốn đạt mục tiêu gì. Mọi claim trong paper bảo mật đều được đọc qua threat model.

White-box / black-box
:   Kẻ tấn công có (white-box) hoặc không có (black-box) quyền truy cập trọng số và gradient của mô hình.

Prompt injection
:   Chèn chỉ dẫn vào đầu vào của hệ thống dựa trên LLM để nó làm điều người dùng hoặc nhà phát triển không muốn. *Trực tiếp* khi kẻ tấn công là người nhập prompt. *Gián tiếp* khi chỉ dẫn nằm trong dữ liệu bên ngoài mà hệ thống đọc vào, như trang web, tài liệu hay hình ảnh.

Jailbreak
:   Làm cho mô hình đã được căn chỉnh an toàn (aligned) tạo ra nội dung mà nó được huấn luyện để từ chối.

Attack surface
:   Tập hợp các đường mà kẻ tấn công có thể tác động vào hệ thống. Ví dụ: văn bản, ảnh, giao diện web mà agent nhìn thấy.

ASR (attack success rate)
:   Tỉ lệ tấn công thành công. Luôn cần được báo cáo cùng định nghĩa thế nào là thành công.

Utility under attack
:   Độ hữu ích của hệ thống khi đang bị tấn công hoặc khi phòng vệ được bật. Đi cặp với ASR để tránh phòng vệ "an toàn" bằng cách làm hệ thống vô dụng.

Adaptive attack
:   Tấn công được thiết kế khi đã biết phòng vệ. Một phòng vệ thuyết phục phải được đánh giá với tấn công thích nghi, không chỉ tấn công cố định.

Red teaming
:   Chủ động thử tấn công hệ thống do chính nhóm xây dựng để tìm lỗ hổng trước khi công bố hoặc triển khai.

Responsible disclosure
:   Thông báo lỗ hổng cho bên bị ảnh hưởng và cho họ thời gian khắc phục trước khi công bố chi tiết.

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
