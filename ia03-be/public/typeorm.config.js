"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, '.env') });
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [path.join(__dirname, 'lib/database/entities/*{.ts,.js}')],
    migrations: [path.join(__dirname, 'src/migrations/*{.ts,.js}')],
});
//# sourceMappingURL=typeorm.config.js.map