const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("something snapped");
//     }
//     const db = client.db(databaseName);
//     db.collection("tasks")
//       .deleteMany({ description: "buy whiskey" })
//       .then((response) => console.log(response))
//       .catch((e) => console.log(e));
//   }
// );

// MongoClient.connect(connectionURL, { useNewUrlParser: true })
//   .then((client) => {
//     const db = client.db(databaseName);

//     db.collection("tasks")
//       .find({})
//       .toArray()
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((e) => console.log(e));
//   })
//   .catch((e) => console.log(e));
