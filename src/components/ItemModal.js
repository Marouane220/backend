import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import uuid from 'uuid/v1';


class ItemModal extends Component{
    state = {
        modal : true,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            id : 5,
            name: this.state.name
        }

        this.props.addItem(newItem);

        this.toggle();
    }

    render(){
        return(
            <div>
                <Button color="dark" style={{ marginBottom: '1rem' }} onClick={this.toggle}>
                    addItem
                </Button>
                <Modal isOpen={ this.state.modal } toggle={this.toggle}>
                    <ModalHeader toggle={ this.toggle }>
                        Add to Shopping list 
                    </ModalHeader>
                    <ModalBody>
                        <Form  className="text-center" onSubmit={ this.onSubmit}>
                            <FormGroup>
                                <Label for="item" className='h3 m-2'> Item </Label>
                                <Input type="text" name="name" id="item" placeholder="Add Shopping Item" onChange={this.onChange} />
                            </FormGroup>
                            <Button className='btn btn-warning btn-lg m-2' block>
                                Add Item
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    item : state.item
})

export default connect(mapStateToProps, {addItem})(ItemModal);