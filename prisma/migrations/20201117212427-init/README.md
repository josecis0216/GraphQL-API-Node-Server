# Migration `20201117212427-init`

This migration has been generated at 11/17/2020, 9:24:27 PM.
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
migration ..20201117212427-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,20 @@
+datasource db {
+  provider = "postgresql"
+  url      = "postgresql://postgres:docker@localhost:5432/prisma"
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


