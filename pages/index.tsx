import Head from 'next/head'
import { useEffect } from 'react';

const home = function Home() {
  useEffect(() => {
    const current = 9900;
    const total = 10000;
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
        const time = 1000 * Math.pow(current / count, 1000);
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
    <div className="font-roboto-mono bg-white text-gray-900">
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
            <svg id="play" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="bg-gray-900 p-1 h-8 w-8 rounded-full">
              <path d="M4.33993 2.93L2.92993 4.34L7.28993 8.7L6.99993 9H2.99993V15H6.99993L11.9999 20V13.41L16.1799 17.59C15.5299 18.08 14.7999 18.47 13.9999 18.7V20.76C15.3399 20.46 16.5699 19.84 17.6099 19.01L19.6599 21.06L21.0699 19.65L4.33993 2.93ZM9.99993 15.17L7.82993 13H4.99993V11H7.82993L8.70993 10.12L9.99993 11.41V15.17ZM18.9999 12C18.9999 12.82 18.8499 13.61 18.5899 14.34L20.1199 15.87C20.6799 14.7 20.9999 13.39 20.9999 12C20.9999 7.72 18.0099 4.14 13.9999 3.23V5.29C16.8899 6.15 18.9999 8.83 18.9999 12ZM11.9999 4L10.1199 5.88L11.9999 7.76V4ZM16.4999 12C16.4999 10.23 15.4799 8.71 13.9999 7.97V9.76L16.4799 12.24C16.4899 12.16 16.4999 12.08 16.4999 12Z" fill="white"/>
            </svg>

            <svg id="pause" width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="hidden bg-gray-900 p-1 h-8 w-8 rounded-full">
              <path d="M3 9V15H7L12 20V4L7 9H3ZM10 8.83V15.17L7.83 13H5V11H7.83L10 8.83ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="white"/>
            </svg>

            <audio id="mp3">
              <source src="Blank_Banshee_-_B-Start_Up.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

        </header>

        <main className="md:mx-auto md:flex md:container lg:px-6 xl:px-36">
          <div className="mx-auto sm:mx-0 mb-12 flex flex-none bg-center bg-contain bg-no-repeat text-center text-md tracking-widest" style={{width: "360px", height: "330px", backgroundImage: `url("/nft.png")`}}>
            <div className="m-auto">
              <div><span id="canvas-count">10000</span> / 10000</div>
              <div className="text-gray-500 pt-3">Remaining</div>
            </div>
          </div>
          <div className="flex-none mx-auto w-11/12 md:w-1/2 my-12 md:my-12">
            <h1 className="text-2xl mb-6 font-semibold">United by a blank canvas</h1>
            <p className="text-md mb-6">
              We’re selling <span className="font-extrabold">10,000 Blank NFTs</span> for 0.05 ETH
              each that evolve based on community vote. 90% of revenue goes to 
              the community treasury and 10% to charity.
            </p>
            <p className="text-md">
              To purchase, apply in Discord.
            </p>

            <a href="https://discord.gg/HZM2jcHdEU" target="_blank" rel="noreferrer" className="inline-block font-bold bg-gray-900 text-white text-xs text-center px-12 py-2 mt-6">
              Apply
            </a>

            <a href="https://medium.com/@blankfdn" target="_blank" rel="noreferrer" className="ml-6 inline-block font-bold bg-gray-300 text-gray-900 text-xs text-center px-9 py-2 mt-6">
              Learn More
            </a>
          </div>
        </main>

        <footer className="bg-gray-900 text-white py-6 text-xs">
          <div className="container mx-auto lg:px-3 xl:px-32 text-center sm:text-left">
            <a href="https://discord.gg/HZM2jcHdEU" target="_blank" rel="noreferrer" className="px-3 md:px-3 ">Discord</a>
            <a href="https://twitter.com/blankfdn" target="_blank" rel="noreferrer" className="px-3 md:px-3">Twitter</a>
            <a href="https://medium.com/@blankfdn" target="_blank" rel="noreferrer" className="px-3 md:px-3">Medium</a>
          </div>
        </footer>
      </div>
  
    </div>
  )
}


export default home;
