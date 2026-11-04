# Case study: Top-K Sparse Softmax Gating MoE (ICLR 2024)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một paper lý thuyết thống kê biện minh cho chỗ đứng của nó tại một hội nghị deep learning, từ trang đầu tới mục hệ quả thực tiễn.
    - Nhận ra cấu trúc của một Introduction lý thuyết: problem setup, giả định có tên, đoạn "vì sao khó", đóng góp kèm bảng tóm tắt kết quả và ý tưởng chứng minh.
    - Đánh giá cách phát biểu định lý cho người không chuyên, và những chỗ ký hiệu dày đặc làm giảm khả năng tiếp cận.
    - Thiết kế mô phỏng minh họa định lý đo đúng đại lượng gây bất ngờ nhất, kể cả cho một kết quả âm.
    - Kiểm tra xem các hệ quả thực tiễn có đúng tầm với định lý không, và đề xuất cách viết lại.

Các case study [Adam](adam.md) và [DDPM](ddpm.md) đều có lý thuyết, nhưng đóng góp chính vẫn là một thuật toán hay một mô hình được kiểm chứng bằng thực nghiệm. Bài này phân tích một kiểu paper khác hẳn: toàn bộ đóng góp là định lý, thực nghiệm chỉ gồm vài mô phỏng trong phụ lục. Kiểu paper này vẫn có chỗ đứng ở NeurIPS, ICML và ICLR nếu được viết đúng cách.

**Statistical Perspective of Top-K Sparse Softmax Gating Mixture of Experts** có bốn tác giả theo thứ tự Huy Nguyen, Pedram Akbarian, Fanqi Yan và Nhat Ho, đều thuộc The University of Texas at Austin (các khoa Statistics and Data Sciences, Electrical and Computer Engineering và Computer Science), và được nhận tại ICLR 2024 dưới dạng poster. Phân tích dựa trên bản arXiv (mã 2309.13850); bản kỷ yếu có thể khác ở một số chi tiết. Bản toàn văn được dùng kết thúc ở phần mở đầu Appendix E, nên bài không bàn các kết quả chi tiết của phần còn lại phụ lục đó.

Với người học Việt Nam, paper đáng chú ý vì hai lý do kiểm chứng được từ văn bản. Thứ nhất, bằng chứng gồm các chứng minh và một mô phỏng nhỏ trên dữ liệu tổng hợp một chiều với tối đa $10^5$ mẫu, giải bằng EM; không thí nghiệm nào đòi hỏi cụm GPU. Con đường lý thuyết vẫn dẫn tới một hội nghị hàng đầu của deep learning, miễn là câu hỏi gắn với thực hành của cộng đồng. Thứ hai, danh mục tài liệu tham khảo cho thấy các công trình trước về MoE với gating không phụ thuộc đầu vào (JMLR 2022), softmax gating (NeurIPS 2023) và Gaussian gating (AISTATS 2024) có chung tác giả với paper này: một chuỗi paper, mỗi paper giải một biến thể khó hơn của cùng một câu hỏi, là chiến lược mà các nhóm nhỏ có thể học theo.

## Bối cảnh: MoE top-K và một câu hỏi lý thuyết còn bỏ ngỏ

Mixture of Experts (MoE) là một ý tưởng thống kê từ đầu thập niên 1990: nhiều "expert", mỗi expert là một mô hình con, và một hàm gating quyết định trọng số của từng expert theo đầu vào. Biến thể dùng trong các mô hình lớn hiện nay là **top-K sparse softmax gating**: mỗi đầu vào chỉ kích hoạt $K$ expert có điểm cao nhất, nên số tham số tăng mạnh mà chi phí tính toán gần như không đổi. Case study [EDWARD-NMT](edward-nmt.md) cho thấy cơ chế này được dùng trong dịch máy cùng những vấn đề rất thực tế khi triển khai.

Câu hỏi của paper thuộc về thống kê: nếu dữ liệu thực sự sinh ra từ một MoE top-K, ước lượng hợp lý cực đại (maximum likelihood estimation, MLE) từ $n$ mẫu hội tụ nhanh tới đâu? Paper tách hai tầng: **ước lượng mật độ** (mô hình học được có tái tạo đúng phân phối của $Y$ theo $X$ không) và **ước lượng tham số** (từng tham số của gating và expert có được khôi phục đúng không). Hai tầng có thể cho kết quả rất khác nhau, và đó chính là thông điệp của paper.

Ba khái niệm nữa giúp đọc paper. **Tốc độ tham số** (parametric rate) $n^{-1/2}$ là tốc độ tốt nhất thường gặp: muốn sai số giảm một nửa, cần gấp bốn lần dữ liệu; với tốc độ $n^{-1/12}$, cần gấp $2^{12} = 4096$ lần. **Exact-specified** là khi biết số expert thật $k_*$; **over-specified** là khi chọn $k > k_*$ expert, tình huống gần với thực hành vì hiếm khi biết cần bao nhiêu expert. **Voronoi cell** là nhóm các expert ước lượng nằm gần một expert thật nhất; kích thước các cell quyết định tốc độ hội tụ khi over-specified.

| Thuật ngữ trong paper | Cách hiểu nhanh |
|---|---|
| Mixing measure $G$ | Cách viết gọn toàn bộ tham số: danh sách expert, mỗi expert kèm trọng số và tham số gating |
| Exact-specified / over-specified | Biết đúng số expert $k_*$ / chọn dư, $k > k_*$ |
| Voronoi cell $\mathcal{C}_j$ | Nhóm expert ước lượng "bám" vào expert thật thứ $j$ |
| $\tilde{\mathcal{O}}(n^{-1/2})$ | Tốc độ tham số, có thể kèm thừa số logarit |
| Hellinger distance $h$ | Khoảng cách giữa hai phân phối, đo sai số ước lượng mật độ |

