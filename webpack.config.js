const path = require('path');
const config = require('./webpack.common');

config.entry = './src/index.js',
config.output = {
	path: path.join(__dirname, "dist"),
	filename: 'paella-basic-plugins.js',
	library: 'paella-basic-plugins',
	libraryTarget: 'umd'
};

module.exports = config;