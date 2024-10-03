import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Mic = () => {
    const{
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
        
    } = useSpeechRecognition({transcribing: true});

    useEffect(()=> {
        console.log(transcript)
    },[transcript])

    if (!browserSupportsSpeechRecognition){
        return<span>Browser"s Does not support Speech Recognition.</span>;
    }
    return(
        <div>
            <p>Microphone: {listening }</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
        </div>
    );
};

export default Mic