import {useState} from 'react';
import axios from "axios";

function PostBlogHook(inputs) {
    const json = '';
    const options = {
        headers: {
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'}
    };
    try {
        const response = axios.post(
            // 'https://nxpf7pf726.execute-api.us-east-1.amazonaws.com/default/createBlog',
            'http://localhost:8000',
            {key1: `${inputs.title}, ${inputs.content}`}
        );
        console.log(json);
        alert(json);
    } catch (error) {
        alert(error);
    }

    return {};
}

export default PostBlogHook;
