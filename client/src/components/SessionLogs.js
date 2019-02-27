import React from 'react';
import { Accordion, List, ListItem, ListHeader } from 'semantic-ui-react'
import { connect } from 'react-redux';

class SessionLogs extends React.Component {
    componentDidMount() {
        this.props.getSessions();
    }

    sessionLevel = () => {
        const { sessions } = this.props;
        const panel = Object.keys(sessions).map(key => {
            return {
                key: key, title: key, content: {content: this.sessionContent(sessions[key])}
            }
        })
        return panel;
    }

    sessionContent = (attendants) => (
            <Accordion.Accordion panels={this.attendantsLevel(attendants)} />

    )

    attendantsLevel = (attendants) => {
        return Object.keys(attendants).map((key) => {
            return { key: key, title: attendants[key].name,  content: { content: this.attendantsContent(attendants[key]) } }
        })
    }

    attendantsContent = (attendant) => (
        <List>
            {Object.keys(this.fieldsToShow).map(key => <ListItem>
                <ListHeader>{this.fieldsToShow[key]}</ListHeader>
                {attendant[key]}
            </ListItem>)}
        </List>
    )

    fieldsToShow = {
        'bookName': 'Book Name',
        'bookStart': 'Starting Page',
        'bookEnd': 'Ending Page',
        'pagesReadSinceLastSession': 'Pages Read Since Last Session'
    }

    render() {
        return (
            <Accordion defaultActiveIndex={0} panels={this.sessionLevel()} styled />
        )
    }
}

export default connect(state => {
    return {
        sessions: state.sessions,
    }
}, dispatch => {
    return {
    }
})(SessionLogs);