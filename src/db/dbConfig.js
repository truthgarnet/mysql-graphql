import mysql from "promise-mysql";

const dbConfig = {
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "password",
  database: "ex",
};

export default mysql.createPool(dbConfig);