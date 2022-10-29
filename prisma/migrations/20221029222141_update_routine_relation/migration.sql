/*
  Warnings:

  - A unique constraint covering the columns `[routineId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "routineId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_routineId_key" ON "Profile"("routineId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_routineId_fkey" FOREIGN KEY ("routineId") REFERENCES "Routine"("id") ON DELETE SET NULL ON UPDATE CASCADE;
