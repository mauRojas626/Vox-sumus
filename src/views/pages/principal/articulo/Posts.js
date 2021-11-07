import { CCol, CRow } from '@coreui/react'
import React, { Component } from 'react'
import SinglePost from './SinglePost'

export default class Posts extends Component {
    render() {
        return (
            <CRow>
            <CCol md='6'>
                <SinglePost></SinglePost>
            </CCol>
            <CCol md='6'>
                <SinglePost></SinglePost>
            </CCol>
            <CCol md='6'>
                <SinglePost></SinglePost>
            </CCol>
            </CRow>
        )
    }
}
