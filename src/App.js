import React, { Component } from "react";
import shortid from 'shortid';
// import PropTypes from "prop-types";

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter'
import Section from "./components/Section";

import contacts from './data/contacts.json'

class App extends Component{
  state = {
    contacts,
    filter: ''
 
  };

   componentDidMount() {
    console.log('Монтирование')
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts:parsedContacts})
    }
  };

  componentDidUpdate(prevState) {
    console.log('Обновление')
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    }    
   contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : contacts.some(({ number }) => number === contact.number)
      ? alert(`${number} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  deleteItemList = listId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== listId),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const {filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
    
    return (
      <div className="container">
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title={'Contacts'}>
          <Filter filter={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContacts} onDeleteList={this.deleteItemList} />
        </Section>
        
        
      </div>
    )
  }
}

export default App;
