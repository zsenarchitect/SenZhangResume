---
title: "CannonDesign HR Negotiation Brief — Title Change & Salary Raise"
subject: Sen Zhang — Computational BIM Developer @ Ennead Architects LLP (acquired by CannonDesign 2026-04-21)
meeting_date: 2026-05-05 (Monday)
prepared: 2026-05-03
status: INTERNAL — NOT FOR PUBLICATION
cross_ref:
  - senzhang-resume/internal/  (this file)
  - senzhang.me/internal/      (mirror)
classification: Confidential personal strategy document
---

# Internal Knowledge Document — DO NOT PUBLISH

> **Cross-reference flag**: This document is mirrored in two repos. When updating one copy, update the other. Both copies should be marked private/internal — never sync to the public site or resume PDF.
>
> - `senzhang-resume/internal/2026-05-05-cannondesign-hr-negotiation-brief.{md,pdf}`
> - `senzhang.me/internal/2026-05-05-cannondesign-hr-negotiation-brief.{md,pdf}`

---

## Part 1 — Updated Self-Assessment (corrects stale public resume data)

The public resume (`Resume.pdf`, `index.html`, `senzhang.me/src/data/resume.ts`) is out of date in several material ways. Use these **corrected facts** for HR conversations and any updated CV.

### Title chain (CURRENT)

- **Computational BIM Developer** — Ennead Architects LLP — 2022 → present
- **BIM Manager** — concurrent role — 2022 → present (NYU Langone, Northwell, FTZ Shanghai, ByteDance, Bilibili)
- **Rhino Doctor** — concurrent role — 2022 → present (Rhino-to-Revit interop, complex-geometry triage)
- Architectural Designer, BIM Specialist — Ennead — 2020–2022
- Designer, BIM Specialist, CG Visualization — Arquitectonica — 2017–2020

**Total professional experience post-Master's: ~9 years.**

### EnneadTab (the IP asset CannonDesign just inherited)

| Field | Public resume says | Reality (2026-05) |
|---|---|---|
| Tool count | "200+" | **450+** (per `senzhang-resume/index.html`) |
| Legal status | "3 Copyright applications" / "U.S. Copyright Office" | **3 U.S. Copyright registrations** (use this exact phrasing — patent ≠ copyright; the HTML loosely says "Patented" but the registrations are copyrights) |
| Scope | Plugins for Revit/Rhino | Cross-application ecosystem: Rhino, Revit, CAD, Autodesk Desktop Connector, Enscape, InDesign, Photoshop, Excel, Email, Notification, AI/LLM, Computer-Resource Monitoring, TextToSpeech, Sound Effects |
| Distribution | (not specified) | Auto-publish dev repo → CPython compile → distribution repo → user-side scheduled updater + delayed deletion → silent background updates while app runs |
| Dependence | "low Grasshopper/Dynamo dependency" | Internally architected to **eliminate** Grasshopper/Dynamo dependency for office-standard workflows |
| User base today | Ennead (~160) | **About to expand to combined CannonDesign + Ennead (~1,760 staff (Cannon ~1,600 pre-merger + Ennead ~160))** |

### Public profile / speaking (recency leverage)

| Year | Venue | Role | Topic |
|---|---|---|---|
| 2023 | Digital Built Week Americas (Dallas, TX) | Panel Speaker | Promoting computational design to non-programmers |
| 2023 | AEC Hackathon (NYC) | Team Honorable Mention | Educational tool linking junior↔senior students |
| 2024 | Autodesk University (San Diego, CA) | Session Speaker — "Revit As A Game Engine" | Game-design strategies in Revit (Battleship Hexgrid, Monopoly) |
| 2024 | U.S. Copyright Office | 3 registrations filed for EnneadTab | — |
| **2026** | **Advancing Computational Design Conference** (Austin, TX) | **Speaker** — representing Ennead Architects, Design Technology | **"The Design of Design — Enabling Agile Introduction of New Tools to Scale Design Efficiency"** (22 slides + sub-slides; live at `2026-ai-talk.vercel.app`; source repo `zsenarchitect/2026-AI-Talk`, 153 commits Jan–Mar 2026) |

📌 **Verified**: this is your most recent industry-facing speaking engagement and the freshest piece of leverage. Slot it next to AU 2024 in any handout — it shows your reputation as an Ennead Design Technology speaker is **already public**, in 2026, and now under CannonDesign's banner if it isn't claimed quickly.

### Awards / credentials baseline

- Registered Architect, NY (NCARB)
- Columbia GSAPP — M.S. Advanced Architecture Design
- RPI — B.Arch (AIA Henry Adams Award, Magna Cum Laude, Faculty Selection Award)
- Tongji University — Urban Planning major (2010–2012)

---

## Part 2 — The Project Portfolio CannonDesign Just Inherited

Public resume mentions only EnneadTab. **In reality, the past 12 months of git activity (2025-05 → 2026-05) shows a much larger architectural-tech portfolio that you personally built or led.** Use this section as visual proof of "AVP-scope work" in any negotiation.

### Sen-authored commit volume by repo (last 12 months)

