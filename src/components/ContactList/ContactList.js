import React from 'react';
import C from './contactList.module.css'

const ContactList = ({contacts, onDeleteList}) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button className={C.button} onClick={() => onDeleteList(id)}>Delete</button>
    </li>
    )
    )}
    
  </ul>
)
export default ContactList;