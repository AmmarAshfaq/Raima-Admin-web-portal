import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './App/components/Main';
import AddProduct from './App/components/AddProduct';
import UserServiceDetail from './App/components/UserServiceDetail';
import UserQueries from './App/components/UserQueries';
import TopNavBar from './App/container/TopNavBar'
import SideNavbar from './App/container/SideNavBar';
export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div >
                        <TopNavBar />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }} >
                            <SideNavbar />
                        </div>
                        <div style={{ flex: 4 }}>
                            <Route exact path="/" component={Main} />
                            <Route path="/addProduct" component={AddProduct} />
                            <Route path="/userServiceDetail" component={UserServiceDetail} />
                            <Route path="/userQueries" component={UserQueries} />
                        </div>
                    </div>
                    {/* <Navbar /> */}
                </div>
            </Router>
        )
    }
}