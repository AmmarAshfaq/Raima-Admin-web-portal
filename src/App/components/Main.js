import React, { Component } from 'react';
import { Header, Divider, Card, Icon, Grid, GridRow } from 'semantic-ui-react';


export default class Main extends Component {
    render() {
        return (

            <div >
                <Header as='h1' style={{ paddingTop: 40 }}>Dashboard</Header>
                <Divider inverted />
                <Grid divided='vertically'>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Card>
                                <Card.Content style={{ backgroundColor: 'blue', padding: 40 }}>
                                    <Header as='h1' style={{ color: "#fff" }}>Table 1</Header>
                                </Card.Content>
                                <Card.Content extra>
                                    Table Views
    </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                <Card.Content style={{ backgroundColor: 'red', padding: 40 }}>
                                    <Header as='h1' style={{ color: "#fff" }}>Table 1</Header>
                                </Card.Content>
                                <Card.Content extra>
                                    Table Views
    </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                <Card.Content style={{ backgroundColor: 'green', padding: 40 }}>
                                    <Header as='h1' style={{ color: "#fff" }}>Table 1</Header>
                                </Card.Content>
                                <Card.Content extra>
                                    Table Views
    </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}