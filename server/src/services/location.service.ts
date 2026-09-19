// import prisma from "../config/prisma";

// export async function getStates() {
//   const rows = await prisma.$queryRaw<Array<{
//     state_id: bigint;
//     state_name: string;
//     state_code: string;
//   }>>`
//     SELECT state_id, state_name, state_code
//     FROM state
//     ORDER BY state_id ASC
//   `;

//   return rows.map((row) => ({
//     state_id: Number(row.state_id),
//     state_name: row.state_name,
//     state_code: row.state_code,
//   }));
// }

// export async function getCities(state: string) {
//   try {
//     const rows = await prisma.$queryRaw<Array<{
//       city_id: bigint;
//       city_name: string;
//       state_name: string;
//       state_code: string;
//     }>>`
//       SELECT city_id, city_name, state_name, state_code
//       FROM city
//       WHERE state_name = ${state}
//       ORDER BY city_id ASC
//     `;

//     return rows.map((row) => ({
//       city_id: Number(row.city_id),
//       city_name: row.city_name,
//       state_name: row.state_name,
//       state_code: row.state_code,
//     }));
//   } catch {
//     return [];
//   }


// }

// ---------------------------------------

// import prisma from "../config/prisma";

// export async function getStates() {
//   const rows = await prisma.$queryRaw<
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

//   return rows.map((row) => ({
//     state_id: Number(row.state_id),
//     state_name: row.state_name,
//     state_code: row.state_code,
//   }));
// }

// export async function getCities(state: string) {
//   try {
//     const rows = await prisma.$queryRaw<
//       Array<{
//         city_id: bigint;
//         city_name: string;
//         state_name: string;
//         state_code: string;
//       }>
//     >`
//       SELECT
//         c.city_id,
//         c.city_name,
//         s.state_name,
//         s.state_code
//       FROM city c
//       INNER JOIN state s
//         ON s.state_id = c.state_id
//       WHERE s.state_name = ${state}
//         AND c.is_active = TRUE
//       ORDER BY c.city_id ASC
//     `;

//     return rows.map((row) => ({
//       city_id: Number(row.city_id),
//       city_name: row.city_name,
//       state_name: row.state_name,
//       state_code: row.state_code,
//     }));
//   } catch (error) {
//     console.error("Failed to fetch cities:", error);
//     return [];
//   }
// }



// ----------------------


import prisma from "../config/prisma";

export async function getStates() {
  const rows = await prisma.$queryRaw<
    Array<{
      state_id: bigint;
      state_name: string;
      state_code: string;
    }>
  >`
    SELECT state_id, state_name, state_code
    FROM state
    WHERE is_active = TRUE
    ORDER BY state_id ASC
  `;

  return rows.map((row) => ({
    state_id: Number(row.state_id),
    state_name: row.state_name,
    state_code: row.state_code,
  }));
}

export async function getCities(stateId: string) {
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

    return rows.map((row) => ({
      city_id: Number(row.city_id),
      city_name: row.city_name,
      state_name: row.state_name,
      state_code: row.state_code,
    }));
  } catch (error) {
    console.error("Failed to fetch cities:", error);
    return [];
  }
}


