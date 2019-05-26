import React, {Component} from 'react';
import factory from '../bc/factory';
import { Card, Button, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CAPAIndex extends Component {
    static async getInitialProps() {
        const quejas = await factory.methods.listadoQuejas().call();

        return { quejas };
    }

    renderQuejas() {
        const items = this.props.quejas.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/queja/${address}`}>
                        <a>Ver Queja</a>
                    </Link>
                ),
                fluid: true
            }
        });

        return <Card.Group items={items}/>
    }

    render() {
        return (
        <Layout>
            <div>
                <h3>Quejas Abiertas</h3>
                <Link route="/queja/nueva">
                    <a>
                    <Button animated
                        floated="right"
                        primary >
                    <Button.Content visible>
                        Registrar Queja   
                    </Button.Content>
                    <Button.Content hidden>
                    <Icon name='add circle' />
                    </Button.Content>
                    </Button>
                    </a>
                </Link>
                {this.renderQuejas()}
            </div>
        </Layout>
        )
    }
}

export default CAPAIndex;