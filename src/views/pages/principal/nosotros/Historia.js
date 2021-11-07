import React, { Component } from 'react'
import {
    CCol,
    CRow,
    CJumbotron,
    CImg
  } from '@coreui/react'
export default class Historia extends Component {
    render() {
        const titulo="Historia"
        const texto = "Somos un grupo multidisciplinario formado por estudiantes de la PUCP que tiene como objetivo promover, integrar y colaborar con todos los sectores que se encuentran en situación de vulnerabilidad tanto a nivel nacional como internacional."
        return (
            <>
                <CJumbotron>
                        <CRow>
                            <CCol>
                                <h1 className="display-3">{titulo}</h1>
                                <p className="lead">{texto} </p>
                            </CCol>
                            <CCol md="4">
                                <CImg src="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" alt="imagen" fluidGrow={true} align="center"/>
                            </CCol>
                        </CRow>
                </CJumbotron>
                <CJumbotron>
                    <h1 className="display-3">Fundadores</h1>
                    <CRow>
                        <CCol md="3" lg="3">
                            <CImg src="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" alt="persona" fluidGrow={true} />
                        </CCol>
                        <CCol md="9" lg="9">
                            <div className="contenedor">
                                <p className="frase">"Frase pendeja"</p>
                            </div>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol md="9" lg="9">
                            <div className="contenedor">
                                <p className="frase">"Frase pendeja"</p>
                            </div>
                        </CCol>
                        <CCol md="3" lg="3">
                            <CImg src="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" alt="persona" fluidGrow={true}/>
                        </CCol>
                    </CRow>
                </CJumbotron>
            </>
        )
    }
}
