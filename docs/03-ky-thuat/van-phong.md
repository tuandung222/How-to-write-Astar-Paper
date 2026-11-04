# Tiếng Anh học thuật

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Áp dụng bảy nguyên tắc viết rõ ở cấp độ câu và đoạn văn, và giải thích vì sao mỗi nguyên tắc giúp reviewer đọc nhanh hơn.
    - Chọn thì và ngôi phù hợp cho từng phần của paper.
    - Nhận diện các lỗi tiếng Anh mà người Việt hay mắc, hiểu nguồn gốc của chúng từ khác biệt giữa tiếng Việt và tiếng Anh, và tự sửa.
    - Thay các cụm từ sáo rỗng hoặc dễ gây phản cảm bằng cách diễn đạt cụ thể, chính xác.
    - Điều chỉnh văn phong theo thói quen của cộng đồng Computer Vision, NLP hoặc Machine Learning.
    - Dùng kỹ thuật *reverse outline* để kiểm tra cấu trúc của một bản draft.

Một paper hội nghị không cần tiếng Anh "văn hoa". Nó cần tiếng Anh **rõ ràng, chính xác và nhất quán**. Phần lớn reviewer ở CVPR, ACL hay NeurIPS cũng không phải người bản ngữ, và họ đọc paper trong điều kiện thiếu thời gian: mỗi người phụ trách nhiều bài trong vài tuần, thường đọc vào buổi tối sau một ngày làm việc. Với người đọc như vậy, một câu văn phải đọc hai lần mới hiểu là một chi phí thật, và chi phí ấy được trả bằng thiện cảm dành cho paper. Hầu hết mẫu review đều có mục đánh giá độ rõ ràng (*clarity* hoặc *presentation*), nhưng ảnh hưởng của văn phong còn lan rộng hơn thế: khi không hiểu một đoạn mô tả phương pháp, reviewer dễ kết luận rằng phương pháp có vấn đề.

Tin tốt là viết rõ là một kỹ năng có quy tắc, học được, và không đòi hỏi vốn từ phong phú. Bài này đi từ cấp độ câu và đoạn (bảy nguyên tắc), qua các lựa chọn ngữ pháp có tính quy ước (thì và ngôi), tới những lỗi đặc thù của người viết tiếng Việt, rồi kết thúc bằng khác biệt văn phong giữa các cộng đồng và một kỹ thuật kiểm tra cấu trúc toàn bài. Các câu ví dụ trong bài được viết riêng cho mục đích minh họa; số liệu trong đó là giả định.

## Bảy nguyên tắc viết rõ

Bảy nguyên tắc dưới đây xuất phát từ cùng một ý tưởng: người đọc xử lý văn bản theo thứ tự từ trái sang phải với một bộ nhớ làm việc có hạn, và mỗi câu văn nên được sắp xếp sao cho người đọc phải "giữ trong đầu" ít thứ nhất. Các nguyên tắc này không phải luật cứng; chúng là những thói quen mà khi vi phạm, người viết cần có lý do.

### Nguyên tắc 1: Một ý một câu

Người viết tiếng Việt quen với những câu dài nối nhiều mệnh đề bằng "và", "nhằm", "từ đó", "qua đó". Khi chuyển sang tiếng Anh, thói quen này tạo ra những câu năm sáu chục từ mà người đọc phải giữ phần mở đầu trong đầu cho tới tận cuối câu mới biết nó dẫn tới đâu. Xét câu sau, trích từ phần Introduction giả định của một paper NLP:

<div class="bad" markdown>
*In order to address the problem that existing multilingual models perform poorly on low-resource languages because their pre-training data is dominated by high-resource languages, which leads to unbalanced representations, we propose a sampling strategy that reweights languages during pre-training and also introduce a vocabulary extension method that adds subwords for underrepresented scripts.*
</div>

Câu này chứa bốn ý: hiện tượng (mô hình kém trên ngôn ngữ ít tài nguyên), nguyên nhân (dữ liệu mất cân bằng), hệ quả (biểu diễn mất cân bằng) và giải pháp gồm hai phần. Người đọc phải đi qua gần ba mươi từ mới gặp chủ ngữ và động từ chính "we propose". Tách thành nhiều câu, mỗi câu mang một ý, cho kết quả dễ đọc hơn hẳn mà không mất thông tin nào:

<div class="good" markdown>
*Existing multilingual models perform poorly on low-resource languages. A key reason is that their pre-training data is dominated by high-resource languages, which leads to unbalanced representations. We address this imbalance in two ways. First, we reweight languages during pre-training. Second, we extend the vocabulary with subwords for underrepresented scripts.*
</div>

Một quy tắc kinh nghiệm hữu ích là cân nhắc tách mọi câu dài hơn khoảng 30 từ. Tuy vậy, mục tiêu không phải là viết toàn câu ngắn: một chuỗi câu năm sáu từ nghe cộc lốc như bản ghi chú. Đoạn văn tốt xen kẽ câu ngắn và câu vừa, và mỗi câu chỉ gánh một ý chính.

### Nguyên tắc 2: Chủ ngữ và động từ đứng gần nhau, xuất hiện sớm