Việc nộp ở ICLR đặt ra một thử thách viết riêng: phần lớn người đọc làm thực nghiệm, nên paper phải thuyết phục họ rằng một kết quả về Gaussian MoE với expert tuyến tính có ý nghĩa với người huấn luyện mô hình lớn, trình bày sao cho họ nắm được thông điệp mà không cần đọc chứng minh, và vẫn thỏa mãn reviewer lý thuyết bằng chứng minh đầy đủ (xem [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md)).

## Câu chuyện một dòng

> Top-K sparse softmax gating được dùng rộng rãi nhưng chưa có lý thuyết, vì hàm gating chia không gian đầu vào thành nhiều vùng có hành vi khác nhau; bằng cách chứng minh các vùng của mô hình ước lượng khớp với các vùng thật và xây dựng các Voronoi loss mới, paper cho thấy khi biết số expert thì mọi thứ hội tụ với tốc độ tham số, còn khi chọn dư expert thì mật độ vẫn hội tụ nhanh nếu số expert được kích hoạt đạt tới một ngưỡng, nhưng nhiều tham số hội tụ chậm hẳn; từ đó rút ra lời khuyên cho người dùng MoE.

Câu chuyện có năm nhịp, khớp với khung ở bài [Xây "câu chuyện" của paper](../01-truoc-khi-viet/cau-chuyen.md): **khoảng trống** giữa thực hành và hiểu biết; **lý do khó** (cấu trúc chia vùng, không chỉ là "chưa ai làm"); **công cụ mới**; **kết quả hai mặt**; và **trở về thực hành** qua Mục 4. Nhịp thứ tư đáng học nhất: "X hội tụ" để lại ít ấn tượng vì người dùng đã thấy X chạy tốt, còn "X hội tụ tốt ở tầng này nhưng chậm hẳn ở tầng kia, với điều kiện sau" cho người đọc điều mà thực nghiệm khó tự phát hiện.

## Title và abstract

### Một title nêu lăng kính và đối tượng

Title gồm mười từ và làm đúng hai việc: nêu **lăng kính** (*Statistical Perspective*) và gọi tên **đối tượng** bằng đúng thuật ngữ của deep learning, nên người làm MoE lướt chương trình hội nghị nhận ra ngay đối tượng quen thuộc. Title không nêu phát hiện; như bài [Title](../02-viet-tung-phan/title.md) đã bàn, title khẳng định thường mạnh hơn, nhưng thông điệp ở đây có hai mặt nên title mô tả là lựa chọn an toàn. Một chi tiết nhỏ: cụm "a statistical perspective *on*" thường gặp hơn "perspective *of*" trong tiếng Anh học thuật.

### Abstract: tám câu, có câu "vì sao khó"

| Câu | Chức năng | Nội dung (diễn giải) |
|---|---|---|
| 1 | Bối cảnh | MoE top-K được dùng rộng rãi để mở rộng mô hình mà không tăng chi phí tính toán |
| 2 | Khoảng trống | Lý thuyết về hàm gating này vẫn là bài toán mở |
| 3 | Vì sao khó | Hàm gating chia không gian đầu vào thành nhiều vùng có hành vi khác nhau |
| 4 | Cách tiếp cận | Gaussian MoE, cả ước lượng mật độ lẫn tham số |
| 5 | Công cụ | Hàm mất mát mới giữa các tham số, nắm bắt hành vi từng vùng |
| 6 | Kết quả 1 | Biết $k_*$: cả hai tốc độ đều là tốc độ tham số |
| 7 | Kết quả 2 | Over-specified: số expert được chọn phải vượt tổng cardinality của một số Voronoi cell |
| 8 | Kết quả 3 | Mật độ vẫn nhanh, tham số chậm hẳn vì tương tác gating–expert |

So với khuôn ở bài [Abstract](../02-viet-tung-phan/abstract.md), điểm mạnh hiếm thấy là **câu thứ ba giải thích vì sao bài toán khó**. Ở paper lý thuyết, thiếu câu này thì reviewer dễ coi kết quả là mở rộng thường lệ của kết quả cho softmax gating. Các câu kết quả cũng ở mức trừu tượng vừa phải: dùng chữ "parametric" thay vì công thức, và nêu nguyên nhân của tốc độ chậm chứ không chỉ hiện tượng.

Ba chỗ có thể dễ tiếp cận hơn đều nằm ở câu thứ bảy, câu mang thông điệp thực tiễn quan trọng nhất. Thứ nhất, cụm "the total cardinality of a certain number of Voronoi cells associated with the true parameters" gần như không đọc được với người làm deep learning, vì Voronoi cell chưa được định nghĩa. Thứ hai, abstract viết "must exceed" và danh sách đóng góp viết "greater than", trong khi Proposition 1 và đoạn dẫn tới nó ở Mục 3 cho điều kiện dạng $\bar K \ge$ ngưỡng; với paper lý thuyết, khác biệt giữa $>$ và $\ge$ là khác biệt về nội dung. Thứ ba, abstract không phân biệt $K$ của mô hình thật với $\bar K$ của mô hình ước lượng. Một phiên bản minh họa (không phải của nhóm tác giả), thêm ví dụ tốc độ nêu sau Theorem 4:

<div class="good" markdown>

*"When $k_*$ is unknown and the model is over-specified with $k > k_*$ experts, the density estimator converges only if the number of experts activated in the fitted model, $\bar K$, is at least the largest number of fitted experts that jointly approximate $K$ true experts. Under this condition the density rate remains parametric, whereas parameters approximated by several fitted experts are estimated much more slowly, e.g., at rate $\tilde{\mathcal{O}}(n^{-1/12})$ when three fitted experts approximate the same true expert."*

</div>

Phiên bản này bỏ được Voronoi cell khỏi abstract mà vẫn đúng nội dung, sửa $>$ thành $\ge$ và cho người đọc một con số để cảm nhận "substantially slow".

## Introduction: từ thực hành tới một bài toán thống kê chính xác

