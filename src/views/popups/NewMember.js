import React, { Component } from 'react'
import {
    CButton,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CCol,
    CInput,
    CRow,
    CInputFile,
    CLabel,
} from '@coreui/react'
import MemberModel from 'src/services/models/MemberModel';

export default class NewMember extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: true,
            member: new MemberModel(),
            chosenFile: "",
        }
    }

    async componentDidMount(){
        this.setState({ member: this.props.member })
    }

    onChange = (key, isNumeric = false, isDate = false) => (e) => {
        const { member } = this.state;
        const { value } = e.target;
        const val = isNumeric ? parseInt(value || '0') : isDate ? e.target.value : e.target.value;
        let updatedMember = { ...member };
        updatedMember[key] = val;

        this.setState({member: updatedMember});
    }

    onAccept = () => {
        this.setState({show: true});
        this.props.onAccept(this.state.member, this.state.chosenFile, this.props.option);
    }
    
    onDiscard = () => {
        this.setState({show: true});
        this.props.onDiscard();
    }

    onUpload = (e) => {
        this.setState({ 
            chosenFile: e.target.files[0],
        })
    }

    render() {
        const colorModal = this.props.color || 'primary';
        const mode = this.props.option;
        const { member } = this.state;
        const chosenFile = this.state.chosenFile.name !== undefined ? this.state.chosenFile.name : '200x200px'
        return (
            <CModal color={colorModal}  centered={true} show={this.state.show} onClose={() => this.setState({show: !this.state.show})} onClosed={this.onDiscard}>
                <CModalHeader closeButton>
                    <CModalTitle>
                        {mode === 'add' ? 'Nuevo Miembro': mode === 'director' ? 'Nuevo Director' : 'Editar Miembro'}
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CRow className="d-flex align-items-center">
                        <CCol xs="3">
                            Nombre: 
                        </CCol>
                        <CCol xs="6">
                            <CInput type="text" id="name" className="search-by-input-success" name="name" placeholder={"Nombre"} value={member.name} onChange={this.onChange('name')}></CInput>
                        </CCol>
                    </CRow>
                    <CRow className="d-flex align-items-center mt-1">
                        <CCol xs="3">
                            Codigo: 
                        </CCol>
                        <CCol xs="6">
                            <CInput type="text" id="code" className="search-by-input-success" name="code" placeholder={"Codigo"} value={member.code} onChange={this.onChange('code')}></CInput>
                        </CCol>
                    </CRow>
                    <CRow className="d-flex align-items-center mt-1">
                        <CCol xs="3">
                            Carrera: 
                        </CCol>
                        <CCol xs="6">
                            <CInput type="text" id="career" className="search-by-input-success" name="career" placeholder={"Carrera"} value={member.career} onChange={this.onChange('career')}></CInput>
                        </CCol>
                    </CRow>
                    <CRow className="d-flex align-items-center mt-1">
                        <CCol xs="3">
                            Correo: 
                        </CCol>
                        <CCol xs="6">
                            <CInput type="email" id="email" className="search-by-input-success" name="email" placeholder={"Correo"} value={member.email} onChange={this.onChange('email')}></CInput>
                        </CCol>
                    </CRow>
                    <CRow className="d-flex align-items-center mt-1">
                        <CCol xs="3">
                            Foto: 
                        </CCol>
                        <CCol xs="6">
                            <CInputFile id="file-input" name="file-input" custom accept=".jpeg,.png,.xls" onChange={this.onUpload}/>
                                <CLabel htmlFor="file-input" variant="custom-file" style={{overflow: 'hidden'}}>
                                    {chosenFile}
                                </CLabel>
                        </CCol>
                    </CRow>
                </CModalBody>
                <CModalFooter>
                    <CButton color={colorModal} onClick={this.onAccept}>
                        Aceptar
                    </CButton>
                    {' '}
                    <CButton color="secondary" onClick={this.onDiscard}>
                        Cancelar
                    </CButton>
                </CModalFooter>
            </CModal>
        )
    }
}
