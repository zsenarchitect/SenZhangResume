"""
Quick MD -> HTML -> PDF generator using python-markdown + Edge headless.
Drops a styled HTML file then invokes msedge --headless --print-to-pdf.

Usage:
    python3 md_to_pdf.py <input.md> <output.pdf> [--title "Title"]
"""
import sys
import os
import subprocess
import tempfile
import argparse
import markdown


CSS = """
@page {
  size: Letter;
  margin: 0.75in 0.75in 0.85in 0.75in;
  @bottom-right {
    content: counter(page);
    font-family: 'Inter', 'Helvetica Neue', sans-serif;
    font-size: 9pt;
    color: #888;
  }
}

* { box-sizing: border-box; }

body {
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 10.5pt;
  line-height: 1.45;
  color: #1a1a1a;
  margin: 0;
  padding: 0;
  max-width: 7.0in;
}

h1 {
  font-size: 22pt;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0 0 0.05em 0;
  border-bottom: 2px solid #1a1a1a;
  padding-bottom: 4pt;
  page-break-after: avoid;
}

h2 {
  font-size: 13pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 18pt 0 6pt 0;
  border-bottom: 1px solid #1a1a1a;
  padding-bottom: 2pt;
  page-break-after: avoid;
}

h3 {
  font-size: 11pt;
  font-weight: 700;
  margin: 10pt 0 2pt 0;
  page-break-after: avoid;
}

h4 {
  font-size: 10.5pt;
  font-weight: 600;
  margin: 8pt 0 2pt 0;
  font-style: italic;
  color: #444;
  page-break-after: avoid;
}

p {
  margin: 4pt 0 6pt 0;
  text-align: left;
}

ul, ol {
  margin: 3pt 0 6pt 0;
  padding-left: 18pt;
}

li {
  margin: 2pt 0;
}

li > ul, li > ol {
  margin: 1pt 0 1pt 0;
}

strong { font-weight: 700; color: #000; }

em { font-style: italic; color: #333; }

code {
  font-family: 'JetBrains Mono', Consolas, 'Courier New', monospace;
  font-size: 9.5pt;
  background: #f4f4f4;
  padding: 1pt 4pt;
  border-radius: 2pt;
}

pre {
  font-family: 'JetBrains Mono', Consolas, 'Courier New', monospace;
  font-size: 8.5pt;
  background: #f8f8f8;
  border: 1px solid #e0e0e0;
  border-radius: 3pt;
  padding: 8pt;
  overflow-x: auto;
  white-space: pre-wrap;
  page-break-inside: avoid;
  line-height: 1.35;
}

pre code {
  background: none;
  padding: 0;
}

blockquote {
  border-left: 3px solid #888;
  margin: 8pt 0;
  padding: 2pt 0 2pt 12pt;
  color: #444;
  font-style: italic;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin: 6pt 0 8pt 0;
  font-size: 9.5pt;
  page-break-inside: avoid;
}

th, td {
  border: 1px solid #ccc;
  padding: 4pt 6pt;
  text-align: left;
  vertical-align: top;
}

th {
  background: #f0f0f0;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 8.5pt;
  letter-spacing: 0.03em;
}

a {
  color: #2c5b9e;
  text-decoration: none;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 12pt 0;
}

/* Frontmatter table cleanup */
.frontmatter {
  font-size: 9pt;
  color: #666;
  margin-bottom: 12pt;
  border-bottom: 1px solid #eee;
  padding-bottom: 6pt;
}

.callout {
  background: #fff8dc;
  border-left: 3px solid #d4a017;
  padding: 6pt 10pt;
  margin: 6pt 0;
  font-size: 9.5pt;
}

/* {meta:...} pattern from resume — render compact, italic, after the text */
.meta {
  font-size: 9pt;
  color: #666;
  font-style: italic;
  margin-left: 6pt;
}
"""


def convert_meta_pattern(text):
    """Convert {meta:...} inline pattern to span with .meta class."""
    import re
    return re.sub(r'\{meta:([^}]+)\}', r'<span class="meta">\1</span>', text)


def md_to_html(md_text, title="Document"):
    """Convert markdown to standalone HTML with print-friendly CSS."""
    md_text = convert_meta_pattern(md_text)
    body_html = markdown.markdown(
        md_text,
        extensions=['extra', 'tables', 'fenced_code', 'sane_lists'],
        output_format='html5',
    )
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>{title}</title>
<style>
{CSS}
</style>
</head>
<body>
{body_html}
</body>
</html>
"""


def html_to_pdf_via_edge(html_path, pdf_path):
    """Use Microsoft Edge headless to print HTML to PDF."""
    edge_paths = [
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    ]
    edge = None
    for p in edge_paths:
        if os.path.exists(p):
            edge = p
            break
    if edge is None:
        raise RuntimeError("Microsoft Edge not found at expected paths")

    file_url = "file:///" + os.path.abspath(html_path).replace(os.sep, "/")
    cmd = [
        edge,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={os.path.abspath(pdf_path)}",
        "--print-to-pdf-no-header",
        file_url,
    ]
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
    if result.returncode != 0:
        raise RuntimeError(f"Edge failed (rc={result.returncode}): {result.stderr[-500:]}")
    if not os.path.exists(pdf_path):
        raise RuntimeError(f"Edge ran but PDF not produced at {pdf_path}")


def main():
    p = argparse.ArgumentParser()
    p.add_argument("input_md")
    p.add_argument("output_pdf")
    p.add_argument("--title", default=None)
    args = p.parse_args()

    if not os.path.exists(args.input_md):
        sys.exit(f"Input not found: {args.input_md}")

    with open(args.input_md, encoding="utf-8") as f:
        md = f.read()

    title = args.title or os.path.splitext(os.path.basename(args.input_md))[0]
    html = md_to_html(md, title=title)

    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".html", delete=False, encoding="utf-8"
    ) as tf:
        tf.write(html)
        html_path = tf.name

    try:
        html_to_pdf_via_edge(html_path, args.output_pdf)
        print(f"OK: {args.output_pdf} ({os.path.getsize(args.output_pdf)} bytes)")
    finally:
        try:
            os.unlink(html_path)
        except Exception:
            pass


if __name__ == "__main__":
    main()
