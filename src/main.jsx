import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FallingText from "./FallingText.jsx";
import Navbar from "./Navbar";
import DarkVeil from "./DarkVeil";
import Folder from "./Folder";
import "./Folder.css";
import "./FallingText.css";
import { img } from "motion/react-client";
import Contact from "./Contact.jsx";

import TicTacToe from './TicTacToe.jsx';
import BubbleGame from "./Bubblegame.jsx";
import NodeIcon from "./assets/Node.png";
import ReactIcon from "./assets/React.png";
import MongoIcon from "./assets/Mongo.png";
import ExpressIcon from "./assets/Express.png";
import JavaIcon from "./assets/Java.png";
import JavaScriptIcon from "./assets/Javascript.png";
import SqlIcon from "./assets/Sql.png";
import GitIcon from "./assets/Git.png";
import GithubIcon from "./assets/Github.png";
import DockerIcon from "./assets/Docker.png";
import CppIcon from "./assets/Cpp.png";
import PythonIcon from "./assets/Python.png";
import ApiIcon from "./assets/Api.png";
import TailwindIcon from "./assets/Tailwind.png";
import TicTacToeIcon from "./assets/TicTacToe.png";
import BubbleGameIcon from "./assets/BubbleGameIcon.png";


import Cert1 from './assets/Cert1.jpeg';
import Cert2 from './assets/Cert2.jpg';
import Cert3 from './assets/Cert3.jpeg';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);


const TechBadge = ({ icon, name }) => (
  <span className="tech-badge">
    <img src={icon} alt={name} className="tech-icon" />
    {name}
  </span>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
    <App />
    </Layout>
    )
  },
  {
    path: "/skills",
    element: (
      <Layout>
        <FallingText
          items={[
            { icon: NodeIcon, text: "Node.js" },
            { icon: ReactIcon, text: "React.js" },
            { icon: MongoIcon, text: "MongoDB" },
            { icon: ExpressIcon, text: "Express" },
            { icon: JavaScriptIcon, text: "Javascript" },
            { icon: JavaIcon, text: "Java" },
            { icon: PythonIcon, text: "Python" },
            { icon: GitIcon, text: "Git" },
            { icon: GithubIcon, text: "Github" },
            { icon: CppIcon, text: "Cpp" },
            { icon: ApiIcon, text: "API" },
            { icon: SqlIcon, text: "SQL" },
            { icon: DockerIcon, text: "Docker" },
            { icon: TailwindIcon, text: "TailwindCss" },
          ]}
          highlightWords={[
            "React",
            "Bits",
            "animated",
            "components",
            "simplify",
          ]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1.8rem"
          mouseConstraintStiffness={0.9}
        />
      </Layout>
    ),
  },
 {
  path: "/certificates",
  element: (
    <Layout>
      <div className="certificates-container">
        <Folder 
          size={2} 
          color="#5227FF" 
          className="custom-folder"
          images={[Cert1, Cert2, Cert3]}
        />
      </div>
    </Layout>
  ),
},
{
  path: "/games",
  element: (
    <Layout>
      <div className="games-container">
        <Folder 
          size={2} 
          color="#5227FF" 
          className="custom-folder"
          images={[TicTacToeIcon, BubbleGameIcon, null]}  // ✅ Add this line - papers need images to render
          games={[
            <TicTacToe />,  // Left paper - TicTacToe
            <BubbleGame />,          // Middle paper
            null            // Right paper
          ]}
        />
      </div>
    </Layout>
  )
},
{
  path: "/contact",
  element: (
    <Layout>
      <Contact />
    </Layout>
  )
}

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* ✅ Background stays fixed and global */}
      <div className="darkveil-background">
        <DarkVeil />
      </div>

      {/* ✅ Routes appear above background */}
      <div className="page-content">
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>
);
