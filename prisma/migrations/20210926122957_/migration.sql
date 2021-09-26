/*
  Warnings:

  - Made the column `createdById` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_ibfk_2`;

-- AlterTable
ALTER TABLE `Post` MODIFY `createdById` VARCHAR(32) NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD FOREIGN KEY (`createdById`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
