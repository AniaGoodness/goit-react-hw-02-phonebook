import React, { Component } from "react";
import css from './ContactForm.module.css'

class ContactForm extends Component {
    state = {
      contacts: [],
      name: ''
 //     name: ''
    }
  handleChange = event => {
    event.preventDefault()
    this.setState({
      name: event.target.value
    })
  }

  render() {
    const { name } = this.state
    return (
      <div className={css.form}>
        <h4>Phonebook</h4>
        <form className={css.formList}>
          <input type="text" value={name} onChange={this.handleChange}/>
          <button type="submit">Add Contact</button>
          </form>
      </div>
    )








  }

}
export default ContactForm
