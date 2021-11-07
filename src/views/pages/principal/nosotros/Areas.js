import React, { Component } from 'react'
import {
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CTabs,
    CRow,
    CCol,
    CTooltip,
    CButton,
} from '@coreui/react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as areaActions from '../../../../services/redux/actions/area'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import notification from '../../../../services/models/others/notification'
import NewArea from 'src/views/popups/NewArea'
import Miembro from './Miembro';

export class Areas extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            failed: false,
            areas: [],
            showPopUpArea: false
        }
    }
    async componentDidMount(){
        await this.props.getAreas();
        const areas = this.props.area.areas;
        this.setState({
            isLoading: this.props.area.isLoading,
            failed: this.props.area.failed,
            areas: [...areas]
        })
    }

    onDiscardPopUp = () => {
        this.setState({showPopUpArea: false});
    }

    onAcceptPopUp = async (area, photoArea, photos) => {
        let data = new FormData();
        for(let i = 0; i < photos.length; i++){
            data = new FormData();
            data.append("name", photos[i].name);
            data.append("file", photos[i].file);
        }
        data = new FormData();
        data.append("name", area.photo);
        data.append("file", photoArea);
        await this.props.saveImage(data);
        await this.props.createArea(area);
        const failed = this.props.area.failed;
        let newNotification;
        if(failed){
            newNotification = new notification('danger', 'Hubo un problema', 'No se pudo registrar al área.'); 
        }
        else{
            newNotification = new notification('success', 'Registro exitoso', 'Área registrada correctamente.');
            await this.props.getAreas();
            const areas = this.props.area.areas;
            this.setState({ areas: areas });
        }
        this.setState({createResults: [...this.state.createResults, newNotification]});
        this.setState({ showPopUpGroup: false });
    }

    addArea = () => {
        this.setState({ showPopUpArea: true });
    }

    render() {
        const lorem= "";
        return (
                <div>
                    <CCol style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <CTooltip content={'Agregar un área'} placement='top-start' >
                            <CButton block color="primary" className="mb-4" style={{width: '45px'}} onClick={this.addArea}>
                                <CIcon content={cilPlus}/>
                            </CButton>
                        </CTooltip>
                    </CCol>
                    <CTabs>
                        <CNav variant="tabs">
                            <CNavItem>
                                <CNavLink>
                                    Mesa Directiva
                                </CNavLink>
                            </CNavItem>
                            { this.state.areas.map((area, index) => <CNavItem key={index} >
                                <CNavLink>
                                    {area.name}
                                </CNavLink>
                            </CNavItem>) }
                        </CNav>
                        <CTabContent>
                            <CTabPane>
                                <CRow className="mt-4 mb-4">
                                    <CCol className="m-auto"> <h1>MESA DIRECTIVA</h1> </CCol> 
                                </CRow>
                                <CRow>
                                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" size="4"></Miembro>
                                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" size="4"></Miembro>
                                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" size="4"></Miembro>
                                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" size="4"></Miembro>
                                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" size="4"></Miembro>
                                </CRow>
                            </CTabPane>
                            { this.state.areas.map((area, index) => <CTabPane key={index} >
                                <CRow className="mt-4 mb-4">
                                    <CCol className="m-auto"> <h1>{area.name}</h1> </CCol> 
                                </CRow>
                                <CRow className="mt-4 mb-4">
                                    <CCol className="m-auto"> <p>{area.description}</p> </CCol> 
                                </CRow>
                                <CRow>
                                    {area.members.map((member, index) => <Miembro
                                        image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png"
                                        size="3"
                                        name={member.name}
                                        career={member.career}
                                        key={index}
                                    ></Miembro>)}
                                </CRow>
                            </CTabPane>) }
                            <CTabPane>
                                <CRow className="mt-4 mb-4">
                                    <CCol className="m-auto"> <h1>MUJER</h1> </CCol> 
                                </CRow>
                                <CRow className="mt-4 mb-4">
                                    <CCol className="m-auto"> <p>Descripción de área mujer</p> </CCol> 
                                </CRow>
                                <CRow>
                                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" size="3"></Miembro>
                                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" size="3"></Miembro>
                                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" size="3"></Miembro>
                                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" size="3"></Miembro>
                                    <Miembro image="https://iusetveritas.com/web/wp-content/uploads/2020/05/Logo-ius-et-veritas.png" size="3"></Miembro>
                                </CRow>
                            </CTabPane>
                            <CTabPane>
                                {`3. ${lorem}`}
                            </CTabPane>
                        </CTabContent>
                    </CTabs>
                    {this.state.showPopUpArea ? <NewArea onAccept={this.onAcceptPopUp} onDiscard={this.onDiscardPopUp} ></NewArea> : null}
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        area: state.area
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(Object.assign({},areaActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Areas)
