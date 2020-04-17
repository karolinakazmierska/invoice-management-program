import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import InvoicesList from './InvoicesList';
import NewInvoiceForm from './NewInvoiceForm';

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
                <div>
                    <div>This is Home</div>
                    <button onClick={() => this.showNewInvoiceForm()}>Create a new invoice</button>
                    <InvoicesList />
                </div>
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
            <div>
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
