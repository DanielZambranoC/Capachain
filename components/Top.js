import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';


export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{ margin: '10px' }}>
        <Menu.Item
          name='abiertas'
          active={activeItem === 'abiertas'}
          onClick={this.handleItemClick}
        >
          <Link route="/">
              CAPAChain
          </Link>
        </Menu.Item>

        <Menu.Item
          position="right"
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          <Link route="/queja/nueva">
              Registrar Queja
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}