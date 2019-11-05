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
    
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ quote: this.state.content })
    }

    fetch("http://localhost:3000/ideas", request)
      .then(response => response.json())
      .then(console.log)

  }

  render() {
    return (
      <div className="wrapper">
        <form className="idea-form" onSubmit={this.handleSubmit}>
          <h3>Submit Your Idea</h3>
          <textarea
            type="textarea"
            name="content"
            id="content-input"
            placeholder="Your Idea Here"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <input id="submit-btn" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}