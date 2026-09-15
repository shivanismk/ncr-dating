import prisma from "../config/prisma";

export const createProfile = async (data: any) => {
  return prisma.profile.create({
    data,
  });
};

export const getProfiles = async () => {
  return prisma.profile.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const searchProfiles = async (
  category?: string,
  state?: string,
  city?: string,
  page: number = 1,
  limit: number = 10
) => {
  const where: any = {
    status: true,
  };

  if (category) where.category = category;
  if (state) where.state = state;
  if (city) where.city = city;

  const skip = (page - 1) * limit;

  const [profiles, total] = await Promise.all([
    prisma.profile.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    }),

    prisma.profile.count({
      where,
    }),
  ]);

  return {
    profiles,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};

export const getStates = async () => {
  const states = await prisma.profile.findMany({
    distinct: ["state"],
    select: {
      state: true,
    },
    orderBy: {
      state: "asc",
    },
  });

  return states.map((s) => s.state);
};

// new function add 

export const getCategories = async () => {
  const categories = await prisma.profile.findMany({
    distinct: ["category"],
    select: {
      category: true,
    },
    orderBy: {
      category: "asc",
    },
  });

  return categories.map((item) => item.category);
};



// NEW
export const getCities = async (state: string) => {
  const cities = await prisma.profile.findMany({
    where: {
      state,
    },
    distinct: ["city"],
    select: {
      city: true,
    },
    orderBy: {
      city: "asc",
    },
  });

  return cities.map((c) => c.city);
};

export const deleteProfile = async (id: number) => {
  return prisma.profile.delete({
    where: {
      id,
    },
  });
};

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

export const getProfileById = async (id: number) => {
  return prisma.profile.findUnique({
    where: {
      id,
    },
  });
};


export async function getPopularLocations() {

  const cities = await prisma.profile.groupBy({

    by: ["city"],

    _count: {
      city: true,
    },

    where: {
      status: true,
    },

    orderBy: {
      _count: {
        city: "desc",
      },
    },

    take: 8,

  });

  const result = [];

  for (const item of cities) {

    const profile = await prisma.profile.findFirst({

      where: {
        city: item.city,
        status: true,
      },

      orderBy: {
        createdAt: "desc",
      },

      select: {
        image: true,
      },

    });

    const image =
  profile?.image &&
  profile.image.includes("res.cloudinary.com")
    ? profile.image
    : "/images/location-placeholder.jpg";

result.push({
  city: item.city,
  listings: item._count.city,
  image,
});





  }

  return result;
}