"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${isMenuOpen ? 'bg-white border-gray-200' : 'bg-background/95 backdrop-blur-sm border-border'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gradient-primary hover:opacity-80 transition-opacity cursor-pointer">
              Thrive in Tech
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/#problem" className="text-muted-foreground hover:text-foreground transition-colors">
              The Problem
            </Link>
            <Link href="/#solution" className="text-muted-foreground hover:text-foreground transition-colors">
              Career Paths
            </Link>
          </nav>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1 relative z-50"
          >
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

      {/* Full Page Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white">
          {/* Navigation Content */}
          <div className="flex h-full pt-20">
            {/* Left side navigation */}
            <div className="flex-1 flex flex-col justify-start px-12">
              <nav className="space-y-6">
                <Link
                  href="/how-it-works"
                  className="block group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        How it works
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Learn our proven methodology
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link
                  href="/events"
                  className="block group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        Events
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Join our community events
                      </div>
                    </div>
                  </div>
                </Link>
              </nav>
            </div>
            
            {/* Right side - empty for visual balance */}
            <div className="flex-1"></div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
