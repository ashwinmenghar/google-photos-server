import { sql } from "drizzle-orm";
import { uuid } from "drizzle-orm/gel-core";
import { date, timestamp } from "drizzle-orm/mysql-core";
// import { pgTable } from "drizzle-orm/pg-core";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import * as p from "drizzle-orm/pg-core";

export const users = p.pgTable("users", {
  // id: integer("id").primaryKey(),
  // name: text("name").notNull(),
  // email: text("email").unique(),
  // deleted_at: date("deleted_at").default(null),
  // created_at: date("created_at").default(sql`CURRENT_TIMESTAMP`),
  // auth_provider: text("auth_provider"),
  // profile_photo: text("profile_photo"),

  id: p.serial(),
  firstName: p.text("first-name"),
  lastName: p.text("LastName"),
  email: p.text(),
  phoneNumber: p.text("phone_number"),
});

// export default media = pgTable("media", {});
