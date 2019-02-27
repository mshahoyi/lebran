import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class DashboardMenu extends Component {
  state = { activeItem:  this.props.activeTab }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.handleTabClick(name)
  }

  render() {
    const { activeItem } = this.state
    const { tabs, activeTab } = this.props;
    return (
      <Menu>
        {tabs.map(tabName => <Menu.Item
          name={tabName}
          active={activeItem === tabName}
          onClick={this.handleItemClick}
        />)}
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          {/* <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          /> */}
        </Menu.Menu>
      </Menu>
    )
  }
}