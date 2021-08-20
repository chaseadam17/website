import Head from 'next/head'
import { useEffect } from 'react';

const home = function Home() {
  useEffect(() => {
    const current = 700;
    const total = 1000;
    let count = total;
    let timeout;

    const tick = () => {
      const countElement = document.getElementById('canvas-count');
      count = parseInt(countElement.innerHTML);
      if (count <= current) count = current + 1;
      let nextCount = `${count - 1}`;
      while (nextCount.length < 3) {
        nextCount = `0${nextCount}`;
      }
      countElement.innerHTML = nextCount;

      if (count > current + 1) {
        const time = 1000 * Math.pow(current / count, 100);
        timeout = setTimeout(tick, time);
      }
    }

    tick();
    
    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  const toggleAudio = () => {
    const mp3: HTMLAudioElement = document.getElementById('mp3') as HTMLAudioElement;
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");

    if (play.classList.contains('hidden')) {
      mp3.pause();
      play.classList.remove('hidden');
      pause.classList.add('hidden');
    } else {
      mp3.play();
      play.classList.add('hidden');
      pause.classList.remove('hidden');
    }
  }

  return (
    <div className="font-roboto-mono bg-gray-100">
      <Head>
        <title>Blank Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:flex md:flex-col md:h-screen md:justify-between">
        <header className="px-6 py-6 md:pt-12 text-center md:text-left md:mx-auto md:container xl:px-36 flex flex-row justify-between">
          <h1 className="pt-3 font-semibold tracking-wide text-sm ">
            Blank
            <span className="tracking-widest">.</span>
            Foundation
          </h1>

          <div onClick={toggleAudio} className="cursor-pointer">
            <svg id="play" xmlns="http://www.w3.org/2000/svg" className="bg-black h-9 w-9 rounded-full shado" viewBox="1 1 18 18" fill="white">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            <svg id="pause" xmlns="http://www.w3.org/2000/svg" className="bg-black h-9 w-9 rounded-full hidden" viewBox="1 1 18 18" fill="white">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>

            <audio id="mp3">
              <source src="Blank_Banshee_-_B-Start_Up.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

        </header>

        <main className="md:mx-auto md:flex md:container xl:px-36">
          <div className="mb-12 mx-auto flex flex-none bg-white shadow-2xl text-center text-md tracking-widest md:mx-12" style={{width: "300px", height: "300px"}}>
            <div className="m-auto">
              <div><span id="canvas-count">1000</span> / 1000</div>
              <div className="text-gray-400 pt-3">Remaining</div>
            </div>
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

            <a href="https://discord.gg/HZM2jcHdEU" target="_blank" rel="noreferrer" className="inline-block font-bold bg-black text-white text-sm text-center px-6 py-1 mt-6">
              Apply
            </a>

            <a href="https://medium.com/@blankfdn/introducing-blank-4a41f8209982" target="_blank" rel="noreferrer" className="ml-6 inline-block font-bold bg-gray-300 text-black text-sm text-center px-6 py-1 mt-6">
              Learn More
            </a>
          </div>
        </main>

        <footer className="bg-black text-white md:flex-none md:px-52 py-3 text-sm text-center sm:text-left">
          <a href="https://discord.gg/HZM2jcHdEU" target="_blank" rel="noreferrer" className="px-3 md:px-3 ">Discord</a>
          <a href="https://twitter.com/blankfdn" target="_blank" rel="noreferrer" className="px-3 md:px-3">Twitter</a>
          <a href="https://medium.com/@blankfdn" target="_blank" rel="noreferrer" className="px-3 md:px-3">Medium</a>
        </footer>
      </div>
  
    </div>
  )
}


export default home;