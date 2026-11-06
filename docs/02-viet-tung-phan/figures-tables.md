# Figures & Tables

!!! abstract "Mục tiêu của bài"
    Sau bài này, người học có thể:

    - Giải thích vai trò của hình và bảng trong cách reviewer đọc paper ở từng cộng đồng.
    - Thiết kế mỗi hình quanh một thông điệp và viết caption tự đứng được.
    - Chọn màu thân thiện với người mù màu và bảo đảm hình đọc được khi in đen trắng.
    - Dùng matplotlib và LaTeX (booktabs) để tạo biểu đồ và bảng đạt chuẩn xuất bản.
    - Áp dụng các dạng hình và bảng đặc trưng: lưới qualitative ở CV, bảng ví dụ và bảng nhiều dataset ở NLP, biểu đồ đường có error band ở ML.
    - Tuân thủ quy ước của template về caption, kích thước và vị trí float.

Khi mở một paper lần đầu, phần lớn người đọc không bắt đầu bằng việc đọc từng dòng. Họ đọc title và abstract, rồi lướt qua các hình và bảng để có ấn tượng về paper làm gì và kết quả ra sao. Reviewer cũng vậy: trước khi đọc kỹ, họ thường đã hình thành một ấn tượng ban đầu từ Figure 1, figure phương pháp và Table 1. Điều đó có nghĩa là hình và bảng không phải là phần trang trí cho văn bản, mà là một kênh truyền tải song song, và với nhiều người đọc, đó là kênh được tiếp nhận đầu tiên.

Mức độ quan trọng của kênh này khác nhau giữa các cộng đồng. Ở Computer Vision, hình ảnh gần như là ngôn ngữ chính; một paper CVPR điển hình có khoảng bốn tới tám figure và vài bảng trong tám trang. Ở NLP, bảng giữ vai trò trung tâm: bảng kết quả trên nhiều dataset, bảng ví dụ đầu vào và đầu ra, bảng thống kê dữ liệu. Ở Machine Learning, biểu đồ đường (learning curve, scaling curve, biểu đồ độ nhạy) là phương tiện chính để thể hiện hành vi của một thuật toán. Bài này trình bày các nguyên tắc chung trước, rồi tới công cụ, cách làm bảng, những dạng hình đặc trưng của từng cộng đồng và các quy ước của template.

## Vai trò của hình và bảng trong một paper

Trong một paper phương pháp ở CV, có một bộ hình gần như đã thành khuôn mẫu. Mỗi hình đảm nhận một vai trò riêng trong lập luận, và việc thiếu một hình trong bộ này thường để lại một khoảng trống mà reviewer cảm nhận được dù không gọi tên.

| Figure | Vị trí | Vai trò |
|---|---|---|
| Figure 1: Teaser | Trang 1 | Truyền tải thông điệp chính trong khoảng mười giây |
| Figure 2: Pipeline/Overview | Đầu phần Method | Bản đồ của phương pháp |
| Figure 3: Chi tiết module (tùy chọn) | Trong Method | Giải thích một thành phần khó hiểu bằng lời |
| Figure 4: So sánh qualitative | Trong Experiments | Bằng chứng trực quan |
| Figure 5: Biểu đồ phân tích | Trong Experiments | Hỗ trợ insight, ví dụ cải thiện theo điều kiện |

Ở NLP, bộ tương ứng thường gồm một hình minh họa bài toán hoặc pipeline bằng một ví dụ văn bản cụ thể, một bảng kết quả chính trên nhiều dataset, một bảng ablation, một bảng ví dụ đầu ra và một bảng hoặc biểu đồ phân tích lỗi. Ở ML, Figure 1 thường là một hình minh họa khái niệm hoặc một kết quả trên bài toán đồ chơi, tiếp theo là các biểu đồ đường so sánh hành vi theo thời gian huấn luyện hoặc theo quy mô, và các bảng kết quả trên benchmark. Dù hình thức khác nhau, logic chung là giống nhau: mỗi hình hoặc bảng phải gắn với một bước trong lập luận của paper. Vai trò riêng của Figure 1 và của figure phương pháp đã được bàn ở bài [Introduction & Figure 1](introduction.md) và bài [Method](method.md); bài này tập trung vào những nguyên tắc và công cụ dùng chung cho mọi hình và bảng.

## Nguyên tắc thiết kế chung

