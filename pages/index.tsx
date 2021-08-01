import Head from 'next/head'

export default function Home() {
  return (
    <div className="font-roboto-mono bg-gray-100">
      <Head>
        <title>Blank Foundation</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300,600&display=swap" rel="stylesheet" />
      </Head>

      <div className="container mx-auto flex flex-col h-screen justify-between xl:px-36">
        <header className="pt-12 flex flex-row justify-between">
          <h1 className="font-semibold tracking-wide text-sm">
            Blank
            <span className="tracking-widest">.</span>
            Foundation
          </h1>

          <div>
            <a href="" className="pl-6 text-sm">Discord</a>
            <a href="" className="pl-6 text-sm">Twitter</a>
            <a href="" className="pl-6 text-sm">Medium</a>
          </div>

        </header>

        <main className="">
          <div className="bg-white" style={{width: "300px", height: "300px"}}></div>
        </main>

        <footer className="">
          Footer
        </footer>
      </div>
      
    </div>
  )
}