Người đọc tiếng Anh tìm "ai làm gì" ngay từ đầu câu. Khi chủ ngữ bị kéo dài bởi các mệnh đề phụ, hoặc động từ chính bị đẩy ra xa chủ ngữ, người đọc buộc phải treo một cấu trúc chưa hoàn chỉnh trong đầu. Ví dụ sau thuộc một paper ML về ước lượng gradient:

<div class="bad" markdown>
*The fact that the variance of the gradient estimator, which depends on both the batch size and the number of Monte Carlo samples used in the inner loop, grows linearly with the horizon makes training unstable.*
</div>

Chủ ngữ thật là cả cụm "The fact that … with the horizon", và động từ chính "makes" chỉ xuất hiện sau hơn ba mươi từ. Viết lại với chủ ngữ ngắn và động từ đi ngay sau:

<div class="good" markdown>
*The variance of the gradient estimator grows linearly with the horizon, which makes training unstable. This variance also depends on the batch size and on the number of Monte Carlo samples in the inner loop.*
</div>

Các cụm như "The fact that", "It is the case that", "What we found is that" gần như luôn có thể bỏ, và việc bỏ chúng thường tự động đưa chủ ngữ thật lên đầu câu.

### Nguyên tắc 3: Thông tin cũ trước, thông tin mới sau

Một đoạn văn trôi chảy khi mỗi câu bắt đầu bằng điều người đọc đã biết (vừa được nhắc ở câu trước) và kết thúc bằng điều mới. Vị trí cuối câu là nơi người đọc tự nhiên dồn sự chú ý, nên thông tin quan trọng nhất nên đặt ở đó. Khi trật tự này bị đảo, người đọc cảm thấy các câu "nhảy cóc" dù từng câu đều đúng ngữ pháp. Xét hai câu trong một paper CV về ước lượng tư thế người:

<div class="bad" markdown>
*Existing pose estimators often assign keypoints to the wrong person in crowded scenes. A depth-aware attention module that reasons about which person is in front is what we propose to address this problem.*
</div>

Câu thứ hai mở đầu bằng một khái niệm hoàn toàn mới ("A depth-aware attention module") và chỉ nối về câu trước ở cuối ("this problem"). Đảo lại trật tự, đồng thời thêm một câu bắc cầu giải thích nguyên nhân:

<div class="good" markdown>
*Existing pose estimators often assign keypoints to the wrong person in crowded scenes. This error arises mainly from occlusion: when two people overlap, their visible keypoints become ambiguous. To resolve this ambiguity, we propose a depth-aware attention module that reasons about which person is in front.*
</div>

Mỗi câu trong bản sửa bắt đầu bằng một cụm nối với câu trước ("This error", "To resolve this ambiguity") và kết thúc bằng thông tin mới (nguyên nhân là occlusion; giải pháp là module đề xuất). Đây cũng là cách tự nhiên nhất để tạo liên kết giữa các câu mà không cần lạm dụng từ nối như "Moreover" hay "Furthermore".

### Nguyên tắc 4: Câu đầu đoạn nêu ý chính của đoạn

Reviewer thường đọc lướt, và khi đọc lướt, họ đọc câu đầu của mỗi đoạn. Vì vậy, câu đầu đoạn (*topic sentence*) nên nêu ý chính hoặc kết luận của đoạn, còn các câu sau đóng vai trò giải thích và chứng minh. Một phép thử đơn giản: nếu chỉ đọc các câu đầu đoạn của một mục, người đọc phải nắm được lập luận của mục đó. Đoạn bình luận kết quả sau minh họa lỗi thường gặp nhất, đặt kết luận ở cuối:

<div class="bad" markdown>
*Table 3 reports results on five benchmarks. On the first two benchmarks, our method obtains the highest accuracy. On the third, the gap to the strongest baseline is small. On the fourth, our method is again the best. On the last one, it is slightly worse. Overall, our method outperforms all baselines on four of the five benchmarks.*
</div>

Đoạn văn này buộc người đọc đi qua năm câu liệt kê mới tới kết luận, và câu đầu ("Table 3 reports…") không nói lên điều gì. Đưa kết luận lên đầu, rồi dùng phần còn lại để giải thích những điểm đáng chú ý:

<div class="good" markdown>
*Our method outperforms all baselines on four of the five benchmarks (Table 3). The gains are largest on the two benchmarks with the longest inputs, which is consistent with our motivation in Section 3. The only exception is the last benchmark, where our method is slightly worse; we attribute this to its short inputs, which leave little room for the proposed memory mechanism.*
</div>

Bản sửa không chỉ dễ đọc hơn mà còn buộc người viết làm việc phân tích: thay vì đọc lại bảng, đoạn văn giải thích vì sao các con số như vậy và nối chúng về với động lực của phương pháp.

### Nguyên tắc 5: Nhất quán thuật ngữ

