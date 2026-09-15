import prisma from "../config/prisma";
import bcrypt from "bcrypt";

async function main() {
  const email = "admin@allindiacgs.com";

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    console.log("❌ Admin already exists.");
    return;
  }

  const hashedPassword = await bcrypt.hash("Admin@123", 10);

  await prisma.user.create({
    data: {
      name: "Administrator",
      email,
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("✅ Admin created successfully.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });