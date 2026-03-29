// SelectSmart Articles
// Add new articles here — newest first

const articles = [
  {
    id: 2,
    title: "Stepping into a Leadership Role: The First 30-45 Days",
    category: "Leadership & Team Building",
    date: "September 30, 2024",
    readTime: "6 min read",
    excerpt: "The first 30-45 days in a new leadership role set the tone for everything that follows. Most leaders go too deep on tech or too deep on people — here is the checklist that actually works.",
    body: `
      <p>Whether it's your first time or with a new team, taking on a leadership role comes with excitement and nerves. You're eager to get started, but there's always some apprehension about the unknown. In today's fast-paced world, where there's little time to settle in, the first 30-45 days are crucial for setting the tone for your success as a leader.</p>

      <p>In my experience, leaders often spend this initial onboarding phase in one of two extremes:</p>

      <ul>
        <li><strong>Focusing on technical knowledge:</strong> They dive deeply into learning every technical detail about the product, platform, or service their team supports.</li>
        <li><strong>Focusing on people:</strong> They invest heavily in getting to know the individuals on their team, aiming to understand everyone on a personal level.</li>
      </ul>

      <p>While neither of these approaches is inherently wrong — both are important in the long run — it's essential to remember that the first priority of any leader should be to grasp the team's portfolio, structure, and operations. Once this foundation is established, you can then continue to build expertise in the technical aspects and invest time in understanding your team members.</p>

      <h2>The Onboarding Checklist</h2>

      <p>Below is a checklist developed through years of onboarding new teams. These steps have proven effective regardless of the domain or ecosystem.</p>

      <h3>1. Organizational Overview</h3>
      <ul>
        <li><strong>The "Why":</strong> Understand the purpose and core mission of the organization.</li>
        <li><strong>Values and Culture:</strong> Familiarize yourself with the organization's core values and cultural norms.</li>
        <li><strong>Leadership Goals:</strong> Align with the leadership team on key objectives and desired outcomes.</li>
      </ul>

      <h3>2. Organizational Structure</h3>
      <ul>
        <li><strong>Org Chart:</strong> Review the organizational hierarchy and reporting structure.</li>
        <li><strong>Budget:</strong> Gain an understanding of the budget allocation and historical annual burn rates.</li>
      </ul>

      <h3>3. Current State Analysis</h3>
      <ul>
        <li><strong>Vertical Ownership (Estate):</strong> Assess what the team currently owns and manages across different business verticals.</li>
        <li><strong>RACI Chart:</strong> Review the Responsibilities, Accountabilities, Consulted, and Informed chart for clarity on roles within the organization and across verticals.</li>
        <li><strong>Roadmaps:</strong> Understand the current roadmap, tech debt, and future backlog.</li>
        <li><strong>Headcount Needs:</strong> Evaluate current headcounts and determine if there are gaps or overages.</li>
        <li><strong>Talent Management (A/B/C Matrix):</strong> Analyze talent levels using an A/B/C categorization to understand the team's strengths and development areas.</li>
      </ul>

      <h3>4. Operations and Workflow</h3>
      <ul>
        <li><strong>Work Intake:</strong> Understand how new work is brought into the team.</li>
        <li><strong>Capacity Planning:</strong> Review how capacity is planned and distributed across the team.</li>
        <li><strong>Policies, Operations, and Procedures:</strong> Review current operational processes — what is working and what isn't.</li>
        <li><strong>Risk Areas:</strong> Identify and document areas of potential risk.</li>
      </ul>

      <h3>5. KPIs and Branding</h3>
      <p>Establish metrics and reporting to measure and broadcast the progress and success of the team's deliverables. This is often the most overlooked step — leaders who make their team's work visible earn trust and budget.</p>

      <h2>The Bottom Line</h2>
      <p>The first 30-45 days are not the time to prove yourself technically or to become everyone's best friend. They are the time to <strong>understand the landscape</strong> — so that every decision you make after is grounded in reality, not assumptions.</p>

      <h2>Watch the Video</h2>
      <p>Prefer to watch rather than read? Here is the full walkthrough on YouTube:</p>
      <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:24px 0;border:1px solid rgba(0,194,168,0.2);">
        <iframe src="https://www.youtube.com/embed/mDEru6x6tkA?start=45" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen loading="lazy" title="Stepping into a Leadership Role: The First 30-45 Days"></iframe>
      </div>
    `
  },
  {
    id: 1,
    title: "What Does It Mean to Own and Support a Product or Platform?",
    category: "IT Strategy & Transformation",
    date: "September 27, 2024",
    readTime: "5 min read",
    excerpt: "Owning a product or platform goes far beyond the code your team writes. Here is the 15-point checklist every engineer should use to develop a true 360-degree view of what they support.",
    body: `
      <p>In the ever-evolving tech landscape, owning a product or platform is a multifaceted responsibility, which requires oversight not just of the technology itself but of how it integrates into an organization's broader objectives and needs. Unfortunately, at times the ownership of a product or platform is not something which is confined within a single team or group and gets distributed per the functional areas. For example — the engineering team might own the product code but Infrastructure might be a different team and operations might be managed by a different vertical altogether.</p>
      <p>In 18 years of IT leadership, one of the reasons engineers struggle is that they don't develop a 360 view of the entire product/platform and its ecosystem — on the grounds of "we don't own that part." The only way to do a good job within your function is when you develop a sense of the entire lifecycle and ecosystem, as that will help develop deeper insights into how everything impacts what you do end up owning.</p>
      <h2>The 15-Point Checklist</h2>
      <p>Every engineer should have at least a basic understanding of the following aspects of any product or platform they support:</p>
      <h3>1. Business Purpose</h3><p>Why is the product/platform needed? What business problem does it specifically solve, and for whom?</p>
      <h3>2. Core Functionality</h3><p>What are all the core functionalities and features?</p>
      <h3>3. Users and Usage</h3><p>Who are the users, how do they use it, and what do they expect — for each user type?</p>
      <h3>4. Technical Underpinnings</h3><p>How is the system built, what infrastructure supports it, and how scalable and flexible is it to meet current and future needs?</p>
      <h3>5. Onboarding and Offboarding</h3><p>How do users get onboarded and offboarded from the platform?</p>
      <h3>6. Security and Governance</h3><p>How are the product, users, and data secured? What governance controls exist?</p>
      <h3>7. Logging</h3><p>Does the product have logging? What gets logged and where? Who reviews it, and do you have access to analyze it?</p>
      <h3>8. Monitoring and Alerts</h3><p>Are there monitors and alerts configured? What do they cover, and who receives and acts on them?</p>
      <h3>9. Vendor Management</h3><p>Is a vendor involved? If so, is a regular QBR (Quarterly Business Review) being conducted?</p>
      <h3>10. Cost and Licensing</h3><p>What does the product cost? What are the licenses? How has cost changed and how is it projected to change at scale?</p>
      <h3>11. Upgrades and End-of-Life</h3><p>How often does the platform go through upgrades? Who monitors and manages end-of-life cycles?</p>
      <h3>12. Patching and Security Hardening</h3><p>How and who manages patching and security hardening?</p>
      <h3>13. Roadmap and Vision</h3><p>What is the current roadmap, tech debt, and 3-year vision? Will this platform continue, retire, or modernize?</p>
      <h3>14. Documentation</h3><p>Do you have access to all documentation — features, system admin guides, design, architecture?</p>
      <h3>15. Dependencies</h3><p>What are all upstream and downstream dependencies — what systems provide input to and consume output from this platform?</p>
      <h2>How to Use This</h2>
      <p>Use this as an <strong>onboarding guide</strong> for engineers joining a new team, and as a <strong>gap identification checklist</strong> to shore up aspects that are not hardened today. Run through it quarterly. You will be surprised how many gaps surface even in mature teams.</p>
`
  }
,
  {
    id: 2,
    title: "Stepping into a Leadership Role: The First 30-45 Days",
    category: "Leadership & Team Building",
    date: "September 30, 2024",
    readTime: "6 min read",
    excerpt: "The first 30-45 days in a new leadership role set the tone for everything that follows. Most leaders get the balance wrong. Here is the checklist that works — regardless of domain or ecosystem.",
    body: `
      <p>Whether it's your first time or with a new team, taking on a leadership role comes with excitement and nerves. You're eager to get started, but there's always some apprehension about the unknown. In today's fast-paced world, where there's little time to settle in, the first 30-45 days are crucial for setting the tone for your success as a leader.</p>

      <p>In my experience, leaders often spend this initial onboarding phase in one of two extremes:</p>
      <ul>
        <li><strong>Focusing on technical knowledge:</strong> They dive deeply into learning every technical detail about the product, platform, or service their team supports.</li>
        <li><strong>Focusing on people:</strong> They invest heavily in getting to know the individuals on their team, aiming to understand everyone on a personal level.</li>
      </ul>
      <p>While neither of these approaches is inherently wrong — both are important in the long run — it's essential to remember that the first priority of any leader should be to grasp the team's portfolio, structure, and operations. Once this foundation is established, you can then continue to build expertise in the technical aspects and invest time in understanding your team members.</p>

      <h2>The Onboarding Checklist</h2>
      <p>Below is a checklist developed through experience onboarding new teams. These steps have proven effective regardless of the domain or ecosystem.</p>

      <h3>1. Organisational Overview</h3>
      <ul>
        <li><strong>The "Why":</strong> Understand the purpose and core mission of the organisation.</li>
        <li><strong>Values and Culture:</strong> Familiarise yourself with the organisation's core values and cultural norms.</li>
        <li><strong>Leadership Goals:</strong> Align with the leadership team on key objectives and desired outcomes.</li>
      </ul>

      <h3>2. Organisational Structure</h3>
      <ul>
        <li><strong>Org Chart:</strong> Review the organisational hierarchy and reporting structure.</li>
        <li><strong>Budget:</strong> Gain an understanding of budget allocation and historical annual burn rates.</li>
      </ul>

      <h3>3. Current State Analysis</h3>
      <ul>
        <li><strong>Vertical Ownership (Estate):</strong> Assess what the team currently owns and manages across different business verticals.</li>
        <li><strong>RACI Chart:</strong> Review the Responsibilities, Accountabilities, Consulted, and Informed chart for clarity on roles within the organisation and across verticals.</li>
        <li><strong>Roadmaps:</strong> Understand the current roadmap, tech debt, and future backlog.</li>
        <li><strong>Headcount Needs:</strong> Evaluate current headcount and determine if there are gaps or overages.</li>
        <li><strong>Talent Management (A/B/C Matrix):</strong> Analyse talent levels using an A/B/C categorisation to understand the team's strengths and development areas.</li>
      </ul>

      <h3>4. Operations and Workflow</h3>
      <ul>
        <li><strong>Work Intake:</strong> Understand how new work is brought into the team.</li>
        <li><strong>Capacity Planning:</strong> Review how capacity is planned and distributed across the team.</li>
        <li><strong>Policies, Operations, and Procedures:</strong> Review current operational processes — what is working and what isn't.</li>
        <li><strong>Risk Areas:</strong> Identify and document areas of potential risk.</li>
      </ul>

      <h3>5. KPIs and Branding</h3>
      <p>Establish metrics and reporting to measure and broadcast the progress and success of the team's deliverables.</p>

      <h2>Watch: Leadership Onboarding in Practice</h2>
      <p><em>Video coming soon — paste your YouTube link and it will appear here.</em></p>

`
  }
];