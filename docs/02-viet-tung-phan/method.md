# Method

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Tổ chức phần Method theo một trình tự logic: preliminaries hoặc problem formulation, overview kèm figure, các thành phần chính, rồi mục tiêu huấn luyện và cách suy luận.
    - Trình bày từng thành phần theo khuôn Why–What–How, để reviewer thấy được lý do của mỗi lựa chọn thiết kế.
    - Dùng ký hiệu toán học nhất quán, định nghĩa đầy đủ và dễ theo dõi.
    - Quyết định khi nào cần figure phương pháp, algorithm box, định lý hay mệnh đề, và trình bày chúng theo đúng thông lệ.
    - Viết phần Method cho các paper NLP dựa trên prompt, pipeline hoặc tài nguyên dữ liệu, cũng như cho paper ML có lý thuyết.

Nếu Introduction là một lời hứa thì Method là nơi lời hứa ấy được thực hiện. Ở Introduction, nhóm tác giả đã nêu vấn đề, chỉ ra khoảng trống của các phương pháp hiện có và giới thiệu một insight. Khi bước sang Method, reviewer đổi tư thế: từ người nghe kể chuyện thành người kiểm tra. Họ muốn biết phương pháp có thật sự hiện thực hóa insight đã hứa hay không, mỗi thành phần có lý do để tồn tại hay không, và một người có chuyên môn tương đương có thể cài đặt lại nó hay không.

Vì vậy, một phần Method tốt phải đạt cùng lúc ba mục tiêu. Thứ nhất, người đọc **hiểu được ý tưởng** ở mức trực giác trước khi gặp công thức. Thứ hai, người đọc **thấy được lý do** của từng thiết kế, tức là hiểu vì sao tác giả chọn cách này thay vì một cách đơn giản hơn. Thứ ba, người đọc **tái hiện được** phương pháp khi kết hợp thân bài với appendix (hoặc supplementary) và code. Ba mục tiêu này thường kéo nhau theo các hướng ngược chiều: quá nhiều chi tiết làm mờ ý tưởng, quá ít chi tiết làm mất khả năng tái hiện. Kỹ năng viết Method nằm ở việc sắp xếp thông tin thành từng lớp, ý tưởng ở trên, chi tiết ở dưới, và những gì không cần cho việc đánh giá claim thì chuyển ra phụ lục.

Bài này đi từ khung cấu trúc tổng thể sang các công cụ trình bày (ký hiệu, figure, algorithm box, định lý), rồi tới đặc thù của từng cộng đồng và những lỗi thường gặp.

## Đọc Method theo lớp

Trước khi bàn về cấu trúc, cần hình dung phần Method được đọc như thế nào. Có thể phân biệt ba lượt đọc với ba nhu cầu khác nhau, và một phần Method tốt phục vụ được cả ba.

Ở lượt **lướt**, người đọc chỉ nhìn tiêu đề các mục con, đoạn overview và figure phương pháp. Sau lượt này, họ cần nắm được phương pháp gồm những khối nào, dữ liệu chảy qua các khối theo thứ tự nào, và khối nào là đóng góp mới. Nếu tiêu đề mục con chỉ là "Module A", "Module B" thì lượt lướt gần như không thu được gì; nếu tiêu đề là "Depth as a Distribution" hay "Geometry-Guided Refinement" thì chỉ riêng mục lục đã kể được một nửa câu chuyện.

Ở lượt **đọc kỹ**, reviewer đọc phần động lực và công thức của từng thành phần, đối chiếu với Related Work để xem phần nào thực sự mới, và tự hỏi liệu có cách đơn giản hơn để đạt cùng mục đích hay không. Đây là lượt quyết định phần lớn các nhận xét về *novelty* và *soundness* trong bài review.

Ở lượt **tái hiện**, người đọc (một reviewer khó tính, hoặc một nhóm khác sau khi paper được đăng) muốn cài đặt lại phương pháp. Họ cần kích thước tensor, giá trị hyperparameter, chi tiết khởi tạo, cách xử lý các trường hợp biên. Những thông tin này thường nằm ở mục implementation details của phần Experiments và trong appendix, nhưng Method phải chỉ rõ chúng nằm ở đâu. Cấu trúc khuyến nghị dưới đây được thiết kế để phục vụ đúng ba lớp ấy.

## Cấu trúc khuyến nghị

Phần lớn paper phương pháp ở cả ba cộng đồng có thể tổ chức Method theo khung sau. Các con số mục là ví dụ, giả sử Method là Section 3.

```text
3. Method
   3.1 Preliminaries / Problem formulation   ← bài toán, ký hiệu, phương pháp nền
   3.2 Overview                              ← 1 đoạn + Figure phương pháp
   3.3 Thành phần chính #1                   ← Why → What → How
   3.4 Thành phần chính #2                   ← Why → What → How
   3.5 Training objective & Inference        ← loss tổng, khác biệt train/inference
```

Khung này không phải luật cứng. Với một phương pháp gọn, mục Overview có thể nhập vào đầu Section 3 mà không cần tiêu đề riêng; với một paper lý thuyết, các mục con có thể là "Setup", "Main Result", "Proof Sketch". Điều cần giữ là *trật tự logic*: người đọc phải biết bài toán và ký hiệu trước khi gặp thành phần mới, và phải có bản đồ tổng thể trước khi đi vào chi tiết.

