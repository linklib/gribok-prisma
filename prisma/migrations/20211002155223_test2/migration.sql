/*
  Warnings:

  - You are about to drop the column `createdById` on the `Post` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_ibfk_1`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `createdById`,
    ADD COLUMN `createdBy` VARCHAR(32) NOT NULL;

-- CreateIndex
CREATE INDEX `User` ON `Post`(`createdBy`);

-- AddForeignKey
ALTER TABLE `Post` ADD FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
