import { aboutMe } from "@/utils/data";
import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>{aboutMe.webName}</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