Một câu hỏi hay gặp là nên có bao nhiêu thành phần chính. Thông thường hai đến ba là vừa. Nếu Method có năm, sáu thành phần ngang hàng, reviewer dễ có cảm giác paper là một tổ hợp kỹ thuật kiểu "A + B + C" thay vì một ý tưởng thống nhất, và phần ablation cũng sẽ phình to khó kiểm soát. Khi rơi vào tình huống này, người viết nên tự hỏi thành phần nào thực sự mang insight, thành phần nào chỉ là chi tiết kỹ thuật cần thiết; nhóm thứ hai có thể gom vào một mục "Implementation" ngắn hoặc chuyển ra appendix.

### Preliminaries và problem formulation

Mục mở đầu của Method làm hai việc. Việc thứ nhất là **phát biểu bài toán một cách hình thức**: đầu vào là gì, đầu ra là gì, mục tiêu tối ưu hay tiêu chí đánh giá là gì, và các ký hiệu sẽ dùng xuyên suốt. Một phát biểu chính xác ở đây giúp toàn bộ phần sau ngắn gọn hơn, vì các mục con không phải định nghĩa lại từ đầu. Việc thứ hai là **tóm tắt phương pháp nền** mà paper xây dựng lên, chẳng hạn một detector kiểu DETR, một mô hình diffusion, một kiến trúc retrieval-augmented generation hay thuật toán SGD. Phần tóm tắt này chỉ nên chứa những gì cần để hiểu phần sau, thường gói trong vài đoạn ngắn.

Điều quan trọng nhất ở mục này là **tách bạch cái có sẵn và cái mới**. Một trong những bực bội lớn nhất của reviewer là đọc hết Method mà vẫn không rõ đâu là đóng góp của paper, đâu là thành phần mượn từ công trình trước. Nếu phần nền được trình bày lẫn với phần mới, reviewer có hai phản ứng đều bất lợi: hoặc đánh giá thấp novelty vì tưởng mọi thứ đều đã có, hoặc nghi ngờ tác giả đang nhận vơ đóng góp của người khác. Các câu chuyển như *"We build upon X [12], which we briefly review below"* ở đầu và *"Different from X, we ..."* khi bắt đầu phần mới là những tín hiệu rõ ràng và được đánh giá cao.

Ví dụ dưới đây là một problem formulation ngắn cho một paper NLP giả định về retrieval-augmented generation. Đoạn văn vừa định nghĩa bài toán, vừa nói rõ thiết lập nào là chuẩn và đóng góp nằm ở đâu.

```latex
\subsection{Problem Formulation}
\label{sec:formulation}
Given a question $q$ and a document collection $\mathcal{C}$, a
retrieval-augmented generator first retrieves $k$ passages
$\mathcal{P} = \{p_1, \dots, p_k\} \subset \mathcal{C}$ and then produces an
answer $y$ with probability $p_\theta(y \mid q, \mathcal{P})$.
We follow the standard setup of~\cite{rag}; our contribution
(Sec.~\ref{sec:filter}) replaces the fixed top-$k$ selection with an
evidence filter that adapts the number of passages to each question.
```

Người viết cần cảnh giác với một xu hướng ngược: phần preliminaries dài quá mức. Khi tóm tắt phương pháp nền chiếm gần một trang trong khi phần mới chỉ nửa trang, reviewer sẽ tự hỏi đóng góp có đủ lớn hay không. Nếu phương pháp nền cần nhiều không gian để giải thích, hãy giữ trong thân bài những gì tối thiểu và chuyển phần còn lại vào appendix.

### Overview và figure phương pháp

Sau khi bài toán đã rõ, mục Overview cung cấp cho người đọc một *bản đồ*. Thường chỉ cần một đoạn văn, tham chiếu tới figure phương pháp (trong paper CV thường là Figure 2, vì Figure 1 là teaser), mô tả luồng xử lý từ đầu vào tới đầu ra và chỉ ra mỗi bước được trình bày ở mục con nào. Sau đoạn này, người đọc đọc tiếp với một khung trong đầu, nên mỗi mục con chỉ việc lấp chi tiết vào một ô đã có sẵn.

> *"Figure 2 illustrates the overall pipeline of DepthX. Given a monocular image, a standard DETR-style detector produces a set of object queries (Sec. 3.1). For each query, we predict a categorical depth distribution instead of a single value (Sec. 3.3), and then refine this distribution with category-level geometric priors (Sec. 3.4). The whole model is trained end-to-end with the objective in Sec. 3.5."*

Đoạn mẫu trên có ba đặc điểm đáng học. Mỗi câu ứng với đúng một mục con, nên đoạn văn đồng thời là mục lục của Method. Cụm *"instead of a single value"* đánh dấu ngay chỗ khác biệt so với cách làm chuẩn, giúp reviewer biết phải chú ý vào đâu. Và đoạn văn không chứa công thức nào: ở tầng overview, lời văn và hình ảnh làm việc tốt hơn ký hiệu.

### Các thành phần chính: khuôn Why–What–How

Mỗi thành phần chính nên được trình bày theo một khuôn ba bước, đôi khi thêm bước thứ tư.

