// 1. What is HTTP?
// A protocol used for browser (client) and server to interact with each other

// 2. What is a URL?
// A user-friendly handle that is being translated into a machine readable address

// 3. What is DNS?
// System that takes human-readable URLs and converts them into IP addresses.

// 4. What is a query string?
// Allows to pass key-value pairs into the URL, e.g. to initiate a search

//-5. What are two HTTP verbs and how are they different?
// GET and POST: Get is a request to receive content, whereas post is modifying data on the server

// 6. What is an HTTP request?
// A reqeust to receive conent from server with HTTP protocol.

// 7. What is an HTTP response?
// Additional content requested via request or response. Request headers: Host, User-Agent; Response headers: Content-Type, Last-Modified

// 8. What is an HTTP header? Give a couple examples of request and response headers you have seen.
// They include request or response content.

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
// http-request for url handle (resolves URL into IP address via DNS), Browser requests content from IP address, response is sent (e.g. html-file). Browser generates DOM from HTML and requests further resources if needed (e.g. CSS-file)