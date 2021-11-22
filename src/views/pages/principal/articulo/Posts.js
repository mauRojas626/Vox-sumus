import { CCol, CRow } from '@coreui/react'
import React, { Component } from 'react'
import SinglePost from './SinglePost'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as articleActions from '../../../../services/redux/actions/article'

export class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            failed: false,
            articles: [],
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

    render() {
        return (
            <CRow>
                { this.state.articles.map((article, index) => 
                    <CCol md='6' key={index}>
                        <SinglePost key={index} article={article}></SinglePost>
                    </CCol>) }
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts)