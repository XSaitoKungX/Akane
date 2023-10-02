const { Logger } = require('leekslazylogger');

module.exports = new Logger({
    debug: false,
    keepFor: 30,
    level: {
        _logger: { extension: '&f&!7{timestamp}&r [Logger] {text}' },
        basic: { extension: '&f&!7{timestamp} {text}' },
        apps: { extension: '&f&!7{timestamp}&r &3[Register]&r {text}' },
        console: { extension: '&f&!7{timestamp} [Info] {text}' },
        debug: { extension: '&f&!7{timestamp}&r &1[Debug] &9{text}' },
        error: { extension: '&f&!7{timestamp}&r &4[Error] &c{text}' },
        http: { extension: '&f&!7{timestamp}&r &3[Https]&r {text}' },
        info: { extension: '&f&!7{timestamp}&r &3[Info] &b{text}' },
        notice: { extension: '&f&!7{timestamp}&r &0&!6[Notice] {text}' },
        plugins: { extension: '&f&!7{timestamp}&r &3[Addons]&r {text}' },
        success: { extension: '&f&!7{timestamp}&r &2[Success] &a{text}' },
        warn: { extension: '&f&!7{timestamp}&r &6[Warn] &e{text}' },
        ws: { extension: '&f&!7{timestamp}&r &3[Ws]&r {text}' }
    },
    logToFile: true,
    name: 'Akane Multipurpose Bot | Console',
    splitFile: true,
    timestamp: 'YYYY-MM-DD HH:mm:ss'
});