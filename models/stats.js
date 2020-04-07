const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statsSchema = new Schema({
    number: String,
    country: String
});
const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;