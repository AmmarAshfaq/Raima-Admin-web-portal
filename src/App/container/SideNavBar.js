import React, { Component } from "react";
import { Button, Menu, Icon, Image, Segment, Sidebar, Header, Input, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class MenuExampleSizeHuge extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.navigate = props.history;
        this.state = { activeItem: "dashboard" };
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu vertical size="large" style={{ height: 700 }}>

                <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                </Menu.Item>
                <Menu.Item name='dashboard' as={Link}
                    to="/"
                    active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
                    <div>
                        <Icon name='dashboard' style={{ marginRight: 10 }} />
                        Dashboard
</div>
                </Menu.Item>

                <Menu.Item
                    as={Link}
                    to="/addProduct"
                    name='addProperties' active={activeItem === 'addProperties'} onClick={this.handleItemClick}>
                    <div>
                        <Icon name='add circle' style={{ marginRight: 10 }} />
                        Add Property
</div>
                </Menu.Item>
                <Menu.Item 
                as={Link}
                to="/userQueries"
                name='userQueries' active={activeItem === 'userQueries'} onClick={this.handleItemClick}>
                    <div>
                        <Icon name='commenting' style={{ marginRight: 10 }} />
                        User Queries
</div>
                </Menu.Item>



            </Menu>
        );
    }
}
