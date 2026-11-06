# Viết cho ACL / EMNLP / NAACL

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Giải thích vì sao cộng đồng NLP coi trọng độ vững của đánh giá hơn một con số SOTA, và điều chỉnh cách trình bày bằng chứng cho phù hợp.
    - Chọn đúng loại paper (long hay short, phương pháp, tài nguyên, phân tích, tái lập, quan điểm) và viết theo kỳ vọng của từng loại.
    - Viết phần Limitations bắt buộc và trả lời Responsible NLP Checklist một cách nghiêm túc, có trỏ tới nội dung trong paper.
    - Thiết kế và báo cáo human evaluation có giao thức rõ ràng, cũng như đánh giá LLM có tính đến contamination và độ nhạy với prompt.
    - Viết author response hướng tới meta-reviewer của ARR và viết revision notes khi nộp lại.

Các hội nghị lớn của Association for Computational Linguistics (ACL, EMNLP, NAACL, EACL, AACL) dùng chung hệ thống **ACL Rolling Review (ARR)**. Tóm tắt ngắn gọn: tác giả nộp bài vào một chu kỳ ARR, nhận review và một meta-review, rồi quyết định "commit" bài cùng các đánh giá đó tới một hội nghị cụ thể; ban tổ chức hội nghị quyết định accept vào main conference, vào Findings, hoặc từ chối. Nếu kết quả chưa như ý, tác giả có thể sửa và nộp lại ở chu kỳ sau. Cơ chế chi tiết, thang điểm và các mốc thời gian đã được trình bày ở bài [Hệ sinh thái NLP](../00-tong-quan/he-sinh-thai-nlp.md) của Chương 0. Bài này tập trung vào câu hỏi: trong khuôn khổ đó, viết thế nào để thuyết phục reviewer và meta-reviewer NLP.

Khẩu vị của cộng đồng NLP được hình thành phần lớn từ kinh nghiệm của chính cộng đồng. Nhiều lần trong lịch sử gần đây, những mô hình đạt kết quả rất cao trên benchmark hóa ra khai thác các quy luật bề mặt trong dữ liệu thay vì thực sự hiểu ngôn ngữ; một ví dụ được biết đến rộng rãi là các nghiên cứu năm 2018 cho thấy trên một số bộ dữ liệu suy luận ngôn ngữ tự nhiên (NLI), mô hình chỉ nhìn vào câu giả thuyết, không cần câu tiền đề, vẫn đạt độ chính xác cao hơn hẳn mức ngẫu nhiên. Sau những bài học như vậy, reviewer NLP có xu hướng hoài nghi với một con số đơn lẻ và đặt câu hỏi về độ vững của kết luận. Paper [CheckList (ACL 2020)](../05-case-studies/checklist-acl2020.md) trong Chương 5 là một ví dụ điển hình về cách cộng đồng này đánh giá cao những đóng góp giúp đo lường đúng hơn.

## Khẩu vị của cộng đồng NLP

### Đánh giá kỹ hơn là thắng benchmark

Với reviewer NLP, câu hỏi "phương pháp có tốt hơn không" luôn đi kèm câu hỏi "tốt hơn theo nghĩa nào, và kết luận đó có đứng vững không". Một paper thắng baseline 0,8 điểm trên một bộ dữ liệu sẽ bị hỏi về độ dao động giữa các lần chạy, về kiểm định ý nghĩa thống kê, về việc kết quả có lặp lại trên bộ dữ liệu thứ hai hay trên một tập kiểm tra ngoài phân phối hay không. Vì vậy, một Section thực nghiệm được coi là chắc chắn ở ACL thường có nhiều bộ dữ liệu thuộc các tác vụ hoặc domain khác nhau; có baseline mạnh nhất gần đây và cả baseline đơn giản (vì nhiều cải thiện biến mất khi so với một baseline đơn giản được tinh chỉnh kỹ); có kết quả trung bình qua nhiều seed kèm độ lệch chuẩn; và có kiểm định thống kê phù hợp, chẳng hạn paired bootstrap hoặc permutation test, khi khác biệt nhỏ.

Điều này không có nghĩa paper NLP cần thí nghiệm nhiều gấp đôi paper CV. Nó có nghĩa thí nghiệm cần được chọn để trả lời câu hỏi về *độ vững*: một bộ dữ liệu ngoài phân phối hay một tập thử thách (challenge set) nhắm đúng điểm yếu của baseline thường thuyết phục hơn ba bộ dữ liệu cùng loại.

### Phân tích ngôn ngữ và ví dụ cụ thể

