export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  number: string;
  summary: string;
  intro: string;
  image: string;
  alt: string;
  features: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "landscaping-decks",
    title: "Landscaping & Decks",
    shortTitle: "Landscaping & Decks",
    number: "01",
    summary: "Outdoor spaces designed for real life, from custom decks to hardscaping and complete landscape transformations.",
    intro: "We create outdoor spaces that feel connected to your home and genuinely useful year-round. Our team can take care of the structure, surfaces and finishing details as one coordinated build.",
    image: "/images/service-landscaping.webp",
    alt: "Large timber deck framing under construction",
    features: ["Custom timber and composite decks", "Outdoor living areas", "Hardscaping and pathways", "Landscape construction"],
    outcomes: ["One team for the complete outdoor build", "Durable materials selected for local conditions", "Practical layouts shaped around how you live"],
  },
  {
    slug: "commercial-rural",
    title: "Light Commercial & Rural",
    shortTitle: "Commercial & Rural",
    number: "02",
    summary: "Well-managed, durable building solutions for light commercial spaces, rural structures and operational sites.",
    intro: "Structec brings the same hands-on care to commercial and rural work as we do to every home. We plan around access, durability and the day-to-day needs of the people who will use the building.",
    image: "/images/service-commercial.webp",
    alt: "Completed multi-unit development at dusk",
    features: ["Light commercial builds", "Rural construction", "Steel and timber framing", "Fit-outs and alterations"],
    outcomes: ["Clear programming and site coordination", "Construction shaped around operational needs", "Robust materials and considered detailing"],
  },
  {
    slug: "recladding",
    title: "Recladding",
    shortTitle: "Recladding",
    number: "03",
    summary: "Modern cladding systems that refresh your property while improving weather protection and structural confidence.",
    intro: "A successful reclad is about much more than a new exterior. We carefully assess the existing envelope, resolve underlying issues and install a complete system designed to perform for years to come.",
    image: "/images/service-recladding.webp",
    alt: "Long building receiving new exterior cladding",
    features: ["Fibre-cement cladding", "Modern façade systems", "Weather-tightness upgrades", "Exterior repairs and remediation"],
    outcomes: ["A clear assessment before work begins", "Careful detailing around openings and junctions", "A sharper exterior with better protection"],
  },
  {
    slug: "renovations",
    title: "Renovations",
    shortTitle: "Renovations",
    number: "04",
    summary: "Thoughtful renovations and extensions that improve the way an existing home or workplace feels and functions.",
    intro: "Whether you are updating one important space or reworking an entire property, we balance new ideas with the realities of the existing building to deliver a result that feels intentional.",
    image: "/images/service-renovations.webp",
    alt: "Architectural interior renovation with concrete fireplace",
    features: ["Whole-home renovations", "Kitchen and bathroom upgrades", "Extensions and additions", "Commercial alterations"],
    outcomes: ["Realistic planning around existing conditions", "Consistent communication while work is underway", "New and existing details brought together cleanly"],
  },
  {
    slug: "reroofing",
    title: "Reroofing",
    shortTitle: "Reroofing",
    number: "05",
    summary: "Reliable reroofing solutions that improve durability, weather resistance and the long-term security of your property.",
    intro: "We replace ageing or underperforming roofs with carefully detailed systems suited to the building and local environment, while keeping disruption controlled and the site well managed.",
    image: "/images/service-reroofing.webp",
    alt: "Contemporary home roof under construction",
    features: ["Long-run metal roofing", "Roof replacement", "Flashing and rainwater systems", "Weatherproofing upgrades"],
    outcomes: ["A straightforward assessment and scope", "Safe, tidy and coordinated site work", "A durable roof finished to a high standard"],
  },
  {
    slug: "residential-builds",
    title: "Residential Builds",
    shortTitle: "Residential Builds",
    number: "06",
    summary: "Custom homes and additions built around your site, your priorities and the way you want to live.",
    intro: "From early planning through to handover, Structec makes the residential building process clear and collaborative. We bring practical guidance, honest communication and close attention to every finish.",
    image: "/images/service-residential.webp",
    alt: "Contemporary residential build nearing completion",
    features: ["Custom new homes", "Architectural builds", "Home additions", "Energy-conscious construction"],
    outcomes: ["Hands-on support from first conversation to handover", "Reliable coordination across every trade", "Craftsmanship that holds up in the details"],
  },
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);

export const projects = [
  { title: "Architectural builds", category: "Residential", image: "/images/architectural-build.jpg" },
  { title: "Multi-unit framing", category: "Residential", image: "/images/structec-roof-framing.png" },
  { title: "Outdoor living", category: "Renovation", image: "/images/structec-landscaping.png" },
  { title: "Commercial interiors", category: "Commercial", image: "/images/structec-interior-detail.png" },
  { title: "Residential development", category: "Residential", image: "/images/service-commercial.webp" },
  { title: "Complete home builds", category: "Residential", image: "/images/service-residential.webp" },
];
