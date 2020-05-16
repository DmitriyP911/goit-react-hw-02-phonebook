import React, { Component } from 'react';
import shortId from 'shortid';
import styles from '../styles/formStyles.module.css';
import PropTypes from 'prop-types';

export default class Form extends Component {

    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        number: '',
    }

    handleAddContact = ( e ) => {
        this.setState( {
            [e.target.name]: e.target.value,
        } )
    }

    handleSubmit = ( e ) => {
        e.preventDefault();
        this.props.onAddContact( { ...this.state } );

        this.setState( {
            name: '',
            number: '',
        } )
    }

    render () {
        const { name, number } = this.state;
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <label
                    className={styles.label}
                    htmlFor={shortId.generate()}>Name</label>
                <input
                    className={styles.input}
                    value={name} name="name"
                    type="text" onChange={this.handleAddContact} />
                <label
                    className={styles.label}
                    htmlFor={shortId.generate()}>Number</label>
                <input
                    className={styles.input}
                    value={number}
                    name="number"
                    type="text" onChange={this.handleAddContact} />
                <button
                    className={styles.button}
                    type="submit" disabled={this.state.name === "" || this.state.number === "" && true} >
                    Add conact
                </button>
            </form>
        )
    }
}