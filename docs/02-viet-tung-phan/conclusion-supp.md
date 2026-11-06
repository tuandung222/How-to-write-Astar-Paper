# Conclusion, Limitations và Appendix

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Viết một Conclusion ngắn gọn, không lặp lại abstract, và mở ra ý nghĩa rộng hơn của công trình.
    - Viết mục Limitations cụ thể, trung thực, đáp ứng yêu cầu của ACL Rolling Review, NeurIPS Paper Checklist và kỳ vọng của cộng đồng CV.
    - Xác định khi nào cần broader impact hoặc ethics statement và viết chúng một cách thực chất.
    - Phân biệt supplementary material (kiểu CV) và appendix (kiểu ML, NLP), lựa chọn và tổ chức nội dung cho phần bổ sung.
    - Ẩn danh code và dữ liệu nộp kèm để không vi phạm quy định double-blind.

Những phần ở cuối paper thường được viết vào những giờ cuối cùng trước deadline, khi người viết đã kiệt sức và chỉ muốn nộp cho xong. Kết quả là một Conclusion chép lại abstract, một đoạn Limitations chiếu lệ và một appendix lộn xộn. Đây là một sự lãng phí, vì mỗi phần trong số này đều có chức năng riêng trong mắt reviewer. Conclusion là điều người đọc mang theo khi gấp paper lại. Limitations xác định phạm vi mà các kết luận có giá trị, và cách tác giả viết nó cho thấy tác giả hiểu công trình sâu tới đâu. Ethics statement trả lời những lo ngại về tác động xã hội trước khi chúng được nêu ra. Appendix hay supplementary chứa những bằng chứng giúp kết quả tái hiện được.

Thêm vào đó, trong những năm gần đây, nhiều phần trong số này đã chuyển từ "tùy chọn" sang "bắt buộc". Ở ACL Rolling Review, paper thiếu mục Limitations có thể bị desk reject; ở NeurIPS, Paper Checklist hỏi trực tiếp về limitations, broader impacts và tính tái hiện. Vì vậy, người viết nên lên dàn ý cho các phần cuối ngay từ khi viết bản nháp đầu tiên, không để dồn tới phút chót. Bài này lần lượt đi qua Conclusion, Limitations, broader impact và ethics statement, rồi tới supplementary và appendix, và kết thúc bằng việc ẩn danh code.

## Conclusion

Conclusion là phần ngắn nhất trong thân bài, thường chỉ một đoạn từ năm tới tám câu, đôi khi hai đoạn. Chức năng của nó là **đóng lại câu chuyện**: nhắc người đọc vấn đề ban đầu và insight, tóm tắt điều paper đã chứng minh, rồi chỉ ra ý nghĩa của kết quả vượt ra ngoài các con số. Một Conclusion tốt thường đi qua ba bước. Bước thứ nhất nhắc lại vấn đề và insight trong một hai câu. Bước thứ hai tóm tắt phương pháp và phát hiện chính, lần này với sự tự tin của người đã trình bày xong bằng chứng. Bước thứ ba nêu ý nghĩa rộng hơn hoặc hướng nghiên cứu tiếp theo.

Lỗi phổ biến nhất là **sao chép abstract** với vài thay đổi nhỏ. Abstract và Conclusion có vị trí khác nhau trong trải nghiệm của người đọc: abstract viết cho người chưa đọc paper, nên phải giải thích bối cảnh và hứa hẹn kết quả; Conclusion viết cho người đã đọc xong, nên có thể dựa vào những gì đã trình bày và đi xa hơn, chẳng hạn nêu một phát hiện từ phần analysis mà abstract không đủ chỗ để nói.

> *"We presented DepthX, which models per-object depth as a distribution refined by geometric priors. Our analysis showed that depth ambiguity dominates long-range errors, and addressing it yields consistent gains across detectors and datasets. We hope this perspective encourages future work to treat depth uncertainty as a first-class citizen in monocular 3D perception."*

