import React from 'react';
import { connect } from 'react-redux';
import { addLog } from '../actions/actions';

class Checkin extends React.Component {
    state = { }

    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addLog(this.state)
    }

    render() {
        return (
            <div className='ui container text'>
                <form className='ui form' onSubmit={this.handleSubmit.bind(this)}>
                    <div className='field'>
                        <label>Name</label>
                        <input id='name' placeholder='Enter your name here' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className='ui divider'></div>
                    <div className='field'>
                        <label>Book(s)</label>
                        <input id='bookName' placeholder='Enter name of the book you are reading here' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className='two fields'>
                        <div className='field'>
                            <input id='bookStart' type='number' placeholder='Starting Page Number' onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className=''><label>To</label> </div>
                        <div className='field'>
                        <input id='bookEnd' type='number' placeholder='Ending Page Number' onChange={this.handleChange.bind(this)}/>
                        </div>
                    </div>
                    <div className='ui divider'></div>
                    <div className='field'>
                        <label>Pages Read Since Last Session</label>
                        <input id='pagesReadSinceLastLog' type='number' placeholder='Enter the number of pages you read since last session' onChange={this.handleChange.bind(this)}/>
                    </div>
                    <input type='submit' value='Checkin' className='fluid ui button'/>
                </form>
            </div>
        )        
    }
}
    
const mapDispatchToProps = dispatch => { return { addLog: (attendant) => dispatch(addLog(attendant))} }
export default connect(null, mapDispatchToProps)(Checkin);