**Why (động lực).** Thành phần này giải quyết vấn đề cụ thể nào? Câu trả lời tốt nhất là một liên kết ngược về Introduction hoặc về một phân tích đã trình bày, ví dụ "như đã chỉ ra ở Sec. 1, phần lớn lỗi ở khoảng cách xa đến từ sự mơ hồ về độ sâu". Động lực biến một lựa chọn kỹ thuật thành một quyết định có lý do. Không có phần này, Method trở thành một danh sách "We use X. We then apply Y.", và reviewer sẽ hỏi trong bài review: *"Why is X necessary?"*

**What (ý tưởng).** Thành phần này làm gì, nói bằng lời và ở mức trực giác. Một hoặc hai câu như "thay vì dự đoán một giá trị độ sâu, chúng ta biểu diễn độ sâu như một phân phối trên các khoảng rời rạc" giúp người đọc có hình dung trước khi gặp ký hiệu. Nhiều người viết bỏ qua bước này và nhảy thẳng vào phương trình; người đọc khi đó phải tự giải mã ý tưởng từ công thức, một việc tốn sức và dễ hiểu sai.

**How (công thức và chi tiết).** Phương trình, kích thước tensor, các lựa chọn cụ thể. Đây là phần cho lượt đọc kỹ và lượt tái hiện.

**Discussion (tùy chọn).** Vì sao không dùng một phương án đơn giản hơn, và thành phần này liên hệ thế nào với các phương pháp khác. Đoạn thảo luận ngắn này thường trả lời trước câu hỏi mà reviewer chắc chắn sẽ đặt ra, đồng thời là chỗ nối sang ablation ở phần Experiments.

Đoạn LaTeX dưới đây minh họa khuôn này cho ví dụ DepthX (một phương pháp giả định về phát hiện vật thể 3D từ ảnh đơn), được dùng xuyên suốt giáo trình.

```latex
\subsection{Depth as a Distribution}
\label{sec:depth_dist}
\noindent\textbf{Motivation.} As analyzed in Sec.~\ref{sec:analysis},
most long-range errors arise from depth ambiguity: several depths are
plausible for the same image evidence. A single depth estimate per object
cannot express this ambiguity.

\noindent\textbf{Formulation.} We instead represent the depth of the
$i$-th object as a categorical distribution over $K$ depth bins,
$\mathbf{p}_i \in \Delta^{K-1}$, predicted from its query
$\mathbf{q}_i \in \mathbb{R}^{C}$:
\begin{equation}
  \mathbf{p}_i = \mathrm{softmax}\big(\mathbf{W}_d \mathbf{q}_i\big),
  \label{eq:depth_dist}
\end{equation}
where $\mathbf{W}_d \in \mathbb{R}^{K \times C}$ is a learnable projection
and $\Delta^{K-1}$ denotes the probability simplex.

\noindent\textbf{Discussion.} A natural alternative is to regress depth
with a Gaussian likelihood. However, a unimodal distribution cannot
capture the multi-modal ambiguity observed at long range; we compare the
two choices in Table~\ref{tab:ablation}(c).
```

Có thể thấy ba điều trong ví dụ. Câu động lực chỉ về một phân tích cụ thể chứ không nói chung chung rằng "depth estimation is challenging". Mọi ký hiệu ($K$, $\mathbf{q}_i$, $C$, $\mathbf{W}_d$, $\Delta^{K-1}$) đều được định nghĩa ngay khi xuất hiện, kèm kích thước. Và đoạn Discussion nêu phương án thay thế tự nhiên nhất, đồng thời trỏ tới đúng bảng ablation trả lời câu hỏi đó. Khi đọc tới Experiments, reviewer gặp lại câu hỏi mình đã có sẵn trong đầu và thấy nó được trả lời bằng số liệu.

### Training objective và inference

Mục cuối của Method gom các thành phần lại thành một tổng thể vận hành được: hàm loss tổng với các trọng số, quy trình huấn luyện (một giai đoạn hay nhiều giai đoạn, thành phần nào được đóng băng), và cách mô hình được dùng khi suy luận.

```latex
\begin{equation}
  \mathcal{L} = \mathcal{L}_{\text{det}}
              + \lambda_{d}\,\mathcal{L}_{\text{depth}}
              + \lambda_{r}\,\mathcal{L}_{\text{refine}},
  \label{eq:total_loss}
\end{equation}
where $\lambda_d$ and $\lambda_r$ balance the three terms. We use
$\lambda_d = 1$ and $\lambda_r = 0.5$ in all experiments; a sensitivity
analysis is provided in Appendix~\ref{app:sensitivity}.
```

Hai điểm trong ví dụ này thường bị bỏ quên. Thứ nhất, giá trị cụ thể của các trọng số phải được nêu, cùng với cách chọn (tuning trên tập validation nào) hoặc chỗ có phân tích độ nhạy; một hyperparameter không có giá trị khiến phương pháp không tái hiện được. Thứ hai, **sự khác biệt giữa train và inference** phải được nói rõ. Rất nhiều phương pháp hoạt động khác nhau ở hai giai đoạn: dùng teacher forcing khi train nhưng decode tự hồi quy khi suy luận, dùng nhiều bước sampling, bỏ một nhánh phụ trợ, lấy kỳ vọng của phân phối thay vì giá trị mode. Nếu Method chỉ mô tả lúc train, reviewer sẽ không biết con số trong Table 1 được tạo ra bằng cách nào.

## Ký hiệu toán học

