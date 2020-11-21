const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/db', { useUnifiedTopology : true });
mongoose.Promise = global.Promise;

module.exports = mongoose;