const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors()); // Configurar CORS para permitir todas las solicitudes (solo para desarrollo, asegúrate de restringir en producción)

// Configuración de la conexión a la base de datos en la nube (phpMyAdmin)
const db = mysql.createConnection({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10716405',
    password: 'x6ywhRdlav',
    database: 'sql10716405',
    port: 3306
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL en la nube');
});

// Ruta para obtener datos de la tabla citas
app.get('/obtenerDatosCitas', (req, res) => {
    const sql = 'SELECT * FROM citas';

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
            throw err;
        }
        res.json(result);
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend iniciado en el puerto ${PORT}`);
});