Trong văn chương, lặp từ bị xem là nghèo nàn, và người viết được khuyến khích dùng từ đồng nghĩa. Trong văn bản kỹ thuật thì ngược lại: mỗi lần người viết đổi từ, người đọc có lý do để nghĩ rằng đó là một khái niệm khác. Một paper về retrieval-augmented generation lần lượt dùng "document", "passage", "chunk" và "context" để chỉ cùng một đơn vị văn bản sẽ khiến reviewer dừng lại tự hỏi bốn thứ này khác nhau thế nào. Tương tự, một paper CV gọi cùng một thành phần là "backbone", "encoder" và "feature extractor" ở ba chỗ khác nhau buộc người đọc tự đối chiếu với hình vẽ.

Cách khắc phục là định nghĩa thuật ngữ một lần, ở lần xuất hiện đầu tiên, rồi dùng đúng từ đó cho tới hết paper:

<div class="good" markdown>
*We split each document into **passages** of 100 words. At inference time, the retriever returns the top-k **passages**, which are concatenated with the question.*
</div>

Nguyên tắc này áp dụng cho cả ký hiệu toán (một ký hiệu cho một đại lượng, một đại lượng chỉ có một ký hiệu) và cho tên phương pháp, tên biến thể trong ablation. File `macros.tex` trong bài [LaTeX & Overleaf](latex.md) là công cụ hỗ trợ trực tiếp cho nguyên tắc này.

### Nguyên tắc 6: Động từ mạnh thay cho danh từ hóa

Danh từ hóa (*nominalization*) là việc biến một hành động thành danh từ rồi gắn nó vào một động từ yếu: "perform an analysis of" thay vì "analyze". Tiếng Việt học thuật rất ưa cấu trúc này ("tiến hành đánh giá", "thực hiện phân tích", "đạt được sự cải thiện"), nên khi dịch sát, người viết dễ tạo ra những câu dài hơn cần thiết và kém sức sống. Thay danh từ hóa bằng động từ tương ứng thường rút ngắn câu và làm rõ ai làm gì.

| Danh từ hóa | Động từ mạnh |
|---|---|
| *We perform an analysis of the errors.* | *We analyze the errors.* |
| *We conduct an evaluation of our model on three datasets.* | *We evaluate our model on three datasets.* |
| *Our method achieves an improvement of 2 points.* | *Our method improves accuracy by 2 points.* |
| *We make a comparison between the two variants.* | *We compare the two variants.* |
| *The reduction of memory usage is achieved by sharing weights.* | *Weight sharing reduces memory usage.* |

Ví dụ cuối đáng chú ý vì nó kết hợp danh từ hóa với câu bị động; bản sửa vừa ngắn hơn một nửa vừa đưa tác nhân thật ("weight sharing") lên làm chủ ngữ.

### Nguyên tắc 7: Cụ thể thay cho chung chung

Những câu như "our method significantly improves performance" hay "the model works well on long inputs" không cho reviewer bất cứ thông tin nào để đánh giá. Reviewer sẽ phải lật tới bảng kết quả để tự tìm con số, và nếu con số khiêm tốn hơn lời khẳng định, họ sẽ nghi ngờ mọi khẳng định khác trong paper. Câu cụ thể nêu rõ đại lượng, mức độ và điều kiện:

<div class="bad" markdown>
*Our method significantly improves performance and works well on long inputs.*
</div>

<div class="good" markdown>
*Our method improves exact match by 2.1 points on average over the three QA benchmarks. The gain grows to 5.3 points for questions whose context exceeds 4k tokens, whereas the strongest baseline degrades sharply beyond this length.*
</div>

Ví dụ trên thuộc một paper NLP, nhưng nguyên tắc giống hệt ở các cộng đồng khác: trong một paper CV, "*works better on small objects*" nên được thay bằng "*improves AP on small objects by 3.0 points on COCO*"; trong một paper ML, "*trains faster*" nên được thay bằng "*reaches the same validation loss with 30% fewer gradient steps*".

Cụ thể cũng có nghĩa là chính xác về mức độ chắc chắn. Một kết quả thực nghiệm "*suggests*" hoặc "*indicates*" điều gì đó; chỉ một chứng minh mới "*proves*". Một thuật toán không chỉ "*converges*" mà "*converges at a rate of O(1/√T) under Assumption 1*". Việc chọn đúng động từ thể hiện mức độ chắc chắn (*hedging*) không phải là sự rụt rè, mà là dấu hiệu của người viết hiểu rõ bằng chứng đang có mạnh tới đâu.

## Thì và ngôi

Sau các nguyên tắc ở cấp độ câu và đoạn, chúng ta chuyển sang hai lựa chọn ngữ pháp mang tính quy ước: thì của động từ và ngôi của chủ ngữ. Đây là những lựa chọn mà người viết tiếng Việt thường băn khoăn, vì tiếng Việt không bắt buộc đánh dấu thì và cho phép lược chủ ngữ.

Quy ước phổ biến trong cả ba cộng đồng là dùng **thì hiện tại đơn** cho những gì luôn đúng trong paper: mô tả phương pháp ("*Our model predicts…*"), sự thật chung ("*Depth estimation from a single image is ill-posed*") và nội dung của bảng, hình ("*Table 2 shows that…*"). Lý do là phương pháp và kết quả, một khi đã được trình bày, là những khẳng định có hiệu lực tại thời điểm người đọc đọc paper. Với các thí nghiệm đã thực hiện, cả thì quá khứ ("*We trained all models for 100 epochs*") lẫn hiện tại ("*We train…*") đều được chấp nhận; điều quan trọng là chọn một và giữ nhất quán trong cả mục. Khi mô tả công trình trước, paper CV và ML thường dùng thì hiện tại ("*He et al. propose…*"), còn quá khứ cũng phổ biến, đặc biệt khi nhấn mạnh tính lịch sử ("*Early work relied on hand-crafted features*").

