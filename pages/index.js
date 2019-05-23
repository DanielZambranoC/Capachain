import React, {Component} from 'react';
import factory from '../bc/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CAPAIndex extends Component {
    static async getInitialProps() {
        const quejas = await factory.methods.quejasRegistradas().call();

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
                    <Button
                        floated="right"
                        content="Registrar Queja"
                        icon="add circle"
                        primary
                    />
                    </a>
                </Link>
                {this.renderQuejas()}
            </div>
        </Layout>
        )
    }
}

export default CAPAIndex;