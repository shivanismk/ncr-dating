import prisma from "../config/prisma";

export const createCategory = async (data: any) => {
  return prisma.category.create({
    data,
  });
};

export const getCategories = async () => {
  return prisma.category.findMany({
    where: {
      status: true,
    },
    orderBy: {
      name: "asc",
    },
  });
};