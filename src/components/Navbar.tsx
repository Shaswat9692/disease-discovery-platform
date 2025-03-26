
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { MediKit } from './icons/MediKit';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2 font-semibold" onClick={handleHomeClick} role="button">
          <MediKit className="h-6 w-6 text-health-blue" />
          <span className="text-xl font-semibold tracking-tight">HealthGuide</span>
        </div>
        <nav className="ml-auto flex gap-4 items-center">
          <Link to="/" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/categories" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
            Categories
          </Link>
          <Link to="/about" className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <div className="ml-4">
            <Link to="/search" className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/80">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
