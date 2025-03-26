
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Disease } from '@/data/diseasesData';

interface DiseaseCardProps {
  disease: Disease;
  className?: string;
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ disease, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/disease/${disease.id}`);
  };

  // Generate a random pastel color based on the disease name
  const generatePastelColor = (name: string) => {
    const colors = [
      'bg-health-light-blue',
      'bg-health-light-teal',
      'bg-health-light-red',
      'bg-health-light-orange',
      'bg-health-light-purple'
    ];
    
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Get matching icon color
  const getIconColor = (bgColor: string) => {
    const colorMap: Record<string, string> = {
      'bg-health-light-blue': 'text-health-blue',
      'bg-health-light-teal': 'text-health-teal',
      'bg-health-light-red': 'text-health-red',
      'bg-health-light-orange': 'text-health-orange',
      'bg-health-light-purple': 'text-health-purple'
    };
    
    return colorMap[bgColor] || 'text-primary';
  };

  const bgColor = generatePastelColor(disease.name);
  const iconColor = getIconColor(bgColor);

  // Determine if we should show an image background
  const hasBackgroundImage = disease.imageUrl && disease.id === "common-cold";

  return (
    <div 
      className={cn(
        "disease-card flex flex-col h-full cursor-pointer group",
        className
      )}
      onClick={handleClick}
    >
      {/* Card header */}
      <div 
        className={cn(
          "p-4 rounded-t-2xl", 
          hasBackgroundImage ? "" : bgColor,
          "relative overflow-hidden"
        )}
        style={hasBackgroundImage ? {
          backgroundImage: `url(${disease.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : {}}
      >
        {hasBackgroundImage && (
          <div className="absolute inset-0 bg-black/30"></div>
        )}
        
        <div className="flex justify-between items-center relative z-10">
          <span className={cn(
            "text-xs font-medium px-2 py-1 rounded-full",
            hasBackgroundImage ? "bg-white/50 text-black" : "bg-white/30 backdrop-blur-sm"
          )}>
            {disease.category}
          </span>
          <div className={cn(
            "h-8 w-8 rounded-full flex items-center justify-center", 
            iconColor, 
            hasBackgroundImage ? "bg-white/60" : "bg-white/40 backdrop-blur-sm"
          )}>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
        <h3 className={cn(
          "mt-3 text-lg font-semibold relative z-10",
          hasBackgroundImage ? "text-white" : ""
        )}>
          {disease.name}
        </h3>
      </div>

      {/* Card body */}
      <div className="p-4 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {disease.description}
        </p>
      </div>

      {/* Card footer */}
      <div className="p-4 pt-0">
        <div className="flex gap-2 flex-wrap">
          {disease.symptoms.slice(0, 3).map((symptom, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {symptom.length > 20 ? `${symptom.substring(0, 20)}...` : symptom}
            </span>
          ))}
          {disease.symptoms.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              +{disease.symptoms.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiseaseCard;
