# Case study: PhoBERT (Findings of EMNLP 2020)

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Phân tích cách một paper ngắn biện minh cho việc xây một mô hình đơn ngữ (monolingual) khi đã có các mô hình đa ngữ (multilingual) mạnh, bằng hai lập luận gắn với đặc điểm riêng của tiếng Việt.
    - Nhận ra cấu trúc "hai mối lo, hai lựa chọn thiết kế, hai đoạn thảo luận" nối Introduction với phần phương pháp và phần Discussion.
    - Đánh giá cách một claim "first" được bảo chứng bằng các định ngữ chính xác và một chú thích xử lý phản ví dụ gần nhất, cũng như rủi ro khi các định ngữ ấy không được giữ nhất quán.
    - Phân biệt bằng chứng trực tiếp với bằng chứng gián tiếp khi một kết quả có nhiều yếu tố gây nhiễu (confounder), và đề xuất cách thu hẹp claim hoặc bổ sung thí nghiệm.
    - Vận dụng các bài học về paper tài nguyên cho một ngôn ngữ cụ thể vào dự án của chính người học, ở cả ba cộng đồng NLP, CV và ML.

Hai case study [ViP-VL](vip-vl.md) và [Streaming ITN](streaming-itn.md) phân tích các paper tiếng Việt gần đây của cộng đồng xử lý tiếng nói; case study [EDWARD-NMT](edward-nmt.md) phân tích một paper Findings of EMNLP 2026. Bài này lùi lại sáu năm để xem xét một paper NLP tiếng Việt đã trở thành nền tảng cho rất nhiều công trình sau nó:

**PhoBERT: Pre-trained language models for Vietnamese**, của Dat Quoc Nguyen (VinAI Research, Việt Nam) và Anh Tuan Nguyen (NVIDIA, Hoa Kỳ); chú thích của paper ghi rõ phần việc của tác giả thứ hai được thực hiện trong thời gian thực tập tại VinAI Research. Paper được công bố trong *Findings of the Association for Computational Linguistics: EMNLP 2020* và chiếm sáu trang trong kỷ yếu, kể cả tài liệu tham khảo. Phân tích dưới đây dựa trên toàn văn bản arXiv (mã 2003.00744); bản in trong Findings có thể khác ở một vài chi tiết. Như các case study khác, bài này tập trung vào *cách viết*, và các con số chỉ được nêu khi chúng xuất hiện trong văn bản của paper.

Paper này đặc biệt đáng học với người học Việt Nam vì nhiều lý do có thể kiểm chứng từ chính văn bản. Tác giả đầu làm việc tại một phòng nghiên cứu ở Việt Nam. Động lực trung tâm của paper không đến từ một thủ thuật mô hình mà từ một hiểu biết về tiếng Việt: khoảng trắng trong chữ viết phân tách âm tiết chứ không phân tách từ. Tài nguyên tính toán được nêu cụ thể, bốn GPU V100. Toàn bộ chuỗi đánh giá dựa trên các tài nguyên của cộng đồng NLP tiếng Việt (các bộ dữ liệu VLSP, treebank VnDT, bộ công cụ VnCoreNLP). Và một paper chỉ vài trang, không đề xuất kiến trúc mới, đã tạo ra một mô hình mà chính bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md) của giáo trình này khuyên đưa vào danh sách baseline cho mọi paper tài nguyên tiếng Việt.

## Bối cảnh: đơn ngữ hay đa ngữ

Năm 2019 và 2020 là giai đoạn mô hình tiền huấn luyện theo kiểu BERT (xem [case study BERT](bert.md)) lan nhanh ra ngoài tiếng Anh. Như chính đoạn mở đầu của PhoBERT tóm tắt, một ngôn ngữ khác tiếng Anh khi đó có hai con đường. Con đường thứ nhất là huấn luyện lại một mô hình riêng cho ngôn ngữ đó theo kiến trúc BERT, như các mô hình cho tiếng Trung, tiếng Hà Lan (BERTje) hay tiếng Pháp (CamemBERT) được paper trích dẫn. Con đường thứ hai là dùng thẳng một mô hình đa ngữ đã được tiền huấn luyện sẵn, như multilingual BERT, XLM hay XLM-R. XLM-R, được paper gọi là mô hình đa ngữ tốt nhất thời điểm đó, được huấn luyện trên một kho 2,5TB, trong đó có 137GB văn bản tiếng Việt.

Câu hỏi "có cần một mô hình riêng hay không" vì thế không hề hiển nhiên. Một mô hình đa ngữ có sẵn, miễn phí, đã được kiểm chứng trên nhiều ngôn ngữ, và với tiếng Việt còn có nhiều dữ liệu hơn hẳn những gì một nhóm nhỏ có thể thu thập. Một paper đề xuất mô hình đơn ngữ phải trả lời được câu hỏi mà reviewer chắc chắn sẽ đặt ra: vì sao không dùng XLM-R?

Bối cảnh của cộng đồng NLP tiếng Việt cũng quan trọng để hiểu cách paper chọn tác vụ. Như tên của nhiều công trình trong danh mục tài liệu tham khảo cho thấy (chẳng hạn "From word segmentation to POS tagging for Vietnamese"), các hệ thống tiếng Việt trước PhoBERT thường đi theo một chuỗi xử lý bắt đầu bằng bước tách từ (word segmentation), rồi mới tới gán nhãn từ loại, nhận diện thực thể hay phân tích cú pháp. Các bộ dữ liệu chuẩn cho những tác vụ này cung cấp sẵn ranh giới từ chuẩn (gold word segmentation). Nói cách khác, đơn vị phân tích quen thuộc của cộng đồng là *từ*, không phải *âm tiết*. PhoBERT khai thác đúng điểm này.

Về nơi công bố, Findings of ACL: EMNLP 2020 là tập Findings đầu tiên, ra đời như một tuyển tập đi kèm EMNLP 2020, dành cho những paper được đánh giá là vững chắc nhưng không được chọn vào hội nghị chính. Bài [NLP: ACL, EMNLP, NAACL](../00-tong-quan/he-sinh-thai-nlp.md) giải thích kỹ vị trí của Findings. Năm 2020 cũng là trước khi ACL Rolling Review ra đời và trước khi mục Limitations trở thành bắt buộc; bối cảnh này cần được nhớ khi đọc phần cuối paper.

## Câu chuyện một dòng

> Các mô hình ngôn ngữ dùng được cho tiếng Việt hoặc chỉ học từ khoảng 1GB Wikipedia, hoặc (như XLM-R) có nhiều dữ liệu hơn nhưng áp BPE thẳng lên âm tiết, trong khi khoảng trắng tiếng Việt phân tách âm tiết chứ không phân tách từ; nhóm tác giả tiền huấn luyện hai mô hình theo công thức RoBERTa trên 20GB văn bản **đã tách từ**, vượt XLM-R và lập kết quả tốt nhất trên bốn tác vụ tiếng Việt, rồi công bố mô hình cho cộng đồng.

Đối chiếu với năm mắt xích ở bài [Xây "câu chuyện" của paper](../01-truoc-khi-viet/cau-chuyen.md), câu chuyện này có đủ cả năm. Vấn đề là tiếng Việt chưa có mô hình tiền huấn luyện đủ tốt. Khoảng trống gồm hai phần: dữ liệu nhỏ và không đại diện, và sự nhầm lẫn giữa âm tiết với từ. Insight là một quan sát ngôn ngữ học, không phải một quan sát về mô hình. Giải pháp cố ý không mới về kiến trúc: kiến trúc BERT, quy trình RoBERTa, cộng thêm một kho dữ liệu lớn hơn và một bước tách từ. Bằng chứng là bốn tác vụ, với đối thủ chính là mô hình đa ngữ mạnh nhất.

Điều đáng chú ý là vị trí của tính mới. Trong nhiều paper, tính mới nằm ở phương pháp; ở PhoBERT, nó nằm ở việc nhận ra một đặc điểm của ngôn ngữ mà các mô hình hiện có bỏ qua, và ở việc biến đặc điểm đó thành một tài nguyên dùng được. Theo cách phân loại đóng góp của ARR những năm gần đây, PhoBERT thuộc nhóm phần mềm và mô hình công khai, kết hợp với một nghiên cứu so sánh. Như bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md) đã phân tích, một paper thuộc nhóm này không nên bị đánh giá bằng câu hỏi "phương pháp mới ở đâu", mà bằng câu hỏi "tài nguyên có lấp một khoảng trống thật và có chất lượng không".

## Title và abstract

### Một title chung, cũng là một cụm từ khóa tìm kiếm

Title đi theo mẫu "Tên: mô tả" đã bàn ở bài [Title](../02-viet-tung-phan/title.md). Tên gọi PhoBERT theo quy ước "tiền tố gợi ngôn ngữ cộng BERT", cùng họ với CamemBERT và BERTje mà paper trích dẫn, nên người đọc trong cộng đồng nhận ra ngay đây là "một BERT cho tiếng Việt". Paper không giải thích nguồn gốc của tiền tố "Pho".

