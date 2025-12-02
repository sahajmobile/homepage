const mysql = require('mysql2/promise');

async function getShopList(categoryId) {
  try {
    const connection = await mysql.createConnection({
      host: 'sm-mysql.mysql.database.azure.com',
      user: 'vpojgdlvvk', // IMPORTANT!!!
      password: 'rSY8B3X5cnUpY',
      database: 'sjmoborg_db',

      // ✅ Azure SSL requirement
      ssl: {
        rejectUnauthorized: true,
      },
    });

    const [rows] = await connection.execute(
      'SELECT * FROM db_ie_transation WHERE category_id = ?',
      [categoryId]
    );

    await connection.end();
    console.log('RESULT:', rows);
  } catch (err) {
    console.error('DB ERROR:', err);
  }
}

getShopList(1);
