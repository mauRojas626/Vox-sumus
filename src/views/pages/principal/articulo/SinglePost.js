import React, { Component } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CImg,
    CRow,
    CBadge,
    CLink,
    CCol,
    CTooltip,
    CButton
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
  import { 
      cilTrash,
  } from '@coreui/icons'
import '../../../../scss/post.scss'
export default class SinglePost extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.id);
    }

    render() {
        const article = this.props.article;
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
                        <CCol md="10" >
                            { article.tags.map((tag, index) => 
                            <CBadge key={index} color="info" className="float-left ml-1">{tag}</CBadge>) }
                        </CCol>
                        <CCol md="2" style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <CTooltip content={'Eliminar Artículo'} placement='top-start'>
                                <CButton block color="danger" className="mb-4" style={{width: '45px'}} onClick={this.onDelete}>
                                    <CIcon content={cilTrash}/>
                                </CButton>
                            </CTooltip>
                        </CCol>
                    </CRow>
                    <CRow className='mb-2'>
                        <p className='title ml-3 mr-3'><CLink to={"/post/"+article._id}>{article.title}</CLink></p>
                    </CRow>
                    <CLink></CLink>
                    <CRow>
                        <p className='desc text-justify ml-3 mr-3'>
                            {article.description}
                        </p>
                    </CRow>
                </CCardBody>
            </CCard>
        )
    }
}
