const siteData = {
  hero: {
    eyebrow: "Tamas Fekete | Causal AI",
    title: "Causal AI work focused on defensible decisions, not just predictions.",
    summary:
      "This page collects a small set of public repositories and the current publication entry point for theory-first causal workflows, causal discovery, and inference.",
    primaryLink: {
      label: "Open GitHub profile",
      url: "https://github.com/FTamas77"
    },
    secondaryLink: {
      label: "Browse repositories",
      url: "#repositories"
    }
  },
  focus:
    "The goal is simple: one clean public page that points to the most relevant Causal AI work without mixing a personal showcase into the implementation repositories themselves.",
  repositories: [
    {
      tag: "Framework",
      name: "causal-graph-framework",
      description:
        "Theory-first causal discovery and inference framework with explicit knowledge integration, workflow design, and artifact-oriented documentation.",
      url: "https://github.com/FTamas77/causal-graph-framework"
    },
    {
      tag: "Agent Lab",
      name: "causal-agent-lab",
      description:
        "A compact lab repository for experimenting with causal agents and agent-oriented causal workflow execution.",
      url: "https://github.com/FTamas77/causal-agent-lab"
    }
  ],
  publication: {
    meta: "Publication entry",
    title: "Add the current paper or preprint here",
    summary:
      "Replace this block with the publication title, venue, and URL as soon as the public paper, preprint, or project page is ready.",
    label: "Open paper",
    url: ""
  },
  pillars: [
    {
      title: "Theory-first",
      copy:
        "The starting point is a defensible causal workflow, not a model demo detached from assumptions or identifiability."
    },
    {
      title: "Knowledge-aware",
      copy:
        "Domain constraints and prior knowledge are treated as first-class inputs instead of afterthought documentation."
    },
    {
      title: "Decision-oriented",
      copy:
        "The target is intervention and counterfactual reasoning for practical decision support, especially where prediction is not enough."
    }
  ],
  footer:
    "Minimal static site for GitHub Pages. Edit site-data.js to swap repositories, add a publication, or change the positioning copy."
};
