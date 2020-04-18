import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {CircularProgress, Container, Button, Typography, TextField, Select, MenuItem, Grid, FormLabel} from '@material-ui/core';

class NewInvoiceForm extends Component {
    state = {
        invoiceNumber: '',
        invoiceProduct: '',
        invoiceIds: []
    }
    UNSAFE_componentWillMount() {
        this.props.fetchProducts();
        const {data} = this.props;
        let arrData = [];
        for (const key in data.invoices) {
            arrData.push(data.invoices[key].id);
        }
        this.setState({
            invoiceIds: arrData
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    saveNewInvoice = (event) => {
        event.preventDefault();
        const newInvoice = {
            id: this.state.invoiceNumber,
            product: this.state.invoiceProduct || ''
        }
        const isDuplicate = this.state.invoiceIds.includes(newInvoice.id)

        if (!newInvoice.id) {
            alert('Invoice number cannot be empty');
        } else if (!newInvoice.product) {
            alert('Product field cannot be empty');
        } else if (isDuplicate) {
            alert('An invoice with this number already exists');
        } else {
            this.props.saveInvoice(newInvoice);
            this.props.hideNewInvoiceForm();
        }
    }
    renderProductOptions = () => {
        const {data} = this.props;
        const arrData = Array.from(data.products);
        return arrData.map((elem, i) => {
            return <MenuItem value={elem} key={i}>{elem}</MenuItem>
        })
    }
    render() {
        const {data} = this.props;
        return (
            <Container maxWidth="sm">
                <div style={{ paddingBottom: 20, paddingTop: 20 }}>
                    <Typography variant="h6">Add a new invoice</Typography>
                </div>

                {!data.products ?
                 <CircularProgress />
                :
                <form onSubmit={this.saveNewInvoice}>
                    <Grid container direction="column">
                        <Grid>
                            <div style={{ paddingBottom: 20 }}>
                                <Grid item xs={12} sm={6}>
                                    <FormLabel>Invoice number</FormLabel>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField style={{minWidth: '100%'}} id="outlined-basic" variant="outlined" type="text" name="invoiceNumber" onChange={e => this.handleChange(e)} />
                                </Grid>
                            </div>
                            <div style={{ paddingBottom: 20 }}>
                                <Grid item xs={12} sm={6}>
                                    <FormLabel>Product:</FormLabel>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Select style={{minWidth: '100%'}} variant="outlined" name="invoiceProduct" value={this.state.invoiceProduct} onChange={e => this.handleChange(e)}>
                                        {this.renderProductOptions()}
                                    </Select>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid container justify="space-between">
                            <Button variant="contained" color="secondary" onClick={this.props.hideNewInvoiceForm}>Cancel</Button>
                            <Button variant="contained" color="primary" type="submit" value="Submit">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
                }

            </Container>
        )
    }
}

const mapStateToProps = ({data}) => {
    return {
        data
    }
}
export default connect(mapStateToProps, actions)(NewInvoiceForm);
