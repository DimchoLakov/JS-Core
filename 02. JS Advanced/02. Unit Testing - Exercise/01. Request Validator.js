function validateRequest(requestObj) {
    let requestMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let uriRegex = /(^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$)|\*/mi;
    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let messageRegex = /[<>\\&'"]+/mi;

    let errorMsg = "";

    let method = requestObj["method"];
    let version = requestObj["version"];
    let uri = requestObj["uri"];
    let message = requestObj["message"];

    if (!requestMethods.includes(method) || method === undefined) {
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!uriRegex.test(uri) || uri === undefined) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!versions.includes(version) || version === undefined) {
        throw new Error("Invalid request header: Invalid Version");
    }
    if (messageRegex.test(message) || message === undefined) {
        throw new Error("Invalid request header: Invalid Message");
    }

    if (errorMsg !== "") {
        throw new Error(errorMsg);
    }

    return requestObj;
}

let obj = {
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
};

console.log(validateRequest(obj));
