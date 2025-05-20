"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, Home, Building, Info, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Building className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">StayScape</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" icon={<Home className="h-4 w-4 mr-1" />} label="Home" />
          <NavLink href="/properties" icon={<Building className="h-4 w-4 mr-1" />} label="Properties" />
          <NavLink href="/about" icon={<Info className="h-4 w-4 mr-1" />} label="About" />
          <NavLink href="/contact" icon={<Mail className="h-4 w-4 mr-1" />} label="Contact" />
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" size="sm">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button>
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-in slide-in-from-top">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="/" icon={<Home className="h-5 w-5 mr-2" />} label="Home" onClick={closeMenu} />
            <MobileNavLink href="/properties" icon={<Building className="h-5 w-5 mr-2" />} label="Properties" onClick={closeMenu} />
            <MobileNavLink href="/about" icon={<Info className="h-5 w-5 mr-2" />} label="About" onClick={closeMenu} />
            <MobileNavLink href="/contact" icon={<Mail className="h-5 w-5 mr-2" />} label="Contact" onClick={closeMenu} />
            
            <div className="pt-4 border-t border-border flex flex-col space-y-2">
              <Button variant="outline" className="justify-start">
                <Search className="h-5 w-5 mr-2" />
                Search Properties
              </Button>
              <Button className="justify-start">
                <User className="h-5 w-5 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link 
      href={href} 
      className="text-sm font-medium flex items-center transition-colors hover:text-primary"
    >
      {icon}
      {label}
    </Link>
  );
}

function MobileNavLink({ 
  href, 
  icon, 
  label, 
  onClick 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
  onClick: () => void;
}) {
  return (
    <Link 
      href={href} 
      className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
      onClick={onClick}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}