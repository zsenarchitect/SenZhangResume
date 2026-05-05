---
title: Sen Zhang — Resume
contact: zsenarchitect@gmail.com · 518.618.6150 · New York, NY
links: senzhang.me · github.com/zsenarchitect
generated_from: senzhang.me/src/data/resume.ts
generated_on: 2026-05-05
classification: INTERNAL — auto-generated, do not hand-edit
---

# Sen Zhang

Registered Architect in NY · 518.618.6150 · zsenarchitect@gmail.com

## Summary

Registered NY architect (NCARB) and Computational BIM Developer at Ennead Architects, 9 years post-Master's. Sole developer behind Ennead's Design Technology stack: EnneadTab — a 450+ tool plugin platform with three U.S. Copyright registrations and 60 daily users across a 160-person firm — plus BimRunner, EnneadTabLLM, FieldDay, AIA-Sustainable-Reporting, and 6 more production web services and AI integrations. Independent work spans a real-estate networking platform (Realm) and agent-orchestrated AI operations across multiple live small-business ventures. Speaker: Advancing Computational Design 2026, Autodesk University 2024, Digital Built Week Americas 2023.

## Experience

### **Ennead Architects LLP** / Computational BIM Developer{meta:New York, NY · 2022–Present}
_Architectural Designer, BIM Specialist_{meta:2020–2022}
- **Computational BIM Developer — sole developer running the Design Technology department for a 160-person firm; full-spectrum role spanning platform development, BIM management, and complex-geometry triage**
  - Architect and lead developer of EnneadTab — 450+ tools across Revit, Rhino, CAD, Adobe, Excel, Email, and LLM integration; three U.S. Copyright registrations (2024)
  - Owner of 8+ additional production web services and Revit/Rhino plugins — see Selected Projects below
  - BIM management — Healthcare (NE US): NYU Langone, Northwell, Lenox Hill. Commercial (Asia): FTZ Shanghai, ByteDance Houhai HQ, Bilibili HQ
  - Solution architect for large-model BIM data, complex families; in-house training and mentoring
  - Rhino-to-Revit interoperability via zero-learning-curve internal tooling; triage of complex parametric and industrial-scale geometry
  - Fluent in CPython, IronPython, Revit API, RhinoCommon API. Working proficiency in TypeScript / React / Next.js. LLM integration via Ollama, OpenAI, Anthropic, MCP

### **Arquitectonica** / Designer, BIM Specialist, CG Visualization{meta:New York, NY · 2017–2020}
- 40 Hudson Yards (NYC office tower); Amazon HQ2 master planning (Chicago); 31 Parliament mid-rise residential tower (Toronto SmartCity)
- Curtis Block (Calgary); Warsaw Hotel (Poland); Newport Waterfront; Equinox Hotel (San Jose); Queens Sherbourne mixed-use with historical preservation (Toronto)

### **RPI Publication Dept.** / Book-design, Asset Management{meta:Troy, NY · 2016–2017}

### **Plasma Studio** / Summer Intern{meta:Beijing, China · Summer 2015}

### **Terreform ONE** / Research, Design{meta:New York, NY · Summer 2014}

### **Ballistic Architecture Machine** / Summer Intern{meta:Beijing, China · Summer 2013}

## Selected Projects

> Note on visuals — the EnneadTab product family and the internal Ennead-owned tools below are Ennead IP and cannot be shown in a public résumé. A desensitized live walkthrough is available on request.

_Office Work — Ennead Architects_

### **EnneadTab** / Architect & Lead Developer{meta:2021–Present}
Firm-wide plugin ecosystem spanning Revit, Rhino, CAD, Adobe, Excel, Email, and on-prem LLM. Built and maintained solo. Designed end-user-first and adopting an invisible-design principle — silent updates, no install screen, no docs to read — which let it spread organically by word of mouth across the firm before any mandate, training rollout, or policy push. 500+ tools, three U.S. Copyright registrations (2024), 60 active daily users, 17×/person/workday, 63,627 logged events Q4 2025. Stack: Python (CPython + IronPython) + Revit/Rhino APIs.

