import React, { Component } from 'react'
import Banner from '../inicio/Banner'
import Posts from './Posts'
import Sidebar from './Sidebar'
import {
    CCol,
    CRow,
  } from '@coreui/react'

export default class Principal extends Component {
    render() {
        return (
            <>
                <div>
                    <Banner id="banner"></Banner>
                </div>
                <CRow className="mt-4">
                    <CCol md='9'>
                        <Posts/>
                    </CCol>
                    <CCol md='3'>
                        <Sidebar/>
                    </CCol>
                </CRow>
            </>
        )
    }
}
