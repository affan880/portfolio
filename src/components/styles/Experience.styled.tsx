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
  color: ${({ theme, $active }) => $active ? theme.colors?.primary || '#3b82f6' : theme.colors?.text?.[100] || '#000000'};
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  position: relative;
  border-bottom: 2px solid ${({ theme, $active }) => $active ? theme.colors?.primary || '#3b82f6' : 'transparent'};
  white-space: nowrap;
  
  @media (min-width: 768px) {
    border-bottom: none;
    border-left: 2px solid ${({ theme, $active }) => $active ? theme.colors?.primary || '#3b82f6' : (theme.colors?.text?.[100] || '#000000') + '50'};
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors?.primary || '#3b82f6'};
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
  color: ${({ theme }) => theme.colors?.text?.[100] || '#000000'};
  
  .company {
    color: ${({ theme }) => theme.colors?.primary || '#3b82f6'};
  }
`;

export const JobDetails = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.text?.[200] || '#000000'};
  
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
  color: ${({ theme }) => theme.colors?.text?.[100] || '#000000'};
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors?.primary || '#3b82f6'};
  }
`;

export const ProjectsContainer = styled.div`
  margin-top: 40px;
`;

export const ProjectTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors?.text?.[100] || '#000000'};
  
  a {
    color: ${({ theme }) => theme.colors?.primary || '#3b82f6'};
    margin-left: 10px;
    font-size: 14px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`; 