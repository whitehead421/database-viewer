import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const response = await prisma.incidentcountsbyyear.findMany();
  return response;
});
