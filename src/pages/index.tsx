import Head from 'next/head'
import Image from 'next/image'
import { Inter, Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Cabecalho from '@/components/Cabecalho'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main className={styles.main}>
        

        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/caju.svg"
              alt="Cajugram Mármores e Granitos"
              width={100}
              height={100}
              priority
            />
          </div>
          <div className={styles.description}>
            <p>
              Acesse nossos links abaixo&nbsp;
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <Link
            href="https://www.cajugram.com.br/site/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
          <h2 className={montserrat.className}>
              Nosso Site 
              <span>
                <Image 
                  src="https://img.icons8.com/ios/50/2b4732/internet--v1.png" 
                  width={20} 
                  height={20} 
                  alt='Arrow right'
                />
              </span>
            </h2>
            {/* <p className={montserrat.className}>
              Acesse nosso site.
            </p> */}
          </Link>
          <Link
            href="https://vagas.cajugram.com.br"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={montserrat.className}>
              Vaga para Hunter de Mercado Externo
              <span>
                <Image 
                  src="https://img.icons8.com/ios-filled/50/2b4732/find-matching-job.png" 
                  width={20} 
                  height={20} 
                  alt='Arrow right'
                />
                </span>
            </h2>
            {/* <p className={montserrat.className}>
              Faça parte do nosso time!
            </p> */}
          </Link>
          {/* 
          <Link
            href="https://janiacorreia.empregare.com/pt-br/vaga-analista-de-rh_46065"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={montserrat.className}>
              Vaga para Analista de RH 
              <span>
                <Image 
                  src="https://img.icons8.com/ios-filled/50/2b4732/find-matching-job.png" 
                  width={20} 
                  height={20} 
                  alt='Arrow right'
                />
              </span>
            </h2>
            <p className={inter.className}>
              Faça parte do nosso time!
            </p> 
          </Link> 
          */}
        </div>
      </main>
    </>
  )
}
