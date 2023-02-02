/*
  Warnings:

  - You are about to alter the column `identificationNumber` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `mobileNumber` on the `Employees` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "arabicName" TEXT,
    "englishName" TEXT,
    "mobileNumber" INTEGER,
    "identificationNumber" INTEGER,
    "email" TEXT,
    "employeeType" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Employees" ("arabicName", "createdAt", "email", "employeeType", "englishName", "id", "identificationNumber", "isActive", "mobileNumber") SELECT "arabicName", "createdAt", "email", "employeeType", "englishName", "id", "identificationNumber", "isActive", "mobileNumber" FROM "Employees";
DROP TABLE "Employees";
ALTER TABLE "new_Employees" RENAME TO "Employees";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
