// import prisma from "../config/prisma";

// export const createProfile = async (data: any) => {
//   return prisma.profile.create({
//     data,
//   });
// };

// export const getProfiles = async () => {
//   return prisma.profile.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });
// };

// export const searchProfiles = async (
//   category?: string,
//   state?: string,
//   city?: string,
//   page: number = 1,
//   limit: number = 10
// ) => {
//   const where: any = {
//     status: true,
//   };

//   if (category) where.category = category;
//   if (state) where.state = state;
//   if (city) where.city = city;

//   const skip = (page - 1) * limit;

//   const [profiles, total] = await Promise.all([
//     prisma.profile.findMany({
//       where,
//       orderBy: {
//         createdAt: "desc",
//       },
//       skip,
//       take: limit,
//     }),

//     prisma.profile.count({
//       where,
//     }),
//   ]);

//   return {
//     profiles,
//     total,
//     page,
//     limit,
//     totalPages: Math.ceil(total / limit),
//   };
// };

// // export const getStates = async () => {
// //   const states = await prisma.profile.findMany({
// //     distinct: ["state"],
// //     select: {
// //       state: true,
// //     },
// //     orderBy: {
// //       state: "asc",
// //     },
// //   });

// //   return states.map((s) => s.state);
// // };

// export const getStates = async () => {
//   const states = await prisma.$queryRaw<
//     Array<{
//       state_id: bigint;
//       state_name: string;
//       state_code: string;
//     }>
//   >`
//     SELECT state_id, state_name, state_code
//     FROM state
//     WHERE is_active = TRUE
//     ORDER BY state_id ASC
//   `;

//   return states.map((state) => ({
//     state_id: Number(state.state_id),
//     state_name: state.state_name,
//     state_code: state.state_code,
//   }));
// };

// // new function add 

// export const getCategories = async () => {
//   const categories = await prisma.profile.findMany({
//     distinct: ["category"],
//     select: {
//       category: true,
//     },
//     orderBy: {
//       category: "asc",
//     },
//   });

//   return categories.map((item) => item.category);
// };



// // NEW
// export const getCities = async (state: string) => {
//   const cities = await prisma.profile.findMany({
//     where: {
//       state,
//     },
//     distinct: ["city"],
//     select: {
//       city: true,
//     },
//     orderBy: {
//       city: "asc",
//     },
//   });

//   return cities.map((c) => c.city);
// };

// export const deleteProfile = async (id: number) => {
//   return prisma.profile.delete({
//     where: {
//       id,
//     },
//   });
// };

// export const getDashboardStats = async () => {
//   const [
//     totalProfiles,
//     activeProfiles,
//     totalStates,
//     totalCities,
//     totalCategories,
//   ] = await Promise.all([
//     prisma.profile.count(),

//     prisma.profile.count({
//       where: {
//         status: true,
//       },
//     }),

//     prisma.profile.findMany({
//       distinct: ["state"],
//       select: {
//         state: true,
//       },
//     }),

//     prisma.profile.findMany({
//       distinct: ["city"],
//       select: {
//         city: true,
//       },
//     }),

//     prisma.profile.findMany({
//       distinct: ["category"],
//       select: {
//         category: true,
//       },
//     }),
//   ]);

//   return {
//     totalProfiles,
//     activeProfiles,
//     totalStates: totalStates.length,
//     totalCities: totalCities.length,
//     totalCategories: totalCategories.length,
//   };
// };

// export const getProfileById = async (id: number) => {
//   return prisma.profile.findUnique({
//     where: {
//       id,
//     },
//   });
// };


// export async function getPopularLocations() {

//   const cities = await prisma.profile.groupBy({

//     by: ["city"],

//     _count: {
//       city: true,
//     },

//     where: {
//       status: true,
//     },

//     orderBy: {
//       _count: {
//         city: "desc",
//       },
//     },

//     take: 8,

//   });

//   const result = [];

//   for (const item of cities) {

//     const profile = await prisma.profile.findFirst({

//       where: {
//         city: item.city,
//         status: true,
//       },

//       orderBy: {
//         createdAt: "desc",
//       },

//       select: {
//         image: true,
//       },

//     });

//     const image =
//   profile?.image &&
//   profile.image.includes("res.cloudinary.com")
//     ? profile.image
//     : "/images/location-placeholder.jpg";

// result.push({
//   city: item.city,
//   listings: item._count.city,
//   image,
// });





//   }

//   return result;
// }



// -------------------------



import prisma from "../config/prisma";

// =====================================================
// CREATE PROFILE
// =====================================================

export const createProfile = async (data: any) => {
  return prisma.profile.create({
    data: {
      ...data,

      // Convert IDs coming from frontend to BigInt
      state: BigInt(data.state),
      city: BigInt(data.city),
      category: BigInt(data.category),
    },
  });
};

// =====================================================
// GET ALL PROFILES
// =====================================================

