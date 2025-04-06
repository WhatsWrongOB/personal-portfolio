const testimonailData = [
  {
    name: "Hamid",
    icon: "https://obaidbroimages.netlify.app/avatar-1.png",
    message:
      "Obaid developed a custom inventory management system for my business. Seamless experience.",
    explainedMessage:
      "Obaid developed a custom inventory management system for my business. The experience was seamless and professional. He understood our business needs, automated critical stock processes, and made tracking effortless. His attention to detail and dedication to client satisfaction really stood out. Highly recommended for anyone needing a reliable solution.",
    date: "10 Jan, 2025",
  },
  {
    name: "David",
    icon: "https://obaidbroimages.netlify.app/avatar-1.png",
    message:
      "Obaid built a Next.js form integration for my GHL project. He nailed it with speed and precision.",
    explainedMessage:
      "Obaid built a Next.js form integration for my Go High Level (GHL) project. He nailed it with speed and precision. The form submission and backend logic were perfectly handled. He's technically strong and communicates clearly, which made the entire experience smooth and efficient. Would gladly work with him again.",
    date: "25 Feb, 2025",
  },
  {
    name: "Aneeb",
    icon: "https://obaidbroimages.netlify.app/avatar-1.png",
    message:
      "Obaid developed a complete Smart School System tailored for our needs. Works smoothly.",
    explainedMessage:
      "Obaid developed a complete Smart School System tailored for our needs. Everything works smoothly and efficiently. From student records to attendance, fee tracking, and reporting – he covered it all. He’s very responsive to feedback and delivers quality on time. Great experience working with him on this project.",
    date: "03 February, 2025",
  },
  {
    name: "Sohaib",
    icon: "https://obaidbroimages.netlify.app/avatar-1.png",
    message:
      "Obaid developed a rental car website for us. The functionality were exactly what we needed.",
    explainedMessage:
      "Obaid developed a rental car website for us. The design and functionality were exactly what we needed. He built a user-friendly platform with real-time booking features and a clean UI. His work ethic and ability to translate requirements into a working solution were outstanding. We're very happy with the final product.",
    date: "20 Dec, 2024",
  }  
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
