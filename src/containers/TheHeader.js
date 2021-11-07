import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { 
  TheHeaderDropdownNotif
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }
  return (
    <CHeader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CIcon name="logo" height="48" alt="Logo"/>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3 d-md-down-none">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/inicio">Inicio</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNav className="px-3">
          <TheHeaderDropdownNotif/>
        </CHeaderNav>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/articulos">Artículos</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">Noticias</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Proyectos</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Eventos</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
    </CHeader>
  )
  
}

export default TheHeader
