import React, { Component } from 'react'
import { Form, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout';
import factory from '../../bc/factory';
import web3 from '../../bc/web3';
import { Router } from '../../routes';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class RegistroNuevaQueja extends Component {
  state = {
      descripcion: '',
      nombre:'',
      correo:'',
      fecha:'0000-00-00',
      errorMessage: '',
      loading: false
  };
 
  onSubmit = async (event) => {
    event.preventDefault();

    this.setState.loading = ({ loading: true, errorMessage: "" });
    
    try {
    const accounts = await web3.eth.getAccounts();
    await factory.methods
        .registrarQueja(this.state.descripcion,this.state.nombre,this.state.correo,this.state.fecha)
        .send({
            from: accounts[0]
        });

        Router.pushRoute('/');
    } catch (err) {
        this.setState({ errorMessage: err.message });
    }

    this.setState.loading = ({ loading: false });
  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        <Layout>
            <h3>Registro de Quejas</h3>
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Nombre' placeholder='Nombre' 
                    value={this.state.nombre} 
                    onChange={event => this.setState({nombre: event.target.value})} />
                <Form.Input fluid label='Correo-E' placeholder='Correo-E'
                    value={this.state.correo} 
                    onChange={event => this.setState({correo: event.target.value})} />
                <Form.Select fluid label='Tipo de Queja' options={options} placeholder='Seleccione' />
                </Form.Group>
                <Form.TextArea label='Queja' placeholder='Describa la queja...'
                    value={this.state.descripcion} 
                    onChange={event => this.setState({descripcion: event.target.value})} />
                <Form.Checkbox label='Estoy de acuerdo con los Terminos y Condiciones' />
                <Message error negative>
                    <Message.Header>Oops! un error inesperado ocurrio...</Message.Header>
                    <p>{this.state.errorMessage}</p>
                </Message>
                <Form.Button loading={this.state.loading} primary>Enviar</Form.Button>
            </Form>
      </Layout>
    )
  }
}

export default RegistroNuevaQueja
