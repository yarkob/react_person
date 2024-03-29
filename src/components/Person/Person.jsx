import React from 'react';
import './Person.scss';

export const Person = ({ person }) => {
  const { name, age, isMarried, partnerName, sex } = person;
  const partner = sex === 'm' ? 'wife' : 'husband';
  const personPartner = isMarried ? `${partnerName} is my ${partner}` : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">
        {personPartner}
      </p>
    </section>
  );
};
