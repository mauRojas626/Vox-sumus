import React, { Component } from 'react'
import {
    CCol,
    CImg,
    CCard,
    CCardBody,
    CCardFooter
  } from '@coreui/react'
export default class Miembro extends Component {
    render() {
        return (
            <CCol md={this.props.size}>
                <CCard>
                    <CCardBody>
                        <CImg src={this.props.image} alt="miembro" fluidGrow={true}/>
                    </CCardBody>
                    <CCardFooter>
                        <p><span>Nombre:</span> {this.props.name}</p>
                        <p>Carrera: {this.props.career}</p>
                        {this.props.bio ? <p><span>Biografía: </span>{this.props.bio}</p> : null}
                    </CCardFooter>
                </CCard>
            </CCol>
        )
    }
}
