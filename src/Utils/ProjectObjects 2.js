import EastBayRecorders from "../Assets/EastBayRecorders.png";
import YemenGrace from "../Assets/Yemen_Grace.png";
import AnimeApp from "../Assets/Anime_App.png";
import { DiJavascript, DiReact, DiHtml5, DiCss3 } from "react-icons/di";
export const projects = [
  {
    projectID: 1,
    projectImage: EastBayRecorders,
    projectTitle: "East Bay Records",
    description: "lorem x3",
    language: <DiJavascript />,
    language2: <DiReact />,
    language3: <DiHtml5 />,
    language4: <DiCss3 />,
    color: "#EF9DA2",
    color2: "#04293A",
  },
  {
    projectID: 2,
    projectImage: YemenGrace,
    projectTitle: "Yemen-Grace Coffee",
    description: "lorem x3",
    language: <DiJavascript />,
    color: "#98D5BE",
    color2: "#3E2C41",
  },
  {
    projectID: 3,
    projectImage: AnimeApp,
    projectTitle: "Notepad App",
    description: "lorem x3",
    language: <DiJavascript />,
    color: "#84B4CA",
    color2: "#064663",
  },
];
