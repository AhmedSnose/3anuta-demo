/*
  Warnings:

  - You are about to drop the column `employeeName` on the `Employees` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Employees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "arabicName" TEXT,
    "englishName" TEXT,
    "mobileNumber" TEXT NOT NULL,
    "identificationNumber" TEXT,
    "email" TEXT NOT NULL,
    "employeeType" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Employees" ("createdAt", "email", "employeeType", "id", "isActive", "mobileNumber") SELECT "createdAt", "email", "employeeType", "id", "isActive", "mobileNumber" FROM "Employees";
DROP TABLE "Employees";
ALTER TABLE "new_Employees" RENAME TO "Employees";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