Phần mô tả, "Pre-trained language models for Vietnamese", rất chung: nó đúng với bất kỳ mô hình tiền huấn luyện tiếng Việt nào và không gợi ý hai lựa chọn làm nên khác biệt của paper, đơn ngữ và mức từ. Một phiên bản minh họa như "PhoBERT: Word-level Monolingual Language Models for Vietnamese" sẽ đưa insight lên title. Tuy vậy, sự chung chung ở đây có một ưu điểm thực tế: title trùng gần như nguyên văn với cụm từ mà một người làm NLP tiếng Việt sẽ gõ vào công cụ tìm kiếm. Với một paper tài nguyên mà giá trị nằm ở việc được tìm thấy và được dùng, đó là một lựa chọn hợp lý. Chữ "Vietnamese" trong title cũng đáp ứng tinh thần của nguyên tắc Bender Rule mà cộng đồng NLP hay nhắc: luôn gọi tên ngôn ngữ được nghiên cứu. Chữ "models" ở dạng số nhiều báo trước rằng paper có hai phiên bản mô hình.

### Abstract bốn câu: nói "cái gì" mà chưa nói "vì sao"

Abstract gồm bốn câu, có thể diễn giải như sau:

| Câu | Chức năng | Nội dung (diễn giải) |
|---|---|---|
| 1 | Giới thiệu và claim tính mới | Trình bày PhoBERT với hai phiên bản base và large, các mô hình ngôn ngữ đơn ngữ quy mô lớn, công khai *đầu tiên* cho tiếng Việt |
| 2 | Kết quả | PhoBERT vượt nhất quán XLM-R và cải thiện state-of-the-art trên POS tagging, dependency parsing, NER và NLI |
| 3 | Tác động | Công bố PhoBERT để thúc đẩy nghiên cứu và ứng dụng NLP tiếng Việt |
| 4 | Truy cập | Đường dẫn tới kho mã trên GitHub |

Abstract này có ba điểm mạnh. Nó gọi tên chính xác đối thủ (XLM-R) thay vì một cụm mơ hồ như "existing models", nên người đọc biết ngay mức độ của claim. Nó liệt kê đủ bốn tác vụ. Và nó kết bằng đường dẫn tới mô hình, điều mà với một paper tài nguyên quan trọng ngang với bản thân kết quả.

Nhưng so với khuôn năm đến sáu câu ở bài [Abstract](../02-viet-tung-phan/abstract.md), abstract này thiếu hẳn phần *vì sao*. Người chỉ đọc abstract không biết hai mối lo làm nên lý do tồn tại của paper (dữ liệu Wikipedia nhỏ, và sự khác biệt giữa âm tiết với từ), không biết kho dữ liệu 20GB đã tách từ, và vì thế không biết vì sao một mô hình đơn ngữ lại có thể thắng một mô hình đa ngữ thấy nhiều văn bản tiếng Việt hơn. Câu thứ hai cũng không có con số nào, trong khi văn bản có những con số rất đáng đưa lên. Đây đúng là chỗ mà ViP-VL cũng hụt: insight hay nhất của paper chỉ xuất hiện ở Introduction. Một phiên bản minh họa (không phải của nhóm tác giả, chỉ dùng thông tin trong paper) có thể như sau:

<div class="good" markdown>

*"Existing language models for Vietnamese are either pre-trained on the small (1GB) Vietnamese Wikipedia or, like the multilingual XLM-R, apply BPE directly to syllables, although white space in written Vietnamese separates syllables rather than words. We present PhoBERT, the first public large-scale monolingual language models for Vietnamese, pre-trained with the RoBERTa procedure on a 20GB word-segmented corpus. On POS tagging, dependency parsing, NER and NLI, PhoBERT outperforms XLM-R, whose pre-training data contain about seven times more Vietnamese text, and sets new state-of-the-art results, e.g., improving parsing scores by about 4 points over the previous best. We release PhoBERT for use with fairseq and transformers."*

</div>

Phiên bản này dài hơn gần một nửa, nhưng mỗi mệnh đề thêm vào đều trả lời một câu hỏi mà reviewer sẽ đặt ra khi đọc abstract gốc. Đặc biệt, chi tiết "XLM-R thấy nhiều văn bản tiếng Việt hơn khoảng bảy lần" biến kết quả từ "mô hình của chúng tôi tốt hơn" thành một điều đáng ngạc nhiên cần giải thích, và lời giải thích đã nằm sẵn ở câu đầu.

## Introduction: hai mối lo, hai lựa chọn thiết kế

Introduction gồm bốn đoạn, trong đó đoạn thứ hai được viết thành hai gạch đầu dòng, cộng một danh sách đóng góp bốn ý. Paper không có mục Related Work riêng; toàn bộ phần định vị được dồn vào Introduction và các chú thích. Cấu trúc này giống ViP-VL, và cũng vì cùng một lý do: trong một paper ngắn, mỗi đoạn tổng quan phải phục vụ trực tiếp cho lập luận.

### Đoạn 1: hai con đường cho các ngôn ngữ ngoài tiếng Anh

Đoạn đầu làm ba việc trong ba câu. Câu thứ nhất nêu thành công của BERT. Câu thứ hai thu hẹp: thành công đó phần lớn giới hạn ở tiếng Anh. Câu thứ ba vẽ bản đồ: với ngôn ngữ khác, có thể huấn luyện lại một mô hình riêng hoặc dùng mô hình đa ngữ, mỗi con đường kèm một nhóm trích dẫn.

Đây là cách định vị theo kiểu "bản đồ hai nhánh" mà [BERT](bert.md) cũng dùng khi chia các công trình trước thành feature-based và fine-tuning. Chỉ sau một câu, người đọc đã biết paper sẽ đi theo nhánh nào (nhánh đơn ngữ) và sẽ phải cạnh tranh với nhánh nào (nhánh đa ngữ). Đoạn này không phán xét nhánh nào tốt hơn; việc đó được dành cho đoạn sau, khi đặc điểm của tiếng Việt được đưa vào.

### Đoạn 2, ý thứ nhất: mối lo về dữ liệu

Đoạn thứ hai mở bằng câu "In terms of Vietnamese language modeling, to the best of our knowledge, there are two main concerns as follows", rồi trình bày hai mối lo thành hai gạch đầu dòng theo một thứ tự cố định. Thứ tự này có hệ quả quan trọng: phần phương pháp về sau gọi lại từng mối lo đúng theo số thứ tự của nó ("the first concern", "the second concern"), nên người đọc lần theo được mạch lập luận mà không cần lật lại.

Mối lo thứ nhất được lập luận theo ba bước. Bước một là một nhận định về hiện trạng: Wikipedia tiếng Việt là dữ liệu duy nhất từng được dùng để huấn luyện mô hình đơn ngữ, và cũng là dữ liệu tiếng Việt duy nhất trong mọi mô hình đa ngữ, *trừ XLM-R*. Bước hai là hai hạn chế của dữ liệu ấy: không đại diện cho cách dùng ngôn ngữ nói chung, và nhỏ (khoảng 1GB khi chưa nén). Bước ba là một nguyên lý có trích dẫn: theo RoBERTa, thêm dữ liệu tiền huấn luyện cải thiện đáng kể chất lượng mô hình. Ba bước nối thành một suy luận mà người đọc khó phản bác.

Chi tiết đáng học nhất là cụm "except XLM-R". Nhóm tác giả tự nêu ra ngoại lệ quan trọng nhất cho chính lập luận của mình. Hệ quả là mối lo thứ nhất chỉ đủ để vượt các mô hình học từ Wikipedia; nó *không* giải thích được một chiến thắng trước XLM-R, vốn có nhiều dữ liệu tiếng Việt hơn. Paper vì thế cần mối lo thứ hai, và cấu trúc lập luận trở nên rất rõ: mối lo về dữ liệu loại bỏ các đối thủ yếu, mối lo về âm tiết và từ phải gánh phần so sánh với đối thủ mạnh nhất.

### Đoạn 2, ý thứ hai: một ví dụ một dòng thay cho Figure 1

Mối lo thứ hai là trái tim của paper: mọi mô hình BERT công khai, đơn ngữ lẫn đa ngữ, không phân biệt âm tiết với từ của tiếng Việt, vì khoảng trắng trong chữ viết tiếng Việt cũng được dùng để phân tách các âm tiết cấu thành một từ. Paper minh họa bằng một câu tiếng Việt mang nghĩa "I am a researcher": câu có sáu âm tiết nhưng chỉ bốn từ, vì ba âm tiết "nghiên cứu viên" hợp lại thành một từ, được viết thành nghiên_cứu_viên sau khi tách từ. Một chú thích bổ sung con số cho thấy hiện tượng không phải cá biệt: theo một nghiên cứu được trích dẫn, 85% kiểu từ (word type) tiếng Việt gồm ít nhất hai âm tiết.

