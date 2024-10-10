const testimonailData = [
  {
    name: "Sohaib",
    icon: "./assets/images/avatar-1.png",
    message:
      "Obaid was hired to create a corporate identity. We were very pleased with the work",
    explainedMessage:
      "Obaid was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    date: "14 June, 2024",
  },
  {
    name: "Noman",
    icon: "./assets/images/avatar-1.png",
    message:
      "Obaid was hired to create a corporate identity. We were very pleased with the work",
    explainedMessage:
      "Obaid was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    date: "14 June, 2024",
  },
  {
    name: "Jamal",
    icon: "./assets/images/avatar-1.png",
    message:
      "Obaid was hired to create a corporate identity. We were very pleased with the work",
    explainedMessage:
      "Obaid was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    date: "14 June, 2024",
  },
  {
    name: "Mujtaba",
    icon: "./assets/images/avatar-1.png",
    message:
      "Obaid was hired to create a corporate identity. We were very pleased with the work",
    explainedMessage:
      "Obaid was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    date: "14 June, 2024",
  },
];

const fetchPortfolio = async () => {
  try {
    const res = await fetch("https://obaidbro.vercel.app/api/projects");
    const data = await res.json();
    return data.success ? data.projects : [];
  } catch (error) {
    console.log(error.message);
  }
};

const fetchSkills = async () => {
  try {
    const res = await fetch("https://obaidbro.vercel.app/api/skills");
    const data = await res.json();
    return data.success ? data.skills : [];
  } catch (error) {
    console.log(error.message);
  }
};

export { testimonailData, fetchPortfolio, fetchSkills };
