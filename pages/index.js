import React from 'react'
import { Button, Divider, Grid, Header, Icon, Search, Segment } from 'semantic-ui-react'
import Layout from '../components/Layout';
import { Link } from '../routes';

const SegmentExamplePlaceholderGrid = () => (
<Layout>
  <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>O</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Ver estatus de la queja
          </Header>

          <Search placeholder='Ingrese codigo queja' />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='sticky note outline' />
            Registrar Queja
          </Header>
          <Link route="/queja/nueva">
            <a>
            <Button primary>Registrar</Button>
            </a>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  </Layout>
)

export default SegmentExamplePlaceholderGrid