| Ngữ cảnh | Thì thường dùng | Ví dụ |
|---|---|---|
| Mô tả phương pháp đề xuất, sự thật chung | Hiện tại đơn | *"Our model predicts…"*, *"Depth is ambiguous…"* |
| Mô tả công trình trước | Hiện tại (phổ biến) hoặc quá khứ | *"Devlin et al. (2019) introduce…"* |
| Thí nghiệm đã thực hiện | Quá khứ hoặc hiện tại, nhất quán trong cả mục | *"We trained…"* hoặc *"We train…"* |
| Nội dung bảng, hình | Hiện tại | *"Table 1 shows that…"* |
| Kế hoạch tương lai | Tương lai hoặc hiện tại | *"We will release the code"*, *"We leave … to future work"* |

Về ngôi, đại từ **"we"** là chuẩn mực trong cả ba cộng đồng, kể cả trong paper chỉ có một tác giả. "We" giúp câu văn chủ động, ngắn gọn và chỉ rõ đâu là đóng góp của nhóm tác giả, phân biệt với công trình trước. Câu bị động vẫn có chỗ đứng khi tác nhân không quan trọng hoặc hiển nhiên ("*The images are resized to 224 × 224*"), nhưng một mục Method viết toàn bằng bị động sẽ khiến người đọc không rõ bước nào là đề xuất mới và bước nào là thực hành chuẩn. Các cách nói vòng như "*the authors*" hay "*this paper proposes*" lặp lại nhiều lần nghe cứng nhắc; "*In this paper, we propose…*" chỉ cần xuất hiện một lần trong Introduction.

## Lỗi người Việt hay mắc và nguồn gốc của chúng

Phần lớn lỗi tiếng Anh của người viết Việt Nam không ngẫu nhiên mà có hệ thống, vì chúng xuất phát từ những khác biệt cấu trúc giữa hai ngôn ngữ. Tiếng Việt là ngôn ngữ đơn lập: từ không biến đổi hình thái, không có mạo từ, không chia động từ theo ngôi hay số, và thì được đánh dấu tùy ý bằng các từ như "đã", "đang", "sẽ". Hiểu nguồn gốc của lỗi giúp người viết biết chỗ nào cần dò lại, thay vì phải học thuộc từng trường hợp.

### Mạo từ

Tiếng Việt không có mạo từ. Những gì gần nhất là các từ chỉ định như "này", "đó" (gần với "the") và việc dùng loại từ "một" khi giới thiệu (gần với "a"), nhưng cả hai đều không bắt buộc. Vì thế, người viết Việt thường bỏ mạo từ ở nơi tiếng Anh bắt buộc, hoặc thêm "the" vào nơi không cần. Ba quy tắc kinh nghiệm bao quát phần lớn trường hợp trong paper. Thứ nhất, danh từ đếm được số ít luôn cần một từ hạn định (a/an, the, this, our…): không viết "*network takes image as input*" mà viết "*the network takes an image as input*". Thứ hai, lần đầu giới thiệu một thực thể dùng "a/an", các lần sau khi người đọc đã biết thực thể đó thì dùng "the": "*We propose a module… The module consists of…*". Thứ ba, danh từ chỉ khái niệm chung, danh từ không đếm được và danh từ số nhiều mang nghĩa tổng quát thì không dùng "the": "*Deep learning has…*", "*Transformers are widely used*", chứ không viết "*The deep learning has…*".

Một số trường hợp đặc thù của paper cũng cần lưu ý. Tên phương pháp và tên mô hình thường không đi với mạo từ ("*BERT outperforms…*", "*ResNet uses…*"). Tên dataset dùng riêng lẻ cũng vậy ("*on COCO*", "*on ImageNet*"), nhưng khi đi kèm danh từ chung thì cần "the" ("*the COCO dataset*", "*the GLUE benchmark*"). Các cụm "*the proposed method*", "*the encoder in Figure 2*" luôn có "the" vì người đọc biết chính xác thực thể nào đang được nói tới.

### Số nhiều và danh từ không đếm được

Danh từ tiếng Việt không đổi hình thức ở số nhiều; ý nghĩa số nhiều được thể hiện bằng "các", "những" hoặc ngữ cảnh. Hệ quả là người viết hay quên "-s" ("*many method*", "*one of the main challenge*"). Một lỗi tinh vi hơn đến từ việc một số danh từ đếm được trong tiếng Việt lại không đếm được trong tiếng Anh: "một nghiên cứu", "các thông tin", "những phản hồi" khiến người viết tạo ra "*researches*", "*informations*", "*feedbacks*". Những danh từ không đếm được hay gặp trong paper gồm *research, information, knowledge, feedback, software, evidence, equipment, guidance*; khi cần đếm, dùng "*many studies*", "*two pieces of evidence*". Từ "*work*" theo nghĩa công trình nghiên cứu cũng thường được dùng như danh từ không đếm được ("*prior work*", "*related work*"); "*prior works*" khá phổ biến trong paper khoa học máy tính nhưng nhiều người biên tập coi là không chuẩn, nên "*prior work*" là lựa chọn an toàn hơn. Với "*data*", cả cách dùng số ít ("*the data is*") và số nhiều ("*the data are*") đều được chấp nhận; chỉ cần nhất quán.

