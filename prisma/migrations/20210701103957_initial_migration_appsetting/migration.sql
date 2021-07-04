-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "feature1desc" TEXT,
ADD COLUMN     "feature1title" VARCHAR(255),
ALTER COLUMN "productcode" DROP NOT NULL;
