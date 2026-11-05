# Viết Paper A* từ A đến Z

Giáo trình tiếng Việt về quy trình nghiên cứu và viết một bài báo khoa học cho các hội nghị A\* thuộc ba cộng đồng lớn của trí tuệ nhân tạo:

- **Computer Vision** — CVPR, ICCV, ECCV
- **Xử lý ngôn ngữ tự nhiên (NLP)** — ACL, EMNLP, NAACL (qua ACL Rolling Review)
- **Machine Learning / Deep Learning** — NeurIPS, ICML, ICLR

cùng các cộng đồng lân cận như Speech (Interspeech, ICASSP), IR & Data Mining (SIGIR, KDD, TheWebConf), kèm các chuyên đề về tình huống khó trong nghiên cứu, AI làm cộng sự nghiên cứu và AI Security.

Giáo trình đi theo vòng đời thực tế của một công trình. Bắt đầu là nghiên cứu trước khi viết: đọc paper như một reviewer, tìm khoảng trống và nguồn ý tưởng, thẩm định ý tưởng, lập kế hoạch nghiên cứu, thiết kế và vận hành thực nghiệm, xây dựng "câu chuyện". Tiếp đó là viết từng phần của bài, hoàn thiện kỹ thuật và văn phong, nộp bài, viết rebuttal, rồi tới camera-ready hoặc xử lý khi bị từ chối. Ba chương chuyên đề bàn về các tình huống trớ trêu trong nghiên cứu, cách dùng AI làm cộng sự nghiên cứu, và cách viết paper AI Security. Mỗi bài học có mục tiêu, phần giảng giải, tóm tắt và bài tập. Lời khuyên của các nhà nghiên cứu hàng đầu được dẫn kèm nguồn và tập hợp trong phụ lục.

- 📖 **Đọc online:** https://tuandung222.github.io/How-to-write-Astar-Paper/
- 📄 **Bản PDF:** https://tuandung222.github.io/How-to-write-Astar-Paper/pdf/viet-paper-astar.pdf

## Cấu trúc

| Chương | Nội dung |
|---|---|
| 0. Tổng quan | Bản đồ các hội nghị A\*; hệ sinh thái CV, NLP, ML/DL, Speech, IR & Data Mining; quy trình review; lộ trình thực hiện một paper |
| 1. Nghiên cứu trước khi viết | Đọc và lập bản đồ tài liệu, đọc paper như một reviewer, tìm khoảng trống và nguồn ý tưởng, thẩm định ý tưởng, lập kế hoạch nghiên cứu, thiết kế thí nghiệm, vận hành thực nghiệm, xây câu chuyện |
| 2. Viết từng phần | Title, Abstract, Introduction, Related Work, Method, Experiments, Figures/Tables, Conclusion/Limitations/Appendix |
| 3. Kỹ thuật & văn phong | LaTeX, tiếng Anh học thuật, quy trình viết và tự review, dùng AI hỗ trợ viết đúng quy định |
| 4. Nộp & sau khi nộp | Chuẩn bị nộp bài, rebuttal và thảo luận, camera-ready, khi bị reject |
| 5. Case studies | Paper kinh điển (ResNet, Mask R-CNN, NeRF, MAE, LDM, SAM, ControlNet, BERT, CheckList, Transformer, Adam, DDPM) và các paper gần đây (Anti-DreamBooth, SwiftBrush, PhoBERT, Top-K Sparse MoE, ViP-VL, Streaming ITN, EDWARD-NMT), phần lớn của các nhóm có tác giả người Việt, cùng một bài thực hành |
| 6. Đặc thù từng cộng đồng | Viết cho ML, viết cho NLP, chuyển paper giữa các cộng đồng, AAAI/IJCAI/KDD/journal |
| 7. Tình huống trớ trêu | Cẩm nang 35 tình huống khó trong nghiên cứu (ý tưởng mới mà thua baseline, đơn giản mà nghe thiếu novelty, ghép nhiều ý tưởng, độn đóng góp, con số không đẹp, bằng chứng mâu thuẫn câu chuyện, bị trùng ý tưởng, deadline, reject lặp lại, bài toán chưa có baseline, dữ liệu riêng) và ranh giới trung thực, cùng một bài thực hành |
| 8. AI làm cộng sự nghiên cứu | Nguyên tắc, chính sách và rủi ro; AI trong đọc tài liệu và tìm ý tưởng; AI trong lập trình và thực nghiệm; quy trình mẫu và thư viện prompt |
| 9. Chuyên đề AI Security | Xu hướng đóng góp trong AI Security; 10 case study về prompt injection, jailbreak và phòng vệ cho LLM, VLM và agent đa phương thức |
| Phụ lục | Checklist, lời khuyên từ các nhà nghiên cứu hàng đầu, template và mẫu câu, thuật ngữ, tài nguyên |

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