### Hòa hợp chủ ngữ và động từ, nhất quán thì

Động từ tiếng Việt không đổi theo chủ ngữ, nên lỗi hòa hợp như "*The results shows…*" hay "*Each of the models achieve…*" rất phổ biến, nhất là khi chủ ngữ và động từ cách xa nhau (một lý do nữa để tuân theo Nguyên tắc 2). Tương tự, vì "đã", "đang", "sẽ" là tùy chọn, người viết Việt hay nhảy thì trong cùng một đoạn: câu trước "*we trained*", câu sau "*we evaluate*", câu sau nữa "*we have observed*". Khi rà soát, nên đọc riêng các động từ chính trong mỗi đoạn để kiểm tra thì có nhất quán không.

### Cấu trúc đề–thuyết và chủ ngữ bị lược

Tiếng Việt cho phép cấu trúc đề–thuyết, tức nêu chủ đề trước rồi bình luận sau, như "Về độ chính xác, phương pháp đề xuất tốt hơn", và cho phép lược chủ ngữ khi ngữ cảnh đã rõ. Dịch sát sẽ tạo ra "*About accuracy, our method is better*" (nên viết "*In terms of accuracy*" hoặc tốt hơn là "*Our method is more accurate*"). Nguy hiểm hơn là lỗi bổ ngữ treo (*dangling modifier*), khi cụm mở đầu câu không gắn với chủ ngữ: "*Using a larger batch size, the accuracy improves*" ngụ ý rằng "the accuracy" dùng batch lớn hơn. Câu đúng phải có chủ ngữ thực hiện hành động: "*Using a larger batch size, we improve the accuracy*" hoặc "*A larger batch size improves the accuracy*". Tương tự, "*Based on these results, it shows that…*" là sự pha trộn của hai cấu trúc; nên viết "*These results show that…*".

### Dịch từng chữ và lạm dụng từ nối

Một số cụm tiếng Việt rất thông dụng trong văn bản học thuật lại trở nên thừa hoặc sai khi dịch sát. "Nhằm mục đích" trở thành "*in order to aim to*", trong khi "*to*" là đủ. "Có thể" trở thành "*can*" ở khắp nơi, khiến kết quả đã đo được nghe như một khả năng ("*Our method can achieve 40 AP*" thay vì "*Our method achieves 40 AP*"). "Rất" trở thành "*very*", "*extremely*", trong khi một con số cụ thể thuyết phục hơn mọi phó từ. Đặc biệt, văn bản tiếng Việt hay mở đầu câu bằng "Ngoài ra", "Bên cạnh đó", "Hơn nữa", và khi dịch sang tiếng Anh, chúng thành một chuỗi "*Besides, … Moreover, … Furthermore, …*" ở gần như mọi câu. Trong tiếng Anh học thuật, liên kết giữa các câu chủ yếu đến từ nội dung theo Nguyên tắc 3; từ nối chỉ nên dùng khi quan hệ logic cần được nói rõ, như đối lập ("*However*") hoặc hệ quả ("*Therefore*"). Một lỗi tương tự là mở đầu mọi đoạn trong Related Work bằng "*Recently, …*".

### Dấu câu và quy ước trình bày

Nhóm lỗi cuối không liên quan tới ngữ pháp mà tới quy ước. Viết tắt "*et al.*" có dấu chấm sau "al" và không có dấu chấm sau "et". Trước số trích dẫn và trước dấu ngoặc mở phải có khoảng trắng ("*methods [3]*", "*our method (Fig. 2)*"), và trong LaTeX nên dùng `~\cite{}` để khoảng trắng đó không bị ngắt dòng. Với kiểu trích dẫn số, số trích dẫn không nên làm chủ ngữ ("*[3] proposes…*"); hãy dùng tên tác giả ("*Zhang et al. [3] propose…*"). Tính từ ghép đứng trước danh từ cần gạch nối, còn cụm danh từ thì không: "*state-of-the-art results*" nhưng "*achieve the state of the art*"; "*a two-stage pipeline*" nhưng "*a pipeline with two stages*". Cuối cùng, các dạng rút gọn như "*don't*", "*can't*", "*it's*" không dùng trong paper.

### Bảng tổng hợp

Bảng dưới đây gom các lỗi đã phân tích để người viết tiện dò khi sửa bản thảo.

