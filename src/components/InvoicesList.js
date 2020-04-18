import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CircularProgress, Typography, ListItem, ListItemSecondaryAction,  IconButton } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete'

class InvoicesList extends Component {
    UNSAFE_componentWillMount() {
        this.props.fetchInvoices();
    }
    handleDelete = (obj) => {
        this.props.deleteInvoice(obj);
    }
    renderInvoices() {
        const {data} = this.props;
        let arrData = [];
        for (const key in data.invoices) {
            arrData.push(data.invoices[key]);
        }
        if (data && data.invoices == null) {
            return <Typography color="secondary">You don't have any invoices yet.</Typography>
        }
        return arrData.map((obj, i) => {
            return (
                <ListItem divider={true} key={i} button ContainerComponent="div">
                    <Typography color="textSecondary">Invoice number: {obj.id}</Typography>
                    <ListItemSecondaryAction >
                        <IconButton color='primary' onClick={() => this.handleDelete(obj)} ><Delete/></IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )
        });
    }
    render() {
        const {data} = this.props;
        return (<div>
                <Typography >Your invoices</Typography>
                {data.invoices === undefined ? <CircularProgress /> : this.renderInvoices()}
            </div>
        )
    }
}

const mapStateToProps = ({data}) => {
    return {
        data
    }
}
export default connect(mapStateToProps, actions)(InvoicesList);