Trong CV, hình định tính giúp reviewer *nhìn thấy* khác biệt. Trong NLP, vai trò đó thuộc về bảng ví dụ và phân tích lỗi. Một phân tích lỗi tốt không phải là vài ví dụ đẹp được chọn tay, mà là một quy trình: lấy mẫu ngẫu nhiên một số lượng lỗi nhất định, xây dựng phân loại lỗi (error taxonomy), đếm tần suất mỗi loại, và minh họa mỗi loại bằng một ví dụ. Người viết nên nói rõ cách lấy mẫu, vì reviewer có kinh nghiệm luôn nghi ngờ ví dụ được chọn lọc.

| Loại lỗi | Tỉ lệ (trên 100 lỗi lấy mẫu) | Ví dụ minh họa |
|---|---|---|
| Phủ định bị bỏ qua | 31% | *"The film was not at all boring"* bị dự đoán là tiêu cực |
| Tham chiếu xa | 24% | Đại từ ở câu thứ ba trỏ về thực thể ở câu đầu |
| Kiến thức nền | 18% | Cần biết một sự kiện ngoài văn bản để trả lời |
| Nhãn sai trong dữ liệu | 12% | Nhãn gốc mâu thuẫn với nội dung |
| Khác | 15% | |

Bảng trên (số liệu chỉ để minh họa) cho thấy một phân tích có giá trị vì nó *định lượng* các loại lỗi, gắn với *hiện tượng ngôn ngữ* cụ thể, và gợi ý hướng cải thiện. Hàng "nhãn sai trong dữ liệu" cũng quan trọng: thừa nhận rằng một phần lỗi đến từ dữ liệu là một dấu hiệu của phân tích trung thực.

### Đa ngôn ngữ và ngôn ngữ ít tài nguyên

Cộng đồng NLP ngày càng ý thức rằng phần lớn nghiên cứu tập trung vào tiếng Anh, trong khi thế giới có hàng nghìn ngôn ngữ với đặc điểm rất khác nhau. Một nguyên tắc được nhắc đến nhiều là "Bender Rule", theo tên nhà ngôn ngữ học Emily M. Bender: luôn *gọi tên* ngôn ngữ mà nghiên cứu làm việc với, kể cả khi đó là tiếng Anh. Nguyên tắc này nghe đơn giản nhưng có hệ quả lớn cho cách viết claim: một paper chỉ thí nghiệm trên tiếng Anh nên nói "improves question answering in English" thay vì "improves question answering", và nên thảo luận trong Limitations về khả năng kết quả không chuyển sang được ngôn ngữ khác.

Đánh giá đa ngôn ngữ không bắt buộc với mọi paper, nhưng là một điểm cộng rõ rệt, và với những claim về "hiểu ngôn ngữ" nói chung, reviewer có thể yêu cầu. Nghiên cứu về ngôn ngữ ít tài nguyên được cộng đồng coi là một loại đóng góp chính danh, điều mà phần cuối bài sẽ bàn kỹ.

### Dữ liệu và đạo đức

Reviewer NLP đọc kỹ phần mô tả dữ liệu hơn hẳn các cộng đồng khác, vì dữ liệu ngôn ngữ thường đến từ con người: bài viết trên mạng xã hội, tin tức, hội thoại, văn bản y tế. Các câu hỏi thường gặp gồm: dữ liệu lấy từ đâu và có được phép thu thập theo điều khoản của nguồn không; license của dữ liệu gốc và của dữ liệu công bố là gì; dữ liệu có chứa thông tin định danh cá nhân hay nội dung độc hại không và đã xử lý thế nào; người gán nhãn là ai, được trả công ra sao; và dữ liệu có thể mang những thiên lệch nào. Khuôn *Data Statements* (Bender và Friedman, TACL 2018) là một cách có hệ thống để trả lời các câu hỏi này, và nhiều câu trong Responsible NLP Checklist ở dưới hỏi trực tiếp về chúng.

## Các loại paper và cách viết tương ứng

Hội nghị ACL nhận hai độ dài chính: **long paper** (điển hình 8 trang nội dung) và **short paper** (điển hình 4 trang), cộng thêm trang cho tài liệu tham khảo, phần Limitations và appendix; chi tiết định dạng xem ở Chương 0. Sai lầm phổ biến nhất với short paper là coi nó như một long paper bị nén lại. Một short paper tốt có *một* claim tập trung, được hỗ trợ bởi một nhóm thí nghiệm gọn: một quan sát thực nghiệm đáng chú ý, một kết quả âm tính có ý nghĩa, một phương pháp nhỏ với phân tích kỹ, hay một tài nguyên nhỏ. Nếu một ý tưởng cần nhiều thành phần và nhiều tầng bằng chứng, nó thuộc về long paper.