| Lỗi | Sai | Đúng | Nguồn gốc |
|---|---|---|---|
| Thiếu mạo từ | *"We propose novel method for detection."* | *"We propose **a** novel method for detection."* | Tiếng Việt không có mạo từ |
| Danh từ số ít không có từ hạn định | *"Network takes image as input."* | *"**The** network takes **an** image as input."* | Tiếng Việt không có mạo từ |
| Thừa "the" với khái niệm chung | *The deep learning has…* | *Deep learning has…* | Dùng "the" như "cái/này" |
| Quên số nhiều | *"one of the main challenge"* | *"one of the main challenges"* | Danh từ tiếng Việt không biến đổi |
| Số nhiều hóa danh từ không đếm được | *many researches, informations, softwares* | *many studies, information, software* | "Các nghiên cứu", "các thông tin" đếm được trong tiếng Việt |
| Sai hòa hợp chủ ngữ–động từ | *The results shows…* | *The results show…* | Động từ tiếng Việt không chia |
| Nhảy thì trong đoạn | *We trained… We evaluate… We have observed…* | Chọn một thì, giữ nhất quán | "Đã/đang/sẽ" là tùy chọn |
| Bổ ngữ treo | *Using a larger batch, the accuracy improves.* | *A larger batch improves the accuracy.* | Cấu trúc đề–thuyết, lược chủ ngữ |
| Dịch sát "nhằm mục đích" | *In order to aim to improve…* | *To improve…* | Dịch từng chữ |
| "Can" thừa | *Our method can achieve 40 AP.* | *Our method achieves 40 AP.* | Dịch "có thể" |
| Phó từ mức độ thay cho số liệu | *a very huge improvement* | *a 5.2-point improvement* | Dịch "rất" |
| Lạm dụng từ nối | *Besides, … Moreover, … Furthermore, …* | Liên kết bằng nội dung, ít từ nối | "Ngoài ra", "Bên cạnh đó" |
| Sai "et al." | *Zhang et. al* | *Zhang et al.* | Quy ước viết tắt Latin |
| Thiếu khoảng trắng trước trích dẫn | *methods[3]* | *methods [3]* (`methods~\cite{x}`) | Quy ước trình bày |
| Số trích dẫn làm chủ ngữ | *[3] proposes…* | *Zhang et al. [3] propose…* | Quy ước của kiểu trích dẫn số |

## Cụm từ nên tránh và cách thay thế

Ngoài lỗi ngữ pháp, có những cụm từ đúng ngữ pháp nhưng gây hiệu ứng ngược với reviewer. Chúng thường rơi vào ba nhóm: cụm tự khen (tự gọi phương pháp đề xuất là "novel" thay vì để reviewer đánh giá), cụm có nghĩa kỹ thuật bị dùng sai ("significantly" khi không có kiểm định thống kê, một điểm mà reviewer NLP và ML đặc biệt hay bắt lỗi), và cụm mòn hoặc thiếu trang trọng. Nhận ra chúng giúp văn bản nghe khách quan và tự tin hơn.

| Nên tránh | Vì sao | Thay bằng |
|---|---|---|
| *"novel"* lặp lại nhiều lần | Reviewer tự đánh giá tính mới; tự khen gây phản cảm | Nói cụ thể điều gì là mới |
| *"significantly"* khi không có kiểm định | Mang nghĩa thống kê | *"substantially"*, *"by a large margin (+X)"*, hoặc báo cáo kiểm định |
| *"obviously"*, *"clearly"*, *"it is well known"* | Người đọc không thấy hiển nhiên sẽ cảm thấy bị coi thường | Bỏ đi, hoặc thêm trích dẫn |
| *"state-of-the-art"* ở mọi câu | Mòn, mất sức nặng | *"the strongest prior method"*, *"the previous best"* |
| *"To the best of our knowledge, we are the first…"* | Rủi ro cao nếu reviewer biết một công trình trước | Chỉ dùng sau khi đã tìm kiếm rất kỹ; ưu tiên mô tả khác biệt cụ thể |
| *"In this paper, we…"* ở nhiều đoạn | Thừa | Dùng một lần trong Introduction |
| *"a lot of"*, *"huge"*, *"pretty"* | Thiếu trang trọng | *"many"*, *"large"*, *"fairly"* |
| *"don't"*, *"can't"*, *"it's"* | Thiếu trang trọng | *"do not"*, *"cannot"*, *"it is"* |

Ở chiều ngược lại, có những cụm từ hữu ích mà người viết nên có sẵn trong vốn liếng, sắp xếp theo chức năng trong lập luận. Chúng không phải công thức để chèn máy móc, mà là cách diễn đạt các bước lập luận một cách gọn gàng. Phụ lục [Template & mẫu câu](../phu-luc/templates.md) tổng hợp thêm nhiều mẫu câu khác.

- **Nêu khoảng trống của nghiên cứu trước:** *"However, these methods assume…, which rarely holds in…"*; *"Despite their success, … remain limited by…"*; *"A key challenge is…"*.
- **Nêu insight:** *"Our key insight is that…"*; *"We observe that…"*; *"This observation motivates…"*.
- **Giới thiệu phương pháp:** *"To this end, we propose…"*; *"At its core, X…"*; *"Specifically, …"*.
- **Bình luận kết quả:** *"X consistently outperforms… across all settings"*; *"The gain is most pronounced for…"*; *"This suggests that…"*; *"We attribute this to…"*.
- **Thừa nhận hạn chế:** *"One limitation of our approach is…"*; *"X is less effective when…"*; *"We leave … to future work."*