Đây là một ví dụ mẫu mực về cách giải thích một đặc điểm ngôn ngữ cho reviewer không biết ngôn ngữ đó. EMNLP có rất nhiều reviewer không đọc được tiếng Việt, và với họ, một câu như "Vietnamese is an isolating language" sẽ không đủ để hiểu vì sao điều đó ảnh hưởng tới BPE. Một câu ví dụ có bản dịch tiếng Anh, có đếm âm tiết và đếm từ, cộng một con số thống kê có nguồn, làm được điều đó trong ba dòng. PhoBERT không có hình nào; ví dụ này đóng vai trò mà ở nhiều paper khác thuộc về Figure 1: đưa người đọc tới insight trong vài giây. Đây cũng chính là đặc điểm thứ ba trong danh sách "paper tài nguyên tiếng Việt mạnh" ở mục [Cơ hội cho tài nguyên tiếng Việt và ngôn ngữ ít tài nguyên](../06-cong-dong/nlp.md#co-hoi-cho-tai-nguyen-tieng-viet-va-ngon-ngu-it-tai-nguyen): khai thác một đặc điểm riêng của tiếng Việt và cho thấy nó ảnh hưởng thế nào tới mô hình.

### Đoạn 3: một giả thuyết được rào đón đúng mức

Đoạn thứ ba nối đặc điểm ngôn ngữ với mô hình: không có bước tách từ, các mô hình hiện có áp thẳng BPE lên dữ liệu ở mức âm tiết. Câu kết của đoạn phát biểu giả thuyết: "Intuitively, for word-level Vietnamese NLP tasks, those models pre-trained on syllable-level data might not perform as good as language models pre-trained on word-level data."

Câu này rào đón ở ba chỗ, và cả ba đều đúng mức. "Intuitively" báo hiệu đây là một trực giác chứ chưa phải kết luận. "For word-level Vietnamese NLP tasks" giới hạn phạm vi của giả thuyết vào đúng loại tác vụ mà nó có lý do áp dụng. "Might not" là động từ khuyết thiếu mềm. Một giả thuyết được phát biểu với phạm vi hẹp như vậy có hai lợi ích: nó khó bị phản bác, và nó cho reviewer biết paper sẽ cần loại bằng chứng nào. Như sẽ thấy ở phần thí nghiệm, điểm yếu không nằm ở câu này mà ở chỗ phần Discussion về sau nói mạnh hơn nó. (Một chi tiết nhỏ cho lượt đọc soát tiếng Anh: "perform as good as" nên là "perform as well as".)

Đoạn này đi kèm chú thích thứ hai, chú thích quan trọng nhất của paper, sẽ được phân tích ở mục định vị bên dưới.

### Đoạn 4 và danh sách đóng góp

Đoạn cuối mở bằng "To handle the two concerns above", nối thẳng giải pháp với hai mối lo: huấn luyện các mô hình "base" và "large" trên một kho 20GB văn bản tiếng Việt ở mức từ. Tiếp theo là bốn tác vụ đánh giá, với một chi tiết phân loại đáng chú ý: POS tagging, dependency parsing và NER được gọi là các tác vụ mức từ thông dụng, còn NLI là một tác vụ hiểu ngôn ngữ "có thể được phát biểu ở mức âm tiết hoặc mức từ". Phân loại này cho thấy việc chọn tác vụ được dẫn dắt bởi giả thuyết ở đoạn trước, chứ không phải chọn những benchmark sẵn có.

Danh sách đóng góp gồm bốn ý:

1. Các mô hình ngôn ngữ đơn ngữ quy mô lớn *đầu tiên* cho tiếng Việt.
2. Kết quả tốt nhất trên bốn tác vụ, cho thấy hiệu quả của mô hình BERT đơn ngữ quy mô lớn cho tiếng Việt.
3. Theo hiểu biết của nhóm tác giả, bộ thí nghiệm *đầu tiên* so sánh mô hình đơn ngữ với XLM-R trên nhiều (bốn) tác vụ của một ngôn ngữ cụ thể, với kết luận rằng mô hình chuyên biệt cho một ngôn ngữ vẫn vượt mô hình đa ngữ.
4. Công bố mô hình, dùng được với `fairseq` và `transformers`, với hy vọng PhoBERT trở thành baseline mạnh cho nghiên cứu NLP tiếng Việt.

Ý thứ ba là một nước đi đáng học. Một bảng so sánh với XLM-R, vốn chỉ là phần đánh giá thông thường, được nâng lên thành một đóng góp khoa học độc lập: câu trả lời cho câu hỏi "đơn ngữ hay đa ngữ" mà cộng đồng đang quan tâm. Nhờ ý này, paper không chỉ là "chúng tôi huấn luyện một mô hình" mà còn là "chúng tôi trả lời một câu hỏi". Ý thứ tư cũng được viết khéo: nó không chỉ nói "we release" mà nói rõ hai thư viện, tức là nói rõ người dùng sẽ tốn bao nhiêu công để dùng mô hình.

Tuy vậy, ý thứ ba cũng là nơi claim vượt phạm vi bằng chứng rõ nhất. Cụm "convincingly confirming that dedicated language-specific models still outperform multilingual ones" là một kết luận về mô hình chuyên biệt *nói chung*, trong khi bằng chứng đến từ một ngôn ngữ. Như bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md) đã phân tích với Bender Rule, cách viết an toàn và chính xác hơn là thêm hai chữ: "...still outperform multilingual ones *for Vietnamese*". Bỏ chữ "convincingly" cũng không làm câu yếu đi, vì con số trong bảng đã đủ thuyết phục.

## Định vị: không có Related Work, nhưng có ba lớp định vị

Thiếu một mục Related Work không có nghĩa là thiếu định vị. Đọc kỹ, có thể thấy PhoBERT định vị ở ba lớp, mỗi lớp nằm ở một chỗ khác nhau của paper.

Lớp thứ nhất là **bản đồ hai nhánh** ở đoạn đầu Introduction, đặt PhoBERT vào nhánh đơn ngữ, cạnh các mô hình cho tiếng Trung, tiếng Hà Lan, tiếng Pháp. Lớp thứ hai là **công trình tiếng Việt gần nhất**, ETNLP, được xử lý trong một chú thích. Lớp thứ ba là **các hệ thống tốt nhất của từng tác vụ**, được định vị ngay trong các bảng kết quả: mỗi bảng liệt kê các hệ thống trước đó kèm trích dẫn, và các đoạn bình luận gọi tên hệ thống đang giữ kết quả tốt nhất. Với một paper ngắn có bốn tác vụ, lớp thứ ba thay thế được cả một mục tổng quan theo tác vụ.

Một chi tiết định vị có thể được đưa lên phần chính. Công trình gần nhất về câu hỏi "đơn ngữ hay đa ngữ" là CamemBERT, và chú thích cuối cùng của paper cho biết CamemBERT chỉ so sánh với XLM-R trên tác vụ NLI tiếng Pháp. Đây chính là lý do ý đóng góp thứ ba có thể dùng chữ "first", nhưng thông tin này nằm ở chú thích thứ bảy, ở cuối paper, xa danh sách đóng góp. Một nửa câu trong chính ý đóng góp, chẳng hạn "unlike CamemBERT, which compares with XLM-R on French NLI only", sẽ làm claim tự đứng được.

### Claim "first" và cách bảo chứng

PhoBERT dùng chữ *first* (in nghiêng) ở abstract, ở hai ý đóng góp, ở Introduction và ở Conclusion. Claim tính mới luôn là chỗ reviewer soi kỹ nhất, vì chỉ cần một phản ví dụ là claim sụp đổ. Cách paper bảo chứng claim này đáng phân tích kỹ.

Chú thích thứ hai đối mặt trực tiếp với phản ví dụ gần nhất. Nó thừa nhận rằng ETNLP *đã* tách từ trước khi áp BPE lên Wikipedia tiếng Việt, tức là ý tưởng mức từ không hoàn toàn mới, nhưng chỉ ra rằng ETNLP không công bố mô hình BERT nào, mà chỉ công bố một tập 15 nghìn word embedding dựa trên BERT, chuyên cho tác vụ NER. Cách viết này trung thực (ghi nhận điều công trình trước đã làm) và chính xác (chỉ ra đúng điều công trình trước chưa làm). Nó cũng giải thích vì sao mối lo thứ hai được phát biểu với định ngữ "publicly released": không có định ngữ đó, chính ETNLP sẽ là phản ví dụ.

Claim "first" của paper vì thế được giữ bởi ba định ngữ, mỗi định ngữ loại một nhóm phản ví dụ:

| Định ngữ | Loại phản ví dụ nào | Bằng chứng trong paper |
|---|---|---|
| *public* | ETNLP, có tách từ nhưng không công bố mô hình | Chú thích thứ hai |
| *large-scale* | Các mô hình đơn ngữ học từ khoảng 1GB Wikipedia | Mối lo thứ nhất; kho 20GB ở Section 2 |
| *monolingual* | XLM-R, có 137GB tiếng Việt nhưng là mô hình đa ngữ | Đoạn mở đầu và phần Discussion |

Điểm có thể chặt chẽ hơn là **sự nhất quán của các định ngữ**. Định ngữ "public" xuất hiện ở abstract, nhưng ý đóng góp thứ nhất, câu giải pháp ở Introduction và Conclusion chỉ viết "the first large-scale monolingual". Trong khi đó, như bảng trên cho thấy, chính chữ "public" là chữ loại ETNLP. Người đọc chỉ đọc danh sách đóng góp có thể không thấy vì sao ETNLP không làm claim sai. Ngoài ra, "large-scale" là một tính từ tương đối; neo nó vào con số ("pre-trained on 20GB, compared with the 1GB used by previous monolingual models") sẽ biến một tính từ thành một sự kiện kiểm chứng được. Bài học chung: khi một claim "first" phụ thuộc vào một định ngữ, định ngữ đó phải đi theo claim ở *mọi* vị trí claim xuất hiện, như đã thấy ở case study [Streaming ITN](streaming-itn.md).

## Phương pháp: một công thức có sẵn, hai lựa chọn có lý do

