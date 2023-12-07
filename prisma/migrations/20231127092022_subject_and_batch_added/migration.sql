-- CreateTable
CREATE TABLE "core_subjects" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "external_marks" INTEGER NOT NULL DEFAULT 0,
    "internal_marks" INTEGER NOT NULL DEFAULT 0,
    "internal_prac_marks" INTEGER NOT NULL DEFAULT 0,
    "external_prac_marks" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "core_subjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "core_batches" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "core_batches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SubjectBatches" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "core_subjects_code_key" ON "core_subjects"("code");

-- CreateIndex
CREATE INDEX "core_subjects_code_idx" ON "core_subjects"("code");

-- CreateIndex
CREATE UNIQUE INDEX "core_batches_name_key" ON "core_batches"("name");

-- CreateIndex
CREATE INDEX "core_batches_name_idx" ON "core_batches"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_SubjectBatches_AB_unique" ON "_SubjectBatches"("A", "B");

-- CreateIndex
CREATE INDEX "_SubjectBatches_B_index" ON "_SubjectBatches"("B");

-- AddForeignKey
ALTER TABLE "_SubjectBatches" ADD CONSTRAINT "_SubjectBatches_A_fkey" FOREIGN KEY ("A") REFERENCES "core_batches"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectBatches" ADD CONSTRAINT "_SubjectBatches_B_fkey" FOREIGN KEY ("B") REFERENCES "core_subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