Bên cạnh độ dài, cộng đồng NLP phân biệt rõ các *loại đóng góp*. Biểu mẫu nộp bài của ARR những năm gần đây yêu cầu tác giả chọn loại đóng góp, với các lựa chọn như thí nghiệm kỹ thuật NLP, tài nguyên dữ liệu, phần mềm hoặc mô hình công khai, phân tích dữ liệu, phân tích và diễn giải mô hình, nghiên cứu tái lập, phương pháp cho bối cảnh ít tài nguyên hoặc ít tính toán, paper quan điểm (position paper), survey và lý thuyết; danh sách cụ thể thay đổi theo chu kỳ. Ngoài main track, các hội nghị ACL thường có thêm theme track theo chủ đề của năm, track trình diễn hệ thống (System Demonstrations), track công nghiệp (Industry Track) và Student Research Workshop. Việc chọn đúng loại đóng góp quan trọng vì reviewer được hướng dẫn đánh giá mỗi loại theo tiêu chí riêng: không nên phê bình một paper tài nguyên vì "không có phương pháp mới".

| Loại paper | Câu hỏi trung tâm | Bằng chứng cần có | Lỗi hay gặp |
|---|---|---|---|
| Phương pháp | Phương pháp có cải thiện vững và có lý do không? | Nhiều dataset, baseline mạnh và đơn giản, ablation, kiểm định | Chỉ một dataset; thiếu phân tích vì sao |
| Tài nguyên (dataset, benchmark, công cụ) | Tài nguyên có lấp khoảng trống và có chất lượng không? | Quy trình thu thập, agreement, thống kê, baseline, phân tích | Không chứng minh được khoảng trống; thiếu kiểm soát chất lượng |
| Phân tích, diễn giải | Hiện tượng được mô tả có thật và có ý nghĩa không? | Thí nghiệm loại trừ giải thích khác, nhiều mô hình | Kết luận vượt quá thí nghiệm |
| Tái lập | Kết quả gốc có lặp lại được không, vì sao có khác biệt? | Mô tả quy trình, so sánh chi tiết, giải thích sai lệch | Chỉ báo cáo "không tái lập được" mà không phân tích |
| Quan điểm (position) | Lập luận có mới, chặt chẽ và đáng thảo luận không? | Lập luận, dẫn chứng, phản biện các quan điểm khác | Nêu ý kiến mà không đối thoại với tài liệu hiện có |

Hai case study của Chương 5 minh họa hai loại khác nhau: [BERT (NAACL 2019)](../05-case-studies/bert.md) là paper phương pháp với đánh giá trên diện rộng các tác vụ, còn [CheckList (ACL 2020)](../05-case-studies/checklist-acl2020.md) là paper về phương pháp luận đánh giá, giá trị nằm ở việc thay đổi cách cộng đồng kiểm thử mô hình.

## Limitations: bắt buộc và cách viết tốt

Các hội nghị dùng ARR yêu cầu mọi bài nộp có một mục tên **Limitations**, đặt sau phần kết luận và trước tài liệu tham khảo. Những năm gần đây, mục này không tính vào giới hạn trang, và bài thiếu nó có thể bị desk reject. Vì không tính trang, mục này chỉ nên dùng để thảo luận hạn chế; đặt thêm kết quả hay nội dung khác vào đây để lách giới hạn trang là trái với tinh thần của quy định. Nguyên tắc chung về cách viết limitations đã có ở bài [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md); ở đây chúng ta xem xét những gì đặc thù cho NLP.

Reviewer NLP đọc phần Limitations thật sự, và họ dùng nó để đánh giá mức độ tác giả hiểu phạm vi kết quả của chính nghiên cứu đó. Một phần Limitations tốt khiến claim trong paper đáng tin hơn, vì nó cho thấy tác giả đã tự đặt những câu hỏi khó. Ngược lại, một phần Limitations chung chung ("cần thêm thí nghiệm", "tài nguyên tính toán có hạn") cho thấy tác giả chỉ viết cho có, và đôi khi khiến reviewer tự liệt kê những hạn chế nghiêm trọng hơn trong review.

Các khía cạnh thường cần bàn trong Limitations của một paper NLP gồm: phạm vi ngôn ngữ và domain (kết quả có được kiểm chứng ngoài các ngôn ngữ, thể loại văn bản đã thử không); dữ liệu (nguồn, kích thước, thiên lệch có thể có của người gán nhãn); mô hình (kích thước, việc dùng mô hình đóng qua API khiến kết quả khó tái lập); đánh giá (metric tự động có tương quan đến đâu với chất lượng thực, human evaluation có quy mô bao nhiêu); và rủi ro (phương pháp có thể bị lạm dụng thế nào). Mỗi hạn chế nên được viết thành một ý cụ thể gồm hạn chế là gì, nó ảnh hưởng thế nào tới kết luận, và nếu có thể thì hướng khắc phục.