## Khác biệt giữa các cộng đồng

Các nguyên tắc ở trên đúng cho mọi paper, nhưng mỗi cộng đồng có thói quen văn phong riêng, hình thành từ loại kết quả mà cộng đồng đó coi trọng. Người viết chuyển từ cộng đồng này sang cộng đồng khác thường được reviewer nhận ra qua văn phong trước cả nội dung, nên việc nắm các thói quen này đáng để đầu tư. Chương [Đặc thù từng cộng đồng](../06-cong-dong/index.md) bàn sâu hơn về khác biệt ở cấp độ cấu trúc paper.

### Computer Vision

Paper CV chủ yếu thuyết phục bằng hình ảnh, nên văn phong CV xoay quanh việc dẫn mắt người đọc. Văn bản thường xuyên tham chiếu tới hình ("*as shown in Fig. 4*") và mô tả trực quan cụ thể điều người đọc cần nhìn: thay vì "*our method produces better results*", người viết CV chỉ ra "*our method preserves thin structures such as chair legs (red boxes), which the baselines blur or miss*". Caption được viết để tự đứng được, vì nhiều reviewer xem hình trước khi đọc chữ. Văn phong nhìn chung gọn, thiên về kỹ thuật, ít đoạn bàn luận dài, và dùng kiểu trích dẫn số. Câu mẫu điển hình:

<div class="good" markdown>
*Fig. 5 compares the reconstructions qualitatively. The baseline produces floating artifacts near object boundaries (arrows), whereas our method recovers sharp silhouettes, especially under strong viewpoint changes.*
</div>

### NLP

Đối tượng nghiên cứu của NLP là ngôn ngữ, nên paper NLP được kỳ vọng minh họa bằng **ví dụ ngôn ngữ cụ thể** và dùng **thuật ngữ ngôn ngữ học** chính xác. Một paper khẳng định mô hình xử lý tốt phủ định nên đưa ra câu ví dụ cụ thể kèm dự đoán của mô hình, thay vì chỉ báo cáo một con số tổng. Thuật ngữ như *morphology, syntax, semantics, pragmatics, coreference, discourse, register* có nghĩa xác định, và reviewer có nền tảng ngôn ngữ học sẽ nhận ra khi chúng bị dùng lỏng lẻo. Quy ước trình bày ví dụ cũng rõ ràng: hình thức ngôn ngữ in nghiêng, nghĩa đặt trong nháy đơn, ví dụ được đánh số, và ví dụ từ ngôn ngữ không phải tiếng Anh đi kèm chú giải từng từ (*interlinear gloss*):

```text
(1)  Nó    đang   đọc    sách.
     3SG   PROG   read   book
     'He/She is reading a book.'
```

Cộng đồng NLP còn có một chuẩn mực được nhắc tới rộng rãi: luôn nêu rõ paper nghiên cứu ngôn ngữ nào, kể cả khi đó chỉ là tiếng Anh, thay vì ngầm coi tiếng Anh là "ngôn ngữ" nói chung. Một câu như "*our model achieves strong results on sentiment analysis*" sẽ bị hỏi lại "trên ngôn ngữ nào, miền dữ liệu nào?"; câu tốt hơn là "*on English movie reviews*". Kiểu trích dẫn tác giả–năm khiến tên tác giả xuất hiện trực tiếp trong câu ("*Devlin et al. (2019) show that…*"), nên văn bản Related Work của NLP thường đọc như một cuộc đối thoại giữa các công trình.

### Machine Learning

Văn phong ML, đặc biệt ở NeurIPS, ICML và ICLR, coi trọng **sự chính xác về toán học** và tính trang trọng. Mọi ký hiệu phải được định nghĩa trước khi dùng, thường trong một mục *Preliminaries* hoặc *Problem Setup*; giả thiết được nêu tường minh và đánh số để các định lý tham chiếu tới. Người viết phân biệt rõ các động từ chỉ mức độ chắc chắn: "*we prove*" dành cho kết quả có chứng minh, "*we show empirically*" cho kết quả thực nghiệm, "*we conjecture*" cho điều chưa chứng minh. Trực giác vẫn được hoan nghênh, nhưng thường đi sau hoặc đi kèm phát biểu chính xác, không thay thế nó. Câu mẫu điển hình:

<div class="good" markdown>
*Let f be L-smooth and let the stochastic gradients have variance at most σ². Under Assumption 1, Algorithm 1 converges to an ε-stationary point within O(ε⁻⁴) iterations. Intuitively, the momentum term averages out the noise introduced by …*
</div>

Ngay cả paper ML thuần thực nghiệm cũng mang dấu ấn này: các claim được phát biểu kèm điều kiện ("*for models up to 1B parameters*", "*in the low-data regime*"), và reviewer ML thường hỏi về kiểm định thống kê, số lần chạy với seed khác nhau và khoảng tin cậy khi người viết dùng những từ như "significantly".

## Reverse outline: kiểm tra cấu trúc của bản draft

