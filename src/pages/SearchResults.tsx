
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import DiseaseCard from '@/components/DiseaseCard';
import diseasesData from '@/data/diseasesData';
import { Search, ArrowLeft } from 'lucide-react';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [results, setResults] = useState(diseasesData);
  
  useEffect(() => {
    if (query) {
      const searchTerms = query.toLowerCase().split(' ');
      
      const filteredResults = diseasesData.filter(disease => {
        const nameMatch = disease.name.toLowerCase().includes(query.toLowerCase());
        const categoryMatch = disease.category.toLowerCase().includes(query.toLowerCase());
        const symptomMatch = disease.symptoms.some(symptom => 
          searchTerms.some(term => symptom.toLowerCase().includes(term))
        );
        
        return nameMatch || categoryMatch || symptomMatch;
      });
      
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-1 text-sm font-medium hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6">Search Results</h1>
            <SearchBox 
              className="max-w-lg mb-4" 
              placeholder={`Search for "${query}"...`}
            />
            <p className="text-sm text-muted-foreground">
              Found {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
            </p>
          </div>
          
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {results.map((disease) => (
                <DiseaseCard
                  key={disease.id}
                  disease={disease}
                  className="animate-scale-in"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-secondary/30 rounded-2xl">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h2 className="text-xl font-semibold mb-2">No results found</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                We couldn't find any diseases matching "{query}". Try a different search term or browse by category.
              </p>
              <button
                onClick={() => navigate('/')}
                className="text-primary hover:underline"
              >
                Browse all diseases
              </button>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary py-8 px-4 mt-auto">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} HealthGuide. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SearchResults;
