var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssExtractor = ExtractTextPlugin.extract("css?sourceMap!postcss");
var lessExtractor = ExtractTextPlugin.extract("css?sourceMap!postcss!less?sourceMap");

module.exports = {
    devtool: '#eval-sourcemap',
    entry: ['./index'],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: "vue-eventbus-toastcam.js"
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader?presets[]=es2015',
                        less: 'vue-style-loader!css-loader!less-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    babel: {"presets": ["es2015"]},
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        //new ExtractTextPlugin("examples/[name].css")
    ]
};