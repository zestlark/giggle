'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

function TextAudioPlayer({ story }: { story: string }) {
    console.log(story);
    

    const [isPaused, setIsPaused] = useState(false);
    const [utterance, setUtterance] = useState<any>(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(story);
        setUtterance(u);
        return () => {
            synth.cancel();
        };
    }, []);

    const handlePlay = () => {
        alert('hi')
        const synth = window.speechSynthesis;
        if (isPaused) {
            synth.resume();
        }
        synth.speak(utterance);
        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;
        synth.pause();
        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;
        synth.cancel();
        setIsPaused(false);
    };

    return (
        <div className="flex my-10 justify-center items-center bg-[#E46036] p-5 w-20 h-20 rounded-full mx-auto">
            {!isPaused ?
                <Image onClick={handlePlay} width={40} height={40} className="invert" src="https://icons.veryicon.com/png/o/miscellaneous/winsion/play-button-6.png" alt="" />
                :
                <Image onClick={handlePause} width={40} height={40} className="invert" src="https://icons.veryicon.com/png/o/miscellaneous/ios-icon-library/pause-pause.png" alt="" />
            }
        </div>
    )
}

export default TextAudioPlayer