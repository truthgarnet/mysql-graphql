import pool from "../pool.js";

const tableName = "user";

const user = {
  selectAll: async () => {
    const query = `SELECT * FROM ${tableName}`;
    const result = await pool.query(query);

    return result;
  },
  insert: async (userName) => {
    const query = `INSERT INTO ${tableName} (userName) VALUES (?)`;
    const result = await pool.query(query, [userName]);

    return result;
  },
};

export default user;
