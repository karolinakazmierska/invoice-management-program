import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class InvoicesList extends Component {

    componentWillMount() {
        this.props.fetchInvoices();
    }

    renderInvoices() {
        const {data} = this.props;
        const arrData = Array.from(data.invoices);
        return arrData.map((obj, i) => {
            return (
                <div key={i}>Invoice number {obj.id}</div>
            )
        });
    }

    render() {
        const {data} = this.props;
        return (<div>
                <div>Your invoices</div>
                {!data.invoices ? <div>Loading </div> : this.renderInvoices()}
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
