/*
  Warnings:

  - You are about to drop the column `conditionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Condition` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_conditionId_fkey";

-- DropIndex
DROP INDEX "User_name_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "conditionId",
ADD COLUMN     "email" TEXT NOT NULL;

-- DropTable
DROP TABLE "Condition";

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "userEmail" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userEmail_key" ON "Profile"("userEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
