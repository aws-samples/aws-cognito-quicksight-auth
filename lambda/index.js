let unirest = require('unirest');
let res;

exports.handler = function(event, context, callback) {
    unirest.get(event.body)
    .end(function (response) {
        res = response.body;
        let getResponse = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(res)
        };
        callback(null,getResponse);
    });
}

    