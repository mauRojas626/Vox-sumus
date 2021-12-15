import React, { Component } from 'react'
import {
    CCol,
    CLabel,
    CRow,
    CInputFile,
    CInput,
    CTextarea,
    CImg,
    CModalBody,
    CModal,
    CModalHeader,
    CModalFooter,
    CModalTitle,
  } from '@coreui/react'
import FooterButtons from '../common/FooterButtons'
import Confirmation from './../common/Confirmation'
import ArticleModel from "../../services/models/ArticleModel"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default class NewArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            showConfirmation: false,
            show: true,
            image: '#',
            chosenFile: '',
            article: new ArticleModel(),
            text: ""
        }
    }
    
    preview = (e) => {
        const imagefile = e.target.files[0]
        if (imagefile) {
            this.setState({image: URL.createObjectURL(imagefile), chosenFile:imagefile})
        }
    }

    onChange = (key, isNumeric = false, isDate = false) => (e) => {
        const { article } = this.state;
        const { value } = e.target;

        const val = isNumeric ? parseInt(value || '0') : isDate ? e.target.value : e.target.value;
        let updatedArticle = { ...article };
        updatedArticle[key] = val;

        this.setState({article: updatedArticle});
    }

    //Botones de Registrar/Actualizar y Cancelar
    onSubmit = () => {
        this.setState({showConfirmation: true});
    }

    onCancel = () => {
        this.setState({show: true});
        this.props.onDiscard();
    }

    onSave = () => {
        const {article} = this.state;
        let finalArticle = {...article};
        finalArticle["logo"] = Date.now() + this.state.chosenFile.name
        this.props.onAccept(finalArticle, this.state.chosenFile);
        this.setState({ show: false, showConfirmation: false });
    }

    onDiscardConfirmation = () => {
        this.setState({showConfirmation: false});
    }

    handleChange = (e) => {
        const { article } = this.state;
        let updatedArticle = { ...article };
        updatedArticle["description"] = e;
        this.setState({article: updatedArticle});
    }

    render() {
        const modules = {
            toolbar: [
              [{size: []}],
              ['bold', 'italic', 'underline', 'strike'],
              [{'list': 'ordered'}, {'list': 'bullet'}, 
               {'indent': '-1'}, {'indent': '+1'}],
              ['link'],
              ['clean']
            ],
            clipboard: {
              // toggle to add extra line breaks when pasting HTML:
              matchVisual: false,
            }
        }
        const formats = [
            'size',
            'bold', 'italic', 'underline', 'strike',
            'list', 'bullet', 'indent',
            'link'
          ]
        const image = this.state.image;
        const chosenFile = this.state.chosenFile.name !== undefined ? this.state.chosenFile.name : 'Tamaño recomendado: 200x200px'
        return (
            <div>
                <CModal size="lg" centered={true} closeOnBackdrop={false} color='primary' show={this.state.show} onClose={() => this.setState({show: !this.state.show})} onClosed={this.onCancel}>
                    <CModalHeader closeButton>
                        <CModalTitle>
                            Agregar Artículo
                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                            <CRow>
                                <CImg id="image" className="d-block w-100" src={image}></CImg>
                            </CRow>
                            <CRow>
                                <CInputFile id="file-input" name="file-input" custom accept=".jpeg,.png,.xls" onChange={this.preview}/>
                                <CLabel htmlFor="file-input" variant="custom-file" style={{overflow: 'hidden'}}>
                                    {chosenFile}
                                </CLabel>
                            </CRow>
                            <CRow>
                                <CCol md='1'><CLabel htmlFor="title-input">Titulo</CLabel></CCol>
                                <CCol md='11'><CInput id="title-input" name="title-input" onChange={this.onChange("title")}></CInput></CCol>   
                            </CRow>
                            <CRow>
                                <CCol md='1'><CLabel htmlFor="name-input">Autor</CLabel></CCol>
                                <CCol md='11'><CInput id="name-input" name="name-input" onChange={this.onChange("authors")}></CInput></CCol>   
                            </CRow>
                            <CRow>
                                <CCol md='1'><CLabel htmlFor="name-input">Desc. breve</CLabel></CCol>
                                <CCol><CTextarea id="body-input" name="body-input" onChange={this.onChange("miniDesc")}></CTextarea></CCol>   
                            </CRow>
                            <CRow>
                                <CCol>
                                    <ReactQuill 
                                        value={this.state.article.description}
                                        onChange={this.handleChange} 
                                        placeholder="Ingrese texto"
                                        theme="snow"
                                        modules={modules}
                                        formats={formats}
                                    />
                                </CCol>   
                            </CRow>
                    </CModalBody>
                    <CModalFooter>
                        <FooterButtons createMode={true} onSubmit={this.onSubmit} onCancel={this.onCancel}></FooterButtons>
                    </CModalFooter>
                </CModal>
                {this.state.showConfirmation ? <Confirmation color='primary' onAccept={this.onSave} onDiscard={this.onDiscardConfirmation} title={'Crear Alianza'} message={'¿Está seguro de registrar esta agrupación?'}></Confirmation> : null}
                
            </div>
        )
    }
}
