import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {CircularProgress, Container, Button, Typography, TextField, Select, MenuItem, Grid, FormLabel} from '@material-ui/core';

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
        const newInvoice = {
            id: this.state.invoiceNumber,
            product: (this.state.invoiceProduct == '' ? Array.from(this.props.data.products)[0] : this.state.invoiceProduct)
        }
        if (!newInvoice.id) {
            alert('Invoice number cannot be empty');
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
                <Typography>Add a new invoice</Typography>

                {!data.products ?
                 <CircularProgress />
                :
                <form onSubmit={this.saveNewInvoice}>

                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                    spacing={-2}
                >
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >
                        <FormLabel>Invoice number</FormLabel>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" name="invoiceNumber" onChange={e => this.handleChange(e)} />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >
                        <FormLabel>Product:</FormLabel>
                        <Select autoWidth="true" displayEmpty="true" label="Outlined" variant="outlined" name="invoiceProduct" onChange={e => this.handleChange(e)}>
                            {this.renderProductOptions()}
                        </Select>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                    >
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