Section 2 của paper tên là "PhoBERT", chỉ gồm một câu dẫn và ba đoạn ngắn, mỗi đoạn mở bằng một tiêu đề in đậm đầu dòng: *Architecture*, *Pre-training data*, *Optimization*. Độ ngắn này là có chủ ý và phù hợp: khi đóng góp không nằm ở kiến trúc, dành nhiều chỗ cho kiến trúc chỉ làm loãng thông điệp.

### Nói rõ phần nào mượn, phần nào khác

Đoạn *Architecture* chỉ có hai câu: PhoBERT dùng đúng kiến trúc của BERT-base và BERT-large, và quy trình tiền huấn luyện dựa trên RoBERTa. Paper không mô tả lại Transformer, không viết lại hàm mất mát. Đây là cách đúng để trình bày một thành phần mượn nguyên vẹn: gọi tên, trích dẫn, và chuyển sang phần mới. Bài [Method](../02-viet-tung-phan/method.md) nhấn mạnh rằng reviewer cần biết ngay đâu là đóng góp, và một mô tả dài về phần có sẵn khiến điều đó khó hơn.

Việc dùng đúng kiến trúc BERT-base và BERT-large còn có một tác dụng phụ có lợi cho phần thí nghiệm: các cỡ mô hình được ghép cặp tự nhiên với XLM-R-base và XLM-R-large. Cũng như BERT chọn BERT-Base cùng cỡ với OpenAI GPT để so sánh công bằng, sự ghép cặp này giúp reviewer không thể quy chiến thắng cho một mô hình lớn hơn; thực tế, như paper chỉ ra ở phần kết quả, PhoBERT còn ít tham số hơn XLM-R ở cả hai cỡ.

Ở đoạn *Pre-training data*, paper đánh dấu tường minh một điểm lệch khỏi công thức gốc bằng cụm "Different from RoBERTa, we then apply fastBPE". Những cụm như vậy rất có giá trị với người muốn tái hiện, vì chúng cho biết chính xác chỗ nào không thể giả định là "giống RoBERTa". Chỗ có thể rõ hơn là paper không nói RoBERTa làm gì ở bước này, nên người đọc không quen RoBERTa không biết điểm khác nằm ở loại BPE hay ở việc BPE được áp lên văn bản đã tách từ. Nửa câu giải thích là đủ.

### Mỗi lựa chọn dữ liệu trỏ về một mối lo

Hai câu mở của hai lựa chọn dữ liệu là chi tiết cấu trúc đáng học nhất của Section 2. Câu về kho dữ liệu bắt đầu bằng "To handle the first concern mentioned in Section 1"; câu về tách từ bắt đầu bằng "To solve the second concern". Kho dữ liệu 20GB gồm khoảng 1GB Wikipedia và khoảng 19GB tin tức, thu được sau khi loại các bài tương tự và trùng lặp khỏi một kho tin tức 50GB. Bước tách từ và tách câu dùng RDRSegmenter trong bộ VnCoreNLP, cho ra khoảng 145 triệu câu đã tách từ, tương đương khoảng 3 tỉ token mức từ, rồi fastBPE với bộ từ vựng 64 nghìn subword.

Nhờ hai câu mở này, người đọc không bao giờ phải tự hỏi một lựa chọn tồn tại để làm gì. Đây là phiên bản thu nhỏ của ánh xạ "hạn chế và thành phần, một–một" đã phân tích ở [EDWARD-NMT](edward-nmt.md), và của bảng "khoảng trống và câu trả lời" ở [ViP-VL](vip-vl.md). Trong một paper ngắn, chi phí của kỹ thuật này gần như bằng không, chỉ vài chữ ở đầu câu, nhưng nó làm cho toàn bộ paper liền mạch.

Lựa chọn tách từ cũng có một ý nghĩa ít được nói ra: nó **khớp đơn vị tiền huấn luyện với đơn vị phân tích mà cộng đồng NLP tiếng Việt đã quen dùng**. Ba trong bốn bộ dữ liệu đánh giá cung cấp sẵn ranh giới từ chuẩn, và các hệ thống baseline đều làm việc trên từ. Một mô hình học ở mức từ vì thế cắm được vào chuỗi xử lý hiện có mà không cần ánh xạ ngược từ subword âm tiết về từ.

### Cho thấy phép tính, công khai tài nguyên tính toán

Đoạn *Optimization* có hai đặc điểm mà người học nên bắt chước. Thứ nhất, các con số suy ra được viết kèm phép tính ngay trong câu. Với độ dài tối đa 256 subword, paper viết $145\text{M} \times 24{,}4 / 256 \approx 13{,}8\text{M}$ khối câu; với 40 epoch và batch 1024, paper viết $13{,}8\text{M} \times 40 / 1024 \approx 540\text{K}$ bước huấn luyện cho PhoBERT-base, và 1,08 triệu bước cho PhoBERT-large với batch 512. Đây chính là bài học "khi một con số được suy ra, hãy cho thấy phép suy ra" mà case study ViP-VL đề xuất; PhoBERT làm điều đó từ năm 2020, và người đọc kiểm tra được mọi con số trong vài giây.

Thứ hai, paper công khai tài nguyên tính toán: batch 1024 trên bốn GPU V100 16GB, learning rate cực đại 0,0004 cho base và 0,0002 cho large, warmup hai epoch, và thời gian tiền huấn luyện ba tuần cho base, năm tuần cho large. Những con số này phục vụ tái hiện, nhưng cũng phục vụ một nhóm người đọc khác: các nhóm nghiên cứu muốn làm điều tương tự cho một ngôn ngữ khác và cần ước lượng chi phí. Một paper tài nguyên cho ngôn ngữ ít tài nguyên mà nói rõ chi phí là một paper dễ được nhân rộng.

### Những chi tiết còn thiếu

Trong khuôn khổ ngắn, một số chi tiết bị lược, và vài chỗ có thể được bổ sung với chi phí rất nhỏ. Tiêu chí "removing similar articles and duplication" không được định nghĩa: người đọc không biết thế nào là "tương tự", dùng phương pháp và ngưỡng nào. Bộ từ vựng 64 nghìn subword không có lý do lựa chọn. Và vì toàn bộ lập luận dựa trên bước tách từ, một câu về độ chính xác của RDRSegmenter (đã được báo cáo trong công trình gốc mà paper trích dẫn) sẽ giúp người đọc ước lượng lỗi tách từ có thể lan truyền tới mô hình thế nào. Mỗi bổ sung chỉ tốn một mệnh đề hoặc một chú thích.

## Thí nghiệm: chọn tác vụ, chọn baseline, trình bày gọn

### Chọn tác vụ theo giả thuyết

Section 3 mở bằng việc nhắc lại bốn tác vụ, và Table 1 trình bày thống kê các bộ dữ liệu trong bốn dòng: số câu (với ba tác vụ mức từ) hoặc số cặp câu (với NLI) của tập train, validation và test, phân biệt bằng hai ký hiệu † và ‡. Như đã phân tích ở Introduction, tổ hợp ba tác vụ mức từ cộng một tác vụ có thể ở mức âm tiết hay mức từ được chọn để khớp với giả thuyết của paper. Đây là một lựa chọn nhất quán: giả thuyết nói về tác vụ mức từ, nên phần lớn bằng chứng là tác vụ mức từ.

Mặt trái của sự nhất quán đó là phạm vi của claim tổng quát. Abstract nói PhoBERT cải thiện state-of-the-art trên "multiple Vietnamese-specific NLP tasks", nhưng chỉ một trong bốn tác vụ là tác vụ hiểu câu, và tập train của tác vụ ấy là bản dịch máy. Paper nói rõ điều này ở phần setup, đó là điểm cộng. Một reviewer ngày nay có thể vẫn hỏi về các tác vụ phân loại câu hay văn bản khác, và câu trả lời rẻ nhất, nếu không thêm được thí nghiệm, là giữ claim trong phạm vi bốn tác vụ đã đánh giá.

### Setup bám theo công trình trước

Với ba tác vụ mức từ, paper nói rõ đi theo đúng setup của VnCoreNLP, dùng các benchmark chuẩn: bộ POS tagging VLSP 2013, treebank phụ thuộc VnDT v1.1 với nhãn từ loại do VnCoreNLP dự đoán, và bộ NER VLSP 2016. Với NLI, paper dùng tập validation và test tiếng Việt được xây dựng thủ công của XNLI, trong khi tập train tiếng Việt là bản dịch máy của tập train tiếng Anh. Một câu đáng chú ý giải thích sự khác biệt về tách từ: ba bộ dữ liệu mức từ có sẵn ranh giới từ chuẩn, còn với NLI, paper dùng RDRSegmenter để tách từ trước khi áp BPE.

Việc bám theo setup của công trình trước là điều kiện để phép so sánh với "previous highest reported results" có nghĩa, và phần kết quả nhắc lại điều đó ("using the same experimental setup"). Caption của Table 2 bổ sung một chi tiết mà người làm parsing sẽ hỏi ngay: mọi metric được tính trên mọi token, kể cả dấu câu. Những chi tiết nhỏ như vậy quyết định việc một con số có so sánh được với con số trong paper khác hay không.

