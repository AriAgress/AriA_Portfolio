import EastBayRecorders from "../Assets/EastBayRecorders.png";
import YemenGrace from "../Assets/Yemen_Grace.png";
import TFT from "../Assets/tfta_app.png";
import AllStore from "../Assets/AllStore.png";
import { DiJavascript, DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { FaCcStripe, FaNode } from "react-icons/fa";
import { SiStyledcomponents, SiReactrouter } from "react-icons/si";
export const projects = [
  {
    projectID: 1,
    projectImage: EastBayRecorders,
    projectTitle: "East Bay Records",
    description:
      "A recreation of an older website for a small recording studio in Oakland. A group of us came together and converted the website from WordPress into React and JavaScript.",
    language: [
      <div>
        <DiJavascript /> <DiHtml5 />
        <DiCss3 /> <DiReact /> <SiReactrouter />
      </div>,
    ],
    link: "https://github.com/andrewjspivey/eastbay_recorders",
    color: "#EF9DA2",
    color2: "#04293A",
  },
  {
    projectID: 2,
    projectImage: AllStore,
    projectTitle: "AllStore",
    description:
      "A solo project I decided to take on to practice CRUD functionality and design. Manipulated API data to reflect categories. All pages, button, and cart works as intended. Carousel added for advertisements. Utilized local storage to store the cart items.",
    language: [
      <div>
        <DiJavascript /> <DiHtml5 />
        <DiCss3 /> <DiReact /> <SiStyledcomponents /> <SiReactrouter />
      </div>,
    ],
    link: "https://github.com/AriAgress/Store_API",
    color: "#98D5BE",
    color2: "#3E2C41",
  },
  {
    projectID: 3,
    projectImage: TFT,
    projectTitle: "Team Fight Tactics API",
    description:
      "A fun project I threw together to extract information on my gameplay. I wanted to compile data on my previous game play to see if I was progressing or not. The best part of this app was my friends were able to use it as well!",
    language: [
      <div>
        <DiJavascript /> <DiHtml5 />
        <DiCss3 /> <DiReact /> <FaNode />
      </div>,
    ],
    link: "https://github.com/AriAgress/tfta",
    color: "#84B4CA",
    color2: "#064663",
  },
  {
    projectID: 4,
    projectImage: YemenGrace,
    projectTitle: "Yemen-Grace Coffee",
    description:
      "A project for a local coffee shop in my home town. After the pandemic, they wanted to build a website to expand their business to online sales. Unfortunately, after the website was built, they sunset the idea when we reached out for photos to finalize the project. They lost interest in e-commerce.",
    language: [
      <div>
        <DiJavascript /> <DiHtml5 />
        <DiCss3 /> <DiReact /> <FaCcStripe /> <SiStyledcomponents />{" "}
        <SiReactrouter />
      </div>,
    ],
    link: "https://github.com/seenanadimi/yemen_grace",
    color: "#FDFD96",
    color2: "#36261D",
  },
];
