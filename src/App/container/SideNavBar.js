import React, { Component } from "react";
import { Button, Menu, Icon, Image, Segment, Sidebar, Header, Input, Label } from "semantic-ui-react";
// import { Link } from "react-router-dom";

export default class MenuExampleSizeHuge extends Component {
    state = { activeItem: "createasset" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu vertical size="large" style={{ height: 700 }}>

                <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                </Menu.Item>
                <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
                    <div>
                        <Icon name='dashboard' style={{ marginRight: 10 }} />
                        Dashboard
</div>
                </Menu.Item>

                <Menu.Item name='tables' active={activeItem === 'tables'} onClick={this.handleItemClick}>
                    <div>
                        <Icon name='table' style={{ marginRight: 10 }} />
                        Tables
</div>
                </Menu.Item>


            </Menu>
        );
    }
}
