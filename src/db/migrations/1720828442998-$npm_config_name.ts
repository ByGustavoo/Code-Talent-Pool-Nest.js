import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1720828442998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE produtoloja (
            id serial PRIMARY KEY,
            id_loja INT NOT NULL,
            id_produto INT NOT NULL,
            precovenda NUMERIC(13,3),
            FOREIGN KEY (id_produto) REFERENCES produto(id),
            FOREIGN KEY (id_loja) REFERENCES loja(id)
        );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS produto;`);
    }

}
