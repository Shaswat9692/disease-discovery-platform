
import React, { useState } from 'react';
import { MapPin, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface HospitalLocatorProps {
  diseaseType: string;
}

interface Hospital {
  id: string;
  name: string;
  distance: string;
  address: string;
  specialization: string;
}

// Mock data for hospitals
const mockHospitals: Hospital[] = [
  {
    id: '1',
    name: 'City General Hospital',
    distance: '2.3 km',
    address: '123 Healthcare Ave, Medical District',
    specialization: 'General Medicine'
  },
  {
    id: '2',
    name: 'Central Medical Center',
    distance: '4.1 km',
    address: '456 Wellness Blvd, Central City',
    specialization: 'Specialized Care'
  },
  {
    id: '3',
    name: 'Community Health Clinic',
    distance: '1.8 km',
    address: '789 Community Rd, Neighborhood',
    specialization: 'Primary Care'
  }
];

const HospitalLocator: React.FC<HospitalLocatorProps> = ({ diseaseType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [showHospitals, setShowHospitals] = useState(false);

  const requestLocation = () => {
    setIsLoading(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // In a real app, you would call an API with these coordinates to find nearby hospitals
        console.log(`Located at: ${position.coords.latitude}, ${position.coords.longitude}`);
        
        // Simulate API call with timeout
        setTimeout(() => {
          setHospitals(mockHospitals);
          setShowHospitals(true);
          setIsLoading(false);
          toast.success('Found hospitals near your location');
        }, 1500);
      },
      (error) => {
        console.error('Error getting location:', error);
        setLocationError(
          error.code === 1
            ? 'Location access denied. Please enable location services.'
            : 'Unable to determine your location.'
        );
        setIsLoading(false);
        toast.error('Failed to get your location');
      },
      { timeout: 10000, maximumAge: 60000, enableHighAccuracy: true }
    );
  };

  return (
    <div className="mt-8 glass-card p-6 rounded-2xl animate-fade-in">
      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 text-health-red mr-2" />
        <h3 className="text-xl font-semibold">Nearby Hospitals</h3>
      </div>
      
      {!showHospitals ? (
        <div className="text-center py-6">
          <p className="mb-4 text-muted-foreground">
            Find hospitals near you that can treat {diseaseType}
          </p>
          
          {locationError && (
            <div className="mb-4 p-3 bg-destructive/10 rounded-lg flex items-start">
              <AlertTriangle className="h-5 w-5 text-destructive mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-destructive">{locationError}</p>
            </div>
          )}
          
          <Button 
            onClick={requestLocation} 
            className="bg-health-blue hover:bg-health-blue/90"
            disabled={isLoading}
          >
            {isLoading ? 'Locating...' : 'Find Hospitals Near Me'}
          </Button>
        </div>
      ) : (
        <div className="space-y-3 animate-slide-up">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
              <div className="flex justify-between items-start">
                <h4 className="font-medium">{hospital.name}</h4>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {hospital.distance}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{hospital.address}</p>
              <p className="text-xs text-primary mt-1">{hospital.specialization}</p>
            </div>
          ))}
          <div className="text-center mt-4">
            <Button 
              variant="outline" 
              onClick={() => setShowHospitals(false)}
              className="text-sm"
            >
              Search Again
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalLocator;
