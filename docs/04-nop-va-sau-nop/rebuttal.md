# Rebuttal & thảo luận

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Xác định đúng người đọc chính của rebuttal là AC hoặc meta-reviewer, và viết phản hồi phục vụ quyết định của họ.
    - So sánh ba cơ chế phản hồi: một trang PDF ở CV, thảo luận nhiều vòng trên OpenReview ở ML, và author response trong ARR ở NLP.
    - Tổ chức một quy trình bảy ngày từ lúc nhận review tới lúc nộp phản hồi, với bảng phân loại ý kiến reviewer.
    - Viết rebuttal một trang bằng LaTeX và phản hồi dạng bình luận trên OpenReview theo mẫu.
    - Nhận biết khi nào cần dùng kênh bình luận bảo mật gửi AC và viết bình luận đó một cách khách quan.

Sau vài tháng chờ đợi, review đến cùng lúc với một khoảng thời gian ngắn để trả lời, thường chỉ khoảng một tuần. Giai đoạn này có nhiều tên gọi: **rebuttal** ở CV, **author response** ở NLP, **rebuttal và discussion** ở ML. Dù tên gọi khác nhau, bản chất là một: tác giả có một cơ hội duy nhất để làm rõ những hiểu lầm, bổ sung bằng chứng cho những điểm bị nghi ngờ, và giúp người ra quyết định nhìn paper một cách công bằng.

Câu hỏi đầu tiên người học thường đặt ra là rebuttal có thực sự thay đổi được kết quả hay không. Câu trả lời trung thực là: tùy vào vị trí của paper. Với một paper nhận điểm thấp đồng loạt từ mọi reviewer vì lý do thực chất, chẳng hạn thiếu thí nghiệm cốt lõi hay đóng góp trùng với công trình đã có, rebuttal hiếm khi cứu được. Nhưng với một paper ở vùng **borderline**, nơi điểm số lẫn lộn và các reviewer bất đồng với nhau, rebuttal thường là yếu tố quyết định, bởi AC cần một cơ sở để phân xử giữa các ý kiến trái chiều. Phần lớn paper ở các hội nghị lớn rơi vào vùng này, nên kỹ năng viết rebuttal có giá trị thực tế rất cao.

Bài này bắt đầu bằng việc xác định người đọc của rebuttal, sau đó so sánh cơ chế phản hồi của ba cộng đồng. Tiếp theo là quy trình làm việc trong bảy ngày, cách phân loại ý kiến reviewer, hai mẫu phản hồi cho hai hình thức khác nhau, các nguyên tắc vàng, và cuối cùng là cách xử lý những review có vấn đề nghiêm trọng.

## Viết cho ai: AC và meta-reviewer là người đọc chính

Sai lầm phổ biến nhất khi viết rebuttal là coi nó như một cuộc tranh luận với reviewer, đặc biệt là với reviewer cho điểm thấp nhất. Người viết dồn hết tâm sức để chứng minh reviewer đó sai, với hy vọng họ sẽ đổi ý. Trên thực tế, người có quyền quyết định là **Area Chair (AC)**, ở ARR gọi là meta-reviewer, chứ không phải từng reviewer. AC phải đọc vài chục paper trong một thời gian ngắn, mỗi paper kèm ba tới năm review và một bản phản hồi. AC đọc rebuttal để trả lời hai câu hỏi: những điểm yếu chính mà các reviewer nêu ra đã được giải quyết chưa, và có reviewer nào đã hiểu sai paper không.

Từ góc nhìn đó, rebuttal phục vụ ba nhóm người đọc với ba mục đích khác nhau. **AC** cần một bản đồ rõ ràng về các mối lo chính và trạng thái giải quyết của từng mối lo. **Reviewer tích cực** cần "đạn dược" để bảo vệ paper trong giai đoạn thảo luận nội bộ, chẳng hạn một kết quả mới trả lời đúng câu hỏi mà reviewer tiêu cực đặt ra. **Reviewer tiêu cực nhưng có thể thuyết phục** cần thấy mối lo cụ thể mà họ nêu ra được giải quyết bằng bằng chứng, không phải bằng lời khẳng định. Còn reviewer có định kiến sâu sắc với hướng nghiên cứu thì rebuttal khó thay đổi được; mục tiêu đối với họ là trả lời lịch sự và đầy đủ để AC thấy rằng mối lo đã được xử lý, chứ không phải để "thắng" họ.

