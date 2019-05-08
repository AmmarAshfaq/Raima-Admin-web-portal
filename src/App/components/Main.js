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
                            <Card>
                                <Card.Content style={{ backgroundColor: 'blue', padding: 40 }}>
                                    <Header as='h1' style={{ color: "#fff" }}>Customer</Header>
                                </Card.Content>
                                <Card.Content extra>

                                    {/* <Modal trigger={<Button
                                        onClick={this.handleOpen}
                                    >Add Customer</Button>}
                                        dimmer={'inverted'}
                                        open={this.state.modelOpen}
                                        onClose={this.handleClose}

                                    >
                                        <Header icon='user' content='Create Customer' />
                                        <Modal.Content>
                                            <Form >
                                                <Form.Group width='equal'>
                                                    <Form.Input fluid label='First name' placeholder='First name' name="fname" value={fname} width={5} onChange={this.handleChange} />
                                                    <Form.Input fluid label='Last name' placeholder='Last name' name="lname" value={lname} width={5} onChange={this.handleChange} />
                                                    <Form.Input fluid label='Phone Number' placeholder='Phone Number' name="pNum" value={pNum} width={5} onChange={this.handleChange} />

                                                    <Form.Select fluid label='Gender'
                                                        options={optionsSex}
                                                        name="gender"
                                                        placeholder='Gender'
                                                        value={value}
                                                        width={5}
                                                        onChange={this.handleChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group width='equal'>
                                                    <Form.Input fluid label='Street Address' name="streetAddress" value={streetAddress} placeholder='Street Address' onChange={this.handleChange} width={5} />
                                                    <Form.Input fluid label='City' name="city" value={city} placeholder='City' width={5} onChange={this.handleChange} />
                                                    <Form.Input fluid label='State/Province' name="state" value={state} placeholder='State/Province' width={5} onChange={this.handleChange} />

                                                    <Form.Select fluid label='Country'
                                                        options={optionCountry}
                                                        value={value}
                                                        placeholder='Country' width={5}
                                                        onChange={this.handleChange}
                                                        name="country"

                                                    />
                                                </Form.Group>
                                                <Form.Group width='equal'>
                                                    <Form.Input fluid label='Email' type="email" name="email" value={email} onChange={this.handleChange} placeholder='ex: myname@example.com' width={5} />
                                                    <Form.Input fluid label='Postal / Zip Code' name="postal" value={postal} placeholder='Postal / Zip Code' width={5} onChange={this.handleChange} />
                                                    <Form.Input type="date" fluid label='Date Of Birth' placeholder='Date Of Birth' width={5} name="dob" value={dob} onChange={this.handleChange} />
                                                    <Form.Input fluid label='CNIC No' placeholder='CNIC No' width={5} name="nic" value={nic} onChange={this.handleChange} />


                                                </Form.Group>
                                                <Form.Group width='equal'>
                                                    <Form.Input fluid label='Installment No' placeholder='Installment No' width={5} name="installmentNo" value={installmentNo} onChange={this.handleChange} />
                                                    <Form.Input type="date" fluid label='Installment Date' placeholder='Installment Date' width={5} name="installmentDate" value={installmentDate} onChange={this.handleChange} />
                                                    <Form.Input fluid label='Installment Amount' placeholder='Installment Amount' width={5} type="Number" name="installmentAmount" value={installmentAmount} onChange={this.handleChange} />
                                                    <Form.Select fluid label='Installment Paid'
                                                        onChange={this.handleChangeToggle}
                                                        options={optionInstallment}
                                                        value={value}
                                                        placeholder='Installment Paid' width={5}
                                                        name="installmentPaid"
                                                    />

                                                </Form.Group>
                                                <Form.Group width='equal'>
                                                    <Form.Input type="date" fluid label='Installment Due Date' placeholder='Installment Due Date' name="instalmentDueDate" value={instalmentDueDate} width={5} onChange={this.handleChange} />
                                                    <Form.Input fluid label='DownPayment Amount' placeholder='DownPayment Amount' width={5} type="Number" name="downpaymentAmount" value={downpaymentAmount} onChange={this.handleChange} />
                                                    <Form.Input fluid label='User ID' placeholder='User ID' width={5} name="uid" value={uid} onChange={this.handleChange} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button color='red' onClick={this.handleClose}>
                                                <Icon name='close' /> Close
                      </Button>
                                            <Button color='green'
                                                onClick={this.onSubmit}
                                            >
                                                <Icon name='send' /> Submit
                      </Button>
                                        </Modal.Actions>
                                    </Modal> */}
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        createCustomerComponent: (obj) => dispatch(createCustomerAction(obj)),
        getUserListComponent: () => dispatch(getUserList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);