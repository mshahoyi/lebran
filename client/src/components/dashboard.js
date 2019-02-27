import React from 'react';
// import SessionLogs from './SessionLogs';
import DashboardMenu from './dashboardmenu'
import Checkin from './checkin';
import { Container } from 'semantic-ui-react';

export const DashboardTabs = {
    LOGS: 'Logs',
    CHECKIN: 'Checkin',
}

class Dashboard extends React.Component {
    state = { activeTab: DashboardTabs.LOGS }

    tabContents = {
        //[DashboardTabs.LOGS]: <SessionLogs />,
        [DashboardTabs.CHECKIN]: <Checkin />,
    }

    handleItemClick = (name) => this.setState({ activeTab: name })
    
    render() {
        return (
            <Container style={{marginTop: '2em'}}>
                <DashboardMenu tabs={Object.values(DashboardTabs)} activeTab={this.state.activeTab} handleTabClick={this.handleItemClick}/>
                <Container>
                    {this.tabContents[this.state.activeTab]}
                </Container>
            </Container>
        )
    }
}

export default (Dashboard)