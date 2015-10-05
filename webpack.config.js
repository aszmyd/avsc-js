module.exports = {
    entry: "./src/wrapper.js",
    output: {
        path: 'dist',
        filename: "avsc-js.min.js",
        sourceMapFilename: "avsc-js.min.map.js",
        library: "avsc",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /.*\.js$/,
                loader: "uglify"
            }
        ]
    },
    'uglify-loader': {
        mangle: false
    },
    node: {
        fs: "empty"
    }
};
