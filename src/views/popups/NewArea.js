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
    CLabel,
    CDataTable,
    CButton,
    CTooltip,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import FooterButtons from '../common/FooterButtons'
import Confirmation from './../common/Confirmation'
import AreaModel from '../../services/models/AreaModel'
import NewMember from './NewMember'
import MemberModel from 'src/services/models/MemberModel'

export default class NewArea extends Component {
    constructor(props){
        super(props);
        this.state = {
            showConfirmation: false,
            show: true,
            area: new AreaModel(),
            chosenFile: "",
            member: new MemberModel(),
            listPhotos: [],
            showNewMember: false,
            showDirector: false,
            showMember: false,
            id: -1,
        }
    }

    onChange = (key, isNumeric = false, isDate = false) => (e) => {
        const { area } = this.state;
        const { value } = e.target;
        const val = isNumeric ? parseInt(value || '0') : isDate ? e.target.value : e.target.value;
        let updatedArea = { ...area };
        updatedArea[key] = val;

        this.setState({area: updatedArea});
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
        const {area} = this.state;
        let finalArea = {...area};
        finalArea["photo"] = Date.now() + this.state.chosenFile.name
        this.props.onAccept(finalArea, this.state.chosenFile, this.state.listPhotos);
        this.setState({ show: false, showConfirmation: false });
    }

    onSaveMember = (member, file, option) => {
        const {area, listPhotos} = this.state;
        member["photo"] = Date.now() + file.name;
        let finalPhotos = [...listPhotos, {name: member["photo"], file: file}];
        if(option === 'add'){
            let finalMembers = [...area.members, member];
            area.members = finalMembers;
            this.setState({ showNewMember: false, area: area, listPhotos: finalPhotos });
        }
        else if(option === 'director'){
            let finalDirector = [member];
            area.director = finalDirector;
            this.setState({ showDirector: false, area: area, listPhotos: finalPhotos });
        }
        else {
            area.members.splice(option, 1);
            let finalMembers = [...area.members, member];
            area.members = finalMembers;
            this.setState({ showMember: false, area: area, listPhotos: finalPhotos });
        }
        
    }

    onDiscardConfirmation = () => {
        this.setState({showConfirmation: false, showNewMember: false, showDirector: false, showMember:false});
    }

    onUpload = (e) => {
        this.setState({ 
            chosenFile: e.target.files[0],
        })
    }

    addMember = () => {
        this.setState({member: new MemberModel()});
        this.setState({showNewMember: true});
    }

    onDeleteMember = (id) => {
        let {area} = this.state;
        area.members.splice(id, 1); 
        this.setState({ area: area })
    }

    onEditMember = (id) => {
        let {area} = this.state;
        this.setState({ member: area.members[id], showMember: true, id: id })
    }

    onEditDirector = () => {
        let {area} = this.state;
        area.director.length !== 0 ? 
        this.setState({ member: area.director[0] }) :
        this.setState({ member: new MemberModel() })
        this.setState({showDirector: true});
    }

    createTableUsers = () => {
        let list = [];
        
        for(let i = 0; i<this.state.area.members.length; i++){
            const obj = {
                id: i,
                Nombre: this.state.area.members[i].name,
                Código: this.state.area.members[i].code,
                Correo: this.state.area.members[i].email,
            };
            if (Object.values(obj).filter(x => x).length > 0) {
                list = [...list,obj]
            }
        }
        return list;
    }

