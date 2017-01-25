import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: true,
    entry: path.resolve(__dirname, 'src/app'),
    target: 'web',
    output: {
        path: __dirname + "/dist",
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    devserver: {
        contentServe: 'src'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /(\.css)$/,
                loaders: ['style', 'css']
            }
        ]
    }
};