Introduction gồm ba đoạn văn xuôi, rồi bảy khối có tiêu đề in đậm đặt đầu dòng (*Problem setup*, *Universal assumptions*, *Challenge discussion*, *Contributions*, *High-level proof ideas*, *Organization*, *Notations*), cùng Figure 1 và Table 1. Paper không có mục Background hay Related Work riêng. Đây là cấu trúc phổ biến của paper lý thuyết thống kê: hết trang thứ hai, người đọc đã biết chính xác mô hình, giả định, khó khăn và kết quả.

### Ba đoạn mở đầu: từ danh sách ứng dụng tới một câu hỏi chính xác

Đoạn đầu đi từ nguồn gốc thống kê của MoE (Jacobs và cộng sự, 1991; Jordan và Jacobs, 1994) tới biến thể top-K sparse, gọi tên lợi ích theo ngôn ngữ deep learning (*conditional computation*), liệt kê ứng dụng ở ngôn ngữ, tiếng nói, thị giác, học đa tác vụ và các lĩnh vực khác, rồi nêu khoảng trống có rào đón ("to the best of our knowledge") và lăng kính chính xác: phân tích hội tụ của MLE. Danh sách ứng dụng trải rộng nhiều cộng đồng nói với reviewer ICLR rằng đối tượng của paper là đối tượng của họ.

Tuy vậy, cây cầu giữa thực hành và lý thuyết ở đây mới được xây bằng trích dẫn. Những câu hỏi người huấn luyện MoE quan tâm có mặt trong paper, một phần ở *Challenge discussion* và đầy đủ ở Mục 4; nếu được nêu ngay ở đoạn đầu, chúng biến Mục 4 thành phần "trả nợ" cho một lời hứa ở trang một:

<div class="good" markdown>

*"Practitioners face questions that theory can inform: does activating only $K$ experts per input slow down learning compared with dense gating, and how many experts must be activated when the total number of experts is chosen larger than necessary?"*

</div>

Đoạn thứ hai là phần Related Work thu nhỏ, phân tích ở mục định vị bên dưới. Đoạn thứ ba chỉ có hai câu: phân tích cho top-K "becomes substantially challenging", và để hiểu vì sao, cần xem phát biểu hình thức của mô hình. Thứ tự "báo trước khó khăn, viết mô hình, rồi giải thích khó khăn" hợp lý cho paper lý thuyết, vì khó khăn kỹ thuật chỉ giải thích được khi mô hình đã nằm trên giấy.

### Problem setup ngay trong Introduction

Khối *Problem setup* viết mật độ có điều kiện của mô hình thật, phương trình (1): mỗi expert là một Gaussian với trung bình tuyến tính theo $X$, trọng số là softmax sau phép TopK. Hàm TopK được định nghĩa hình thức rồi **diễn đạt lại bằng lời** ngay sau đó: chỉ giữ $K$ giá trị lớn nhất, đặt phần còn lại bằng $-\infty$ để trọng số triệt tiêu. Thói quen "công thức, rồi một câu bằng lời" là kỹ thuật hữu ích nhất cho khả năng tiếp cận, và paper áp dụng nó nhất quán.

Một câu trong khối này nên được viết thận trọng hơn: expert tuyến tính chỉ để trình bày cho đơn giản, và kết quả mở rộng được cho expert tổng quát, "including deep neural networks". Trong văn bản đã đọc, không có kết quả hình thức nào cho expert là mạng nơ-ron; Appendix E mở rộng theo hướng khác, thay họ Gaussian bằng các họ location-scale khác. Nêu điều kiện kỹ thuật mà chứng minh cần, hoặc hạ claim thành một hướng mở rộng tiềm năng, sẽ an toàn hơn trước reviewer ICLR.

### Bốn giả định, mỗi giả định một cái tên và một lý do

Khối *Universal assumptions* là một mẫu mực. Bốn giả định (U.1)–(U.4) đều có **tên in đậm nói lên mục đích** (*Convergence of MLE*, *Identifiability*, *Distinct Experts*, *Input-dependent Gating Functions*) và một câu về điều xảy ra nếu bỏ nó: chẳng hạn, không có (U.2) thì hai mixing measure khác nhau có thể cho cùng một mật độ (tính khả xác định được chứng minh ở Appendix C), không có (U.4) thì mô hình suy biến về trường hợp gating không phụ thuộc đầu vào đã được nghiên cứu. Đây đúng là điều bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md) khuyên.

Điều khối này chưa làm là bàn về **khoảng cách giữa giả định và thực hành**. Giả định lớn nhất, rằng dữ liệu thực sự sinh ra từ một Gaussian MoE top-K, ngầm định trong problem setup và chỉ được thừa nhận rõ ở Mục 5; việc paper phân tích MLE chứ không phải quá trình huấn luyện thực tế cũng chỉ được nhắc ở đó. Một câu ngay sau bốn giả định sẽ cho reviewer thấy nhóm tác giả ý thức về phạm vi từ sớm:

<div class="good" markdown>

*"Our analysis assumes that the data are generated from a top-K sparse softmax gating Gaussian MoE and studies the MLE itself; the misspecified setting and the algorithm used to compute the MLE are discussed in Section 5."*

</div>

### Challenge discussion và Figure 1: cho thấy vì sao khó

Khối *Challenge discussion* nêu hai khó khăn đánh số. Thứ nhất, hàm gating chia không gian đầu vào thành nhiều vùng, nên có thể xảy ra **lệch vùng**: với cùng một đầu vào, mô hình ước lượng và mô hình thật chọn hai bộ top-$K$ khác nhau. Thứ hai, khi over-specified, một expert thật có thể được nhiều expert ước lượng bám vào, nên chỉ chọn $K$ expert là không đủ; khối kết bằng câu hỏi thực tiễn: cần chọn tối thiểu bao nhiêu expert để mật độ hội tụ.

Figure 1 minh họa khó khăn thứ nhất. Theo caption, hình đặt cạnh nhau hai cách chia không gian đầu vào, của mô hình ước lượng và của mô hình thật, với $k_* = 3$, $K = 1$, và câu cuối caption trỏ thẳng tới kết quả giải quyết khó khăn ("Lemma 1 reads that this property holds when the sample size $n$ is sufficiently large"). Caption vừa tự đứng được, như bài [Figures & Tables](../02-viet-tung-phan/figures-tables.md) khuyên, vừa nối hình với cấu trúc lập luận.

