import { HttpException, HttpStatus } from "@nestjs/common";

export class Messages extends HttpException {

    constructor(mensagem: string, status: HttpStatus) {
        super(mensagem, status);
    }


    // Tratamento de Mensagens de Sucesso para Loja
    public STORE_CREATED_SUCCESS(descricao: string) {
        return new Messages(`Sucesso! A Loja ${descricao}, foi criada com sucesso!`, HttpStatus.CREATED);
    }

    public STORE_UPDATED_SUCCESS(descricao: string) {
        return new Messages(`Sucesso! A Loja ${descricao}, foi atualizada com sucesso!`, HttpStatus.OK);
    }

    public STORE_DELETED_SUCCESS(id: number) {
        return new Messages(`Sucesso! A Loja com o ID: ${id}, foi excluída com sucesso! Incluindo as suas dependências, caso existam, na tabela ProdutoLoja.`, HttpStatus.OK);
    }


    // Tratamento de Mensagens de Sucesso para Produto
    public PRODUCT_CREATED_SUCCESS(descricao: string) {
        return new Messages(`Sucesso! O Produto ${descricao}, foi criado com sucesso!`, HttpStatus.CREATED);
    }

    public PRODUCT_UPDATED_SUCCESS(descricao: string) {
        return new Messages(`Sucesso! O Produto ${descricao}, foi atualizado com sucesso!`, HttpStatus.OK);
    }

    public PRODUCT_DELETED_SUCCESS(id: number) {
        return new Messages(`Sucesso! O Produto com o ID: ${id}, foi excluído com sucesso! Incluindo as suas dependências, caso existam, na tabela ProdutoLoja.`, HttpStatus.OK);
    }


    // Tratamento de Mensagens de Sucesso para ProdutoLoja
    public PRODUCT_STORE_CREATED_SUCCESS(id: number) {
        return new Messages(`Sucesso! O Produto Loja com o ID: ${id}, foi criado com sucesso!`, HttpStatus.CREATED);
    }

    public PRODUCT_STORE_UPDATED_SUCCESS(id: number) {
        return new Messages(`Sucesso! O Produto Loja com o ID: ${id}, foi atualizado com sucesso!`, HttpStatus.OK);
    }

    public PRODUCT_STORE_DELETED_SUCCESS(id: number) {
        return new Messages(`Sucesso! O Produto Loja com o ID: ${id}, foi excluído com sucesso!`, HttpStatus.OK);
    }


    // Tratamento de Exceções para Loja
    public STORE_NOT_FOUND(id: number) {
        return new Messages(`ERRO! A Loja com o ID: ${id}, não foi encontrada!`, HttpStatus.NOT_FOUND);
    }

    public STORE_NOT_UPDATED(id: number) {
        return new Messages(`ERRO! A Loja com o ID: ${id}, não foi atualizada!`, HttpStatus.NOT_MODIFIED);
    }


     // Tratamento de Exceções para Produto
     public PRODUCT_NOT_FOUND(id: number) {
        return new Messages(`ERRO! O Produto com o ID: ${id}, não foi encontrado!`, HttpStatus.NOT_FOUND);
    }

    public PRODUCT_NOT_UPDATED(id: number) {
        return new Messages(`ERRO! O Produto com o ID: ${id}, não foi atualizado!`, HttpStatus.NOT_MODIFIED);
    }


     // Tratamento de Exceções para ProdutoLoja
     public PRODUCT_STORE_NOT_FOUND(id: number) {
        return new Messages(`ERRO! O Produto Loja com o ID: ${id}, não foi encontrado!`, HttpStatus.NOT_FOUND);
    }

    public PRODUCT_STORE_NOT_UPDATED(id: number) {
        return new Messages(`ERRO! O Produto Loja com o ID: ${id}, não foi atualizado!`, HttpStatus.NOT_MODIFIED);
    }
}