import React, { Component } from 'react';
import Form from './FormAddContact/ContactList/Form';
import ContactList from './FormAddContact/ContactList/ContactList';
import Phonebook from './FormAddContact/ContactList/Phonebook';
import shortId from 'shortid';
import styles from './FormAddContact/styles/phonebookStyles.module.css'

const filterContacts = ( contacts, filter ) => {
    return contacts.filter( contact => contact.name.toLowerCase().includes( filter.toLowerCase() ) )
}

export default class App extends Component {

    state = {
        contacts: [],
        filter: ''
    }

    handleAddContact = ( contact ) => {
        const contactToAdd = {
            ...contact,
            id: shortId.generate()
        }

        this.setState( state => ( {
            contacts: [...state.contacts, contactToAdd]
        } ) )
    }

    deleteContact = ( id ) => {
        this.setState( prevState => ( {
            contacts: prevState.contacts.filter( contact => contact.id !== id )
        } ) )
    }

    contactsFilter = ( e ) => {
        this.setState( {
            filter: e.target.value
        } )
    }

    render () {

        const { contacts, filter } = this.state;

        const filteredContacts = filterContacts( contacts, filter )

        return (
            <div className={styles.main}>
                <Form
                    onAddContact={this.handleAddContact} />
                {
                    this.state.contacts.length > 0 &&
                    <div>
                        <ContactList
                            value={filter}
                            contactsFilter={this.contactsFilter} />
                        <Phonebook
                            contactsArr={filteredContacts}
                            onDelete={this.deleteContact} />
                    </div>
                }
            </div>
        )
    }
}