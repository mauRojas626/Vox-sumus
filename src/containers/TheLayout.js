import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import "src/scss/sidebar.scss"
const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar className="peque"/>
      <div className="c-wrapper all">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
