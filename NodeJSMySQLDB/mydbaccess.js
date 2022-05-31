const mysql = require("mysql2/promise");

const connect = async () => {
  console.log("connect");
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kronites0@",
    database: "maxcoin",
  });

  console.log("insert");
  const sql = "INSERT into coinvalues (id, value) values(1,100)";
  await connection.query(sql);
  process.exit(0);
};

const disconnect = () => {
  return this.connection.end;
};

const insert = async () => {};
const con = connect();
insert();
