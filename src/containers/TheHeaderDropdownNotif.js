import React from 'react'
import {
  //CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  //CProgress
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdownNotif = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-item px-3"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        Nosotros
      </CDropdownToggle>
      <CDropdownMenu  placement="bottom-start" className="pt-0">
        
        <CDropdownItem to="/historia"><CIcon name="cil-bookmark" className="mr-2 text-success" /> Historia</CDropdownItem>
        <CDropdownItem to="/areas"><CIcon name="cil-layers" className="mr-2 text-danger" /> Áreas</CDropdownItem>
        <CDropdownItem to="/consejo"><CIcon name="cil-map" className="mr-2 text-info" /> Consejo Consultivo</CDropdownItem>
        <CDropdownItem><CIcon name="cil-people" className="mr-2 text-primary" /> Miembros Extraordinarios</CDropdownItem>
        
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdownNotif