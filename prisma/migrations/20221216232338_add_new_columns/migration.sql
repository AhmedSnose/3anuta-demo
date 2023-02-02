/*
  Warnings:

  - The primary key for the `Employees` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `mobileNumber` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "employeeName" TEXT NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "employeeType" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Employees" ("email", "employeeName", "employeeType", "id", "isActive", "mobileNumber") SELECT "email", "employeeName", "employeeType", "id", "isActive", "mobileNumber" FROM "Employees";
DROP TABLE "Employees";
ALTER TABLE "new_Employees" RENAME TO "Employees";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
