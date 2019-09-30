const path = require('path');

module.exports = {
    entry: './client/src/index.js',
    mode: 'none',
    output: {
        path: path.resolve(__dirname,'./love/client/dist'),
        filename: 'bundle.js',
    },

    module:{
        rules:[{
            test : /\.js$/,  
            loader: 'babel-loader',  
            include:[path.resolve(__dirname, './client/src')],
            options:  {
                presets:['react']
            },
        }]
    },

    devServer: {
        contentBase: path.resolve(__dirname,'./client/dist'),
        compress: true,
        port: 8000
      }


};