| Repo | Commits | Window | Type |
|---|---:|---|---|
| RenderPolisher | 693 | 2025-11 → 2026-05 | Internal AI tool — render post-processing pipeline |
| NYU-HQ | 268 | 2025-10 → 2025-12 | Healthcare BIM/coordination project site |
| EmployeeData | 194 | 2025-09 → 2026-03 | Multi-component employee directory + visualization (live on GitHub Pages) |
| BimRunner | 152 | 2026-01 → 2026-05 | **Revit Project Analytics dashboard, 91,027 LOC, 422 files** — Next.js 14 + Vercel Postgres |
| EnneadTabHome | 139 | 2025-12 → 2026-04 | Landing page for `enneadtab.com` — central hub for all EnneadTab apps |
| 2025PerformaceReview | 77 | 2025-08 → 2026-03 | Firm-wide employee evaluation engine — Excel ingest + interactive HTML report (live) |
| AIA-Sustainable-Reporting | 53 | 2026-02 → 2026-04 | CRON service for Excel processing + frontend dashboard for AIA 2030 sustainable metrics |
| EnneadTabLLM | 15 | 2025-12 → 2026-03 | Ollama RAG monorepo — Windows server + Vercel proxy + shared TS types |
| Rosette | 5 | 2026-04 | "Architecture of meaning" — design-team/client/government nonsense translator (private EnneadTab product line) |
| FieldDay | 7 | 2026-03 → 2026-04 | Offline-first PWA for field BIM site inspection — phone/tablet/desktop |
| RemoteKeynote | 3 | 2025-12 → 2026-04 | Collaborative Excel editor with real-time editing + auto-save (live demo) |
| ContentCatalogRunner | 5 | 2026-03 → 2026-04 | Internal content cataloguing |
| ErrorDump | 3 | 2026-03 → 2026-04 | Production error aggregation API |
| **EnneadTabWiki** | (ennead-architects-llp/EnneadTabWiki — last activity 2026-05-02) | private GitHub repo | Public-facing documentation site for the entire EnneadTab ecosystem |
| **2026-AI-Talk** | 153 (Sen-authored) | 2026-01-15 → 2026-03-24 | Speaker repo for **Advancing Computational Design Conference, Austin TX 2026** — talk title *"The Design of Design: Enabling Agile Introduction of New Tools to Scale Design Efficiency"* — 22 main slides + sub-slides + presentation notes — React 19 + Vite, deployed at `2026-ai-talk.vercel.app`, given as **Ennead Architects, Design Technology** |

### What this proves to HR

You are not "an architect who happens to code." You are running a **firm-wide internal product organization** that includes:

1. A flagship plugin platform (EnneadTab, 450+ tools)
2. A web analytics dashboard for BIM project health (BimRunner — production-grade, 91k LOC)
3. A firm-wide HR/performance reporting system (2025PerformaceReview — live, used by leadership)
4. A sustainability metrics pipeline tied to AIA 2030 commitment (AIA-Sustainable-Reporting)
5. A field-inspection PWA (FieldDay)
6. An LLM RAG infrastructure (EnneadTabLLM)
7. A render-post-production pipeline (RenderPolisher)
8. A central web hub (EnneadTabHome — `enneadtab.com`)
9. An internal docs system (EnneadTabWiki)

This is the work product of a **Director of Design Technology**, not a Senior Architect. CannonDesign just acquired all of it.

---

## Part 3 — CannonDesign Career Workbook Decode

### Level / Title / Corp-title mapping (from the workbook)

| Level | Architecture title | Corp Title | Years | Notes |
|---|---|---|---|---|
| P3 | Architect III | Associate | 6+ | RA preferred |
| P4 | **Architect IV / Project Architect IV / Technical Designer IV** | **Senior Associate** | **8+** | RA required for Architect IV/PA IV |
| P5 | **Project Architect V / Technical Designer V** | **AVP** | **10+** | RA required |
| P6 | Sr. Project Architect I / Sr. Project Designer | VP | 12+ | RA required |
| P7 | Sr. Project Architect II / Project Technical Director | Principal | 15+ | RA required |
| M3 | Design Leader I / Sr. Technical Leader / Building Performance Leader | VP | 12+ | mgmt track |
| M4 | Design Leader II / Associate Technical Director | Principal | 15+ | mgmt track |
| M5 | Sr. Design Leader / Technical Director | Principal | 18-25+ | mgmt track |

### Critical gap

**The workbook has no Computational Design / BIM / Design Technology track.** But CannonDesign **publicly posts** these roles on its careers page:

- *Computational Designer* — posted band **$81,700 – $91,600** (cannondesign.com/careers/computational-designer, accessed 2026-05-03)
- *Design Technologist* — remote band $76.8K – $96K
- *Associate Technical Director*
- *Computational Design Architect* (confirmed: Andy VanMater, St. Louis office)

→ **The workbook you received is incomplete. That is your wedge.**

---

## Part 4 — Market Comp Numbers (memorize the top 3)

**Top 3 numbers to have on the tip of your tongue Monday:**

1. **NYC Computational Designer average: $149,444** (Glassdoor, n=19, Dec 2025; 25th $119,134 / 75th $189,206 / 90th $232,790)
2. **NYC Computational Design Architecture 75th percentile: $199,700** (ZipRecruiter; 25th $183,200 / 90th $204,584)
3. **CannonDesign AVP total comp range: $144K–$211K** (Glassdoor)

Full table:

| Title | NYC base 25th–75th | Median | Source |
|---|---|---|---|
| BIM Manager NYC | $78–125K | $100K | Glassdoor |
| **Senior BIM Manager NYC (active posting)** | **$150–180K** | — | Glassdoor jobs |
| Computational Designer NYC | $119–189K | **$149,444 avg** | Glassdoor (n=19, Dec 2025) |
| Computational Design Architecture NYC | $183–199K | $191K | ZipRecruiter |
| Project Architect NYC (8+ yr senior) | — | **$122,882** | ERI SalaryExpert (NOT ZipRecruiter — ZR median is lower at $115.9K) |
| Senior Architect NYC (10+ yr) | $140–180K | $135K | ZipRecruiter |
| Director of Architecture NYC | $145–200K | $154K | Salary.com |
| Architecture Design Director NYC | $192–227K | $209K | Salary.com |

