import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';

class AllPost extends Component {

    // handleChange = (e) => {
    //     e.preventDefault();
    //     const searchText = this.getSearchText.value;

    //     const data = {
    //         searchText
    //     }

    //     this.props.dispatch({
    //         type: 'SEARCH',
    //         // id: this.props.post.id,
    //         data: data
    //     })
    // }

    render() {

        // const style = {
        //     margin: 'auto',
        //     width: '50 %',
        //     border: '3px solid green',
        //     padding: '10px',
        //     'text-align': 'center'
        // };

        return (
            <div>
                <h1 className="post_heading">All Posts</h1>

                <form className="form" onSubmit={this.handleChange}>
                    <input type="text" className="input" ref={(input) => this.getSearchText = input} placeholder="Search..." />
                </form>

                {this.props.posts.map((post) => (
                    <div key={post.id}>
                        {post.editing ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(AllPost);