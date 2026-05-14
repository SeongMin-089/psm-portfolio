// src/data/footer.data.js
const footer = {
  brand: {
    name: "LOGO",
    logo: "/img/logo.svg", // public/img/logo.svg 기준
    copy: `${new Date().getFullYear()} ParkSeongMin PortFolio.`,
  },
  links: [
    {
      icon: "link", // material-icons 기준
      label: "GitHub",
      value: "github.com/SeongMin-089",
      href: "https://github.com/SeongMin-089",
    },
    {
      icon: "link",
      label: "Notion",
      value: "notion.site/portfolio",
      href: "https://www.notion.so/35681c8faa33805595a7d089de178d8e?source=copy_link",
    },
    // {
    //   icon: "link",
    //   label: "LinkedIn",
    //   value: "linkedin.com/in/username",
    //   href: "https://linkedin.com/in/username",
    // },
  ],
};

export default footer;
