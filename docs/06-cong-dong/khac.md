# AAAI, IJCAI, KDD và journal

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Viết cho đội ngũ reviewer đa dạng của AAAI và IJCAI, và chuẩn bị cho giai đoạn lọc sớm của hai hội nghị này.
    - Nhận diện khẩu vị của KDD, WWW, ACM Multimedia, WACV và BMVC để chọn nơi nộp phù hợp.
    - Phân biệt vai trò của journal trong ba cộng đồng: TPAMI, IJCV, TIP cho Computer Vision; TACL và Computational Linguistics cho NLP; JMLR và TMLR cho Machine Learning.
    - Lập kế hoạch mở rộng một paper hội nghị thành bài journal với lượng nội dung mới tương xứng.
    - Viết response letter cho journal theo đúng cấu trúc và giọng văn.

Ngoài ba nhóm hội nghị chính đã bàn ở các bài trước, người làm nghiên cứu trong CV, NLP và ML thường xuyên cân nhắc thêm ba loại nơi nộp khác. Loại thứ nhất là các hội nghị AI tổng quát như AAAI và IJCAI, nơi tập hợp nhiều nhánh của trí tuệ nhân tạo. Loại thứ hai là các hội nghị hướng ứng dụng hoặc chuyên ngành gần, như KDD, WWW, ACM Multimedia, cùng những hội nghị thị giác có uy tín như WACV và BMVC. Loại thứ ba là journal, với vai trò rất khác nhau giữa ba cộng đồng.

Những nơi này xuất hiện trong lộ trình của một paper vì nhiều lý do: là điểm đến tiếp theo sau khi bị reject, là nơi phù hợp hơn cho một đóng góp hướng ứng dụng, là yêu cầu của cơ sở đào tạo hay hội đồng đánh giá đối với công bố journal, hoặc là bước tự nhiên để công bố phiên bản đầy đủ của một nghiên cứu đã trình bày ở hội nghị. Bài này không lặp lại các thông tin về định dạng chi tiết mà tập trung vào khẩu vị người đọc và những điều chỉnh cần thiết trong cách viết. Mọi con số về số trang và lịch nộp dưới đây chỉ mang tính điển hình và cần được kiểm tra với Call for Papers của năm nộp.

## AAAI và IJCAI: viết cho reviewer đa dạng

AAAI (AAAI Conference on Artificial Intelligence) và IJCAI (International Joint Conference on Artificial Intelligence) là hai hội nghị AI tổng quát lâu đời, bao quát từ biểu diễn tri thức, lập kế hoạch, tìm kiếm, hệ đa tác tử, lý thuyết trò chơi, cho tới học máy, thị giác máy tính và xử lý ngôn ngữ. Hệ quả trực tiếp của phạm vi rộng này là đội ngũ reviewer rất đa dạng. Một paper về phát hiện đối tượng 3D có thể được giao cho một reviewer làm về học máy nói chung, hay thậm chí một người làm về lập kế hoạch; họ có kiến thức nền vững về AI nhưng không nhất thiết biết các benchmark, thuật ngữ hay phương pháp mới nhất của lĩnh vực hẹp.

Một đặc điểm quan trọng khác là **giai đoạn lọc sớm**. Những năm gần đây, AAAI dùng quy trình review hai giai đoạn: ở giai đoạn đầu, mỗi bài được một số ít reviewer đánh giá, và những bài không nhận đủ ủng hộ bị loại ngay sau giai đoạn này, thường không có cơ hội phản hồi; chỉ những bài qua được giai đoạn đầu mới nhận thêm reviewer và có giai đoạn author response. IJCAI có giai đoạn *summary reject*, trong đó một phần bài nộp bị loại sớm dựa trên đánh giá nhanh. Cơ chế cụ thể thay đổi qua các năm, nhưng tinh thần chung không đổi: một phần lớn quyết định được đưa ra sau một lần đọc nhanh.

Hai đặc điểm này dẫn tới một kết luận cho người viết: **hai trang đầu phải tự đứng vững**, theo nghĩa một người đọc thông minh nhưng ngoài chuyên ngành, đọc nhanh, vẫn nắm được bài toán là gì, vì sao nó quan trọng, ý tưởng chính là gì và bằng chứng chính ra sao. So với một paper CVPR hay ACL, Introduction của paper AAAI nên dành nhiều chỗ hơn cho bối cảnh: định nghĩa bài toán bằng ngôn ngữ phổ thông, giải thích vì sao nó khó, và tránh dồn dập thuật ngữ chuyên ngành. Mọi thuật ngữ đặc thù cần được định nghĩa ở lần đầu xuất hiện.

