import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    };

    render() {
        return (
            <div>
                {this.props.comment.map((comment, i) =>
                    <Comment comment={comment} key={i} index={i}
                             onDeleteComment={this.handleDeleteComment.bind(this)}/>
                )}
            </div>
        )
    }

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
}

export default CommentList