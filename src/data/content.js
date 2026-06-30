export const meta = {
  title: "ERP Implementation Framework",
  subtitle: "Grant Financial Management",
  fullTitle: "Enterprise Resource Planning Implementation Manual",
  exhibit: "Exhibit 19  ·  Version 2  ·  Muhammad Bilal, FCA · FCCA · CFA  ·  June 2026",
  footer:
    "ERP Implementation Framework for Grant Financial Management · OMB 2 CFR Part 200 · GAO Green Book · Confidential",
};

export const quickRef = [
  {
    id: "what",
    label: "What is it?",
    icon: "📋",
    short:
      "A free, comprehensive step-by-step manual for configuring any standard financial software system to meet all federal rules governing grant spending.",
    detail: `The ERP Implementation Framework is a complete, plain-English manual for setting up and operating a financial management system that meets all federal rules — specifically for organizations that receive and spend federal grant money.

ERP stands for Enterprise Resource Planning. In everyday terms, an ERP is simply the accounting software an organization uses to record every payment, track spending against approved budgets, generate financial reports, and manage vendor payments. Common examples include QuickBooks, Sage Intacct, Oracle, and SAP. Many organizations already use one of these programs — but most have never configured it specifically to meet the federal grant rules that apply to every dollar of federal award funding they receive.

This framework tells you exactly how to do that configuration. It is not a piece of software itself — it is a step-by-step guide that walks your finance team, or the consultant setting up your system, through every decision that needs to be made, every control that needs to be activated, and every test that needs to be run before your system handles real grant transactions.

The framework is organized around four essential resources:`,
    bullets: [
      {
        label: "Five-phase lifecycle methodology:",
        text: "A structured process covering pre-award financial design, award configuration, day-to-day operations, compliance documentation, and final grant closeout — with transaction examples and accounting records at every step.",
      },
      {
        label: "87-item deployment checklist:",
        text: "A complete readiness checklist for organizations transitioning to a new or upgraded accounting system, organized into eight domains from data migration to governance sign-off.",
      },
      {
        label: "210 user acceptance test scripts:",
        text: "Ready-to-run tests covering every major function of a grant-compliant financial system — confirming the system works correctly before it processes any real money.",
      },
      {
        label: "Fraud risk and control architecture:",
        text: "A documented set of built-in safeguards and warning scenarios, aligned to federal audit standards, that prevent and detect the most common patterns of grant financial mismanagement.",
      },
    ],
    callout:
      'Plain-language summary: This framework answers the question that every organization receiving a federal grant eventually faces: "We have accounting software — but how do we configure it so we are actually following all the federal rules?" That question has no free, comprehensive answer anywhere in the public domain. This framework provides one.',
  },
  {
    id: "who",
    label: "Who uses it?",
    icon: "👥",
    short:
      "CFOs, controllers, finance directors, grant administrators, compliance officers, and ERP implementation consultants at nonprofits, universities, hospitals, tribal governments, CDFIs, and state/local agencies.",
    detail:
      "This framework is used by two groups: the professionals who configure and operate it, and the broader community that benefits from compliant federal grant administration.",
    subsections: [
      {
        title: "a)  Primary Users — Organizations and Professionals Who Apply the Framework",
        bullets: [
          "CFOs, controllers, and finance directors at nonprofits, community health centers, universities, hospitals, tribal governments, state and local government agencies, and community development financial institutions (CDFIs) who are responsible for ensuring their financial management systems satisfy federal grant requirements.",
          "Grant administrators and compliance officers who manage the day-to-day financial reporting, budget monitoring, and documentation of federal awards.",
          "ERP implementation consultants hired to configure or upgrade accounting software for grant-funded organizations — the framework provides a complete technical implementation roadmap.",
          "External auditors from CPA firms conducting Single Audits — the federal audit required for any organization expending $750,000 or more in federal awards in a fiscal year — who need to understand the control structure and evidence trail a well-configured system produces.",
          "Federal program officers at agencies such as HHS, HUD, NIH, NSF, and the Department of Education who oversee their grantees' financial management practices.",
        ],
        callout:
          "This framework is designed for organizations that currently manage grant finances using spreadsheets, disconnected records, or accounting software that was never set up with federal grant rules in mind.",
      },
      {
        title: "b)  Beneficiaries — Who Benefits Even Without Using the Framework Directly",
        bullets: [
          { label: "Your organization:", text: "By building a compliant financial system before an audit, you avoid the formal written findings, potential fund clawbacks, and reputational harm that follow an external audit failure." },
          { label: "Grant program recipients:", text: "The communities, patients, students, and individuals whose services depend on grant funding — when financial mismanagement is prevented, the money reaches the people it was intended for." },
          { label: "Federal grantor agencies:", text: "Agencies such as HHS, HUD, NIH, and NSF receive more reliable, audit-ready financial reports from grantees who implement the framework, reducing the oversight burden on program officers." },
          { label: "Office of Inspector General (OIG):", text: "The framework's fraud risk architecture and internal control documentation directly reduce the conditions that allow grant fraud and waste to go undetected." },
          { label: "U.S. taxpayers:", text: "The federal government distributes over $1.2 trillion annually through grant programs. When recipient organizations maintain properly configured financial systems, fewer public dollars are lost to improper payments, mischarging, and compliance failures." },
        ],
      },
    ],
  },
  {
    id: "why",
    label: "Who benefits?",
    icon: "🏛️",
    short:
      "Your organization, grant program recipients, federal grantor agencies, and U.S. taxpayers — fewer improper payments from the $1.2 trillion federal grant ecosystem.",
    detail: "The Problem It Solves",
    paragraphs: [
      "Federal law — specifically 2 CFR Part 200, known as the Uniform Guidance — requires every organization receiving federal grant money to maintain a financial management system that meets specific standards: unique tracking of each grant's funds, documented internal controls over all spending, evidence supporting every cost charged to the grant, and regular financial reports to the funding agency. These requirements are detailed and technical.",
      "The problem is that the federal government provides detailed regulatory rules but no standard guide for how to actually build a compliant system. The result is well documented: the Government Accountability Office (GAO) and federal agency Offices of Inspector General (OIG) consistently identify financial management system failures as the leading cause of audit findings in the federal grants ecosystem — producing billions of dollars in questioned costs annually.",
      "The gap is not a lack of willingness to comply. It is a lack of accessible, practical implementation guidance. Large organizations hire consulting firms at $50,000 to $500,000 per engagement. Nonprofits, tribal governments, community health centers, and rural municipalities — organizations that administer significant federal funds but operate with lean finance teams — often cannot afford that expertise. This framework fills that gap at zero cost.",
    ],
    reasonsTitle: "Five Reasons to Use This Framework",
    bullets: [
      { label: "Translate regulations into action:", text: "The Uniform Guidance runs to hundreds of pages of regulatory text. This framework converts every relevant requirement into a specific configuration decision for your accounting system, with plain-English explanations of what to set up and why." },
      { label: "Prevent audit findings before they happen:", text: "The 87-item deployment checklist and 210 test scripts are designed to catch configuration errors before your system processes real grant transactions — not after an auditor discovers a problem that triggers a written finding." },
      { label: "Accessible to organizations of any size:", text: "Unlike enterprise consulting engagements, this framework is free, self-contained, and written for experienced financial professionals without specialized ERP expertise. Any organization with standard accounting software can apply it." },
      { label: "Built for audit defense:", text: "Every step in the framework generates the specific documentation — transaction records, approval evidence, control logs — that an external Single Audit examiner is trained to look for. Following the framework means your audit file is being built correctly from day one." },
      { label: "Covers the complete grant lifecycle:", text: "This framework covers every stage — from setting up accounts before the grant arrives, through daily operations, to properly closing out the grant and maintaining records after it ends — so no stage is left without guidance." },
    ],
  },
  {
    id: "cost",
    label: "Cost",
    icon: "💰",
    short: "Free — zero license fee, zero software cost, zero consulting contract required.",
    detail:
      "This framework is completely free. There is no license fee, no software purchase required, no consulting contract, and no long-term commitment. Any organization with a standard accounting system — QuickBooks, Sage Intacct, Oracle, SAP, or any equivalent — can apply this framework immediately using their existing tools.",
    comparison: [
      { item: "Enterprise ERP consulting engagement", cost: "$50,000 – $500,000" },
      { item: "Enterprise compliance software (annual)", cost: "$15,000 – $80,000" },
      { item: "ERP Implementation Framework", cost: "Free" },
    ],
  },
  {
    id: "access",
    label: "How to access",
    icon: "🔓",
    short:
      "The framework is a self-contained implementation manual. Begin with Phase 1, follow Phases 2–5 in sequence, run the 87-item checklist before go-live, and validate with the 210 test scripts.",
    detail:
      "No software purchase is required to begin. Your finance team, ERP consultant, or compliance officer can follow the steps in Section 4 using any standard accounting software your organization already uses. This framework is a self-contained document that guides you through every step.",
    phases: [
      { phase: "Phase 1", title: "Pre-Award Design", desc: "Design your chart of accounts and financial structure before the grant arrives." },
      { phase: "Phase 2", title: "Award Configuration", desc: "Configure internal controls and approval workflows when the award is signed." },
      { phase: "Phase 3", title: "Financial Operations", desc: "Manage day-to-day grant transactions throughout the award period." },
      { phase: "Phase 4", title: "Compliance & Audit Readiness", desc: "Build and maintain the documentation your auditor will request." },
      { phase: "Phase 5", title: "Grant Closeout", desc: "Complete the formal 90-day closeout process and archive records." },
    ],
  },
  {
    id: "result",
    label: "Key result",
    icon: "📊",
    short:
      "5-phase lifecycle methodology · 87-item checklist · 210 test scripts across 8 areas · Full 2 CFR Part 200 and GAO Green Book alignment.",
    stats: [
      { value: "5", label: "Implementation Phases", desc: "Full grant lifecycle from pre-award to post-closeout" },
      { value: "87", label: "Checklist Items", desc: "Across 8 domains for ERP deployment readiness" },
      { value: "210", label: "UAT Test Scripts", desc: "Across 8 functional areas to validate compliance" },
      { value: "13", label: "Compliance Domains", desc: "Aligned to 2 CFR Part 200 and GAO Green Book" },
    ],
  },
];