Phần fine-tuning cũng gọn và đủ. Với POS tagging và NER, paper thêm một lớp tuyến tính trên tầng Transformer cuối, tại subword đầu tiên của mỗi từ; một chú thích cho biết trong thí nghiệm sơ bộ, lấy trung bình embedding của các subword cho kết quả thấp hơn một chút. Chú thích này là một ví dụ nhỏ về cách trả lời trước câu hỏi "sao lại chọn subword đầu?" mà không tốn chỗ trong phần chính, dù một con số cụ thể sẽ làm nó thuyết phục hơn. Với dependency parsing, paper dùng một bản cài đặt lại của Biaffine parser với siêu tham số mặc định, thay word embedding bằng contextual embedding từ tầng cuối. Với POS, NER và NLI, mô hình được fine-tune bằng AdamW với learning rate cố định $10^{-5}$, batch 32, tối đa 30 epoch, dừng sớm sau năm epoch không cải thiện trên validation, và mỗi con số là trung bình của năm lần chạy với seed khác nhau.

### Baseline: đúng đối thủ, và đối xử rộng rãi với đối thủ

Baseline của paper gồm hai nhóm. Nhóm thứ nhất là các hệ thống tốt nhất đã được công bố cho từng tác vụ, lấy từ tài liệu. Nhóm thứ hai là XLM-R ở cả hai cỡ, đối thủ mà toàn bộ câu chuyện được dựng lên để đối mặt. Với NLI, kết quả của XLM-R lấy từ paper gốc; với ba tác vụ mức từ, nhóm tác giả tự fine-tune XLM-R và ghi rõ "(our result)" trong bảng.

Chi tiết đáng học nhất nằm ở một chú thích: khi fine-tune XLM-R, nhóm tác giả dò lưới learning rate trong {5e-6, 1e-5, 2e-5, 4e-5} và batch size trong {16, 32} trên tập validation, trong khi PhoBERT dùng một learning rate cố định. Nói cách khác, **baseline được dò siêu tham số rộng hơn mô hình đề xuất**. Đây là kiểu bất đối xứng có lợi cho độ tin cậy: nếu có thiên lệch, nó nghiêng về phía đối thủ, nên chiến thắng của PhoBERT khó bị quy cho việc tuning không công bằng. Bài [Thiết kế thí nghiệm](../01-truoc-khi-viet/thi-nghiem.md) nhấn mạnh rằng một baseline được tune kém là lý do phổ biến khiến reviewer nghi ngờ kết quả; PhoBERT chặn trước nghi ngờ đó.

Điểm có thể làm tốt hơn là *vị trí* của thông tin này. Cách fine-tune XLM-R không nằm trong phần *Fine-tuning* của Section 3 mà nằm ở đoạn cuối phần Discussion và trong chú thích thứ sáu, tức là sau khi người đọc đã thấy các con số "(our result)" trong Table 2 và Table 3. Một reviewer đọc theo thứ tự sẽ gặp các con số trước khi biết chúng được tạo ra thế nào. Chuyển hai câu này lên phần setup, và thêm một câu nói thẳng hệ quả ("XLM-R thus receives a larger hyperparameter search than PhoBERT"), sẽ biến một điểm mạnh đang nằm khuất thành một điểm mạnh hiển hiện.

### Hai bảng, bốn tác vụ: trình bày gọn và minh bạch nguồn gốc con số

Kết quả chính nằm trong hai bảng, mỗi bảng ghép hai tác vụ cạnh nhau: Table 2 cho POS tagging và dependency parsing, Table 3 cho NER và NLI. Tiêu đề cột ghi rõ mức của tác vụ, "(word-level)" hay "(syllable- or word-level)", nhắc người đọc về giả thuyết trung tâm ngay khi nhìn vào con số. Cách ghép hai tác vụ vào một bảng tiết kiệm đáng kể chỗ so với bốn bảng riêng, một kỹ thuật hữu ích cho mọi paper ngắn (xem [Figures & Tables](../02-viet-tung-phan/figures-tables.md)).

Đặc điểm nổi bật hơn là **sự minh bạch về nguồn gốc của từng con số**. Các kết quả lấy từ tài liệu được đánh dấu bằng các ký hiệu (♣, ★, ♦, ♠, ■), và caption giải thích mỗi ký hiệu tương ứng với paper nào đã báo cáo con số đó. Các kết quả do nhóm tác giả tự chạy được ghi "(our result)". Người đọc vì thế luôn biết con số nào được tạo ra trong cùng điều kiện với PhoBERT và con số nào được chép lại.

Caption của Table 3 còn làm một việc trung thực đáng học. Nó tự nêu rằng XLM-R đạt kết quả NLI tiếng Việt cao hơn các con số trong bảng khi fine-tune trên tổ hợp cả 15 tập train của XNLI (thiết lập TRANSLATE-TRAIN-ALL: 79,5% cho base và 83,4% cho large), trong đó con số của bản large cao hơn 80,0% của PhoBERT-large, rồi giải thích vì sao các kết quả đó có thể không so sánh được: PhoBERT chỉ dùng dữ liệu train tiếng Việt. Một reviewer quen với XLM-R có thể đã biết con số 83,4%; việc paper tự nhắc tới nó và khoanh vùng phép so sánh biến một phản biện tiềm năng thành một bằng chứng về sự cẩn thận. Chỗ có thể chặt hơn là để sự khoanh vùng này đi theo claim lên tới abstract, nơi cụm "consistently outperforms XLM-R" đứng một mình; ba chữ như "under the same fine-tuning data" là đủ.

### Đoạn bình luận kết quả: mỗi tác vụ một đoạn

Phần *Main results* mở bằng một câu tổng kết, rồi dành cho mỗi tác vụ một đoạn ngắn, và mỗi đoạn đều so với hệ thống tốt nhất trước đó bằng một con số. Với POS tagging, hai hệ thống tốt nhất trước đó đạt khoảng 96,0%, và PhoBERT cao hơn 0,8 điểm tuyệt đối. Với dependency parsing, Biaffine parser đang giữ kết quả tốt nhất với LAS 75,0% và UAS 81,2%; PhoBERT giúp parser này tăng khoảng 4 điểm, đạt LAS 78,8% và UAS 85,2%. Với NER, PhoBERT-large cao hơn PhoBERT-base 1,1 điểm F1, và PhoBERT-base đã cao hơn hơn 2 điểm so với các hệ thống trước dùng embedding ETNLP. Với NLI, PhoBERT vượt multilingual BERT và XLM với khoảng cách lớn, và vượt XLM-R với ít tham số hơn: 135 triệu so với 250 triệu ở cỡ base, 370 triệu so với 560 triệu ở cỡ large.

Mọi con số trong các đoạn này khớp với bảng (75,0 và 81,2 là 74,99 và 81,19 làm tròn; 78,8 và 85,2 là 78,77 và 85,22), một mức nhất quán mà case study EDWARD-NMT cho thấy không phải paper nào cũng đạt. Một chi tiết ngôn từ cũng đáng chú ý: paper thường viết "PhoBERT helps produce" hay "PhoBERT helps boost the Biaffine parser" thay vì "PhoBERT achieves". Với dependency parsing, hệ thống thực sự là Biaffine parser dùng PhoBERT, nên "helps boost" là cách quy công chính xác.

Có một so sánh mạnh hơn mà các bảng chứa nhưng văn bản không nêu. Trên cả ba tác vụ mức từ, PhoBERT-base (135 triệu tham số) đã vượt XLM-R-large (560 triệu tham số): 96,7 so với 96,3 ở POS tagging, 78,77/85,22 so với 75,87/82,70 ở parsing, 93,6 so với 92,8 ở NER. Trên NLI thì ngược lại: PhoBERT-base đạt 78,5, thấp hơn 79,7 của XLM-R-large. Mẫu hình này, mô hình đơn ngữ mức từ cỡ nhỏ thắng mô hình đa ngữ cỡ lớn trên tác vụ mức từ nhưng không thắng trên tác vụ còn lại, *phù hợp* với giả thuyết của Introduction rằng tác vụ mức từ hưởng lợi nhiều nhất từ tiền huấn luyện mức từ. Nó không chứng minh giả thuyết, vì còn nhiều yếu tố khác, nhưng nó là kiểu "dự báo kiểm chứng được" mà case study [BERT](bert.md) phân tích. Một câu chỉ ra mẫu hình này, viết thận trọng, sẽ làm phần kết quả mạnh hơn mà không cần thêm thí nghiệm nào.

### Discussion: quay lại hai mối lo

Phần Discussion gồm ba đoạn, và cấu trúc của nó khép vòng lập luận mở ra ở Introduction.

Đoạn thứ nhất xử lý một kết quả bất lợi cho chính paper: PhoBERT-large có điểm parsing thấp hơn PhoBERT-base khoảng 0,9 điểm. Paper không né mà đưa ra một giải thích có trích dẫn, mở đầu bằng "One possible reason": tầng Transformer cuối có thể không phải tầng mã hóa thông tin cú pháp tốt nhất. Kèm theo là một hướng nghiên cứu tiếp theo cụ thể: đánh giá parsing từ từng tầng. Giọng văn rào đón đúng mức cho một giả thuyết chưa kiểm chứng. Có hai chỗ có thể làm giải thích này mạnh hơn. Thứ nhất, Table 2 cho thấy XLM-R cũng có cùng hiện tượng (XLM-R-large đạt 75,87/82,70, thấp hơn 76,46/83,10 của XLM-R-base), và nêu điều này sẽ cho thấy hiện tượng không riêng của PhoBERT, đúng như giả thuyết về tầng cuối dự đoán. Thứ hai, văn bản không nói rõ trọng số PhoBERT có được cập nhật cùng parser hay chỉ được dùng như bộ trích đặc trưng, vì danh sách các tác vụ được fine-tune bằng `transformers` chỉ gồm POS, NER và NLI. Người đọc khó đánh giá giả thuyết "tầng cuối" khi chưa rõ tầng cuối có được điều chỉnh cho parsing hay không; một câu làm rõ là đủ.

