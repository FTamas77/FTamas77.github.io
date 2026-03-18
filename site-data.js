const siteData = {
  hero: {
    eyebrow: "Causal AI",
    title: "Dr. Tamas Fekete",
    summary:
      "Research on causal AI for intervention, explanation, and decision support in sustainability, transportation, and manufacturing."
  },
  overview: [
    "Causal AI is useful when the goal is not only to predict what will happen, but to understand what changes outcomes and which actions are likely to work under real-world constraints.",
    "This direction is developed across my PhD thesis, Causal AI for Smart Decision-Making: Driving Sustainability in Urban Mobility and Industry, and the related papers on manufacturing sustainability, urban transport, and ontology-guided causal discovery and inference for transportation emissions."
  ],
  diagram: [
    {
      tag: "1",
      title: "Observation",
      copy:
        "Start from data, variables, and domain context rather than from prediction alone."
    },
    {
      tag: "2",
      title: "Causal structure",
      copy:
        "Use causal graphs and structured knowledge to separate plausible drivers from spurious correlations."
    },
    {
      tag: "3",
      title: "Decision support",
      copy:
        "Estimate interventions, compare scenarios, and support action under uncertainty."
    }
  ],
  compare: [
    {
      tag: "Predictive AI",
      title: "What is likely to happen?",
      points: [
        "Optimized for forecasting from patterns in data",
        "Strong for classification and prediction tasks",
        "Limited when the question is about action or intervention"
      ]
    },
    {
      tag: "Causal AI",
      title: "What happens if we change something?",
      points: [
        "Focuses on causes, interventions, and counterfactuals",
        "Uses assumptions, structure, and domain knowledge explicitly",
        "Better aligned with decision support and policy questions"
      ]
    }
  ],
  caseStudy: {
    copy: [
      "A concrete example is the vehicle emissions study behind the paper Ontology-guided causal discovery and inference for reducing CO2 emissions in transportation. The dataset comes from the Hungarian Ministry of Construction and Transport and contains technical inspection records for passenger vehicles.",
      "The analysis combines causal discovery, ontology constraints, and causal inference to study how cylinder capacity, engine power, and other technical attributes drive CO2 emissions. The point is not only to find correlations, but to remove physically implausible edges and support counterfactual and policy-oriented questions."
    ],
    stats: [
      {
        label: "Dataset",
        value: "463,568 vehicles",
        copy: "Cross-sectional passenger vehicle records from technical inspections."
      },
      {
        label: "Scope",
        value: "Hungary, 2023",
        copy: "Inspection data covering vehicle categories M1, M1G, N1, and N1G."
      },
      {
        label: "Goal",
        value: "CO2 causal drivers",
        copy: "Estimate which technical factors materially influence emissions."
      }
    ],
    graphNodes: [
      {
        tag: "Driver",
        title: "Cylinder capacity"
      },
      {
        tag: "Mediator",
        title: "Engine power"
      },
      {
        tag: "Outcome",
        title: "CO2 emissions"
      }
    ],
    referenceEdges: [
      "Cylinder capacity -> Engine power",
      "Cylinder capacity -> CO2 emissions",
      "Engine power -> CO2 emissions"
    ],
    forbiddenEdges: [
      "Passing noise -> CO2 emissions",
      "CO2 emissions -> Cylinder capacity"
    ],
    results: [
      "The key result reported in the paper is that ontology constraints improved F1 from 0.67 to 0.78 and removed spurious edges. In practice this means the graph becomes more defensible, not just statistically convenient.",
      "The same setup also supports causal effect estimation and what-if analysis, for example testing how engine specifications or specific power relate to emissions under a causal interpretation rather than a purely predictive one."
    ],
    metrics: [
      {
        algorithm: "PC baseline",
        f1: "0.67",
        precision: "0.65",
        recall: "0.69",
        spurious: "2"
      },
      {
        algorithm: "FCI + ontology",
        f1: "0.78",
        precision: "0.82",
        recall: "0.75",
        spurious: "0"
      },
      {
        algorithm: "GES",
        f1: "0.71",
        precision: "0.73",
        recall: "0.69",
        spurious: "1"
      }
    ]
  },
  repositories: [
    {
      tag: "Link in paper",
      name: "Causality",
      copy:
        "Vehicle emissions dataset and reproduction guide referenced in the ontology-guided transportation paper.",
      url: "https://github.com/FTamas77/Causality/blob/develop/datasets/vehicles/README.md",
      linkLabel: "Open dataset README"
    },
    {
      tag: "Python GUI",
      name: "cross-sectional-proc",
      copy:
        "Interactive Python GUI with DoWhy-based inference, result comparison, and publication-oriented visual analysis.",
      url: "https://github.com/FTamas77/Causality/blob/develop/cross-sectional-proc/README.md",
      linkLabel: "Open GUI README"
    },
    {
      tag: "C++ implementation",
      name: "CPPCausality",
      copy:
        "Ontology-guided FCI implementation for larger-scale discovery and faster execution.",
      url: "https://github.com/FTamas77/CPPCausality",
      linkLabel: "Open repository"
    },
    {
      tag: "Feature selection",
      name: "feature-selection",
      copy:
        "Supporting material for selecting relevant variables before causal analysis.",
      url: "https://github.com/FTamas77/Causality/blob/develop/feature-selection/README.md",
      linkLabel: "Open README"
    },
    {
      tag: "Time series",
      name: "time-series-proc",
      copy:
        "Time-series analysis path linked from the same Causality repository.",
      url: "https://github.com/FTamas77/Causality/blob/develop/time-series-proc/README.md",
      linkLabel: "Open README"
    }
  ],
  publications: [
    {
      meta: "Procedia CIRP, 2024",
      title:
        "Leveraging causal machine learning for sustainable automotive industry: Analyzing factors influencing CO2 emissions",
      authors: "Vahid Menu Nesro, Tamas Fekete, Hendro Wicaksono"
    },
    {
      meta: "IEEE IEEM, 2024",
      title:
        "Causal AI in the Automotive Industry: Impact Analysis Through Carbon Emission Case Study",
      authors: "Syed Muhammad Ali Hashmi, Tamas Fekete, Hendro Wicaksono"
    },
    {
      meta: "Procedia Computer Science, 2025",
      title:
        "From theory to practice: Implementing causal AI in manufacturing for sustainability",
      authors: "Heonyoung Jeong, Tamas Fekete, Atit Bashyal, Hendro Wicaksono"
    },
    {
      meta: "Sustainable Cities and Society, 2025",
      title:
        "Leveraging causal AI to uncover the dynamics in sustainable urban transport: A bike sharing time-series study",
      authors: "Tamas Fekete, Girum Mengistu, Hendro Wicaksono"
    },
    {
      meta: "PhD Thesis, 2025",
      title:
        "Causal AI for Smart Decision-Making: Driving Sustainability in Urban Mobility and Industry",
      authors: "Tamas Fekete"
    },
    {
      meta: "International Journal of Production Research, 2025",
      title:
        "A comprehensive causal AI framework for analysing factors affecting energy consumption and costs in customised manufacturing",
      authors: "Tamas Fekete, Isabella Marquez Petrone, Hendro Wicaksono"
    },
    {
      meta: "International Journal of Sustainable Transportation, 2025",
      title:
        "Ontology-guided causal discovery and inference for reducing CO2 emissions in transportation",
      authors: "Tamas Fekete, Hendro Wicaksono"
    }
  ],
  footer:
    "Overview of causal AI research directions, an ontology-guided transport case study, linked resources, and selected publications."
};
