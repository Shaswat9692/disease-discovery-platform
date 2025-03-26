
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
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
  'General',
  'Neurology',
  'Infectious Disease',
  'Sleep Disorders'
];

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredDiseases, setFilteredDiseases] = useState(diseasesData);
  
  React.useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredDiseases(diseasesData);
    } else {
      setFilteredDiseases(diseasesData.filter(disease => disease.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">Disease Categories</h1>
          
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
      </main>
      
      <footer className="bg-secondary py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} HealthGuide. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Categories;
