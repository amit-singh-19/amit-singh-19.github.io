//Replica Set

// Create a folder mongo-replica and sub folders data1 data2 and data3
// Open command prompt and start running servers on separate tabs

//terminal-1
// mongod -replSet rs1 -logpath "d:\mongo-replica\data1\1.log" --dbpath "d:\mongo-replica\data1" --port 27018

//terminal -2
// mongod -replSet rs1 -logpath "d:\mongo-replica\data2\2.log" --dbpath "d:\mongo-replica\data2" --port 27019

//terminal-3
// mongod -replSet rs1 -logpath "d:\mongo-replica\data3\3.log" --dbpath "d:\mongo-replica\data3" --port 27020

// terminal-4
// Follow these instructions to configure replica set:
// mongosh --port 27018
// rs.initiate({_id:"rs1",members:[{_id:0,host:"127.0.0.1:27018"},{_id:1,host:"127.0.0.1:27019"},{_id:2,host:"127.0.0.1:27020"}]})
// rs.config()  //to check the config
// rs.status()

//terminal - 5
// Use mongosh command with the following connection string and the primary server will automatically get connected:
// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"
// show dbs
// use mytestdb
// db.createCollection("customers")
// db.customers.insertOne({name:"John"})