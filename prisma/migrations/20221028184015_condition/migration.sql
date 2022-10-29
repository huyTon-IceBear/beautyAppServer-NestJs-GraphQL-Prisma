-- AlterTable
ALTER TABLE "User" ADD COLUMN     "conditionId" INTEGER;

-- CreateTable
CREATE TABLE "Condition" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_conditionId_fkey" FOREIGN KEY ("conditionId") REFERENCES "Condition"("id") ON DELETE SET NULL ON UPDATE CASCADE;