### Một hình, một thông điệp

Nguyên tắc quan trọng nhất cũng là nguyên tắc hay bị vi phạm nhất. Trước khi vẽ, người viết nên viết ra một câu mô tả điều hình muốn người đọc rút ra, chẳng hạn "phương pháp đề xuất giữ được các cấu trúc mảnh mà baseline làm mất" hay "khoảng cách giữa hai phương pháp tăng dần khi kích thước mô hình tăng". Câu này quyết định mọi lựa chọn sau đó: dữ liệu nào được vẽ, trục nào, so sánh với cái gì, chỗ nào cần nhấn mạnh. Một hình cố gắng nói ba điều thường không nói rõ được điều nào; nếu có ba thông điệp, có lẽ cần ba hình, hoặc một hình có ba panel được đánh nhãn rõ ràng.

### Caption tự đứng được

Nhiều reviewer đọc caption mà không đọc phần văn bản tham chiếu tới hình. Vì vậy, caption phải cho người đọc đủ thông tin để hiểu hình mà không cần tìm trong văn bản. Một cấu trúc hiệu quả là: **câu đầu nêu kết luận**, các câu sau giải thích cách đọc hình (mỗi panel, mỗi cột là gì, ký hiệu và màu nghĩa là gì, số liệu đo trên dataset nào).

<div class="bad" markdown>
**Chưa tốt:** *"Figure 4. Qualitative results."*
</div>

<div class="good" markdown>
**Tốt hơn:** *"Figure 4. **DepthX recovers distant objects missed by the baseline.** Each row shows a test image from KITTI val (randomly sampled); columns show the baseline [12], DepthX, and the ground truth in bird's-eye view. Red boxes highlight objects beyond 40 m."*
</div>

Caption thứ hai dài hơn nhưng làm được ba việc mà caption thứ nhất không làm: nói cho người đọc biết cần thấy điều gì, giải thích cấu trúc của hình, và cung cấp thông tin về cách chọn ví dụ. Cùng nguyên tắc đó áp dụng cho bảng: caption của bảng nên nêu dataset, điều kiện so sánh, ý nghĩa của chữ đậm và gạch chân, và giải thích mọi ký hiệu như $^\dagger$ hay $^*$.

### Đồ họa vector và kích thước chữ

Sơ đồ và biểu đồ nên được xuất ở định dạng **vector** (PDF hoặc SVG chuyển sang PDF), để giữ độ sắc nét ở mọi mức phóng to và để chữ trong hình có thể tìm kiếm được. Định dạng raster chỉ nên dùng cho ảnh tự nhiên, và nên nén JPEG ở mức hợp lý, vì nhiều hệ thống nộp bài giới hạn dung lượng file PDF.

Lỗi phổ biến nhất về hình là **chữ trong hình quá nhỏ**. Nguyên nhân thường là hình được vẽ ở kích thước lớn trên màn hình rồi thu nhỏ để vừa một cột, khiến chữ cỡ 12 pt thành cỡ 5 pt. Cách khắc phục triệt để là **vẽ hình ở đúng kích thước in**: nếu hình chiếm một cột rộng khoảng 3,3 inch, hãy đặt kích thước figure trong matplotlib là 3,3 inch và cỡ chữ 8–9 pt, rồi chèn vào LaTeX với `width=\linewidth` mà không phóng to hay thu nhỏ đáng kể. Khi đó, chữ trong hình có cỡ gần với chữ caption, một mức an toàn để đọc được khi in.

### Màu sắc thân thiện với người mù màu

Một tỉ lệ đáng kể người đọc, đặc biệt là nam giới, có một dạng mù màu, phổ biến nhất là khó phân biệt đỏ và xanh lá. Một biểu đồ dùng đỏ và xanh lá làm hai màu chính có thể trở nên vô nghĩa với họ. Ngoài ra, nhiều reviewer vẫn in paper ra giấy, đôi khi bằng máy in đen trắng. Cả hai lý do dẫn tới cùng một yêu cầu: **thông tin không được mã hóa chỉ bằng màu**.

