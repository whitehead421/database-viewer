import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  if (getRouterParam(event, "id")) {
    const response = await prisma.address.findUnique({
      where: {
        id: parseInt(getRouterParam(event, "id")),
      },
    });

    return response;
  } else {
    return {
      statusCode: 400,
      body: "Bad Request",
    };
  }
});
