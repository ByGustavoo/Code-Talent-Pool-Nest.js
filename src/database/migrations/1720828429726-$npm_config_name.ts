import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1720828429726 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "produto" (
                id serial NOT NULL PRIMARY KEY,
                descricao varchar(60) NOT NULL,
                custo numeric(13,3),
                imagem bytea
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS produto;`);
    }

}
