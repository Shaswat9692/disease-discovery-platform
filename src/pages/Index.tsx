
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import DiseaseCard from '@/components/DiseaseCard';
import diseasesData from '@/data/diseasesData';
import { cn } from '@/lib/utils';

const categories = [
  'All',
  'Dermatology',
  'Respiratory',
  'ENT',
  'Orthopedics',
  'Cardiology',
  'Gastroenterology',
  'Dental',
  'Ophthalmology',
  'General'
];

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredDiseases, setFilteredDiseases] = useState(diseasesData);
  
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredDiseases(diseasesData);
    } else {
      setFilteredDiseases(diseasesData.filter(disease => disease.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-health-light-blue/30 to-health-light-purple/30 z-0"></div>
          <div className="container relative z-10 mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Your Guide to Better Health
                </h1>
                <p className="text-lg text-muted-foreground">
                  Find information about common diseases, their symptoms, precautions, 
                  and basic medications to help you make informed health decisions.
                </p>
                <div className="pt-4">
                  <SearchBox className="max-w-md" />
                </div>
              </div>
              <div className="relative h-64 md:h-auto hidden md:block">
                <div className="absolute inset-0 bg-health-blue rounded-2xl opacity-5 animate-pulse-slow"></div>
                <div className="absolute -inset-1 blur-xl bg-health-blue rounded-2xl opacity-10"></div>
                <div className="h-full w-full glass-card rounded-2xl flex items-center justify-center p-6 animate-scale-in">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-health-blue mb-4">{diseasesData.length}+</div>
                    <div className="text-lg font-medium">Common Diseases</div>
                    <div className="mt-2 text-sm text-muted-foreground">Detailed information at your fingertips</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Disease categories */}
        <section className="py-10 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-heading mb-6">Browse by Category</h2>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm transition-colors",
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredDiseases.map((disease) => (
                <DiseaseCard
                  key={disease.id}
                  disease={disease}
                  className="animate-scale-in"
                />
              ))}
            </div>
            
            {filteredDiseases.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">No diseases found in this category.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Information section */}
        <section className="py-16 px-4 bg-secondary/50">
          <div className="container mx-auto max-w-6xl">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="section-heading mb-6">How to Use This Guide</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-background/50">
                  <div className="h-10 w-10 rounded-full bg-health-light-blue flex items-center justify-center mb-4">
                    <span className="text-health-blue font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Find Your Condition</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse by category or use the search function to find the specific health condition you're interested in.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <div className="h-10 w-10 rounded-full bg-health-light-teal flex items-center justify-center mb-4">
                    <span className="text-health-teal font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Learn About Symptoms</h3>
                  <p className="text-sm text-muted-foreground">
                    Each condition page provides detailed symptoms to help you understand what to look for.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-background/50">
                  <div className="h-10 w-10 rounded-full bg-health-light-red flex items-center justify-center mb-4">
                    <span className="text-health-red font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Find Nearby Help</h3>
                  <p className="text-sm text-muted-foreground">
                    Use the hospital locator to find healthcare facilities near you that can provide professional treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">HealthGuide</h3>
              <p className="text-sm text-muted-foreground">
                A comprehensive resource for common diseases, symptoms, and basic treatments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Important Notice</h3>
              <p className="text-sm text-muted-foreground">
                This website is for informational purposes only and should not replace professional medical advice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="/categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Categories</a></li>
                <li><a href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-muted">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} HealthGuide. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
