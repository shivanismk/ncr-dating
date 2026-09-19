import prisma from "../config/prisma";

export const createCategory = async (data: any) => {
  return prisma.category.create({
    data,
  });
};

export const getCategories = async () => {
  return prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });
};