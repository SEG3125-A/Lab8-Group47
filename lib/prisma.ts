import { PrismaClient } from "@prisma/client";

// Code in this file copied from: https://github.com/coderyansolomon/fullstack-intro/blob/main/lib/prisma.js

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient();
} else {
    if (!global.prisma){
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;