import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableProduto1722035159397 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE produto (
                id SERIAL NOT NULL PRIMARY KEY,
                descricao VARCHAR(60) NOT NULL,
                custo NUMERIC(13,2),
                imagem BYTEA
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS produto;`);
    }

}
