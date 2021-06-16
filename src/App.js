import React, { Component } from 'react';
import shortid from 'shortid';

// import Container from './components/Container';
// import Section from './components/Section';
// import AddContactsForm from './components/AddContactsForm';
// import Filter from './components/Filter';
// import ContactList from './components/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    const userContacts = JSON.parse(localStorage.getItem('contacts'));
    
    if (userContacts) {
      this.setState({ contacts: userContacts });
    }
   }

  componentDidUpdate(prevProps, prevState) {    
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  AddContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    }
    
    this.state.contacts.some(i => i.name === name) ?
      alert(`${name} is already in contacts`) :
      this.setState(({ contacts }) => ({contacts: [contact, ...contacts]}))
  };

  DeleteContacts = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  };

  onFilterChange = (e) => {
    this.setState({filter: e.target.value})
  };
  
  onContactsFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  }
  

  render() {
    const {contacts, filter} = this.state;
    return (

      <h1>Hello</h1>
      // <Container >

      //   <Section
      //     title={'Phonebook'}
      //     children={
      //       <AddContactsForm onSubmit={this.AddContact }
      //       />
      //     }
      //   />
      //   <Section
      //     title={'Contacts'}
      //     children={
      //       <>
      //       {contacts.length ? 
      //       <Filter
      //           value={filter}
      //           onFilter={this.onFilterChange}
      //       />: <></> 
      //       }
            
      //       <ContactList
      //         contacts={this.onContactsFilter()}
      //         onDeleteContact={this.DeleteContacts}
      //         />
      //         </>
      //     }
      //   />
      // </Container>
    )
  };
}
export default App;