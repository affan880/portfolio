import _ from "lodash";
import { useContext } from "react";

import { termContext } from "../Terminal";
import { aboutMe } from "@/utils/data";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "gui") {
    window.open(aboutMe.web, "_blank");
  }

  return <span></span>;
};

export default Gui;
