const { MongoClient } = require("mongodb");

function UserDB() {
  const userDB = {};
  const uri =
    process.env.MONGO_URL ||
    "mongodb://brad123:brad123@tmcluster-shard-00-00.49zsn.mongodb.net:27017,tmcluster-shard-00-01.49zsn.mongodb.net:27017,tmcluster-shard-00-02.49zsn.mongodb.net:27017/test?ssl=true&replicaSet=atlas-a1od78-shard-0&authSource=admin&retryWrites=true&w=majority";

  userDB.createUser = async (data) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db("posts");
    console.log("connected to db posts");
    const users = db.collection("users");
    console.log("connected to users");
    return await users.insertOne(data);
  };

  userDB.loginUser = async (data) => {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    const db = client.db("posts");
    console.log("connected to db posts");
    const users = db.collection("users");
    console.log("connected to users");
    return users.findOne({ username: data.username });
  };

  return userDB;
}

module.exports = UserDB();
