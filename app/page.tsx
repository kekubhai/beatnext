'use client'; // Ensure this is the first line

import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from 'next/link';


export default function LandingPage() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-center text-white mb-4 animate-fade-in-up">
          Welcome to BeatNest
        </h1>
        <p className="text-xl text-white mb-8 animate-fade-in-up animation-delay-200">
          Unleash your musical creativity with virtual instruments
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
          <Button asChild>
            <Link href="/beats">Start Playing</Link>
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full bg-transparent text-white p-4 text-center">
        <p>Made with ❤️ by Anirban Ghosh</p>
        <a
          href="https://github.com/kekubhai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-white hover:text-gray-300 mt-2"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </footer>
    </div>
  );
}

// Sparkles component with TypeScript