### **EnneadTab Self-Healing Agent Ecosystem** / Architect & Lead Developer{meta:2025–Present}
Autonomous agent layer wrapped around the EnneadTab-OS codebase that catches production errors, drafts fixes, and ships enhancements with minimal human intervention. Components: ErrorDump (live error capture from 60 daily users) → scheduled fix agent (auto-PR per fingerprint) → enhance agent (proactive code improvements). Featured in the Austin 2026 conference talk on agile tool introduction. Stack: Claude Code agents + GitHub Actions + Python + REST.

### **BimRunner** / Architect & Full-Stack Developer{meta:2026–Present}
Production analytics platform for Revit project health. Local harvester ingests data from 700 models weekly; web dashboard surfaces historical scoring and trending data, project pin-up wall, scheduled cron reports, and an AI chatbot for natural-language queries. Used by project leads across the firm to triage live work before coordination crises. Stack: Next.js + Vercel Postgres + Chart.js.

### **RenderPolisher** / Architect & Developer{meta:2025–2026}
AI-driven render post-processing pipeline with deeply customized features tailored to architects' language and delivery workflow. Cleans and uplifts architectural visualizations through a configurable model chain; integrates into the Ennead delivery workflow via the EnneadTab toolbar. Stack: Next.js + Vercel Blob/KV + react-pdf book-flip viewer.

### **AIA-Sustainable-Reporting** / Architect & Lead Developer{meta:2026–Present}
CRON Excel pipeline + interactive web dashboard for AIA 2030 sustainable-design metrics, with location-based filtering and project-to-project comparison. Closes the firm-wide reporting loop for the AIA 2030 commitment. Stack: Next.js + NextAuth + Drizzle ORM + Chart.js.

### **EnneadTabWiki** / Architect & Lead Author{meta:Ongoing}
Public documentation portal for the EnneadTab tool family — auto-syncs tool catalog and usage data from the underlying registry. Includes an AI-assisted RAG system for semantic search across all tool docs and usage patterns. Stack: Next.js 16 + Drizzle + Vercel Postgres + Vercel Blob + Gemini.

### **EmployeeData** / Architect & Lead Developer{meta:2025–2026}
Decision-support system for Ennead partners on capital-equipment prioritization. Consolidated HR records (177 employees), weekly directory scrapes, and per-machine hardware reports into a single employee-by-machine view; surfaced that 70% of the 176-machine fleet was Retired and 81% of GPUs were 5+ years old, sequenced into a quarterly replacement plan through 2027 Q3. Replaced an ad-hoc Excel email workflow; gated to the partners and DT lead who approve capex. Delivered and retired April 2026 once the decision cycle completed. Stack: Python (Playwright scraper, psutil/WMI collector, FastAPI POST server, vector-store assistant) + GitHub Pages + Actions weekly cron.

### **EnneadTabLLM** / Architect & Developer{meta:2025–2026}
On-prem AI assistant for plain-English queries across firm standards, templates, and project history — no client data leaves the network. Solves the HIPAA / data-sovereign client problem; production basis of the 2026 Austin talk "Cloning the Expert." Stack: Ollama (on-prem) + Next.js proxy.

### **FieldDay** / Architect & Lead Developer{meta:2026–Present}
Offline-capable web app for site inspection on phones, tablets, and desktops. PDF-based spatial pinning, photos, voice notes, and comments with zero-connectivity capture and cloud sync once back online. Preserves spatial accuracy across drawing revisions. Stack: Next.js + NextAuth + Drizzle ORM + Vercel Blob.

### **EnneadTabHome** / Architect & Developer{meta:2025–2026}
Landing page and secure auth gateway for the EnneadTab application family at enneadtab.com — single office-account sign-in for all in-house web services. Stack: Next.js 14, Tailwind.

### **EnneaDuck** / Designer & Developer{meta:2022–Present}
Community-mascot system across the EnneadTab ecosystem — pixel-art duck embedded throughout the toolset (achievements, status pings, gamified adoption hooks) plus a Next.js Duckland community page. Per user feedback, made the toolset feel more memorable and approachable — the warmth layer that helped a top-down rollout become a self-sustaining voluntary community.

