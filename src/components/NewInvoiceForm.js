import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class NewInvoiceForm extends Component {

    state = {
        invoiceNumber: '',
        invoiceProduct: ''
    }

    componentWillMount() {
        this.props.fetchProducts();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveNewInvoice = (event) => {
        event.preventDefault();
        const form = {
            invoiceNumber: this.state.invoiceNumber,
            invoiceProduct: (this.state.invoiceProduct == '' ? Array.from(this.props.data.products)[0] : this.state.invoiceProduct)
        }
        if (!form.invoiceNumber) {
            alert('Invoice number be empty');
        }
        console.log(form)
        // this.props.saveInvoice();
    }

    renderProductOptions = () => {
        const {data} = this.props;
        const arrData = Array.from(data.products);
        return arrData.map((elem, i) => {
            return <option value={elem} key={i} >{elem}</option>
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
                <form onSubmit={this.saveNewInvoice}>
                    <div>
                        <label>
                            Invoice number
                            <input type="text" name="invoiceNumber" onChange={e => this.handleChange(e)} />
                        </label>
                    </div>
                    <div>
                        <label>
                        Product:
                            <select name="invoiceProduct" onChange={e => this.handleChange(e)}>
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
