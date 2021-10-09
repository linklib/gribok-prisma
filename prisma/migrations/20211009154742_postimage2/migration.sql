/*
  Warnings:

  - You are about to drop the column `postId` on the `File` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `File` DROP FOREIGN KEY `File_ibfk_2`;

-- AlterTable
ALTER TABLE `File` DROP COLUMN `postId`;

-- CreateTable
CREATE TABLE `PostImage` (
    `id` VARCHAR(32) NOT NULL,
    `postId` VARCHAR(32) NOT NULL,
    `fileId` VARCHAR(32) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PostImage` ADD FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostImage` ADD FOREIGN KEY (`fileId`) REFERENCES `File`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
