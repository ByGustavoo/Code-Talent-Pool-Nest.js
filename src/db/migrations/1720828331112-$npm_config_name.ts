import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1720828331112 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await queryRunner.query(`
           create table loja (
	       id serial NOT NULL PRIMARY KEY,
	       descricao varchar(60) NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS loja;`);
    }

}