### Contributions và Table 1: "Figure 1" của một paper lý thuyết

Khối *Contributions* chia đóng góp theo hai thiết lập, mỗi đoạn cùng một khuôn: tốc độ mật độ, Voronoi loss mới (phương trình (5) và (8)), cận dưới nối mật độ với loss, và hệ quả cho từng tham số. Mỗi claim có địa chỉ là một phương trình hay một định lý, đúng ánh xạ claim–bằng chứng ở bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md).

Table 1 tóm tắt toàn bộ kết quả trong hai dòng: exact-specified cho $n^{-1/2}$ ở mọi cột; over-specified cho $n^{-1/2}$ ở mật độ và trọng số, nhưng $n^{-1/2\bar r(|\mathcal{C}_j|)}$ cho $\beta_{1j}^*, b_j^*$ và $n^{-1/\bar r(|\mathcal{C}_j|)}$ cho $a_j^*, \sigma_j^*$, với caption cho hai giá trị cụ thể $\bar r = 4$ (cell hai phần tử) và $\bar r = 6$ (ba phần tử). Bảng tóm tắt kết quả đóng vai trò Figure 1 của paper lý thuyết. Bảng này làm tốt vì nó **so sánh hai thiết lập trên cùng các cột**, và nhờ hai giá trị của $\bar r$, người đọc tự tính được rằng hai expert ước lượng bám vào một expert thật cho tốc độ $n^{-1/8}$ với $\beta_1$ và $b$.

### High-level proof ideas, Organization và Notations

Khối *High-level proof ideas* tóm tắt chiến lược trong bốn câu: chứng minh các vùng đầu vào khớp nhau (Lemma 1, 2); dùng kết quả về M-estimator của van de Geer (2000) cho tốc độ mật độ (Theorem 1, 3); phân tách hiệu hai mật độ thành tổ hợp các số hạng độc lập tuyến tính để suy ra tốc độ tham số (Theorem 2, 4). Reviewer nhờ đó biết **phần nào là công cụ đã có** và **phần nào là mới**. Hai khối cuối báo trước rằng chứng minh nằm trong phụ lục và gom các quy ước ký hiệu chung.

## Định vị: một nấc thang trong chuỗi nghiên cứu về gating

Toàn bộ định vị lý thuyết nằm trong đoạn thứ hai của Introduction và được tổ chức theo một trục duy nhất là **loại hàm gating**:

| Loại gating | Công trình được trích | Điều paper ghi nhận |
|---|---|---|
| Không phụ thuộc đầu vào | Ho và cộng sự (2022) | Hàm mất mát Wasserstein tổng quát; tương tác giữa tham số expert làm tốc độ chậm dần khi số expert dư tăng |
| Softmax; Gaussian | Nguyen và cộng sự (2023); (2024) | Gating phụ thuộc đầu vào sinh tương tác giữa gating và expert; Voronoi loss; tốc độ phụ thuộc tính giải được của hệ phương trình đa thức |
| Top-K sparse softmax | Paper này | Thêm cấu trúc chia vùng; cần chứng minh sự khớp vùng và thêm phép lấy max theo vùng vào Voronoi loss |

Cách định vị theo nấc thang có ba ưu điểm: làm tính mới hiển nhiên (paper đứng ở nấc nào, khác nấc trước ở đâu); cho phép **mượn có ghi nhận** ($\bar r(2) = 4$, $\bar r(3) = 6$ và giả thuyết $\bar r(m) = 2m$ được ghi là của Nguyen và cộng sự, 2023; Voronoi cell được trích từ Manole và Ho, 2022); và tạo **điểm so sánh** cho hệ quả đầu tiên ở Mục 4. Các công trình có chung tác giả đều được trích ở ngôi thứ ba như mọi công trình khác.

Điểm có thể bổ sung nằm ở phía deep learning. Các công trình MoE thực nghiệm chỉ xuất hiện như danh sách trích dẫn, và Introduction không nhắc tới các hướng phân tích lý thuyết MoE khác ngoài chuỗi về ước lượng tham số, chẳng hạn phân tích động học huấn luyện hay router trong mạng sâu. Ba bốn câu phân biệt "paper này hỏi gì" với "các hướng khác hỏi gì" sẽ giúp reviewer đánh giá đúng phạm vi (xem [Related Work](../02-viet-tung-phan/related-work.md)).

## Phần lý thuyết: cách phát biểu và diễn giải kết quả

Với paper này, phần lý thuyết đóng vai trò của mục Method. Mục này không đi qua từng chứng minh mà rút ra những kỹ thuật giúp người không chuyên theo được mạch.

### Hai mục song song, một khuôn lặp lại

Mục 2 (exact-specified) và Mục 3 (over-specified) có cấu trúc song song; Mục 3 chèn thêm một mệnh đề về điều kiện cần trên $\bar K$ và một phân tích tương tác dẫn tới hệ phương trình đa thức.

```mermaid
flowchart TB
    subgraph S2["Mục 2: exact-specified"]
        A1["Lemma 1: vùng ước lượng khớp vùng thật"] --> A2["Theorem 1: tốc độ ước lượng mật độ"]
        A2 --> A3["Voronoi loss D1, phương trình (5)"]
        A3 --> A4["Theorem 2: tốc độ ước lượng tham số"]
    end
    subgraph S3["Mục 3: over-specified"]
        B0["Proposition 1: điều kiện cần trên K-bar"] --> B1["Lemma 2: vùng ước lượng khớp vùng thật"]
        B1 --> B2["Theorem 3: tốc độ ước lượng mật độ"]
        B2 --> B3["PDE (6), hệ đa thức (7), hàm r-bar"]
        B3 --> B4["Voronoi loss D2, phương trình (8)"]
        B4 --> B5["Theorem 4: tốc độ ước lượng tham số"]
    end
    S2 --> S3
```

