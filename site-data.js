const siteData = {
  owner: {
    name: "Dr. Tamas Fekete",
    tagline: "Causal AI Researcher & Engineer",
    credential: "PhD · Constructor University, Bremen, Germany",
  },

  social: [
    {
      label: "Email",
      url: "mailto:tfekete@constructor.university",
      icon: "email",
    },
    { label: "GitHub", url: "https://github.com/FTamas77", icon: "github" },
    {
      label: "mira Platform",
      url: "https://mira-ai-platform.vercel.app/",
      icon: "platform",
    },
    {
      label: "PhD Thesis",
      url: "https://opus.constructor.university/frontdoor/index/index/docId/1307",
      icon: "thesis",
    },
  ],

  navigation: [
    { label: "About", url: "#about" },
    { label: "Why It Matters", url: "#why-it-matters" },
    { label: "Projects", url: "#selected-work" },
    { label: "Publications", url: "#publications" },
  ],

  hero: {
    title: "Causal AI for Industrial Intelligence",
    subtitle:
      "Building platforms, open-source tools, and peer-reviewed research that turn causal discovery and counterfactual reasoning into actionable evidence for manufacturing, transport, and sustainability.",
  },

  about: [
    "My public work centres on three threads: ontology-guided causal structure learning, intervention-oriented effect analysis, and deployment paths for industrial time-series data.",
    "The industrial angle is practical — backed by over 15 years of hands-on engineering experience in industrial automation and software development, the focus is on causal outputs that integrate with process data, operator workflows, and automation environments such as Siemens SIMATIC WinCC Unified.",
    "This site is the home for all my causal AI work — platforms, tools, papers, and whatever comes next.",
  ],
  focusAreas: [
    {
      tag: "Causal discovery",
      title: "Ontology-guided structure learning",
      copy: "Using domain knowledge and constraints to reduce implausible graphs and make learned structure easier to defend.",
    },
    {
      tag: "Causal inference",
      title: "Intervention-oriented effect analysis",
      copy: "Estimating which variables drive outcomes and comparing plausible changes before acting on real systems.",
    },
    {
      tag: "Industrial integration",
      title: "From causal models to plant workflows",
      copy: "Connecting causal outputs to data pipelines, operator interfaces, and Siemens SIMATIC WinCC Unified integration paths.",
    },
    {
      tag: "Agentic workflows",
      title: "Agents for causal exploration",
      copy: "Using agents to surface hypotheses, inspect variables, and guide what-if analysis without losing the causal reasoning thread.",
    },
    {
      tag: "Applications",
      title: "Applied industrial and transport cases",
      copy: "Work spans emissions, urban mobility, manufacturing sustainability, energy use, cost drivers, and operational choices.",
    },
  ],

  whyItMatters: {
    intro:
      "Even with strong instrumentation and data availability, teams still struggle with slow root-cause analysis, wrong intervention focus, hidden trade-offs, and unmodeled operational drivers. Correlations highlight patterns, but they do not show which factors actually drive the outcome.",
    painPoints: [
      {
        icon: "search",
        title: "Slow root-cause analysis",
        desc: "Many signals, unclear causes, long investigation cycles.",
      },
      {
        icon: "target",
        title: "Wrong intervention focus",
        desc: "The most visible variable is often a consequence, not the real lever.",
      },
      {
        icon: "tradeoff",
        title: "Hidden trade-offs",
        desc: "Local improvements can damage stability, quality, or throughput elsewhere.",
      },
      {
        icon: "blind",
        title: "Unmodeled drivers",
        desc: "Important factors exist in operations but are never treated explicitly.",
      },
    ],
    genaiPositioning: {
      title: "GenAI and Causal AI — different roles",
      causalRole:
        "Causal AI is the decision-support engine: it builds the causal model, evaluates candidate actions, and identifies realistic interventions under real-world constraints.",
      genaiRole:
        "GenAI is the interface layer: it helps users explore, explain, and work with results — while staying grounded in validated causal outputs.",
    },
    examples: [
      {
        tag: "Manufacturing",
        title: "Scrap instability driven by workflow factors",
        symptom:
          "Recurring scrap peaks and rising downtime despite stable primary signals.",
        correlationAction: "Reduce speed by 8%",
        correlationResult: "Scrap 4.9% → 4.6%, throughput −6%",
        causalAction:
          "Improve handover quality, onboarding, and override policy",
        causalResult: "Scrap 4.9% → 2.2%, downtime −12%, throughput +4%",
        insight:
          "The causal model reveals that speed is a downstream consequence of shift pressure — the real lever is in process discipline and operator context.",
      },
      {
        tag: "Industrial Software",
        title: "Outage variance driven by release workflow",
        symptom:
          "High outage variance for the same build, influenced by rollout timing and on-call load.",
        correlationAction: "Increase timeout or add retries",
        correlationResult: "Outage 3.2 → 2.9 hrs/week, slower UX",
        causalAction:
          "Rollout window policy, pre-checks, workload spike reduction",
        causalResult: "Outage 3.2 → 1.1 hrs/week, MTTR −35%",
        insight:
          "The causal model shows that timeout and retry are intermediate variables — the real driver is on-call workload and release workflow context.",
      },
    ],
  },
  selectedWork: [
    {
      slug: "mira-ai-platform",
      title: "mira AI platform",
      type: "Platform",
      featured: true,
      featuredLabel: "Flagship industrial causal AI platform",
      image: {
        src: "./assets/mira-industrial-causal-workspace.png",
        alt: "mira AI Platform — Industrial Causal Workspace",
      },
      summary:
        "A flagship industrial causal AI workspace for asking counterfactual questions, narrowing the search space, and turning process data into evidence for decisions.",
      detail:
        "mira brings together causal discovery, agent-assisted analysis, and industrial integration for process and manufacturing environments.",
      highlights: [
        "Explainable causal models for concrete decision questions",
        "Estimated intervention impact with uncertainty and assumptions",
        "Feasible intervention options within operational constraints",
        "Validation-aware decision support with robustness checks",
        "Knowledge and evidence traceability for audit and reuse",
      ],
      links: [
        {
          label: "Open platform / request account",
          url: "https://mira-ai-platform.vercel.app/",
          external: true,
        },
      ],
    },
    {
      slug: "cppcausality",
      title: "CPPCausality",
      type: "C++ Library",
      summary:
        "High-performance C++ implementation of ontology-guided FCI for the transportation emissions work.",
      detail:
        "Focused on native ontology constraints, domain-informed graph structure, and faster large-scale causal discovery for transport and industrial decision support.",
      links: [
        {
          label: "Open repository",
          url: "https://github.com/FTamas77/CPPCausality",
          external: true,
        },
      ],
    },
    {
      slug: "causality",
      title: "Causality",
      type: "Python",
      summary:
        "Main Python repository for the ontology-guided transportation work.",
      detail:
        "Includes dataset documentation, GUI-based analysis, causal discovery, causal inference, and intervention-oriented workflows for emissions and mobility analysis.",
      links: [
        {
          label: "Open repository",
          url: "https://github.com/FTamas77/Causality",
          external: true,
        },
      ],
    },
    {
      slug: "theses-2025",
      title: "Theses_2025",
      type: "Teaching",
      summary:
        "A public repository used to demonstrate thesis-related material in an educational setting.",
      detail:
        "This is useful as a teaching and reference artifact when explaining the structure of research work, examples, and supporting material.",
      links: [
        {
          label: "Open repository",
          url: "https://github.com/FTamas77/Theses_2025",
          external: true,
        },
      ],
    },
    {
      slug: "streamlit-app",
      title: "streamlit_app",
      type: "Live Demo",
      summary:
        "An educational causal AI pipeline demo built to make intervention-oriented workflows easier to inspect and discuss.",
      detail:
        "The repository is paired with a public Streamlit deployment, so it works both as source code and as a live demonstrator.",
      links: [
        {
          label: "Open repository",
          url: "https://github.com/FTamas77/streamlit_app",
          external: true,
        },
        {
          label: "Open live demo",
          url: "https://causalai.streamlit.app/",
          external: true,
        },
      ],
    },
    {
      slug: "causal-image-demo",
      title: "causal-image-demo",
      type: "Prototype",
      summary:
        "A research-oriented prototype exploring causal ideas in image-related settings.",
      detail:
        "It represents the type of exploratory work that may not become a paper immediately, but still shows how research questions are tested in public and iterated in code.",
      links: [
        {
          label: "Open repository",
          url: "https://github.com/FTamas77/causal-image-demo",
          external: true,
        },
      ],
    },
  ],
  publications: [
    {
      meta: "Procedia CIRP, 2024",
      title:
        "Leveraging causal machine learning for sustainable automotive industry: Analyzing factors influencing CO2 emissions",
      authors: "Vahid Menu Nesro, Tamas Fekete, Hendro Wicaksono",
      note: "Causal machine learning applied to automotive CO2 emissions to identify the factors that most strongly influence outcomes.",
      url: "https://www.sciencedirect.com/science/article/pii/S2212827124012241",
    },
    {
      meta: "IEEE IEEM, 2024",
      title:
        "Causal AI in the Automotive Industry: Impact Analysis Through Carbon Emission Case Study",
      authors: "Syed Muhammad Ali Hashmi, Tamas Fekete, Hendro Wicaksono",
      note: "Conference paper on causal impact analysis in an automotive carbon-emissions case study.",
      url: "https://ieeexplore.ieee.org/abstract/document/10857175",
    },
    {
      meta: "Procedia Computer Science, 2025",
      title:
        "From theory to practice: Implementing causal AI in manufacturing for sustainability",
      authors: "Heonyoung Jeong, Tamas Fekete, Atit Bashyal, Hendro Wicaksono",
      note: "Focuses on practical deployment questions for causal AI in manufacturing sustainability contexts.",
      url: "http://dx.doi.org/10.1016/j.procs.2025.01.211",
    },
    {
      meta: "Sustainable Cities and Society, 2025",
      title:
        "Leveraging causal AI to uncover the dynamics in sustainable urban transport: A bike sharing time-series study",
      authors: "Tamas Fekete, Girum Mengistu, Hendro Wicaksono",
      note: "Time-series causal analysis of bike-sharing dynamics for sustainable urban transport.",
      url: "http://dx.doi.org/10.1016/j.scs.2025.106240",
    },
    {
      meta: "PhD Thesis, Jacobs University Bremen, 2025",
      title:
        "Causal AI for Smart Decision-Making: Driving Sustainability in Urban Mobility and Industry",
      authors: "Tamas Fekete",
      note: "Thesis bringing together the broader causal AI agenda across transportation, manufacturing, and sustainability.",
      url: "https://opus.constructor.university/frontdoor/index/index/docId/1307",
    },
    {
      meta: "International Journal of Production Research, 2025",
      title:
        "A comprehensive causal AI framework for analysing factors affecting energy consumption and costs in customised manufacturing",
      authors: "Tamas Fekete, Isabella Marquez Petrone, Hendro Wicaksono",
      note: "Journal article on a broader causal AI framework for energy and cost analysis in customised manufacturing.",
      url: "http://dx.doi.org/10.1080/00207543.2025.2580541",
    },
    {
      meta: "International Journal of Sustainable Transportation, 2025",
      title:
        "Ontology-guided causal discovery and inference for reducing CO2 emissions in transportation",
      authors: "Tamas Fekete, Hendro Wicaksono",
      note: "Ontology-guided causal discovery and inference for transportation emissions, with domain constraints used to improve graph quality.",
      url: "http://dx.doi.org/10.1080/15568318.2025.2588608",
    },
    {
      meta: "Procedia Computer Science, 2026",
      title:
        "Toward Explainable and Sustainable Manufacturing: Benchmarking Causal Discovery on Process Duration and Energy Use",
      authors: "Merin Vinod Jacob, Tamas Fekete, Hendro Wicaksono",
      note: "Benchmarks causal discovery methods for process duration and energy use in manufacturing, with emphasis on explainability and sustainability.",
      url: "http://dx.doi.org/10.1016/j.procs.2026.02.054",
    },
  ],
};
