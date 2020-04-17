import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class InvoicesList extends Component {

    componentWillMount() {
        this.props.fetchInvoices();
    }

    renderInvoices() {
        const {data} = this.props;
        const arrData = Array.from(data);
        if (!arrData) {
            return <div>You have no invoices</div>
        } else {
            return arrData.map((obj) => {
                return (
                    <div>Invoice number {obj.id}</div>
                )
            });
        }

    }

    render() {
        return (<div>
                <div>Your invoices</div>
                {this.renderInvoices()}
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