Người đọc học khuôn một lần ở Mục 2, nơi mọi thứ đơn giản hơn, rồi ở Mục 3 chỉ cần chú ý các bước mới; các câu chuyển ý như "Inspired by the result of Lemma 1, we continue to present in Lemma 2…" nhắc người đọc về sự song song đó.

### Khuôn bốn nhịp cho mỗi kết quả

Mỗi kết quả chính được trình bày theo bốn nhịp: phát biểu hình thức in nghiêng có tên trong ngoặc (*Density estimation rate*, *Parameter estimation rate*); một câu con trỏ ngay sau đó ("Proof of Theorem 1 can be found in Appendix A.1."); một đoạn diễn giải dịch dạng xác suất khó đọc của phát biểu sang $\tilde{\mathcal{O}}(n^{-1/2})$; và một câu nối với bước kế tiếp. Các phát biểu cũng nói rõ hằng số phụ thuộc vào gì. Đây là khuôn "định lý tự đứng được, rồi một đoạn trực giác" ở bài [Method](../02-viet-tung-phan/method.md).

Nhịp diễn giải tốt nhất ở các nhận xét sau Theorem 4: tham số chỉ có một expert ước lượng bám vào vẫn giữ tốc độ $\tilde{\mathcal{O}}(n^{-1/2})$, còn tham số có nhiều expert bám vào hội tụ chậm dần khi cell lớn lên, kèm ví dụ bằng số: với ba expert ước lượng, $\bar r = 6$, nên $\beta_{1j}^*, b_j^*$ có tốc độ $\tilde{\mathcal{O}}(n^{-1/12})$ và $a_j^*, \sigma_j^*$ có tốc độ $\tilde{\mathcal{O}}(n^{-1/6})$. Ví dụ này biến một công thức có lũy thừa lồng nhau thành điều người đọc cảm nhận được.