Cách nhìn này có hệ quả trực tiếp tới cách viết. Một rebuttal tốt được tổ chức theo **mối lo** chứ không theo thứ tự reviewer, ưu tiên những mối lo được nhiều reviewer cùng nêu, và mở đầu bằng việc nhắc lại những điểm mạnh đã được công nhận. Nó giúp AC hoàn thành công việc nhanh hơn, và một AC được giúp đỡ thường đánh giá paper công bằng hơn.

## Ba cơ chế phản hồi ở ba cộng đồng

Dù mục tiêu chung giống nhau, hình thức phản hồi ở ba cộng đồng khác nhau đến mức chiến lược viết cũng phải thay đổi. Hiểu rõ cơ chế của hội nghị nhắm tới là điều kiện để phân bổ công sức đúng chỗ.

### Computer Vision: một trang PDF, một lần duy nhất

Ở CVPR, ICCV và ECCV, rebuttal thường là **một trang PDF** viết theo template riêng do hội nghị cung cấp, nộp trong khoảng một tuần sau khi review được công bố. Một trang này phải trả lời tất cả reviewer cùng lúc, và không có vòng hỏi đáp tiếp theo: sau khi rebuttal được nộp, các reviewer đọc nó cùng với review của nhau, thảo luận nội bộ, đưa ra điểm cuối cùng, rồi AC viết meta-review. Quy định thường cấm đưa link ra ngoài, cấm vượt một trang, và cấm bổ sung những đóng góp mới mà reviewer không yêu cầu; kết quả thí nghiệm bổ sung để trả lời câu hỏi của reviewer thường được chấp nhận, nhưng phạm vi cho phép thay đổi theo năm và phải đọc kỹ hướng dẫn rebuttal.

Hệ quả của cơ chế này là **mỗi dòng đều đắt giá**. Vì không có cơ hội giải thích thêm, tác giả phải dự đoán và trả lời trước những câu hỏi tiếp theo mà reviewer có thể đặt ra. Vì chỉ có một trang, tác giả phải chọn lọc khắt khe: những điểm nhỏ được gom thành một câu cuối, còn không gian chủ yếu dành cho hai tới bốn mối lo lớn nhất.

### Machine Learning: phản hồi từng reviewer và thảo luận nhiều vòng

Ở NeurIPS, ICML và ICLR, toàn bộ quá trình diễn ra trên OpenReview. Tác giả đăng phản hồi dưới dạng bình luận cho **từng review**, mỗi phản hồi thường có giới hạn số ký tự, cộng thêm một **general response** (hay global response) gửi tới tất cả reviewer để trình bày các điểm chung và kết quả bổ sung. Một số năm cho phép đính kèm một trang PDF chứa hình và bảng vào general response; một số năm chỉ cho phép văn bản. OpenReview hiển thị được Markdown và công thức toán dạng LaTeX, nên bảng kết quả nhỏ có thể trình bày trực tiếp trong bình luận.

Sau phản hồi ban đầu là giai đoạn **thảo luận** giữa tác giả và reviewer, kéo dài từ một tới vài tuần tùy hội nghị: reviewer có thể hỏi thêm, tác giả trả lời, và reviewer có thể điều chỉnh điểm. ICML trong những năm gần đây giới hạn số vòng trao đổi chặt hơn. ICLR có giai đoạn thảo luận dài nhất và **cho phép tải lên bản PDF đã sửa** trong lúc thảo luận; hơn nữa, review và thảo luận ở ICLR được công khai, nên bất kỳ ai cũng có thể đọc và đôi khi bình luận.

Hệ quả là chiến lược ở ML giống một cuộc đối thoại hơn là một bản tuyên bố. Tác giả cần trả lời đúng trọng tâm từng reviewer, theo dõi thảo luận hằng ngày, và phản hồi kịp thời khi có câu hỏi mới. Mặt khác, cũng cần tránh "nhấn chìm" reviewer bằng những phản hồi dài nhiều nghìn chữ: một reviewer bận rộn sẽ không đọc hết, và AC có thể coi đó là dấu hiệu paper cần sửa quá nhiều. Gần cuối giai đoạn thảo luận, nhiều nhóm tác giả đăng thêm một bình luận tóm tắt cho AC, liệt kê mối lo nào đã được giải quyết và reviewer nào đã xác nhận.

