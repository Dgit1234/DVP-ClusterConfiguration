module.exports = {
  "DB": {
    "Type":"postgres",
    "User":"duouser",
    "Password":"DuoS123",
    "Port":5432,
    "Host":"localhost",
    "Database":"dvpdb"
  },


  "Redis":
  {
    "ip": "localhost",
    "port": 6379

  },




  "Host":
  {
    "resource": "cluster",
    "vdomain": "localhost",
    "domain": "localhost",
    "port": "3636",
    "version": "1.0"
  },

  "LBServer" : {

    "ip": "localhost",
    "port": "3434"

  }
};