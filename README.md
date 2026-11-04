# Viết Paper A* từ A đến Z

Bài giảng tiếng Việt, chi tiết từ A–Z về quy trình viết một paper hội nghị A\*, tập trung vào **Computer Vision (CVPR, ICCV, ECCV)** trước, sau đó mở rộng sang **NeurIPS / ICML / ICLR, ACL / EMNLP, AAAI / IJCAI** và journal.

📖 **Đọc online:** https://tuandung222.github.io/How-to-write-Astar-Paper/
📄 **Bản PDF:** https://tuandung222.github.io/How-to-write-Astar-Paper/pdf/viet-paper-astar.pdf (cũng có trong mục *Artifacts* của mỗi lần chạy Actions)

## Nội dung

| Phần | Chủ đề |
|---|---|
| 0. Tổng quan | Hệ sinh thái CVPR/ICCV/ECCV, quy trình review, lộ trình 6 tháng |
| 1. Trước khi viết | Ý tưởng & novelty, literature, thiết kế thí nghiệm, xây câu chuyện |
| 2. Viết từng phần | Title, Abstract, Intro & Teaser, Related Work, Method, Experiments, Figures/Tables, Conclusion & Supp |
| 3. Kỹ thuật & văn phong | LaTeX/Overleaf, tiếng Anh học thuật, quy trình viết & self-review, dùng AI đúng luật |
| 4. Nộp & sau nộp | Checklist, anonymity, rebuttal, camera-ready, xử lý reject |
| 5. Case studies | ResNet, Mask R-CNN, NeRF, MAE, LDM, SAM, ControlNet + bài thực hành từ con số 0 |
| 6. Hội nghị khác | ML, NLP (ARR), AAAI/IJCAI/KDD, journals |
| Phụ lục | Checklist, template & mẫu câu, thuật ngữ, tài nguyên |

## Chạy local

```bash
pip install -r requirements.txt
mkdocs serve          # http://127.0.0.1:8000
mkdocs build --strict # build ra thư mục site/
```

### Build PDF

```bash
./scripts/fetch_vendor.sh            # tải Mermaid + MathJax về docs/javascripts/vendor (cần npm)
mkdocs build --strict
npm install --no-save playwright && npx playwright install chromium
node scripts/build_pdf.mjs           # -> site/pdf/viet-paper-astar.pdf
```

PDF được render từ trang `print_page/` (plugin `mkdocs-print-site-plugin`) bằng Chromium: có bìa, mục lục, bookmark, số trang, sơ đồ Mermaid và công thức.

## Deploy (GitHub Pages + GitHub Actions)

Workflow `.github/workflows/deploy.yml` tự build site **và PDF** khi có push lên `main` rồi deploy lên Pages; với mỗi Pull Request nó build kiểm tra và đính kèm PDF làm artifact.

**Một lần duy nhất:** vào **Settings → Pages → Build and deployment → Source** và chọn **GitHub Actions**.

## Đóng góp

Sửa file Markdown trong `docs/`, mở Pull Request. Mọi góp ý, sửa lỗi đều được hoan nghênh.
