import { AboutWrapper, HighlightAlt, HighlightSpan } from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Syed Affan</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a React developer</HighlightAlt> based in Hyderabad,
        India.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing software's to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
