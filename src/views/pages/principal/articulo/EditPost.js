import React, { Component } from 'react'
import {
    CCol,
    CLabel,
    CRow,
    CInputFile,
    CInput,
    CTextarea,
    CButton,
    CImg
  } from '@coreui/react'
export default class EditPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: '#',
        }
    }
    
    preview = (e) => {
        const imagefile = e.target.files[0]
        if (imagefile) {
            this.setState({image: URL.createObjectURL(imagefile)})
        }
    }

    render() {
        const image = this.state.image; 
        return (
            <div className="row justify-content-center">
                <CCol md='8' >
                    <CRow>
                        <CImg id="image" className="d-block w-100" src={image}></CImg>
                    </CRow>
                    <CRow>
                        <CInputFile id="file-input" name="file-input" custom accept=".jpeg,.png,.xls" onChange={this.preview}/>
                        <CLabel htmlFor="file-input" variant="custom-file" style={{overflow: 'hidden'}}>
                            ingrese archivo
                        </CLabel>
                    </CRow>
                    <CRow>
                        <CCol md='1'><CLabel htmlFor="title-input">Titulo</CLabel></CCol>
                        <CCol md='11'><CInput id="title-input" name="title-input"></CInput></CCol>   
                    </CRow>
                    <CRow>
                        <CCol md='1'><CLabel htmlFor="name-input">Autor</CLabel></CCol>
                        <CCol md='11'><CInput id="name-input" name="name-input"></CInput></CCol>   
                    </CRow>
                    <CRow>
                        <CCol><CTextarea id="body-input" name="body-input"></CTextarea></CCol>   
                    </CRow>
                    <CRow>
                        <CButton color='primary'>Guardar</CButton>
                    </CRow>
                </CCol>
            </div>
        )
    }
}
