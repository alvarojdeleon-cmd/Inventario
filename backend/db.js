const mysql = require("mysql2");

// Crear conexión con MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "DeleonSierra",
    database: "Inventario_db"
});

// Conectar
db.connect((error) => {

    if (error) {
        console.error("Error al conectar con MySQL:", error);
        return;
    }

    console.log("✅ Conexión exitosa con MySQL");

});

module.exports = db;