var path = require('path');
// app.use(express.static(__dirname + "/public"));
module.exports = {
    
    mode:"development",
    entry: path.resolve(__dirname,'./assets/js/plugin'),
    output: {
        path: path.resolve(__dirname,'./asstes/dist'),
        filename: 'bundle.js',
    }
};