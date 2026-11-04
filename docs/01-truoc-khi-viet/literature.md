# Đọc và lập bản đồ tài liệu

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Áp dụng phương pháp đọc ba lượt để phân bổ thời gian đọc hợp lý giữa hàng trăm paper.
    - Đọc một paper tốt với con mắt của người viết để học cấu trúc và cách lập luận.
    - Tìm, theo dõi và quản lý tài liệu bằng các công cụ phổ biến ở cả ba cộng đồng CV, NLP và ML.
    - Xây dựng bảng literature và bản đồ định vị, rồi dùng chúng làm nguyên liệu cho Introduction, Related Work và danh sách baseline.
    - Ước lượng số trích dẫn hợp lý và tránh bỏ sót công trình gần nhất.

Mục tiêu của việc đọc tài liệu khi chuẩn bị một paper không phải là "đọc thật nhiều", mà là **biết chính xác công trình đang thực hiện nằm ở đâu** trên bản đồ của lĩnh vực: ai đã giải quyết bài toán này, bằng cách nào, với những giả định gì, và khoảng trống nào còn lại. Hiểu biết đó được kiểm tra ở ít nhất ba nơi trong paper. Phần Introduction phải nêu được khoảng trống một cách thuyết phục; phần Related Work phải cho thấy tác giả nắm vững các hướng tiếp cận chính; và phần Experiments phải so sánh với đúng những baseline mạnh nhất. Một lỗ hổng về tài liệu thường lộ ra ở cả ba nơi cùng lúc.

Có một lý do thực tế khác khiến việc đọc kỹ trở nên quan trọng. Ở nhiều hội nghị, việc phân công reviewer dựa một phần trên mức độ tương đồng giữa paper được nộp và các công trình mà reviewer đã công bố. Hệ quả là những người có công trình gần nhất với paper, tức chính tác giả của các paper mà nhóm cần trích dẫn, có khả năng cao nằm trong số reviewer. Họ biết rõ lĩnh vực, biết những công trình mới nhất, và sẽ nhận ra ngay nếu một công trình quan trọng bị bỏ sót.

Bài này trình bày cách đọc hiệu quả, cách đọc để học viết, các công cụ tìm kiếm và quản lý tài liệu, rồi tới hai công cụ tư duy là bảng literature và bản đồ định vị. Cuối bài là các nguyên tắc về số lượng và chất lượng trích dẫn.

## Phương pháp đọc ba lượt

Với tốc độ công bố hiện nay, không ai có thể đọc kỹ mọi paper liên quan. Mỗi ngày các danh mục cs.CV, cs.CL và cs.LG trên arXiv đều nhận rất nhiều bài mới, và một hội nghị lớn có thể chấp nhận hàng nghìn paper. Vì vậy, kỹ năng quan trọng nhất không phải là đọc nhanh mà là **quyết định đúng mức độ đọc cho từng paper**. Phương pháp ba lượt được S. Keshav trình bày trong bài viết ngắn *How to Read a Paper* (ACM SIGCOMM Computer Communication Review, 2007) là một khung làm việc đơn giản và hiệu quả cho việc này.

**Lượt thứ nhất** kéo dài khoảng năm đến mười phút. Người đọc xem tiêu đề, abstract và Introduction, lướt qua các tiêu đề mục, đọc phần kết luận và liếc qua danh sách tài liệu tham khảo để nhận ra những công trình đã biết. Ở các paper CV và ML, việc nhìn Figure 1 và bảng kết quả chính cũng thuộc lượt này. Keshav đề xuất rằng sau lượt thứ nhất, người đọc cần trả lời được năm câu hỏi, thường được gọi là "năm chữ C": paper thuộc loại gì (*Category*), nó liên quan tới những công trình nào và dựa trên nền tảng lý thuyết nào (*Context*), các giả định có vẻ hợp lý không (*Correctness*), đóng góp chính là gì (*Contributions*), và paper có được viết rõ ràng không (*Clarity*). Phần lớn paper chỉ cần dừng ở lượt này.

