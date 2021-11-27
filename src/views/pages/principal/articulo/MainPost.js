import React, { Component } from 'react'
import {
    CCol,
    CRow,
    CImg,
  } from '@coreui/react'
  import Sidebar from './Sidebar'
  import { connect } from 'react-redux'
  import { bindActionCreators } from 'redux'
  import * as articleActions from '../../../../services/redux/actions/article'
  import "../../../../scss/mainPost.scss"
export class MainPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            failed: false,
            article: [],
        }
    }

    async componentDidMount(){
        const location = this.props.location
        const path = location.pathname.split("/")[2]
        console.log(path)
        await this.props.getArticle(path);
        const article = this.props.article.article;
        this.setState({
            isLoading: this.props.article.isLoading,
            failed: this.props.article.failed,
            article: article 
        })
    }

    render() {
        return (
            <CRow>
                <CCol md='9'>
                    <CRow>
                        <CImg className="d-block w-100"
                            src={"http://www.solofondos.com/wp-content/uploads/2016/03/outrun-vaporwave-hd-wallpaper-preview.jpg"} 
                            alt="article image"
                        />
                    </CRow>
                    <CRow className='mt-3 d-flex justify-content-center'>
                        <p className="font-weight-bold">{this.state.article.title}</p>
                    </CRow>
                    <CRow className="row justify-content-between">
                        <p className="font-weight-bold">{"Autor: "+this.state.article.authors}</p>
                        <p className="font-weight-bold">Hace 10 dias</p>
                    </CRow>
                    <CRow className='mb-5'>
                        <p className="text-justify space">{this.state.article.description}
                        </p>
                    </CRow>
                </CCol>
                <CCol md='3'>
                    <Sidebar/>
                </CCol>
            </CRow>
        )
    }
}

const mapStateToProps = state => {
    return {
        article: state.article
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators(Object.assign({},articleActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPost)
