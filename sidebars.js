// ESM default export (géén module.exports)
export default {
  docs: [
    "index",
    {
      type: "category",
      label: "Architecture",
      items: ["architecture/overview"],
    },
    {
      type: "category",
      label: "Extensibility",
      items: [
        "extensibility/adapters",
        "extensibility/filters-registry",
        "extensibility/report-registry",
      ],
    },
    {
      type: "category",
      label: "Security",
      items: [
        "security/security",
        "security/threat-model",
        "security/a11y-checklist",
      ],
    },
    {
      type: "category",
      label: "Testing",
      items: ["testing/strategy", "testing/results"],
    },
    {
      type: "category",
      label: "SDLC",
      items: ["sdlc/sdlc"],
    },
    {
      type: "category",
      label: "Theming",
      items: ["theming/theming-guide"],
    },
    {
      type: "category",
      label: "Product",
      items: ["product/roadmap", "product/personas", "product/metrics"],
    },
    {
      type: "category",
      label: "Meta",
      items: ["meta/contributing", "meta/changelog", "meta/lessons-learned"],
    },
    {
      type: "category",
      label: "API (jsdocs)",
      items: ["api/js/js-api"],
    },
    {
      type: "html",
      value: '<a href="/jsdoc/" target="_self" rel="noopener">JSDoc (HTML)</a>',
    },
  ],
};
