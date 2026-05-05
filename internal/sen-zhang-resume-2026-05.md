---
title: Sen Zhang — Resume
contact: zsenarchitect@gmail.com · New York, NY
links: senzhang.me · github.com/zsenarchitect
generated_from: senzhang.me/src/data/resume.ts
generated_on: 2026-05-05
classification: INTERNAL — auto-generated, do not hand-edit
---

# Sen Zhang

Registered Architect in NY · zsenarchitect@gmail.com

## Summary

Registered NY architect (NCARB), 9 years post-Master's, currently Computational BIM Developer at Ennead Architects. Solo developer behind Ennead's Design Technology stack: EnneadTab (500+ tools, three U.S. Copyright registrations, 60 daily users, roughly half the design staff), plus BimRunner, RenderPolisher, FieldDay, AIA-Sustainable-Reporting, and 6 other production services. Outside Ennead: Realm (real-estate networking platform) and several small-business ventures with AI agents handling daily operations. Speaker: Advancing Computational Design 2026, Autodesk University 2024, Digital Built Week Americas 2023.

## Experience

### **Ennead Architects LLP** / Computational BIM Developer{meta:New York, NY · 2022–Present}
_Architectural Designer, BIM Specialist_{meta:2020–2022}
- **Keystone developer of Ennead's Design Technology practice and sole owner of the firm's plugin and SaaS stack. Drove voluntary firm-wide adoption to 60 daily users (~50% of design staff) without a top-down mandate or training rollout. Set the firm's on-prem AI/data architecture and authored the partner-approved capital-equipment plan for the 176-machine fleet. Continues to perform BIM manager duties on active projects.**
  - Developer of EnneadTab and 8+ other firm-internal tools (see Selected Works below)
  - BIM management on active projects:
    - Healthcare (NE US): NYU Langone, Northwell, Lenox Hill
    - Commercial (Asia): FTZ Shanghai, ByteDance Houhai HQ, Bilibili HQ
  - Solution architect for large-model BIM data, complex families; in-house training and mentoring
  - Rhino-to-Revit interoperability via zero-learning-curve internal tooling; triage of complex parametric and industrial-scale geometry

### **Arquitectonica** / Designer, BIM Specialist, CG Visualization{meta:New York, NY · 2017–2020}
- 40 Hudson Yards (NYC office tower); Amazon HQ2 master planning (Chicago); 31 Parliament mid-rise residential tower (Toronto SmartCity)
- Curtis Block (Calgary); Warsaw Hotel (Poland); Newport Waterfront; Equinox Hotel (San Jose); Queens Sherbourne mixed-use with historical preservation (Toronto)

### **RPI Publication Dept.** / Book-design, Asset Management{meta:Troy, NY · 2013–2016}

## Publicity

### **Advancing Computational Design Conference** / Speaker{meta:Austin, TX · 2026}
_The Design of Design — Enabling Agile Introduction of New Tools to Scale Design Efficiency_

### **Autodesk University** / Session Speaker{meta:San Diego, CA · 2024}
_Revit As A Game Engine: Running Board Game Entirely Inside Revit_

### **Digital Built Week Americas** / Panel Speaker{meta:Dallas, TX · 2023}
_Promoting Computational Design to Non-Programmers_

## Skills & Credentials

- Registered Architect, New York (NCARB)
- Languages: Python (CPython, IronPython), primary; TypeScript / React / Next.js, applied (LLM-assisted)
- Architect API: Revit API, RhinoCommon API, Grasshopper, Dynamo
- Web stack used in production: Next.js 14–16, NextAuth v5, Drizzle ORM, Vercel Postgres / Blob / KV, Resend, Chart.js, react-pdf, GitHub Actions, FastAPI
- AI integration: on-prem Ollama (private deployment, data stays inside firm network); cloud Claude / OpenAI / Gemini; Claude Code agents in production; model-agnostic via MCP
- Spoken: English, Mandarin Chinese (native)

## Education

### **Columbia University GSAPP** / M.S. Advanced Architecture Design{meta:New York, NY · 2016–2017}

### **Rensselaer Polytechnic Institute** / Bachelor of Architecture{meta:Troy, NY · 2012–2016}

### **Tongji University** / Major in Urban Planning{meta:Shanghai · 2010–2012}

## Awards & Recognition

- **EnneadTab**, 3 U.S. Copyright registrations, Sen Zhang as sole author{meta:2024}
- **AEC Hackathon (NYC)**, Educational Tool Connecting Junior and Senior Students, Team Honorable Mention{meta:2023}
- **Hyperloop Campus, Las Vegas**, Honorable Mention{meta:2020}
- **Greenway to Ideal City, Chengdu**, 2nd Place{meta:2019}
- **Tokyo Anti-Library**, Honorable Mention{meta:2018}
- **Non Architecture: Dance**, Finalist{meta:2018}
- **AIA Henry Adams Award**{meta:2016}
- **Magna Cum Laude Honors**, Dean's List 2012–2016{meta:2016}
- **George T. Droste Scholarship**, Structural engineering study{meta:2015}
- **Faculty Selection Award**, Academic proficiency in Architecture{meta:2015}

<!-- pagebreak -->

# Selected Works

_Note: the EnneadTab product family and the internal Ennead-owned tools below are Ennead IP and cannot be included here with images. A live walkthrough with sensitive information redacted is available during interview._

