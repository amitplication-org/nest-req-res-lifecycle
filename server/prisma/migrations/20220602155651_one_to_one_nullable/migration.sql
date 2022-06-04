/*
  Warnings:

  - You are about to drop the column `orderId` on the `Shipment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[shipmentsId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Shipment" DROP CONSTRAINT "Shipment_orderId_fkey";

-- AlterTable
ALTER TABLE "Shipment" DROP COLUMN "orderId";

-- CreateIndex
CREATE UNIQUE INDEX "Order_shipmentsId_key" ON "Order"("shipmentsId");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_shipmentsId_fkey" FOREIGN KEY ("shipmentsId") REFERENCES "Shipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
