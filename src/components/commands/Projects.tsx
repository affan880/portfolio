import { useContext, useEffect } from "react";

import { checkRedirect, getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import { ProjectContainer, ProjectDesc, ProjectsIntro, ProjectTitle } from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { projects } from "@/utils/data";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, link }) => {
        id === parseInt(arg[1]) && window.open(link, "_blank");
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
        Here are some of my projects you shouldn&#39;t misss
      </ProjectsIntro>
      {projects.map(({ id, title, description }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{description}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

export default Projects;