Điểm có thể làm tốt hơn là phác thảo chứng minh. Phần chính không có phác thảo nào cạnh từng định lý, trong khi phụ lục tổ chức chứng minh cận dưới thành ba bước có tên (*Taylor expansion*, *Non-vanishing coefficients*, *Fatou's contradiction*); ba câu gọi tên ba bước này trong phần chính sẽ cho người đọc bản đồ của phần khó nhất. Proposition 1 cũng chỉ có trực giác một nửa: paper giải thích vì sao chọn đúng $K$ expert là không đủ, nhưng không giải thích vì sao ngưỡng lại là tổng kích thước các cell. Một câu như "if fewer experts are activated than the fitted experts that approximate the active true experts, some true expert necessarily loses part of its weight in some input region" sẽ giúp người đọc tin vào kết quả trước khi mở phụ lục.

### Proposition 1: một kết quả âm thành thông điệp thực tiễn

Proposition 1 phát biểu rằng nếu $\bar K$ nhỏ hơn giá trị lớn nhất, trên mọi bộ $K$ expert thật, của tổng kích thước các Voronoi cell tương ứng, thì khoảng cách Hellinger kỳ vọng giữa mọi mô hình ước lượng và mô hình thật bị chặn dưới bởi một số dương: dù có bao nhiêu dữ liệu, mật độ cũng không hội tụ. Với người dùng, **kết quả âm** này có lẽ là kết quả hữu ích nhất của paper, vì nó nói khi nào một cấu hình chắc chắn không hoạt động.

Có hai chỗ người đọc có thể vấp. Thứ nhất, theo phương trình (4), Voronoi cell phụ thuộc vào mixing measure $G$ được xét, trong khi mệnh đề lấy infimum trên mọi $G$; người đọc khó biết các cell trong điều kiện thuộc về mixing measure nào (chứng minh ở Appendix B.3 làm việc với các cell của một dãy mixing measure tiến dần về $G_*$, nhưng phát biểu không nói điều đó). Thứ hai, người dùng không biết trước cấu trúc cell, nên ngưỡng chưa phải một con số tính được.

Chỗ thứ hai có thể giải quyết bằng chính lập luận đếm mà Mục 4 dùng: khi $n$ đủ lớn, mỗi expert thật có ít nhất một expert ước lượng bám vào, nên tổng kích thước của bất kỳ $K$ cell nào không vượt quá $k - (k_* - K)$; do đó chọn $\bar K = K + k - k_*$ luôn đáp ứng điều kiện cần của Proposition 1. Với mô phỏng của paper ($k_* = 2$, $k = 3$, $K = 1$), công thức cho $\bar K = 2$, đúng giá trị Appendix D.3 chọn. Một dòng hệ quả như vậy (không có trong paper) biến một điều kiện trừu tượng thành quy tắc dùng được ngay.

### Voronoi loss và PDE: gọi tên tương tác bằng một phương trình

Trước khi viết $\mathcal{D}_1$, paper nói vì sao cần nó: nếu chứng minh được khoảng cách Hellinger kỳ vọng $\gtrsim \mathcal{D}_1$, tốc độ mật độ sẽ chuyển thành tốc độ tham số. Sau khi viết, paper giải thích thành phần lạ nhất, phép lấy max trên các bộ $K$ expert, "helps capture the behaviors of all input regions". Đây là khuôn Why–What–How ở bài [Method](../02-viet-tung-phan/method.md), áp dụng cho một hàm mất mát lý thuyết.

Với $\mathcal{D}_2$, paper đi xa hơn: thay vì chỉ nói có "an intrinsic interaction", paper viết tương tác thành hai phương trình đạo hàm riêng (6), nối đạo hàm hỗn hợp theo tham số gating $\beta_1$ và bias $b$ với đạo hàm theo hệ số $a$, và nối đạo hàm theo phương sai $\sigma$ với đạo hàm bậc hai theo $b$. Các số hạng dạng này phụ thuộc tuyến tính nên phải gộp hệ số, dẫn tới hệ đa thức (7) quyết định $\bar r$. Một đẳng thức chính xác làm cho chữ "interaction" có nội dung kiểm tra được.

Điều còn thiếu là một câu trực giác cho người không chuyên, vốn khó tự suy ra vì sao phụ thuộc tuyến tính làm chậm tốc độ. Một cách hiểu (không phải của paper):

<div class="good" markdown>

*"Intuitively, (6) says that a small change in the expert slope $a$ affects the density like a joint second-order change in the gating parameter $\beta_1$ and the expert bias $b$, and a change in the variance $\sigma$ acts like a second-order change in $b$. When several fitted experts approximate one true expert, such changes can compensate each other, so the data pin down each parameter only at a slower rate."*

</div>

### Ký hiệu dày đặc: cái giá và cách giảm

Paper dùng một hệ ký hiệu rất dày: riêng các số nguyên đã có $k_*$, $k$, $k'$, $K$, $\bar K$, $q$, $\bar q$, bên cạnh ba họ vùng đầu vào, các cell $\mathcal{C}_j$, hai loss, hàm $\bar r$, tập chỉ số $\mathcal{J}_{\eta_1,\eta_2}$ và năm nhóm biến $z$; cụm danh từ "top-K sparse softmax gating Gaussian MoE" lặp lại hơn chục lần trong phần chính.

Paper có những thói quen tốt: ký hiệu mới được định nghĩa ngay khi xuất hiện, công thức quan trọng có câu bằng lời đi kèm. Nhưng năm chữ $k_*$, $k$, $k'$, $K$, $\bar K$ chỉ khác nhau ở chữ hoa, dấu sao và gạch ngang là nguồn nhầm lẫn thực sự, và vài quy ước thống kê xa lạ với người đọc ICLR: $\sigma$ ở đây là **phương sai** chứ không phải độ lệch chuẩn (paper chỉ ghi một lần "with mean $\mu$ and variance $\sigma$"), còn mixing measure được giải thích là "a linear combination of $k_*$ Dirac measures", chính xác nhưng khó hình dung. Các cách giảm chi phí đã được trình bày ở bài [Method](../02-viet-tung-phan/method.md): bảng ký hiệu đầu phụ lục, chữ khác hẳn nhau cho đại lượng dễ nhầm, tên gọi tắt cho cụm danh từ dài, và macro LaTeX cho mọi ký hiệu (xem [LaTeX & Overleaf](../03-ky-thuat/latex.md)).

## Bằng chứng: chứng minh trong phụ lục và mô phỏng minh họa

### Phụ lục chứng minh như một hệ thống

Phụ lục mở bằng một đoạn liệt kê vai trò của Appendix A đến E, và mỗi tiểu mục mở bằng một câu nói nó chứng minh gì. Bổ đề mượn từ tài liệu được ghi nguồn ngay trong tên (Lemma 4 là Theorem 7.4 của van de Geer, 2000), và khung ba bước của chứng minh cận dưới được tái sử dụng tường minh từ Appendix A sang Appendix B. Appendix E nêu rằng họ Student's t và Laplace thỏa *strong identifiability* còn họ Gaussian location-scale thì không, giúp người đọc hiểu vì sao phần chính có thêm phương trình thứ hai trong (6). Đây là kiểu phụ lục "viết cho người tra cứu" ở bài [Viết cho NeurIPS / ICML / ICLR](../06-cong-dong/ml.md).

Giữ tham chiếu chéo nhất quán qua hàng chục trang chứng minh là một thách thức riêng. Trong bản arXiv đã đọc, đoạn mở Appendix B nói nó chứng minh "Theorem B.1 and Theorem 4", trong khi tiểu mục B.1 có tiêu đề là chứng minh của Theorem 3. Lỗi nhỏ này không ảnh hưởng nội dung, nhưng nhắc rằng mọi tham chiếu nên được tạo bằng `\ref` hay `\cref`; case study [Adam](adam.md) cho thấy cộng đồng ML đọc phụ lục nghiêm túc hơn người viết thường nghĩ.

### Mô phỏng: đúng tinh thần toy experiment

Appendix D mô tả thiết lập đủ để tái hiện: $k_* = 2$ expert với tham số cụ thể, $X$ phân phối đều trên $[0, 1]$, mọi thí nghiệm dùng $K = 1$. MLE được tính bằng một biến thể EM với coordinate gradient descent ở bước M, vì tham số gating không có công thức cập nhật dạng đóng; ngưỡng hội tụ $10^{-6}$, tối đa 2000 vòng lặp. Thiết lập exact-specified dùng 40 lần sinh mẫu trên 200 cỡ mẫu từ $10^2$ tới $10^5$; over-specified dùng 40 lần sinh mẫu trên 100 cỡ mẫu trong cùng khoảng, với $\bar K = 2$. Figure 3 vẽ trên thang log-log, có error bar bằng hai độ lệch chuẩn thực nghiệm và đường hồi quy bình phương tối thiểu.

Thiết kế này đáp ứng gần như mọi tiêu chí của một toy experiment tốt: ground truth được biết nên đo trực tiếp được Voronoi loss; thang log-log biến tốc độ hội tụ thành độ dốc; error bar được nói rõ ý nghĩa. Tham số được khởi tạo gần giá trị thật, sau khi phân ngẫu nhiên các expert vào các Voronoi cell, nhờ đó câu hỏi thống kê (MLE hội tụ nhanh tới đâu) được tách khỏi câu hỏi tối ưu (EM có tìm được MLE không); paper cũng thừa nhận sự hội tụ toàn cục của EM cho MoE top-K vẫn chưa được hiểu rõ.

### Mô phỏng có thể đo đúng điều gây bất ngờ nhất

Có bốn chỗ phần mô phỏng có thể phục vụ thông điệp tốt hơn. Thứ nhất, **mô phỏng chỉ nằm trong phụ lục**, phần chính chỉ nhắc tới nó ở khối *Organization*; một câu sau Theorem 2 trỏ tới Figure 3 sẽ neo lý thuyết vào bằng chứng ngay trong phần người đọc ICLR chắc chắn đọc.

Thứ hai, **mô phỏng đo Voronoi loss, đại lượng mà Theorem 2 và Theorem 4 đều dự đoán tốc độ $n^{-1/2}$**, nên hai hình con của Figure 3 về bản chất kiểm tra cùng một tốc độ, còn điều gây bất ngờ nhất, tốc độ chậm của từng tham số, không được vẽ. Với $k = 3$, $k_* = 2$, Table 1 dự đoán sai số của $\beta_1$ và $b$ ở expert có hai thành phần bám vào giảm theo $n^{-1/8}$, của $a$ và $\sigma$ theo $n^{-1/4}$; vẽ chúng cạnh sai số của expert chỉ có một thành phần sẽ cho người đọc **thấy** sự chênh lệch.

Thứ ba, **kết quả âm không được minh họa.** Một mô phỏng với $\bar K = 1$ trong cùng thiết lập over-specified, cho thấy khoảng cách mật độ không giảm khi $n$ tăng, là bằng chứng rẻ và thuyết phục nhất cho Proposition 1; như bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md) đã bàn, cho thấy điều gì thất bại khi điều kiện bị vi phạm thường có sức nặng hơn một thí nghiệm thành công nữa.

