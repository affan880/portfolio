import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors?.text?.[100] || '#000000'};
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors?.primary || '#3b82f6'};
    margin: 20px auto 0;
    border-radius: 2px;
  }
`; 