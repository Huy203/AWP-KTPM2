import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAccountTable1730788439663 implements MigrationInterface {
    name = 'UpdateAccountTable1730788439663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" ALTER COLUMN "username" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" ALTER COLUMN "username" SET NOT NULL`);
    }

}
