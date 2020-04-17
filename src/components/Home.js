import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import InvoicesList from './InvoicesList';

class Home extends Component {
    render() {
        return (<div>
                <div>This is Home</div>
                <InvoicesList/>
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
