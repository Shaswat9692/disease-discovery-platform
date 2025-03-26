
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import diseasesData from '@/data/diseasesData';

interface SearchBoxProps {
  className?: string;
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ 
  className, 
  placeholder = "Search diseases..." 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof diseasesData>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Filter diseases based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filteredResults = diseasesData.filter(disease => 
      disease.name.toLowerCase().includes(query) || 
      disease.category.toLowerCase().includes(query) ||
      disease.symptoms.some(symptom => symptom.toLowerCase().includes(query))
    );
    
    setSearchResults(filteredResults);
    setIsResultsVisible(true);
  }, [searchQuery]);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsResultsVisible(false);
    }
  };

  const handleDiseaseClick = (id: string) => {
    navigate(`/disease/${id}`);
    setIsResultsVisible(false);
    setSearchQuery('');
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsResultsVisible(false);
  };

  return (
    <div className={cn("relative w-full max-w-md", className)} ref={searchRef}>
      <form onSubmit={handleSearch} className="w-full">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-10 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.trim() !== '' && setIsResultsVisible(true)}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </form>

      {isResultsVisible && searchResults.length > 0 && (
        <div className="absolute top-full left-0 w-full mt-1 p-2 bg-background border border-border rounded-md shadow-md z-10 animate-fade-in">
          <div className="max-h-64 overflow-y-auto">
            {searchResults.map((disease) => (
              <div
                key={disease.id}
                className="p-2 hover:bg-secondary rounded cursor-pointer flex items-center gap-2"
                onClick={() => handleDiseaseClick(disease.id)}
              >
                <div className="text-primary text-sm font-medium">{disease.name}</div>
                <div className="text-xs text-muted-foreground">{disease.category}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