Ví dụ trên (của phương pháp giả định DepthX) chỉ có ba câu nhưng làm trọn ba bước. Câu đầu nhắc lại phương pháp gắn với insight. Câu thứ hai không lặp lại con số mà nêu *phát hiện*: sự mơ hồ về độ sâu là nguồn lỗi chính, và giải quyết nó mang lại cải thiện nhất quán. Câu cuối chuyển từ phương pháp cụ thể sang một quan điểm mà cộng đồng có thể mang theo. Với paper ML, bước cuối thường là một câu hỏi mở có tính lý thuyết, ví dụ *"An important open question is whether the bounded-variance assumption in Theorem 1 can be relaxed to cover heavy-tailed gradient noise."*; một câu như vậy vừa cho thấy tác giả hiểu giới hạn của kết quả, vừa gợi ý một hướng đi cụ thể.

<div class="bad" markdown>
**Chưa tốt:** *"In this paper, we proposed a novel method for monocular 3D object detection. Extensive experiments demonstrate the effectiveness of our method. In the future, we will explore more applications."*
</div>

Đoạn chưa tốt ở trên có thể gắn vào bất kỳ paper nào: không nêu insight, không nêu phát hiện, và hướng tương lai mơ hồ tới mức vô nghĩa. Ngoài ra, cần tránh hai lỗi khác ở Conclusion: đưa ra **claim hay kết quả mới** chưa xuất hiện trong thân bài, và **phóng đại** kết luận so với bằng chứng (ví dụ "solves the problem of ..."). Ở một số paper ML, Conclusion được thay bằng mục "Discussion" dài hơn, gộp cả kết luận, hạn chế và hướng mở; cách tổ chức này hợp lệ, miễn là các chức năng nêu trên vẫn được thực hiện.

## Limitations

Nhiều nghiên cứu sinh ngần ngại viết về hạn chế vì sợ reviewer dùng chính những điều đó để từ chối paper. Nỗi sợ này dễ hiểu nhưng phần lớn không có cơ sở. Reviewer có kinh nghiệm sẽ tự tìm ra các hạn chế quan trọng dù tác giả có nêu hay không; khác biệt nằm ở chỗ ai là người *định khung* cho chúng. Khi tác giả chủ động nêu một hạn chế, giải thích nguyên nhân và chỉ ra phạm vi ảnh hưởng, hạn chế đó trở thành bằng chứng cho sự hiểu biết sâu sắc. Khi reviewer phải tự phát hiện, cùng hạn chế ấy trở thành một "weakness" trong bài review, kèm nghi ngờ rằng tác giả đã cố che giấu. Cách tốt nhất để đoán trước những hạn chế mà reviewer sẽ nêu là tự đọc bản nháp theo đúng cách reviewer đọc, như bài [Đọc paper như một reviewer](../01-truoc-khi-viet/doc-nhu-reviewer.md) hướng dẫn.

Các hội nghị đã thể chế hóa quan điểm này ở những mức độ khác nhau. Ở **NLP**, ACL Rolling Review yêu cầu mọi paper có một mục riêng mang tên "Limitations", đặt sau Conclusion và trước References, không tính vào giới hạn trang; paper thiếu mục này có thể bị desk reject. Ở **ML**, NeurIPS Paper Checklist có câu hỏi về việc paper có thảo luận các hạn chế hay không, khuyến khích một mục Limitations riêng, và hướng dẫn của checklist nói rõ reviewer được yêu cầu không phạt sự trung thực về hạn chế. Ở **CV**, các hội nghị khuyến khích thảo luận limitations, và nhiều paper CV đặt một đoạn Limitations ở cuối thân bài hoặc trong supplementary, thường kèm hình minh họa failure cases. Chi tiết chính sách thay đổi theo năm, nên cần kiểm tra Call for Papers và Author Guidelines của năm nộp.

Một hạn chế được viết tốt thường có ba thành phần: **hạn chế cụ thể**, **nguyên nhân**, và (khi có thể) **hướng giải quyết**. Bằng chứng minh họa, như một hình failure case, làm hạn chế trở nên thuyết phục hơn nữa.

> *"**Limitations.** DepthX relies on category-level height priors, and is thus less effective for categories with large intra-class height variation (e.g., 'trailer'; see Fig. S5). Learning instance-adaptive priors is a promising direction."*

> *"**Limitations.** Our experiments cover five languages, all of which have large Wikipedia corpora. Since our evidence filter relies on retrieval quality, its benefit may be smaller for low-resource languages where relevant passages are scarce; we leave this evaluation to future work. In addition, two of the benchmarks were released before the training cutoff of the evaluated LLMs, so we cannot fully rule out test-set contamination (Sec. 5.3)."*