### NLP: author response trong ARR, meta-review và chu kỳ sau

Ở các hội nghị dùng ACL Rolling Review, tác giả viết **author response** trên OpenReview của ARR trong một khoảng thời gian ngắn sau khi nhận review, thường là phản hồi riêng cho từng review. Reviewer có thể cập nhật review sau khi đọc phản hồi, rồi AC viết **meta-review** tổng hợp, kèm một mức đánh giá tổng thể. Điểm khác biệt quan trọng so với hai cộng đồng kia là meta-review không phải quyết định cuối cùng. Dựa trên review và meta-review, tác giả tự chọn: commit paper tới một hội nghị, nơi PC quyết định đưa vào main conference, Findings hay reject; hoặc sửa paper và nộp lại vào chu kỳ ARR sau, kèm **revision notes** mô tả những gì đã thay đổi để đáp ứng review cũ.

Hệ quả là author response ở ARR có hai lớp người đọc: meta-reviewer trong chu kỳ hiện tại, và sau đó là Senior Area Chair cùng PC của hội nghị nhận commit, vì review, phản hồi và meta-review đi cùng paper. Một phản hồi rõ ràng, có bằng chứng, giúp cả hai lớp người đọc thấy rằng các điểm yếu đã được xử lý. Nếu tác giả dự định nộp lại chu kỳ sau, những cam kết trong author response trở thành danh sách việc phải làm và nên được phản ánh chính xác trong revision notes.

Bảng dưới đây tổng hợp ba cơ chế để tiện đối chiếu. Các con số chỉ mang tính điển hình và phải được kiểm tra theo năm nộp.

| Khía cạnh | Computer Vision | Machine Learning | NLP (ARR) |
|---|---|---|---|
| Hình thức | Một trang PDF theo template | Bình luận văn bản cho từng review + general response | Bình luận văn bản cho từng review |
| Giới hạn | Một trang | Giới hạn ký tự mỗi phản hồi | Theo hướng dẫn của chu kỳ |
| Số vòng | Một lần | Nhiều vòng trong giai đoạn thảo luận | Thường một lượt phản hồi chính |
| Sửa paper trong lúc review | Không | ICLR cho phép tải PDF đã sửa | Không; sửa ở chu kỳ sau |
| Người quyết định | AC, sau thảo luận nội bộ | AC, sau thảo luận | Tác giả chọn commit; PC hội nghị quyết định |
| Công khai | Không | ICLR công khai review và thảo luận | Không |

## Quy trình bảy ngày

Vì thời gian ngắn và áp lực tâm lý lớn, rebuttal dễ bị viết vội trong hai ngày cuối. Một quy trình có kế hoạch giúp nhóm tác giả dùng hết thời gian cho những việc tạo ra khác biệt, nhất là thí nghiệm bổ sung. Bảng dưới đây mô tả một quy trình bảy ngày điển hình cho rebuttal kiểu CV; với ML và NLP, khung này vẫn áp dụng được cho giai đoạn phản hồi ban đầu, kèm một số điều chỉnh được nêu sau bảng.

| Ngày | Việc chính | Lý do |
|---|---|---|
| 1 | Đọc review và meta-review (nếu có) một lần, rồi tạm dừng. Không trả lời ngay. | Phản ứng cảm xúc đầu tiên hiếm khi là phản ứng tốt nhất |
| 1–2 | Lập bảng phân loại mọi ý kiến; họp nhóm thống nhất ưu tiên và phân công | Biến một khối văn bản gây áp lực thành danh sách việc cụ thể |
| 2–5 | Chạy thí nghiệm bổ sung khả thi; viết các đoạn giải thích cho hiểu lầm | Bằng chứng mới là thứ có sức thuyết phục nhất, và cần nhiều thời gian nhất |
| 4–6 | Viết bản nháp đầy đủ; đồng tác giả và người hướng dẫn đọc góp ý | Người không trực tiếp viết phát hiện giọng văn gay gắt hay lập luận thiếu |
| 6–7 | Cắt gọn theo giới hạn, kiểm tra ẩn danh và quy định, nộp sớm | Tránh lỗi hệ thống và lỗi định dạng phút chót |

