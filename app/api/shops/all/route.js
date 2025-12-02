// export async function GET(req, { params }) {
//   const mysql = await import('mysql2/promise');

//   try {
//     const category = Number(params.category);

//     if (!category) {
//       return Response.json([], { status: 200 });
//     }

//     const connection = await mysql.createConnection({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASS,
//       database: process.env.DB_NAME,
//       ssl: { rejectUnauthorized: true },
//     });

//     const [rows] = await connection.execute(
//       'SELECT * FROM db_ie_transation WHERE category_id = ?',
//       [category]
//     );

//     await connection.end();
//     return Response.json(rows, { status: 200 });
//   } catch (err) {
//     console.error('API ERROR:', err);
//     return Response.json([], { status: 200 }); // return empty array instead of error
//   }
// }
export async function GET() {
  const mysql = await import('mysql2/promise');

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      ssl: { rejectUnauthorized: true },
    });

    const [rows] = await connection.execute(
      'SELECT * FROM db_ie_transation ORDER BY id DESC'
    );

    await connection.end();
    return Response.json(rows, { status: 200 });
  } catch (err) {
    console.error('API ERROR:', err);
    return Response.json([], { status: 200 });
  }
}