Ví dụ thứ hai, của một paper NLP giả định, cho thấy những loại hạn chế điển hình mà reviewer ARR mong đợi: phạm vi ngôn ngữ và dữ liệu, giả định ngầm của phương pháp (phụ thuộc vào chất lượng retrieval), và rủi ro trong đánh giá (contamination). Nhìn chung, các nguồn hạn chế đáng xem xét gồm: giả định của phương pháp hoặc của định lý; phạm vi dữ liệu, ngôn ngữ, miền ứng dụng; chi phí tính toán; giới hạn của metric và giao thức đánh giá; các trường hợp thất bại đã quan sát được.

Có hai kiểu Limitations nên tránh. Kiểu thứ nhất là **hạn chế giả**, chẳng hạn *"our method requires a GPU"* hay *"more experiments could be conducted"*: chúng không cung cấp thông tin gì và cho reviewer thấy tác giả đang làm cho có. Kiểu thứ hai ở thái cực ngược lại: **thừa nhận một hạn chế làm sụp đổ claim chính** mà không giải thích hay giới hạn phạm vi. Nếu một hạn chế thực sự nghiêm trọng tới mức đó, vấn đề không nằm ở cách viết Limitations mà ở claim, và claim cần được điều chỉnh trong Introduction. Ranh giới giữa việc khoanh vùng một hạn chế cho đúng và việc giấu nó đi được phân tích kỹ ở bài [Ranh giới trung thực](../07-tinh-huong-kho/ranh-gioi-trung-thuc.md).

## Broader impact và ethics statement

Limitations nói về giới hạn khoa học của công trình; broader impact và ethics statement nói về **tác động của công trình tới xã hội** và về các vấn đề đạo đức trong quá trình nghiên cứu. Hai loại câu hỏi này liên quan nhưng khác nhau. Một phương pháp sinh ảnh có thể không có hạn chế khoa học đáng kể nhưng lại có nguy cơ bị dùng để tạo deepfake; một dataset có thể chất lượng cao nhưng được thu thập mà không có sự đồng ý của những người xuất hiện trong đó.

Yêu cầu về phần này khác nhau giữa các hội nghị. NeurIPS từng yêu cầu một mục Broader Impact riêng (năm 2020), rồi chuyển sang tích hợp vào Paper Checklist với các câu hỏi về tác động xã hội tích cực và tiêu cực, về các biện pháp bảo vệ (safeguards) khi phát hành mô hình hoặc dữ liệu có nguy cơ bị lạm dụng, và về việc tuân thủ Code of Ethics. ICML những năm gần đây yêu cầu một mục Impact Statement ngắn ở cuối paper, không tính vào giới hạn trang. ICLR khuyến khích một ethics statement. Ở NLP, ACL có Code of Ethics riêng; ethics statement là tùy chọn và không tính vào giới hạn trang, còn Responsible NLP Research checklist hỏi về rủi ro tiềm ẩn, giấy phép của dữ liệu và mô hình, thông tin cá nhân trong dữ liệu, việc sử dụng người tham gia và cách trả công. Ở CV, ethics statement thường không bắt buộc nhưng trở nên cần thiết khi bài toán nhạy cảm: nhận diện khuôn mặt, giám sát, deepfake, dữ liệu y tế, hoặc dữ liệu chứa hình ảnh người thật. Ở nhiều hội nghị, paper bị reviewer gắn cờ về vấn đề đạo đức có thể được chuyển sang một vòng xem xét đạo đức riêng.

Nội dung của một ethics statement thực chất nên trả lời những câu hỏi cụ thể. Dữ liệu đến từ đâu, theo giấy phép nào, có chứa thông tin cá nhân không và đã được xử lý thế nào? Nếu có người tham gia (người gán nhãn, người đánh giá), họ được tuyển và trả công ra sao, có được hội đồng đạo đức phê duyệt không? Công trình có thể bị lạm dụng như thế nào, và tác giả đã làm gì để giảm thiểu rủi ro đó? Mô hình hoặc dataset có thể chứa thiên kiến gì?

