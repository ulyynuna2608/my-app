import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    
    <h1>Produtos</h1>
    <h2>Produto1</h2>
    <h3>Produto2</h3>
    <h2>Produto3</h2>
    <Link href={"/sobre"}>Home</Link>
    </main>

    );
  }