Với các hội nghị ML, phản hồi ban đầu nên được đăng trước hạn chót một chút để reviewer có thời gian đọc và hỏi lại trong giai đoạn thảo luận; sau đó, nhóm tác giả nên phân công người theo dõi OpenReview mỗi ngày cho tới khi giai đoạn thảo luận kết thúc. Với ARR, thời gian author response thường ngắn, nên bảng phân loại và kế hoạch thí nghiệm cần được lập ngay trong ngày đầu tiên. Ở cả ba cộng đồng, nên ưu tiên những thí nghiệm có thể hoàn thành chắc chắn; một kết quả dang dở được trình bày trong phản hồi thường gây hại nhiều hơn có lợi.

## Phân loại ý kiến reviewer

Bước quan trọng nhất của cả quy trình là lập **bảng phân loại**. Mục đích của nó là buộc nhóm tác giả đọc từng ý kiến một cách tỉnh táo, nhận ra những mối lo trùng lặp giữa các reviewer, và quyết định câu trả lời cho mỗi ý kiến trước khi bắt tay vào viết. Bảng cũng giúp phân công rõ ràng, tránh tình trạng hai người cùng chạy một thí nghiệm hoặc không ai chạy cả. Ví dụ dưới đây lấy từ một paper giả định về phát hiện vật thể 3D từ ảnh đơn (monocular 3D detection), cùng paper được dùng trong mẫu rebuttal ở mục sau.

| ID | Reviewer | Ý kiến | Loại | Mức ưu tiên | Cách trả lời | Ai làm |
|---|---|---|---|---|---|---|
| R1.1 | R1 (nghiêng reject) | Thiếu so sánh với phương pháp X | Thí nghiệm thiếu | **Cao** (R1 và R3 cùng nêu) | Chạy X bằng code chính thức, thêm bảng nhỏ | Tác giả A |
| R2.3 | R2 (nghiêng accept) | Hiểu Eq. 3 là ước lượng theo pixel | Hiểu lầm | Trung bình | Giải thích, chỉ tới dòng L215–220 | Tác giả B |
| R3.2 | R3 (reject) | "Novelty limited, giống Y" | Novelty | **Cao** | Nêu rõ khác biệt với Y, kèm kết quả cho thấy Y kém ở vật thể xa | Tác giả A |
| R3.4 | R3 | Kết quả có ý nghĩa thống kê không? | Thí nghiệm thiếu | Trung bình | Báo cáo trung bình và độ lệch chuẩn qua ba seed | Tác giả B |
| R1.4 | R1 | Lỗi chính tả ở L340 | Nhỏ | Thấp | "Will fix", gom chung một câu cuối | Tác giả B |

Cột "Loại" là phần cần giảng kỹ nhất, vì mỗi loại ý kiến đòi hỏi một chiến lược trả lời khác nhau.

**Hiểu lầm.** Reviewer hiểu sai một điểm mà paper thực ra đã trình bày. Phản ứng tự nhiên là bực bội, nhưng cách tiếp cận hiệu quả là nhận trách nhiệm về cách viết: nếu một reviewer chuyên môn hiểu sai, nhiều người đọc khác cũng có thể hiểu sai. Câu trả lời nên làm rõ, chỉ tới vị trí cụ thể, và cam kết sửa cách trình bày: *"As stated in L215–220, the uncertainty is estimated per object, not per pixel. We apologize for the confusion and will clarify this in Sec. 3.2."*

**Thí nghiệm thiếu.** Nếu chạy được trong thời gian rebuttal và quy định cho phép, hãy đưa kết quả: đây là loại câu trả lời có sức thuyết phục nhất. Nếu không chạy được, hãy giải thích lý do cụ thể (ví dụ code của phương pháp so sánh không công khai, hoặc yêu cầu tài nguyên vượt quá khả năng) và đưa ra bằng chứng gián tiếp, chẳng hạn một thí nghiệm nhỏ hơn có cùng mục đích.