### **2025 Performance Review** / Architect & Lead Developer{meta:2025–2026}
Firm-wide employee-evaluation system used by HR to streamline the annual review process. Excel ingest → interactive HTML report with software-proficiency tracking and visual analytics. Deployed to GitHub Pages.

_Independent Projects — Outside Office_

### **Realm** / Digital Strategy Architect{meta:2025–Present}
Networking platform connecting architects, real-estate operators, and exhibition partners through curated offline events. Multi-step RSVP, admin/client dashboards, role-based partner gating, branded email flows. Stack: Next.js 16 + NextAuth + Drizzle + Vercel Postgres + Resend.

### **Atelier-T (Toni LLP)** / Founder{meta:2025–Present}
Early-stage venture for high-end salons. Operating model pairs a customer-facing web app with an agent-team that runs daily small-business operations end-to-end.

### **Social-Media Ads Service** / Lead Engineer{meta:Ongoing}
AI-heavy content creation paired with social-media engagement automation, packaged as an ad-service offering for live small-business clients.

### **Social-Media Channel — Android App** / Lead Engineer{meta:Ongoing}
Native Android self-guidance app for social-media consumption — strips Reels/Shorts/algorithmic feeds from Instagram, YouTube, Facebook, and X via WebView CSS/JS injection, returning user agency over feed time. Stack: Kotlin 2.3 + Jetpack Compose + Room + Firebase Crashlytics. Pre-launch.

### **LakeHouse-Design** / Architect & Developer{meta:Ongoing}
Collection of daily high-value workflow timesaver plugins for Rhino.

### **TimeBank LLP** / Founder{meta:2025–Present}
Side venture pairing a customer-facing web app with an agent-team that runs daily small-business operations end-to-end.

## Speaking & Recognition

### **Advancing Computational Design Conference** / Speaker{meta:Austin, TX · 2026}
_The Design of Design — Enabling Agile Introduction of New Tools to Scale Design Efficiency_

### **Autodesk University** / Session Speaker{meta:San Diego, CA · 2024}
_Revit As A Game Engine_

### **Digital Built Week Americas** / Panel Speaker{meta:Dallas, TX · 2023}
_Promoting Computational Design to Non-Programmers_

### **AEC Hackathon** / Team — Honorable Mention{meta:New York, NY · 2023}
_Educational Tool Connecting Junior and Senior Students_

## Credentials & Technical Stack

- Registered Architect, New York (NCARB)
- Languages: Python (CPython, IronPython) — primary; TypeScript / React / Next.js — applied (LLM-assisted)
- Tooling: Revit API, RhinoCommon API, Grasshopper, Dynamo, MCP, LLM integration (Ollama, OpenAI, Anthropic)
- Spoken: English, Mandarin Chinese (native)

## Education

### **Columbia University GSAPP** / M.S. Advanced Architecture Design{meta:New York, NY · 2016–2017}

### **Rensselaer Polytechnic Institute** / Bachelor of Architecture{meta:Troy, NY · 2012–2016}

### **Tongji University** / Major in Urban Planning{meta:Shanghai · 2010–2012}

## Awards & Recognition

- **EnneadTab — U.S. Copyright Office** — 3 registrations, authorship credited to Sen Zhang{meta:2024}
- **Hyperloop Campus, Las Vegas** — Honorable Mention{meta:2020}
- **Greenway to Ideal City, Chengdu** — 2nd Place{meta:2019}
- **Tokyo Anti-Library** — Honorable Mention{meta:2018}
- **Non Architecture: Dance** — Finalist{meta:2018}
- **AIA Henry Adams Award**{meta:2016}
- **Magna Cum Laude Honors** — Dean's List 2012–2016{meta:2016}
- **George T. Droste Scholarship** — Structural engineering study{meta:2015}
- **Faculty Selection Award** — Academic proficiency in Architecture{meta:2015}