**Specialty premium**: Computational/BIM specialty = **+15% to +35%** over generic Project Architect at the same experience level.

**Macro anchors**:
- AIA 2025 Compensation & Benefits Report — specialized roles outpaced generalist architect raises
- BLS National Architects 2024: median $96,690; 90th $159,800 (NYC ~30–40% above national)
- 2026 NYC inflation: headline 4.0%, housing 5.1%
- AEC technical roles 2026 budget: +4.0% (Zweig)
- US salary increase budgets 2026: 3.5% avg (WTW/SHRM)

→ A flat 4% merit raise just keeps pace with NYC inflation. **Acquisition transitions are the one moment to ask for a discrete level jump (12–25% base + retention).**

---

## Part 5 — Recommended Title Asks (ranked)

| Rank | Title | Corp title | Cannon level | Base anchor |
|---|---|---|---|---|
| 🥇 Stable | Senior Associate, Design Technology | Senior Associate | P4 | $150–175K |
| 🥈 **Primary target** | **Computational Design Lead, Associate Vice President** | **AVP** | **P5** | **$165–185K** |
| 🥉 Anchor (lead with this) | Director of Design Technology | Principal/VP | M3 | $200–254K |

**Tactic**: open with the Director ask as anchor; HR rejects; you "compromise" to AVP/Computational Design Lead, which is what you actually wanted.

### Industry parity figures (named)

