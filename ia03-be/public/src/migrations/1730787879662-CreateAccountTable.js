"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountTable1730787879662 = void 0;
class CreateAccountTable1730787879662 {
    constructor() {
        this.name = 'CreateAccountTable1730787879662';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "username" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "is_deleted" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_ee66de6cdc53993296d1ceb8aa0" UNIQUE ("email"), CONSTRAINT "PK_5a7a02c20412299d198e097a8fe" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "accounts"`);
    }
}
exports.CreateAccountTable1730787879662 = CreateAccountTable1730787879662;
//# sourceMappingURL=1730787879662-CreateAccountTable.js.map