**Lượt thứ hai** có thể mất tới khoảng một giờ. Người đọc đi qua toàn bộ paper một cách cẩn thận nhưng bỏ qua những chi tiết như chứng minh. Trọng tâm của lượt này là các hình và bảng: trục có được ghi chú rõ không, có error bar không, so sánh có công bằng không, kết luận rút ra có thực sự được hình và bảng ủng hộ không. Người đọc cũng đánh dấu những tài liệu tham khảo chưa đọc mà có vẻ quan trọng, vì đó là nguồn để mở rộng tìm kiếm. Sau lượt này, người đọc phải tóm tắt được ý chính và bằng chứng của paper cho người khác.

**Lượt thứ ba** dành cho số ít paper cốt lõi nhất, thường chỉ năm đến mười paper gần nhất với dự án. Keshav mô tả lượt này như việc "tái hiện" paper trong đầu: với cùng giả định như tác giả, người đọc tự hỏi nếu ở vị trí tác giả thì sẽ trình bày và chứng minh thế nào, từ đó nhận ra những giả định ngầm, những thí nghiệm còn thiếu và những điểm yếu có thể khai thác. Với người mới, lượt này có thể mất nhiều giờ. Trong bối cảnh CV, NLP và ML, lượt thứ ba thường bao gồm cả việc đọc code chính thức, tự suy lại các phương trình và có thể chạy thử code. Những paper đi tới lượt thứ ba thường chính là baseline chính hoặc nền tảng trực tiếp của dự án.

| Lượt | Thời gian | Đọc gì | Kết quả cần có |
|---|---|---|---|
| Thứ nhất | 5–10 phút | Tiêu đề, abstract, Introduction, tiêu đề mục, Figure 1, kết luận, lướt tài liệu tham khảo | Trả lời năm chữ C; quyết định có đọc tiếp hay không |
| Thứ hai | Tới khoảng 1 giờ | Toàn bộ paper, bỏ qua chứng minh; xem kỹ hình và bảng | Tóm tắt được ý chính, bằng chứng và điểm yếu; danh sách tài liệu cần đọc thêm |
| Thứ ba | Vài giờ | Tái hiện lập luận, đọc code, suy lại phương trình | Hiểu đủ sâu để chỉ ra giả định ngầm, thí nghiệm còn thiếu, hướng cải tiến |

## Đọc như người viết

Phương pháp ba lượt giúp hiểu *nội dung* của paper. Nhưng với người đang học viết paper, mỗi paper tốt còn là một bài mẫu về *cách trình bày*. Khi đọc một paper xuất sắc trong lĩnh vực đang nghiên cứu, người học nên thêm một lớp câu hỏi khác: tác giả mở đầu Introduction bằng gì, khoảng trống được nêu ra ở đoạn thứ mấy và bằng loại bằng chứng nào, Figure 1 truyền đạt điều gì, đoạn liệt kê đóng góp được viết ra sao, mỗi điểm yếu tiềm tàng được "phòng thủ" bằng thí nghiệm nào, và phần Limitations thừa nhận những gì.

ResNet là một ví dụ đáng phân tích theo cách này. Introduction của paper bắt đầu từ thành công của các mạng sâu, rồi đặt một câu hỏi rất ngắn: *"Is learning better networks as easy as stacking more layers?"* Ngay sau đó, Figure 1 không minh họa kiến trúc đề xuất mà trình bày bằng chứng của vấn đề: một mạng thông thường 56 lớp có training error và test error cao hơn mạng 20 lớp trên CIFAR-10. Với một hình duy nhất, người đọc hiểu rằng vấn đề không phải overfitting mà là tối ưu hóa, và lời giải được đưa ra sau đó trở nên tự nhiên. Người đọc như người viết sẽ rút ra một bài học có thể áp dụng: Figure 1 không nhất thiết phải là hình kiến trúc; nó có thể là bằng chứng thuyết phục nhất cho khoảng trống mà paper giải quyết (xem thêm [Introduction & Figure 1](../02-viet-tung-phan/introduction.md) và case study [ResNet](../05-case-studies/resnet.md)).

Những quan sát kiểu này nên được ghi lại thành một sổ tay riêng, gồm các cấu trúc đoạn văn, cách chuyển ý và các mẫu câu hay. Mục đích là học *cấu trúc*, không phải sao chép câu chữ. Sau vài chục paper, người học sẽ có một kho mẫu đủ phong phú để viết tự tin hơn nhiều. Phụ lục [Template & mẫu câu](../phu-luc/templates.md) có thể là điểm khởi đầu cho kho này.

