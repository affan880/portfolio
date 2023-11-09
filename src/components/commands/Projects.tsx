import { useContext, useEffect } from "react";

import { checkRedirect, getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import { ProjectContainer, ProjectDesc, ProjectsIntro, ProjectTitle } from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Academic Ally",
    desc: "Academic Ally is a comprehensive platform designed to empower students in their academic pursuits and support them throughout their educational journey.",
    url: "https://play.google.com/store/apps/details?id=com.academically",
  },
  {
    id: 2,
    title: "Academic Ally Web App",
    desc: "Academic Ally Web App is an expansion of the acclaimed Android application, designed to cater to the diverse needs of desktop users.",
    url: "https://app.getacademically.co/",
  },
  {
    id: 3,
    title: "ULikeMe",
    desc: "A Dating App built using react native and firebase.",
    url: "https://github.com/affan880/ULikeMe",
  },
  {
    id: 4,
    title: "Worketzy",
    desc: "This app was conceived as part of a mini-project with a singular goal: to revolutionize and simplify the hiring process.",
    url: "https://github.com/affan880/Worketzy",
  },
  {
    id: 5,
    title: "IEEE Nsakcet",
    desc: "IEEE Nsakcet is a website designed and developed to elevate the digital presence of the IEEE Student Branch.",
    url: "https://ieeensakcet.com",
  },
];

export default Projects;