> *"**Ethics Statement.** Our dataset is built from publicly available news articles released under a CC BY license. We removed personally identifiable information with an automatic tool, followed by manual verification of a random sample of 500 documents. Annotators were recruited through a crowdsourcing platform and paid above the local minimum wage; the annotation protocol was approved by our institution's ethics review board. The dataset is intended for research on factual consistency and should not be used to make decisions about individuals."*

Đoạn mẫu trên (giả định) trả lời từng câu hỏi bằng một thông tin kiểm chứng được. Điều cần tránh là các câu khuôn sáo kiểu *"We do not foresee any negative societal impact of this work."* Với một phương pháp sinh nội dung, một mô hình ngôn ngữ hay một hệ thống nhận dạng người, câu này thường bị reviewer coi là thiếu suy nghĩ, và có thể khiến paper bị gắn cờ xem xét đạo đức thay vì tránh được nó.

## Supplementary material và appendix

Phần lớn các hội nghị cho phép nộp thêm nội dung ngoài thân bài, nhưng hình thức khác nhau đáng kể giữa các cộng đồng, và sự khác biệt này ảnh hưởng tới cách lên kế hoạch viết.

Ở **Computer Vision**, CVPR, ICCV và ECCV dùng mô hình **supplementary material nộp riêng**: một file PDF tách biệt với paper chính, có thể kèm video và code dạng file nén, trong giới hạn dung lượng do hội nghị quy định. Hạn nộp supplementary thường muộn hơn hạn nộp paper một khoảng ngắn, nhưng con số cụ thể thay đổi theo năm. Video có vai trò đặc biệt quan trọng với các bài toán video, 3D và sinh ảnh, nơi chất lượng kết quả khó thể hiện qua hình tĩnh.

Ở **Machine Learning và NLP**, mô hình phổ biến là **appendix đặt ngay sau references trong cùng file PDF** với paper chính. NeurIPS, ICML, ICLR và ARR thường không giới hạn độ dài appendix, và có thể cho phép thêm một file nén chứa code hoặc dữ liệu. Điểm chung quan trọng là reviewer **không bắt buộc phải đọc appendix**: họ có thể đọc nếu muốn kiểm tra một chi tiết, nhưng đánh giá phải dựa trên thân bài.

!!! warning "Thân bài phải tự đứng được"
    Dù là supplementary riêng hay appendix trong cùng PDF, reviewer không có nghĩa vụ đọc phần bổ sung. Mọi thứ cần để đánh giá claim chính phải nằm trong thân bài. Phần bổ sung là nơi cho chi tiết và bằng chứng thêm, không phải nơi chứa nửa sau của paper. Một paper mà thí nghiệm then chốt chỉ có trong appendix sẽ bị đánh giá như thể thí nghiệm đó không tồn tại.

### Nội dung nên có

Nội dung của phần bổ sung nên được chọn theo một câu hỏi: một người muốn tái hiện, kiểm chứng hoặc hiểu sâu hơn công trình sẽ cần gì mà thân bài không đủ chỗ chứa? Từ câu hỏi đó, các nhóm nội dung thường gặp là:

1. **Implementation details đầy đủ**: mọi hyperparameter, kiến trúc chi tiết, data augmentation, lịch huấn luyện, phần cứng và thời gian huấn luyện, chi phí tính toán tổng.
2. **Ablation và phân tích bổ sung**: các thí nghiệm hỗ trợ nhưng không trung tâm, phân tích độ nhạy với hyperparameter.
3. **Kết quả đầy đủ**: theo từng class, từng scene, từng dataset hoặc từng ngôn ngữ, khi thân bài chỉ báo cáo con số trung bình.
4. **Thêm kết quả định tính**, bao gồm failure cases.
5. **Chứng minh đầy đủ** cho các kết quả lý thuyết, kèm bảng ký hiệu.
6. **Chi tiết dataset** nếu paper đóng góp dữ liệu: quy trình thu thập, hướng dẫn gán nhãn, giao diện gán nhãn, thống kê, giấy phép, datasheet hoặc data statement.
7. **Prompt đầy đủ** cho các phương pháp dựa trên LLM, kèm phiên bản mô hình và tham số giải mã.
8. **Video** cho các bài toán có yếu tố thời gian hoặc không gian 3D.

### Tổ chức và tham chiếu