    render() {
        const { area } = this.state;
        const chosenFile = this.state.chosenFile.name !== undefined ? this.state.chosenFile.name : 'Tamaño recomendado: 200x200px'
        const fields = ['Nombre','Código','Correo','Editar', 'Borrar'];
        const updatedList = this.createTableUsers()
        const director = this.state.area.director.length === 0 ? 'Ingrese director' : this.state.area.director[0].name;
        return (
            <div>
                <CModal size="lg" centered={true} closeOnBackdrop={false} color='primary' show={this.state.show} onClose={() => this.setState({show: !this.state.show})} onClosed={this.onCancel}>
                    <CModalHeader closeButton>
                        <CModalTitle>
                            Agregar Area
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
                                        <CInput type="text" id="name" className="search-by-input-success" name="name" placeholder={"Ingrese el nombre del área"} value={area.name} onChange={this.onChange('name')}></CInput>
                                    </CCol>
                                </CRow>
                                <CRow className="d-flex align-items-center mt-3">
                                    <CCol xs="3">
                                        Color: 
                                    </CCol>
                                    <CCol xs="6">
                                        <CInput type="color" id="color" className="search-by-input-success" name="color" placeholder={"Ingrese el color del área"} value={area.color} onChange={this.onChange('color')}></CInput>
                                    </CCol>
                                </CRow>
                                <CRow className="d-flex align-items-center mt-3">
                                    <CCol xs="3">
                                        Miembros: 
                                    </CCol>
                                    <CCol style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <CTooltip content={'Agregar miembro'} placement='top-start' >
                                            <CButton block color="primary" className="mb-4" style={{width: '40px'}} onClick={this.addMember}>
                                                <CIcon content={cilPlus}/>
                                            </CButton>
                                        </CTooltip>
                                    </CCol>
                                </CRow>
                                <CRow className="mt-4 ml-2 mr-2">
                                    <CDataTable
                                        items= {updatedList}
                                        fields= {fields}
                                        itemsPerPage= {5}
                                        pagination
                                        striped
                                        size="sm"
                                        scopedSlots = {{
                                            'Borrar':
                                                (item, index)=>(
                                                    <td>
                                                        <CButton className="card-header-action" onClick={() => this.onDeleteMember(item.id)}>
                                                            <CIcon name="cil-trash" />
                                                        </CButton>
                                                    </td>
                                                ),
                                            'Editar':
                                                (item, index)=>(
                                                    <td>
                                                        <CButton className="card-header-action" onClick={() => this.onEditMember(item.id)}>
                                                            <CIcon name="cil-pencil" />
                                                        </CButton>
                                                    </td>
                                                )
                                                
                                        }}>
                                    </CDataTable>
                                </CRow>
                                <CRow className="d-flex align-items-center mt-3">
                                    <CCol xs="3">
                                        Director: 
                                    </CCol>
                                    <CCol xs="3">
                                        {director}
                                    </CCol>
                                    <CCol xs="1">
                                        <CTooltip content="Editar Director" placement='top'>
                                        <CButton className="card-header-action" onClick={this.onEditDirector}>
                                            <CIcon name="cil-pencil"/>
                                        </CButton>
                                        </CTooltip>
                                    </CCol>
                                </CRow>

                                <CRow className="d-flex align-items-center mt-3">
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
                                
                            </CCardBody>
                        </CCard>
                    </CModalBody>
                    <CModalFooter>
                        <FooterButtons createMode={true} onSubmit={this.onSubmit} onCancel={this.onCancel}></FooterButtons>
                    </CModalFooter>
                </CModal>
                {this.state.showConfirmation ? <Confirmation color='primary' onAccept={this.onSave} onDiscard={this.onDiscardConfirmation} title={'Crear Area'} message={'¿Está seguro de registrar esta area?'}></Confirmation> : null}
                {this.state.showNewMember ? <NewMember color='primary' onAccept={this.onSaveMember} onDiscard={this.onDiscardConfirmation} member={this.state.member} option={'add'}></NewMember> : null}
                {this.state.showMember ? <NewMember color='primary' onAccept={this.onSaveMember} onDiscard={this.onDiscardConfirmation} member={this.state.member} option={this.state.id}></NewMember> : null}
                {this.state.showDirector ? <NewMember color='primary' onAccept={this.onSaveMember} onDiscard={this.onDiscardConfirmation} member={this.state.member} option={'director'}></NewMember> : null}
            </div>
        )
    }

}
