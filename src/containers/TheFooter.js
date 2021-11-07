import React from 'react'
import { CFooter } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">Siguenos en: </span>
        <a className="icono" href="https://www.facebook.com/voxsumus" target="_blank" rel="noopener noreferrer"><CIcon name="cib-facebook" size="lg"></CIcon></a>
        <a className="icono" href="https://www.instagram.com/vox_sumus/" target="_blank" rel="noopener noreferrer"><CIcon name="cib-instagram"  size="lg"></CIcon></a>
        <a className="icono" href="https://www.linkedin.com/company/vox-sumus/" target="_blank" rel="noopener noreferrer"><CIcon name="cib-linkedin"  size="lg"></CIcon></a>
        
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Contáctanos:</span>
        <a href="mailto:voxsumus.org@gmail.com" target="_blank" rel="noopener noreferrer">voxsumus.org@gmail.com</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
