const path = require('path');
// webpack4 必须升级extract这个插件，npm install extract-text-webpack-plugin@next，升级到4的beta版本
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const srcDir = path.join(__dirname, './src');
const distDir = path.join(__dirname, './dist');

module.exports = {
    entry: {
        index: './src/js/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 给js css 图片等在html引入中添加前缀
        publicPath: "../../",
        filename: 'js/[name].min.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: 'css-loader'
                    },
                })
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),

        new ExtractTextPlugin('style/[name].min.css'),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['index'],
            template: "./src/pages/index/index.html",
            filename: "pages/index/index.html"
        }),
        // 复制第三方库
        new CopyWebpackPlugin([{
            from: srcDir + '/img/',
            to: distDir + '/img/'
        }], {}),

        
    ]
};


