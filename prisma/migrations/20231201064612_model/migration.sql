/*
  Warnings:

  - You are about to alter the column `description` on the `core_subjects` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(1000)`.

*/
-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('Active', 'DeActive');

-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('Present', 'Absent', 'Late');

-- CreateEnum
CREATE TYPE "PaymentMode" AS ENUM ('Cash', 'Online', 'Cheque');

-- CreateEnum
CREATE TYPE "paymentType" AS ENUM ('Credit', 'Debit');

-- CreateEnum
CREATE TYPE "testType" AS ENUM ('CT', 'PUT', 'External_Practical', 'Internal_Practical', 'External');

-- CreateEnum
CREATE TYPE "remarksType" AS ENUM ('Pass', 'Fail', 'Grace');

-- AlterTable
ALTER TABLE "core_batches" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMPTZ(6);

-- AlterTable
ALTER TABLE "core_subjects" ALTER COLUMN "description" SET DATA TYPE VARCHAR(1000),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMPTZ(6);

-- CreateTable
CREATE TABLE "student_students" (
    "id" SERIAL NOT NULL,
    "rollNo" VARCHAR(128) NOT NULL,
    "userId" UUID NOT NULL,
    "batchId" INTEGER NOT NULL,
    "status" VARCHAR(128) NOT NULL,
    "wallet" DOUBLE PRECISION,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "student_students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core_fees" (
    "id" SERIAL NOT NULL,
    "type" "UserStatus" NOT NULL DEFAULT 'Active',
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "core_fees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_attendances" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "status" "AttendanceStatus" NOT NULL DEFAULT 'Present',
    "studentId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "punchbyId" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "student_attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_studentfees" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "addedbyId" UUID NOT NULL,
    "studentId" INTEGER NOT NULL,

    CONSTRAINT "student_studentfees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "finance_feesledger" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "addedbyId" UUID NOT NULL,
    "studentId" INTEGER NOT NULL,
    "transactionId" VARCHAR(128),
    "paymentMode" "PaymentMode" NOT NULL,
    "paymentType" "paymentType" NOT NULL,
    "remarks" VARCHAR(10000) NOT NULL,
    "payementData" DATE NOT NULL,

    CONSTRAINT "finance_feesledger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core_test" (
    "id" SERIAL NOT NULL,
    "testType" "testType" NOT NULL,
    "testDate" DATE NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "location" VARCHAR(1000) NOT NULL,
    "maxMarks" INTEGER NOT NULL DEFAULT 100,
    "subjectId" INTEGER NOT NULL,
    "batchId" INTEGER NOT NULL,

    CONSTRAINT "core_test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_test_results" (
    "id" SERIAL NOT NULL,
    "marks" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,
    "studentId" INTEGER NOT NULL,
    "testId" INTEGER NOT NULL,
    "remarksType" "remarksType" NOT NULL,
    "remarks" VARCHAR(10000) NOT NULL,
    "addedbyId" UUID NOT NULL,

    CONSTRAINT "student_test_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_StudentSubjects" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "student_students_rollNo_key" ON "student_students"("rollNo");

-- CreateIndex
CREATE UNIQUE INDEX "student_students_userId_key" ON "student_students"("userId");

-- CreateIndex
CREATE INDEX "student_students_userId_idx" ON "student_students"("userId");

-- CreateIndex
CREATE INDEX "student_students_batchId_idx" ON "student_students"("batchId");

-- CreateIndex
CREATE INDEX "core_fees_type_idx" ON "core_fees"("type");

-- CreateIndex
CREATE INDEX "student_attendances_studentId_idx" ON "student_attendances"("studentId");

-- CreateIndex
CREATE INDEX "student_attendances_subjectId_idx" ON "student_attendances"("subjectId");

-- CreateIndex
CREATE INDEX "student_attendances_punchbyId_idx" ON "student_attendances"("punchbyId");

-- CreateIndex
CREATE UNIQUE INDEX "student_attendances_date_studentId_subjectId_key" ON "student_attendances"("date", "studentId", "subjectId");

-- CreateIndex
CREATE INDEX "student_studentfees_addedbyId_idx" ON "student_studentfees"("addedbyId");

-- CreateIndex
CREATE INDEX "student_studentfees_studentId_idx" ON "student_studentfees"("studentId");

-- CreateIndex
CREATE INDEX "finance_feesledger_addedbyId_idx" ON "finance_feesledger"("addedbyId");

-- CreateIndex
CREATE INDEX "finance_feesledger_studentId_idx" ON "finance_feesledger"("studentId");

-- CreateIndex
CREATE INDEX "core_test_subjectId_idx" ON "core_test"("subjectId");

-- CreateIndex
CREATE INDEX "core_test_testDate_idx" ON "core_test"("testDate");

-- CreateIndex
CREATE INDEX "core_test_batchId_idx" ON "core_test"("batchId");

-- CreateIndex
CREATE UNIQUE INDEX "core_test_testDate_subjectId_batchId_key" ON "core_test"("testDate", "subjectId", "batchId");

-- CreateIndex
CREATE INDEX "student_test_results_studentId_idx" ON "student_test_results"("studentId");

-- CreateIndex
CREATE INDEX "student_test_results_addedbyId_idx" ON "student_test_results"("addedbyId");

-- CreateIndex
CREATE INDEX "student_test_results_testId_idx" ON "student_test_results"("testId");

-- CreateIndex
CREATE UNIQUE INDEX "student_test_results_testId_studentId_key" ON "student_test_results"("testId", "studentId");

-- CreateIndex
CREATE UNIQUE INDEX "_StudentSubjects_AB_unique" ON "_StudentSubjects"("A", "B");

-- CreateIndex
CREATE INDEX "_StudentSubjects_B_index" ON "_StudentSubjects"("B");

-- AddForeignKey
ALTER TABLE "student_students" ADD CONSTRAINT "student_students_userId_fkey" FOREIGN KEY ("userId") REFERENCES "authentication_user"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_students" ADD CONSTRAINT "student_students_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "core_batches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_attendances" ADD CONSTRAINT "student_attendances_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student_students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_attendances" ADD CONSTRAINT "student_attendances_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "core_subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_attendances" ADD CONSTRAINT "student_attendances_punchbyId_fkey" FOREIGN KEY ("punchbyId") REFERENCES "authentication_user"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_studentfees" ADD CONSTRAINT "student_studentfees_addedbyId_fkey" FOREIGN KEY ("addedbyId") REFERENCES "authentication_user"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_studentfees" ADD CONSTRAINT "student_studentfees_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student_students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finance_feesledger" ADD CONSTRAINT "finance_feesledger_addedbyId_fkey" FOREIGN KEY ("addedbyId") REFERENCES "authentication_user"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finance_feesledger" ADD CONSTRAINT "finance_feesledger_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student_students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "core_test" ADD CONSTRAINT "core_test_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "core_subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "core_test" ADD CONSTRAINT "core_test_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "core_batches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_test_results" ADD CONSTRAINT "student_test_results_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "student_students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_test_results" ADD CONSTRAINT "student_test_results_testId_fkey" FOREIGN KEY ("testId") REFERENCES "core_test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_test_results" ADD CONSTRAINT "student_test_results_addedbyId_fkey" FOREIGN KEY ("addedbyId") REFERENCES "authentication_user"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentSubjects" ADD CONSTRAINT "_StudentSubjects_A_fkey" FOREIGN KEY ("A") REFERENCES "student_students"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentSubjects" ADD CONSTRAINT "_StudentSubjects_B_fkey" FOREIGN KEY ("B") REFERENCES "core_subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
