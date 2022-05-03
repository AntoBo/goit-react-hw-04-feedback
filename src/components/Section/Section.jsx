import Pt from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.protoTypes = { title: Pt.string };

export default Section;
