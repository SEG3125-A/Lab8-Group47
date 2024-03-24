import prisma from "../../../../lib/prisma";

export async function POST(req:Request) {

    const body = await req.json();

    const email = body['email'];
    const pw = body['pw'];

    const user = await prisma.user.create({
        data: {
            email: email,
            password: pw,
          },
    });

    return Response.json(user);
}