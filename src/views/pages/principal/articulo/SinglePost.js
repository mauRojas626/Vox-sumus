import React, { Component } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CImg,
    CRow,
    CBadge,
    CCardSubtitle
  } from '@coreui/react'
import '../../../../scss/post.scss'
export default class SinglePost extends Component {
    render() {
        return (
            <CCard>
                <CCardHeader>
                    <CImg
                        width="100%"
                        height="280px"
                        block={true} 
                        src={"https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png"} 
                        alt="article image"
                    />
                </CCardHeader>
                <CCardBody>
                    <CRow className='mb-4'>
                        <CBadge color="info" className="float-right ml-1">APP</CBadge>
                        <CBadge color="info" className="float-right ml-1">Discapacidad</CBadge>
                        <CBadge color="info" className="float-right ml-1">LGBTIQ+</CBadge>
                    </CRow>
                    <CRow className='mb-2'>
                        <CCardSubtitle>titulo</CCardSubtitle>
                    </CRow>
                    <CRow>
                        <p className='desc'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
                            ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
                            ex ea commodo consequat.
                        </p>
                    </CRow>
                </CCardBody>
            </CCard>
        )
    }
}
