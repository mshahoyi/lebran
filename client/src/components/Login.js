import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'


export default class Login extends Component {
  state = { username: '', password: '' }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit() {
      this.props.submit(this.state);
      this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className={'ui container'}>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Field required>
            <label>Username</label>
            <input placeholder="Enter your username here" onChange={this.handleChange.bind(this)} value={this.state.username} name='username'/>
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input placeholder="Enter your password" onChange={this.handleChange.bind(this)} value={this.state.password} name='password'/>
          </Form.Field>
          <Button type='Submit' className='ui fluid'>Login</Button>
        </Form>
      </div>
    );
  }
}
