import { useContext, useEffect } from "react";

import { checkRedirect, generateTabs, getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import { ProjectsIntro } from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

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
    url: "https://github.com/affan880",
    tab: 3,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/syed-affan",
    tab: 3,
  },
  // {
  //   id: 3,
  //   title: "Facebook",
  //   url: "https://www.facebook.com/satnaing.dev",
  //   tab: 1,
  // },
  {
    id: 4,
    title: "Instagram",
    url: "https://instagram.com/7pt_klm",
    tab: 0,
  },
];

export default Socials;