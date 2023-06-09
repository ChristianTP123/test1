import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundShape from "./BackgroundShape";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Shaylee Meyer",
      "Dog Mom",
      "Software Engineer",
      "Science Enthusiast",
      "Philosophy Enthusiast",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-40">
      <BackgroundShape />
      <Image
        width={175}
        height={175}
        className="relative mx-auto rounded-full object-cover "
        src="/../public/me.png"
        alt={""}
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#b624e6" />
        </h1>
        <div className="pt-5 z-20 relative">
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Portfolio</button>
          </Link>
          <Link href="#leadership">
            <button className="heroButton">Leadership Experience</button>
          </Link>
          <Link href="#interests">
            <button className="heroButton">Interests</button>
          </Link>
          <Link href="#references">
            <button className="heroButton">References</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
