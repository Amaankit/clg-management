/*
  Warnings:

  - Added the required column `updatedAt` to the `core_batches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "core_batches" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
