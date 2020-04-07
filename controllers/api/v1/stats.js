const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statsSchema = new Schama({
    number: String
});
const Stats = mongoose.model('Stats', statsSchema);

const getStats = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "number": 12
        }
    });
}

const updateStats = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "number": 12
        }
    });
}

const postStats = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "number": 12
        }
    });
}

module.exports.getStats = getStats;
module.exports.updateStats = updateStats;
module.exports.updateStats = postStats;