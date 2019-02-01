import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import '../styles/fbPost.css';
import moment from 'moment';
import FacebookEmoji from 'react-facebook-emoji';
import like from '../images/likePNG.png';
import love from '../images/lovePNG.png';

class FbPost extends Component {
    constructor() {
        super();
        this.state = {
            isShowReactionsDiv: false
        }
        this.alertKa = this.alertKa.bind(this);
    }
    alertKa() {
        console.log('hover...');
        this.setState({
            isShowReactionsDiv: true
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.isShowReactionsDiv == nextState.isShowReactionsDiv) {
            this.setState({
                isShowReactionsDiv: false
            })
        }
        return true;
    }


    render() {
        const { isShowReactionsDiv } = this.state;
        return (
            <div className="container App-BC">
                <div className="fbPost-Margin">
                    <div className="col-md-5 col-md-offset-3 fbPost-BC fbPost-Padding-Top">
                        <div className="col-md-1">
                            <img className="avatar" src={this.props.object.avatar} />
                        </div>
                        <div className="col-md-6">
                            <p className="createdBy">{this.props.object.createdBy}</p>
                            <p className="createdAt">{moment(this.props.object.createdAt).fromNow()}</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-md-offset-3 fbPost-BC">
                        <div className="col-md-12">
                            <p>{this.props.object.description}</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-md-offset-3 fbPost-BC fbPost-Padding-Bottom">
                        <FbImageLibrary images={this.props.object.images} />
                    </div>
                    <div className="col-md-5 col-md-offset-3 fbPost-BC fbPost-Padding-Bottom">
                        <hr />
                        <div className="col-md-12 fbPost-Padding-Top">
                            <p className="likes"><img src={like} width="17px" /><img src={love} width="19px" />{this.props.object.likes.length}</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-md-offset-3 fbPost-BC fbPost-Padding-Bottom">
                        <hr />
                        {isShowReactionsDiv && <div>
                            <FacebookEmoji type="like" size="xs" />
                            <FacebookEmoji type="love" size="xs" />
                            <FacebookEmoji type="wow" size="xs" />
                            <FacebookEmoji type="yay" size="xs" />
                            <FacebookEmoji type="angry" size="xs" />
                            <FacebookEmoji type="haha" size="xs" />
                            <FacebookEmoji type="sad" size="xs" />
                        </div>}
                        <div className="col-md-4 fbPost-Padding-Top">
                            <p onMouseOver={this.alertKa} className="center">Like</p>
                        </div>
                        <div className="col-md-4 fbPost-Padding-Top">
                            <p className="center">Comment</p>
                        </div>
                        <div className="col-md-4 fbPost-Padding-Top">
                            <p className="center">Share</p>
                        </div>
                    </div>
                    {/* </div> */}
                </div>

            </div >
        )
    }
}

export default FbPost;