<div class="bad" markdown>
*"We improve BEV-based 3D detection by lifting LSS features with depth-aware deformable attention, achieving +1.8 NDS on nuScenes."*
</div>

<div class="good" markdown>
*"Autonomous vehicles must locate surrounding objects in 3D using cameras alone, which is difficult because images do not directly measure depth. Existing methods estimate depth for every pixel independently, so errors accumulate for distant objects. We propose to reason about depth at the object level..."*
</div>

Câu thứ nhất có thể chấp nhận được với reviewer CVPR chuyên về lái xe tự hành, nhưng với reviewer AAAI, nó chứa ít nhất bốn thuật ngữ không được giải thích. Câu thứ hai nói cùng một điều nhưng bắt đầu từ bài toán, nêu khó khăn bằng ngôn ngữ phổ thông, rồi mới đến ý tưởng.

Về định dạng, AAAI và IJCAI những năm gần đây giới hạn phần nội dung ở khoảng bảy trang hai cột, cộng thêm trang cho tài liệu tham khảo theo quy định riêng của mỗi hội nghị. Bảy trang hai cột rất chật, nên cần ưu tiên chặt chẽ: Related Work viết gọn theo mạch thay vì liệt kê, chứng minh và chi tiết cài đặt chuyển ra phụ lục, bảng kết quả được thiết kế súc tích. Tuy nhiên, có năm AAAI nói rõ reviewer không bắt buộc đọc tài liệu bổ sung, nên phần chính phải tự đủ để đánh giá claim. AAAI những năm gần đây cũng yêu cầu một reproducibility checklist; nội dung của nó gần với các checklist ở NeurIPS và ARR.

Về vị trí trong lộ trình, AAAI có hạn nộp điển hình vào khoảng tháng 8, sau khi có kết quả ICCV hoặc ECCV, nên là lựa chọn phổ biến cho bài bị reject ở hai hội nghị này. IJCAI có hạn nộp điển hình vào khoảng tháng 1. Như đã bàn ở bài [Chuyển một paper giữa các cộng đồng](chuyen-doi.md), cần kiểm tra kỹ sự chồng lấn với lịch review của các hội nghị khác trước khi nộp.

## KDD, WWW, ACM Multimedia, WACV, BMVC

Nhóm hội nghị này đa dạng hơn, nhưng có thể được hiểu qua câu hỏi "reviewer ở đây muốn thấy điều gì mà reviewer CVPR, ACL hay NeurIPS không nhất thiết đòi hỏi".

**KDD** (ACM SIGKDD Conference on Knowledge Discovery and Data Mining) là hội nghị hàng đầu về khai phá dữ liệu. KDD thường có hai track: Research và Applied Data Science. Track Research coi trọng tính mới và độ chặt chẽ như các hội nghị khác, nhưng đặc biệt nhấn mạnh **khả năng mở rộng quy mô**: độ phức tạp tính toán, thời gian chạy trên dữ liệu lớn, khả năng áp dụng trên dữ liệu thực. Track Applied Data Science coi trọng **triển khai thực tế**: hệ thống đã chạy trong môi trường thật chưa, tác động đo bằng chỉ số nào (ví dụ thử nghiệm A/B), và bài học rút ra từ triển khai là gì. Những năm gần đây KDD có hai chu kỳ nộp mỗi năm. Lịch hai đợt, các track (kể cả track mới mở thêm ở một số năm) và hạng CORE của KDD cũng như TheWebConf được trình bày chi tiết ở bài [IR & Data Mining](../00-tong-quan/he-sinh-thai-ir.md) của Chương 0.

**WWW** (The Web Conference, nay thường gọi là TheWebConf) tập trung vào các vấn đề gắn với web: tìm kiếm, hệ gợi ý, mạng xã hội, khai phá dữ liệu web, bảo mật và quyền riêng tư trên web, kinh tế học của nền tảng số. Paper ML hay NLP có thể phù hợp nếu bài toán gắn chặt với dữ liệu hoặc hệ thống web, và khi viết cần làm rõ mối liên hệ đó. Reviewer WWW thường quan tâm tới quy mô và tới các vấn đề đạo đức của dữ liệu người dùng.

