import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableLoja1722035147198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
           CREATE TABLE loja (
	       id SERIAL NOT NULL PRIMARY KEY,
	       descricao VARCHAR(60) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS loja;`);
    }

}
