export const profile = {
  name: "Victor Udoka Anene",
  shortName: "Victor Anene",
  roleSummary: "Product leadership & venture building",
  websiteUrl: "https://victoranene.com",
  phoneDisplay: "+234 (0) 8084619757",
  phoneHref: "tel:+2348084619757",
  email: "anenevictor@1133incubators.com",
  businessContactEmail: "bookacall@avalstech.com",
  whatsappUrl:
    "https://wa.me/2348084619757?text=Hi%20Victor%2C%20I%20found%20your%20website%20and%20would%20love%20to%20connect.",
  socials: {
    linkedin: "https://www.linkedin.com/in/victorudokaanene/",
    twitter: "https://x.com/UdokaAnene",
    youtube: "https://www.youtube.com/@anenevictorudoka7080",
    instagram: "https://www.instagram.com/udokacares/",
    github: "https://github.com/avalstech",
  },
} as const;

export const profileLinks = {
  email: `mailto:${profile.email}`,
  businessContactEmail: `mailto:${profile.businessContactEmail}`,
} as const;
