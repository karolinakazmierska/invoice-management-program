import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class NewInvoiceForm extends Component {
    render() {
        return (
            <div>
                This is an add new invoice form
                <button onClick={this.props.hideNewInvoiceForm}>Cancel</button>
            </div>
        )
    }
}

const mapStateToProps = ({data}) => {
    return {
        data
    }
}

export default connect(mapStateToProps, actions)(NewInvoiceForm);