**Novelty và quan điểm.** Đây là loại khó nhất vì nó không có câu trả lời đúng sai tuyệt đối. Cách tiếp cận tốt là chuyển cuộc tranh luận từ mức cảm nhận sang mức cụ thể: khác biệt về giả định, về cơ chế, về kết quả trong những điều kiện mà phương pháp cũ thất bại. Một câu như *"Y models uncertainty per pixel for depth estimation, whereas we model it per object and refine it with geometric priors; Tab. A shows that this difference matters most for distant objects"* có sức nặng hơn nhiều so với *"Our method is fundamentally different from Y."*

**Sai về thực tế.** Đôi khi reviewer đơn giản là sai, ví dụ khẳng định một baseline đạt kết quả cao hơn con số thực trong paper gốc. Cần chỉ ra một cách lịch sự, kèm bằng chứng có thể kiểm chứng, và tránh mọi giọng điệu mỉa mai.

**Ý kiến nhỏ.** Lỗi chính tả, định dạng, trích dẫn thiếu: gom thành một câu ở cuối, thể hiện rằng tác giả đã ghi nhận mà không tốn không gian.

## Mẫu rebuttal một trang (Computer Vision)

Mẫu dưới đây minh họa cấu trúc của một rebuttal một trang. Các con số chỉ mang tính minh họa. Cần lưu ý rằng mỗi hội nghị cung cấp template riêng cho rebuttal, nên đoạn code này là phần nội dung được đặt vào trong template đó.

```latex
We thank all reviewers for their constructive feedback. Reviewers find our
analysis \textbf{insightful} (R1, R3), the method \textbf{simple and effective}
(R2), and the experiments \textbf{extensive} (R1, R2). We address the main
concerns below and will revise the paper accordingly.

\noindent\textbf{[R1, R3] Comparison with X~[a].}
We ran X with its official code under our setting (Tab.~A). Ours outperforms
X by +1.9 AP overall, and the gap widens for objects beyond 40\,m (+5.3 AP),
consistent with our motivation in Sec.~3.1.

\begin{table}[h]\centering\small
\begin{tabular}{lccc}
\toprule
Method & AP (all) & AP (0--40\,m) & AP ($>$40\,m) \\
\midrule
X~[a]  & 21.4 & 30.2 & 9.8 \\
Ours   & \textbf{23.3} & \textbf{31.0} & \textbf{15.1} \\
\bottomrule
\end{tabular}
\caption*{Tab.~A: Comparison with X on the validation split (mean of 3 seeds).}
\end{table}

\noindent\textbf{[R3] Novelty w.r.t.\ Y~[b].}
Y models depth uncertainty \emph{per pixel} for depth estimation, whereas we
model it \emph{per object} and refine it with height priors (Sec.~3.2).
Tab.~A shows that this difference matters most for distant objects, where
per-pixel estimates are least reliable.

\noindent\textbf{[R2] Clarification of Eq.~3.}
As stated in L215--220, the uncertainty in Eq.~3 is estimated per object.
We apologize for the confusion and will add an illustration in Fig.~2.

\noindent\textbf{[R3] Statistical significance.}
Over 3 seeds, our AP is $23.3\pm0.3$ vs.\ $21.4\pm0.4$ for X; we will report
standard deviations for all main results.

\noindent\textbf{Minor.} We will fix the typos (R1) and add the missing
references (R2, R3).
```

Cấu trúc của mẫu có chủ đích ở từng phần. Đoạn mở đầu chỉ dài ba câu, trích lại những điểm mạnh mà chính các reviewer đã công nhận, kèm nhãn reviewer, để nhắc AC rằng paper có giá trị đã được thừa nhận. Mỗi mục sau đó bắt đầu bằng nhãn reviewer trong ngoặc vuông và một tiêu đề in đậm, giúp AC lướt qua và biết ngay mối lo nào được trả lời ở đâu. Mối lo được hai reviewer cùng nêu đứng đầu; mối lo về novelty của reviewer cho điểm thấp nhất đứng thứ hai. Bằng chứng được đưa ra bằng một bảng nhỏ thay vì một đoạn lập luận. Cuối cùng, các ý kiến nhỏ được gom vào một dòng. Gói `booktabs` cần có trong preamble để dùng `\toprule`, và lệnh `\caption*` cần gói `caption`; nếu template rebuttal không có sẵn, người viết có thể thay bằng một dòng chữ in nghiêng dưới bảng.

## Mẫu phản hồi trên OpenReview (Machine Learning và NLP)

