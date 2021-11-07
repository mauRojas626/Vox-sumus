import React, { Component } from 'react'
import {
    CButton,
    CFormGroup
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

export default class FooterButtons extends Component {
    render() {
        const { createMode } = this.props;
        const save = createMode ? 'REGISTRAR ' : 'ACTUALIZAR ';

        return (
            <CFormGroup xs="12" style={{ display: "flex", justifyContent: 'flex-end'}}>
                <CButton size="sm" className = "mr-1" color="success" onClick={this.props.onSubmit}> {save} <CIcon name="cil-save" size="sm"/></CButton>
                {' '}
                <CButton size="sm" color="danger" onClick={this.props.onCancel}> CANCELAR <CIcon name="cil-x-circle" size="sm" /></CButton>
            </CFormGroup>
        )
    }
}
