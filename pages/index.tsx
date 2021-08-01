import Head from 'next/head'

export default function Home() {
  return (
    <div className="font-roboto-mono bg-gray-100">
      <Head>
        <title>Blank Foundation</title>
        <link rel="icon" href="/favicon.ico" />
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

        <main className="flex">
          <div className="flex flex-none mr-12 bg-white shadow-2xl text-center text-gray-400 text-lg tracking-widest" style={{width: "300px", height: "300px"}}>
            <div className="m-auto">001</div>
          </div>
          <div className="flex-none w-1/2">
            <h1 className="text-2xl mb-6 font-semibold">United by a blank canvas</h1>
            <p className="text-md mb-6">
              We’re offering 1st edition mint of 100 Blank NFTs for 0.05 ETH each that 
              evolve over time and grant you founding membership in the community. 
              100% of revenue to the community-governed treasury. 
            </p>
            <p className="text-md">
              To purchase, apply in Discord.
            </p>
          </div>
        </main>

        <footer className="">
          Footer
        </footer>
      </div>
      
    </div>
  )
}
