const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://ankitsharma11876:yamaharx100@cluster0.b7o67ue.mongodb.net'
    )
        .then(client => {
            console.log("Connected!");
            _db = client.db()
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;