const AWS = require('aws-sdk');
AWS.config.update( {
    region:'us-east-1'
});

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamoDBTable = "PORTFOLIO";
const healthPath = "/healthcheck";
const blogsPath = "/blogs";
const blogPath = "/blog";

exports.handler = async function(event,context) {
    console.log(event);
    let method = event['requestContext','httpMethod'];
    console.log('method name:',method);
    let path = event['path'];
    console.log('path:',path);
    let response;
    switch(true){
        case (method === 'GET' && path === healthPath):
            response = buildResponse(200);
            break;
        case (method === 'GET' && path === blogPath):
            response = await getBlog("USER#ravisujlana","#BLOG#ravisujlana#1#01-Jan-2019");
            break;
        case (method === 'POST' && path === blogPath):
            response = await saveBlog(JSON.parse(event.body));
            break;
        case (method === 'PATCH' && path === blogPath):
            response = await modifyBlog(JSON.parse(event.body));
            break;
        case (method === 'DELETE' && path === blogPath):
            response = await deleteBlog("USER#ravisujlana","#BLOG#ravisujlana#1#01-Jan-2019");
            break;
        case (event.httpMethod === 'GET' && event.path === blogsPath):
            response = await getBlogs();
            break;
        default:
            response = buildResponse('404','Message not found:::');
    }
    return response;
};

async function getBlog(PK,SK) {
    const params = {
        TableName: dynamoDBTable,
        Key: {
            'PK': PK,
            'SK': SK
        }
    };
    return await dynamodb.get(params).promise().then((response) => {
        return buildResponse(200, response.Item);
    }, (error) => {
        console.error('Do your custom error handling here. I am just gonna log it: ', error);
    });
}

async function getBlogs() {
    const params = {
        TableName: dynamoDBTable
    };
    console.log('TEST0');

    const allBlogs = await scanDynamoRecords(params, []);
    console.log('TEST0-1');
    const body = {
        blogs: allBlogs
    };
    console.log('TEST0-2');
    return buildResponse(200, body);
}

async function scanDynamoRecords(scanParams, itemArray) {
    try {
        console.log('TEST1');
        const dynamoData = await dynamodb.scan(scanParams).promise();
        itemArray = itemArray.concat(dynamoData.Items);
        console.log('TEST2');
        if (dynamoData.LastEvaluatedKey) {
            scanParams.ExclusiveStartkey = dynamoData.LastEvaluatedKey;
            return await scanDynamoRecords(scanParams, itemArray);
        }
        return itemArray;
    } catch(error) {
        console.error('Do your custom error handling here. I am just gonna log it: ', error);
    }
}

async function saveBlog(requestBody) {
    const params = {
        TableName: dynamoDBTable,
        Item: requestBody
    };
    return await dynamodb.put(params).promise().then(() => {
        const body = {
            Operation: 'SAVE',
            Message: 'SUCCESS',
            Item: requestBody
        };
        return buildResponse(200, body);
    }, (error) => {
        console.error('Do your custom error handling here. I am just gonna log it: ', error);
    });
}

async function modifyBlog(body) {
    let PK = body.PK;
    let SK = body.SK;
    let title = body.title;
    let text = body.contentText;
    const params = {
        TableName: dynamoDBTable,
        Key: {
            'PK': PK,
            'SK': SK
        },
        UpdateExpression: 'set title = :value, content = :value2',
        ExpressionAttributeValues: {
            ':value': title,
            ':value2': text
        },
        ReturnValues: 'UPDATED_NEW'
    };
    return await dynamodb.update(params).promise().then((response) => {
        const body = {
            Operation: 'UPDATE',
            Message: 'SUCCESS',
            UpdatedAttributes: response
        };
        return buildResponse(200, body);
    }, (error) => {
        console.error('Do your custom error handling here. I am just gonna log it: ', error);
    });
}

async function deleteBlog(PK,SK) {
    const params = {
        TableName: dynamoDBTable,
        Key: {
            'PK': PK,
            'SK':SK
        },
        ReturnValues: 'ALL_OLD'
    };
    return await dynamodb.delete(params).promise().then((response) => {
        const body = {
            Operation: 'DELETE',
            Message: 'SUCCESS',
            Item: response
        };
        return buildResponse(200, body);
    }, (error) => {
        console.error('Do custom error handling here. I am just gonna log it: ', error);
    });
}

function buildResponse(statusCode, body){
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
