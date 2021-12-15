import { HeadProvider, Title } from "react-head";
import { Link } from "react-router-dom";

export default function Moe() {
    const audio = [
        {
            'title': 'Listen.moe Japan',
            'audio': 'https://listen.moe/fallback'
        },
        {
            'title': 'Listen.moe Kpop',
            'audio': 'https://listen.moe/kpop/fallback'
        },
    ]

    let queue = 0;

    function play() {
        document.querySelector('#image').classList.add('animate-spin')
        document.querySelector('#play').classList.add('hidden')
        document.querySelector('#pause').classList.remove('hidden')
        document.querySelector('source').src = audio[queue].audio
        document.querySelector('#audio').load()
        document.querySelector('#audio').play()
        title()
    }

    function pause() {
        document.querySelector('#image').classList.remove('animate-spin')
        document.querySelector('#play').classList.remove('hidden')
        document.querySelector('#pause').classList.add('hidden')
        document.querySelector('#audio').pause()
    }

    function volume() {
        document.querySelector("#volume").addEventListener("change", function (e) {
            document.querySelector('#audio').volume = e.currentTarget.value / 100;
        })
    }

    function next() {
        if (document.querySelector('#audio').paused || !document.querySelector('#audio').currentTime) return;
        if (queue === audio.length - 1) {
            queue = 0;
            document.querySelector('source').src = audio[queue].audio;
            document.querySelector('#audio').load();
            document.querySelector('#audio').play();
            title()
        } else {
            ++queue;
            document.querySelector('source').src = audio[queue].audio;
            document.querySelector('#audio').load();
            document.querySelector('#audio').play();
            title()
        }
    }

    function back() {
        if (document.querySelector('#audio').paused || !document.querySelector('#audio').currentTime) return;
        if (queue === 0) {
            queue = audio.length - 1;
            document.querySelector('source').src = audio[queue].audio;
            document.querySelector('#audio').load();
            document.querySelector('#audio').play();
            title()
        } else {
            --queue;
            document.querySelector('source').src = audio[queue].audio;
            document.querySelector('#audio').load();
            document.querySelector('#audio').play();
            title()
        }
    }

    function title() {
        if (document.querySelector('#title')) {
            document.querySelector('#title').innerHTML = audio[queue].title;
        }
    }
    return (
        <>
            <HeadProvider>
                <Title>Listen Moe - Vann-Dev</Title>
            </HeadProvider>
            <audio id="audio">
                <source src="" type="audio/ogg"></source>
                <source src="" type="audio/mpeg"></source>
                Your browser does not support the audio format.
            </audio>
            <div className="flex top-0 items-center justify-between p-6">
                <Link to={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </Link>
                <a href="https://listen.moe" className="text-center text-gray-200 text-2xl font-outfit">Listen Moe</a>
            </div>

            <div className="w-screen">
                <div>
                    <div className="flex justify-center mt-16">
                        <img id="image" src="/moe.png" alt="listen moe" className="rounded-full" />
                    </div>
                    <div className="mt-10 flex justify-center">
                        <a id="title" href="https://listen.moe" className="text-gray-200 text-center font-outfit text-3xl">Nothing Playing</a>
                    </div>
                </div>
            </div>

            {/* player menu */}
            <div className="flex justify-center w-screen p-10">
                <div className="grid">
                    <input onInput={volume} id="volume" type={'range'} className="slider mb-16 cursor-pointer transition duration-500 opacity-70 hover:opacity-100"></input>
                    <div className="flex items-center gap-10">
                        <div className="cursor-pointer transition duration-500 opacity-70 hover:opacity-100" onClick={back}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                            </svg>
                        </div>
                        <div id="play" onClick={play} className="cursor-pointer transition duration-500 opacity-70 hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div id="pause" onClick={pause} className="hidden cursor-pointer transition duration-500 opacity-70 hover:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="cursor-pointer transition duration-500 opacity-70 hover:opacity-100" onClick={next}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}