Khi phản hồi là các bình luận văn bản, cấu trúc thay đổi: thay vì một tài liệu duy nhất, tác giả viết một general response và một phản hồi riêng cho mỗi reviewer. Ví dụ dưới đây dựa trên một paper giả định về chọn lọc dữ liệu cho instruction tuning, một chủ đề nằm giữa ML và NLP. Các ô `xx.x` là chỗ để điền kết quả thật.

General response gửi tới tất cả reviewer:

```markdown
## General Response

We thank all reviewers for their thoughtful feedback. We are encouraged that
reviewers find the problem important (R1, R3), the selection criterion
principled (R2), and the analysis of data redundancy insightful (R1, R2).

Below we summarize the main changes and new results. Detailed answers are in
the individual responses.

**(1) Scaling beyond 7B (R1, R3).** We ran our method on a 13B model with the
same data budget. The relative gain over random selection is preserved:

| Model | Random (10%) | Ours (10%) | Full data |
|---|---|---|---|
| 7B  | xx.x ± x.x | **xx.x ± x.x** | xx.x |
| 13B | xx.x ± x.x | **xx.x ± x.x** | xx.x |

**(2) Statistical significance (R2).** All main results are now averaged over
3 seeds with standard deviations; the conclusions are unchanged.

**(3) Clarity of Proposition 1 (R3).** We have rewritten the assumption in
plain language and added a discussion of when it may be violated.

We will incorporate all of these changes into the revised version.
```

Phản hồi riêng cho một reviewer:

```markdown
We thank Reviewer R3 for the detailed review. We address each point below.

**W1: "The assumption in Proposition 1 seems unrealistic."**
We agree that the assumption (bounded gradient similarity between selected
and held-out examples) does not hold exactly in practice. Its role is to
explain *why* the criterion favors diverse examples, not to guarantee
performance. Empirically, we measured the quantity on our training set
(Appendix C, new Fig. 7) and found it is satisfied for xx% of example pairs.
We will state this limitation explicitly in Sec. 4.

**W2: "Missing comparison with a perplexity-based filtering baseline."**
Thank you for the suggestion. We added this baseline (see General Response,
point 1, and the new row in Table 2). It improves over random selection but
remains below ours by xx.x points on average.

**Q1: "How sensitive is the method to the budget hyperparameter?"**
Performance is stable for budgets between 5% and 20% (new Fig. 8); below 5%,
all methods degrade similarly.

We hope these answers address your concerns. If any point remains unclear,
we would be happy to discuss further during the discussion period.
```

Hai mẫu trên chia sẻ một số nguyên tắc chung. General response chỉ chứa những gì liên quan tới nhiều reviewer, để tránh lặp lại cùng một bảng trong ba phản hồi riêng. Mỗi phản hồi riêng trích lại ngắn gọn ý kiến của reviewer (W cho weakness, Q cho question), giúp reviewer không phải tìm lại review đã viết. Câu trả lời bắt đầu bằng sự đồng ý ở những điểm reviewer có lý, rồi mới giải thích phạm vi; cách này làm giảm tính đối đầu và tăng sức thuyết phục. Câu kết mời thảo luận tiếp, phù hợp với cơ chế nhiều vòng của ML.

Trong giai đoạn thảo luận, nếu reviewer chưa phản hồi khi thời hạn sắp hết, có thể gửi một lời nhắc ngắn và lịch sự, chẳng hạn: *"We would be grateful if you could let us know whether our response has addressed your concerns, or if there is anything else we can clarify before the discussion period ends."* Một lời nhắc là đủ; nhắc nhiều lần dễ tạo cảm giác gây áp lực. Với ARR, mẫu phản hồi riêng cho từng reviewer vẫn áp dụng được, nhưng nên viết với ý thức rằng meta-reviewer và sau đó là chair của hội nghị sẽ đọc toàn bộ, nên mỗi phản hồi cần tự đứng vững mà không phụ thuộc vào một vòng hỏi đáp tiếp theo.

