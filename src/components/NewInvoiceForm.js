import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class NewInvoiceForm extends Component {

    componentWillMount() {
        this.props.fetchProducts();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Will submit a new invoice')
    }

    renderProductOptions = () => {
        const {data} = this.props;
        const arrData = Array.from(data.products);
        return arrData.map((elem, i) => {
            return <option value={elem} key={i}>{elem}</option>
        })
    }

    render() {
        const {data} = this.props;
        return (
            <div>
                <div>This is an add new invoice form</div>

                {!data.products ?
                <div>Loading </div>
                :
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Invoice number
                            <input type="text" name="name" />
                        </label>
                    </div>
                    <div>
                        <label>
                        Product:
                            <select>
                                {this.renderProductOptions()}
                            </select>
                        </label>
                    </div>
                    <div>
                        <button onClick={this.props.hideNewInvoiceForm}>Cancel</button>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                }

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
