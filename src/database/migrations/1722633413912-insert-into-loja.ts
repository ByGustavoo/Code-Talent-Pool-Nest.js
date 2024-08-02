import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertIntoLoja1722633413912 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO loja (descricao) VALUES ('Supermercado Pão de Açúcar');
            INSERT INTO loja (descricao) VALUES ('Extra Hipermercado');
            INSERT INTO loja (descricao) VALUES ('Carrefour');
            INSERT INTO loja (descricao) VALUES ('Walmart');
            INSERT INTO loja (descricao) VALUES ('Supermercado Dia');
            INSERT INTO loja (descricao) VALUES ('Supermercado Atacadão');
            INSERT INTO loja (descricao) VALUES ('Supermercado Sonda');
            INSERT INTO loja (descricao) VALUES ('Supermercado Makro');
            INSERT INTO loja (descricao) VALUES ('Supermercado Guanabara');
            INSERT INTO loja (descricao) VALUES ('Supermercado Angeloni');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
    
}
