import React, { Component } from 'react';
import propTypes from 'prop-types';
import { FormEl, InputEl, LabelEl, SubmitBtn } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    this.props.handleSubmit(this.state);
    form.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormEl onSubmit={this.handleSubmit}>
        <LabelEl>Name</LabelEl>
        <InputEl
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
        />
        <LabelEl>Number</LabelEl>
        <InputEl
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone"
          value={number}
          onChange={this.handleChange}
        />
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </FormEl>
    );
  }
}

Form.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
