const siteData = {
  navigation: [
    {
      label: "Public work",
      url: "#about"
    },
    {
      label: "Projects",
      url: "#selected-work"
    },
    {
      label: "Current",
      url: "#current"
    },
    {
      label: "Publications",
      url: "#publications"
    }
  ],
  hero: {
    title: "Dr. Tamas Fekete",
    summary:
      "This site is focused on my public causal AI work, including repositories, research directions, and related publications.",
    currentFocus: {
      title: "Causal AI for sustainability and decision support",
      copy:
        "The main focus here is causal discovery, causal inference, and intervention-oriented analysis in transportation, manufacturing, and related applied domains."
    }
  },
  about: [
    "This page collects publicly available work related to my causal AI research, with short context and links to the relevant repository or demo."
  ],
  focusAreas: [
    {
      tag: "Causal discovery",
      title: "Learning defensible causal structure",
      copy:
        "Studying how causal graphs can be learned from data in a way that is useful for explanation, intervention, and decision support."
    },
    {
      tag: "Causal inference",
      title: "Estimating effects beyond prediction",
      copy:
        "Using causal methods to ask what changes outcomes, not just what patterns appear in observational data."
    },
    {
      tag: "Applications",
      title: "Transport and manufacturing use cases",
      copy:
        "Applying causal AI to emissions, energy, cost, and sustainability questions in real applied settings."
    }
  ],
  selectedWork: [
    {
      slug: "cppcausality",
      title: "CPPCausality",
      summary:
        "High-performance C++ implementation of ontology-guided FCI for the transportation emissions work.",
      detail:
        "Focused on native ontology constraints and faster large-scale causal discovery.",
      links: [
        {
          label: "Open repository",
          url: "https://github.com/FTamas77/CPPCausality",
          external: true
        }
      ]
    },
    {
      slug: "causality",
      title: "Causality",
      summary:
        "Main Python repository for the ontology-guided transportation work.",
      detail:
        "Includes dataset documentation, GUI-based analysis, and causal discovery and inference workflows.",
      links: [
        {
          label: "Open repository",
          url: "https://github.com/FTamas77/Causality",
          external: true
        }
      ]
    },
    {
      slug: "theses-2025",
      title: "Theses_2025",
      summary:
        "A public repository used to demonstrate thesis-related material in an educational setting.",
      detail:
        "This is useful as a teaching and reference artifact when explaining the structure of research work, examples, and supporting material.",
      links: [
        {
          label: "Open repository",
          url: "https://github.com/FTamas77/Theses_2025",
          external: true
        }
      ]
    },
    {
      slug: "streamlit-app",
      title: "streamlit_app",
      summary:
        "An educational causal AI pipeline demo built to make intervention-oriented workflows easier to inspect and discuss.",
      detail:
        "The repository is paired with a public Streamlit deployment, so it works both as source code and as a live demonstrator.",
      links: [
        {
          label: "Open repository",
          url: "https://github.com/FTamas77/streamlit_app",
          external: true
        },
        {
          label: "Open live demo",
          url: "https://causalai.streamlit.app/",
          external: true
        }
      ]
    },
    {
      slug: "causal-image-demo",
      title: "causal-image-demo",
      summary:
        "A research-oriented prototype exploring causal ideas in image-related settings.",
      detail:
        "It represents the type of exploratory work that may not become a paper immediately, but still shows how research questions are tested in public and iterated in code.",
      links: [
        {
          label: "Open repository",
          url: "https://github.com/FTamas77/causal-image-demo",
          external: true
        }
      ]
    }
  ],
  current: {
    intro: [
      "Short notes on the causal AI directions that are currently most relevant in my work."
    ],
    items: [
      {
        tag: "Current direction",
        title: "Ontology-guided causal discovery",
        copy:
          "A current line of work uses ontology constraints and domain knowledge to improve causal discovery and reduce implausible graph structure."
      },
      {
        tag: "Application area",
        title: "Transport and manufacturing case studies",
        copy:
          "The main application areas here are transportation emissions, urban mobility, manufacturing sustainability, and industrial decision support."
      },
      {
        tag: "Research note",
        title: "Ontology-guided transport research",
        copy:
          "One active line of work connects domain knowledge, ontology constraints, and causal discovery for transportation emissions, with the broader goal of making structured AI systems more defensible."
      }
    ]
  },
  publications: [
    {
      meta: "Procedia CIRP, 2024",
      title:
        "Leveraging causal machine learning for sustainable automotive industry: Analyzing factors influencing CO2 emissions",
      authors: "Vahid Menu Nesro, Tamas Fekete, Hendro Wicaksono",
      note:
        "Causal machine learning applied to automotive CO2 emissions to identify the factors that most strongly influence outcomes."
    },
    {
      meta: "IEEE IEEM, 2024",
      title:
        "Causal AI in the Automotive Industry: Impact Analysis Through Carbon Emission Case Study",
      authors: "Syed Muhammad Ali Hashmi, Tamas Fekete, Hendro Wicaksono",
      note:
        "Conference paper on causal impact analysis in an automotive carbon-emissions case study."
    },
    {
      meta: "Procedia Computer Science, 2025",
      title:
        "From theory to practice: Implementing causal AI in manufacturing for sustainability",
      authors: "Heonyoung Jeong, Tamas Fekete, Atit Bashyal, Hendro Wicaksono",
      note:
        "Focuses on practical deployment questions for causal AI in manufacturing sustainability contexts."
    },
    {
      meta: "Sustainable Cities and Society, 2025",
      title:
        "Leveraging causal AI to uncover the dynamics in sustainable urban transport: A bike sharing time-series study",
      authors: "Tamas Fekete, Girum Mengistu, Hendro Wicaksono",
      note:
        "Time-series causal analysis of bike-sharing dynamics for sustainable urban transport."
    },
    {
      meta: "PhD Thesis, Jacobs University Bremen, 2025",
      title:
        "Causal AI for Smart Decision-Making: Driving Sustainability in Urban Mobility and Industry",
      authors: "Tamas Fekete",
      note:
        "Thesis bringing together the broader causal AI agenda across transportation, manufacturing, and sustainability."
    },
    {
      meta: "International Journal of Production Research, 2025",
      title:
        "A comprehensive causal AI framework for analysing factors affecting energy consumption and costs in customised manufacturing",
      authors: "Tamas Fekete, Isabella Marquez Petrone, Hendro Wicaksono",
      note:
        "Journal article on a broader causal AI framework for energy and cost analysis in customised manufacturing."
    },
    {
      meta: "International Journal of Sustainable Transportation, 2025",
      title:
        "Ontology-guided causal discovery and inference for reducing CO2 emissions in transportation",
      authors: "Tamas Fekete, Hendro Wicaksono",
      note:
        "Ontology-guided causal discovery and inference for transportation emissions, with domain constraints used to improve graph quality."
    }
  ]
};
