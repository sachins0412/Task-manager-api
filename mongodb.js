const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("something snapped");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne({
    //   name: "Sachin",
    //   age: 24, // :(
    // });

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "buy whiskey",
    //       completed: true,
    //     },
    //     {
    //       description: "buy Soda",
    //       completed: true,
    //     },
    //     {
    //       description: "buy disposal glass",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("not inserted moron");
    //     }
    //     console.log(result);
    //   }
    // );

    db.collection("tasks").findOne(
      { _id: new ObjectId("62c859997f24280417d04da1") },
      (error, users) => {
        if (error) {
          return console.log(error);
        }
        console.log(users);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, users) => {
        if (error) {
          return console.log(error);
        }
        console.log(users);
      });

    db.collection("tasks").countDocuments(
      { completed: false },
      (error, users) => {
        if (error) {
          return console.log(error);
        }
        console.log(users);
      }
    );
  }
);
