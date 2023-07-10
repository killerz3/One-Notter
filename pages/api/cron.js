/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient()


export default async function handler(req, res) {
    await prisma.user.findFirst();
    res.status(200).end('Hello Cron!');

  }