**ACM Multimedia** là hội nghị về đa phương tiện: âm thanh, video, hình ảnh, tương tác đa phương thức, ứng dụng và cả nghệ thuật số. Hội nghị này rất gần với CV và nhận nhiều paper đa phương thức hoặc hướng ứng dụng mà CVPR có thể coi là "chưa đủ đóng góp về thị giác". Reviewer coi trọng tính đa phương thức thực sự và trải nghiệm người dùng.

**WACV** (Winter Conference on Applications of Computer Vision) và **BMVC** (British Machine Vision Conference) là hai hội nghị thị giác có uy tín tốt, dù không thuộc nhóm A\* theo các bảng xếp hạng phổ biến như CORE. WACV đặc biệt chào đón các đóng góp hướng ứng dụng và những năm gần đây phân biệt track thuật toán với track ứng dụng; WACV cũng có hai vòng nộp, trong đó bài ở vòng đầu có thể nhận quyết định sửa và nộp lại. BMVC có phạm vi rộng trong thị giác máy tính. Cả hai là lựa chọn tốt cho paper đầu tay, cho bài có đóng góp vững nhưng quy mô vừa phải, hoặc cho lần nộp lại.

| Hội nghị | Trọng tâm | Reviewer coi trọng | Lưu ý khi viết |
|---|---|---|---|
| KDD | Khai phá dữ liệu | Quy mô, dữ liệu thực, triển khai | Chọn đúng track; báo cáo thời gian chạy và độ phức tạp |
| WWW | Bài toán gắn với web | Quy mô, tác động thực tế, đạo đức dữ liệu | Làm rõ mối liên hệ với web ngay từ Introduction |
| ACM Multimedia | Đa phương tiện | Tính đa phương thức, ứng dụng, trải nghiệm | Không chỉ là thị giác; nêu rõ vai trò của mỗi phương thức |
| WACV | Ứng dụng thị giác | Hệ thống thực tế, tính khả dụng | Chọn đúng track; có thể nộp vòng đầu để nhận góp ý |
| BMVC | Thị giác máy tính nói chung | Đóng góp vững, trình bày rõ | Chuẩn gần với CVPR, quy mô kỳ vọng vừa phải hơn |

Một lưu ý về xếp hạng: KDD, WWW và ACM Multimedia được xếp A\* trong các phiên bản gần đây của bảng xếp hạng CORE. Tuy nhiên, mỗi cơ sở đào tạo và hội đồng đánh giá có thể dùng danh sách riêng, và các bảng xếp hạng được cập nhật định kỳ, nên cần kiểm tra danh sách mà nơi đánh giá thực sự áp dụng.

## Journal trong ba cộng đồng

Vai trò của journal khác nhau rõ rệt giữa ba cộng đồng, và hiểu sự khác biệt này giúp tránh những kỳ vọng sai.

Trong **Computer Vision**, hội nghị là kênh công bố chính, còn journal như IEEE TPAMI (Transactions on Pattern Analysis and Machine Intelligence), IJCV (International Journal of Computer Vision) và IEEE TIP (Transactions on Image Processing) thường dùng cho hai loại bài: phiên bản mở rộng của một paper hội nghị, và các công trình toàn diện cần nhiều không gian hơn giới hạn của hội nghị. Quy trình review kéo dài, từ vài tháng đến hơn một năm, với nhiều vòng sửa.

Trong **NLP**, TACL (Transactions of the Association for Computational Linguistics) có vị trí đặc biệt: đây là journal với độ dài bài gần với paper hội nghị, nhận bài liên tục, có quyết định tương đối nhanh, và bài được chấp nhận thường có cơ hội trình bày tại các hội nghị của ACL. Vì vậy, TACL được nhiều người coi như một lựa chọn ngang hàng với main conference, không phải nơi cho bản mở rộng. Computational Linguistics, journal lâu đời của ACL, phù hợp với các nghiên cứu dài và sâu, các bài tổng quan, và những công trình cần trình bày đầy đủ hơn khuôn khổ hội nghị.

Trong **Machine Learning**, JMLR (Journal of Machine Learning Research) là journal truy cập mở lâu đời, phù hợp với công trình dài và kỹ lưỡng, đặc biệt là công trình lý thuyết; JMLR còn có một track riêng cho phần mềm mã nguồn mở về học máy. TMLR (Transactions on Machine Learning Research), ra đời năm 2022, là journal review trên OpenReview, nhận bài liên tục. Điểm đặc biệt của TMLR là tiêu chí chấp nhận: bài được đánh giá chủ yếu dựa trên việc các claim có được hỗ trợ bởi bằng chứng chính xác, thuyết phục và rõ ràng hay không, và có được một bộ phận cộng đồng quan tâm hay không, thay vì đòi hỏi mức độ "đột phá" như hội nghị cạnh tranh. TMLR cũng trao các chứng nhận cho những bài nổi bật, và một số hội nghị ML những năm gần đây có track mời trình bày các bài đã đăng ở journal như TMLR hay JMLR.

