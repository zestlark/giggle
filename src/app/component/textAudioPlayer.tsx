'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

function TextAudioPlayer({ story }: { story: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);
    const synth = window.speechSynthesis;

    useEffect(() => {
        const u = new SpeechSynthesisUtterance(story);
        setUtterance(u);

        return () => {
            synth.cancel();
        };
    }, []);

    const handlePlay = () => {     
        if (isPlaying) {
            synth.cancel();
            setIsPlaying(false);
        } else {
            if (utterance) {
                synth.speak(utterance);
                setIsPlaying(true);
            }
        }
    };

    useEffect(() => {
        if (utterance) {
            utterance.onend = () => {
                setIsPlaying(false);
            };
        }
    }, [utterance]);

    return (
        <div className="flex my-10 mb-32 justify-center items-center bg-[#E46036] p-5 w-20 h-20 rounded-full mx-auto" onClick={handlePlay}>
            {isPlaying ? (
                <Image width={40} height={40} className="invert" src="https://icons.veryicon.com/png/o/miscellaneous/ios-icon-library/pause-pause.png" alt="Stop" />
            ) : (
                <Image width={40} height={40} className="invert" src="https://icons.veryicon.com/png/o/miscellaneous/winsion/play-button-6.png" alt="Play" />
            )}
        </div>
    );
}

export default TextAudioPlayer;