Thứ tư, **cách diễn đạt kết quả.** Văn bản của D.2 nói Figure 3a cho thấy tốc độ "perfectly matches" lý thuyết, trong khi D.3 không trỏ tới hình tương ứng và không nêu rõ điều quan sát được. Báo cáo độ dốc của đường hồi quy cho từng hình chính xác hơn "perfectly matches" và cho người đọc một con số để so với $-0{,}5$.

## Mục 4: hệ quả thực tiễn, cây cầu trở lại với deep learning

Mục 4 "Practical Implications" là phần biến một paper thống kê thành một paper ICLR, với ba hệ quả, mỗi hệ quả có tiêu đề in đậm và một đoạn lập luận nối về một kết quả cụ thể.

Hệ quả thứ nhất, *No trade-off between model capacity and model performance*, dùng kỹ thuật **nêu kỳ vọng ngây thơ rồi lật nó**: gating thưa không liên tục nên người ta sẽ kỳ vọng ước lượng tham số chậm hơn softmax gating dày đặc, nhưng theo lý thuyết, tốc độ như nhau ở cả hai thiết lập. Hệ quả thứ hai, *Favourable gating function*, lập luận rằng với top-1 gating, giá trị gating chỉ là 0 hoặc 1 nên tương tác qua phương trình thứ nhất trong (6) biến mất, và rào đón rằng điều này "partially accounts for" hiệu quả của top-1 gating trong Switch Transformer. Hệ quả thứ ba, *True/ Minimal number of experts*, dùng lập luận đếm: cell lớn nhất có tối đa $\hat k_n - k_* + 1$ phần tử, cho tốc độ tệ nhất $\tilde{\mathcal{O}}(n^{-1/2\bar r(\hat k_n - k_* + 1)})$, nên số expert ước lượng không nên quá lớn so với số expert thật, một mẫu tốt về việc dịch định lý thành lời khuyên định lượng.

Ba hệ quả có độ chặt chẽ khác nhau, và cách viết nên phản ánh điều đó. **Tiêu đề của hệ quả thứ nhất hứa nhiều hơn định lý**: định lý nói về tốc độ ước lượng trong một Gaussian MoE được giả định đúng mô hình, còn "model performance" trong deep learning thường được hiểu là độ chính xác trên tác vụ. Thân đoạn viết đúng tầm, nhưng người đọc lướt chỉ đọc tiêu đề; *"Sparsity does not slow down estimation relative to dense softmax gating"* nói đúng điều được chứng minh. **Hệ quả thứ hai là lập luận định tính**, không có định lý đi kèm trong phần chính, và người đọc cẩn thận có thể hỏi nó khớp thế nào với Proposition 1: với $K = 1$, mệnh đề đòi $\bar K$ không nhỏ hơn kích thước cell lớn nhất, nên khi một expert thật có hai expert ước lượng bám vào, mô hình ước lượng không thể dùng top-1 mà mật độ vẫn hội tụ. Một câu nói rõ phạm vi, hoặc đánh dấu đây là nhận xét heuristic, sẽ chặn trước câu hỏi đó.

!!! warning "Hệ quả thực tiễn phải đúng tầm với định lý"
    Mục hệ quả thực tiễn là nơi dễ phóng đại nhất của một paper lý thuyết nộp hội nghị deep learning, vì đó là nơi tác giả muốn chứng minh sự liên quan. Với mỗi hệ quả, ghi rõ nó dựa trên định lý nào, dưới giả định nào, và chỉ dùng trong tiêu đề những từ mà định lý cho phép; suy luận ngoài định lý nên được gọi là "remark" và đi kèm động từ rào đón.

## Limitations, kết luận và văn phong

Paper không có mục Limitations riêng; Mục 5 "Conclusion and Future Directions" đảm nhận vai trò đó khá tốt với ba hướng, mỗi hướng gồm vấn đề, lý do khó và một cách tiếp cận có trích dẫn: ước lượng số expert thật và số expert cần chọn; thiết lập misspecified, kèm lý do phân tích hiện có không áp dụng được (không gian tham số không lồi); và đảm bảo thống kê cho EM. Hướng thứ hai thực chất là thừa nhận hạn chế lớn nhất, và việc paper nói thẳng giả định mô hình "can be violated in real-world settings" là dấu hiệu trung thực; đưa một câu như vậy lên Introduction sẽ giúp reviewer không phải đợi tới trang cuối (xem [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md)).

Về văn phong, paper dùng giọng "we" nhất quán, các cụm chuyển ý chuẩn của văn bản toán học ("Following from…", "A few remarks on this theorem are in order") và rào đón các claim về tính mới. Ngược lại, "significantly slow" xuất hiện nhiều lần và có thể thay bằng chính con số tốc độ. Bản arXiv đã đọc còn vài lỗi ngữ pháp nhỏ như "an univariate" hay "challenges comes"; với một paper mà mỗi ký hiệu đều phải chính xác, một vòng đọc soát ngôn ngữ cuối (xem [Tiếng Anh học thuật](../03-ky-thuat/van-phong.md)) là khoản đầu tư rẻ.