Có ba biện pháp thực tế. Thứ nhất, dùng một bảng màu được thiết kế cho người mù màu. Bảng **Okabe–Ito** gồm tám màu dễ phân biệt (đen `#000000`, cam `#E69F00`, xanh da trời `#56B4E9`, xanh lục lam `#009E73`, vàng `#F0E442`, xanh dương `#0072B2`, đỏ son `#D55E00`, tím hồng `#CC79A7`) rất phù hợp cho dữ liệu phân loại; với dữ liệu liên tục như heatmap, các colormap như **viridis** vừa thân thiện với người mù màu vừa giữ thứ tự độ sáng khi in đen trắng. Thứ hai, **mã hóa dư thừa**: ngoài màu, phân biệt các đường bằng marker và kiểu nét (liền, đứt, chấm), phân biệt các cột bằng hoa văn hoặc nhãn trực tiếp. Thứ ba, **kiểm tra**: chuyển hình sang thang xám, hoặc dùng các công cụ mô phỏng mù màu như Color Oracle, để xem thông tin có còn phân biệt được không.

### Nhất quán và vị trí

Một hình riêng lẻ có thể tốt nhưng một bộ hình thiếu nhất quán vẫn gây khó cho người đọc. **Phương pháp đề xuất nên luôn mang cùng một màu** ở mọi biểu đồ trong paper, và các baseline cũng vậy; người đọc học quy ước màu ở hình đầu tiên và áp dụng cho các hình sau. Tên phương pháp, tên dataset và tên metric trong hình phải trùng với văn bản. Về vị trí, hình nên đặt **gần đoạn văn đầu tiên tham chiếu tới nó**, thường với tùy chọn float `[t]` để hình nằm ở đầu trang, và mỗi hình hay bảng phải được tham chiếu ít nhất một lần trong văn bản.

## Công cụ

Không có công cụ nào là tốt nhất cho mọi loại hình. Lựa chọn phụ thuộc vào loại hình và vào kỹ năng của nhóm tác giả; điều quan trọng là đầu ra cuối cùng ở dạng vector và nhất quán về font, màu, cỡ chữ.

| Mục đích | Công cụ thường dùng |
|---|---|
| Sơ đồ pipeline, hình khái niệm | PowerPoint, Keynote, Google Slides (xuất PDF, rất phổ biến ở CV), Figma, draw.io, Inkscape, Illustrator, TikZ |
| Biểu đồ số liệu | matplotlib, seaborn (xuất PDF), pgfplots |
| Lưới ảnh qualitative | Script Python ghép ảnh, rồi thêm chú thích bằng công cụ trình chiếu; hoặc `subcaption` và `tabular` trong LaTeX |
| Bảng | LaTeX với `booktabs`, sinh tự động từ file kết quả bằng script |

Với biểu đồ, matplotlib là lựa chọn phổ biến ở cả ba cộng đồng. Đoạn cấu hình dưới đây giải quyết hai vấn đề hay gặp: font Type 3 (một số hệ thống kiểm tra PDF cảnh báo loại font này, nên cần nhúng font TrueType bằng `fonttype` 42) và cỡ chữ không phù hợp với kích thước in.

```python
import matplotlib.pyplot as plt

plt.rcParams.update({
    "pdf.fonttype": 42, "ps.fonttype": 42,   # nhúng font TrueType, tránh Type 3
    "font.size": 9, "axes.labelsize": 9, "legend.fontsize": 8,
})

# flops_*, ap_*: dữ liệu của từng phương pháp
fig, ax = plt.subplots(figsize=(3.3, 2.4))   # xấp xỉ chiều rộng một cột hai cột
ax.plot(flops_base, ap_base, "o--", color="#0072B2", label="Baseline")
ax.plot(flops_ours, ap_ours, "*-", color="#D55E00", label="Ours", markersize=9)
ax.set_xlabel("GFLOPs"); ax.set_ylabel("AP (%)")
ax.grid(alpha=.3); ax.legend(frameon=False)
fig.tight_layout(); fig.savefig("fig_tradeoff.pdf", bbox_inches="tight")
```

Có thể thấy đoạn code áp dụng các nguyên tắc đã bàn: kích thước figure bằng kích thước in, hai màu từ bảng Okabe–Ito, và hai đường được phân biệt thêm bằng marker và kiểu nét để vẫn đọc được khi in đen trắng.

## Bảng: chuẩn booktabs