Đoạn thứ hai trả lời **mối lo thứ nhất**: thêm dữ liệu cải thiện mô hình, nên không có gì ngạc nhiên khi PhoBERT, với 20GB, vượt ETNLP trên NER và vượt multilingual BERT cùng XLM trên NLI, những mô hình dùng 1GB Wikipedia tiếng Việt.

Đoạn thứ ba trả lời **mối lo thứ hai**, và đây là đoạn lập luận khéo nhất paper. Sau khi cho biết PhoBERT vượt XLM-R trên cả ba tác vụ mức từ, paper chỉ ra rằng XLM-R dùng 137GB văn bản tiếng Việt, khoảng bảy lần kho của PhoBERT ($137/20 \approx 7$). Đây là một cách **loại trừ một yếu tố gây nhiễu theo chiều ngược**: nếu đối thủ có *nhiều* dữ liệu hơn mà vẫn thua, thì chiến thắng không thể quy cho lượng dữ liệu. Paper sau đó nhắc lại khác biệt về tách từ ("Recall that PhoBERT performs Vietnamese word segmentation...") và kết luận rằng kết quả này "reconfirms that the dedicated language-specific models still outperform the multilingual ones".

Ba đoạn Discussion khép vòng lập luận thành một chuỗi mà có thể tóm tắt như sau:

```mermaid
flowchart LR
    C1["Mối lo thứ nhất: dữ liệu tiếng Việt nhỏ, chỉ có Wikipedia khoảng 1GB"] --> D1["Kho 20GB: Wikipedia cộng tin tức đã khử trùng lặp"]
    C2["Mối lo thứ hai: BPE áp thẳng lên âm tiết"] --> D2["Tách từ bằng RDRSegmenter trước BPE"]
    D1 --> E1["Vượt ETNLP, multilingual BERT, XLM (dùng 1GB Wikipedia)"]
    D2 -.-> E2["Vượt XLM-R dù XLM-R có khoảng 7 lần dữ liệu tiếng Việt"]
```

Mũi tên nét liền và nét đứt trong sơ đồ không phải ngẫu nhiên. Mục tiếp theo giải thích vì sao.

### Chỗ bằng chứng mỏng hơn claim

Với mối lo thứ nhất, bằng chứng là trực tiếp ở mức đủ dùng. Với mối lo thứ hai, bằng chứng là gián tiếp. Phép so sánh PhoBERT với XLM-R loại được yếu tố *lượng dữ liệu*, nhưng hai mô hình còn khác nhau ở nhiều điểm khác: đơn ngữ so với đa ngữ (bộ từ vựng và dung lượng mô hình được chia cho nhiều ngôn ngữ hay dành riêng cho một), mức từ so với mức âm tiết, nguồn và miền của dữ liệu tiền huấn luyện (tin tức và Wikipedia so với kho dữ liệu của XLM-R), và bộ từ vựng subword (PhoBERT dùng 64 nghìn subword học trên văn bản tiếng Việt đã tách từ). Chiến thắng của PhoBERT có thể đến từ bất kỳ tổ hợp nào của các yếu tố này.

Paper xử lý sự không chắc chắn này không hoàn toàn nhất quán. Ở Introduction, giả thuyết về mức từ được rào đón cẩn thận ("Intuitively... might not"). Ở Discussion, paper nhắc lại khác biệt về tách từ, rồi rút ra một kết luận về *mô hình chuyên biệt cho ngôn ngữ* nói chung. Người đọc khó xác định paper đang quy chiến thắng cho tách từ hay cho tính đơn ngữ, và cả hai đều chưa được tách riêng bằng thí nghiệm. Đây là chỗ đối lập thú vị với [ViP-VL](vip-vl.md): ViP-VL phê bình các công trình khác vì không rõ cải thiện đến từ kiến trúc hay dữ liệu, rồi tự cung cấp một thí nghiệm cố định dữ liệu để tách hai yếu tố đó.

Có hai cách sửa, tùy tài nguyên. Cách thứ nhất là thêm một ablation: tiền huấn luyện một PhoBERT-base mức âm tiết trên cùng kho 20GB, với cùng cấu hình, rồi so với PhoBERT-base mức từ trên bốn tác vụ. Thí nghiệm này cố định tính đơn ngữ, lượng dữ liệu và miền dữ liệu, chỉ thay đổi đơn vị, nên trả lời thẳng câu hỏi mà mối lo thứ hai đặt ra. Với ba tuần tiền huấn luyện cho mỗi mô hình base, chi phí không nhỏ, nhưng một phiên bản rút gọn (ít bước hơn, áp dụng như nhau cho cả hai biến thể) vẫn cho một so sánh có kiểm soát. Cách thứ hai, khi không có tài nguyên, là giữ ngôn từ của Discussion ở cùng mức với Introduction: "is consistent with our hypothesis that word-level pre-training benefits word-level tasks", và ghi việc tách riêng hai yếu tố thành một hướng tiếp theo hay một giới hạn.

Bảng dưới đây tổng hợp quan hệ giữa các claim và bằng chứng, theo cách bài [Introduction & Figure 1](../02-viet-tung-phan/introduction.md) khuyên người viết tự lập trước khi nộp:

| Claim | Bằng chứng trong paper | Nhận xét |
|---|---|---|
| Mô hình đơn ngữ quy mô lớn, công khai đầu tiên cho tiếng Việt | Mối lo thứ nhất; chú thích về ETNLP | Được bảo chứng tốt; định ngữ "public" cần có ở mọi vị trí |
| Kết quả tốt nhất trên bốn tác vụ | Table 2, Table 3, cùng setup với công trình trước | Trực tiếp |
| Vượt XLM-R trên cả bốn tác vụ | XLM-R chạy lại với dò lưới cho ba tác vụ; số NLI từ paper gốc | Mạnh; biên NLI ở cỡ large là 0,3 điểm, chưa có độ lệch chuẩn |
| Ít tham số hơn XLM-R | 135M so với 250M; 370M so với 560M | Trực tiếp |
| Tiền huấn luyện mức từ có lợi cho tác vụ mức từ | Suy ra từ việc XLM-R có nhiều dữ liệu hơn mà vẫn thua | Gián tiếp; chưa tách khỏi yếu tố đơn ngữ |
| Mô hình chuyên biệt vẫn vượt mô hình đa ngữ | Một ngôn ngữ | Cần thu hẹp thành "for Vietnamese" |

### Những câu hỏi khác mà reviewer ngày nay có thể đặt ra

Đọc paper năm 2020 bằng con mắt của reviewer ARR hôm nay là một bài tập hữu ích, miễn là nhớ rằng nhiều kỳ vọng dưới đây chưa phổ biến vào thời điểm paper được viết.

Câu hỏi đầu tiên là **độ biến thiên**. Paper làm đúng một việc mà nhiều paper cùng thời không làm: mỗi con số là trung bình của năm lần chạy. Nhưng độ lệch chuẩn không được báo cáo. Với phần lớn các so sánh, khoảng cách đủ lớn để điều này không quan trọng; với NLI ở cỡ large, nơi PhoBERT hơn XLM-R 0,3 điểm (80,0 so với 79,7), người đọc không biết khoảng cách ấy có vượt độ dao động giữa các seed hay không. Vì năm lần chạy đã có sẵn, thêm độ lệch chuẩn gần như không tốn gì; đây là bài học mà case study [Streaming ITN](streaming-itn.md) phân tích kỹ với khoảng tin cậy bootstrap.

Câu hỏi thứ hai là **sự phụ thuộc vào bộ tách từ khi triển khai**. Vì PhoBERT học trên văn bản đã tách từ, người dùng phải chạy cùng bộ tách từ lên mọi đầu vào. Trong ba tác vụ mức từ, đánh giá dùng ranh giới từ chuẩn, nên chưa cho biết lỗi tách từ tự động ảnh hưởng thế nào. Paper thực ra có sẵn một bằng chứng một phần: với NLI, văn bản được tách bằng RDRSegmenter, và PhoBERT vẫn vượt XLM-R ở cùng cỡ. Một câu chỉ ra điều này, cộng một câu thừa nhận ba tác vụ còn lại dùng ranh giới chuẩn, sẽ trả lời trước một câu hỏi rất thực tế của người dùng.

Câu hỏi thứ ba là **chồng lấn dữ liệu**. Kho tiền huấn luyện được thu thập từ nhiều trang tin tức; paper không nói liệu văn bản của các tập test có thể đã xuất hiện trong kho này hay không. Đây là mối lo về contamination mà bài [Experiments](../02-viet-tung-phan/experiments.md) đã bàn, và ViP-VL trả lời bằng một câu về việc loại tập fine-tune khỏi kho tiền huấn luyện. Năm 2020, câu hỏi này ít được đặt ra với các mô hình cỡ BERT, nhưng hiện nay nó gần như mặc định với mọi paper tiền huấn luyện trên dữ liệu thu thập từ Internet.