!!! tip "Dùng LLM khi viết phản hồi"
    Dùng công cụ AI để sửa ngữ pháp và làm câu văn mạch lạc hơn thường được chấp nhận, trong khuôn khổ chính sách của hội nghị. Tuy vậy, review là tài liệu bảo mật; trước khi dán nội dung review vào một dịch vụ bên ngoài, cần đọc kỹ chính sách bảo mật của hội nghị và của chính dịch vụ đó. Nội dung lập luận và số liệu luôn phải do nhóm tác giả tự viết và kiểm chứng. Xem thêm bài [Dùng AI hỗ trợ (đúng luật)](../03-ky-thuat/ai-tools.md).

## Nguyên tắc vàng

Các phân tích ở trên có thể được cô đọng thành một số nguyên tắc áp dụng cho cả ba cộng đồng. Mỗi nguyên tắc xuất phát từ cách AC và reviewer đọc phản hồi.

Trước hết, phản hồi nên **mở đầu bằng những điểm mạnh đã được công nhận**, trích lại ngắn gọn từ chính các review. AC đọc nhiều paper liên tục; một lời nhắc rằng các reviewer đã thấy giá trị của paper giúp đặt phần còn lại vào đúng bối cảnh. Tiếp theo, cần **ưu tiên những mối lo được nhiều reviewer cùng nêu**, và những mối lo của reviewer cho điểm thấp mà có thể thuyết phục được; đây là những điểm có khả năng thay đổi quyết định cao nhất. Mỗi mục trả lời nên được **gắn nhãn reviewer**, ví dụ `[R1, R3]`, để AC dễ đối chiếu.

Về nội dung, **bằng chứng có sức nặng hơn lời nói**: một bảng nhỏ với kết quả mới thuyết phục hơn nhiều đoạn lập luận. Khi hứa sửa đổi, cần **cụ thể về vị trí và nội dung**, ví dụ *"We will add this comparison to Table 3 and discuss it in Sec. 4.3"*, thay vì *"We will improve the writing."* Đồng thời, **không hứa những gì không thể làm** trong bản camera-ready; AC và PC có thể kiểm tra, và ở ICLR mọi lời hứa đều được công khai.

Về thái độ, phản hồi phải **lịch sự tuyệt đối**, kể cả khi reviewer sai rõ ràng. Những câu như *"The reviewer clearly did not read the paper"* không bao giờ giúp ích; chúng khiến AC nghiêng về phía reviewer và khiến reviewer tích cực ngại bảo vệ paper. Cuối cùng, cần **tuân thủ mọi quy định hình thức**: không vượt giới hạn trang hay ký tự, không đưa link ra ngoài nếu bị cấm, không làm lộ danh tính, không sửa template. Một rebuttal vi phạm quy định có thể bị bỏ qua hoàn toàn.

Danh sách dưới đây tóm tắt các nguyên tắc để tiện tra cứu khi viết.

1. Mở đầu bằng điểm mạnh đã được công nhận, ngắn gọn.
2. Tổ chức theo mối lo, ưu tiên mối lo chung và mối lo có thể thuyết phục.
3. Gắn nhãn reviewer cho mỗi mục.
4. Đưa bằng chứng thay vì khẳng định.
5. Cam kết sửa đổi cụ thể, và chỉ cam kết những gì làm được.
6. Lịch sự trong mọi trường hợp.
7. Tuân thủ giới hạn, quy định về link, ẩn danh và template.

## Khi review có vấn đề: bình luận bảo mật gửi AC

Phần lớn review, kể cả những review khắt khe, là kết quả làm việc nghiêm túc của reviewer và nên được trả lời trong phản hồi chính. Tuy nhiên, có những trường hợp review vi phạm chuẩn mực một cách nghiêm trọng: reviewer rõ ràng không đọc paper (hỏi về những điều được trình bày trực tiếp trong phần chính), đưa ra nhận định sai về sự thật làm cơ sở cho điểm số, dùng lời lẽ xúc phạm, yêu cầu trích dẫn hàng loạt công trình không liên quan, hay viết một review chung chung tới mức có dấu hiệu được sinh tự động bởi LLM. Với những trường hợp này, nhiều hội nghị cung cấp một kênh riêng để tác giả báo cáo cho AC mà reviewer không nhìn thấy.