<div class="bad" markdown>
*"Limitations. Our work has some limitations. Due to limited computational resources, we could not test larger models. Future work could explore more languages and tasks."*
</div>

<div class="good" markdown>
*"Limitations. **Language coverage.** Our benchmark covers Vietnamese and English only; conclusions about tokenization effects may not transfer to languages with richer morphology. **Annotation.** Labels were produced by three annotators who are native speakers of the Northern variety; lexical variation in Central and Southern varieties may be underrepresented, which could inflate scores on Northern-style text. **Models.** We evaluate open-weight models up to 13B parameters and two API models accessed in a fixed two-week window; API models may change over time, which limits the reproducibility of those results."*
</div>

Phiên bản thứ hai tốt hơn không phải vì dài hơn, mà vì mỗi hạn chế gắn với một chi tiết cụ thể của nghiên cứu và một hệ quả cụ thể cho kết luận. Reviewer đọc xong biết chính xác kết quả đáng tin trong phạm vi nào. Cũng cần tránh thái cực ngược lại: liệt kê những hạn chế làm sụp đổ claim chính mà không giải thích vì sao claim vẫn có giá trị trong phạm vi đã nêu.

## Responsible NLP Checklist

Bên cạnh Limitations, ARR yêu cầu tác giả trả lời **Responsible NLP Research Checklist**. Tùy chu kỳ, checklist được điền trực tiếp trong biểu mẫu nộp bài trên OpenReview hoặc đính kèm theo hướng dẫn hiện hành của ARR; reviewer và AC có thể xem câu trả lời. Mỗi câu được trả lời có hoặc không, và khi trả lời có, tác giả cần chỉ ra section chứa nội dung tương ứng; khi trả lời không, cần giải thích ngắn lý do. Cũng như với NeurIPS checklist, câu trả lời "không" kèm lý do chính đáng là chấp nhận được, còn câu trả lời "có" không đúng sự thật là một vấn đề nghiêm trọng về tính trung thực.

Các câu hỏi được tổ chức thành vài nhóm. Nhóm đầu áp dụng cho mọi bài nộp, hỏi về việc paper có thảo luận hạn chế và rủi ro tiềm ẩn hay không. Nhóm thứ hai dành cho bài dùng hoặc tạo ra **tài sản khoa học** (scientific artifacts) như dataset, mô hình, phần mềm: tác giả có trích dẫn người tạo ra chúng không, có nêu license và điều khoản sử dụng không, việc sử dụng có phù hợp với mục đích ban đầu không, dữ liệu có được kiểm tra thông tin định danh và nội dung xúc phạm không, có tài liệu mô tả tài sản và thống kê các tập chia không. Nhóm thứ ba dành cho bài có **thí nghiệm tính toán**: số tham số và ngân sách tính toán, thiết lập thí nghiệm và siêu tham số, thống kê mô tả như trung bình qua nhiều lần chạy hay error bars, và các gói phần mềm đã dùng. Nhóm thứ tư dành cho bài có **người gán nhãn hoặc người tham gia nghiên cứu**: hướng dẫn đầy đủ cho người gán nhãn, cách tuyển và trả công, sự đồng thuận của người tham gia, phê duyệt của hội đồng đạo đức nếu có, và đặc điểm nhân khẩu học của người gán nhãn khi liên quan. Nhóm cuối hỏi về việc sử dụng **trợ lý AI** trong nghiên cứu hoặc trong việc viết. Cách đánh số và câu chữ thay đổi qua các chu kỳ, nên cần đọc phiên bản hiện hành trên trang ARR.

| Nhóm | Checklist hỏi gì | Nơi trả lời trong paper |
|---|---|---|
| Mọi bài nộp | Hạn chế, rủi ro tiềm ẩn | Limitations, Ethics Statement |
| Tài sản khoa học | Trích dẫn, license, mục đích sử dụng, thông tin định danh, tài liệu, thống kê | Section dữ liệu, Appendix |
| Thí nghiệm tính toán | Số tham số, compute, siêu tham số, thống kê mô tả, phần mềm | Section thực nghiệm, Appendix |
| Người gán nhãn, người tham gia | Hướng dẫn, tuyển chọn, trả công, đồng thuận, phê duyệt đạo đức, nhân khẩu học | Section đánh giá, Appendix về annotation |
| Trợ lý AI | Việc dùng AI trong nghiên cứu hoặc viết | Câu trả lời trực tiếp, Acknowledgments (bản cuối) |

