import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const response = await prisma.address.findMany({
    take: 100,
    skip: 0,
  });
  return response;
});
