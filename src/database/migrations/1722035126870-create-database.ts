import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1722035126870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE DATABASE vrteste;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }
}