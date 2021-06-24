import React from 'react';
import F from './filter.module.css'


const Filter = ({filter, onChange}) => (
  <label className={F.label} >Find contacts by name
  <input className={F.input} type="text" value={filter} onChange={onChange}>
    </input></label>
   
  
   
);

export default Filter;