!!! tip "Đọc cả review, không chỉ đọc paper"
    Trên OpenReview, review, rebuttal và thảo luận của các paper ICLR, và trong những năm gần đây của nhiều paper NeurIPS, được công khai. Đọc review của các paper gần với dự án, kể cả paper bị reject, là cách nhanh nhất để biết reviewer trong lĩnh vực đó hay hỏi gì, nghi ngờ điều gì và đánh giá cao điều gì. Những câu hỏi lặp lại trong review chính là những thí nghiệm mà paper của nhóm nên chuẩn bị sẵn.

## Tìm tài liệu: lan tỏa từ các paper hạt giống

Trước khi đi vào từng công cụ, cần có một quy trình tìm kiếm rõ ràng, vì công cụ chỉ hiệu quả khi được dùng có phương pháp. Một quy trình đáng tin cậy là lan tỏa từ các paper "hạt giống" (*seed papers*), thường được gọi là *snowballing*.

Quy trình bắt đầu bằng việc chọn ba đến năm paper hạt giống: những paper mới nhất và gần nhất với bài toán, cộng thêm một hoặc hai bài survey nếu có. Từ mỗi hạt giống, người đọc đi lùi qua danh sách tài liệu tham khảo của nó để tìm các công trình nền tảng (*backward snowballing*), và đi tiến qua danh sách các paper đã trích dẫn nó để tìm các công trình mới hơn (*forward snowballing*). Mỗi paper liên quan mới tìm được lại trở thành hạt giống cho vòng tiếp theo. Quy trình dừng lại khi các vòng mới chủ yếu chỉ trả về những paper đã biết, tức là khi tìm kiếm đã bão hòa. Ở mỗi vòng, phương pháp ba lượt được áp dụng: đa số paper chỉ qua lượt thứ nhất, một phần đi tới lượt thứ hai, và rất ít đi tới lượt thứ ba.

