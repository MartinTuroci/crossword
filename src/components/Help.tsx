import React from 'react';
import './Help.css';

type HelpProps = {
  helpers: string[];
};

const Help = ({ helpers }: HelpProps) => {
  return (
    <section className="help">
      <h1>Pomôcky</h1>
      <ul className="help__list">
        {helpers.map((helper: string, index) => (
          <li key={index}>{helper}</li>
        ))}
      </ul>
    </section>
  );
};
export default Help;
