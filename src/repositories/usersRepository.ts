import { User } from "@prisma/client";
import prisma from "../db/db.js";

async function findByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
        where: {
            email,
        },
    });
}

async function create(data: Omit<User, "id">): Promise<User> {
    return await prisma.user.create({
        data,
    });
}

const usersRepository = {
    findByEmail,
    create,
};

export default usersRepository;