Ký hiệu là ngôn ngữ riêng của phần Method, và cũng như mọi ngôn ngữ, nó chỉ hữu ích khi người đọc và người viết dùng chung một quy ước. Ký hiệu không nhất quán gây ra hai tác hại. Tác hại trực tiếp là người đọc phải dừng lại, lật về trước để tra xem một chữ cái nghĩa là gì, và mỗi lần như vậy mạch hiểu bị đứt. Tác hại gián tiếp là ấn tượng về sự cẩu thả: một reviewer thấy $N$ vừa là số ảnh vừa là số token sẽ bắt đầu nghi ngờ cả độ chính xác của phần thí nghiệm. Bảng dưới đây tổng hợp các quy ước phổ biến trong ba cộng đồng.

| Quy tắc | Ví dụ |
|---|---|
| Vô hướng: chữ thường nghiêng; vector: chữ thường đậm; ma trận: chữ hoa đậm | $x$, $\mathbf{x}$, $\mathbf{W}$ |
| Tập hợp, phân phối, loss: chữ hoa thư pháp | $\mathcal{D}$, $\mathcal{L}$ |
| Không dùng một ký hiệu cho hai nghĩa | Không dùng $N$ vừa là số ảnh vừa là số token |
| Định nghĩa **mọi** ký hiệu ngay lần đầu xuất hiện | "where $K$ is the number of depth bins" |
| Chỉ đánh số phương trình sẽ được tham chiếu | `\label{eq:...}` và `Eq.~\eqref{eq:...}` |
| Dùng macro cho ký hiệu lặp lại | `\newcommand{\vq}{\mathbf{q}}` |
| Ghi rõ kích thước tensor | $\mathbf{F} \in \mathbb{R}^{H\times W\times C}$ |
| Chỉ số nhất quán | $i$ luôn chỉ đối tượng, $t$ luôn chỉ bước thời gian |

Bên cạnh bảng quy ước, có một số thói quen làm phần toán dễ đọc hơn hẳn. Trước hết, **phương trình là một phần của câu văn**: câu dẫn tới phương trình không cần dấu hai chấm khi ngữ pháp không đòi hỏi, và sau phương trình là dấu phẩy nếu câu tiếp tục bằng "where ...", dấu chấm nếu câu kết thúc. Thói quen này nhỏ nhưng là dấu hiệu của một người viết có kinh nghiệm.

Tiếp theo, **mỗi ký hiệu nên xuất hiện ít nhất hai lần**. Một ký hiệu được định nghĩa rồi không bao giờ dùng lại chỉ làm tăng gánh nặng ghi nhớ; khi đó viết bằng lời sẽ tốt hơn. Ngược lại, một khái niệm được nhắc tới nhiều lần bằng một cụm từ dài thì nên được đặt ký hiệu.

Cuối cùng, cần đề phòng hiện tượng **ký hiệu trôi dạt** (notation drift): Section 3 dùng $\mathbf{q}_i$ cho query, Section 4 lại viết $q_i$ không đậm, còn appendix dùng $\mathbf{z}_i$ cho cùng một đại lượng. Hiện tượng này gần như luôn xảy ra khi nhiều người cùng viết hoặc khi paper được sửa qua nhiều vòng. Cách phòng ngừa hiệu quả nhất là định nghĩa macro cho mọi ký hiệu quan trọng ngay từ đầu (xem [LaTeX & Overleaf](../03-ky-thuat/latex.md)), để việc đổi ký hiệu chỉ cần sửa một chỗ.

!!! tip "Bảng ký hiệu trong appendix"
    Khi paper dùng nhiều ký hiệu (một ngưỡng thực tế là hơn 15), một **notation table** trong appendix hoặc supplementary giúp người đọc tra cứu nhanh. Paper lý thuyết ở NeurIPS, ICML, ICLR thường có bảng này ngay đầu appendix, trước các chứng minh.

## Figure phương pháp

Figure phương pháp là công cụ chính của lượt đọc lướt. Với nhiều reviewer, đặc biệt ở Computer Vision, đây là hình được nhìn kỹ nhất sau Figure 1, và có khi được xem trước cả khi đọc chữ. Một figure phương pháp tốt cho phép người đọc nói lại được phương pháp bằng vài câu mà không cần đọc công thức.

Muốn vậy, hình cần tuân theo một số nguyên tắc. Luồng xử lý nên đi theo **một hướng nhất quán**, từ trái sang phải hoặc từ trên xuống dưới, để mắt người đọc không phải nhảy qua lại. **Màu sắc phải mang nghĩa**: chẳng hạn các module mới của paper dùng một màu nổi bật, các thành phần có sẵn dùng màu xám; nhiều paper gần đây còn dùng biểu tượng bông tuyết cho thành phần đóng băng (frozen) và ngọn lửa cho thành phần được huấn luyện (trainable), một quy ước người đọc đã quen. Ở các điểm quan trọng, hình nên ghi **kích thước tensor** hoặc dạng dữ liệu, vì đó là thông tin giúp người tái hiện kiểm tra cách hiểu của mình.

Nguyên tắc dễ bị vi phạm nhất là **tên trong hình, tên trong chữ và ký hiệu phải trùng nhau**. Nếu hình ghi "Refine Module", chữ gọi là "DQR", còn công thức dùng $g_\phi$, người đọc sẽ mất thời gian xác định ba thứ đó có phải là một hay không. Caption của figure phương pháp nên tóm tắt luồng xử lý bằng hai, ba câu và trỏ tới các mục tương ứng, để hình tự đứng được ngay cả khi tách khỏi văn bản. Các nguyên tắc chung về thiết kế hình, công cụ và caption được trình bày chi tiết ở bài [Figures & Tables](figures-tables.md).

