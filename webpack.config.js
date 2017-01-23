import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noinfo: false,
    entry: path.resolve(__dirname, 'src/app'),
    target: 'web',
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    devserver: {
        contentServe: 'src'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loaders: ['babel-loader'],
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /(\.css)$/,
                loaders: ['style', 'css']
            }
        ]
    }
};