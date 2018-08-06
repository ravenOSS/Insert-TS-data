const assert = require('assert');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const MongoClient = require('mongodb').MongoClient;

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const dburl = process.env.mbPro12_URL0;
console.log(dburl);

// Database Name
const dbName = process.env.mbPro12_DB;
const coll = process.env.mbPro12_COLL;

MongoClient.connect(dburl, function (err, client) {
  assert.equal(null, err);
  console.log('Connected correctly to mongodb');

  const db = client.db(dbName);

  setInterval(function () {
    let D = new Date().toISOString();

    let max = 50;
    let min = 1;
    let N = Math.floor((Math.random() * ((max + 1) - min)) + min);

    console.log('');
    let inputObject = {
      Timestamp: D, Data: N
    };
    //    console.log(inputObject);

    db.collection(coll).insertOne(inputObject, function (err, result) {
      assert.equal(null, err);
      assert.equal(1, result.insertedCount);
    });
  }, 1 * 10 * 1000);
});