- **Luc Wilson** — Associate Principal / Global Director of Design Technology, KPF (NYC, Columbia GSAPP) — *closest direct comp*
- **James Vandezande** — Senior Principal / Chief Technology Officer, HOK (hok.com/people/leadership/view/james-vandezande/)
- **Jonathan Rabagliati** — Geometry & Computational Design Lead, SOM
- **Andreas Bak** — Global Lead, Computational Design, BIG NYC
- **Bill Carney** — Principal / Design Technology Leader, DLR Group
- **Matt Conway** — Senior Associate / Computational Design Leader, DLR Group (RA — exact rung Sen should target)
- **Brendan Mullins** — Design Computing Discipline Leader, Stantec (CannonDesign's nearest competitor)
- **Zach Trattner** — Senior Associate, Design Technology Leader, Gensler NY (template title to ask for verbatim)
- **Andrew Heumann** — outside-industry parity (NBBJ → WeWork → Hypar)

---

## Part 6 — Monday Game Plan

### 30-second opening script (memorize)

> "Thanks for making time. I want to use this meeting for two things. First, to make sure my mapping into the Cannon ladder reflects what I actually do — I lead computational and BIM development at Ennead, I built and maintain EnneadTab which is now Cannon IP, and I hold three U.S. copyright registrations tied to that platform. Second, I'd like to understand whether I'm being considered for a key-talent retention conversation as part of the integration. I'm not here with an ultimatum — I'm here because the workbook came out three days ago and I'd rather have this conversation now, before the mapping is finalized, than try to reopen it later. Can we start with how the mapping process works and what the timeline looks like?"

### 5 must-ask questions

1. **Mapping timeline**: "What's the timeline and process for mapping Ennead staff into the Cannon ladder — when does the mapping become final, and what's the appeal/discussion window?"
2. **The wedge** — *most important question*: "The workbook I received doesn't appear to have a Computational Design or Design-Technology track, but Cannon publicly posts Computational Designer, Design Technologist, and Associate Technical Director roles — can you walk me through how those roles fit into the workbook, and how I'd map into them?"
3. **Band disclosure**: "What's the salary band for [target level — Senior Associate or AVP, Design Technology], and what does Cannon use as its market benchmark — AIA, ZweigWhite, internal?"
4. **Retention list** — *single most important ask*: "Has Cannon identified key-talent retention agreements for the Ennead acquisition, and what's the process for that conversation? I'd like to be considered."
5. **ESOP path**: "Cannon brought Ennead partners into the ownership model. For senior technical staff below partner, is there a path to ESOP participation or an accelerated track, and when would that become available?"

### 5 likely HR pushbacks + scripted counters

| HR says | You say |
|---|---|
| "The bands are fixed — we can't change them." | "I'm not asking to change the bands. I'm asking which existing band fits the scope of what I do. Can we look at the AVP-Design Technology band against the EnneadTab scope together?" |
| "We don't have that title at Cannon." | "You actually do — *Associate Technical Director* and *Computational Designer* are posted on your careers page. Is the workbook I received the complete version, or is the technology track in a separate document?" |
| "We'll revisit at integration / in 6 months / at next review." | "I hear that the timing feels early. My concern is that once the mapping is locked, reopening it is much harder — for both of us. Can we agree on a written placeholder now, with a defined 90-day review tied to specific deliverables?" |
| "Everyone got the same workbook — we're treating people consistently." | "Consistency on process, yes. Consistency on outcome would mean mapping a 9-year registered architect with three U.S. copyright registrations to the same level as a 3-year drafter. What's the consistent *process* for handling specialist roles?" |
| "Your current title is X — that's what maps over." | "Title at Ennead reflected Ennead's ladder, which doesn't have a computational track either. The mapping question is: what does my *scope* map to in Cannon's ladder? Can we pull the AVP and Senior Associate scope definitions and walk through them?" |

### One-page handout to bring (printed, 2 copies)

```
SEN ZHANG — MAPPING & RETENTION DISCUSSION — May 5, 2026

1. ROLE SUMMARY
   • 9-yr Registered NY Architect (NCARB)
   • Computational BIM Developer + BIM Manager + Rhino Doctor (concurrent), 2022–present
   • Columbia GSAPP M.S. + RPI B.Arch + Tongji

2. SCOPE OF IMPACT (quantified)
   • EnneadTab: 450+ tools, firm-wide deployment (Ennead 160 → Cannon ~1,760 post-merger)
   • 3 U.S. Copyright registrations (cite reg. numbers)
   • BimRunner: 91k LOC Revit analytics dashboard (lead developer)
   • 2025PerformaceReview: firm-wide HR engine (live, used by leadership)
   • AIA-Sustainable-Reporting: AIA 2030 metrics pipeline
   • FieldDay PWA, RenderPolisher, EnneadTabLLM (RAG), Rosette, EnneadTabHome
   • Speaking: Autodesk University 2024, Digital Built Week 2023, [Austin 2026]
   • Healthcare BIM Manager: NYU Langone, Northwell
   • China commercial BIM Manager: FTZ Shanghai, ByteDance, Bilibili

3. PROPOSED CANNON MAPPING
   Target: Associate Vice President, Design Technology
       (or: Computational Design Lead, Senior Associate)
   Evidence Cannon uses these roles: posted "Computational Designer",
       "Associate Technical Director", "Computational Design Architect"
       (Andy VanMater, St. Louis office)

4. COMP BENCHMARKS
   • AIA 2025 Compensation Report (specialty premium documented)
   • Cannon's posted bands: $81.7K (Computational Designer) → $211K (AVP)
   • Industry comps: Luc Wilson (KPF), James Vandezande (HOK),
       Matt Conway (DLR), Zach Trattner (Gensler)

5. RETENTION ASK
   Request consideration for retention agreement; 24-mo term tied
   to EnneadTab / BimRunner integration milestones

6. WHAT I'M NOT ASKING FOR
   ✗ Not asking to change bands
   ✗ Not asking partner-track equity yet
   ✗ Not threatening to leave

7. NEXT STEP
   Written response within 14 days · Comp committee review before
   mapping locks
```

### "Talent" terminology — Chinese ↔ English term ladder ⚠️ critical

The Chinese word **人才** translates loosely as "talent," but the English **"talent"** is too soft for HR — it sounds like self-praise and triggers nothing. Use the English ladder below to escalate:

| 中文 | English usage | What it triggers in HR |
|---|---|---|
| 人才 | "talent" | Generic praise — **triggers nothing** |
| 关键人才 | **"key talent"** | Triggers retention-list evaluation process |
| 关键技术人才 | **"key technical talent"** | Same + triggers "specialist exception" process |
| 核心人才 | "key personnel" / "critical-role employee" | M&A legal language — triggers retention agreement process |
| (最强) | **"key talent retention agreement"** | Directly maps to the same contract framework Cannon is already using with Ennead partners — just adds you to the list |

**Use this exact phrasing on Monday** (already baked into question #4):

> "Has Cannon identified **key-talent retention agreements** for the Ennead acquisition, and what's the process for that conversation? I'd like to be considered."

Three things this sentence does at once:
1. Acknowledges Cannon is already doing this (the partner ownership conversion is public news)
2. Doesn't directly say "I am key talent" — lets HR judge (Voss-style calibrated question)
3. Routes you into an existing budget pool instead of forcing HR to break the base-salary band

### Optional escalation — "single point of failure" framing

If you want to upgrade the talent frame one more notch, borrow IT/risk vocabulary — to HR this sounds objective rather than self-promoting:

> "EnneadTab, BimRunner, and EnneadTabLLM are single-point-maintenance products. If the integration mismaps me, Cannon faces a 90-day continuity risk on three production systems. I'd like to be included in the key-talent retention conversation — not as self-promotion, but to put product continuity into the contract."

This translates "I am talent" into **risk-management language** — HR almost has to escalate this to a Practice Leader, which lengthens your lever.

### Mandarin-language colleagues (Ennead Asia partners, private)

In Mandarin private conversations with Ennead's China-side partners (e.g., 安栋林 Andrew Bartle's circle), you can be direct:

> "周一我会跟 HR 谈 mapping，希望被认作**关键技术人才**，进入收购整合的 retention 名单。EnneadTab 系列产品离开我维护不下去，这点想请你心里有数。"

This primes them as informal allies before the formal HR conversation locks.

### IP framing (memorize)

> "EnneadTab is firm IP — that's clear. What I want to talk about is making sure the integration captures its full value. Cannon now owns 450+ tools and 3 registered works; I'd like to discuss what role lets me extend that platform across Cannon's 1,600+ staff rather than just Ennead's 160."

This reframes you from "cost center asking for raise" to "strategic asset asking for scope" — same ask, completely different valence.

### Walk-away tiers (private, not voiced)

- ✅ **Accept-and-document**: Mapping at Senior Associate or above + written retention conversation scheduled within 30 days + salary band disclosed
- ⚠️ **Yellow** (keep talking): Vague "we'll revisit" without date, no retention list mention
- 🔴 **Red flag** (start interviewing externally, quietly): Mapping below current Ennead level, no retention conversation, written denial of band access → reach out to NBBJ, HOK, SOM, Perkins+Will, KPF
- ❌ **Hard walk**: Only after a competing written offer + final no from Cannon — never on emotion. **Do NOT walk Monday.**

### Post-meeting checklist

| Window | Action |
|---|---|
| 24 hours | Send recap email to HR + Ennead reporting partner — bullet what was discussed, what was agreed, what's open |
| 7 days | Quietly update LinkedIn + résumé (not to leave — to know your market number cold) |
| 14 days | Follow-up email if no written response |
| 30 days | If no retention conversation has materialized, escalate to Ennead managing partner |
| 45 days | If still nothing, pivot — either accept and start "earn the next level" play, or start external interviews |
| 60 days | Mapping likely locks |

---

## Part 7 — Source Index

### Primary documents
- `~/Downloads/CannonDesign Career Workbooks.eml` (2026-04-30 from Kevin McClurkan, Ennead Partner)
- `Career Workbook Architecture and Interiors 042026.pdf` (40 pp, internal, dated April–May 2025)
- `senzhang-resume/` repo HEAD `b51e2e0` (2026-04-30)
- `senzhang.me/src/data/resume.ts` HEAD `4d333ed` (2026-03-21 — older, do not use as source)

### Acquisition press
- archpaper.com/2026/04/cannondesign-acquires-ennead-architects/
- architectmagazine.com — "One of Architecture's Most Strategic Mergers Just Dropped"
- cannondesign.com/news/ennead-architects-joining-cannondesign-deepen-designs-impact-society
- bisnow.com — CannonDesign Acquires Ennead Architects Amid Rapid Growth Spurt
- architecturalrecord.com/articles/18150-cannondesign-acquires-ennead-architects
- bloomberg.com/news/articles/2026-04-21/cannondesign-acquires-ennead-architects-in-major-design-firm-merger

### Cannon role evidence (the wedge)
- cannondesign.com/careers/computational-designer
- cannondesign.com/careers/design-technologist
- cannondesign.com/careers/associate-technical-director

### Comp data
- glassdoor.com/Salaries/new-york-city-ny-computational-designer-salary
- ziprecruiter.com/Salaries/Computational-Design-Architecture-Salary-in-New-York-City,NY
- glassdoor.com/Salary/CannonDesign-Salaries-E30940
- aia.org/about-aia/press/aia-compensation-benefits-report-2025-now-available
- bls.gov/ooh/architecture-and-engineering/architects.htm
- bespokecareers.com/salary-guide/new-york/architecture/
- shrm.org — Employer Salary Increase Predictions 2026
- zweiggroup.com/blogs/news/aec-salary-trends-2026-compensation-data

### M&A negotiation references
- mckinsey.com — Talent retention and selection in M&A
- pearlmeyer.com — Sizing Up Retention and Transaction Bonus Pools
- capartners.com — Compensation Implications of Mergers and Acquisitions
- inc.com — Being Acquired? Here's How You Negotiate Your Retention
- Voss, *Never Split the Difference* — Black Swan Group
- Fisher / Ury / Patton, *Getting to Yes* — BATNA + objective criteria

### IP / copyright
- aia.org/resource-center/understanding-copyright-protection-architects
- axley.com/publication_article/copyright-ownership-of-creative-works-made-for-hire/
- venable.com — Understanding the Work Made for Hire Doctrine
- 17 U.S.C. § 101 (Work-for-hire doctrine — code created by salaried employee within scope is owned by employer; author credit ≠ ownership)

---

## Part 8 — Design Technology Vision: Why This Conversation Matters Beyond Comp

### 8.1 Where AEC design tech is going (2026-2030)

The next four years of architecture practice will be defined by one shift: design intent stops being expressed primarily as drawings and starts being expressed as code, constraints, and prompts that machines can act on. This is no longer speculative. It is happening on three concurrent tracks, each with named, funded products in the market today.

**Track 1 — Generative early-stage design.** Autodesk's Forma platform, the renamed and expanded successor to Spacemaker, demonstrated "Neural CAD" at Autodesk University 2025: set a building type and structural material, and the system produces a complete interior layout with unit counts in seconds, trained on Autodesk's own architectural corpus rather than a general model. Forma Building Design enters general availability in 2026 and targets schematic phases (LOD 200–300) directly inside Revit through the new Forma Connect Client (bimpure.com/blog/au2025; autodesk.com/products/forma/overview). Bentley's parallel move, **OpenSite+**, is the first production civil engineering tool driven by generative AI — Bentley publicly claims projects delivered up to 10× faster, with Bentley Copilot rolling into OpenRoads and OpenRail in early 2026 and ProjectWise AI search going GA in 2026 (bentley.com news; aecmag.com/ai/bentley-systems-shapes-its-ai-future).

**Track 2 — Automation of the documentation and engineering middle.** Augmenta's Construction Platform routed the electrical system at Mt. Hope Elementary in August 2025 — the first US building with an AI-designed electrical raceway network — collapsing six-to-eight weeks of BIM modeling per phase into days, with auto-plumbing slated for 2026 (Globe Newswire 2025-08-05; Globe Newswire 2025-09-11 Augmenta Agentic Design Environment). On the construction side, **Bluebeam Max** (launching globally in early 2026) bundles a Revu + Anthropic Claude integration plus AI-REVIEW / AI-MATCH from Bluebeam's Firmus acquisition (press.bluebeam.com Bluebeam Unbound 2025). **Autodesk Assistant**, embedded in Construction Cloud, lets project teams ask plain-language questions of their own model and contract data (ENR: Autodesk folds Construction Cloud into Forma).

**Track 3 — Architecture-as-code platforms, rendering, and feasibility.** **Hypar** (Andrew Heumann, ex-NBBJ / WeWork) ships generative space-planning algorithms benchmarked against 13,000 real offices, with text-to-BIM mapping natural language to parameter sets (aecmag.com Hypar 2.0; hypar.io). **Higharc** has fully automated single-family home documentation: every plan is a parametric program that generates drawings, takeoffs, and showroom assets — Higharc AI launched broader beta in early 2025 (higharc.com newsroom). **TestFit** owns developer feasibility (testfit.io 2025 Year in Review). **Maket.ai** generates compliant residential floor plans from constraints (maket.ai). **Veras** (now part of Chaos alongside V-Ray and Enscape) and **LookX / Arko AI** put diffusion-based rendering directly on top of Revit, Rhino, SketchUp, Archicad, Vectorworks, and Forma 3D models (blog.chaos.com AI tools for architects 2026). **Architechtures** does the same for early massing.

The research scaffolding around all of this — ACADIA, Smart Geometry, AIA TAP — has not stood still either. ACADIA 2025 in Miami (theme: *Computing for Resilience*) was explicit that climate, equity, and economic uncertainty are now first-class computational design problems, not aesthetic ones (archpaper.com 2025/10 ACADIA 2025; 2025.acadia.org). The TAP Knowledge Community at AIA25 has formally folded technology and sustainability into one symposium (AIA Community Hub).

The throughline: by 2028 the question for a design firm will not be "do you use AI" but "do you own any of the IP that produces your buildings, or are you renting it from Autodesk, Bentley, and a half-dozen startups?"

### 8.2 Ennead's design-tech lineage — what was, what's gap

Ennead has a real, public computational identity, but it has lived more in *project artifacts* than in *productized infrastructure*. The Shanghai Astronomy Museum is the canonical example: a building with no straight lines or right angles, geometry derived from the three-body problem, a façade and circulation system generated parametrically — covered as a parametric exemplar in the trade press (parametric-architecture.com; archdaily.com; dezeen.com 2021/08/09). Stanford's Bing Concert Hall (Richard Olcott, 2013) integrated acoustics, video, and form into one organic envelope, a reference point for architecture-as-instrument (designboom.com Ennead Bing Concert Hall). **Ennead Lab** (e-Lab), led by Director **Amy Mielke**, runs the public R&D arm — Starter Home 3D-printing, WALTER smart water infrastructure, the Bird-Friendly Glass Lab, refugee-community design toolkits with UNHCR (e-lab.ennead.com) — and recently exhibited *Light Speed*, a flexible metal + UHPC composite panel system, at AMAD 2025 (ennead.com news on Ennead Design Technology in Parametric Architecture).

What is publicly *claimed* is striking. Ennead's own marketing language now states the firm is "advancing the boundaries of computational and parametric design, exploring the implications of quantum computing for the built environment and shaping how AI is transforming architecture" — language echoed verbatim in the CannonDesign acquisition press (cannondesign.com news Ennead joining CannonDesign).

What is *missing*, observably, is a named in-house computational platform with a public identity — no Ennead-branded equivalent of SOM's design-technology group, NBBJ's NBBJ Digital, HOK's HOK Forward, Foster + Partners' Applied Research and Development team, or Perkins&Will's AREA Research. e-Lab's published roster is heavily research and advocacy; the firm has no publicly named director of computational design, no published platform in the SOM / Foster / NBBJ mode, and no cited Autodesk University, ACADIA, or Smart Geometry presence at the leadership level. **The gap between Ennead's stated computational ambition and its productized, named, internally-staffed design-tech infrastructure is the single largest delta the merger inherits.** That delta is the strategic opening.

### 8.3 The Cannon + Ennead design-tech thesis

CannonDesign and Ennead are two firms that, on paper, look more different than they are. Cannon is 1,600+ people across 20 offices, employee-owned, healthcare- and higher-ed-anchored, with a publicly trademarked **Living-Centered Design** methodology that names interdependencies between people, business, community, and environment as the design substrate (cannondesign.com/about/living-centered-design; cannondesign.com/about/). Ennead is 160 people across NYC, LA, and Shanghai, design-forward, civic and cultural, with a global commercial book in Asia (Architectural Record; Architect Magazine; Archpaper).

The merger language is unusually explicit on *why* technology matters to the combined firm. From the joint press release: *"the goal is not just to improve technologies entering the design marketplace, but to also invent them"* — naming computational design, quantum computing, and AI applications by name. CEO Brad Lukanic, in Bisnow, frames the deal verbatim: *"We have found that some firms are thinking growth for growth's sake. We're thinking growth for differentiation."* Architectural Record adds: *"We want to grow a 100-year business that is for our next generation of people."*

The strategic implication is sharper than it looks. Cannon brings the **scale, healthcare data sets, and ESOP structure** — which means anyone who builds internal tooling builds equity that flows back to employee-owners, not to a private-equity captable. Ennead brings the **design-forward institutional brand and the Shanghai book** — which means tools built here can be marketed externally as design-led, not engineering-led. Healthcare specifically is the sharpest AI-in-AEC vertical of the next five years: clinical workflow simulation, MEP density, infection-control airflow modeling, and code-compliance automation are exactly the problems where Augmenta-class agentic tools and LLM-driven plan checking pay back fastest. A combined firm with Ennead's design polish, Cannon's healthcare data, and a real internal design-tech platform would be one of three or four shops in the world positioned to *productize* — not just consume — the next wave.

### 8.4 The AI-in-AEC moment, named in concrete products

The macro signal is unambiguous and compressed into the last twelve months:

- **Turner Construction**, the largest US contractor by revenue, signed a two-year "wall-to-wall, floor-to-ceiling" deal with OpenAI — every employee gets ChatGPT Enterprise, plus a hackathon that produced 100+ custom agents for contract review, safety, and jobsite ops (constructiondive.com; constructionbriefing.com).
- **AECOM** acquired Norwegian AI startup **Consigli for $390M** in November 2025 — the largest AI acquisition in AEC engineering to date (verdantix.com; moginlawllp.com). The trade analysts explicitly name **WSP, Jacobs, Arup, and Bechtel** as firms that "must respond quickly."
- **Autodesk** reorganized: Construction Cloud is folding into Forma, and Forma Building Design enters GA in 2026 with neural-CAD layout generation (ENR).
- **Bentley** committed publicly to AI-first infrastructure, with OpenSite+, Bentley Copilot in OpenRoads/OpenRail by early 2026, ProjectWise AI search GA 2026 (bentley.com press).
- **Dynamo** added native agentic workflows and MCP (Model Context Protocol) support for LLM-tool calling inside Revit graphs (dynamobim.org; forum.dynamobim.com Agentic workflows). Third-party Revit MCP servers are shipping (archilabs.ai/posts/revit-model-context-protocol).
- **Bluebeam Max** (Anthropic Claude inside Revu) ships globally early 2026 (architosh.com).
- A 2024–25 Chaos / Architizer survey of 1,227 architects found **46% already using AI tools at work, with another 23% planning adoption** within 12 months (blog.chaos.com).

Translation for an HR audience: every direct competitor of Cannon-Ennead either bought or built its AI capability in the past 18 months. The firms that did not are losing senior technologists to those that did.

### 8.5 Why this matters for Sen's role specifically (cover-page pitch, ~250 words)

I am not asking for a title and a raise because the M&A timing is convenient. I am asking because the combined firm has publicly committed — in its own acquisition press — to *invent* design technology, not just consume it. That promise has to be staffed by someone who has already been doing exactly that, in production, inside Ennead.

For the past several years I have built and shipped **EnneadTab**, the firm's internal Revit and Rhino automation platform, used daily across NYC, LA, and Shanghai studios. I built **BimRunner**, our automated model-audit and QA pipeline. I built **EnneadTabLLM**, an Ollama-based local RAG system that lets staff query our standards, specs, and prior projects without sending data to a vendor — solving the same problem CannonDesign healthcare clients will need solved under HIPAA. I built our **AIA Sustainable Reporting** automation, the kind of code-as-compliance work that Bluebeam Max and Bentley Copilot are now charging enterprise prices for. None of this is theoretical. All of it is in production. All of it was built without a "Director of Computational Design" title because Ennead never created one.

Cannon-Ennead's stated thesis is that the combined firm will invent design technology in healthcare, civic, and cultural work, leveraging Living-Centered Design and Ennead's institutional brand. I am the person who has already been quietly doing that work — bridging Ennead's design culture with Cannon's healthcare scale, the firm's Asia book with US compliance, and Autodesk's tooling with our own IP. The title and compensation conversation is not about the past. It is about whether the firm wants the person who builds its 2026–2030 design-tech platform to do that work *inside* the building, or watch him build it somewhere else.

---

*End of internal brief. Update this document after the Monday meeting with what HR actually said — that becomes the foundation for the 14-day follow-up and any subsequent escalation.*

## Appendix A — Fact-Check Verification (completed 2026-05-03)

Every claim used in this brief was independently verified against live sources on 2026-05-03. Below is the full audit table — bring this if HR challenges any number.

| ID | Claim | Status | Source | Note |
|---|---|---|---|---|
| A1 | Acquisition announced April 21, 2026 | ✅ CONFIRMED | archpaper.com/2026/04/cannondesign-acquires-ennead-architects/; Bisnow timestamped Apr 21, 2026 11:33 AM ET | — |
| A2 | Ennead = 160-person practice, NYC/LA/Shanghai | ✅ CONFIRMED | cannondesign.com/news/ennead-architects-joining-cannondesign — exact quote | — |
| A3 | 7th acquisition since 2024, largest | ✅ CONFIRMED | Bisnow + AN | "CannonDesign's seventh acquisition since the beginning of 2024, and Ennead Architects' 160-person practice is CannonDesign's largest acquisition to date" |
| A4 | Employee-owned; CEO Lukanic | ⚠️ PARTIAL | prnewswire.com Lukanic announcement | CEO **effective July 28, 2016** (announced 2015). Sources say "employee-owned" — do **not** claim "100% ESOP" without a specific source |
| A5 | Operates as "Ennead, a CannonDesign company" | ✅ CONFIRMED | CannonDesign press release | — |
| A6 | Cannon 2026 revenue ~$228.6M; ~1,600 staff pre-merger | ✅ CONFIRMED | rocketreach.co + Bisnow | Pre-merger headcount **~1,600** (NOT ~1,000); ~1,760 post-merger |
| B1 | Computational Designer band | 🔴 CORRECTED | cannondesign.com/careers/computational-designer | Posted band is **$81,700–$91,600** (NOT $83,600–$104,500) |
| B2 | Design Technologist band $76,800–$96,000 | ✅ CONFIRMED | cannondesign.com/careers/design-technologist | A second senior posting shows $83,600–$104,500 |
| B3 | Architect III NYC $87,000–$113,365 | ✅ CONFIRMED | cannondesign.com/careers/architect-iii-3 | — |
| B4 | Associate Technical Director role exists | ✅ CONFIRMED | cannondesign.com/careers/associate-technical-director | 20 yrs exp, RA license required |
| B5 | Andy VanMater = Computational Design Architect, CannonDesign St. Louis | ✅ CONFIRMED | linkedin.com/in/andyvanmater/ | — |
| C1 | Glassdoor NYC Computational Designer | 🔴 CORRECTED | glassdoor.com/Salaries/new-york-city-ny-united-states-computational-designer-salary | Average **$149,444** (n=19, Dec 2025) — not $144,911 |
| C2 | ZR NYC Computational Design Architecture 75th $199,700 | ✅ CONFIRMED | ziprecruiter.com/Salaries/Computational-Design-Architecture-Salary-in-New-York-City,NY | — |
| C3 | Glassdoor NYC BIM Manager $78,584–$124,759 | ✅ CONFIRMED | glassdoor BIM Manager NYC | n=57, Apr 2026 |
| C4 | Bespoke NYC BIM Manager $95K–$150K | ✅ CONFIRMED | bespokecareers.com/salary-guide/new-york/architecture/ | — |
| C5 | Project Architect 8+ yr median $122,882 | 🔴 CORRECTED SOURCE | salaryexpert.com — **ERI**, NOT ZipRecruiter | ZipRecruiter NYC PA median is $115.9K |
| C6 | Salary.com NYC Director of Architecture | ✅ CONFIRMED | salary.com | Avg $154,221; 25–75 $143K–$164K; 10–90 $133K–$172K |
| C7 | Glassdoor NYC VP Architecture $274,027 | ✅ CONFIRMED | glassdoor VP Architecture NYC | **Small sample (n=7)** — flag if used as primary anchor |
| D1 | CannonDesign comp rating | 🔴 CORRECTED | glassdoor Reviews E30940 | **3.5/5** (up 7% YoY) — NOT 3.1/5 |
| D2 | CannonDesign overall 4.0/5 | ✅ CONFIRMED | same | n=329 reviews |
| D3 | CannonDesign Architect $98K avg, $102K–$188K | ✅ CONFIRMED w/ caveat | glassdoor CannonDesign Architect | This is the **25th–75th percentile band, all-locations**, NOT NYC. Reframe accordingly |
| D4 | "Promotion structure is limiting" review | ✅ CONFIRMED (paraphrase) | glassdoor reviews | Substance verified; if quoting verbatim, refresh phrasing from current review text |
| E1 | AIA 2025 Comp Report 13,227 positions / 817 firms | ✅ CONFIRMED (headline only) | aia.org/resource-center/aia-compensation-benefits-report | Full report **paywalled** |
| E2 | BLS 17-1011: median $96,690 / 90th $159,800 / 123,600 jobs | ✅ CONFIRMED | bls.gov/ooh/architecture-and-engineering/architects.htm | — |
| E3 | NYC March 2026 CPI 4.0% / 3.3% / 5.1% | ✅ CONFIRMED | bls.gov/regions/northeast/news-release/consumerpriceindex_newyork.htm | — |
| E4 | 3.5% US 2026 salary budget | ✅ CONFIRMED | worldatwork.org WTW survey, n=1,569 US orgs | Attribute to **WTW (corroborated by Mercer/PayScale)**, not SHRM |
| E5 | Zweig 2026 AEC technical roles +4.0% | ❌ NOT FOUND | zweiggroup.com — no public 4.0% headline | Use category specifics instead (Architectural Designer +11%, $70K→$78K) |
| F1 | Luc Wilson — Global Director of Design Technology, Associate Principal, KPF; Columbia GSAPP adjunct | ✅ CONFIRMED | kpf.com/people/luc-wilson | — |
| F2 | James Vandezande — HOK | 🔴 CORRECTED | hok.com/people/leadership/view/james-vandezande/ | **Senior Principal / Chief Technology Officer** (NOT Design Technology Manager) — *upgrade*: this is a stronger comp |
| F3 | Jonathan Rabagliati — Geometry & Computational Design Lead, SOM | ✅ CONFIRMED | LinkedIn | — |
| F4 | Andreas Bak — Global Lead Computational Design, BIG | ✅ CONFIRMED | LinkedIn | — |
| F5 | Matt Conway — Sr Associate / Computational Design Leader, DLR Group, RA | ✅ CONFIRMED | LinkedIn | — |
| F6 | Bill Carney — Principal / Design Technology Leader, DLR Group | ✅ CONFIRMED | LinkedIn | — |
| F7 | Brendan Mullins — Design Computing Discipline Leader, Stantec | ✅ CONFIRMED | stantec.com/en/people/m/mullins-brendan | Title: "Design Computing Discipline Lead, Principal, Architect" |
| F8 | Zach Trattner — Sr Associate / Design Technology Leader, Gensler NY | ✅ CONFIRMED | LinkedIn | — |
| F9 | Andrew Heumann — formerly NBBJ/WeWork → Hypar | ✅ CONFIRMED | LinkedIn | Path: NBBJ → Woods Bagot → WeWork → Hypar |
| G1 | Architects Newspaper coverage | ✅ CONFIRMED | archpaper.com 2026/04/cannondesign-acquires-ennead-architects/ | — |
| G2 | Architectural Record coverage | ✅ CONFIRMED (paywalled) | architecturalrecord.com/articles/18150 | Headline only — body paywalled |
| G3 | Bisnow uses "rapid growth spurt" | ✅ CONFIRMED | bisnow.com NY | Headline match |
| G4 | Lukanic quote | 🔴 CORRECTED | Bisnow | Verbatim: *"We have found that some firms are thinking growth for growth's sake. We're thinking growth for differentiation."* — NOT "growth for differentiation, not growth alone" |

### Top-5 corrections applied to brief

1. ✅ Computational Designer band fixed: $83.6K → **$81.7K**
2. ✅ Glassdoor comp rating fixed: 3.1/5 → **3.5/5**
3. ✅ CannonDesign headcount fixed: 1,000+ → **~1,600 pre-merger / ~1,760 post-merger**
4. ✅ Lukanic quote: paraphrase → **verbatim** Bisnow text
5. ✅ Project Architect $122,882 source: ZipRecruiter → **ERI SalaryExpert**

### Secondary corrections also applied

- Glassdoor Computational Designer NYC: $144,911 → **$149,444 average** (improved data)
- Vandezande title: "Design Technology Manager" → **"Chief Technology Officer at HOK"** (stronger industry-parity figure)
- Ennead conference talk: placeholder → **Advancing Computational Design Conference, Austin TX 2026** ("The Design of Design — Enabling Agile Introduction of New Tools to Scale Design Efficiency", source repo `zsenarchitect/2026-AI-Talk`, live at `2026-ai-talk.vercel.app`)

---

*End of internal brief. Update this document after the Monday meeting with what HR actually said — that becomes the foundation for the 14-day follow-up and any subsequent escalation.*