So với NeurIPS Paper Checklist, Responsible NLP Checklist có nhiều điểm chung (tái lập, compute, đạo đức) nhưng nhấn mạnh hơn vào tài sản dữ liệu và người gán nhãn, phản ánh đặc thù của nghiên cứu ngôn ngữ. Như với mọi checklist, lời khuyên là điền thử từ draft đầu tiên: những câu hỏi chưa trả lời được là những chỗ paper còn thiếu.

## Human evaluation có giao thức

Với nhiều tác vụ sinh văn bản như tóm tắt, dịch máy, hội thoại hay sinh văn bản sáng tạo, metric tự động chỉ phản ánh một phần chất lượng, nên human evaluation thường là bằng chứng quyết định. Chính vì quan trọng, nó cũng bị reviewer soi kỹ. Một câu như "we conducted a human evaluation and our method was preferred" mà không có chi tiết gần như không có giá trị, vì người đọc không biết ai đánh giá, đánh giá cái gì, theo tiêu chí nào và kết quả đáng tin đến đâu. Nhiều khảo sát trong cộng đồng đã chỉ ra rằng chi tiết về human evaluation thường được báo cáo thiếu, và reviewer ngày càng yêu cầu một *giao thức* đầy đủ.

Một giao thức human evaluation tốt trả lời các câu hỏi sau. Về **người đánh giá**: có bao nhiêu người, là chuyên gia hay crowdworker, được tuyển qua kênh nào, có trình độ ngôn ngữ phù hợp không, và khi liên quan thì có đặc điểm nhân khẩu học gì. Về **nội dung đánh giá**: người đánh giá nhận hướng dẫn gì, có ví dụ mẫu không, giao diện ra sao; hướng dẫn đầy đủ nên được đưa vào appendix, và checklist hỏi trực tiếp về điều này. Về **thiết kế**: bao nhiêu mục được đánh giá, mỗi mục có bao nhiêu người chấm, hình thức chấm là thang Likert, so sánh cặp hay xếp hạng; thứ tự các hệ thống có được xáo trộn và ẩn danh không, để người chấm không biết đâu là "Ours"; có câu kiểm tra chú ý hay mục vàng (gold items) để kiểm soát chất lượng không. Về **trả công**: mức trả theo giờ là bao nhiêu và so với mức lương tối thiểu tại nơi người đánh giá sinh sống thế nào. Về **độ đồng thuận** (inter-annotator agreement): dùng chỉ số nào và giá trị bao nhiêu. Về **phân tích thống kê**: khác biệt giữa các hệ thống có ý nghĩa thống kê không. Và về **đạo đức**: người tham gia có đồng ý không, có được bảo vệ khỏi nội dung độc hại không, có cần phê duyệt của hội đồng đạo đức không.

Độ đồng thuận cần được chọn đúng chỉ số. Cohen's κ dùng khi có hai người chấm; Fleiss' κ dùng khi có nhiều người chấm với số lượng cố định trên mỗi mục; Krippendorff's α linh hoạt hơn, xử lý được dữ liệu thiếu và thang thứ bậc. Giá trị đồng thuận thấp không tự động làm paper yếu đi, nhất là với tác vụ có tính chủ quan cao như đánh giá độ hài hước hay tính tự nhiên; điều quan trọng là báo cáo trung thực và thảo luận ý nghĩa của nó.

```text
Human evaluation. We randomly sampled 200 test inputs and collected outputs
from all four systems. Each output was rated by three native speakers of
Vietnamese recruited through a university mailing list, on fluency and
faithfulness (5-point Likert scales; full guidelines in Appendix F). System
identities were hidden and presentation order was randomized per item.
Annotators were paid an hourly rate above the local minimum wage.
Inter-annotator agreement (Krippendorff's alpha, ordinal) was 0.62 for
fluency and 0.71 for faithfulness. Differences were tested with a paired
bootstrap test (p < 0.05).
```

Đoạn mẫu trên tuy ngắn nhưng trả lời gần như mọi câu hỏi mà reviewer sẽ đặt ra, và trỏ tới appendix cho phần chi tiết. Các con số chỉ mang tính minh họa; điều cần học là danh sách thông tin được báo cáo.

## Đánh giá với LLM: những câu hỏi reviewer chắc chắn sẽ hỏi

Khi mô hình ngôn ngữ lớn (LLM) trở thành đối tượng nghiên cứu, baseline và cả công cụ đánh giá, cộng đồng NLP đã hình thành một bộ câu hỏi chuẩn mà reviewer gần như chắc chắn sẽ đặt ra. Paper đánh giá hoặc sử dụng LLM nên trả lời chúng ngay trong bài thay vì chờ tới giai đoạn phản hồi.

