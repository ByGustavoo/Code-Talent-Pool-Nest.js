import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertIntoProdutoloja1722633429890 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO produtoloja (id_loja, id_produto, precovenda) VALUES (1, 1, 5.00);
            INSERT INTO produtoloja (id_loja, id_produto, precovenda) VALUES (2, 2, 6.50);
            INSERT INTO produtoloja (id_loja, id_produto, precovenda) VALUES (3, 3, 8.00);
            INSERT INTO produtoloja (id_loja, id_produto, precovenda) VALUES (4, 4, 3.50);
            INSERT INTO produtoloja (id_loja, id_produto, precovenda) VALUES (5, 5, 4.00);
            INSERT INTO produtoloja (id_loja, id_produto, precovenda) VALUES (6, 6, 9.50);
            INSERT INTO produtoloja (id_loja, id_produto, precovenda) VALUES (7, 7, 4.80);
            INSERT INTO produtoloja (id_loja, id_produto, precovenda) VALUES (8, 8, 3.00);
            INSERT INTO produtoloja (id_loja, id_produto, precovenda) VALUES (9, 9, 2.00);
            INSERT INTO produtoloja (id_loja, id_produto, precovenda) VALUES (10, 10, 11.00);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
