import { useContext, useEffect } from "react";

import { checkRedirect, generateTabs, getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import { ProjectsIntro } from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { socialLinks } from "@/utils/data";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: socialLinks.github,
    tab: 3,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: socialLinks.linkedin,
    tab: 3,
  },
  {
    id: 4,
    title: "Instagram",
    url: socialLinks.linkedin,
    tab: 0,
  },
];

export default Socials;
