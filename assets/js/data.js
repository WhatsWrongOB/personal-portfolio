const skillsData = [
  {
    icon: "./assets/images/html.svg",
    name: "Html",
    description:
      "Proficient in writing semantic HTML and creating well-structured web pages",
    proficiency: "85",
    detailedDescription:
      "Obaid was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    icon: "./assets/images/css.svg",
    name: "Css",
    description:
      "Skilled in responsive design, using Flexbox and creating animations",
    proficiency: "80",
  },
  {
    icon: "./assets/images/sass.svg",
    name: "Sass",
    description:
      "Experienced in using SASS for writing maintainable and reusable styles",
    proficiency: "70",
  },
  {
    icon: "./assets/images/tailwind.svg",
    name: "Tailwind css",
    description:
      "Proficient in using Tailwind CSS for rapid UI development, creating utility-first style",
    proficiency: "70",
  },
  {
    icon: "./assets/images/js.svg",
    name: "Javascript",
    description: "Strong understanding of ES6+ features and, DOM manipulation",
    proficiency: "70",
  },
  {
    icon: "./assets/images/ts.svg",
    name: "TypeScript",
    description:
      "Strong proficiency in using TypeScript for static typing, enhancing code quality",
    proficiency: "70",
  },
  {
    icon: "./assets/images/react.svg",
    name: "ReactJS",
    description: "Skilled in building dynamic user interfaces",
    proficiency: "70",
  },
  {
    icon: "./assets/images/node.svg",
    name: "NodeJS",
    description:
      "Competent in building server-side applications and handling async operations.",
    proficiency: "60",
  },
  {
    icon: "./assets/images/express.svg",
    name: "ExpressJS",
    description:
      "Proficient in setting up routing, middleware, and creating RESTful APIs",
    proficiency: "60",
  },
  {
    icon: "./assets/images/mongo.svg",
    name: "MongoDB",
    description: "Experienced in using MongoDB for managing NoSQL databases,",
    proficiency: "55",
  },
  {
    icon: "./assets/images/git.svg",
    name: "Version Control",
    description:
      "Knowledgeable in using Git and GitHub for version control and collaboration.",
    proficiency: "60",
  },
];

const portfolioData1 = [
  {
    name: "⚙️ Express App Generator",
    image: "./assets/images/project-9.png",
    link: "https://github.com/WhatsWrongOB/express-app-generator",
    description:
      "🚀 npx create-ob-app is a powerful CLI tool that simplifies the process of generating a fully functional Express.js application. It supports various configurations, enabling developers to tailor their setup according to specific project requirements. With options for middleware, and environmental configurations, this tool saves significant time and effort.",
    tech: "🟡 JavaScript, Node.js",
    type: "CLI",
  },
  {
    name: "🛒 E-commerce Platform",
    image: "./assets/images/project-1.jpg",
    link: "https://github.com/WhatsWrongOB/mern-ecommerce",
    description:
      "🌐 Developed a full-featured e-commerce platform using the MERN stack. This platform supports comprehensive product management, from browsing and filtering products to purchasing and order tracking. The user experience is enhanced by dynamic product recommendations, an intuitive shopping cart system, and secure payment gateways",
    tech: "⚛️ React, 🟢 Node.js, Express, MongoDB",
    type: "Web Development",
  },
  {
    name: "📚 LMS Backend",
    image: "./assets/images/project-2.png",
    link: "https://github.com/WhatsWrongOB/lms-server-typescript",
    description:
      "🔧 Built the backend of a Learning Management System (LMS) using modern technologies such as Node.js, Express, and MongoDB. The system enables users to enroll in courses. The backend architecture ensures robust authentication, course management, and real-time notifications. Admins can manage courses, users, and assignments",
    tech: "🟢 Node.js, Express, MongoDB",
    type: "Web Development",
  },
  {
    name: "🌍 Travel Website",
    image: "./assets/images/project-3.jpg",
    link: "https://github.com/WhatsWrongOB/travel-ui-html",
    description:
      "🏖️ Created a sleek, visually appealing travel website using HTML and CSS. The site showcases destinations with a modern layout, featuring dynamic image sliders, interactive navigation menus, and well-structured content. The design is fully responsive, ensuring optimal performance across all devices. The site is ideal for promoting travel packages",
    tech: "📄 HTML, 🎨 CSS",
    type: "Web Development",
  },
  {
    name: "🔒 Authentication",
    image: "./assets/images/project-4.png",
    link: "https://github.com/WhatsWrongOB/mern-authentication",
    description:
      "🔐 This application allows users to register, log in, and manage their sessions through a secure, token-based authentication system using JWT. The backend is protected with role-based access control, ensuring sensitive data and endpoints are accessible only to authorized users. This project also supports features such as password recovery, email verification",
    tech: "⚛️ React, 🟢 Node.js, Express, MongoDB",
    type: "Web Development",
  },
  {
    name: "🛍️ Shopery - E-commerce",
    image: "./assets/images/project-5.png",
    link: "https://github.com/WhatsWrongOB/Weather-app",
    description:
      "🛒 Shopery is an advanced e-commerce website built with Next.js. It features dynamic product listings fetched from an external API. Users can explore various categories, filter products by price, rating, or category, and navigate through paginated results. The platform is designed to handle large datasets efficiently, making it ideal for stores with vast inventories",
    tech: "🟡 JavaScript, ⚛️ Next.js",
    type: "Web Development",
  },
  {
    name: "📸 Memories App",
    image: "./assets/images/project-6.png",
    link: "https://github.com/WhatsWrongOB/mern-memories",
    description:
      "💭 Memories is a personal diary-like application where users can create, store, and manage their memories. Built using the MERN stack, the app allows users to post entries with specific dates, delete old memories, and track their journey over time. It also features a modern, minimalist UI that makes it easy for users to navigate and manage their memories. ",
    tech: "⚛️ React, 🟢 Node.js, Express, MongoDB",
    type: "Web Development",
  },
  {
    name: "💻 Learnify - Project Hub",
    image: "./assets/images/project-7.png",
    link: "https://github.com/WhatsWrongOB/Web_Projects",
    description:
      "📚 Learnify is a comprehensive platform offering a collection of beginner-friendly projects, designed to help new developers enhance their skills through hands-on experience. The platform includes an intuitive admin panel for managing content, tracking user progress, and curating project categories. With a user-friendly interface and clean codebase,",
    tech: "⚛️ React, 🟢 Node.js, Express, MongoDB",
    type: "Web Development",
  },
  {
    name: "📚 LMS Frontend",
    image: "./assets/images/project-8.jpg",
    link: "https://github.com/WhatsWrongOB/lms-client-typescript",
    description:
      "🎓 Developed the frontend of a Learning Management System (LMS) using React and TypeScript. The user interface provides a seamless experience for students to browse and enroll in courses, take quizzes, and track their progress. The system is designed with scalability in mind, ensuring that the UI remains responsive and intuitive even as the user base grows. ",
    tech: "⚛️ React, 🟡 TypeScript",
    type: "Web Development",
  },
];

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

export { skillsData, portfolioData1, testimonailData };
