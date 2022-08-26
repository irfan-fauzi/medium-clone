import Head from "next/head"
import {ListMovie} from "../components/"
import ClientOnly from "../components/ClientOnly"

export default function Home() {

  return (
    <div>
      <Head>
        <title>list movies</title>
        <meta name="description" content="list movie" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ClientOnly>
        <ListMovie />
      </ClientOnly>
      
    </div>
  )
}
