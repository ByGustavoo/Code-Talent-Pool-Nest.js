import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertIntoProduto1722633423395 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO produto (descricao, custo) VALUES ('Arroz Tio João 1kg', 4.50);
            INSERT INTO produto (descricao, custo) VALUES ('Feijão Carioca 1kg', 6.00);
            INSERT INTO produto (descricao, custo) VALUES ('Óleo de Soja Soya 900ml', 7.50);
            INSERT INTO produto (descricao, custo) VALUES ('Macarrão Parafuso 500g', 3.20);
            INSERT INTO produto (descricao, custo) VALUES ('Açúcar União 1kg', 3.80);
            INSERT INTO produto (descricao, custo) VALUES ('Café Pilão 500g', 8.90);
            INSERT INTO produto (descricao, custo) VALUES ('Leite Integral 1L', 4.30);
            INSERT INTO produto (descricao, custo) VALUES ('Biscoito Maizena 400g', 2.50);
            INSERT INTO produto (descricao, custo) VALUES ('Detergente Ypê 500ml', 1.80);
            INSERT INTO produto (descricao, custo) VALUES ('Sabão em Pó Omo 1kg', 10.00);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
