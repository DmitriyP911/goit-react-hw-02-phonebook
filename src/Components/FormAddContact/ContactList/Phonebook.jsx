import React from 'react';
import shortid from 'shortid';
import styles from '../styles/contactsStyle.module.css';
import PropTypes from 'prop-types';

const Phonebook = ( { contactsArr, onDelete } ) => (
    <ul>
        {
            contactsArr.map( contact => {
                return (
                    <li
                        className={styles.li}
                        key={shortid.generate()}>
                        <p>{contact.name}</p>
                        <p>Number: {contact.number}</p>
                        <button
                            className={styles.button}
                            onClick={() => onDelete( contact.id )}>
                            delete
                        </button>
                    </li>
                )
            } )
        }
    </ul>
)

Phonebook.propTypes = {
    contactsArr: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Phonebook;
