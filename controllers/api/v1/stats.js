const Stats = require('../../../models/stats');

const getStats = (req, res) => {
    Stats.find({
        "number": "11"
    }, (err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "number": doc
                }
            });
        }
    });
}

const updateStats = (req, res) => {
    Stats.findOneAndUpdate({"country": req.body.country}, {"number": req.body.number}, {new: true}, (err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "data": doc
            }); 
        }
        if(err){
            res.json({
                "status": "error",
                "message": "Could not update stats"
            });
        }
    });
}

const addstats = (req, res, next) => {
    let stats = new Stats();
    stats.number = req.body.number;
    stats.country = req.body.country;
    stats.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Could not save stats"
            });
        }
        if(!err){
            res.json({
                "status": "success",
                "data": doc
            });
        }
    });
}

module.exports.getStats = getStats;
module.exports.updateStats = updateStats;
module.exports.addstats = addstats;