| Journal | Cộng đồng | Vai trò điển hình | Đặc điểm cần biết |
|---|---|---|---|
| TPAMI, IJCV, TIP | Computer Vision | Bản mở rộng, công trình toàn diện | Review dài, nhiều vòng; yêu cầu nội dung mới đáng kể |
| TACL | NLP | Ngang hàng với main conference | Bài ngắn gần hội nghị; nhận bài liên tục; có thể trình bày tại hội nghị ACL |
| Computational Linguistics | NLP | Nghiên cứu dài, tổng quan | Không gian trình bày rộng |
| JMLR | Machine Learning | Công trình dài, lý thuyết | Truy cập mở; có track phần mềm mã nguồn mở |
| TMLR | Machine Learning | Công trình vững, không cần chạy theo hạn nộp | OpenReview; tiêu chí tập trung vào độ chính xác của claim |

## Mở rộng paper hội nghị thành bài journal

Khi mở rộng một paper hội nghị thành bài journal, câu hỏi trung tâm mà biên tập viên và reviewer đặt ra là: bài journal có đóng góp gì *mới* so với bản hội nghị? Nhiều journal hoặc biên tập viên kỳ vọng một lượng nội dung mới đáng kể, thường được nhắc tới ở mức khoảng 30% so với bản hội nghị; con số này không phải quy định chung, mỗi journal có chính sách riêng, và một số journal, đặc biệt những journal có vai trò tương đương hội nghị như TACL, thường không nhận bài đã công bố ở hội nghị có proceedings. Vì vậy, bước đầu tiên luôn là đọc chính sách của journal đích về bản mở rộng.

Điều quan trọng hơn con số là *loại* nội dung mới. Những bổ sung có giá trị thật gồm: mở rộng phương pháp (thành phần mới, biến thể tổng quát hơn), thí nghiệm mới trên dataset, domain hay bối cảnh mà bản hội nghị chưa có, phân tích sâu hơn giải thích vì sao phương pháp hoạt động, kết quả lý thuyết mới, hoặc ứng dụng mới. Ngược lại, những thay đổi sau gần như không được tính là đóng góp mới: viết Related Work dài hơn, diễn đạt lại các đoạn cũ, hay chuyển nội dung từ supplementary vào bài chính.

Về thủ tục, bài journal phải trích dẫn bản hội nghị và nêu rõ khác biệt, cả trong cover letter gửi biên tập viên lẫn trong chính bài báo, thường bằng một đoạn ở cuối Introduction.

> *"This manuscript extends our preliminary work presented at [Conference, Year] [12]. The new contributions are: (1) a generalization of the method to video inputs (Sec. 4); (2) a theoretical analysis of its convergence (Sec. 5); and (3) experiments on three additional datasets together with an extended failure analysis (Sec. 7)."*

Cần lưu ý thêm vấn đề bản quyền và trùng lặp văn bản. Bản hội nghị có thể thuộc bản quyền của một nhà xuất bản, và journal thường chạy công cụ kiểm tra trùng lặp; các đoạn văn giữ nguyên từ bản hội nghị nên được viết lại khi có thể, và phải được trích dẫn đầy đủ. Chế độ ẩn danh cũng khác nhau giữa các journal, có nơi double-blind, có nơi single-blind, nên cần đọc hướng dẫn tác giả trước khi chuẩn bị bản thảo.

## Response letter cho journal

Response letter cho journal khác về bản chất so với rebuttal hội nghị. Rebuttal là một văn bản *thuyết phục* ngắn, viết một lần, trong giới hạn chặt về độ dài, và thường chỉ có thể hứa hẹn thay đổi. Response letter là một văn bản *giải trình* những thay đổi đã thực sự được thực hiện trong bản thảo sửa: reviewer sẽ đọc response letter rồi kiểm tra bản thảo để xác nhận. Không có giới hạn độ dài chặt, và quá trình có thể lặp lại nhiều vòng (major revision, minor revision), nên sự cẩn thận và nhất quán quan trọng hơn sự súc tích.

