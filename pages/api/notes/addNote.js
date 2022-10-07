/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()


export default async (req, res) => {
    
    const data = req.body;
    
    try {
        const result = await prisma.note.create({
            data: {
                ...data
            }
        })
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err);
        
    }
    
}