Bảng trong paper khoa học có một phong cách trình bày gần như thống nhất, dựa trên gói `booktabs` của LaTeX: chỉ có ba đường kẻ ngang chính (`\toprule`, `\midrule`, `\bottomrule`), không có đường kẻ dọc, và khoảng trắng được dùng để phân tách thay cho đường kẻ. Phong cách này không chỉ là thẩm mỹ: một bảng ít đường kẻ giúp mắt tập trung vào con số, còn lưới kẻ dày đặc tạo ra nhiễu thị giác. Ví dụ dưới đây là một bảng kết quả chính điển hình.

```latex
% Preamble: \usepackage{booktabs} \usepackage[table]{xcolor}
\begin{table}[t]
\centering
\caption{\textbf{Comparison on COCO val2017.} All methods use a ResNet-50
backbone and 1$\times$ schedule. Best in \textbf{bold}, second \underline{underlined}.
$^\dagger$: our reproduction with official code.}
\label{tab:main}
\small
\setlength{\tabcolsep}{4pt}
\begin{tabular}{l c c c c c}
\toprule
Method & Params (M) & AP$\uparrow$ & AP$_{50}\uparrow$ & AP$_S\uparrow$ & FPS$\uparrow$ \\
\midrule
Method A~\cite{a}           & 41 & 38.2 & 58.1 & 21.5 & 25 \\
Method B$^\dagger$~\cite{b} & 44 & \underline{40.1} & \underline{59.4} & \underline{23.0} & 19 \\
\midrule
\rowcolor{gray!15}
\textbf{Ours}               & 42 & \textbf{41.9} & \textbf{61.2} & \textbf{26.1} & 24 \\
\bottomrule
\end{tabular}
\end{table}
```

Bảng mẫu thể hiện một loạt quy ước đáng ghi nhớ. Caption nêu điều kiện so sánh (cùng backbone, cùng schedule), giải thích chữ đậm, gạch chân và ký hiệu $^\dagger$, nên bảng tự đứng được. Mũi tên bên cạnh tên metric cho biết chiều tốt, điều đặc biệt cần thiết khi bảng trộn các metric càng cao càng tốt với các metric càng thấp càng tốt. Hàng của phương pháp đề xuất được tách bằng `\midrule` và tô nền nhạt (`\rowcolor`, cần `xcolor` với tùy chọn `table`), giúp người đọc tìm ngay. Ngoài ra, các con số trong một cột nên có **cùng số chữ số thập phân** và được căn giữa hoặc căn phải để các chữ số thẳng hàng.

Bảng kết quả nên được sinh tự động từ file kết quả của các lần chạy thay vì gõ tay, để con số trong bảng luôn khớp với log; quy trình này được bàn ở bài [Vận hành thực nghiệm](../01-truoc-khi-viet/thuc-thi.md).

Khi bảng quá rộng, cách xử lý đúng là giảm cỡ chữ bằng `\small` hoặc `\footnotesize`, giảm `\tabcolsep`, rút gọn tên cột, hoặc chuyển sang bảng rộng toàn trang (`table*`). Cần tránh dùng `\resizebox` để ép bảng vừa khổ, vì nó có thể làm chữ trong bảng nhỏ hơn chữ caption nhiều lần, và một số reviewer coi đây là dấu hiệu của việc nhồi nhét nội dung.

## Khác biệt giữa các cộng đồng

### Computer Vision: nhiều hình qualitative

Ở CV, các hình so sánh qualitative là loại hình chiếm nhiều diện tích nhất sau Figure 1 và figure phương pháp. Một lưới so sánh tốt có cấu trúc rõ: mỗi hàng là một ví dụ, mỗi cột là một phương pháp (cột đầu thường là đầu vào, cột cuối là ground truth), và thứ tự các phương pháp giữ nguyên ở mọi hình trong paper. Các vùng khác biệt quan trọng được đánh dấu bằng khung màu, và với chi tiết nhỏ, một ô phóng to (zoom-in inset) đặt cạnh hình giúp người đọc không phải tự phóng to PDF. Mọi ảnh trong cùng một hàng phải được cắt cùng một vùng và cùng tỉ lệ, nếu không người đọc sẽ so sánh nhầm.

