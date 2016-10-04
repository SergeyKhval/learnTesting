exports.config = {

    /**
     * server configurations
     */
    host: '0.0.0.0',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './test/specs/**/*.js'
    ],

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'http://google.by',
    waitforTimeout: 10000,
    framework: 'mocha',

    reporters: ['spec'],
    reporterOptions: {
        outputDir: './'
    },

    mochaOpts: {
        ui: 'bdd'
    },

    before: function () {
        global.expect = require('chai').expect;
    },

    /**
     * hooks
     */
    onPrepare: function () {
        console.log('let\'s go');
    },
    onComplete: function () {
        console.log('that\'s it');
    }

};