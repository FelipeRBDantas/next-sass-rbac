import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  await prisma.organization.deleteMany()

  await prisma.user.deleteMany()

  const passwordHash = await hash('123456', 1)

  const [user, anotherUser, yetAnotherUser] = await prisma.user.createMany({
    data: [
      {
        name: 'Felipe Dantas',
        email: 'feliperbdantas@outlook.com',
        avatarUrl: 'https://github.com/feliperbdantas.png',
        passwordHash,
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatarUrl: faker.image.avatarGitHub(),
        passwordHash,
      },
      {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        avatarUrl: faker.image.avatarGitHub(),
        passwordHash,
      },
    ],
  })
}

seed().then(() => {
  console.log('Database seeded!')
})
