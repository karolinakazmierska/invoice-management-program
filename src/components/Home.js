import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import InvoicesList from './InvoicesList';
import NewInvoiceForm from './NewInvoiceForm';
import {Grid, Container, Button, Typography} from '@material-ui/core';

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
                <Typography>Welcome to Invoice Management System</Typography>
                    <Grid
                        container
                        justify="flex-end"
                        alignItems="stretch"
                        spacing={-2}
                    >
                        <Button variant="contained" color="primary" onClick={() => this.showNewInvoiceForm()}>Create a new invoice</Button>
                    </Grid>
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
