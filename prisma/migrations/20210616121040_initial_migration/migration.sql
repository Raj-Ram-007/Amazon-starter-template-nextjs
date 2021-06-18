-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "isActive" BOOLEAN,
    "order" INTEGER NOT NULL DEFAULT 999,
    "category" VARCHAR(255),
    "description" VARCHAR(255),
    "image" VARCHAR(255),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
