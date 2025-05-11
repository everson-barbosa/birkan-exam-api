/*
  Warnings:

  - You are about to drop the column `event` on the `OutBoxEvent` table. All the data in the column will be lost.
  - Added the required column `topic` to the `OutBoxEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OutBoxEvent" DROP COLUMN "event",
ADD COLUMN     "topic" TEXT NOT NULL;
