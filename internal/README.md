# Internal Knowledge — DO NOT PUBLISH

This folder holds confidential personal strategy documents that are **mirrored across two repos**:

- `senzhang-resume/internal/` (this folder)
- `senzhang.me/internal/`

> ⚠️ **DUAL-SOURCE RULE — MUST UPDATE BOTH SIDES**
>
> When you edit any file here, **update the mirror in the other repo in the same commit**. Both folders are excluded from public deployments via build-stage rules:
> - `senzhang-resume/.github/workflows/deploy.yml` rsync-excludes `internal/`
> - `senzhang.me/internal/` lives outside `src/` and `public/`, so Next.js never imports it
>
> 🛠 **Single-source-of-truth migration in progress** — the resume itself (`sen-zhang-resume-*.md` and `Sen Zhang Resume.pdf`) is now driven from a single canonical source: `senzhang.me/src/data/resume.ts` → `senzhang.me/scripts/build-resume.mjs` regenerates the MD into `senzhang-resume/internal/` and the PDF into `senzhang-resume/Sen Zhang Resume.pdf`. Edit `resume.ts` only; run the script to propagate.
>
> Strategy docs (HR negotiation brief, etc.) remain manually mirrored until they earn a generator of their own.

## Index

| File | Created | Subject | Status |
|---|---|---|---|
| `2026-05-05-cannondesign-hr-negotiation-brief.{md,pdf}` | 2026-05-03 | HR meeting prep — title change & raise discussion ahead of CannonDesign acquisition mapping | Live (pre-meeting) — manual dual-mirror |
| `sen-zhang-resume-2026-05.{md,pdf}` | 2026-05-03 | Gensler-targeted resume (Rocco Francica / Islay Burgess outreach) | Auto-regen from `senzhang.me/src/data/resume.ts` |

## Update protocol

1. Edit the `.md` (canonical source).
2. Re-render the PDF: `python3 /tmp/build-brief-pdf.py` (or rebuild via your preferred MD→PDF tool).
3. `cp` both files to the mirror folder in the other repo.
4. Commit both repos with the same message.
5. After the actual meeting, append a "Meeting Outcome" section with what HR said verbatim.

## Cross-reference markers

Each document has a `cross_ref:` block in its frontmatter listing every location it lives. Search for `cross_ref:` to audit the mirror set.
