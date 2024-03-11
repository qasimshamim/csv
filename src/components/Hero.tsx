"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Pros {
    heading: string,
    url?: string,
    btn?: string,
    video?: string,
    poster: string,
    text?: string
}

const Hero = ({ heading, url, btn, video, poster, text }: Pros) => {





    return (
        <section className="relative">
            <div className="w-full h-screen bg-black">
                <video
                    className="object-cover w-full h-full relative opacity-50"
                    autoPlay={true}
                    playsInline={true}
                    loop={true}
                    muted={true}
                    poster={poster}
                >
                    {video && <source
                        src={video}
                        type="video/mp4"
                    />}
                </video>
            </div>
            <div className="absolute inset-0 flex sm:items-start items-center justify-center text-white capitalize text-2xl ps-4 md:ps-8  sm:text-[4dvw] text-center flex-col gap-3">
                {heading && <h1 className="font-bold leading-tight ">{heading}</h1>}

                {text && <h6 className="text-2xl flex justify-center items-center flex-wrap gap-3 capitalize">
                    {text}
                </h6>}

                {btn && url && <Link href={url}>
                    <Button className="bg-Tblue hover:bg-TDarkBlue capitalize">
                        {btn}
                    </Button>
                </Link>}
            </div>
        </section>
    )
}

export default Hero