!!! tip "Bất đối xứng có lợi và bất đối xứng có hại"
    Không phải mọi khác biệt về điều kiện giữa mô hình đề xuất và baseline đều làm yếu một paper. PhoBERT dò siêu tham số cho XLM-R rộng hơn cho chính nó: đó là bất đối xứng *có lợi* cho độ tin cậy, và nên được nói ra. Ngược lại, khác biệt về đơn vị tiền huấn luyện, miền dữ liệu hay tính đơn ngữ là những bất đối xứng *chưa được kiểm soát*, và chúng giới hạn những gì có thể kết luận. Khi tự kiểm tra bản thảo, người viết nên liệt kê mọi khác biệt giữa hệ thống đề xuất và baseline chính, rồi xếp mỗi khác biệt vào một trong hai nhóm này.

## Công bố mô hình và tác động

Với một paper tài nguyên, việc công bố không phải phần phụ mà là một nửa đóng góp. PhoBERT nhắc tới việc công bố ở ba vị trí: hai câu cuối abstract, ý đóng góp thứ tư và câu cuối của Conclusion. Ý đóng góp thứ tư đặc biệt cụ thể: mô hình dùng được với `fairseq`, thư viện đã dùng để tiền huấn luyện, và với `transformers`, một thư viện được dùng rộng rãi trong cộng đồng. Một mô hình chỉ chạy được với mã riêng của nhóm tác giả sẽ có ít người dùng hơn nhiều so với một mô hình nạp được bằng vài dòng trong một thư viện phổ biến. Bài [Camera-ready, poster, code](../04-nop-va-sau-nop/camera-ready.md) phân tích vì sao, với đóng góp dạng mô hình nền, chất lượng của bản công bố quyết định tầm ảnh hưởng không kém bản thân paper.

Mức độ được sử dụng của PhoBERT có thể thấy qua chính metadata của trang paper trên Hugging Face tại thời điểm biên soạn giáo trình: kho mã trên GitHub có hơn 800 sao, mô hình `vinai/phobert-base` có hơn một trăm nghìn lượt tải theo thống kê của Hub, và hơn một trăm Space trên Hub được liên kết với paper. Những con số này thay đổi liên tục, nhưng chúng cho thấy một điều mà người học nên ghi nhớ: tác động của một paper tài nguyên được đo bằng việc người khác xây được gì trên nó, và điều đó phụ thuộc nhiều vào việc tài nguyên dễ dùng tới đâu.

Một chi tiết khác đáng chú ý là chuỗi công trình mà PhoBERT đứng trên. Danh mục tài liệu tham khảo cho thấy nhiều thành phần và baseline của paper, gồm RDRSegmenter, VnCoreNLP, treebank VnDT, các hệ thống jPTDP-v2 và jointWPD, là công trình trước có tác giả đầu tham gia, và tất cả đều được trích dẫn như mọi công trình khác. Đây là cùng một chiến lược đã thấy ở hai case study Interspeech: một dòng nghiên cứu tích lũy công cụ và benchmark qua nhiều năm, và mỗi paper mới đứng trên nền móng đã được cộng đồng chấp nhận. Kết quả là một paper ngắn có thể đánh giá trên bốn tác vụ với setup chuẩn và baseline đầy đủ, vì phần lớn hạ tầng đã có sẵn.

## Limitations, kết luận và văn phong

### Bối cảnh năm 2020, và một mục Limitations nếu viết hôm nay

PhoBERT không có mục Limitations. Điều này cần được đọc đúng bối cảnh: năm 2020, các hội nghị NLP chưa yêu cầu mục này, và yêu cầu Limitations bắt buộc của các hội nghị dùng ARR chỉ xuất hiện vài năm sau đó. Ngay trong khuôn khổ đó, paper vẫn tự nói ra một số giới hạn: phần Discussion tự nêu một kết quả bất lợi (PhoBERT-large kém base ở parsing) và một hướng nghiên cứu để giải thích nó, còn caption của Table 3 tự khoanh vùng phép so sánh NLI.

Với người học đang viết paper hôm nay, câu hỏi hữu ích không phải là "paper thiếu gì" mà là "nếu nộp qua ARR hôm nay, mục Limitations của paper này sẽ gồm những gì". Một phiên bản minh họa (không phải của nhóm tác giả, chỉ dùng thông tin có trong paper) có thể như sau:

<div class="good" markdown>

*"Limitations. Our evidence that word-level pre-training is beneficial is indirect: PhoBERT and XLM-R differ not only in segmentation but also in being monolingual vs. multilingual and in their pre-training corpora, and we do not train a syllable-level counterpart to isolate the effect of segmentation. PhoBERT requires the same word segmenter at inference time; three of our four benchmarks provide gold word segmentation, so the effect of automatic segmentation errors is measured only on NLI. Our pre-training data consist of Wikipedia and news articles and may not represent other genres. Finally, our evaluation covers four tasks, only one of which is a sentence-level understanding task, whose training set is machine-translated."*

</div>

Đoạn này không làm paper yếu đi. Mỗi câu đều nêu một điều mà reviewer cẩn thận có thể tự phát hiện, và việc nhóm tác giả nói trước cho thấy họ hiểu rõ phạm vi kết luận của mình. Như bài [Conclusion, Limitations, Appendix](../02-viet-tung-phan/conclusion-supp.md) đã phân tích, những câu như vậy thường làm tăng chứ không giảm độ tin cậy. Đặt cạnh mục Limitations ba đoạn của [EDWARD-NMT](edward-nmt.md), một paper Findings of EMNLP sáu năm sau, người học thấy rõ kỳ vọng của cộng đồng đã thay đổi thế nào.

### Conclusion

Conclusion gồm ba câu: nhắc lại mô hình, nhắc lại kết quả so với XLM-R và trên bốn tác vụ, và nhắc lại việc công bố. Với một paper ngắn mà Discussion đã làm phần phân tích, một Conclusion ngắn là hợp lý. Hướng nghiên cứu tiếp theo duy nhất (đánh giá parsing theo từng tầng) nằm trong Discussion chứ không nằm ở Conclusion; người đọc chỉ đọc phần kết sẽ không thấy nó, và một câu nhắc lại sẽ giúp Conclusion có thêm một vai trò ngoài việc tóm tắt.

### Văn phong

Văn phong của PhoBERT ngắn, trực tiếp và giàu con số. Hầu hết các câu trong phần kết quả đều chứa một so sánh định lượng với một hệ thống được gọi tên. Các rào đón ("to the best of our knowledge", "intuitively", "one possible reason") được dùng đúng chỗ cho những claim cần chúng. Các chú thích được dùng nhiều, bảy chú thích trong vài trang, và chúng đảm nhận một vai trò rõ ràng: một con số thống kê, một phản ví dụ cho claim tính mới, nguồn dữ liệu, bằng chứng cho một lựa chọn thiết kế, cấu hình baseline, và phạm vi của công trình gần nhất. Có thể gọi đây là **lớp phòng thủ bằng chú thích**: những chi tiết mà reviewer có thể hỏi được trả lời sẵn, mà không làm đứt mạch lập luận chính. Rủi ro của kỹ thuật này, như đã thấy với cấu hình XLM-R và với CamemBERT, là một vài chi tiết đủ quan trọng để thuộc về phần chính lại bị đẩy xuống chú thích.

Ba chỗ có thể được trau chuốt. Thứ nhất, một vài cụm đánh giá như "It is clear that", "convincingly confirming", "not surprising" có thể bỏ đi mà câu không mất thông tin, vì con số đã tự nói; bài [Tiếng Anh học thuật](../03-ky-thuat/van-phong.md) phân tích vì sao những chữ này khiến reviewer đọc claim với thái độ dè chừng hơn. Thứ hai, cụm "the recent best pre-trained multilingual model" để chỉ XLM-R gắn chặt với thời điểm viết; một paper tài nguyên sẽ được đọc và trích dẫn nhiều năm, và một cách gọi như "the strong multilingual model XLM-R" giữ được giá trị lâu hơn. Thứ ba, các lỗi nhỏ như "perform as good as" hay trật tự từ trong "it also is" là kiểu lỗi mà một lượt đọc soát riêng cho ngữ pháp, theo quy trình ở bài [Quy trình viết & tự review](../03-ky-thuat/quy-trinh-viet.md), bắt được dễ dàng.

## Bài học cho người viết

**Một đặc điểm ngôn ngữ, diễn đạt bằng một ví dụ một dòng, có thể là toàn bộ động lực của một paper.** PhoBERT không có kiến trúc mới. Lý do tồn tại của nó là quan sát rằng khoảng trắng tiếng Việt phân tách âm tiết chứ không phân tách từ, được trình bày bằng một câu ví dụ có bản dịch, có đếm âm tiết và đếm từ, cộng một con số thống kê có nguồn. Người viết làm việc với một ngôn ngữ hay một miền dữ liệu đặc thù nên tự hỏi: đặc điểm nào của dữ liệu mà các mô hình tổng quát đang bỏ qua, và có thể giải thích nó cho một reviewer ngoài ngành trong ba dòng không?

