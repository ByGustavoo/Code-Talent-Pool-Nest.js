import { HttpException, HttpStatus } from "@nestjs/common";

export class SucessMessages extends HttpException {

    constructor(mensagem: string, status: HttpStatus) {
        super(mensagem, status);
    }


    // Tratamento de Mensagens de Sucesso para Loja
    static STORE_CREATED_SUCCESS(descricao: string) {
        return new SucessMessages(`Sucesso! A Loja ${descricao}, foi criada com sucesso!`, HttpStatus.CREATED);
    }

    static STORE_UPDATED_SUCCESS(descricao: string) {
        return new SucessMessages(`Sucesso! A Loja ${descricao}, foi atualizada com sucesso!`, HttpStatus.OK);
    }

    static STORE_DELETED_SUCCESS(id: number) {
        return new SucessMessages(`Sucesso! A Loja com o ID: ${id}, foi excluída com sucesso!`, HttpStatus.OK);
    }



    // Tratamento de Mensagens de Sucesso para Produto
    static PRODUCT_CREATED_SUCCESS(descricao: string) {
        return new SucessMessages(`Sucesso! O Produto ${descricao}, foi criado com sucesso!`, HttpStatus.CREATED);
    }

    static PRODUCT_UPDATED_SUCCESS(descricao: string) {
        return new SucessMessages(`Sucesso! O Produto ${descricao}, foi atualizado com sucesso!`, HttpStatus.OK);
    }

    static PRODUCT_DELETED_SUCCESS(id: number) {
        return new SucessMessages(`Sucesso! O Produto com o ID: ${id}, foi excluído com sucesso!`, HttpStatus.OK);
    }



    // Tratamento de Mensagens de Sucesso para ProdutoLoja
    static PRODUCT_STORE_CREATED_SUCCESS(id: number) {
        return new SucessMessages(`Sucesso! O Produto Loja com o ID: ${id}, foi criado com sucesso!`, HttpStatus.CREATED);
    }

    static PRODUCT_STORE_UPDATED_SUCCESS(id: number) {
        return new SucessMessages(`Sucesso! O Produto Loja com o ID: ${id}, foi atualizado com sucesso!`, HttpStatus.OK);
    }

    static PRODUCT_STORE_DELETED_SUCCESS(id: number) {
        return new SucessMessages(`Sucesso! O Produto Loja com o ID: ${id}, foi excluído com sucesso!`, HttpStatus.OK);
    }
}