import React, { Component } from 'react';
import { Divider, Header, Icon, Table } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Queja from '../../bc/queja';

class DetalleQueja extends Component {
    static async getInitialProps(props) {
        const queja = Queja(props.query.address);

        const detalle = await queja.methods.verDetalle().call();

        //return (q.quienReporta,q.nombre,q.correo,q.fecha,q.descripcion);
        return {
            quien: detalle[0],
            nombre: detalle[1],
            correo: detalle[2],
            fecha: detalle[3],
            descripcion: detalle[4]
        };
    }

    render() {
        const {
            quien, nombre, correo, fecha, descripcion
        } = this.props;
        
        return (
            <Layout>
                <h3>Detalle de la Queja</h3>
                <React.Fragment>
                    <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='tag' />
                        Descriptcion
                    </Header>
                    </Divider>

                    <p>
                    {descripcion}
                    </p>

                    <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='bar chart' />
                        Detalles
                    </Header>
                    </Divider>

                    <Table definition>
                    <Table.Body>
                        <Table.Row>
                        <Table.Cell width={2}>Direccion</Table.Cell>
                        <Table.Cell>{quien}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Nombre</Table.Cell>
                        <Table.Cell>{nombre}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Correo-E</Table.Cell>
                        <Table.Cell>{correo}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>Fecha</Table.Cell>
                        <Table.Cell>{fecha}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                    </Table>
                </React.Fragment>
            </Layout>
            
        );
    }

}

export default DetalleQueja;