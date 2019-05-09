import React, { Component } from 'react';
import { Header, Divider, Card, Icon, Grid, GridRow, Button, Modal, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createCustomerAction, getUserList } from '../../store/action'
// const optionsSex = [
//     { key: 'm', text: 'Male', value: 'male' },
//     { key: 'f', text: 'Female', value: 'female' },
// ]

// const optionCountry = [
//     {
//         key: 'pk', text: 'Pakistan', value: 'pakistan'
//     },
//     {
//         key: 'af', text: 'Afghanistan', value: 'afghanistan'
//     }, {
//         key: 'iq', text: 'Iraq', value: 'iraq'
//     }, {
//         key: 'qa ', text: 'Qatar', value: 'qatar'
//     }, {
//         key: 'sa', text: 'Saudi Arabia', value: 'saudi arabia'
//     }, {
//         key: 'sd', text: 'Sudan', value: 'sudan'
//     }, {
//         key: 'lk', text: 'Srilanka', value: 'srilanka'
//     }, {
//         key: 'ch', text: 'Switzerland', value: 'switzerland'
//     },
// ]
// const optionInstallment = [
//     {
//         key: 'true', text: 'True', value: 'true'
//     },
//     {
//         key: 'false', text: 'False', value: 'false'
//     },
// ]
class Main extends Component {
    constructor() {
        super();
        this.state = {
            modelOpen: false,
            fname: '',
            lname: '',
            pNum: '',
            gender: '',
            streetAddress: '',
            city: '',
            state: '',
            country: '',
            email: '',
            postal: '',
            dob: '',
            nic: '',
            installmentNo: '',
            installmentDate: '',
            installmentAmount: 0,
            installmentPaid: false,
            instalmentDueDate: '',
            downpaymentAmount: 0,
            uid: ''
        }
    }
    componentWillMount() {
        this.props.getUserListComponent();
    }
    // handleOpen = () => this.setState({
    //     modelOpen: true
    // })
    // handleClose = () => this.setState({
    //     modelOpen: false
    // })
    // handleChange = (event, { name, value }) => {
    //     this.setState({
    //         [name]: value
    //     })
    // }
    // onSubmit = () => {
    //     // console.log(this.state);
    //     const { value, uid, fname, downpaymentAmount, lname, pNum, postal, gender, streetAddress, city, state, country, email, dob, nic, installmentAmount, installmentNo, installmentDate, installmentPaid, instalmentDueDate } = this.state;
    //     console.log(this.state)
    //     if (fname !== '' && lname !== '' && pNum !== '' && postal !== '' && gender !== '' && downpaymentAmount !== 0 && streetAddress !== '' && city !== '' && state !== '' && country !== '' && email !== '' && dob !== '' && nic !== '' && installmentAmount !== '' && installmentNo !== '' && installmentDate !== '' && instalmentDueDate !== ''
    //     ) {
    //         console.log('run')
    //         this.props.createCustomerComponent({
    //             fname,
    //             lname,
    //             pNum,
    //             postal,
    //             gender,
    //             streetAddress,
    //             city,
    //             state,
    //             country,
    //             email,
    //             dob,
    //             nic,
    //             installmentAmount,
    //             installmentDate,
    //             installmentNo,
    //             installmentPaid,
    //             instalmentDueDate,
    //             downpaymentAmount,
    //             uid
    //         });
    //     } else {
    //         alert('Please enter all required field')
    //     }
    //     this.setState({
    //         fname: '',
    //         lname: '',
    //         pNum: '',
    //         gender: '',
    //         streetAddress: '',
    //         city: '',
    //         state: '',
    //         country: '',
    //         email: '',
    //         postal: '',
    //         dob: '',
    //         nic: '',
    //         installmentNo: '',
    //         installmentDate: '',
    //         installmentAmount: 0,
    //         installmentPaid: false,
    //         instalmentDueDate: '',
    //         modelOpen: false,
    //         downpaymentAmount: 0,
    //         uid: ''
    //     })


    // }
    // handleChangeToggle = (e, { name, value }) => this.setState({
    //     [name]: value === 'false' ? false : true
    // })

    render() {
        // const { value, uid, fname, downpaymentAmount, lname, pNum, postal, gender, streetAddress, city, state, country, email, dob, nic, installmentAmount, installmentNo, installmentDate, installmentPaid, instalmentDueDate } = this.state;
        return (

            <div >
                <Header as='h1' style={{ paddingTop: 40 }}>Requested Service List</Header>
                <Divider inverted />
                <Grid divided='vertically'>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            {
                                this.props.userListComponent !== null ?
                                    this.props.userListComponent.map((data, index) => 
                                        <Card>

                                            <Card.Content style={{ backgroundColor: 'blue', padding: 40 }}>
                                                <Header as='h1' style={{ color: "#fff" }}>{data.email}</Header>
                                            </Card.Content>

                                        </Card>
                                    )
                                    : null
                            }
                        </Grid.Column>

                    </Grid.Row>
                </Grid>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userListComponent: state.reducer.userList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createCustomerComponent: (obj) => dispatch(createCustomerAction(obj)),
        getUserListComponent: () => dispatch(getUserList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);