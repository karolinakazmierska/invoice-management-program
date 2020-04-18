import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CircularProgress, Typography, ListItem } from '@material-ui/core';

class InvoicesList extends Component {

    UNSAFE_componentWillMount() {
        this.props.fetchInvoices();
    }

    renderInvoices() {
        const {data} = this.props;
        let arrData = [];
        for (const key in data.invoices) {
            arrData.push(data.invoices[key]);
        }
        return arrData.map((obj, i) => {
            return (
                <ListItem divider={true} key={i}><Typography color="textSecondary">Invoice number: {obj.id}</Typography></ListItem>
            )
        });
    }

    render() {
        const {data} = this.props;
        return (<div>
                <Typography >Your invoices</Typography>
                {!data.invoices ? <CircularProgress /> : this.renderInvoices()}
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
