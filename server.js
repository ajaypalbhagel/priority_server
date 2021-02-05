const index = require('./index');

var servers = [
    { url: "http://doesNotExist.boldtech.co",priority: 1},
    { url: "http://boldtech.co", priority: 7},
    { url: "http://offline.boldtech.co", priority: 2},
    { url: "http://google.com", priority: 4}
];

// // Test to check the findServer function
index.findServer(servers)
.then(result => {
    console.log("result",result)
})
.catch((err) => {
    console.log(err)
})
