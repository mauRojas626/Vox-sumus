import React, { Component } from 'react'
import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
} from '@coreui/react'

export default class Confirmation extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }

    onAccept = () => {
        this.setState({show: true});
        this.props.onAccept();
    }
    
    onDiscard = () => {
        this.setState({show: true});
        this.props.onDiscard();
    }

    render() {
        const colorModal = this.props.color || 'primary';

        return (
            <CModal color={colorModal} show={this.state.show} onClose={() => this.setState({show: !this.state.show})} onClosed={this.onDiscard}>
                <CModalHeader closeButton>
                    <CModalTitle>
                        {this.props.title}
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    {this.props.message}
                </CModalBody>
                <CModalFooter>
                    <CButton color={colorModal} onClick={this.onAccept}>
                        Aceptar
                    </CButton>
                    {' '}
                    <CButton color="secondary" onClick={this.onDiscard}>
                        Cancelar
                    </CButton>
                </CModalFooter>
            </CModal>
        )
    }
}
