import prisma from "../src/db/db.js";

async function main() {
    return await prisma.genre.createMany({
        data: [
            {
                name: "ficção científica",
            },
            { name: "bibliográfico" },
        ],
    });
}

main()
    .then(() => console.log("Data registered successfully"))
    .catch((e) => {
        console.log(console.error(e));
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
