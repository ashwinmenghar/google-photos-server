// import db from "../config/db.js";
import { users } from "../schema/schema.js";

// Insert a new user
const create = async (newUser) => {
  try {
    // const res = await db.insert(users).values(newUser);
    // return { id: res.lastInsertRowid, ...newUser };
  } catch (error) {
    throw new Error(error);
  }
};

export { create };