## Bài học cho người viết

**Bắt đầu từ thực hành của cộng đồng đích, kết thúc bằng hệ quả cho chính thực hành đó.** Danh sách ứng dụng ở trang đầu và ba lời khuyên ở Mục 4 biến một kết quả thống kê thành một paper ICLR. Phép thử: nếu bỏ hết định lý, trang đầu và mục hệ quả có còn nói với người làm thực nghiệm một điều đáng nghe không?

**Giải thích vì sao khó trước khi phát biểu kết quả.** Câu thứ ba của abstract, *Challenge discussion* và Figure 1 cùng trả lời "sao không áp dụng luôn kết quả cũ?", vai trò giống đoạn "vì sao cách sửa hiển nhiên không dùng được" ở paper thực nghiệm.

**Mỗi giả định một cái tên, một câu "nếu bỏ thì sao", và một câu về khoảng cách với thực tế.** U.1–U.4 làm tốt hai việc đầu; việc thứ ba nên nằm ngay cạnh.

**Bảng tóm tắt kết quả là Figure 1 của paper lý thuyết, và mỗi kết quả trừu tượng cần một ví dụ bằng số.** Table 1 và nhận xét $n^{-1/12}$ sau Theorem 4 cho người đọc lướt nắm thông điệp và cảm nhận "chậm" là chậm tới đâu.

**Biến kết quả âm thành một quy tắc tính được, và minh họa nó.** Một dòng hệ quả $\bar K = K + k - k_*$ và một mô phỏng với $\bar K$ quá nhỏ là hai mảnh còn thiếu để Proposition 1 phát huy hết giá trị.

**Hệ quả thực tiễn chỉ được nói đúng điều định lý cho phép.** Tiêu đề "No trade-off between model capacity and model performance" cho thấy ranh giới mỏng giữa dịch kết quả sang ngôn ngữ người dùng và phóng đại nó.

### Áp dụng sang các cộng đồng khác

Trong **Machine Learning**, các bài học áp dụng trực tiếp cho paper lý thuyết ở NeurIPS, ICML, ICLR và cho paper phương pháp có mục lý thuyết: khuôn bốn nhịp, giả định có tên, bảng tóm tắt kết quả và mô phỏng log-log có error bar là những thứ reviewer lý thuyết tìm đầu tiên. Trong **NLP**, paper thuần lý thuyết hiếm ở ACL hay EMNLP, nhưng paper phân tích, chẳng hạn giải thích vì sao MoE trong dịch máy (xem [EDWARD-NMT](edward-nmt.md)) hoạt động hay thất bại, cần đúng cấu trúc "vì sao khó, phát biểu chính xác, hệ quả cho người dùng". Trong **Computer Vision**, khi một paper đưa vào một mệnh đề về loss hay tính bất biến của một module, khuôn "phát biểu, con trỏ tới chứng minh, một câu bằng lời, một ví dụ bằng số" giúp reviewer ít đọc chứng minh vẫn thấy mệnh đề quan trọng ở đâu.

## Tóm tắt

Paper về top-K sparse softmax gating MoE cho thấy cách viết một paper lý thuyết thống kê cho hội nghị deep learning: mở đầu từ thực hành MoE, giải thích vì sao khó ngay trong abstract, đặt problem setup, giả định có tên, đoạn "vì sao khó" kèm Figure 1, đóng góp kèm Table 1 và ý tưởng chứng minh vào Introduction, định vị bằng một nấc thang các loại gating, trình bày hai thiết lập theo cùng một khuôn bốn nhịp, gọi tên tương tác gating–expert bằng một phương trình, và khép lại bằng ba hệ quả thực tiễn. Những điểm có thể làm tốt hơn gồm câu thông điệp thực tiễn trong abstract khó đọc và lệch nhẹ với phát biểu $\ge$ của Proposition 1, ký hiệu dễ nhầm, thiếu phác thảo chứng minh và trực giác trong phần chính, mô phỏng chưa minh họa tốc độ chậm của từng tham số lẫn kết quả âm, và tiêu đề của hệ quả đầu tiên hứa nhiều hơn định lý. Tất cả đều là bài học về khả năng tiếp cận và về sự khớp nhau giữa ngôn từ và kết quả.

## Bài tập

1. Viết lại câu thứ bảy trong abstract cho người đọc deep learning: không dùng khái niệm Voronoi cell, phân biệt $K$ với $\bar K$, dùng đúng quan hệ $\ge$ của Proposition 1, rồi so sánh với phiên bản minh họa trong bài.
2. Viết một kết quả lý thuyết trong dự án hiện tại (hoặc một mệnh đề trong paper đang đọc) theo khuôn bốn nhịp: phát biểu, câu con trỏ tới chứng minh, đoạn diễn giải bằng lời, ví dụ bằng số.
3. Viết một đoạn "Challenge discussion" cho dự án hiện tại, giải thích vì sao kết quả hoặc kỹ thuật gần nhất không áp dụng trực tiếp được, kèm phác thảo một hình kiểu Figure 1 và caption trỏ tới kết quả giải quyết khó khăn.
4. Thiết kế lại Appendix D với $k_* = 2$, $k = 3$, $K = 1$: nêu đại lượng cần vẽ để thấy tốc độ $n^{-1/8}$ và $n^{-1/4}$, độ dốc kỳ vọng trên thang log-log, và một mô phỏng với $\bar K = 1$ minh họa Proposition 1.
5. Lập bảng ký hiệu cho paper này hoặc cho bản thảo hiện tại, đánh dấu các cặp dễ nhầm và đề xuất cách đổi.
6. Với mỗi hệ quả trong Mục 4, ghi rõ kết quả và giả định nó dựa vào, rồi viết lại tiêu đề chỉ dùng những từ mà kết quả cho phép; làm tương tự cho các câu "practical implication" trong bản thảo hiện tại.
