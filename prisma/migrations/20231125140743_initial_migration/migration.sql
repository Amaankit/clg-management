-- CreateEnum
CREATE TYPE "UserGroup" AS ENUM ('ADMIN', 'STUDENT', 'FACULTY', 'FINANCE');

-- CreateTable
CREATE TABLE "authentication_user" (
    "password" VARCHAR(128) NOT NULL,
    "last_login" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    "uuid" UUID NOT NULL,
    "username" VARCHAR(128) NOT NULL,
    "email" VARCHAR(128),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "phonenumber" VARCHAR(15) NOT NULL,
    "usergroup" "UserGroup" NOT NULL,
    "fullname" VARCHAR(50) NOT NULL,

    CONSTRAINT "authentication_user_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "authentication_user_username_key" ON "authentication_user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "authentication_user_email_key" ON "authentication_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "authentication_user_phonenumber_key" ON "authentication_user"("phonenumber");

-- CreateIndex
CREATE INDEX "authentication_user_email_idx" ON "authentication_user"("email");

-- CreateIndex
CREATE INDEX "authentication_user_phonenumber_idx" ON "authentication_user"("phonenumber");

-- CreateIndex
CREATE INDEX "authentication_user_username_idx" ON "authentication_user"("username");
