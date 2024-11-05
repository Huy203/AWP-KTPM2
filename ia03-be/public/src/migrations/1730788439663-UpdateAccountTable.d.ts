import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UpdateAccountTable1730788439663 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