Không phải paper nào cũng cần một sơ đồ pipeline. Paper ML về thuật toán tối ưu hay hàm loss thường thay figure phương pháp bằng một hình minh họa khái niệm, ví dụ quỹ đạo tối ưu trên một hàm hai chiều hoặc ranh giới quyết định trên dữ liệu tổng hợp. Paper NLP dùng LLM thường vẽ một ví dụ cụ thể đi qua các bước của pipeline, với đoạn văn bản thật ở mỗi bước, vì người đọc hiểu một prompt qua ví dụ nhanh hơn qua mô tả trừu tượng.

## Pseudo-code và algorithm box

Văn xuôi và công thức mô tả tốt các phép biến đổi đơn lẻ, nhưng kém hiệu quả khi phương pháp có **vòng lặp, rẽ nhánh hoặc nhiều giai đoạn phụ thuộc nhau**: một vòng huấn luyện có bước cập nhật đặc biệt, một quy trình sampling nhiều bước, một thuật toán tìm kiếm, một pipeline tự sinh dữ liệu rồi lọc. Trong những trường hợp này, một algorithm box cho người đọc thấy toàn bộ quy trình trong một khung nhìn, với thứ tự thực hiện không thể hiểu nhầm.

Cộng đồng ML dùng algorithm box rất thường xuyên, và paper Adam (ICLR 2015) là một ví dụ kinh điển về sức mạnh của nó. Algorithm 1 của paper trình bày trọn vẹn quy tắc cập nhật trong khoảng mười dòng: khởi tạo hai moment, cập nhật chúng ở mỗi bước, hiệu chỉnh độ lệch, rồi cập nhật tham số. Caption của thuật toán ghi luôn các giá trị mặc định cho hyperparameter ($\alpha = 0.001$, $\beta_1 = 0.9$, $\beta_2 = 0.999$, $\epsilon = 10^{-8}$). Nhờ vậy, người đọc có thể cài đặt thuật toán mà không cần đọc phần còn lại của paper, và các giá trị mặc định ấy sau này trở thành cấu hình mặc định trong nhiều thư viện. Bài học ở đây là algorithm box tốt phải **tự đứng được**: mọi đầu vào, hyperparameter và giá trị mặc định được liệt kê ngay trong khung, ký hiệu trùng với phần văn bản. Phân tích chi tiết hơn về cách paper này được viết có ở [case study Adam](../05-case-studies/adam.md).

Bên cạnh kiểu pseudo-code toán học truyền thống, nhiều paper gần đây dùng **pseudo-code kiểu PyTorch**: vài chục dòng gần giống Python, dùng tên hàm quen thuộc. MoCo (CVPR 2020) là một ví dụ được biết đến rộng rãi với Algorithm 1 viết theo phong cách này. Kiểu viết này đặc biệt hợp với các phương pháp mà điểm tinh tế nằm ở thao tác tensor (ví dụ tách gradient ở đâu, cập nhật hàng đợi lúc nào), vì người đọc có thể đối chiếu gần như trực tiếp với code của mình.

Dưới đây là một algorithm box theo kiểu toán học, dùng gói `algorithm` và `algpseudocode`, cho một phương pháp self-training giả định. Giá trị mặc định của hyperparameter được ghi trong ngoặc vuông ngay ở dòng `Require`, theo tinh thần của Adam.

```latex
% Preamble: \usepackage{algorithm} \usepackage{algpseudocode}
\begin{algorithm}[t]
\caption{Confidence-filtered self-training. Default values used in all
experiments are given in brackets.}
\label{alg:selftrain}
\begin{algorithmic}[1]
\Require labeled set $\mathcal{D}_L$, unlabeled set $\mathcal{D}_U$,
         confidence threshold $\tau$ [0.9], number of rounds $R$ [3]
\Ensure trained model $p_\theta$
\State $p_\theta \gets \textsc{Train}(\mathcal{D}_L)$
\For{$r = 1, \dots, R$}
  \State $\mathcal{P} \gets \emptyset$
  \For{each $x \in \mathcal{D}_U$}
    \State $c \gets \max_y p_\theta(y \mid x)$, \quad
           $\hat{y} \gets \arg\max_y p_\theta(y \mid x)$
    \If{$c \geq \tau$}
      \State $\mathcal{P} \gets \mathcal{P} \cup \{(x, \hat{y})\}$
    \EndIf
  \EndFor
  \State $p_\theta \gets \textsc{Train}(\mathcal{D}_L \cup \mathcal{P})$
         \Comment{retrain from scratch}
\EndFor
\State \Return $p_\theta$
\end{algorithmic}
\end{algorithm}
```

Khi viết algorithm box, cần nhớ thêm vài điểm. Đánh số dòng (tham số `[1]` của `algorithmic`) để văn bản có thể tham chiếu chính xác, ví dụ "the filtering step (line 6)". Ký hiệu trong khung phải giống hệt trong văn bản, không đặt tên biến theo kiểu code (`conf_thr`) trong khi văn bản dùng $\tau$. Algorithm box không phải nơi đổ code thật: các chi tiết như logging, xử lý batch hay kiểm tra lỗi nên lược bỏ. Về vị trí, nếu thuật toán là đóng góp trung tâm và đủ ngắn, nó nên nằm trong thân bài; nếu chỉ hỗ trợ việc tái hiện, appendix là chỗ phù hợp, với một câu tham chiếu từ Method.

