import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Link } from '../routes';


export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{ margin: '10px' }}>
        <Menu.Item header>
          <Link route="/">
            Nebusis® CAPAChain
          </Link>
        </Menu.Item>
        
        <Menu.Menu>
          <Menu.Item> 
            <Input icon='search' placeholder='Buscar queja por codigo' />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
        <Menu.Item
          name='listado'
          active={activeItem === 'listado'}
          onClick={this.handleItemClick}
        >
          <Link route="/queja/listado">
              Listado de Quejas
          </Link>
        </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
        <Menu.Item
          name='quejas'
          active={activeItem === 'quejas'}
          onClick={this.handleItemClick}
        >
          <Link route="/queja/nueva">
              Registrar Queja
          </Link>
        </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
        <Menu.Item
          
          name='aboutUs'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        >
          <a href='https://nebusis.com'>Sobre nosotros</a>
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}