Câu hỏi đầu tiên là **contamination** (nhiễm dữ liệu): dữ liệu kiểm tra có thể đã xuất hiện trong dữ liệu huấn luyện của mô hình hay không. Với benchmark công khai lâu năm, khả năng này là đáng kể, và nếu xảy ra, điểm số đo khả năng ghi nhớ chứ không phải khả năng tổng quát. Các cách giảm thiểu thường gặp gồm dùng dữ liệu được tạo sau mốc cắt dữ liệu huấn luyện của mô hình, kiểm tra trùng lặp n-gram khi có quyền truy cập dữ liệu huấn luyện, đánh giá trên phiên bản diễn đạt lại hoặc biến đổi của các mục kiểm tra, và giữ kín một phần tập kiểm tra. Với mô hình đóng, tác giả không thể loại trừ hoàn toàn khả năng nhiễm, và cách viết trung thực là thừa nhận điều đó trong Limitations.

Câu hỏi thứ hai là **độ nhạy với prompt**. Kết quả của LLM có thể thay đổi đáng kể theo cách diễn đạt prompt, định dạng đầu ra, số lượng và thứ tự ví dụ few-shot. Một so sánh chỉ dùng một prompt duy nhất dễ bị phê bình là "kết luận có thể đảo ngược với prompt khác". Cách làm được ưa chuộng là thử nhiều mẫu prompt, báo cáo trung bình và khoảng dao động, và công bố nguyên văn các prompt trong appendix.

Câu hỏi thứ ba là **tính ngẫu nhiên và cấu hình sinh**. Cần báo cáo tham số giải mã (greedy hay sampling, temperature, số mẫu), và khi dùng sampling thì chạy nhiều lần. Câu hỏi thứ tư là **phiên bản mô hình**: mô hình qua API có thể được cập nhật mà không báo trước, nên cần ghi rõ định danh phiên bản và thời gian truy cập. Câu hỏi thứ năm là **LLM-as-a-judge**: khi dùng LLM để chấm điểm đầu ra, cần kiểm chứng sự đồng thuận của nó với người chấm trên một tập con, và lưu ý các thiên lệch đã được ghi nhận như ưu tiên câu trả lời ở một vị trí nhất định, ưu tiên câu trả lời dài, hay ưu tiên đầu ra do chính mô hình đó hoặc mô hình cùng họ sinh ra; một biện pháp đơn giản là đảo thứ tự các phương án và lấy trung bình. Cuối cùng là **so sánh công bằng**: các hệ thống được so với cùng số ví dụ few-shot, cùng ngân sách token hay số lần gọi.

!!! warning "Contamination là câu hỏi mặc định"
    Với bất kỳ paper nào báo cáo kết quả LLM trên benchmark công khai, reviewer NLP sẽ hỏi về contamination. Ngay cả khi không thể kiểm tra triệt để, một đoạn ngắn nêu mốc thời gian của dữ liệu, các biện pháp đã thực hiện và mức độ không chắc chắn còn lại sẽ tránh được một lời phê bình gần như chắc chắn xảy ra.

## Viết cho meta-reviewer ARR

Trong ARR, mỗi bài được một Area Chair phụ trách, người này đóng vai trò **meta-reviewer**: đọc các review, phản hồi của tác giả và thảo luận, rồi viết một meta-review tóm tắt điểm mạnh, điểm yếu và đánh giá tổng thể. Khi tác giả commit bài tới một hội nghị, Senior Area Chair và Program Chair của hội nghị đó ra quyết định chủ yếu dựa trên meta-review và các review; họ thường không có thời gian đọc toàn bộ paper hay mọi luồng thảo luận. Điều này có một hệ quả quan trọng: **author response cần được viết sao cho meta-reviewer dễ dàng tóm tắt rằng các mối lo chính đã được giải quyết**. Meta-review là văn bản đi theo bài tới hội nghị, nên mục tiêu thực sự của author response là ảnh hưởng tới văn bản đó.

Để làm được điều này, author response nên mở đầu bằng một đoạn tóm tắt ngắn dành cho meta-reviewer, nêu các mối lo chung và cách chúng được giải quyết. Các phản hồi nên được nhóm theo vấn đề và gắn nhãn reviewer, để meta-reviewer thấy ngay vấn đề nào được nhiều người nêu. Mỗi phản hồi nên cụ thể, có con số hoặc trích dẫn section, thay vì những lời hứa chung chung. Khi một review chứa nhận định sai về mặt sự kiện (ví dụ cho rằng paper thiếu một thí nghiệm thực ra đã có ở Section 5), tác giả nên chỉ ra một cách bình tĩnh và có bằng chứng; meta-reviewer cần thông tin đó để cân nhắc trọng số của review. Hướng dẫn reviewer của ARR những năm gần đây liệt kê một số kiểu nhận xét bị coi là thiếu căn cứ, chẳng hạn bác bỏ bài chỉ vì "không đạt SOTA", "phương pháp quá đơn giản" hay "chủ đề quá hẹp" mà không giải thích (các heuristic phản biện lười này được phân tích từ phía reviewer ở bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md)), và ARR có cơ chế để tác giả báo cáo vấn đề với một review cho AC. Cơ chế này nên được dùng tiết chế, chỉ cho những vấn đề rõ ràng, và luôn bằng giọng văn trung tính.