## Định lý, mệnh đề và lập luận lý thuyết

Không phải paper nào cũng cần định lý, và một định lý đặt sai chỗ có thể gây hại nhiều hơn có lợi. Câu hỏi quyết định là: **claim của paper có phải là một claim lý thuyết hay không?** Nếu paper khẳng định một thuật toán hội tụ với một tốc độ nào đó, một ước lượng là không chệch, một kiến trúc có khả năng biểu diễn một lớp hàm, hay một bài toán có thể xác định được (identifiable) dưới những điều kiện nào đó, thì claim ấy phải được phát biểu chính xác và chứng minh. Ngược lại, nếu paper là thực nghiệm thuần túy, việc thêm một "Theorem" chỉ là phép biến đổi đại số hiển nhiên để trông có vẻ chặt chẽ sẽ bị reviewer có kinh nghiệm nhận ra ngay. Hiện tượng này đã được Lipton và Steinhardt gọi tên là *mathiness* trong bài viết "Troubling Trends in Machine Learning Scholarship" (2018): dùng toán học để gây ấn tượng hoặc che mờ thay vì làm sáng tỏ.

Các môi trường toán học có một thứ bậc quy ước mà người viết nên tôn trọng. **Definition** đưa ra một khái niệm mới. **Assumption** nêu một điều kiện được giả định là đúng. **Theorem** dành cho kết quả chính, quan trọng nhất. **Proposition** là một kết quả có giá trị nhưng ít trung tâm hơn. **Lemma** là bước trung gian phục vụ chứng minh. **Corollary** là hệ quả trực tiếp của một kết quả đã có. Gọi một quan sát nhỏ là "Theorem" làm người đọc kỳ vọng sai; ngược lại, kết quả chính mà chỉ gọi là "Remark" thì dễ bị đọc lướt qua.

Ở cộng đồng ML, cách trình bày một kết quả lý thuyết đã khá chuẩn hóa. **Các giả định được phát biểu tường minh và đánh số**, tách khỏi định lý, để người đọc biết chính xác kết quả đúng trong phạm vi nào và có thể bàn về mức độ thực tế của từng giả định. **Định lý tự đứng được**: phát biểu chứa đủ điều kiện, không phụ thuộc vào một câu nào đó trong đoạn văn trước. Ngay sau định lý là **một đoạn giải thích trực giác**: kết quả nói lên điều gì, vì sao nó quan trọng với claim của paper, và các hằng số trong đó phụ thuộc vào gì. Thân bài thường chỉ chứa **phác thảo chứng minh** (proof sketch) nêu ý chính, còn **chứng minh đầy đủ nằm trong appendix** với một tham chiếu rõ ràng. NeurIPS Paper Checklist có hẳn một câu hỏi về việc mỗi kết quả lý thuyết có đi kèm đầy đủ giả định và một chứng minh hoàn chỉnh hay không, nên đây không chỉ là thói quen tốt mà còn là yêu cầu được kiểm tra.

Ví dụ dưới đây minh họa hình thức trình bày bằng một kết quả kinh điển về SGD cho hàm không lồi (không phải đóng góp mới, chỉ dùng để minh họa cách viết).

```latex
% Preamble
\usepackage{amsthm}
\newtheorem{theorem}{Theorem}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{assumption}{Assumption}
\newtheorem{definition}{Definition}

% Body
\begin{assumption}[Smoothness]\label{as:smooth}
The objective $f$ is $L$-smooth, i.e.,
$\|\nabla f(\theta) - \nabla f(\theta')\| \le L\,\|\theta - \theta'\|$
for all $\theta, \theta'$.
\end{assumption}

\begin{assumption}[Bounded variance]\label{as:var}
The stochastic gradient $g_t$ is unbiased,
$\mathbb{E}[g_t \mid \theta_t] = \nabla f(\theta_t)$, and
$\mathbb{E}\,\|g_t - \nabla f(\theta_t)\|^2 \le \sigma^2$.
\end{assumption}

\begin{theorem}\label{thm:sgd}
Under Assumptions~\ref{as:smooth} and~\ref{as:var}, SGD with constant
step size $\eta = 1/(L\sqrt{T})$ satisfies
\begin{equation}
  \min_{0 \le t < T} \mathbb{E}\,\|\nabla f(\theta_t)\|^2
  \;\le\; \frac{2L\,\big(f(\theta_0) - f^\star\big) + \sigma^2}{\sqrt{T}},
\end{equation}
where $f^\star = \inf_\theta f(\theta)$.
\end{theorem}

\noindent\textit{Intuition.} The first term reflects the distance to the
optimum at initialization; the second is the price of gradient noise.
Both vanish at rate $1/\sqrt{T}$.
\textit{Proof sketch.} Apply the descent lemma to one step, take
expectations, and telescope over $T$ steps. The full proof is given in
Appendix~\ref{app:proof_sgd}.
```

