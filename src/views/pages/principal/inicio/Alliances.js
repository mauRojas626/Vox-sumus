import React, { Component } from 'react'
import {
    CCol,
    CRow,
    CJumbotron,
  } from '@coreui/react'
import ScrollHorizontal from './ScrollHorizontal'

export default class Alliances extends Component {
    render() {
        return (
            <CJumbotron>
                <CCol>
                    <CRow>
                        <CCol>
                            <h1 className="display-3">Alianzas</h1>
                            <p className="lead">Somos un grupo multidisciplinario formado por estudiantes de la PUCP que tiene como objetivo promover, integrar y colaborar con todos los sectores que se encuentran en situación de vulnerabilidad tanto a nivel nacional como internacional. </p>
                        </CCol>
                    </CRow>
                    <CRow className="areas">
                        <ScrollHorizontal></ScrollHorizontal>
                    </CRow>
                </CCol>
            </CJumbotron>
        )
    }
}