export const steps = [
  {
    n: 1,
    title: "Understand Your Federal Compliance Obligations",
    intro:
      "Before opening your accounting system, read Section 1 of the framework to identify the specific federal requirements that apply to your organization. Key questions to answer before you begin:",
    bullets: [
      'Does your organization expend $750,000 or more in federal awards annually? If yes, you are subject to Single Audit requirements under 2 CFR Part 200 Subpart F.',
      "How many separate federal grants do you currently administer? Each grant must be tracked independently in your financial system.",
      'Does your organization pass any federal funding through to another organization (a "subrecipient")? If yes, the framework\'s subrecipient monitoring provisions apply.',
      "Does any grant require you to document matching contributions — money your organization provides alongside the federal funds? The framework's cost share tracking provisions apply.",
    ],
    closing:
      "Understanding your specific obligations before configuration ensures you activate only the controls relevant to your situation and avoids over-engineering your setup.",
  },
  {
    n: 2,
    title: "Design Your Financial Account Structure (Phase 1 — Pre-Award)",
    intro:
      "Follow Phase 1 of the framework to design the structure of your accounting system before any grant money arrives. This is the most important step — errors made here affect every transaction recorded throughout the grant. The framework requires your system to identify each transaction using six dimensions:",
    bullets: [
      { label: "Fund:", text: "Which federal grant is this money associated with? Each grant gets its own fund code so its spending is never mixed with another grant's funds." },
      { label: "Program:", text: "Which program activity is this spending supporting? (e.g., outreach, case management, administration)" },
      { label: "Cost Category:", text: "Is this Personnel, Fringe Benefits, Travel, Equipment, Supplies, Contracts, or Indirect costs? These categories must match the approved budget in your grant award." },
      { label: "Department:", text: "Which part of your organization is spending this money?" },
      { label: "Project Code:", text: "The official grant award number from Grants.gov — this links every transaction to the federal award record." },
      { label: "Reporting Period:", text: "Which fiscal year or budget period does this transaction belong to?" },
    ],
    closing:
      "The framework provides sample account code structures and transaction examples for each common organization type (nonprofit, tribal government, university, municipality).",
  },
  {
    n: 3,
    title: "Configure Your Award Control Environment (Phase 2 — Award Configuration)",
    intro:
      "When a grant award is signed, use Phase 2 to set up the internal controls that govern every payment under that award. Internal controls are the rules and checks built into your system to prevent mistakes and fraud. The framework specifies four essential control types to configure:",
    bullets: [
      { label: "Approval workflows:", text: "Define who must approve each type of payment before it is processed. No payment should be made without a second person reviewing and approving it." },
      { label: "Budget limits:", text: "Configure the system to block — or at minimum warn — when any cost category is about to exceed its approved budget. Overspending a budget line is one of the most common audit findings." },
      { label: "Separation of duties:", text: "The person who requests a payment should never be the same person who approves and processes it. The framework specifies the minimum role separations required for a compliant control environment." },
      { label: "Subrecipient setup:", text: "If your grant passes money to another organization, configure the monitoring schedule, reporting deadlines, and risk assessment process required by 2 CFR §200.332." },
    ],
    closing:
      "The framework provides 20 transaction scenarios for Phase 2, each with a step-by-step walkthrough and identification of the specific federal regulation each control satisfies.",
  },
  {
    n: 4,
    title: "Manage Day-to-Day Grant Finances (Phase 3 — Financial Operations)",
    intro:
      "During the active grant period, use Phase 3 as your operational reference for every common financial transaction. For each transaction type, the framework specifies the accounting records to create, the documentation to retain, and the controls to apply. Key transaction types covered include:",
    bullets: [
      { label: "Payroll and time allocation:", text: "How to record salary costs charged to the grant and maintain the signed time certifications that federal auditors will examine. Payroll is typically the single largest cost category in federal grants — and the most scrutinized." },
      { label: "Cash drawdowns:", text: "The process for requesting reimbursement or advance payment from your federal grantor agency, and how to record the receipt in your accounting system." },
      { label: "Vendor payments:", text: "Processing invoices, verifying competitive bidding documentation for contracts above $250,000, and recording the payment against the correct budget line." },
      { label: "Travel reimbursements:", text: "Verifying that per diem rates and travel expenses are within federal limits before reimbursing employees." },
      { label: "Cost allocations:", text: "When an employee works on multiple grants, how to accurately divide their time and salary among each grant based on documented time records." },
      { label: "Federal Financial Report (SF-425):", text: "Generating and submitting the standard federal financial report on the schedule required by your grant agreement." },
    ],
    closing:
      "Phase 3 includes 25 transaction scenarios covering every major operational situation, from equipment purchases to foreign travel approvals to graduate student stipend processing.",
  },
  {
    n: 5,
    title: "Build and Maintain Your Audit Documentation (Phase 4 — Compliance Documentation)",
    intro:
      "Use Phase 4 as your ongoing audit preparation guide throughout the grant period. Audit readiness is not something you prepare for in the weeks before an audit — it is a continuous state maintained through daily operational discipline. Phase 4 tells you:",
    bullets: [
      "Which documents to retain for every transaction type, and how long to keep them (minimum 3 years after final federal action under 2 CFR §200.334).",
      "How to organize your grant file so every required document — the award agreement, all budget amendments, all financial reports, all subrecipient files — is immediately accessible during an audit.",
      "How to run a monthly budget-versus-actual comparison and document your management review — one of the most basic controls an auditor looks for and one of the most commonly undocumented.",
      "How to maintain the internal control testing log required by 2 CFR §200.303, demonstrating that your controls are being tested and any deficiencies are being corrected.",
      "How to prepare the supporting workpapers for the most common audit testing areas: payroll and time allocation, procurement and vendor files, equipment inventory, and subrecipient monitoring.",
    ],
  },
  {
    n: 6,
    title: "Run the 87-Item Deployment Checklist Before Going Live (Section 3)",
    intro:
      "If your organization is implementing a new accounting system — or significantly upgrading an existing one — complete the full cutover checklist in Section 3 before processing any real grant transactions in the new system. The checklist is divided into eight domains:",
    bullets: [
      { label: "Domain A — Data Migration (12 items):", text: "Verify that all historical grant data has been accurately transferred from your old system, including open invoices, account balances, and prior-period transactions needed for your Schedule of Expenditures of Federal Awards (SEFA)." },
      { label: "Domain B — Integration Testing (11 items):", text: "Confirm that your accounting system is correctly exchanging data with connected systems — payroll, procurement, document management, and bank reconciliation feeds." },
      { label: "Domain C — Security and Access Controls (12 items):", text: "Verify that user roles are correctly configured, separation of duties is enforced, and audit logging is active and tamper-proof." },
      { label: "Domain D — Financial Reporting Validation (13 items):", text: "Confirm that every required report — budget-to-actual, SF-425, SEFA, indirect cost summary — produces accurate output from the new system." },
      { label: "Domains E through H (39 items):", text: "Cover user acceptance testing sign-off, staff training completion verification, governance approvals (CFO, Controller, Compliance Officer, IT Director), and go-live operations readiness including rollback procedures, parallel processing, and post-launch support." },
    ],
    closing:
      "The checklist produces a Go-Live Readiness Score based on the completion status of critical-path items. Do not transition to the new system until all critical items are verified complete.",
  },
  {
    n: 7,
    title: "Validate Your System with the 210 Test Scripts (Section 4)",
    intro:
      "Before processing any real transactions, run the User Acceptance Testing (UAT) scripts in Section 4. User acceptance testing simply means entering practice transactions into your newly configured system and confirming it responds correctly. The 210 scripts are organized across eight functional areas:",
    bullets: [
      { label: "Budget Management (30 scripts):", text: "Does the system block payments that would exceed an approved budget line? Does it generate the correct warning when spending approaches a budget limit?" },
      { label: "Procurement (27 scripts):", text: "Does the system enforce competitive bidding requirements for contracts above the federal threshold? Does it flag payments to vendors who are debarred from receiving federal funds?" },
      { label: "Payroll and Time Allocation (28 scripts):", text: "Does the system correctly distribute salary costs across multiple grants based on time records? Does it enforce the time certification workflow?" },
      { label: "Cash Management (24 scripts):", text: "Does the system correctly process federal drawdown requests and prevent advance payments beyond what is allowed?" },
      { label: "Subrecipient Monitoring (22 scripts):", text: "Does the system generate required monitoring activities and flag subrecipients with overdue financial reports?" },
      { label: "Financial Reporting (26 scripts):", text: "Does the system produce accurate SF-425 Federal Financial Reports and SEFA schedules?" },
      { label: "Period-End Closing (21 scripts):", text: "Does the system correctly handle month-end and year-end closing procedures, including accruals and carryforward balances?" },
      { label: "Fraud and Override Scenarios (32 scripts):", text: "Does the system resist attempts to bypass controls, such as splitting a large purchase into smaller amounts to avoid the competitive bidding threshold, or approving a payment to a related party?" },
    ],
    closing:
      "Each script specifies exactly what to enter, what the system should do, and how to confirm the result is correct. Record pass/fail results for every script and retain the completed log as part of your system documentation — it is evidence that your system was validated before going live.",
  },
  {
    n: 8,
    title: "Close Out the Grant (Phase 5 — Grant Closeout)",
    intro:
      "When a grant period ends, use Phase 5 to manage the formal closeout process. Federal grants do not simply stop — there are specific deadlines and required actions that must be completed, typically within 90 days of the award end date. Phase 5 guides you through:",
    bullets: [
      { label: "Final SF-425 submission:", text: "Submitting the final Federal Financial Report to your grantor agency, reconciled to the penny against your accounting system." },
      { label: "Open items resolution:", text: "Identifying and resolving all outstanding purchase orders, invoices, and subrecipient payments before the grant is closed." },
      { label: "Final subrecipient closeout:", text: "Collecting and reviewing the final financial reports from any organizations that received pass-through funding from your grant." },
      { label: "Cost share certification:", text: "Documenting that your organization contributed the matching funds it committed to in the grant agreement." },
      { label: "Equipment disposition:", text: "Following the federal rules for what happens to equipment purchased with grant funds — it may need to be transferred to another federal program or sold with proceeds returned to the agency." },
      { label: "Records archiving:", text: "Establishing a records retention calendar ensuring all grant documentation is kept for the required minimum of 3 years after the final federal action on the award (2 CFR §200.334), with specific categories retained longer if required by the agency." },
    ],
    closing:
      "The framework provides a 90-day closeout milestone timeline and 20 transaction scenarios covering every common closeout situation, including no-cost extensions, post-closeout audit findings, and final indirect cost rate settlements.",
  },
  {
    n: 9,
    title: "Maintain Records and Prepare for Post-Closeout Oversight",
    intro:
      "After the grant is formally closed, your compliance obligations do not end. Federal auditors may review grant expenditures for up to 3 years after the final federal action — longer if litigation, fraud, or a significant audit finding is involved. Phase 4 of the framework specifies:",
    bullets: [
      "Which record categories must be retained and for how long — the full award file, financial transaction records, subrecipient monitoring files, equipment records, and audit correspondence.",
      "How to configure your accounting system to archive closed grant records in a manner that remains searchable and retrievable for auditors.",
      "How to respond to a post-closeout audit finding, including the process for recording adjustments in your accounting system for costs determined to be disallowed after the grant has closed.",
      "How to transfer institutional knowledge from completed grants into your next implementation cycle — so each grant benefits from the compliance experience of the last.",
    ],
  },
];
