import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import DOMPurify from 'dompurify';

import {
    Redirect
} from 'react-router-dom';
class CreateBlog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blogContent : null,
            blogTitle : null,
            blogType : null,
            redirect : null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
        this.setState(state => ({
            blogContent: editor.getContent()
        }));
    }
    handleChange(event) {
        event.persist();
        console.log(event.target.value);
        this.setState(state => ({
            blogTitle: event.target.value
        }));
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.blogTitle + 'Submit Called' + this.state.blogContent);
        this.setState(state => ({
            redirect: true
        }));
    }
    render() {
        if (this.state.redirect) {
            return (
                <div>
                    <div><h2>{this.state.blogTitle} </h2></div>
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.state.blogContent)}}/>
                </div>
             )
        }
        return (
            <form className="container-fluid" onSubmit={this.handleSubmit}>
                <div className="emptyLine"></div>
                <div className="form-group">
                    <input type="text" name="blogTitle"  rows="1" className="form-control" id="blogTitle"
                           onBlur={this.handleChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <Editor
                        apiKey="dq6z2paakkref0fqlymj7b8qs9pgt5uj607rwtiivnvz4iq5"
                        init={{
                            selector: "textarea",
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image',
                                'charmap print preview anchor help',
                                'searchreplace visualblocks code',
                                'insertdatetime media table paste image imagetools wordcount'
                            ],
                            imagetools_cors_hosts: ['ravinder.io', 'localhost'],
                            imagetools_credentials_hosts: ['ravinder.io', 'localhost'],
                            toolbar:
                                'undo redo | formatselect | bold italic | \
                                alignleft aligncenter alignright | \
                                bullist numlist outdent indent image imagetools | help'
                        }}
                        onBlur={this.handleEditorChange}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary "
                            type="submit">Submit</button>
                </div>
            </form>

        );
    }
}

export default CreateBlog;