Các nguyên tắc ở trên chủ yếu hoạt động ở cấp độ câu và đoạn. Nhưng một bản draft có thể gồm toàn câu tốt mà vẫn khó đọc, vì các đoạn sắp xếp sai thứ tự, hai đoạn nói cùng một ý, hoặc một đoạn không có ý chính. Kỹ thuật *reverse outline* (dàn ý ngược) giúp phát hiện những vấn đề cấu trúc này. Thay vì viết dàn ý trước rồi viết văn, người viết lấy bản văn đã có và trích ngược ra dàn ý của nó.

Cách làm như sau. Với mỗi đoạn trong một mục (thường bắt đầu với Introduction), chép câu đầu của đoạn, hoặc nếu câu đầu không nêu ý chính thì viết một câu tóm tắt ý chính của đoạn, thành một danh sách đánh số. Sau đó đọc riêng danh sách này và trả lời bốn câu hỏi: danh sách có kể được một câu chuyện logic không; có đoạn nào không tóm được thành một ý rõ ràng không; có hai đoạn nào nói cùng một ý không; và thứ tự các ý có hợp lý không.

Ví dụ, reverse outline của phần Introduction trong một paper ML giả định về huấn luyện mô hình ngôn ngữ hiệu quả có thể trông như sau:

```text
P1. Large language models achieve strong results but are expensive to train.
P2. Mixed-precision training reduces memory usage.
P3. Existing methods reduce training cost by pruning or distillation.
P4. Many methods have been proposed to make training cheaper.
P5. We train our models on 64 GPUs for two weeks.
P6. We propose X, which skips redundant tokens during training.
P7. Our contributions are as follows.
```

Đọc danh sách này, các vấn đề lộ ra ngay. P3 và P4 cùng nói về các phương pháp giảm chi phí, nên cần gộp lại; P2 là một trường hợp cụ thể của chính nhóm này và nên được đưa vào đoạn gộp. Danh sách thiếu một đoạn nêu khoảng trống: người đọc không biết các phương pháp hiện có còn hạn chế gì để X giải quyết. P5 là chi tiết thí nghiệm, không thuộc Introduction. Cuối cùng, nếu paper có một quan sát then chốt (chẳng hạn nhiều token đóng góp rất ít vào gradient), quan sát đó cần một đoạn riêng trước P6 để phương pháp xuất hiện như một hệ quả tự nhiên. Toàn bộ chẩn đoán này mất khoảng mười phút, trong khi việc phát hiện chúng bằng cách đọc lại văn bản đầy đủ thường mất nhiều lần như thế.

Reverse outline đặc biệt hiệu quả với người mới viết vì nó tách hai việc vốn hay bị trộn lẫn: đánh giá cấu trúc và đánh giá câu chữ. Bài [Quy trình viết & tự review](quy-trinh-viet.md) sẽ đặt kỹ thuật này vào đúng vị trí của nó trong quy trình sửa bài nhiều tầng.

## Tóm tắt

Tiếng Anh học thuật tốt là tiếng Anh giúp reviewer hiểu nhanh và đúng. Ở cấp độ câu và đoạn, bảy nguyên tắc (một ý một câu; chủ ngữ và động từ gần nhau; thông tin cũ trước, mới sau; câu đầu đoạn nêu ý chính; nhất quán thuật ngữ; động từ mạnh; cụ thể và chính xác về mức độ chắc chắn) đều nhằm giảm gánh nặng cho bộ nhớ làm việc của người đọc. Thì hiện tại và đại từ "we" là quy ước chung của cả ba cộng đồng. Các lỗi phổ biến của người viết Việt, như mạo từ, số nhiều, hòa hợp động từ, bổ ngữ treo và lạm dụng từ nối, có nguồn gốc từ đặc điểm của tiếng Việt, nên có thể dò lại một cách có hệ thống. Mỗi cộng đồng có thói quen riêng: CV dẫn mắt người đọc qua hình, NLP minh họa bằng ví dụ ngôn ngữ và thuật ngữ ngôn ngữ học, ML đề cao sự chính xác toán học. Cuối cùng, reverse outline là công cụ đơn giản và hiệu quả nhất để kiểm tra cấu trúc của một bản draft.

## Bài tập

1. Chọn một đoạn khoảng 150 từ trong bản draft hiện tại (hoặc trong một báo cáo cũ). Đánh dấu mọi câu dài hơn 30 từ, mọi trường hợp danh từ hóa và mọi từ nối ở đầu câu, rồi viết lại đoạn văn theo bảy nguyên tắc. So sánh số từ trước và sau khi sửa.
2. Dùng bảng tổng hợp lỗi để dò một trang bản thảo, chỉ tập trung vào mạo từ và số nhiều. Với mỗi lỗi tìm được, ghi lại quy tắc nào trong bài giải thích lỗi đó.
3. Lập reverse outline cho phần Introduction của bản draft hiện tại. Trả lời bốn câu hỏi chẩn đoán, rồi đề xuất một thứ tự đoạn mới.
4. Chọn một paper gần đây của hội nghị mục tiêu và một paper của cộng đồng khác (ví dụ một paper CVPR và một paper ACL). Tìm ba khác biệt cụ thể về văn phong giữa hai paper, mỗi khác biệt minh họa bằng một câu trích ngắn.
