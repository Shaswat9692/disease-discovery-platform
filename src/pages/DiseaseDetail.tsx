
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HospitalLocator from '@/components/HospitalLocator';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Check, 
  Pill, 
  Thermometer,
  Info,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import diseasesData from '@/data/diseasesData';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DiseaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const disease = diseasesData.find(d => d.id === id);
  
  if (!disease) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-6">
            <h2 className="text-2xl font-bold mb-4">Disease Not Found</h2>
            <p className="text-muted-foreground mb-6">The disease you're looking for doesn't exist in our database.</p>
            <Button onClick={() => navigate('/')}>Go to Homepage</Button>
          </div>
        </div>
      </div>
    );
  }

  // Generate a pastel color based on the disease name
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

  const bgColor = generatePastelColor(disease.name);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <div className={cn("py-12 px-4", bgColor)}>
          <div className="container mx-auto max-w-6xl">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 flex items-center gap-1 text-sm font-medium hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">{disease.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm text-sm font-medium">
                {disease.category}
              </span>
            </div>
            <p className="text-lg max-w-3xl animate-fade-in">{disease.description}</p>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto max-w-6xl py-8 px-4">
          <Tabs defaultValue="symptoms" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="symptoms" className="text-sm">Symptoms</TabsTrigger>
              <TabsTrigger value="precautions" className="text-sm">Precautions</TabsTrigger>
              <TabsTrigger value="medications" className="text-sm">Medications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="symptoms" className="animate-fade-in">
              <div className="glass-card p-6 rounded-2xl mb-6">
                <div className="flex items-center mb-4">
                  <Thermometer className="h-5 w-5 text-health-red mr-2" />
                  <h3 className="text-xl font-semibold">Common Symptoms</h3>
                </div>
                <ul className="space-y-3">
                  {disease.symptoms.map((symptom, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="pt-0.5">
                        <Check className="h-5 w-5 text-health-teal" />
                      </div>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {disease.emergencySymptoms && disease.emergencySymptoms.length > 0 && (
                <div className="bg-destructive/10 p-6 rounded-2xl animate-fade-in">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="h-5 w-5 text-destructive mr-2" />
                    <h3 className="text-xl font-semibold text-destructive">When to Seek Emergency Help</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you experience any of these symptoms, seek immediate medical attention:
                  </p>
                  <ul className="space-y-3">
                    {disease.emergencySymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="pt-0.5">
                          <AlertTriangle className="h-4 w-4 text-destructive" />
                        </div>
                        <span className="text-destructive/90">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="precautions" className="animate-fade-in">
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Info className="h-5 w-5 text-health-blue mr-2" />
                  <h3 className="text-xl font-semibold">Precautions & Care</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow these precautions to manage your condition and prevent complications:
                </p>
                <ul className="space-y-3">
                  {disease.precautions.map((precaution, index) => (
                    <li key={index} className="flex items-start gap-2 p-3 bg-secondary/50 rounded-lg">
                      <div className="pt-0.5">
                        <Check className="h-5 w-5 text-health-teal" />
                      </div>
                      <span>{precaution}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 border border-border rounded-lg bg-secondary/30">
                  <p className="text-sm">
                    <span className="font-medium">Important:</span> These precautions are general guidelines. 
                    Always consult with a healthcare professional for personalized advice.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="medications" className="animate-fade-in">
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Pill className="h-5 w-5 text-health-purple mr-2" />
                  <h3 className="text-xl font-semibold">Common Medications</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  These are common over-the-counter medications that may help manage symptoms. 
                  Always consult a healthcare professional before starting any medication.
                </p>
                
                <div className="space-y-4">
                  {disease.medications.map((medication, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg bg-card">
                      <h4 className="font-medium mb-2">{medication.name}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Typical Dosage</p>
                          <p className="text-sm">{medication.dosage}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Purpose</p>
                          <p className="text-sm">{medication.description}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="h-4 w-4 text-health-purple mt-0.5" />
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">When to Take</p>
                            <p className="text-sm">{medication.timing || "As directed by physician"}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-health-red/10 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-health-red mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      <span className="font-medium">Medical Disclaimer:</span> This information is for educational 
                      purposes only and not a substitute for professional medical advice. Always consult 
                      with a qualified healthcare provider before taking any medication.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Hospital Locator */}
          <HospitalLocator diseaseType={disease.name} />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary py-8 px-4 mt-10">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} HealthGuide. This information is for educational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DiseaseDetail;
