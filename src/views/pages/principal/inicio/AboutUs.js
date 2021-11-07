import React, { Component } from 'react'
import {
    CCol,
    CRow,
    CJumbotron,
  } from '@coreui/react'

export default class QuienesSomos extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <CJumbotron>
                <CRow>
                    <CCol md="7">
                        <h1 className="display-3">{this.props.titulo}</h1>
                        <p className="lead">{this.props.texto} </p>
                    </CCol>
                    <CCol className="colAreas  m-auto">
                        <CRow className="areas">
                            <div className="area mujer d-flex justify-content-center align-items-center"><p>MUJER</p></div>
                            <div className="area discapacidad d-flex justify-content-center align-items-center"><p>DISCAPACIDAD</p></div>
                            <div className="area rela d-flex justify-content-center align-items-center"><p>RELACIONES PUBLICAS</p></div> 
                        </CRow>
                        <CRow className="areas">
                            <div className="area pandemia d-flex justify-content-center align-items-center"><p>AFECTADOS POR PANDEMIA</p></div>
                            <div className="area lgbt d-flex justify-content-center align-items-center"><p>LGBTIQ+</p></div> 
                            <div className="area difu d-flex justify-content-center align-items-center"><p>DIFUSIÓN</p></div>
                        </CRow>
                    </CCol>
                </CRow>
            </CJumbotron>
        )
    }
}