## Office Tools at Ennead Architects

### **EnneadTab** / Developer{meta:2021–Present}
Firm-wide plugin ecosystem across Revit, Rhino, CAD, Adobe, Excel, and Email. Built and maintained solo. Designed for zero-friction adoption: background auto-updates, instant deployment, and an intuitive UX. Spread organically across the firm by user demand. 500+ tools, three U.S. Copyright registrations (2024), 60 active daily users, 17×/person/workday, 63,627 logged events Q4 2025. Stack: Python (CPython + IronPython) + Revit/Rhino APIs.

### **EnneadTab Self-Healing Agent Ecosystem** / Developer{meta:2025–Present}
Autonomous self-healing layer wrapping the EnneadTab-OS codebase. Detects production errors across 60 daily users, drafts fixes, and opens pull requests ready for human review and merge. Featured in the Austin 2026 talk on agile tool introduction.

### **EnneadTabLLM** / Developer{meta:2025–2026}
On-prem AI assistant for plain-English queries across firm standards, templates, and project history. Client data never leaves the firm network. Featured in the 2026 Austin talk on agile tool introduction.

### **BimRunner** / Developer{meta:2026–Present}
Production analytics platform that closes the feedback loop between live BIM data and project authoring. Local harvester ingests 400+ models weekly; web dashboard surfaces historical scoring, trending data, project pin-up wall, scheduled cron reports, and an AI agent that generates custom analysis scripts on demand to answer complex cross-project queries. Used by project leads across the firm to triage live work before coordination crises.

### **NYU-HQ** / Developer{meta:2025–Present}
Programming-vs-as-modeled compliance dashboard for the NYU healthcare project. Compares the client area program (Excel) against the live Revit model on a recurring schedule and surfaces gaps as actionable corrections back to the design team. Closes the feedback loop between brief and as-built BIM.

### **AIA-Sustainable-Reporting** / Developer{meta:2026–Present}
CRON Excel pipeline + web dashboard for AIA 2030 sustainable-design metrics, with location-based filtering and project-to-project comparison. Replaces the spreadsheet that used to circulate quarterly for AIA 2030 reporting.

### **RenderPolisher** / Developer{meta:2025–2026}
AI-driven render post-processing pipeline with deeply customized features tailored to architects' language and delivery workflow. Cleans and uplifts architectural visualizations through a configurable model chain; integrates into the Ennead delivery workflow via the EnneadTab toolbar.

### **FieldDay** / Developer{meta:2026–Present}
Offline-capable web app for site inspection on phones, tablets, and desktops. PDF-based spatial pinning, photos, voice notes, and comments with zero-connectivity capture and cloud sync once back online. Preserves spatial accuracy across drawing revisions.

### **EnneadTabWiki** / Developer{meta:2024–Present}
Public documentation portal for the EnneadTab tool family. Tool catalog, usage data, and reference content auto-update from the EnneadTab-OS source repository on every release. Docs stay in lockstep with shipped tools, without manual rewrite. Includes an AI-assisted RAG system for semantic search across all tool docs and usage patterns.

### **EnneadTabHome** / Developer{meta:2025–2026}
Landing page and secure auth gateway for the EnneadTab application family. Single sign-on via Microsoft 365 / Entra ID, fronting all in-house web services.

### **EmployeeData** / Developer{meta:2025–2026}
Decision-support system for Ennead partners on capital-equipment prioritization. Consolidated weekly directory scrapes and per-machine hardware reports into a single employee-by-machine view; surfaced that 70% of the 176-machine fleet was Retired and 81% of GPUs were 5+ years old, sequenced into a quarterly replacement plan through 2027 Q3. Replaced an ad-hoc Excel email workflow; gated to the partners and DT lead who approve capex. Delivered and retired April 2026 once the decision cycle completed.

### **2025 Performance Review** / Developer{meta:2025–2026}
Firm-wide employee-evaluation system used by HR to streamline the annual review process. Reads Excel data and generates an interactive HTML report with software-proficiency tracking and visual analytics. Deployed to GitHub Pages.

### **EnneaDuck** / Designer{meta:2022–Present}
Community-mascot system across the EnneadTab ecosystem: a pixel-art duck embedded throughout the toolset (achievements, status pings, gamified adoption hooks) plus a Next.js Duckland community page. Per user feedback, made the toolset feel more memorable and approachable, adding the warmth layer that helped firm-wide adoption stick as a voluntary community rather than a top-down rollout.

## Independent

### **Realm** / Digital Strategy Architect{meta:2025–Present}
Networking platform connecting architects, real-estate operators, and exhibition partners through curated offline events. Multi-step RSVP, admin/client dashboards, role-based partner gating, branded email flows.

### **Atelier-T** / Founder{meta:2025–Present}
Early-stage venture for high-end salons. Operating model pairs a customer-facing web app with an agent-team that runs daily small-business operations end-to-end.

### **Social-Media Ads Service** / Lead Engineer{meta:Ongoing}
AI-heavy content creation and social-media engagement automation, sold as an ad service to small-business clients.

### **Social-Media Channel: Android App** / Lead Engineer{meta:Ongoing}
Native Android consumer app focused on intentional social-media consumption. Early-stage / pre-launch.