Quy trình này bổ sung cho tìm kiếm bằng từ khóa đã trình bày trong bài [Tìm và thẩm định ý tưởng](y-tuong.md#tim-kiem-novelty-ba-tang). Từ khóa giúp tìm những paper dùng cùng thuật ngữ; trích dẫn giúp tìm những paper dùng thuật ngữ khác nhưng cùng dòng nghiên cứu.

## Công cụ tìm kiếm, theo dõi và quản lý

Các công cụ dưới đây đáp ứng ba nhu cầu khác nhau: tìm kiếm tài liệu đã có, theo dõi tài liệu mới xuất hiện, và quản lý tài liệu để trích dẫn. Không cần dùng tất cả, nhưng nên biết mỗi công cụ mạnh ở điểm nào.

### Tìm kiếm

**Google Scholar** có phạm vi bao phủ rộng nhất, với chức năng "Cited by" để đi tiến theo trích dẫn, trang hồ sơ của từng tác giả và chức năng tạo alert. **Semantic Scholar** là công cụ tìm kiếm học thuật có tích hợp các tính năng dựa trên AI, như tóm tắt một câu (TLDR) cho paper, hiển thị ngữ cảnh mà một paper được trích dẫn, đánh dấu các trích dẫn có ảnh hưởng lớn, và cung cấp API cho những ai muốn tự động hóa việc thu thập. **arXiv** là kho preprint chính của cả ba cộng đồng, với các danh mục như cs.CV, cs.CL, cs.LG và stat.ML; thói quen lướt danh sách bài mới hằng ngày của danh mục chính giúp nắm bắt các công trình ngay khi chúng xuất hiện.

Bên cạnh đó là các kho của từng cộng đồng. **ACL Anthology** lưu trữ toàn bộ paper của các hội nghị, tạp chí và workshop thuộc hệ ACL, miễn phí, kèm BibTeX chuẩn; với NLP, đây là nguồn trích dẫn có thẩm quyền nhất. **OpenReview** là nơi các hội nghị như ICLR và NeurIPS, cũng như tạp chí TMLR, tổ chức quá trình review; với ICLR, cả bài nộp lẫn review đều được công khai. ACL Rolling Review cũng vận hành trên OpenReview nhưng review không được công khai như ICLR. Với Computer Vision, paper của CVPR và ICCV có thể được truy cập miễn phí qua CVF Open Access.

### Khám phá và theo dõi

**Papers with Code** trong nhiều năm là nơi tra cứu bảng xếp hạng (*leaderboard*) của các benchmark, kèm liên kết giữa paper, code và kết quả, rất hữu ích để xác định SOTA và tìm baseline có code. Cần lưu ý rằng từ khoảng giữa năm 2025, trang này ngừng hoạt động độc lập và được chuyển hướng sang Hugging Face; người đọc nên kiểm tra tình trạng hiện tại của dịch vụ và luôn đối chiếu số liệu leaderboard với paper gốc. **Connected Papers** xây dựng đồ thị các paper tương tự dựa trên mức độ trùng lặp trong trích dẫn, giúp nhìn thấy các cụm nghiên cứu xung quanh một paper hạt giống; ResearchRabbit và Litmaps là các công cụ có chức năng tương tự. **Hugging Face Daily Papers** là danh sách paper đáng chú ý được cộng đồng chọn và bình chọn hằng ngày, đặc biệt mạnh ở mảng mô hình ngôn ngữ lớn và đa phương thức. Cần nhớ rằng mức độ được quan tâm trên mạng xã hội không đồng nghĩa với chất lượng hay mức độ liên quan, nên các danh sách này nên được dùng để phát hiện chứ không phải để đánh giá.

Để theo dõi lâu dài, cách hiệu quả nhất là tạo alert trên Google Scholar cho các từ khóa chính và cho những tác giả chủ chốt trong lĩnh vực, kết hợp với các feed gợi ý trên Semantic Scholar.

### Quản lý tài liệu

Khi số paper lên tới hàng trăm, một phần mềm quản lý tài liệu trở nên không thể thiếu. **Zotero** là lựa chọn phổ biến: miễn phí, mã nguồn mở, có tiện ích trình duyệt để lưu paper chỉ bằng một cú nhấp, hỗ trợ ghi chú trên PDF và thư viện nhóm để chia sẻ giữa các đồng tác giả. Plugin **Better BibTeX** cho Zotero tạo citation key ổn định và tự động xuất file `.bib` mỗi khi thư viện thay đổi, giúp đồng bộ với dự án LaTeX (xem [LaTeX & Overleaf](../03-ky-thuat/latex.md)). Paperpile và Mendeley là các lựa chọn thay thế.

Một thói quen nhỏ nhưng quan trọng là lấy BibTeX của **phiên bản đã công bố** từ nguồn đáng tin cậy, như ACL Anthology cho NLP hoặc DBLP cho cả ba cộng đồng, thay vì dùng BibTeX tự sinh từ bản arXiv.

### Tổng hợp

| Công cụ | Dùng để | Ghi chú |
|---|---|---|
| Google Scholar | Tìm kiếm rộng, "Cited by", alert | Phạm vi lớn nhất, metadata đôi khi thiếu chính xác |
| Semantic Scholar | Tìm kiếm, TLDR, ngữ cảnh trích dẫn, API | Tốt cho đi theo trích dẫn |
| arXiv | Preprint mới nhất | Lướt danh mục cs.CV, cs.CL, cs.LG hằng ngày |
| ACL Anthology | Paper và BibTeX của hệ ACL | Nguồn trích dẫn chuẩn cho NLP |
| OpenReview | Bài nộp, review, rebuttal (ICLR, NeurIPS, TMLR…) | Học cách reviewer phản biện |
| Papers with Code | Leaderboard, paper kèm code | Đã chuyển hướng sang Hugging Face từ khoảng giữa 2025; kiểm tra tình trạng hiện tại |
| Connected Papers | Đồ thị paper tương tự | Phát hiện các cụm nghiên cứu |
| Hugging Face Daily Papers | Paper đáng chú ý hằng ngày | Dùng để phát hiện, không để đánh giá |
| Zotero + Better BibTeX | Quản lý thư viện, xuất `.bib` tự động | Thư viện nhóm cho đồng tác giả |

## Bảng literature

Trí nhớ không đáng tin cậy khi số paper đã đọc lên tới vài chục. Sau vài tuần, người đọc thường chỉ còn nhớ mang máng rằng "có một paper làm gần giống thế", mà không nhớ chính xác giả định của nó hay kết quả trên benchmark nào. Giải pháp là một **bảng literature**: mỗi paper đã qua lượt đọc thứ hai được ghi thành một dòng, với các cột cố định. Bảng có thể nằm trong một bảng tính, Notion hoặc Obsidian; điều quan trọng là cấu trúc cột thống nhất và được cập nhật đều đặn.

Mỗi cột trong bảng có một mục đích. Cột "Ý tưởng chính" (viết trong một câu) là cơ sở để gom nhóm trong Related Work. Cột "Giả định và hạn chế" là nguyên liệu để nêu khoảng trống trong Introduction. Cột "Kết quả" ghi số liệu trên các benchmark chung, giúp chọn baseline và kiểm tra số liệu khi lập bảng so sánh. Cột "Code" cho biết có thể tái lập dễ hay khó. Cột cuối cùng ghi quan hệ với dự án: baseline chính, nền tảng kỹ thuật, công trình cạnh tranh, hay chỉ cần trích dẫn trong Related Work. Ví dụ dưới đây dùng các dòng minh họa giả định từ hai cộng đồng.

| Paper | Năm / venue | Bài toán | Ý tưởng chính (1 câu) | Giả định / hạn chế | Kết quả | Code | Quan hệ với dự án |
|---|---|---|---|---|---|---|---|
| Phương pháp P (giả định) | CVPR, năm gần nhất | Tái tạo 3D từ ít ảnh | Dùng prior từ mô hình khuếch tán để bù góc nhìn thiếu | Cần biết camera pose | PSNR trên benchmark B | Có | Baseline chính |
| Phương pháp Q (giả định) | EMNLP, năm gần nhất | Hỏi đáp đa ngôn ngữ | Dịch câu hỏi sang tiếng Anh rồi truy xuất | Phụ thuộc chất lượng dịch máy; chỉ thử 5 ngôn ngữ | F1 trên benchmark C | Không | Cần so sánh, khó tái lập |

Khi đã có vài chục dòng, bảng literature trở thành nguyên liệu trực tiếp cho ít nhất ba phần của paper. Thứ nhất là **Related Work**: gom các paper theo cột ý tưởng chính thành hai đến bốn nhóm, mỗi nhóm thành một đoạn văn, và kết thúc mỗi đoạn bằng câu nêu khác biệt của paper so với nhóm đó (xem [Related Work](../02-viet-tung-phan/related-work.md)). Thứ hai là **bảng so sánh tính chất**, thường thấy ở cả paper CV lẫn NLP, trong đó mỗi hàng là một phương pháp và mỗi cột là một tính chất quan trọng, như ví dụ giả định dưới đây. Thứ ba là **danh sách baseline** cho phần Experiments, chọn từ những dòng có quan hệ "baseline chính" hoặc "cần so sánh".

| Phương pháp | Không cần camera pose | Chạy thời gian thực | Tổng quát hóa sang cảnh mới |
|---|---|---|---|
| Phương pháp A | ✗ | ✓ | ✗ |
| Phương pháp B | ✓ | ✗ | ✗ |
| Phương pháp C | ✗ | ✗ | ✓ |
| Phương pháp đề xuất | ✓ | ✓ | ✓ |

Bảng tính chất có sức thuyết phục cao nhưng cũng dễ bị lạm dụng. Nếu các cột được chọn chỉ để phương pháp đề xuất có toàn dấu ✓, reviewer sẽ nhận ra. Các tính chất phải là những tính chất mà cộng đồng thực sự quan tâm, và mỗi dấu ✓ của phương pháp đề xuất phải được chứng minh trong phần thí nghiệm.

## Bản đồ định vị

Bảng literature liệt kê từng công trình; **bản đồ định vị** (*positioning map*) giúp nhìn tổng thể. Cách làm đơn giản: chọn hai trục quan trọng nhất của bài toán, rồi đặt các phương pháp hiện có lên mặt phẳng tạo bởi hai trục đó. Công trình của nhóm phải chiếm một vị trí còn trống *có ý nghĩa*, hoặc phải giải thích được vì sao vị trí đó quan trọng.

Việc chọn trục phụ thuộc vào bài toán và cộng đồng. Ở Computer Vision, hai trục thường gặp là độ chính xác và tốc độ, hoặc mức độ giám sát cần thiết và chất lượng kết quả. Ở NLP, đó có thể là chất lượng trên tiếng Anh và độ bao phủ ngôn ngữ, hoặc lượng dữ liệu có nhãn cần thiết và hiệu năng. Ở ML lý thuyết, đó có thể là độ mạnh của giả định và độ mạnh của đảm bảo: một kết quả hội tụ với giả định yếu hơn những gì đã biết là một vị trí mới trên bản đồ.

```text
                 Độ chính xác cao
                        ^
          [A]           |           [B]
                        |
   Chậm  <--------------+-------------->  Nhanh
                        |
          [C]           |        * Phương pháp đề xuất?
                        |          (cần lên được góc trên bên phải,
                        v           hoặc giải thích vì sao góc này quan trọng)
                 Độ chính xác thấp
```

Hai lưu ý giúp bản đồ có giá trị thực. Thứ nhất, một góc trống có thể trống vì chưa ai làm được, nhưng cũng có thể vì không ai cần; người viết phải lập luận được rằng vị trí được chọn đáp ứng một nhu cầu thực. Thứ hai, bản đồ định vị không chỉ là công cụ tư duy: ở nhiều paper về hiệu quả tính toán, nó trở thành chính Figure 1 dưới dạng biểu đồ đánh đổi giữa độ chính xác và chi phí, với phương pháp đề xuất nằm trên đường biên Pareto.

## Bao nhiêu trích dẫn là đủ?

Không có con số cố định, nhưng có những khoảng điển hình. Một paper main conference ở CVPR, ICCV hay ECCV thường có khoảng 40 đến 80 tài liệu tham khảo. Paper dài ở NLP và ML nhìn chung nằm trong khoảng tương tự, dù dao động khá rộng theo kiểu paper: short paper ở các hội nghị thuộc hệ ACL thường có ít hơn, còn paper phân tích hoặc paper mở ra một hướng mới thường có nhiều hơn. Ở hầu hết hội nghị A\* trong những năm gần đây, phần tài liệu tham khảo không bị tính vào giới hạn số trang, nên không có lý do gì để cắt bớt trích dẫn cần thiết; tuy vậy, quy định cụ thể vẫn cần được kiểm tra trong Author Guidelines của năm nộp. Một paper dài với ít hơn khoảng 30 tài liệu tham khảo dễ bị reviewer cho là "chưa khảo sát đủ".

Quan trọng hơn số lượng là việc trích dẫn đúng những gì cần trích dẫn. Một danh sách tài liệu tham khảo tốt cần có các công trình tốt nhất trong khoảng mười hai tháng gần nhất cho đúng bài toán của paper; các paper gốc (*seminal*) của mọi kỹ thuật được sử dụng; các công trình ở mảng lân cận có ý tưởng tương tự; và các nguồn của mọi dataset, metric, mô hình pre-trained và công cụ phần mềm được dùng. Khi một paper đã được công bố tại hội nghị hoặc tạp chí, nên trích dẫn phiên bản đó thay vì bản arXiv. Ngược lại, cần tránh hai thói quen làm giảm uy tín: trích dẫn tràn lan những paper không liên quan để làm dày danh sách, và tự trích dẫn quá mức các công trình của chính nhóm.

## Không bỏ sót công trình gần nhất

Trong tất cả các lỗi liên quan đến tài liệu, nghiêm trọng nhất là bỏ sót công trình gần nhất với paper, dù vô tình hay cố ý. Như đã nói ở đầu bài, cơ chế phân công reviewer khiến khả năng tác giả của công trình đó nằm trong số reviewer, hoặc ít nhất là biết rõ nó, là rất cao. Khi phát hiện thiếu sót, reviewer chỉ có hai cách hiểu: hoặc nhóm tác giả không nắm vững lĩnh vực, hoặc nhóm cố tình che giấu để paper trông mới hơn. Cả hai đều dẫn tới đánh giá thấp, và nhận xét *"missing comparison with [recent work]"* là một trong những lý do reject thường gặp nhất.

!!! danger "Đừng 'quên' paper gần nhất"
    Cố tình không trích dẫn một paper tương tự để trông "mới" hơn là chiến lược tệ nhất có thể. Cách đúng là trích dẫn, ghi nhận đóng góp của paper đó một cách tôn trọng, và nêu chính xác khác biệt. Một paper thừa nhận thẳng thắn công trình gần nhất và chứng minh được khác biệt bằng thí nghiệm luôn có vị thế mạnh hơn một paper giả vờ rằng công trình đó không tồn tại.

Cách viết về công trình gần nhất cũng quan trọng. Câu văn nên mô tả chính xác điều công trình đó đã làm, rồi nêu khác biệt bằng những đặc điểm kiểm chứng được, thay vì những đánh giá chung chung hoặc hạ thấp. So sánh hai cách viết sau (ví dụ giả định):

<div class="bad" markdown>
*"Y et al. [15] proposed a naive approach that fails in realistic settings."*

Câu này hạ thấp công trình trước mà không nêu được khác biệt cụ thể; nếu reviewer là tác giả của [15], paper đã tự tạo ra một người phản biện không thiện cảm.
</div>

<div class="good" markdown>
*"Y et al. [15] were the first to apply score distillation to sparse-view reconstruction, assuming known camera poses. Our method builds on this idea but jointly estimates poses, which enables reconstruction from casually captured images (Sec. 5.2)."*

Câu này ghi nhận đóng góp, nêu rõ giả định của công trình trước, chỉ ra khác biệt kiểm chứng được và trỏ tới thí nghiệm chứng minh.
</div>

Cuối cùng, tài liệu không đứng yên trong lúc nhóm làm thí nghiệm. Khoảng một đến hai tuần trước deadline, cần lặp lại tìm kiếm trên arXiv, OpenReview và các kho của hội nghị, dựa trên nhật ký tìm kiếm đã ghi, để cập nhật những công trình mới xuất hiện và xử lý chúng theo nguyên tắc về concurrent work (xem [Tìm và thẩm định ý tưởng](y-tuong.md#concurrent-work)).

## Tóm tắt

Đọc tài liệu khi chuẩn bị paper nhằm định vị chính xác công trình trong lĩnh vực, vì hiểu biết đó được kiểm tra ở Introduction, Related Work và Experiments, thường bởi chính những reviewer có công trình gần nhất. Phương pháp đọc ba lượt giúp phân bổ thời gian hợp lý: đa số paper chỉ cần lượt thứ nhất, và chỉ vài paper cốt lõi cần lượt thứ ba. Đọc như người viết biến mỗi paper tốt thành một bài học về cấu trúc và lập luận. Tìm kiếm nên lan tỏa có hệ thống từ các paper hạt giống, kết hợp các công cụ như Google Scholar, Semantic Scholar, arXiv, ACL Anthology, OpenReview và Zotero. Bảng literature và bản đồ định vị là hai công cụ biến những gì đã đọc thành nguyên liệu cho paper, còn danh sách tài liệu tham khảo tốt được đánh giá qua việc trích dẫn đúng và đủ, đặc biệt là không bỏ sót công trình gần nhất.

## Bài tập

1. Chọn mười paper gần đây liên quan tới dự án. Đọc lượt thứ nhất cho cả mười paper và ghi câu trả lời cho năm chữ C. Chọn ba paper để đọc lượt thứ hai và một paper để đọc lượt thứ ba, giải thích lý do chọn.
2. Xây dựng bảng literature cho dự án với ít nhất hai mươi paper theo cấu trúc cột trong bài. Từ bảng đó, đề xuất cách gom nhóm cho phần Related Work và danh sách baseline cho phần Experiments.
3. Vẽ bản đồ định vị cho dự án với hai trục phù hợp nhất. Viết một đoạn văn ngắn giải thích vì sao vị trí của công trình là một vị trí trống có ý nghĩa.
4. Chọn một paper đoạt giải hoặc có ảnh hưởng lớn trong lĩnh vực và đọc nó như người viết. Ghi lại ít nhất năm kỹ thuật trình bày (cách mở bài, cách nêu khoảng trống, vai trò của Figure 1, cách liệt kê đóng góp, cách phòng thủ điểm yếu) có thể áp dụng cho paper của nhóm.