```latex
% Preamble: \usepackage{graphicx}
\begin{figure*}[t]
\centering
\setlength{\tabcolsep}{1pt}
\begin{tabular}{cccc}
\includegraphics[width=0.24\linewidth]{fig/qual/001_input.jpg} &
\includegraphics[width=0.24\linewidth]{fig/qual/001_baseline.jpg} &
\includegraphics[width=0.24\linewidth]{fig/qual/001_ours.jpg} &
\includegraphics[width=0.24\linewidth]{fig/qual/001_gt.jpg} \\
\small Input & \small Baseline~\cite{b} & \small Ours & \small Ground truth \\
\end{tabular}
\caption{\textbf{Our method preserves thin structures.} Examples are
randomly sampled from the validation set. Zoom in for details.}
\label{fig:qual}
\end{figure*}
```

Với các bài toán video, 3D hay sinh ảnh, một hình tĩnh chỉ thể hiện được một phần kết quả, nên video trong supplementary đóng vai trò rất lớn. Ngoài ra, các biểu đồ trade-off giữa độ chính xác và chi phí (accuracy theo FLOPs hoặc latency) là một dạng hình rất đặc trưng của CV, như ví dụ matplotlib ở trên.

### NLP: bảng ví dụ và bảng nhiều dataset

Ở NLP, hai loại bảng xuất hiện gần như trong mọi paper. Loại thứ nhất là **bảng ví dụ**, trình bày đầu vào và đầu ra của các hệ thống trên vài mẫu cụ thể. Bảng này làm thay việc của lưới qualitative ở CV: nó cho người đọc thấy sự khác biệt mà con số không truyền tải được. Văn bản dài cần cột có chiều rộng cố định (`p{...}`) để tự xuống dòng, và lỗi nên được đánh dấu bằng cả màu lẫn một dấu hiệu khác như gạch chân, để vẫn nhận ra khi in đen trắng.

```latex
% Preamble: \usepackage{booktabs,xcolor}
\definecolor{err}{HTML}{D55E00}
\newcommand{\err}[1]{\textcolor{err}{\underline{#1}}}
\begin{table}[t]
\centering
\small
\caption{Example outputs. Errors are \err{underlined in orange}.}
\label{tab:examples}
\begin{tabular}{@{}p{0.36\linewidth}p{0.26\linewidth}p{0.26\linewidth}@{}}
\toprule
Question & Baseline & Ours \\
\midrule
Who wrote the novel that the film \textit{Blade Runner} is based on? &
\err{Ridley Scott} & Philip K. Dick \\
\bottomrule
\end{tabular}
\end{table}
```

Loại thứ hai là **bảng kết quả nhiều cột dataset**, vì như đã bàn ở bài [Experiments](experiments.md), reviewer NLP kỳ vọng kết quả trên nhiều dataset hoặc nhiều ngôn ngữ. Các cột được nhóm theo dataset bằng `\multicolumn` và `\cmidrule`, và một cột trung bình ở cuối giúp người đọc nắm kết luận tổng thể. Khi số ngôn ngữ hoặc dataset quá lớn (ví dụ vài chục ngôn ngữ), thân bài chỉ giữ cột trung bình và vài nhóm tiêu biểu, còn bảng đầy đủ đặt trong appendix.

```latex
\begin{table*}[t]
\centering
\small
\caption{Results on three QA benchmarks (exact match / F1, \%), averaged
over 3 runs. Best in \textbf{bold}.}
\label{tab:multi}
\begin{tabular}{@{}l cc cc cc c@{}}
\toprule
 & \multicolumn{2}{c}{Dataset A} & \multicolumn{2}{c}{Dataset B}
 & \multicolumn{2}{c}{Dataset C} & \\
\cmidrule(lr){2-3} \cmidrule(lr){4-5} \cmidrule(lr){6-7}
Model & EM & F1 & EM & F1 & EM & F1 & Avg.\ F1 \\
\midrule
Baseline~\cite{b} & 61.2 & 70.4 & 48.7 & 59.1 & 55.0 & 63.8 & 64.4 \\
\textbf{Ours} & \textbf{64.0} & \textbf{72.9} & \textbf{50.3}
              & \textbf{60.6} & \textbf{57.1} & \textbf{65.5} & \textbf{66.3} \\
\bottomrule
\end{tabular}
\end{table*}
```

### Machine Learning: biểu đồ đường có error band

