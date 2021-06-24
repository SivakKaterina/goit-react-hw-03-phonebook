import React from 'react';
import S from './section.module.css'

const Section = ({ title, children }) => (
    <div className={S.sectionContainer}>
    <h2 className={S.title}>{title}</h2>
    {children}
  </div>
  )
  

export default Section;
  