# Internal Knowledge — DO NOT PUBLISH

This folder holds confidential personal strategy documents that are **mirrored across two repos**:

- `senzhang-resume/internal/` (this folder)
- `senzhang.me/internal/`

When you edit a file here, **update the mirror in the other repo** in the same commit. Both folders are excluded from public deployments via `.gitignore`-style rules in each repo's build config.

## Index

| File | Created | Subject | Status |
|---|---|---|---|
| `2026-05-05-cannondesign-hr-negotiation-brief.{md,pdf}` | 2026-05-03 | HR meeting prep — title change & raise discussion ahead of CannonDesign acquisition mapping | Live (pre-meeting) |

## Update protocol

1. Edit the `.md` (canonical source).
2. Re-render the PDF: `python3 /tmp/build-brief-pdf.py` (or rebuild via your preferred MD→PDF tool).
3. `cp` both files to the mirror folder in the other repo.
4. Commit both repos with the same message.
5. After the actual meeting, append a "Meeting Outcome" section with what HR said verbatim.

## Cross-reference markers

Each document has a `cross_ref:` block in its frontmatter listing every location it lives. Search for `cross_ref:` to audit the mirror set.
