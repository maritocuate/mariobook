import { useEffect, useRef } from "react";

function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.playbackRate = 4
        } 
    }, [])

    return (
        <section id="hero">
            <div>
                <h1>MarioBook Pro</h1>
                <img src="/title.png" alt="MarioBook Title" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <button>Buy</button>
            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    )
}

export default Hero