**Claim "first" cần định ngữ chính xác, nhất quán ở mọi vị trí, và một chú thích xử lý phản ví dụ gần nhất.** Chú thích về ETNLP là một mẫu mực: ghi nhận điều công trình trước đã làm, chỉ ra đúng điều nó chưa làm. Nhưng định ngữ "public", chữ loại được ETNLP, chỉ xuất hiện ở abstract. Trước khi nộp, hãy tìm mọi lần xuất hiện của "first", "novel", "the only" trong bản thảo và kiểm tra rằng mỗi lần đều mang đủ các định ngữ cần thiết.

**Mỗi mối lo trong Introduction nên trỏ tới một lựa chọn thiết kế và một bằng chứng, và người viết nên biết mắt xích nào chỉ có bằng chứng gián tiếp.** Các cụm "To handle the first concern" và "To solve the second concern" làm cho PhoBERT liền mạch từ đầu tới cuối. Nhưng mắt xích thứ hai chỉ được chứng minh gián tiếp, và Discussion nói mạnh hơn bằng chứng. Khi một mắt xích chưa có thí nghiệm có kiểm soát, hãy giữ ngôn từ ở mức "consistent with" và ghi nó vào Limitations.

**Đối thủ mạnh nhất, được đối xử rộng rãi, và nói điều đó ở phần setup.** PhoBERT chọn đúng đối thủ (XLM-R), chạy lại nó với dò siêu tham số rộng hơn chính mình, và ghi rõ con số nào do mình chạy. Đó là những lựa chọn làm tăng độ tin cậy nhiều nhất. Bài học bổ sung là đặt thông tin ấy ở nơi người đọc gặp nó trước khi gặp con số.

**Phạm vi kết luận phải khớp phạm vi bằng chứng.** Một ngôn ngữ cho phép kết luận về ngôn ngữ đó. "For Vietnamese" chỉ dài hai chữ, nhưng nó biến một khái quát hóa có thể bị phản bác thành một kết luận vững chắc.

**Tận dụng hết bằng chứng đang có.** Các bảng của PhoBERT chứa những so sánh mạnh hơn những gì văn bản nêu: PhoBERT-base thắng XLM-R-large trên cả ba tác vụ mức từ, và XLM-R cũng có hiện tượng bản large kém bản base ở parsing. Trước khi kết thúc phần kết quả, hãy đọc lại các bảng như một reviewer và hỏi: còn mẫu hình nào ủng hộ giả thuyết của paper mà văn bản chưa chỉ ra?

**Với paper tài nguyên, sự dễ dùng là một phần của đóng góp.** Nêu rõ thư viện nào nạp được mô hình, chi phí tiền huấn luyện là bao nhiêu, và cho thấy phép tính của các con số suy ra, là những việc giúp người khác dùng lại và nhân rộng công trình.

### Áp dụng sang các cộng đồng khác

Trong **NLP**, khuôn của PhoBERT chuyển trực tiếp sang bất kỳ ngôn ngữ nào có đặc điểm chữ viết hay hình thái làm cho tokenizer chung hoạt động kém, và câu hỏi "đơn ngữ hay đa ngữ" nay được đặt lại dưới dạng "mô hình riêng hay một LLM đa ngữ". Một paper như vậy nộp qua ARR hôm nay sẽ cần thêm đúng những gì phân tích ở trên: một ablation tách các yếu tố gây nhiễu, độ lệch chuẩn qua nhiều seed, một câu về chồng lấn dữ liệu, mục Limitations và Responsible NLP Checklist; bài [Viết cho ACL / EMNLP / NAACL](../06-cong-dong/nlp.md) liệt kê những gì reviewer kỳ vọng ở một paper tài nguyên tiếng Việt. Trong **Computer Vision**, câu hỏi tương tự là có nên tiền huấn luyện riêng cho một miền ảnh (ảnh y tế, ảnh vệ tinh, ảnh tài liệu) thay vì dùng một foundation model chung; cách PhoBERT chỉ ra một đặc điểm của dữ liệu mà mô hình chung bỏ qua, rồi chứng minh rằng mô hình chung có nhiều dữ liệu hơn vẫn thua, là một khung lập luận dùng được ngay, với điều kiện có ablation tách đặc điểm đó khỏi các khác biệt khác. Trong **Machine Learning**, bài học quan trọng nhất là về confounder: khi một paper NeurIPS hay ICLR claim rằng một lựa chọn tokenization, một inductive bias hay một cách tiền xử lý là nguyên nhân của cải thiện, reviewer sẽ đòi một so sánh chỉ thay đổi đúng yếu tố đó. Trong cộng đồng **speech**, [ViP-VL](vip-vl.md) kể một câu chuyện rất gần với PhoBERT, một mô hình tiền huấn luyện tiếng Việt được công bố công khai, và bổ sung đúng mảnh mà PhoBERT còn thiếu: một thí nghiệm có kiểm soát tách đóng góp phương pháp khỏi đóng góp dữ liệu.

## Tóm tắt

PhoBERT là một ví dụ về cách một paper ngắn, không đề xuất kiến trúc mới, biện minh được cho sự tồn tại của nó. Paper dựng Introduction quanh hai mối lo gắn với tiếng Việt (dữ liệu Wikipedia nhỏ và không đại diện; khoảng trắng phân tách âm tiết chứ không phân tách từ), minh họa mối lo thứ hai bằng một câu ví dụ thay cho Figure 1, rồi nối mỗi mối lo với một lựa chọn dữ liệu ở Section 2 và một đoạn thảo luận ở Discussion. Claim "first" được bảo chứng bằng ba định ngữ và một chú thích trung thực về ETNLP; đối thủ chính XLM-R được chạy lại với dò siêu tham số rộng hơn mô hình đề xuất; hai bảng gọn ghép bốn tác vụ và ghi rõ nguồn gốc mọi con số; caption tự khoanh vùng phép so sánh NLI; phần phương pháp cho thấy phép tính và công khai tài nguyên tính toán; và mô hình được công bố cho hai thư viện phổ biến. Những chỗ có thể viết chặt hơn gồm: abstract thiếu phần "vì sao" và thiếu con số; định ngữ "public" không đi theo claim "first" ở mọi vị trí; bằng chứng cho lợi ích của tiền huấn luyện mức từ là gián tiếp trong khi Discussion kết luận mạnh hơn Introduction; cấu hình fine-tune XLM-R nằm ở Discussion và chú thích thay vì phần setup; và kết luận về mô hình chuyên biệt nói chung cần được thu hẹp về tiếng Việt. Việc thiếu mục Limitations phản ánh chuẩn mực của năm 2020, nhưng viết thử mục ấy theo chuẩn hôm nay là một bài tập giá trị cho bất kỳ paper tài nguyên nào.

## Bài tập

1. Viết lại abstract của PhoBERT thành năm đến sáu câu theo khuôn ở bài [Abstract](../02-viet-tung-phan/abstract.md), đưa vào hai mối lo và ít nhất hai con số, chỉ dùng thông tin có trong paper. So sánh với phiên bản minh họa trong bài này và quyết định câu nào sẽ bị cắt nếu phải giữ abstract trong bốn câu.
2. Tìm mọi claim dạng "first", "novel", "the only" trong bản thảo của dự án hiện tại. Với mỗi claim, lập một bảng như bảng định ngữ của PhoBERT: định ngữ nào loại phản ví dụ nào, bằng chứng nằm ở đâu, và định ngữ có xuất hiện nhất quán ở abstract, Introduction, danh sách đóng góp và Conclusion không. Viết một chú thích theo kiểu chú thích về ETNLP cho phản ví dụ gần nhất.
3. Thiết kế ablation tách tách từ khỏi tính đơn ngữ cho PhoBERT: biến thể nào cần huấn luyện, yếu tố nào được cố định, yếu tố nào vẫn chưa được kiểm soát, và nếu chỉ có một phần mười ngân sách tính toán thì nên rút gọn ở đâu. Sau đó làm điều tương tự cho so sánh chính trong dự án hiện tại: liệt kê mọi khác biệt giữa hệ thống đề xuất và baseline chính, xếp mỗi khác biệt vào nhóm "bất đối xứng có lợi" hay "chưa kiểm soát".
4. Viết một mục Limitations dài khoảng 150 đến 200 từ tiếng Anh cho PhoBERT theo chuẩn ARR hiện nay mà không nhìn lại phiên bản minh họa trong bài, chỉ dùng thông tin trong paper. Đối chiếu với phiên bản minh họa, rồi viết mục Limitations cho dự án hiện tại theo cùng cách.
5. Nếu dự án hiện tại làm việc với một ngôn ngữ hay một miền dữ liệu đặc thù, lập bảng ba cột "mối lo trong Introduction, lựa chọn thiết kế, bằng chứng", theo sơ đồ của PhoBERT. Đánh dấu mắt xích nào chỉ có bằng chứng gián tiếp, và viết lại câu kết luận tương ứng trong bản thảo sao cho ngôn từ khớp với mức độ của bằng chứng.
6. Đọc lại các bảng kết quả trong bản thảo hiện tại với câu hỏi "còn mẫu hình nào ủng hộ giả thuyết mà văn bản chưa nói ra?", như phép so sánh PhoBERT-base với XLM-R-large. Viết một đến hai câu thận trọng nêu mẫu hình đó, kèm cách diễn đạt mức độ chắc chắn phù hợp.