```text
Summary for the meta-reviewer

We thank the reviewers for their feedback. The main concerns were
(1) whether gains hold beyond the two English datasets (R1, R3) and
(2) the reliability of the human evaluation (R2). In response, we
(1) report results on three additional datasets, including two
non-English ones, where the improvement is consistent (Response Table 1),
and (2) clarify that each item was rated by three annotators with
Krippendorff's alpha of 0.71 (Sec. 5.2, Appendix F). We also note that
the comparison with [Baseline] requested by R3 is already in Table 3.
```

Sau giai đoạn review, khi commit tới hội nghị, một số hội nghị cho phép tác giả gửi kèm một nhận xét ngắn tới Senior Area Chair về meta-review, ví dụ để chỉ ra một sai sót về sự kiện. Đây không phải cơ hội để tranh luận lại toàn bộ review; nó chỉ hiệu quả khi ngắn, cụ thể và có bằng chứng.

## Revision notes khi nộp lại

Một đặc điểm của ARR là tác giả có thể sửa bài và nộp lại vào chu kỳ sau. Khi nộp lại, tác giả cung cấp liên kết tới bài nộp trước và một bản **revision notes** giải thích những gì đã thay đổi để đáp ứng các review trước đó; những năm gần đây, tác giả còn có thể đề nghị giữ lại hoặc thay reviewer và meta-reviewer cũ, kèm lý do. Các chi tiết thủ tục thay đổi theo chu kỳ, nhưng logic thì ổn định: reviewer của lần nộp lại, nhất là khi là reviewer cũ, sẽ đọc revision notes trước tiên để kiểm tra xem các mối lo trước đây đã được giải quyết chưa.

Revision notes tốt có cấu trúc giống một response letter thu gọn. Mở đầu là tóm tắt các thay đổi lớn. Tiếp theo, với mỗi điểm chính của meta-review và các review trước, nêu mối lo, thay đổi đã thực hiện và vị trí trong bản mới. Nếu có mối lo không được giải quyết, cần nói thẳng và giải thích lý do, thay vì lờ đi; reviewer cũ sẽ nhận ra ngay. Một bài nộp lại mà hầu như không thay đổi gì thường nhận kết quả tương tự lần trước, và có thể khiến reviewer kém thiện cảm hơn.

```text
Revision notes

Summary of major changes: (i) new experiments on three additional datasets
(Sec. 5.3); (ii) a rewritten human evaluation section with full protocol
(Sec. 5.4, Appendix F); (iii) an expanded Limitations section.

Meta-review point 1: "Evaluation limited to English."
-> Added results on Vietnamese and Indonesian datasets (Table 4). Gains are
   smaller but consistent; we discuss possible reasons in Sec. 6.

Meta-review point 2: "Missing comparison with [Baseline]."
-> Added to Table 2 under the same training budget.

Reviewer 2, point 3: "Scale up to larger models."
-> Not addressed due to compute constraints; we added results for a
   second model family at the same scale (Table 5) and discuss this
   limitation explicitly.
```

## Cơ hội cho tài nguyên tiếng Việt và ngôn ngữ ít tài nguyên

Cộng đồng NLP ý thức rõ rằng phần lớn tài nguyên và nghiên cứu tập trung vào một số ít ngôn ngữ, và vì vậy đánh giá cao những đóng góp giúp mở rộng phạm vi ngôn ngữ. Với nghiên cứu sinh làm việc với tiếng Việt, đây là một lợi thế thực sự: hiểu biết bản ngữ về ngôn ngữ, văn hóa và bối cảnh sử dụng là điều mà nhóm nghiên cứu ở nơi khác khó có được. Tuy vậy, cần hiểu đúng: lợi thế này không hạ thấp tiêu chuẩn. Một paper chỉ có giá trị "đây là dataset đầu tiên cho tác vụ X bằng tiếng Việt" mà thiếu kiểm soát chất lượng và phân tích sẽ khó được accept ở main conference.

