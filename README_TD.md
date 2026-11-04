# Viết Paper A* từ A đến Z

Giáo trình tiếng Việt về quy trình viết một bài báo khoa học cho các hội nghị A\* thuộc ba cộng đồng lớn của trí tuệ nhân tạo:

- **Computer Vision** — CVPR, ICCV, ECCV
- **Xử lý ngôn ngữ tự nhiên (NLP)** — ACL, EMNLP, NAACL (qua ACL Rolling Review)
- **Machine Learning / Deep Learning** — NeurIPS, ICML, ICLR

cùng các cộng đồng lân cận như Speech (Interspeech, ICASSP), IR & Data Mining (SIGIR, KDD, TheWebConf) và một chuyên đề riêng về AI Security.

Giáo trình đi theo vòng đời thực tế của một bài báo: hiểu luật chơi của các hội nghị, thẩm định ý tưởng và thiết kế thí nghiệm, xây dựng "câu chuyện", viết từng phần của bài, hoàn thiện về kỹ thuật và văn phong, nộp bài, viết rebuttal, rồi camera-ready hoặc xử lý khi bị từ chối. Mỗi bài học có mục tiêu, phần giảng giải, tóm tắt và bài tập. Phần case study phân tích cách viết của các bài báo kinh điển trong cả ba cộng đồng.

- 📖 **Đọc online:** https://tuandung222.github.io/How-to-write-Astar-Paper/
- 📄 **Bản PDF:** https://tuandung222.github.io/How-to-write-Astar-Paper/pdf/viet-paper-astar.pdf

## Cấu trúc

| Phần | Nội dung |
|---|---|
| 0. Tổng quan | Bản đồ các hội nghị A\*; hệ sinh thái CV, NLP, ML/DL, Speech, IR & Data Mining; quy trình review; lộ trình thực hiện một paper |
| 1. Trước khi viết | Tìm và thẩm định ý tưởng, đọc tài liệu, thiết kế thí nghiệm, xây câu chuyện |
| 2. Viết từng phần | Title, Abstract, Introduction, Related Work, Method, Experiments, Figures/Tables, Conclusion/Limitations/Appendix |
| 3. Kỹ thuật & văn phong | LaTeX, tiếng Anh học thuật, quy trình viết và tự review, dùng AI đúng quy định |
| 4. Nộp & sau khi nộp | Chuẩn bị nộp bài, rebuttal và thảo luận, camera-ready, khi bị reject |
| 5. Case studies | Paper kinh điển (ResNet, Mask R-CNN, NeRF, MAE, LDM, SAM, ControlNet, BERT, CheckList, Transformer, Adam, DDPM) và paper của các nhóm Việt Nam (Anti-DreamBooth, SwiftBrush, PhoBERT, EDWARD-NMT, Top-K Sparse MoE, ViP-VL, Streaming ITN), cùng một bài thực hành |
| 6. Đặc thù từng cộng đồng | Viết cho ML, viết cho NLP, chuyển paper giữa các cộng đồng, AAAI/IJCAI/KDD/journal |
| 7. Chuyên đề AI Security | Xu hướng đóng góp trong AI Security; 10 case study về prompt injection, jailbreak và phòng vệ cho LLM, VLM và agent đa phương thức |
| Phụ lục | Checklist, template và mẫu câu, thuật ngữ, tài nguyên |

## Chạy trên máy cá nhân

```bash
pip install -r requirements.txt
./scripts/fetch_vendor.sh        # tải Mermaid + MathJax (cần npm)
mkdocs serve                     # http://127.0.0.1:8000
```

### Build PDF

```bash
mkdocs build --strict
npm install --no-save playwright && npx playwright install chromium
node scripts/build_pdf.mjs       # -> site/pdf/viet-paper-astar.pdf
```

PDF được render từ trang `print_page/` (plugin `mkdocs-print-site-plugin`) bằng Chromium, có bìa, mục lục, bookmark, số trang, sơ đồ và công thức.

## Triển khai

Workflow `.github/workflows/deploy.yml` build site và PDF mỗi khi có thay đổi trên `main`, rồi deploy lên GitHub Pages. Với mỗi Pull Request, workflow build kiểm tra và đính kèm PDF trong mục *Artifacts*.

## Đóng góp

Nội dung nằm trong thư mục `docs/` dưới dạng Markdown. Mọi góp ý và chỉnh sửa xin gửi qua Pull Request.
