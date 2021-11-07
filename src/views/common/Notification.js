import React, { Component } from 'react'
import {
    CToast,
    CToaster,
    CToastBody,
    CToastHeader,
} from '@coreui/react'

export default class Notification extends Component {
    render() {
        const { mode, title, body } = this.props;
        return (
            <CToaster position='top-center'>
                <CToast color={mode} show={true} autohide={2000} fade={true} >
                    <CToastHeader closeButton={true}>
                        {title}
                    </CToastHeader>
                    <CToastBody>
                        {body}
                    </CToastBody>
                </CToast>
            </CToaster>
        )
    }
}