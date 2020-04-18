import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import InvoicesList from './InvoicesList';
import NewInvoiceForm from './NewInvoiceForm';
import { Container, Button, Typography } from '@material-ui/core';

class Home extends Component {
    state = {
        showNewInvoiceForm: false,
    };

    renderNewInvoiceForm = () => {
        if (this.state.showNewInvoiceForm) {
            return <NewInvoiceForm hideNewInvoiceForm={this.hideNewInvoiceForm} />
        }
    }

    renderInvoiceList = () => {
        if (!this.state.showNewInvoiceForm) {
            return (
                <Container maxWidth="sm">
                    <div style={{ padding: 20 }}>
                        <Typography variant="h5" align="center">Welcome to Invoice Management System</Typography>
                    </div>
                    <div style={{ paddingBottom: 20, textAlign: 'center'  }}>
                        <Button variant="contained" color="primary" align="center" onClick={() => this.showNewInvoiceForm()}>Create a new invoice</Button>
                    </div>
                    <InvoicesList />
                </Container>
            )
        }
    }

    showNewInvoiceForm = () => {
        this.setState({showNewInvoiceForm: true})
    }
    hideNewInvoiceForm = () => {
        this.setState({showNewInvoiceForm: false})
    }

    render() {
        return (
            <div className="homeContainer">
                <div>
                    {this.renderInvoiceList()}
                </div>
                <div>
                    {this.renderNewInvoiceForm()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({data}) => {
    return {
        data
    }
}

export default connect(mapStateToProps, actions)(Home);
