databases = ['node-starter']
 
for (var i = databases.length - 1; i >= 0; i--) {
  db = db.getSiblingDB(databases[i])
 
  db.createUser({
    user: "node",
    pwd: "password",
    roles: ["readWrite"]
  })
}