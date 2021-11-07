import React, { Component } from 'react'
import {
    CRow,
    CCol
  } from '@coreui/react'
  import Miembro from './Miembro';
export default class Consejo extends Component {
    render() {
        return (
            <>
                <CRow className="mt-4 mb-4">
                    <CCol className="m-auto"> <h1>CONSEJO CONSULTIVO</h1> </CCol> 
                </CRow>
                <CRow>
                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" bio="texto de pruebaa" size="4"></Miembro>
                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" bio="texto de pruebaa" size="4"></Miembro>
                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" bio="texto de pruebaa" size="4"></Miembro>
                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" bio="texto de pruebaa" size="4"></Miembro>
                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" bio="texto de pruebaa" size="4"></Miembro>
                </CRow>
            </>
        )
    }
}
