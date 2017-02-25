module.exports = {
    entry: './src/index.js',
        output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    module: {
rules: [
    {
        test: /\.js$/,
        loader: "babel-loader"
    },
    {
        test: /\.css$/,
        use: [
            { loader: 'style-loader'},
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }
        ]
    }
]    }
};