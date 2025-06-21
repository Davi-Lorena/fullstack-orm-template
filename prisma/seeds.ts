import { prisma } from "@/prisma"

async function seed() {
    await prisma.user.createMany({
        data: [ 
            {
                name: "José Venãncio",
                email: "tal@email.com"
            },
            {
                name: "Chico litro",
                email: "chico@email.org"
            }
        ]
})
}

seed().then(() => {
    console.log("DB seeded!")
    prisma.$disconnect()
})