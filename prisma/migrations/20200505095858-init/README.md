# Migration `20200505095858-init`

This migration has been generated at 5/5/2020, 9:58:58 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Player" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "currentTeam" text  NOT NULL DEFAULT '',
    "dob" text  NOT NULL DEFAULT '',
    "id" text  NOT NULL ,
    "jerseyNumber" text  NOT NULL DEFAULT '',
    "name" text  NOT NULL DEFAULT '',
    "nationality" text  NOT NULL DEFAULT '',
    "position" text  NOT NULL DEFAULT '',
    "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    PRIMARY KEY ("id")
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200505095858-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,20 @@
+datasource db {
+  provider = "postgresql"
+  url      = env("DB_CONNECT_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Player {
+  id           String   @default(cuid()) @id
+  createdAt    DateTime @default(now())
+  updatedAt    DateTime @updatedAt
+  name         String
+  position     String
+  dob          String
+  nationality  String
+  currentTeam  String
+  jerseyNumber String
+}
```


