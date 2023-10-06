import { SectionFeedback } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <SectionFeedback>
      <h2>{title}</h2>
      {children}
    </SectionFeedback>
  );
};
