import {
  skillsData,
  portfolioData1,
  portfolioData2,
  portfolioData3,
  testimonailData,
} from "./assets/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const sidebarMenu = document.getElementById("sidebar_menu");
  const hamburger = document.getElementById("hamburger");
  const close_modal = document.getElementById("close_modal");
  const modal = document.getElementById("modal");
  const testimonial_section = document.getElementById("testimonial_section");
  const portfolio_section_1 = document.getElementById("portfolio_section_1");
  const portfolio_section_2 = document.getElementById("portfolio_section_2");
  const portfolio_section_3 = document.getElementById("portfolio_section_3");
  const skills_section = document.getElementById("skills_section");

  const setModalContent = (data) => {
    modal.innerHTML = `
      <div
        class="sidebar_animation flex flex-col md:flex-row justify-center items-center w-[95%] sm:w-[670px] h-auto md:h-[280px] section-border bg-[#202021] rounded-2xl relative md:static">
        <div class="w-full md:w-[25%] h-full flex md:justify-center items-start pl-4 pb-4 md:pl-0">
          <div class="mt-5 md:mt-10 section-border w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] bg-[#383839] rounded-2xl">
            <img src="./images/avatar-1.png" alt="avatar" />
          </div>
        </div>
        <div class="w-full md:w-[75%] pr-5 pb-7 md:pb-0 md:relative pl-4 md:pl-0">
          <i id="close_modal" class="cursor-pointer fa-solid fa-close text-white absolute right-7 top-3 md:top-[-5px]"></i>
          <h1 class="text-white text-[1.3rem] md:text-[1.7rem] font-semibold">${data.name}</h1>
          <p class="text-[#bababa] text-base md:text-[1.05rem] font-semibold pt-1">${data.date}</p>
          <p class="text-white text-[0.95rem] pt-2">${data.explainedMessage}</p>
        </div>
      </div>
    `;

    document.getElementById("close_modal").addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  };

  const createPortfolioHTML = (data) => `
    <div id="portfolio_card" class="w-[85%] xl:w-[270px] relative">
      <a href=${data.link} id="link"
        class="w-[45px] h-[45px] border rounded-xl flex justify-center items-center contact-bg section-border absolute top-[30%] left-[42%] z-10 cursor-pointer">
        <i class="fa-solid fa-eye text-[#f2de6f] text-xs"></i>
      </a>
      <img class="w-full rounded-xl hover:scale-105 transition ease-in-out duration-500"
        src=${data.image} alt=${data.name} />
      <p class="text-white pl-2 pt-4">${data.name}</p>
      <p class="text-gray-300 text-sm pl-2 pt-1 font-semibold">
        Web Development
      </p>
    </div>
  `;

  skillsData.forEach((data) => {
    skills_section.innerHTML += `
    <div class="w-[98%] xl:w-[420px] h-[140px] flex justify-center items-center rounded-2xl skill-border">
    <div class="w-[25%] flex justify-end pb-9 pr-5">
      <img class="w-[40px]" src=${data.icon} alt=${data.name} />
    </div>
    <div class="w-[75%] pr-3 pb-1">
      <h4 class="text-white xl:text-[1.15rem] font-medium">${data.name}</h4>
      <p class="text-[0.9rem] font-medium text-[#c7c5c5] pt-1">
       ${data.description}
      </p>
      <div class="mt-3 section-border w-[90%] h-[7px] rounded-xl bg-[#383838] overflow-hidden">
        <div class="h-full w-[${data.proficiency}%] bg-[#FFC260]"></div>
      </div>
    </div>
  </div>
    `;
  });

  portfolioData1.forEach((data) => {
    portfolio_section_1.innerHTML += createPortfolioHTML(data);
  });

  portfolioData2.forEach((data) => {
    portfolio_section_2.innerHTML += createPortfolioHTML(data);
  });

  portfolioData3.forEach((data) => {
    portfolio_section_3.innerHTML += createPortfolioHTML(data);
  });

  testimonailData.forEach((data, index) => {
    testimonial_section.innerHTML += `
      <div
        id="testimonial_card_${index}"
        class="mt-16 flex flex-col items-center xl:flex-row gap-16 xl:gap-5 min-w-full xl:min-w-[410px] skill-border rounded-2xl cursor-pointer">
        <div class="w-full xl:w-[420px] h-[135px] flex justify-center items-center rounded-2xl relative">
          <div
            class="section-border w-[60px] xl:w-[80px] h-[60px] xl:h-[80px] bg-[#383839] rounded-2xl absolute top-[-30px] xl:top-[-40px] left-[30px]">
            <img src="./images/avatar-1.png" alt="${data.name}" />
          </div>
          <div class="w-[75%] text-center pt-4 pb-3">
            <h4 class="text-white text-[1.2rem] xl:text-[1.25rem] font-medium">
              ${data.name}
            </h4>
            <p class="text-[0.93rem] font-medium text-[#c7c5c5] pt-2">
              ${data.message}
            </p>
          </div>
        </div>
      </div>
    `;
  });

  hamburger.addEventListener("click", () => {
    sidebarMenu.classList.toggle("hidden");
  });

  close_modal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  testimonial_section.addEventListener("click", (event) => {
    const card = event.target.closest("[id^='testimonial_card_']");
    if (card) {
      const index = card.id.split("_")[2];
      setModalContent(testimonailData[index]);
      modal.classList.add("flex");
      modal.classList.remove("hidden");
    }
  });

  const pages = document.querySelectorAll("[data-page]");
  pages.forEach((page, index) => {
    if (index !== 0) {
      page.style.display = "none";
    }
  });

  const navButtons = document.querySelectorAll("[data-nav-link]");
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const pageToShow = button.getAttribute("data-nav-link");

      pages.forEach((page) => {
        page.style.display = "none";
      });

      const selectedPage = document.querySelector(
        `[data-page="${pageToShow}"]`
      );
      if (selectedPage) {
        selectedPage.style.display = "block";
      }
    });
  });
});