Một appendix dài mà không có tổ chức sẽ không ai đọc. Phần bổ sung nên dùng cùng template với paper chính và được đánh số khác để không lẫn: các mục đánh A, B, C; hình và bảng ở supplementary CV thường đánh S1, S2. Khi phần bổ sung dài, một mục lục ngắn ở đầu giúp người đọc tìm đúng chỗ.

Trong thân bài, mọi tham chiếu tới phần bổ sung nên **cụ thể**: *"(see Appendix B.2 for the full hyperparameter list)"* tốt hơn nhiều so với *"see the appendix for details"*. Tham chiếu cụ thể cho reviewer biết thông tin thực sự tồn tại và nằm ở đâu, điều mà một câu chung chung không làm được.

```latex
% ML / NLP: appendix trong cùng PDF, ngay sau references
\bibliography{refs}
\clearpage
\appendix
\section{Implementation Details}\label{app:impl}
\section{Additional Ablations}\label{app:ablation}
\section{Proof of Theorem~\ref{thm:sgd}}\label{app:proof_sgd}

% CV: supplementary là file riêng (supp.tex); các dòng dưới đặt trong preamble
% Tham chiếu tới nhãn của main.tex bằng gói xr
% (cần file main.aux từ lần biên dịch main.tex; trên Overleaf có thể phải cấu hình thêm)
\usepackage{xr}
\externaldocument{main}
% Đánh số riêng cho mục, hình và bảng của supplementary
\renewcommand{\thesection}{\Alph{section}}
\renewcommand{\thefigure}{S\arabic{figure}}
\renewcommand{\thetable}{S\arabic{table}}
```

Một số hội nghị, ở một số năm, cho phép hoặc yêu cầu cách làm khác với mô hình điển hình của cộng đồng, chẳng hạn cho phép nối supplementary vào cuối PDF của paper CV, hoặc yêu cầu appendix ML nộp thành file riêng. Hướng dẫn của năm nộp luôn là căn cứ cuối cùng.

### Ẩn danh code và dữ liệu

Ở các hội nghị double-blind, code và dữ liệu nộp kèm cũng phải ẩn danh như paper. Đây là chỗ dễ sơ suất nhất, vì danh tính có thể lộ ra qua những chi tiết mà người viết không để ý. Trước khi nén code để nộp, cần rà soát:

- **Tên và thông tin cá nhân** trong comment, docstring, file license, file README, tên package.
- **Đường dẫn tuyệt đối** chứa tên người dùng hoặc tên máy chủ của phòng thí nghiệm (kiểu `/home/<tên-người-dùng>/...`), kể cả trong file cấu hình và output của notebook.
- **Lịch sử git**: không nộp thư mục `.git`, vì nó chứa tên và email của người commit.
- **Liên kết ngoài**: link tới repository GitHub cá nhân, dashboard theo dõi thí nghiệm, Google Drive (tên chủ sở hữu hiện ra khi mở link), trang Hugging Face dưới tên tổ chức.
- **Metadata**: trường tác giả trong file PDF của supplementary, metadata của checkpoint hoặc file dữ liệu.

Khi cần chia sẻ code qua đường link, có thể dùng các dịch vụ tạo repository ẩn danh như Anonymous GitHub. Chi tiết về các quy định ẩn danh khác được trình bày ở bài [Chuẩn bị nộp bài](../04-nop-va-sau-nop/submission.md), còn việc phát hành code công khai sau khi paper được chấp nhận được bàn ở bài [Camera-ready, poster, code](../04-nop-va-sau-nop/camera-ready.md).

## Khác biệt giữa các cộng đồng

Các mục trên đã nêu khác biệt ở từng phần. Bảng dưới đây tổng hợp lại để người học dễ đối chiếu khi chuyển một paper giữa các cộng đồng. Các thông tin trong bảng phản ánh thông lệ điển hình những năm gần đây; chính sách cụ thể cần kiểm tra trong Call for Papers của năm nộp.