Cần thêm một lời cảnh báo về độ chính xác. Chứng minh trong appendix ít được đọc kỹ hơn thân bài, nhưng không vì thế mà được phép sai. Chính paper Adam là một ví dụ: phân tích hội tụ trong paper gốc về sau được chỉ ra là có vấn đề, và bài "On the Convergence of Adam and Beyond" (Reddi và cộng sự, ICLR 2018) xây dựng một phản ví dụ cùng một biến thể sửa lỗi. Adam vẫn là một đóng góp lớn vì giá trị thực nghiệm của nó, nhưng với một paper mà claim chính là lý thuyết, một lỗi chứng minh có thể làm sụp đổ toàn bộ đóng góp. Người viết nên dành thời gian kiểm tra lại từng bước, và nếu có thể, nhờ một đồng nghiệp không tham gia viết đọc độc lập phần chứng minh.

Ở Computer Vision và NLP, định lý ít phổ biến hơn. Tuy vậy, một mệnh đề ngắn làm rõ một tính chất của phương pháp (ví dụ "hàm loss này là cận trên của sai số X", hay "module này bất biến với hoán vị đầu vào") vẫn có thể tăng sức thuyết phục, miễn là nó phục vụ trực tiếp cho câu chuyện và được chứng minh cẩn thận.

## Khác biệt giữa các cộng đồng

Khung Why–What–How áp dụng cho cả ba cộng đồng, nhưng trọng tâm của phần Method và những gì reviewer tìm kiếm ở đó khác nhau đáng kể.

### Computer Vision

Paper CV thường xoay quanh một kiến trúc hoặc một module, nên figure phương pháp đóng vai trò trung tâm và gần như bắt buộc. Reviewer CV quen đọc Method cùng lúc với hình, nên tên module, màu sắc và luồng dữ liệu trong hình phải khớp hoàn toàn với văn bản. Chi tiết kiến trúc (số lớp, kích thước kênh, độ phân giải đầu vào) thường được chia đôi: những gì cần để hiểu ý tưởng nằm trong Method, phần còn lại nằm ở implementation details của Experiments và trong supplementary. Vì cộng đồng quan tâm nhiều tới chi phí tính toán, Method nên chỉ ra thành phần mới làm tăng bao nhiêu tham số hay phép tính, hoặc ít nhất trỏ tới bảng so sánh hiệu năng.

### NLP

Ở NLP, "phương pháp" có thể mang nhiều hình thức hơn một kiến trúc mạng: một prompt hoặc một chuỗi lời gọi tới LLM, một quy trình tạo và lọc dữ liệu, một giao thức đánh giá, hay một tài nguyên mới (dataset, benchmark, lexicon). Mỗi hình thức đặt ra yêu cầu riêng về những gì phải được mô tả.

Với **paper dựa trên prompt hoặc pipeline LLM**, kết quả có thể thay đổi đáng kể chỉ vì một thay đổi nhỏ trong cách diễn đạt prompt, nên mô tả mơ hồ kiểu "we prompt the model to classify the claim" là không đủ để tái hiện. Paper cần nêu **nguyên văn template** (thân bài có thể trình bày dạng rút gọn, bản đầy đủ đặt trong appendix), **tên và phiên bản chính xác của mô hình** (với mô hình qua API, ghi phiên bản hoặc thời điểm truy cập, vì mô hình phía sau có thể được cập nhật), **tham số giải mã** (temperature, top-p, số token tối đa), **cách chọn ví dụ few-shot**, và **cách phân tích cú pháp đầu ra** khi mô hình trả lời không đúng định dạng. Một template được trình bày như sau trong appendix giúp người đọc thấy chính xác mô hình nhận được gì:

```text
You are given a claim and an evidence passage. Decide whether the passage
SUPPORTS the claim, REFUTES it, or provides NOT ENOUGH INFO.
Answer with exactly one of the three labels.

Claim: {claim}
Evidence: {evidence}
Label:
```

Với **paper tài nguyên** (resource paper), phần Method thực chất là phần mô tả cách dữ liệu được tạo ra, và độ tin cậy của toàn bộ paper phụ thuộc vào nó. Phần này cần trả lời: dữ liệu gốc lấy từ đâu và theo giấy phép nào; được lọc, làm sạch, khử trùng lặp thế nào; **quy trình gán nhãn** ra sao, gồm hướng dẫn gán nhãn (guidelines), người gán nhãn là ai, bao nhiêu người, trình độ và cách tuyển, được trả công thế nào; chất lượng được kiểm soát bằng cách nào và **độ đồng thuận giữa người gán nhãn** (inter-annotator agreement, ví dụ Cohen's kappa hay Krippendorff's alpha) đạt bao nhiêu; dữ liệu được chia train/dev/test theo nguyên tắc gì. Các khung như *Data Statements* (Bender và Friedman, 2018) hay *Datasheets for Datasets* (Gebru và cộng sự) cung cấp danh sách câu hỏi có sẵn, và Responsible NLP Research checklist của ARR cũng hỏi trực tiếp về nhiều mục trong số này. Bảng thống kê dataset (số mẫu, độ dài trung bình, phân bố nhãn, số ngôn ngữ) gần như là thành phần bắt buộc.

### Machine Learning

Paper ML thường trình bày phương pháp ở mức trừu tượng cao hơn: bài toán được phát biểu như một bài toán tối ưu hay ước lượng tổng quát, và các ứng dụng trong CV hay NLP chỉ là những trường hợp cụ thể. Vì vậy, problem formulation trong paper ML thường dài và hình thức hơn, với các giả định được nêu rõ. Algorithm box xuất hiện thường xuyên, và như đã phân tích, các kết quả lý thuyết được trình bày theo khuôn giả định, định lý, trực giác, phác thảo chứng minh. Reviewer ML đặc biệt nhạy với khoảng cách giữa claim và bằng chứng: nếu Method khẳng định phương pháp "general", phần Experiments phải kiểm chứng trên nhiều loại bài toán; nếu Method có định lý, reviewer sẽ hỏi các giả định của định lý có thỏa trong thí nghiệm hay không.