Ở ML, dạng hình đặc trưng nhất là **biểu đồ đường**: learning curve (hiệu năng theo số bước huấn luyện), biểu đồ scaling (hiệu năng theo kích thước mô hình, lượng dữ liệu hoặc tính toán, thường trên trục log với `ax.set_xscale("log")`), và biểu đồ độ nhạy theo hyperparameter. Vì cộng đồng ML đòi hỏi báo cáo độ bất định, mỗi đường nên kèm một **error band**, thường là vùng tô quanh đường trung bình thể hiện độ lệch chuẩn hoặc khoảng tin cậy qua nhiều seed. Caption phải nói rõ vùng tô biểu thị gì và qua bao nhiêu lần chạy, ví dụ *"Shaded regions denote ±1 standard deviation over 5 seeds."*

```python
import numpy as np
import matplotlib.pyplot as plt

OKABE_ITO = {"blue": "#0072B2", "vermillion": "#D55E00"}

def plot_with_band(ax, steps, runs, label, color, ls="-"):
    """runs: mảng kích thước (n_seeds, n_steps)."""
    mean, std = runs.mean(axis=0), runs.std(axis=0, ddof=1)
    ax.plot(steps, mean, ls, color=color, label=label, linewidth=1.5)
    ax.fill_between(steps, mean - std, mean + std,
                    color=color, alpha=0.2, linewidth=0)

# Dữ liệu giả lập để minh họa: 5 seeds, 50 điểm đánh giá
steps = np.arange(1, 51) * 1000
rng = np.random.default_rng(0)
base = 70 - 30 * np.exp(-steps / 8000) + rng.normal(0, 1.0, (5, 50))
ours = 73 - 30 * np.exp(-steps / 6000) + rng.normal(0, 1.0, (5, 50))

fig, ax = plt.subplots(figsize=(3.3, 2.4))
plot_with_band(ax, steps, base, "Baseline", OKABE_ITO["blue"], "--")
plot_with_band(ax, steps, ours, "Ours", OKABE_ITO["vermillion"])
ax.set_xlabel("Training steps"); ax.set_ylabel("Val. accuracy (%)")
ax.legend(frameon=False); ax.grid(alpha=0.3)
fig.tight_layout(); fig.savefig("fig_learning_curve.pdf", bbox_inches="tight")
```

Trong bảng, độ bất định thường được viết dưới dạng $71.3_{\pm 0.4}$ hoặc $71.3 \pm 0.4$. Dạng chỉ số dưới tiết kiệm chiều rộng cột và giữ con số chính nổi bật, nên được dùng nhiều trong các bảng lớn. Dù chọn dạng nào, cần nhất quán trong toàn paper và giải thích trong caption.

## Lưu ý theo template

Mỗi bộ template có những quy ước riêng, và vi phạm chúng tuy hiếm khi dẫn tới desk reject nhưng tạo ấn tượng thiếu chuyên nghiệp. Quy ước đáng chú ý nhất là **vị trí caption**. Quy ước phổ biến là caption của hình đặt *dưới* hình, còn caption của bảng đặt *trên* bảng, vì người đọc cần biết bảng chứa gì trước khi đọc các con số. Hướng dẫn định dạng của NeurIPS, ICML và ICLR ghi rõ tiêu đề bảng đặt trước bảng; truyền thống IEEE, mà nhiều paper CVPR và ICCV đi theo, cũng đặt caption bảng ở trên. Với ACL, quy ước kém đồng nhất hơn: file mẫu của bộ style ACL qua nhiều năm đặt caption bên dưới bảng, còn trong thực tế paper ACL dùng cả hai cách. Vì vậy, quy tắc an toàn là đọc hướng dẫn định dạng trong bộ template của đúng năm nộp, rồi áp dụng nhất quán cho mọi bảng trong paper.

Quy ước thứ hai là **số cột và chiều rộng**. CVPR, ICCV, ICML và ACL dùng định dạng hai cột; NeurIPS và ICLR dùng một cột; ECCV dùng định dạng LNCS của Springer, một cột với khổ trang nhỏ. Một hình được thiết kế cho một cột của CVPR sẽ trông rất khác khi chuyển sang NeurIPS, nên khi chuyển paper giữa các hội nghị, các hình thường phải vẽ lại. Thay vì nhớ con số, cách chính xác nhất là in giá trị `\the\columnwidth` và `\the\textwidth` ngay trong file LaTeX của template để biết chiều rộng thực tế, rồi dùng nó làm kích thước figure trong matplotlib. Trong định dạng hai cột, hình rộng toàn trang dùng môi trường `figure*` hoặc `table*`, và theo mặc định của LaTeX chỉ có thể nằm ở đầu trang hoặc trên một trang riêng.

