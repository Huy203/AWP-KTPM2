"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAccountTable1730788439663 = void 0;
class UpdateAccountTable1730788439663 {
    constructor() {
        this.name = 'UpdateAccountTable1730788439663';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "accounts" ALTER COLUMN "username" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "accounts" ALTER COLUMN "username" SET NOT NULL`);
    }
}
exports.UpdateAccountTable1730788439663 = UpdateAccountTable1730788439663;
//# sourceMappingURL=1730788439663-UpdateAccountTable.js.map