## Lỗi thường gặp

Phần lớn lỗi ở Method không nằm ở nội dung kỹ thuật mà ở cách tổ chức và trình bày. Danh sách dưới đây tổng hợp những lỗi xuất hiện nhiều nhất, kèm lý do vì sao chúng gây hại.

- **Viết theo thứ tự code hoặc theo thứ tự làm thí nghiệm.** Người viết thường kể lại phương pháp theo cách nó được cài đặt (load dữ liệu, backbone, head, loss) hoặc theo lịch sử phát triển (thử A, thất bại, chuyển sang B). Người đọc cần thứ tự logic: vấn đề, ý tưởng, cách hiện thực hóa.
- **Thiếu động lực.** Chỉ có "We use X" mà không có "because ...". Mỗi lựa chọn không được giải thích là một câu hỏi để ngỏ cho reviewer.
- **Không tách bạch cái có sẵn và cái mới.** Reviewer không xác định được đóng góp, dẫn tới đánh giá thấp novelty hoặc nghi ngờ về tính trung thực.
- **Chi tiết implementation lẫn vào ý tưởng.** Learning rate, batch size, số epoch làm loãng phần mô tả ý tưởng; chúng thuộc về mục implementation details của Experiments hoặc appendix.
- **Ký hiệu trôi dạt hoặc không được định nghĩa.** Cùng một đại lượng mang nhiều tên, hoặc một ký hiệu xuất hiện mà không có định nghĩa.
- **Công thức không khớp code.** Sai chiều ma trận, thiếu chuẩn hóa, dấu của một số hạng bị ngược. Mỗi phương trình nên được đối chiếu với code thật trước khi nộp; reviewer cẩn thận sẽ kiểm tra kích thước tensor.
- **Không phân biệt train và inference.** Người đọc không biết con số báo cáo được tạo ra bằng quy trình nào.
- **Toán trang trí.** Định lý hiển nhiên hoặc không liên quan tới claim, công thức phức tạp hóa một ý tưởng đơn giản.
- **Prompt, dữ liệu hay quy trình gán nhãn được mô tả mơ hồ.** Ở NLP, đây là lý do phổ biến khiến reviewer đánh giá thấp khả năng tái hiện.

## Tóm tắt

Phần Method chuyển insight của Introduction thành một phương pháp cụ thể, và được đọc theo ba lớp: lướt qua tiêu đề, overview và figure; đọc kỹ động lực và công thức; đi sâu vào chi tiết để tái hiện. Cấu trúc khuyến nghị đi từ problem formulation (tách bạch phần nền và phần mới), qua overview kèm figure, tới các thành phần chính trình bày theo khuôn Why–What–How, và kết thúc bằng mục tiêu huấn luyện cùng cách suy luận. Ký hiệu toán học phải nhất quán và được định nghĩa đầy đủ; macro LaTeX là cách hiệu quả nhất để giữ sự nhất quán. Algorithm box nên tự đứng được, liệt kê đủ hyperparameter và giá trị mặc định như Algorithm 1 của Adam. Định lý chỉ dùng khi claim là lý thuyết, với giả định tường minh, trực giác đi kèm và chứng minh đầy đủ trong appendix. Ở NLP, mô tả prompt, mô hình, tham số giải mã và quy trình gán nhãn là điều kiện cần cho khả năng tái hiện.

## Bài tập

1. **Kiểm tra lớp lướt.** Lấy phần Method trong bản nháp hiện tại của một dự án, chỉ đọc tiêu đề các mục con, đoạn overview và figure phương pháp. Viết ra ba câu mô tả phương pháp chỉ từ những gì đọc được. Nếu ba câu ấy thiếu ý chính hoặc không chỉ ra được đâu là phần mới, hãy viết lại tiêu đề và đoạn overview.
2. **Why–What–How.** Chọn thành phần quan trọng nhất của phương pháp và viết lại mục của nó theo đúng khuôn bốn bước, trong đó đoạn Discussion nêu phương án thay thế tự nhiên nhất và trỏ tới thí nghiệm so sánh với phương án đó. Nếu thí nghiệm ấy chưa tồn tại, ghi nó vào danh sách thí nghiệm cần chạy.
3. **Kiểm toán ký hiệu.** Lập bảng mọi ký hiệu trong paper, kèm vị trí định nghĩa và mọi vị trí sử dụng. Đánh dấu các ký hiệu bị dùng cho hai nghĩa, các ký hiệu không được định nghĩa và các ký hiệu chỉ dùng một lần. Chuyển các ký hiệu quan trọng thành macro.
4. **Algorithm box hoặc mô tả prompt.** Nếu phương pháp có vòng lặp hoặc nhiều giai đoạn, viết một algorithm box tự đứng được với đầy đủ hyperparameter và giá trị mặc định. Nếu phương pháp dựa trên LLM, viết mục appendix mô tả nguyên văn prompt, phiên bản mô hình, tham số giải mã và cách xử lý đầu ra sai định dạng, rồi nhờ một đồng nghiệp thử tái hiện một ví dụ chỉ từ mục đó.
