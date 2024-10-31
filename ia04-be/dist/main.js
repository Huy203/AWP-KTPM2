"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./modules/app/app.module");
const logger_middleware_1 = require("./logger.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: '*',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            preflightContinue: false,
            optionsSuccessStatus: 204,
            credentials: true,
        },
    });
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.use(new logger_middleware_1.LoggerMiddleware().use);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('21127297-IA03-BE')
        .setDescription('The backend API for the 21127297-IA03 project')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Main application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();
//# sourceMappingURL=main.js.map