export const getProfiles = async () => {
  return prisma.profile.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// =====================================================
// SEARCH PROFILES
// =====================================================

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

  // ---------------------------------------------------
  // CATEGORY
  // ---------------------------------------------------

  if (category) {
    const categoryId = Number(category);

    if (!Number.isNaN(categoryId)) {
      where.category = BigInt(categoryId);
    } else {
      const categoryData = await prisma.category.findFirst({
        where: {
          name: category,
          status: true,
        },
        select: {
          id: true,
        },
      });

      if (categoryData) {
        where.category = BigInt(categoryData.id);
      } else {
        where.category = BigInt(-1);
      }
    }
  }

  // ---------------------------------------------------
  // STATE
  // ---------------------------------------------------

  if (state) {
    const stateId = Number(state);

    if (!Number.isNaN(stateId)) {
      where.state = BigInt(stateId);
    } else {
      const stateData = await prisma.state.findFirst({
        where: {
          state_name: state,
          is_active: true,
        },
        select: {
          state_id: true,
        },
      });

      if (stateData) {
        where.state = stateData.state_id;
      } else {
        where.state = BigInt(-1);
      }
    }
  }

  // ---------------------------------------------------
  // CITY
  // ---------------------------------------------------

  if (city) {
    const cityId = Number(city);

    if (!Number.isNaN(cityId)) {
      where.city = BigInt(cityId);
    } else {
      const cityData = await prisma.city.findFirst({
        where: {
          city_name: city,
          is_active: true,
          ...(state
            ? {
                state_id: where.state,
              }
            : {}),
        },
        select: {
          city_id: true,
        },
      });

      if (cityData) {
        where.city = cityData.city_id;
      } else {
        where.city = BigInt(-1);
      }
    }
  }

  // ---------------------------------------------------
  // PAGINATION
  // ---------------------------------------------------

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

  // Convert BigInt values before sending JSON response
  const safeProfiles = profiles.map((profile: { state: null; city: null; category: null; }) => ({
    ...profile,
    state: profile.state !== null ? Number(profile.state) : null,
    city: profile.city !== null ? Number(profile.city) : null,
    category:
      profile.category !== null
        ? Number(profile.category)
        : null,
  }));

  return {
    profiles: safeProfiles,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};

// =====================================================
// GET STATES
// =====================================================

export const getStates = async () => {
  const states = await prisma.$queryRaw<
    Array<{
      state_id: bigint;
      state_name: string;
      state_code: string;
    }>
  >`
    SELECT
      state_id,
      state_name,
      state_code
    FROM state
    WHERE is_active = TRUE
    ORDER BY state_id ASC
  `;

  return states.map((state: { state_id: any; state_name: any; state_code: any; }) => ({
    state_id: Number(state.state_id),
    state_name: state.state_name,
    state_code: state.state_code,
  }));
};

// =====================================================
// GET CATEGORIES
// =====================================================

export const getCategories = async () => {
  const categories = await prisma.category.findMany({
    where: {
      status: true,
    },
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  return categories;
};

// =====================================================
// GET CITIES BY STATE ID
// =====================================================

export const getCities = async (stateId: string) => {
  try {
    const rows = await prisma.$queryRaw<
      Array<{
        city_id: bigint;
        city_name: string;
        state_name: string;
        state_code: string;
      }>
    >`
      SELECT
        c.city_id,
        c.city_name,
        s.state_name,
        s.state_code
      FROM city c
      INNER JOIN state s
        ON s.state_id = c.state_id
      WHERE c.state_id = ${BigInt(stateId)}
        AND c.is_active = TRUE
      ORDER BY c.city_id ASC
    `;

    return rows.map((row: { city_id: any; city_name: any; state_name: any; state_code: any; }) => ({
      city_id: Number(row.city_id),
      city_name: row.city_name,
      state_name: row.state_name,
      state_code: row.state_code,
    }));
  } catch (error) {
    console.error("Failed to fetch cities:", error);
    return [];
  }
};

// =====================================================
// DELETE PROFILE
// =====================================================

export const deleteProfile = async (id: number) => {
  return prisma.profile.delete({
    where: {
      id,
    },
  });
};

// =====================================================
// DASHBOARD STATS
// =====================================================

export const getDashboardStats = async () => {
  const [
    totalProfiles,
    activeProfiles,
    totalStates,
    totalCities,
    totalCategories,
  ] = await Promise.all([
    // Total profiles
    prisma.profile.count(),

    // Active profiles
    prisma.profile.count({
      where: {
        status: true,
      },
    }),

    // Unique state IDs
    prisma.profile.findMany({
      distinct: ["state"],
      select: {
        state: true,
      },
    }),

    // Unique city IDs
    prisma.profile.findMany({
      distinct: ["city"],
      select: {
        city: true,
      },
    }),

    // Unique category IDs
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

// =====================================================
// GET PROFILE BY ID
// =====================================================

export const getProfileById = async (id: number) => {
  return prisma.profile.findUnique({
    where: {
      id,
    },
  });
};

// =====================================================
// POPULAR LOCATIONS
// =====================================================

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

  // for (const item of cities) {
  //   const profile = await prisma.profile.findFirst({
  for (const item of cities) {
  if (item.city === null) {
    continue;
  }

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

    const cityData = await prisma.city.findUnique({
      where: {
        city_id: item.city,
      },

      select: {
        city_id: true,
        city_name: true,
      },
    });

    const image =
      profile?.image &&
      profile.image.includes("res.cloudinary.com")
        ? profile.image
        : "/images/location-placeholder.jpg";

    result.push({
      city_id: cityData
        ? Number(cityData.city_id)
        : Number(item.city),

      city: cityData?.city_name ?? "Unknown",

      listings: item._count.city,

      image,
    });
  }

  return result;
}









