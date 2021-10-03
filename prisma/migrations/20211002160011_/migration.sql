-- DropIndex
DROP INDEX `mashroomId` ON `Post`;

-- AddForeignKey
ALTER TABLE `Post` ADD FOREIGN KEY (`mashroomId`) REFERENCES `Mashroom`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
