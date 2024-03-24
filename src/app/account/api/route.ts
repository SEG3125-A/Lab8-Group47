import prisma from "../../../../lib/prisma";

export async function GET(request:Request) {

    const allUsers = await prisma.user.findMany();

    console.log(allUsers);

    return Response.json(allUsers);
}