Một paper tài nguyên tiếng Việt mạnh thường có các đặc điểm sau. Thứ nhất, khoảng trống được chứng minh bằng bằng chứng, chẳng hạn các benchmark đa ngôn ngữ hiện có cho tiếng Việt chủ yếu được dịch từ tiếng Anh nên thiếu các hiện tượng ngôn ngữ và bối cảnh văn hóa bản địa. Thứ hai, dữ liệu được tạo nguyên bản bởi người bản ngữ, hoặc nếu dịch thì được hậu kiểm bởi con người và kiểm tra hiện tượng "văn dịch" (translationese); reviewer ngày càng hoài nghi với benchmark dịch máy không kiểm chứng. Thứ ba, paper khai thác những đặc điểm riêng của tiếng Việt và cho thấy chúng ảnh hưởng thế nào tới mô hình: chữ viết tách theo âm tiết nên khoảng trắng không trùng với ranh giới từ, khiến tách từ không tầm thường; dấu thanh và việc văn bản trên mạng xã hội thường bị bỏ dấu; khác biệt từ vựng và chính tả giữa các vùng phương ngữ Bắc, Trung, Nam; hiện tượng chen tiếng Anh trong văn bản không trang trọng; và việc tokenizer của nhiều mô hình đa ngôn ngữ thường tách văn bản tiếng Việt thành nhiều token hơn so với văn bản tiếng Anh có độ dài tương đương. Thứ tư, chất lượng được kiểm soát với độ đồng thuận được báo cáo. Thứ năm, baseline bao gồm cả mô hình chuyên cho tiếng Việt (ví dụ PhoBERT), mô hình đa ngôn ngữ và LLM. Cuối cùng, tài nguyên được tài liệu hóa, có license rõ ràng và được công bố.

Một lưu ý quan trọng về tính mới: trước khi viết "the first dataset for...", cần tìm kỹ không chỉ trên ACL Anthology và arXiv mà cả ở các hội nghị và cộng đồng trong nước, chẳng hạn cộng đồng VLSP (Vietnamese Language and Speech Processing) vốn tổ chức các shared task về tiếng Việt. Reviewer người Việt hoặc quen thuộc với tiếng Việt có thể biết những tài nguyên mà tìm kiếm qua loa bỏ sót.

!!! tip "Mở rộng sang ngôn ngữ ít tài nguyên nói chung"
    Những nguyên tắc trên áp dụng cho mọi ngôn ngữ ít tài nguyên. Paper về một ngôn ngữ cụ thể có giá trị cao nhất khi rút ra được bài học vượt ra ngoài ngôn ngữ đó, chẳng hạn một quy trình xây dựng dữ liệu có thể tái sử dụng, hoặc một phân tích cho thấy hiện tượng nào của ngôn ngữ khiến mô hình đa ngôn ngữ thất bại.

## Tóm tắt

Cộng đồng NLP, qua kinh nghiệm với những benchmark bị khai thác, đánh giá cao độ vững của kết luận hơn một con số SOTA: nhiều dataset, baseline đơn giản lẫn mạnh, kiểm định thống kê và phân tích lỗi có quy trình. Việc chọn đúng loại paper và độ dài giúp reviewer đánh giá theo đúng tiêu chí. Phần Limitations bắt buộc và Responsible NLP Checklist không phải thủ tục hành chính mà là nơi tác giả cho thấy sự hiểu biết về phạm vi kết quả, nhất là về ngôn ngữ, dữ liệu và người gán nhãn. Human evaluation cần một giao thức được báo cáo đầy đủ, còn đánh giá LLM cần tính đến contamination, độ nhạy với prompt, cấu hình sinh và phiên bản mô hình. Trong ARR, author response nên được viết cho meta-reviewer, và revision notes khi nộp lại cần trả lời từng điểm một cách trung thực. Tài nguyên tiếng Việt và ngôn ngữ ít tài nguyên là cơ hội thực sự, với điều kiện đạt chuẩn chất lượng và có phân tích sâu.

## Bài tập

1. Viết phần Limitations cho một dự án NLP đang thực hiện (hoặc một paper NLP đã đọc), gồm ít nhất ba hạn chế cụ thể theo khuôn: hạn chế, ảnh hưởng tới kết luận, hướng khắc phục.
2. Thiết kế giao thức human evaluation cho một tác vụ sinh văn bản: số người chấm, hướng dẫn, hình thức chấm, kiểm soát chất lượng, mức trả công, chỉ số đồng thuận và kiểm định thống kê. Viết đoạn báo cáo tương ứng bằng tiếng Anh.
3. Chọn một paper gần đây đánh giá LLM trên benchmark công khai. Liệt kê những câu hỏi về contamination, độ nhạy prompt, cấu hình sinh và phiên bản mô hình mà paper đã trả lời và chưa trả lời.
4. Giả định một bài nộp ARR nhận meta-review nêu hai mối lo chính. Viết đoạn "Summary for the meta-reviewer" và bản revision notes tương ứng cho lần nộp lại.
