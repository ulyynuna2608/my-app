import Link from "next/link";

export default function () {
    return (
        <>
            <h1>Produtos</h1>
            <ol>
                <Link  href={"/listaproduto/1"} ><li>Produto 1</li></Link>
                <Link  href={"/listaproduto/2"} ><li>Produto 2</li></Link>
                <Link  href={"/listaproduto/3"} ><li>Produto 3</li></Link>
            </ol>
        </>
    );
}