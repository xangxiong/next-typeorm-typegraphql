const reflectMetadata = require('reflect-metadata');
const withPlugins = require('next-compose-plugins');
const webpack = require('webpack');
const path = require('path');

module.exports = withPlugins([
    ], {
        env: {
        
        },
        serverRuntimeConfig: {

        },
        publicRuntimeConfig: {
            
        },
        sassOptions: {

        },
        webpack(config, options) {
            config.resolve.modules.push(path.resolve('./'));
            return config;
        }
});