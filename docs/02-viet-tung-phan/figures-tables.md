# Figures & Tables

Trong CV, **hình ảnh là ngôn ngữ chính**. Một paper CVPR điển hình có 4–8 figures và 3–6 tables trong 8 trang. Nhiều reviewer "đọc" paper qua hình trước.

## Các figure "phải có" trong paper phương pháp CV

| Figure | Vị trí | Vai trò |
|---|---|---|
| Fig. 1 — Teaser | Trang 1 | Thông điệp chính trong 10 giây |
| Fig. 2 — Pipeline/Overview | Đầu Sec. 3 | Bản đồ phương pháp |
| Fig. 3 — Chi tiết module (tùy) | Sec. 3 | Giải thích thành phần khó |
| Fig. 4 — Qualitative comparison | Sec. 4 | Bằng chứng trực quan |
| Fig. 5 — Analysis plot | Sec. 4 | Hỗ trợ insight |

## Nguyên tắc thiết kế

1. **Một hình = một thông điệp.** Viết thông điệp ra trước khi vẽ.
2. **Caption tự đứng được.** Câu đầu là kết luận ("*Our method preserves thin structures.*"), các câu sau giải thích cách đọc hình. Reviewer thường đọc caption mà không đọc chữ.
3. **Vector graphics** (PDF/SVG) cho sơ đồ và biểu đồ; ảnh raster chỉ cho ảnh tự nhiên (nén JPEG hợp lý để file không quá nặng — nhiều hệ thống giới hạn dung lượng PDF).
4. **Font trong hình ≥ font caption** (≈ 7–9 pt khi in). Lỗi phổ biến nhất: chữ trong hình quá nhỏ.
5. **Màu thân thiện với người mù màu** và in đen trắng được: dùng palette như *Okabe–Ito*, *viridis*, phân biệt thêm bằng marker/kiểu nét.
6. **Nhất quán màu xuyên suốt paper:** "Ours" luôn cùng một màu ở mọi hình.
7. Đặt hình **gần** đoạn văn đầu tiên tham chiếu nó; dùng `[t]` (top) cho float.

## Công cụ

| Mục đích | Công cụ |
|---|---|
| Sơ đồ pipeline | **PowerPoint / Keynote / Google Slides** (phổ biến nhất ở CV, xuất PDF), Figma, draw.io, Inkscape, Illustrator, TikZ |
| Biểu đồ | matplotlib / seaborn (xuất PDF, `rcParams['pdf.fonttype']=42`), pgfplots |
| Lưới ảnh qualitative | Script Python ghép ảnh + PowerPoint để annotate, hoặc `subcaption` trong LaTeX |

```python
import matplotlib.pyplot as plt
plt.rcParams.update({
    "pdf.fonttype": 42, "ps.fonttype": 42,   # nhúng font TrueType
    "font.size": 9, "axes.labelsize": 9, "legend.fontsize": 8,
})
fig, ax = plt.subplots(figsize=(3.3, 2.4))  # ~ 1 cột CVPR (3.25in)
ax.plot(flops_base, ap_base, "o-", label="Baseline")
ax.plot(flops_ours, ap_ours, "*-", color="#D55E00", label="Ours", markersize=9)
ax.set_xlabel("GFLOPs"); ax.set_ylabel("AP (%)"); ax.grid(alpha=.3); ax.legend()
fig.tight_layout(); fig.savefig("fig_tradeoff.pdf", bbox_inches="tight")
```

## Tables — chuẩn "booktabs"

```latex
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
Method A~\cite{a}          & 41 & 38.2 & 58.1 & 21.5 & 25 \\
Method B$^\dagger$~\cite{b}& 44 & \underline{40.1} & \underline{59.4} & \underline{23.0} & 19 \\
\midrule
\rowcolor{gray!15}
\textbf{Ours}              & 42 & \textbf{41.9} & \textbf{61.2} & \textbf{26.1} & 24 \\
\bottomrule
\end{tabular}
\end{table}
```

Quy tắc bảng:

- **Không có đường kẻ dọc**, chỉ `\toprule`, `\midrule`, `\bottomrule` (gói `booktabs`).
- **Caption ở trên bảng** (theo template CVPR/IEEE; figure caption ở dưới hình).
- Số **căn phải hoặc căn giữa**, cùng số chữ số thập phân.
- Mũi tên ↑↓ cho chiều tốt của metric.
- Dùng `\small`/`\footnotesize` và `\tabcolsep` để vừa khổ — **không** dùng `\resizebox` làm chữ bé hơn caption quá nhiều.
- Hàng "Ours" có thể tô nền nhạt (`\rowcolor`, gói `colortbl`/`xcolor[table]`).

## Kiểm tra cuối

- [ ] Mọi figure/table đều được **tham chiếu trong chữ** (`Fig.~\ref{}`, `Tab.~\ref{}`).
- [ ] In ra giấy A4/Letter đen trắng — vẫn đọc được?
- [ ] Zoom 100% trên màn hình laptop — chữ trong hình đọc được?
- [ ] Không có ảnh chứa thông tin lộ danh tính (logo lab, tên người, khuôn mặt người thật không có sự đồng ý).
