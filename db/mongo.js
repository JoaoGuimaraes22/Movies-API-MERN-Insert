const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const movies = require("../helpers/movies");

const mongoMovies = () => {
  // Connection URL
  const uri = require("../keys/mongUri").mongoUri;
  // Database Name
  const dbName = "Cluster0";
  // Create a new MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true });

  (async function () {
    try {
      await client.connect();
      console.log("Connected correctly to server");

      const db = client.db(dbName);

      // Insert a single document
      const data = await movies();
      const col = await db.collection("movies").drop().catch((err) => { console.log(`${err}, or there was no movies collection`) });
      data.forEach(async (el) => {
        let r = await db.collection('movies').insertOne({ title: el.title, releaseDate: el.releaseDate, img: el.img, desc: el.desc, rating: el.rating });
        assert.equal(1, r.insertedCount);
      })
    }
    catch (err) {
      console.log(err.stack)
    }
    client.close();
    console.log("Ended");
  })();
}

module.exports = mongoMovies;
