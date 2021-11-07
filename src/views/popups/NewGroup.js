import React, { Component } from 'react'
import {
    CCard,
    CCardBody,
    CCol,
    CModal,
    CModalBody,
    CModalFooter,
    CModalHeader,
    CModalTitle,
    CRow,
    CInput,
    CInputFile,
    CLabel
} from '@coreui/react'
import FooterButtons from '../common/FooterButtons'
import Confirmation from './../common/Confirmation'
import GroupModel from '../../services/models/GroupModel'

export default class NewGroup extends Component {
    constructor(props){
        super(props);
        this.state = {
            showConfirmation: false,
            show: true,
            group: new GroupModel(),
            chosenFile: "",
        }
    }

    onChange = (key, isNumeric = false, isDate = false) => (e) => {
        const { group } = this.state;
        const { value } = e.target;

        const val = isNumeric ? parseInt(value || '0') : isDate ? e.target.value : e.target.value;
        let updatedGroup = { ...group };
        updatedGroup[key] = val;

        this.setState({group: updatedGroup});
    }
    
    //Botones de Registrar/Actualizar y Cancelar
    onSubmit = () => {
        this.setState({showConfirmation: true});
    }

    onCancel = () => {
        this.setState({show: true});
        this.props.onDiscard();
    }

    //Confirmation
	onSave = () => {
        const {group} = this.state;
        let finalGroup = {...group};
        finalGroup["logo"] = Date.now() + this.state.chosenFile.name
        this.props.onAccept(finalGroup, this.state.chosenFile);
        this.setState({ show: false, showConfirmation: false });
    }

    onDiscardConfirmation = () => {
        this.setState({showConfirmation: false});
    }

    onUpload = (e) => {
        this.setState({ 
            chosenFile: e.target.files[0],
        })
    }

    render() {
        const { group } = this.state;
        const chosenFile = this.state.chosenFile.name !== undefined ? this.state.chosenFile.name : 'Tamaño recomendado: 200x200px'
        return (
            <div>
                <CModal size="lg" centered={true} closeOnBackdrop={false} color='primary' show={this.state.show} onClose={() => this.setState({show: !this.state.show})} onClosed={this.onCancel}>
                    <CModalHeader closeButton>
                        <CModalTitle>
                            Agregar Alianza
                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCard>
                            <CCardBody>
                                <CRow className="d-flex align-items-center">
                                    <CCol xs="3">
                                        Name: 
                                    </CCol>
                                    <CCol xs="6">
                                        <CInput type="text" id="name" className="search-by-input-success" name="name" placeholder={"Ingrese el nombre de la agrupación"} value={group.name} onChange={this.onChange('name')}></CInput>
                                    </CCol>
                                </CRow>
                                <CRow className="d-flex align-items-center mt-3">
                                    <CCol xs="3">
                                        Logo: 
                                    </CCol>
                                    <CCol xs="6">
                                        <CInputFile id="file-input" name="file-input" custom accept=".jpeg,.png,.xls" onChange={this.onUpload}/>
                                            <CLabel htmlFor="file-input" variant="custom-file" style={{overflow: 'hidden'}}>
                                                {chosenFile}
                                            </CLabel>
                                    </CCol>
                                </CRow>
                                
                            </CCardBody>
                        </CCard>
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
