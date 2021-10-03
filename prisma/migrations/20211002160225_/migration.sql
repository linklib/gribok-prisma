/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Post` table. All the data in the column will be lost.
  - Added the required column `createdById` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_ibfk_1`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `createdBy`,
    ADD COLUMN `createdById` VARCHAR(32) NOT NULL;

-- CreateIndex
CREATE INDEX `User` ON `Post`(`createdById`);

-- AddForeignKey
ALTER TABLE `Post` ADD FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