Kênh này có tên và hình thức khác nhau. Ở các hội nghị dùng OpenReview, đó thường là một bình luận với phạm vi người đọc giới hạn ở AC và các chair, hoặc một trường "confidential comments to AC" trong form rebuttal. ARR có cơ chế để tác giả báo cáo vấn đề của review cho meta-reviewer, với các loại vấn đề được liệt kê sẵn; tên gọi và cách thức có thể thay đổi theo chu kỳ. Nếu hội nghị không có kênh riêng, tác giả có thể liên hệ PC qua địa chỉ được công bố, nhưng nên dành cách này cho những trường hợp thực sự nghiêm trọng.

Cách viết bình luận bảo mật quan trọng không kém nội dung. Nó phải ngắn, khách quan, cụ thể tới từng dòng, và tuyệt đối không suy đoán về danh tính reviewer. Mục đích không phải là phàn nàn, mà là cung cấp cho AC thông tin để cân nhắc trọng số của review đó.

```markdown
Dear Area Chair,

We would like to respectfully bring two factual issues in Review R4 to your
attention.

1. R4 states that "the paper does not compare with any recent baseline."
   Table 2 (L402–418) compares with five methods published in the last two
   years, including the two that R4 mentions.
2. R4's main concern, that "the method requires ground-truth depth at test
   time," is incorrect: as stated in L188–191 and Algorithm 1, depth is
   predicted, not given.

We have addressed these points politely in our public response as well. We
would be grateful if you could take them into account when weighing the
reviews.
```

Lá thư mẫu này cho thấy các đặc điểm cần có: mở đầu trang trọng, nêu số lượng vấn đề, mỗi vấn đề gồm nhận định của reviewer và bằng chứng phản bác có số dòng, không dùng tính từ cảm xúc, và kết thúc bằng một đề nghị nhẹ nhàng. Lưu ý rằng các điểm này vẫn được trả lời lịch sự trong phản hồi chính; bình luận bảo mật bổ sung chứ không thay thế phản hồi đó.

## Tóm tắt

Rebuttal có giá trị lớn nhất với các paper ở vùng borderline, nơi AC cần cơ sở để phân xử giữa các reviewer bất đồng. Người đọc chính là AC hoặc meta-reviewer, nên phản hồi phải được tổ chức theo mối lo, ưu tiên những điểm chung và những điểm có thể thuyết phục, thay vì tranh luận với reviewer khó tính nhất. Ba cộng đồng có ba cơ chế khác nhau: CV dùng một trang PDF nộp một lần nên mỗi dòng đều đắt giá; ML dùng bình luận trên OpenReview với thảo luận nhiều vòng, đòi hỏi đối thoại kịp thời và gọn gàng; NLP qua ARR có author response và meta-review, sau đó tác giả tự quyết định commit hay nộp lại chu kỳ sau. Ở mọi cộng đồng, một quy trình bảy ngày có bảng phân loại ý kiến, bằng chứng thay cho lời khẳng định, và thái độ lịch sự tuyệt đối là nền tảng của một phản hồi hiệu quả; kênh bình luận bảo mật gửi AC chỉ dành cho những review vi phạm chuẩn mực nghiêm trọng.

## Bài tập

1. **Phân loại review thật.** Chọn một paper trên OpenReview (ví dụ một paper ICLR có cả review và phản hồi của tác giả). Lập bảng phân loại cho mọi ý kiến của reviewer theo mẫu trong bài, rồi so sánh với cách tác giả đã thực sự trả lời: tác giả có ưu tiên đúng không, mối lo nào bị bỏ qua?
2. **Viết rebuttal một trang.** Với một dự án của người học, tự viết ba review giả định (một tích cực, một borderline, một tiêu cực), hoặc nhờ đồng nghiệp viết. Lập bảng phân loại và viết rebuttal một trang bằng LaTeX theo mẫu, đảm bảo vừa đúng một trang.
3. **Chuyển đổi hình thức.** Lấy rebuttal một trang ở bài tập 2 và chuyển thành một general response cùng ba phản hồi riêng kiểu OpenReview, mỗi phản hồi không quá 2.500 ký tự. Ghi lại những gì phải thêm, bớt hoặc tổ chức lại khi chuyển hình thức.
4. **Bình luận bảo mật.** Tìm trong review giả định ở bài tập 2 (hoặc tạo thêm) một nhận định sai về sự thật. Viết hai phiên bản trả lời: một đoạn trong phản hồi công khai và một bình luận bảo mật gửi AC, rồi so sánh giọng văn và mức độ chi tiết của hai phiên bản.
