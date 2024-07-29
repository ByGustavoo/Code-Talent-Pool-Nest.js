import { HttpException, HttpStatus } from "@nestjs/common";

export class ExceptionsMessages extends HttpException {

    constructor(mensagem: string, status: HttpStatus) {
        super(mensagem, status);
    }

    // Tratamento de Exceções para Loja
    static STORE_NOT_FOUND(id: number) {
        return new ExceptionsMessages(`ERRO! A Loja com o ID: ${id}, não foi encontrada!`, HttpStatus.NOT_FOUND);
    }

    static STORE_NOT_UPDATED(id: number) {
        return new ExceptionsMessages(`ERRO! A Loja com o ID: ${id}, não foi atualizada!`, HttpStatus.NOT_MODIFIED);
    }



     // Tratamento de Exceções para Produto
     static PRODUCT_NOT_FOUND(id: number) {
        return new ExceptionsMessages(`ERRO! O Produto com o ID: ${id}, não foi encontrado!`, HttpStatus.NOT_FOUND);
    }

    static PRODUCT_NOT_UPDATED(id: number) {
        return new ExceptionsMessages(`ERRO! O Produto com o ID: ${id}, não foi atualizado!`, HttpStatus.NOT_MODIFIED);
    }



     // Tratamento de Exceções para ProdutoLoja
     static PRODUCT_STORE_NOT_FOUND(id: number) {
        return new ExceptionsMessages(`ERRO! O Produto Loja com o ID: ${id}, não foi encontrado!`, HttpStatus.NOT_FOUND);
    }

    static PRODUCT_STORE_NOT_UPDATED(id: number) {
        return new ExceptionsMessages(`ERRO! O Produto Loja com o ID: ${id}, não foi atualizado!`, HttpStatus.NOT_MODIFIED);
    }
}