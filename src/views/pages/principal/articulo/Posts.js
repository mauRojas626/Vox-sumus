import { 
    CCol, 
    CRow,
    CCard,
    CCardBody,
    CTooltip,
    CImg,
} from '@coreui/react'
import React, { Component } from 'react'
import SinglePost from './SinglePost'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as articleActions from '../../../../services/redux/actions/article'
import NewArticle from 'src/views/popups/NewArticle'
import notification from '../../../../services/models/others/notification'
import Notification from '../../../common/Notification'

export class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            failed: false,
            articles: [],
            createResults: [],
        }
    }

    async componentDidMount(){
        await this.props.getArticles();
        const articles = this.props.article.articles;
        this.setState({
            isLoading: this.props.article.isLoading,
            failed: this.props.article.failed,
            articles: [...articles]
        })
    }

    onAddArticle = () => {
        this.setState({ showPopUpArticle: true });
    }

    onDiscardPopUp = () => {
        this.setState({showPopUpArticle: false});
    }

    onDiscardConfirmation = () => {
        this.setState({showConfirmation: false});
    }

    onAcceptPopUp = async(article, file) => {
        
        const data = new FormData();
        data.append("name", article.photo);
        data.append("file", file);
        //await this.props.saveImage(data);
        console.log(article)
        await this.props.createArticle(article);
        const failed = this.props.article.failed;
        let newNotification;
        if(failed){
            newNotification = new notification('danger', 'Hubo un problema', 'No se pudo crear el artículo.'); 
        }
        else{
            newNotification = new notification('success', 'Registro exitoso', 'Artículo creado correctamente.');
            await this.props.getArticles();
            const articles = this.props.article.articles;
            this.setState({ articles: articles });
        }
        this.setState({createResults: [...this.state.createResults, newNotification]});
        this.setState({ showPopUpArticle: false });
    }

    render() {
        const { createResults } = this.state;
        return (
            <>
            { createResults.map((notification, index) => <Notification key={index} mode={notification.mode} title={notification.title} body={notification.body}></Notification> )}
            <CRow>
                { this.state.articles.map((article, index) => 
                    <CCol md='6' key={index}>
                        <SinglePost key={index} article={article}></SinglePost>
                    </CCol>) 
                }
                <CCol md='6'>
                    <CCard>
                        <CCardBody className="row justify-content-md-center">
                            <CTooltip content="Nuevo Artículo" placement='top'>
                                <CImg 
                                    shape="rounded-circle"
                                    width="200px"
                                    height="200px"
                                    block={true}
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plus_font_awesome.svg/1200px-Plus_font_awesome.svg.png"
                                    alt="añadir artículo"
                                    onClick={this.onAddArticle}
                                />
                            </CTooltip>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
            {this.state.showPopUpArticle ? <NewArticle onAccept={this.onAcceptPopUp} onDiscard={this.onDiscardPopUp} ></NewArticle> : null}
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts)