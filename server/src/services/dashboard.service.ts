import prisma from "../config/prisma";

export const getDashboardStats = async () => {
  const [
    totalProfiles,
    activeProfiles,
    totalStates,
    totalCities,
    totalCategories,
  ] = await Promise.all([
    prisma.profile.count(),

    prisma.profile.count({
      where: {
        status: true,
      },
    }),

    prisma.profile.findMany({
      distinct: ["state"],
      select: {
        state: true,
      },
    }),

    prisma.profile.findMany({
      distinct: ["city"],
      select: {
        city: true,
      },
    }),

    prisma.profile.findMany({
      distinct: ["category"],
      select: {
        category: true,
      },
    }),
  ]);

  return {
    totalProfiles,
    activeProfiles,
    totalStates: totalStates.length,
    totalCities: totalCities.length,
    totalCategories: totalCategories.length,
  };
};