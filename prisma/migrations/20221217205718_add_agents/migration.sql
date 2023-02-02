-- CreateTable
CREATE TABLE "Agents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "agentName" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "identificationNumber" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
