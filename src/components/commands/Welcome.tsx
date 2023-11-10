import { Cmd, HeroContainer, Link, PreImg, PreName, PreNameMobile, PreWrapper, Seperator } from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
          _______    ___    ___             
          (_______)  / __)  / __)            
           _______ _| |__ _| |__ _____ ____  
          |  ___  (_   __|_   __|____ |  _ \ 
          | |   | | | |    | |  / ___ | | | |
          |_|   |_| |_|    |_|  \_____|_| |_| 
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
       _______    ___    ___             
       (_______)  / __)  / __)            
        _______ _| |__ _| |__ _____ ____  
       |  ___  (_   __|_   __|____ |  _ \ 
       | |   | | | |    | |  / ___ | | | |
       |_|   |_| |_|    |_|  \_____|_| |_| 
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio.</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
