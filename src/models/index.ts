import db from "../config/database.ts";
import User from "./User.ts";

db.link([User]);
await db.sync({drop: true});

export {db, User};
