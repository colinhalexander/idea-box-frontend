import React, { Component } from 'react';

export default class IdeaForm extends Component {

  state = {
    content: "",
    author: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // send fetch post to backend
  }

  render() {
    return (
      <div className="wrapper">
        <form className="idea-form">
          <h3>Submit Your Idea</h3>
          <textarea
            type="textarea"
            name="content"
            id="content-input"
            placeholder="Your Idea Here"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input
            type="text"
            id="author-input"
            name="author"
            placeholder="Full Name"
            value={this.state.author}
            onChange={this.handleChange}
          />
          <input id="submit-btn" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}