import Head from 'next/head'
import { useEffect } from 'react';

const home = function Home() {
  useEffect(() => {
    const tick = () => {
      const countElement = document.getElementById('canvas-count');
      let count = parseInt(countElement.innerHTML);
      if (count >= 1000) count = 0;
      let nextCount = `${count + 1}`;
      while (nextCount.length < 3) {
        nextCount = `0${nextCount}`;
      }
      countElement.innerHTML = nextCount;
    }
    
    const interval = setInterval(tick, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="font-roboto-mono bg-gray-100">
      <Head>
        <title>Blank Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:flex md:flex-col md:h-screen md:justify-between">
        <header className="py-6 md:pt-12 text-center md:text-left md:mx-auto md:container xl:px-36 md:flex md:flex-row md:justify-between">
          <h1 className="font-semibold tracking-wide text-sm ">
            Blank
            <span className="tracking-widest">.</span>
            Foundation
          </h1>

          <div className="py-6 md:pt-0 text-sm">
            <a href="https://discord.gg/HZM2jcHdEU" target="_blank" className="px-3 md:px-3 ">Discord</a>
            <a href="https://twitter.com/blankfdn" target="_blank" className="px-3 md:px-3">Twitter</a>
            <a href="https://medium.com/@blankfdn" target="_blank" className="px-3 md:px-3">Medium</a>
          </div>

        </header>

        <main className="md:mx-auto md:flex md:container xl:px-36">
          <div className="mb-12 mx-auto flex flex-none bg-white shadow-2xl text-center text-gray-400 text-lg tracking-widest md:mx-12" style={{width: "300px", height: "300px"}}>
            <div className="m-auto"><span id="canvas-count">001</span> / 1000</div>
          </div>
          <div className="flex-none mx-auto w-11/12 md:w-1/2 my-12 md:my-6">
            <h1 className="text-2xl mb-6 font-semibold">United by a blank canvas</h1>
            <p className="text-md mb-6">
              We’re offering 1st edition mint of 1000 Blank NFTs for 0.05 ETH each that 
              evolve over time and grant you founding membership in the community. 
              100% of revenue to the community-governed treasury. 
            </p>
            <p className="text-md">
              To purchase, apply in Discord.
            </p>

            <a href="https://discord.gg/HZM2jcHdEU" target="_blank" className="inline-block font-bold bg-black text-white text-sm text-center px-6 py-1 mt-6">
              Apply
            </a>

            <a href="https://medium.com/@blankfdn/introducing-blank-4a41f8209982" target="_blank" className="ml-6 inline-block font-bold bg-gray-300 text-black text-sm text-center px-6 py-1 mt-6">
              Learn More
            </a>
          </div>
        </main>

        <footer className="bg-black text-white text-center md:flex-none md:px-64 py-6">
        </footer>
      </div>
  
    </div>
  )
}


export default home;