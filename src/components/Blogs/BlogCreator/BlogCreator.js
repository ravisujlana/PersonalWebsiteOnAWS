import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import useSignUpForm from '../../CustomHooks/CustomHooks';
import PostBlogHook from '../../CustomHooks/PostBlogHook';

const  BlogCreator = () => {
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm({title :'', content: ''},PostBlogHook);


    return (
        <form className="container-fluid" onSubmit={handleSubmit}>
            <div className="emptyLine"></div>
            <div className="form-group">
                <input type="text" name="title"  rows="1" className="form-control" id="title"
                       value={inputs.title}
                       onChange={handleInputChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="content">Content</label>
                <Editor
                    apiKey="dq6z2paakkref0fqlymj7b8qs9pgt5uj607rwtiivnvz4iq5"
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image',
                            'charmap print preview anchor help',
                            'searchreplace visualblocks code',
                            'insertdatetime media table paste wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic | \
                            alignleft aligncenter alignright | \
                            bullist numlist outdent indent | help'
                    }}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-primary "
                        type="submit">Submit</button>
            </div>
        </form>
    );
};


export default BlogCreator;
