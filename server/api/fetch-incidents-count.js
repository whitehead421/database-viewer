import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const response = await prisma.incidents.findMany();

  return {
    count: response.length,
    page_count: Math.ceil(response.length / 100),
  };
});
