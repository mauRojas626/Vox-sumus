import React, { Component } from 'react'
import {
    
} from '@coreui/react'
import Banner from 'src/views/pages/principal/inicio/Banner'
import AboutUs from './inicio/AboutUs';
import Alliances from './inicio/Alliances';

export default class Jeferson extends Component {
    constructor(props){
        super(props);
        this.state = {
            list1: [],
            chosenListFile: []
        }
    }

    saludar = () => {
        console.log("HOLA, soy Jeferson y me llega sourcestree");
    }

    despedirse = () => {
        console.log("ADIOS, se fue Jeferson y ya no me llega sourcetree");
    }
    

    render() {
        const texto = "Somos un grupo multidisciplinario formado por estudiantes de la PUCP que tiene como objetivo promover, integrar y colaborar con todos los sectores que se encuentran en situación de vulnerabilidad tanto a nivel nacional como internacional."
        return (
            <>
                <div>
                    <Banner id="banner"></Banner>
                </div>
                <div>
                    <AboutUs titulo="Quiénes Somos" texto={texto}/>
                    <Alliances></Alliances>
                </div>
                <div>
                    
                </div>
            </>
        )
    }
}