!!! warning "Không ăn gian khoảng trắng quanh hình"
    Dùng `\vspace` âm quá mức quanh hình và caption, hay thu nhỏ cỡ chữ caption, để nhồi thêm nội dung là vi phạm template và có thể bị coi là lý do desk reject. Các mẹo tiết kiệm chỗ hợp lệ được trình bày ở bài [LaTeX & Overleaf](../03-ky-thuat/latex.md).

## Kiểm tra cuối

Trước khi nộp, mọi hình và bảng nên được rà soát một lượt với danh sách dưới đây. Phần lớn các mục chỉ mất vài phút nhưng tránh được những lỗi mà reviewer nhận ra ngay khi lật trang.

- [ ] Mọi figure và table đều được **tham chiếu trong văn bản** (`Fig.~\ref{}`, `Tab.~\ref{}`), và nằm gần chỗ tham chiếu đầu tiên.
- [ ] Mỗi caption **tự đứng được**: có câu kết luận, giải thích ký hiệu, chữ đậm, gạch chân, vùng tô.
- [ ] In ra giấy A4 hoặc Letter **đen trắng**, các đường và cột vẫn phân biệt được.
- [ ] Xem ở mức **zoom 100%** trên màn hình laptop, chữ trong hình đọc được.
- [ ] Tên phương pháp, dataset, metric trong hình và bảng **khớp với văn bản**; phương pháp đề xuất có cùng màu ở mọi hình.
- [ ] Mọi con số trong văn bản **khớp với bảng**.
- [ ] Vị trí caption theo đúng template của năm nộp và nhất quán.
- [ ] Không có hình chứa **thông tin lộ danh tính** (logo phòng thí nghiệm, tên người, đường dẫn thư mục, khuôn mặt người thật không có sự đồng ý).

## Tóm tắt

Hình và bảng là kênh mà người đọc, kể cả reviewer, tiếp nhận đầu tiên, nên chúng phải truyền tải được thông điệp mà không cần văn bản đi kèm. Mỗi hình nên xoay quanh một thông điệp, với caption mở bằng kết luận và giải thích đủ cách đọc. Hình cần được vẽ ở đúng kích thước in, xuất dạng vector, dùng bảng màu thân thiện với người mù màu như Okabe–Ito hay viridis và mã hóa dư thừa bằng marker hoặc kiểu nét. Bảng theo phong cách booktabs, không đường kẻ dọc, có mũi tên chỉ chiều tốt và cùng số chữ số thập phân. CV dựa nhiều vào lưới qualitative, NLP dựa vào bảng ví dụ và bảng nhiều dataset, ML dựa vào biểu đồ đường có error band. Cuối cùng, vị trí caption và kích thước hình phải theo đúng template của hội nghị và năm nộp.

## Bài tập

1. **Thông điệp và caption.** Với mỗi hình trong bản nháp hiện tại, viết ra một câu thông điệp. Nếu không viết được, hoặc cần nhiều hơn một câu, hãy cân nhắc tách hoặc vẽ lại hình. Sau đó viết lại caption sao cho câu đầu chính là câu thông điệp đó.
2. **Kiểm tra khả năng tiếp cận.** Chuyển toàn bộ PDF sang thang xám và mô phỏng một dạng mù màu đỏ–xanh lá cho các biểu đồ. Ghi lại hình nào mất thông tin và sửa bằng bảng màu Okabe–Ito kết hợp marker hoặc kiểu nét.
3. **Vẽ lại một biểu đồ ở đúng kích thước.** Đo `\the\columnwidth` của template đang dùng, vẽ lại một biểu đồ bằng matplotlib với kích thước figure bằng chiều rộng đó và cỡ chữ 8–9 pt. Nếu có kết quả từ nhiều seed, thêm error band và cập nhật caption.
4. **Bảng theo cộng đồng.** Chuyển bảng kết quả chính của dự án sang phong cách booktabs. Sau đó, tùy theo cộng đồng mục tiêu, bổ sung một bảng ví dụ đầu vào và đầu ra (NLP), một lưới qualitative với ví dụ được chọn ngẫu nhiên (CV), hoặc một learning curve có error band (ML).
