/*
  Warnings:

  - You are about to drop the column `postLikeId` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `mashname` on the `Mashroom` table. All the data in the column will be lost.
  - Added the required column `postId` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Mashroom` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Like` DROP FOREIGN KEY `Like_ibfk_1`;

-- AlterTable
ALTER TABLE `Like` DROP COLUMN `postLikeId`,
    ADD COLUMN `postId` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `Mashroom` DROP COLUMN `mashname`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Like` ADD FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
