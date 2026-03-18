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
      tag: "Implementation",
      name: "CPPCausality",
      copy:
        "C++ ontology-guided FCI implementation linked from the same publication for faster large-scale causal discovery.",
      url: "https://github.com/FTamas77/CPPCausality/blob/main/README.md",
      linkLabel: "Open implementation README"
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
    "Overview of causal AI research directions, example repositories, and selected publications."
};
