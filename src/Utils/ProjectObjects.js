import EastBayRecorders from "../Assets/EastBayRecorders.png";
import YemenGrace from "../Assets/Yemen_Grace.png";
import AnimeApp from "../Assets/Anime_App.png";
import { DiJavascript, DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { FaCcStripe } from "react-icons/fa";
export const projects = [
  {
    projectID: 1,
    projectImage: EastBayRecorders,
    projectTitle: "East Bay Records",
    description: "lorem x3",
    language: [
      <div>
        <DiJavascript /> <DiHtml5 />
        <DiCss3 /> <DiReact />
      </div>,
    ],
    link: "",
    color: "#EF9DA2",
    color2: "#04293A",
  },
  {
    projectID: 2,
    projectImage: YemenGrace,
    projectTitle: "Yemen-Grace Coffee",
    description:
      "This project was done for a local coffee shop in my home town. After the pandemic, they wanted to build a website to expand their business to online sales. Unfortunately, after the website was built, they sunset the idea when we reached out for photos to finalize the project.",
    language: [
      <div>
        <DiJavascript /> <DiHtml5 />
        <DiCss3 /> <DiReact /> <FaCcStripe />
      </div>,
    ],
    link: "https://github.com/seenanadimi/yemen_grace",
    color: "#98D5BE",
    color2: "#3E2C41",
  },
  {
    projectID: 3,
    projectImage: AnimeApp,
    projectTitle: "Team Fight Tactics API",
    description:
      "This was a fun project I threw together to extract information on my gameplay. I wanted to compile data on my previous game play to see if I was progressing or not. The best part of this app was my friends were able to use it as well!",
    language: [
      <div>
        <DiJavascript /> <DiHtml5 />
        <DiCss3 /> <DiReact />
      </div>,
    ],
    link: "https://github.com/AriAgress/tfta",
    color: "#84B4CA",
    color2: "#064663",
  },
];
