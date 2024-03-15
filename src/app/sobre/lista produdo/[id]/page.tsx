import Link from "next/link";

export default function Produto({params} : {params {id: string}}) {
    return (

        <>
        <h1>Produtos</h1>
        <p>Dados do produto{params.id}</p>
        <Link heref {"/listaProdutos"}> Home</Link>
        </>
    );
}