| Phần | Computer Vision (CVPR, ICCV, ECCV) | NLP (ACL, EMNLP, NAACL qua ARR) | Machine Learning (NeurIPS, ICML, ICLR) |
|---|---|---|---|
| Conclusion | Một đoạn ngắn, đôi khi gộp với limitations | Một đoạn ngắn, đứng trước mục Limitations | Một đoạn, hoặc mục "Discussion" dài hơn |
| Limitations | Khuyến khích; đoạn cuối thân bài hoặc trong supplementary | Bắt buộc, mục riêng, không tính vào giới hạn trang | Checklist (NeurIPS) hỏi trực tiếp; khuyến khích mục riêng |
| Ethics / impact | Cần khi bài toán nhạy cảm | Ethics statement tùy chọn, không tính trang; Responsible NLP checklist | Checklist về broader impacts (NeurIPS); Impact Statement (ICML); ethics statement khuyến khích (ICLR) |
| Phần bổ sung | Supplementary PDF riêng, kèm video, code | Appendix sau references trong cùng PDF; có thể nộp thêm phần mềm, dữ liệu | Appendix sau references, thường trong cùng PDF; file nén code tùy chọn |

Hệ quả thực tế của bảng này thể hiện rõ nhất khi chuyển paper. Một paper CV chuyển sang ARR cần viết mới một mục Limitations đầy đủ và chuyển nội dung supplementary vào appendix, đồng thời lưu ý rằng video không còn là một kênh trình bày chính. Một paper NLP chuyển sang NeurIPS cần chuẩn bị checklist và có thể phải bổ sung error bar cho các thí nghiệm. Một paper ML chuyển sang CVPR cần tách appendix thành supplementary riêng và đảm bảo các kết quả định tính quan trọng có mặt trong thân bài. Bài [Chuyển một paper giữa các cộng đồng](../06-cong-dong/chuyen-doi.md) phân tích kỹ hơn các thay đổi này.

## Tóm tắt

Các phần cuối của paper đáng được đầu tư như mọi phần khác. Conclusion đóng lại câu chuyện bằng ba bước: nhắc vấn đề và insight, tóm tắt phát hiện chính, mở ra ý nghĩa rộng hơn; nó không được sao chép abstract hay đưa ra claim mới. Limitations là bắt buộc ở ARR, được NeurIPS Checklist hỏi trực tiếp và được khuyến khích ở CV; một hạn chế tốt nêu cụ thể vấn đề, nguyên nhân và hướng giải quyết, tránh cả hạn chế giả lẫn hạn chế làm sụp đổ claim. Broader impact và ethics statement cần trả lời những câu hỏi cụ thể về dữ liệu, người tham gia và nguy cơ lạm dụng, thay vì dùng câu khuôn sáo. Phần bổ sung có hai mô hình chính, supplementary riêng ở CV và appendix sau references ở ML và NLP, nhưng trong cả hai trường hợp, thân bài phải tự đứng được và code nộp kèm phải được ẩn danh cẩn thận.

## Bài tập

1. **Viết lại Conclusion.** Đặt abstract và Conclusion của bản nháp hiện tại cạnh nhau. Đánh dấu mọi câu trùng ý giữa hai phần, rồi viết lại Conclusion theo ba bước, trong đó có ít nhất một phát hiện từ phần analysis và một hướng nghiên cứu tiếp theo đủ cụ thể để người khác có thể bắt tay vào làm.
2. **Liệt kê hạn chế.** Liệt kê ít nhất năm hạn chế của công trình, mỗi hạn chế thuộc một nhóm khác nhau (giả định, phạm vi dữ liệu hoặc ngôn ngữ, chi phí, đánh giá, failure case). Chọn ba hạn chế quan trọng nhất và viết mục Limitations theo công thức hạn chế, nguyên nhân, hướng giải quyết, kèm tham chiếu tới bằng chứng.
3. **Ethics statement.** Trả lời bằng văn bản các câu hỏi trong mục broader impact và ethics statement cho dự án đang thực hiện. Nếu dự án nhắm tới NeurIPS hoặc ARR, đối chiếu với các câu hỏi tương ứng trong NeurIPS Paper Checklist hoặc Responsible NLP Research checklist của năm gần nhất.
4. **Rà soát ẩn danh.** Nén thư mục code định nộp kèm, giải nén ở một máy khác, rồi tìm kiếm tên các thành viên trong nhóm, tên phòng thí nghiệm, đường dẫn tuyệt đối và đường link ngoài trong toàn bộ file. Ghi lại mọi chỗ phát hiện và cách xử lý.
