import React, { Component } from 'react'
import "src/scss/iconos.scss"
import {
    CImg, 
    CTooltip
} from '@coreui/react'
export default class IconoAgrupacion extends Component {
    constructor(props){
        super(props);
        this.state = {
            showConfirmation: false,

        }
    }

    onSubmit = () => {
        this.props.onSubmit(this.props.id)
    }

    render() {
        let profileImage = this.props.image;
        let iconSize = this.props.iconSize;
        return (
            <div className="borde">
                <CTooltip content={this.props.name} placement='top'>
                    <CImg 
                        shape="rounded-circle" 
                        width="200px" 
                        height="200px" 
                        block={true} 
                        className={`iconoAgrupacion ${iconSize}`} src={profileImage} 
                        alt="logos"
                        onClick={this.onSubmit}
                        />
                </CTooltip>
            </div>
        )
    }
}