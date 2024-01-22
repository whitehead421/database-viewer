import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const response = await prisma.threepumpincidents.findMany();

  response.forEach((incident) => {
    incident.date_time_of_call =
      incident.date_time_of_call.toLocaleDateString() +
      " " +
      incident.date_time_of_call.toLocaleTimeString();
  });

  return response;
});
