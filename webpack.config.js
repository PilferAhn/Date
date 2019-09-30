const path = require('path');

module.exports = {
    entry: "./client/src/index.js",
    mode: 'development',
    output: {
        path:path.resolve(__dirname,'./client/dist'),
        filename: 'bundle.js',
    }
};