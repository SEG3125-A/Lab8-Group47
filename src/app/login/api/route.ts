import prisma from "../../../../lib/prisma";

export async function POST(req:Request) {

    const body = await req.json();

    const email = body['email'];
    // const pw = body.get('pw');

    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    });

    return Response.json(user);
}