const menu = document.getElementById("menu");
const input = document.querySelector(".input");

document.addEventListener("DOMContentLoaded", function () {
const projectContainer = document.querySelector(".projectRow");
const projects = [
  {
    title: "YouTube-Clone",
    link: "https://github.com/AnirudhKille/youtube-clone-react.git",
    image: "./assets/youtube.png",
    techStack: ["React JS", "Material UI", "Rapid API", "Axios"],
    description:
      " The YouTube clone is a web application that replicates some of the key features of the actual YouTube platform. It is built using Material-UI, providing a modern and responsive user interface. Data for the YouTube clone is fetched from the YouTube API using RapidAPI. This allows your application to dynamically retrieve and display real-time video content. The application is designed to be responsive, ensuring a seamless user experience across different devices and screen sizes. ",
  },
  {
    title: "Book Store",
    link: "https://github.com/AnirudhKille/book-store.git",
    image: "./assets/bookstore.png",
    techStack: [
      "React JS",
      "Node JS",
      "Express JS",
      "Mongo DB",
      "Tailwind CSS",
      "Axios",
    ],
    description:
      " The Book Store MERN stack project is a comprehensive web application designed for managing books. Leveraging the MERN (MongoDB, Express.js, React.js, Node.js) stack along with Tailwind CSS, the project enables users to perform CRUD (Create, Read, Update, Delete) operations on a collection of books. ",
  },
  {
    title: "Live Chat",
    link: "https://github.com/AnirudhKille/live-chat.git",
    image: "./assets/chatapp.png",
    techStack: [
      "React JS",
      "Node JS",
      "Express JS",
      "Mongo DB",
      "Axios",
      "JWT",
      "Material UI",
      "Framer Motion",
    ],
    description:
      " The MERN stack chat application is a real-time messaging platform developed using MongoDB, Express.js, React.js, Node.js, along with additional technologies such as JSON Web Tokens (JWT), Material UI, and Framer Motion. The application facilitates seamless communication between users with an emphasis on security, responsiveness, and an engaging user interface.",
  },
];

projects.map((project) => {
  const techStack = project.techStack
    .map((stacks) => `<span >${stacks}</span>`)
    .join("");
  const projectHTML = `
  <div class="appContainer">
  <img src="${project.image}" class="appImage" />
  
  <div class="techStacks">
   ${techStack}
  </div>
  <div class="appInfo">
    <div class="appTitle">${project.title}
    </div>
    <div class="appDescription">
     ${project.description}
    </div>
    <a href="${project.link}" target="_blank">View Code</a>
  </div>
  </div>
  `;
  projectContainer.innerHTML += projectHTML;
});
});

function openMenu() {
  menu.style.right = 0;
}

function closeMenu() {
  menu.style.right = "-200px";
}

function clearInput() {
  input.value = "";
}