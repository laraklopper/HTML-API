# HTTP : HYPERTEXT TRANSFER PROTOCOL

HTTP is the underlying protocol used by the `World Wide Web (WWW)`. HTTP is the foundation of any data exchange on the Web and is a client-server protocol, which means requests are initiated by recipient, usually the Web browser. A web server delivers website content to a user's web browser upon receiving such requests from the browser. A web browser is an HTTP client that sends requests for information to servers.

![alt text](image-1.png)

HTTP follows a `request-response model`. The messages sent by the client are called requests and the messages sent by the server as an answer are called responses. The client (usually a web browser) sends a request to the web server, and the server answers with the appropriate response.

A protocol is basically a set of rules that are decided on and adopted so that there is consistency in how to perform particular tasks.
The HTTP protocol is `stateless` This means that every HTTP request the server receives is independent and does not relate to requests that came prior to it. However, modern web-development use `cookies`, `sessions`, and `tokens` to stimulate memory between requests.

## STATUS CODES

HTTP response codes are standard codes returned by a server in response to a client's request, indicating the status of the request. HTTP status codes are delivered to the browser in the HTTP header. They are returned with an HTTP response message every time a request is made.
HTTP status codes fall into five classes

### 100: `INFORMATIONAL RESPONSES`

Informational codes indicating that the request initiated by the browser is continuing. 

Common informational responses include:

- `102: Processing`: The server is processing the request but the response is not available yet.

### 200: `SUCCESSFUL RESPONSES`

Success codes returned when the browser request was received,
understood, and processed by the server. 

Commonn success responses include:

- `200: OK`: The request succeeded. The result and meaning of "success" depends on the HTTP method.
- `201: CREATED`: The request succeeded, and a new resource was created as a result. These are typically the response sent after `POST` requests, or some `PUT` requests.

### 300: `REDIRECTION MESSAGES `

Redirection codes returned when a new resource has been substituted for the requested resource.
 
### 400: `CLIENT ERROR RESPONSES`

Client error codes indicating that there was a problem with the request. 

Common client error responses include:

- `400: Bad Request`: The server cannot complete the request due to a something percieved to be a client error.
- `401: Unauthorised:`The HTTP 401 Unauthorized client error response status code indicates that a request was not successful because it lacks valid authentication credentials for the requested resource. 
- `403: Forbidden`: The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
- `404: Not Found`: The server cannot find the requested resource. 

### 500: `SERVER ERROR RESPONSES`
Server error codes indicating that the request was accepted, but that an error on the server prevented the fulfilment of the request. 

Common Server Error responses: 

- `500: Internal Server Error`: A generic server error situation occured which the server cannot handle.

## REFERENCES

 - https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
 - https://www.techtarget.com/whatis/definition/HTTP-Hypertext-Transfer-Protocol
 - https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
 
