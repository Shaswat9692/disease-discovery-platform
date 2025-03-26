
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

// Bangalore hospitals database with specializations
const bangaloreHospitals: Record<string, Hospital[]> = {
  "general": [
    {
      id: '1',
      name: 'Apollo Hospital Bangalore',
      distance: '3.2 km',
      address: 'Bannerghatta Road, Bangalore',
      specialization: 'Multi-specialty'
    },
    {
      id: '2',
      name: 'Manipal Hospital',
      distance: '5.6 km',
      address: 'HAL Airport Road, Bangalore',
      specialization: 'Multi-specialty'
    },
    {
      id: '3',
      name: 'Fortis Hospital',
      distance: '4.8 km',
      address: 'Bannerghatta Road, Bangalore',
      specialization: 'Multi-specialty'
    }
  ],
  "Dermatology": [
    {
      id: '4',
      name: 'Bangalore Skin Institute',
      distance: '2.9 km',
      address: 'Indiranagar, Bangalore',
      specialization: 'Skin Disorders'
    },
    {
      id: '5',
      name: 'Skincare Clinic Bangalore',
      distance: '3.8 km',
      address: 'Koramangala, Bangalore',
      specialization: 'Dermatology'
    },
    {
      id: '6',
      name: 'Apollo Dermatology',
      distance: '4.7 km',
      address: 'Jayanagar, Bangalore',
      specialization: 'Skin & Hair Treatment'
    }
  ],
  "Respiratory": [
    {
      id: '7',
      name: 'Bangalore Chest Hospital',
      distance: '3.5 km',
      address: 'MG Road, Bangalore',
      specialization: 'Pulmonology'
    },
    {
      id: '8',
      name: 'Narayana Health City',
      distance: '10.2 km',
      address: 'Bommasandra, Bangalore',
      specialization: 'Respiratory Medicine'
    },
    {
      id: '9',
      name: 'Sparsh Hospitals',
      distance: '6.3 km',
      address: 'Infantry Road, Bangalore',
      specialization: 'Respiratory Care'
    }
  ],
  "ENT": [
    {
      id: '10',
      name: 'Bangalore ENT Hospital',
      distance: '2.7 km',
      address: 'Richmond Road, Bangalore',
      specialization: 'Ear, Nose, and Throat'
    },
    {
      id: '11',
      name: 'Advanced ENT Care Centre',
      distance: '5.2 km',
      address: 'Whitefield, Bangalore',
      specialization: 'ENT Specialist'
    },
    {
      id: '12',
      name: 'Apollo ENT Clinic',
      distance: '4.3 km',
      address: 'Shivajinagar, Bangalore',
      specialization: 'ENT Care'
    }
  ],
  "Orthopedics": [
    {
      id: '13',
      name: 'HOSMAT Hospital',
      distance: '3.1 km',
      address: 'Magrath Road, Bangalore',
      specialization: 'Orthopedic Excellence'
    },
    {
      id: '14',
      name: 'Manipal Orthopedic Center',
      distance: '6.7 km',
      address: 'Old Airport Road, Bangalore',
      specialization: 'Joint Replacement'
    },
    {
      id: '15',
      name: 'Sanjay Orthopedic Center',
      distance: '4.5 km',
      address: 'Jayanagar, Bangalore',
      specialization: 'Sports Medicine'
    }
  ],
  "Cardiology": [
    {
      id: '16',
      name: 'Jayadeva Institute of Cardiology',
      distance: '7.3 km',
      address: 'Bannerghatta Road, Bangalore',
      specialization: 'Heart Care'
    },
    {
      id: '17',
      name: 'Narayana Heart Centre',
      distance: '8.9 km',
      address: 'Bommasandra, Bangalore',
      specialization: 'Cardiac Surgery'
    },
    {
      id: '18',
      name: 'Fortis Heart Institute',
      distance: '5.1 km',
      address: 'Cunningham Road, Bangalore',
      specialization: 'Cardiology'
    }
  ],
  "Gastroenterology": [
    {
      id: '19',
      name: 'Bangalore Gastro Centre',
      distance: '3.3 km',
      address: 'Indiranagar, Bangalore',
      specialization: 'Digestive Health'
    },
    {
      id: '20',
      name: 'Apollo Digestive Disease Center',
      distance: '4.7 km',
      address: 'Seshadripuram, Bangalore',
      specialization: 'Gastroenterology'
    },
    {
      id: '21',
      name: 'Manipal Gastro Care',
      distance: '6.2 km',
      address: 'Old Airport Road, Bangalore',
      specialization: 'Digestive Disorders'
    }
  ],
  "Dental": [
    {
      id: '22',
      name: 'Bangalore Institute of Dental Sciences',
      distance: '2.9 km',
      address: 'Basavanagudi, Bangalore',
      specialization: 'Dental Care'
    },
    {
      id: '23',
      name: 'Smile Studio Dental Clinic',
      distance: '3.5 km',
      address: 'Indiranagar, Bangalore',
      specialization: 'Cosmetic Dentistry'
    },
    {
      id: '24',
      name: 'Advanced Dental Care',
      distance: '4.1 km',
      address: 'Koramangala, Bangalore',
      specialization: 'Dental Surgery'
    }
  ],
  "Ophthalmology": [
    {
      id: '25',
      name: 'Narayana Nethralaya',
      distance: '5.3 km',
      address: 'Rajajinagar, Bangalore',
      specialization: 'Eye Care'
    },
    {
      id: '26',
      name: 'Sankara Eye Hospital',
      distance: '8.7 km',
      address: 'Kundalahalli, Bangalore',
      specialization: 'Vision Correction'
    },
    {
      id: '27',
      name: 'Bangalore Retina Centre',
      distance: '3.9 km',
      address: 'Jayanagar, Bangalore',
      specialization: 'Retina Specialist'
    }
  ],
  "Neurology": [
    {
      id: '28',
      name: 'NIMHANS',
      distance: '6.1 km',
      address: 'Hosur Road, Bangalore',
      specialization: 'Neuroscience Excellence'
    },
    {
      id: '29',
      name: 'Manipal Neurology Center',
      distance: '5.4 km',
      address: 'Old Airport Road, Bangalore',
      specialization: 'Brain & Nerve Care'
    },
    {
      id: '30',
      name: 'Fortis Neuro Center',
      distance: '4.8 km',
      address: 'Cunningham Road, Bangalore',
      specialization: 'Neurology & Neurosurgery'
    }
  ],
  "Infectious Disease": [
    {
      id: '31',
      name: 'Bangalore Infectious Disease Hospital',
      distance: '7.2 km',
      address: 'Shivajinagar, Bangalore',
      specialization: 'Infectious Disease Treatment'
    },
    {
      id: '32',
      name: 'Apollo Infection Control Center',
      distance: '4.6 km',
      address: 'Bannerghatta Road, Bangalore',
      specialization: 'Infection Management'
    },
    {
      id: '33',
      name: 'Manipal Infectious Disease Clinic',
      distance: '5.9 km',
      address: 'Old Airport Road, Bangalore',
      specialization: 'Infectious Disease Care'
    }
  ],
  "Sleep Disorders": [
    {
      id: '34',
      name: 'Bangalore Sleep Center',
      distance: '3.6 km',
      address: 'Indiranagar, Bangalore',
      specialization: 'Sleep Medicine'
    },
    {
      id: '35',
      name: 'Apollo Sleep Disorder Clinic',
      distance: '5.2 km',
      address: 'Jayanagar, Bangalore',
      specialization: 'Sleep Studies'
    },
    {
      id: '36',
      name: 'Fortis Sleep Clinic',
      distance: '4.3 km',
      address: 'Richmond Road, Bangalore',
      specialization: 'Sleep Disorders'
    }
  ]
};

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
        // Get hospitals based on disease category
        console.log(`Located at: ${position.coords.latitude}, ${position.coords.longitude}`);
        
        setTimeout(() => {
          // Find the disease category to determine which hospitals to show
          import('@/data/diseasesData').then(({ default: diseasesData }) => {
            const disease = diseasesData.find(d => d.name === diseaseType);
            const category = disease?.category || 'general';
            
            // Get hospitals for the category, or default to general hospitals
            const categoryHospitals = bangaloreHospitals[category] || bangaloreHospitals.general;
            
            setHospitals(categoryHospitals);
            setShowHospitals(true);
            setIsLoading(false);
            toast.success(`Found hospitals specializing in ${category} near Bangalore`);
          });
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
        <h3 className="text-xl font-semibold">Nearby Hospitals in Bangalore</h3>
      </div>
      
      {!showHospitals ? (
        <div className="text-center py-6">
          <p className="mb-4 text-muted-foreground">
            Find specialized hospitals in Bangalore for treating {diseaseType}
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
