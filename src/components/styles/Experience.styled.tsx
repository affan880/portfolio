import styled from "styled-components";

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    flex-direction: column;
    min-width: 200px;
    margin-right: 30px;
    margin-bottom: 0;
  }
`;

interface TabProps {
  $active: boolean;
}

export const Tab = styled.button<TabProps>`
  padding: 10px 20px;
  border: none;
  background: transparent;
  color: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.text.secondary};
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease, border-color 0.3s ease;
  border-bottom: 2px solid ${({ theme, $active }) => $active ? theme.colors.primary : 'transparent'};
  white-space: nowrap;
  
  @media (min-width: 768px) {
    border-bottom: none;
    border-left: 2px solid ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.scrollHandle};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ExperienceContent = styled.div`
  flex-grow: 1;
`;

export const ExperienceItem = styled.div`
  padding: 10px;
`;

export const JobHeader = styled.div`
  margin-bottom: 20px;
`;

export const JobTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.text.primary};
  
  .company {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const JobDetails = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  .separator {
    margin: 0 10px;
  }
`;

export const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AchievementItem = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProjectsContainer = styled.div`
  margin-top: 40px;
  
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  
  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
  }
`;

export const ProjectTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 10px;
    font-size: 14px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;