Một response letter tốt thường có cấu trúc sau. Mở đầu là một thư ngắn gửi biên tập viên, cảm ơn và tóm tắt những thay đổi lớn nhất. Sau đó, với từng reviewer và từng nhận xét, thư trích nguyên văn nhận xét, trả lời cụ thể, rồi chỉ rõ vị trí thay đổi trong bản thảo (section, trang, dòng, hình). Mọi thay đổi trong bản thảo được đánh dấu, bằng màu hoặc bằng một bản PDF so sánh được tạo bằng công cụ như `latexdiff` (với dự án nhiều file, tùy chọn `--flatten` giúp gộp các file trước khi so sánh).

```text
Reviewer 1, Comment 3:
> "The method's sensitivity to λ is not discussed."

Response: We thank the reviewer for this suggestion. We have added a
sensitivity analysis of λ in Sec. 5.4 and Fig. 9 of the revised
manuscript. Performance varies by less than 0.4 AP for λ ∈ [0.1, 1.0].

Changes: Sec. 5.4 (p. 11, lines 520–534, highlighted in blue), Fig. 9.
```

Ví dụ trên thể hiện ba nguyên tắc: trích nguyên văn nhận xét để reviewer không phải tìm lại, trả lời bằng bằng chứng cụ thể thay vì lời hứa, và chỉ rõ vị trí thay đổi để việc kiểm tra mất ít công nhất. Khi không đồng ý với reviewer, nguyên tắc vẫn vậy, nhưng cần thêm lập luận và, nếu có thể, một thay đổi nhỏ trong bản thảo để làm rõ điểm gây hiểu lầm:

```text
Reviewer 2, Comment 1:
> "The comparison with [Method B] is unfair because it uses a weaker backbone."

Response: We respectfully note that all methods in Table 3, including
[Method B], use the same backbone (ResNet-50), as stated in Sec. 6.1.
We realize this was not visible in the table itself, and we have added
a "Backbone" column to Table 3 to make the setting explicit. For
completeness, we also report results with a stronger backbone in
Table S4, where the relative ranking is unchanged.

Changes: Table 3 (new column), Table S4 (new).
```

Ở ví dụ thứ hai, tác giả không chỉ khẳng định reviewer sai mà thừa nhận rằng cách trình bày đã gây hiểu lầm, sửa bảng để hiểu lầm không lặp lại, và bổ sung bằng chứng. Đây là cách phản biện hiệu quả nhất trong response letter: reviewer cảm thấy được tôn trọng, và bản thảo thực sự tốt hơn.

## Tóm tắt

AAAI và IJCAI có đội ngũ reviewer đa dạng và giai đoạn lọc sớm, nên hai trang đầu phải tự thuyết phục được một người đọc ngoài chuyên ngành, với bối cảnh rõ ràng và thuật ngữ được định nghĩa. KDD, WWW, ACM Multimedia, WACV và BMVC mỗi nơi có khẩu vị riêng, từ quy mô và triển khai thực tế đến tính đa phương thức và ứng dụng thị giác. Journal đóng vai trò khác nhau giữa các cộng đồng: chủ yếu là bản mở rộng trong CV, có thể ngang hàng với hội nghị như TACL trong NLP, và là nơi cho công trình kỹ lưỡng không chạy theo hạn nộp như JMLR, TMLR trong ML. Bản mở rộng journal cần nội dung mới thực chất, thường được kỳ vọng ở mức khoảng 30% tùy chính sách từng nơi. Response letter giải trình những thay đổi đã thực hiện, theo cấu trúc trích nhận xét, trả lời, chỉ vị trí thay đổi.

## Bài tập

1. Lấy Introduction của một paper đang viết cho CVPR, ACL hoặc NeurIPS và viết lại hai đoạn đầu cho reviewer AAAI. Đánh dấu mọi thuật ngữ cần định nghĩa thêm.
2. Với một dự án hướng ứng dụng, so sánh mức độ phù hợp của KDD (track Applied Data Science), WACV và ACM Multimedia. Liệt kê những bằng chứng mà mỗi nơi sẽ đòi hỏi thêm.
3. Chọn một paper hội nghị đã công bố (của nhóm hoặc một paper đã đọc kỹ). Lập kế hoạch mở rộng thành bài journal: chọn journal đích, liệt kê các đóng góp mới, ước lượng tỉ lệ nội dung mới, và viết đoạn văn nêu khác biệt với bản hội nghị.
4. Từ một bộ review thật hoặc giả định, viết response letter cho ba nhận xét: một nhận xét đồng ý và bổ sung thí nghiệm, một nhận xét cần làm rõ hiểu lầm, và một nhận xét không thể đáp ứng đầy đủ kèm lý do.
