
export interface Disease {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  symptoms: string[];
  precautions: string[];
  medications: {
    name: string;
    dosage: string;
    description: string;
  }[];
  emergencySymptoms: string[];
}

const diseasesData: Disease[] = [
  {
    id: "skin-disease",
    name: "Skin Disease",
    category: "Dermatology",
    description: "Common skin conditions affecting the epidermis and dermis layers.",
    imageUrl: "/skin-disease.jpg",
    symptoms: [
      "Rash or redness",
      "Itching or burning sensation",
      "Dry, scaly patches",
      "Blisters or pustules",
      "Changes in skin color",
      "Swelling or inflammation"
    ],
    precautions: [
      "Keep skin clean and dry",
      "Avoid harsh soaps and detergents",
      "Use moisturizer regularly",
      "Avoid scratching affected areas",
      "Wear loose, breathable clothing"
    ],
    medications: [
      {
        name: "Hydrocortisone cream",
        dosage: "Apply thinly to affected areas 1-2 times daily",
        description: "Reduces inflammation and itching"
      },
      {
        name: "Antihistamines",
        dosage: "As directed on packaging",
        description: "Relieves itching and allergic reactions"
      }
    ],
    emergencySymptoms: [
      "Widespread rash that appears suddenly",
      "Fever with rash",
      "Blisters that ooze or become infected",
      "Skin that's painful to touch"
    ]
  },
  {
    id: "fever",
    name: "Fever",
    category: "General",
    description: "Elevated body temperature that's a symptom of an underlying condition.",
    imageUrl: "/fever.jpg",
    symptoms: [
      "Temperature above 38°C (100.4°F)",
      "Sweating or chills",
      "Headache",
      "Muscle aches",
      "Loss of appetite",
      "Fatigue and weakness"
    ],
    precautions: [
      "Rest and stay hydrated",
      "Keep room temperature comfortable",
      "Wear lightweight clothing",
      "Take lukewarm baths",
      "Use fever-reducing medications as needed"
    ],
    medications: [
      {
        name: "Acetaminophen (Tylenol)",
        dosage: "As directed on packaging, typically 325-650mg every 4-6 hours",
        description: "Reduces fever and relieves pain"
      },
      {
        name: "Ibuprofen (Advil, Motrin)",
        dosage: "As directed on packaging, typically 200-400mg every 4-6 hours",
        description: "Reduces fever, pain, and inflammation"
      }
    ],
    emergencySymptoms: [
      "Temperature above 39.4°C (103°F)",
      "Fever that lasts more than three days",
      "Difficulty breathing",
      "Severe headache with stiff neck",
      "Rash with fever"
    ]
  },
  {
    id: "cough",
    name: "Cough",
    category: "Respiratory",
    description: "Reflex action that clears the throat of irritants or mucus.",
    imageUrl: "/cough.jpg",
    symptoms: [
      "Dry or wet cough",
      "Sore throat",
      "Runny or stuffy nose",
      "Hoarseness",
      "Postnasal drip",
      "Wheezing"
    ],
    precautions: [
      "Stay hydrated",
      "Use a humidifier",
      "Avoid irritants like smoke",
      "Sleep with head elevated",
      "Gargle with salt water"
    ],
    medications: [
      {
        name: "Dextromethorphan (Robitussin)",
        dosage: "As directed on packaging",
        description: "Suppresses cough reflex"
      },
      {
        name: "Guaifenesin (Mucinex)",
        dosage: "As directed on packaging",
        description: "Thins mucus making it easier to clear"
      }
    ],
    emergencySymptoms: [
      "Difficulty breathing",
      "Coughing up blood",
      "High fever",
      "Chest pain",
      "Wheezing"
    ]
  },
  {
    id: "cold",
    name: "Common Cold",
    category: "Respiratory",
    description: "Viral infection of the upper respiratory tract affecting the nose and throat.",
    imageUrl: "/cold.jpg",
    symptoms: [
      "Runny or stuffy nose",
      "Sore throat",
      "Cough",
      "Congestion",
      "Slight body aches",
      "Mild headache",
      "Sneezing",
      "Low-grade fever"
    ],
    precautions: [
      "Rest and stay hydrated",
      "Use saline nasal drops",
      "Gargle with salt water",
      "Use a humidifier",
      "Wash hands frequently"
    ],
    medications: [
      {
        name: "Decongestants",
        dosage: "As directed on packaging",
        description: "Reduces nasal congestion"
      },
      {
        name: "Pain relievers",
        dosage: "As directed on packaging",
        description: "Relieves sore throat and headache"
      }
    ],
    emergencySymptoms: [
      "Difficulty breathing",
      "Persistent fever above 38.9°C (102°F)",
      "Severe sinus pain",
      "Symptoms that worsen after 10 days"
    ]
  },
  {
    id: "eye-pain",
    name: "Eye Pain",
    category: "Ophthalmology",
    description: "Discomfort or pain in or around the eye due to various causes.",
    imageUrl: "/eye-pain.jpg",
    symptoms: [
      "Sharp or dull pain in the eye",
      "Redness",
      "Sensitivity to light",
      "Watery eyes",
      "Blurred vision",
      "Feeling of something in the eye"
    ],
    precautions: [
      "Avoid rubbing eyes",
      "Use clean hands when touching eyes",
      "Wear protective eyewear when needed",
      "Rest eyes from screen time",
      "Use artificial tears for dryness"
    ],
    medications: [
      {
        name: "Artificial tears",
        dosage: "1-2 drops as needed",
        description: "Lubricates and soothes eyes"
      },
      {
        name: "Antihistamine eye drops",
        dosage: "As directed on packaging",
        description: "Relieves allergic eye symptoms"
      }
    ],
    emergencySymptoms: [
      "Sudden severe pain with nausea",
      "Vision loss",
      "Eye injury",
      "Chemical exposure to eye",
      "Severe redness with pain"
    ]
  },
  {
    id: "ear-pain",
    name: "Ear Pain",
    category: "ENT",
    description: "Pain or discomfort in one or both ears, often due to infection or inflammation.",
    imageUrl: "/ear-pain.jpg",
    symptoms: [
      "Sharp, dull, or burning pain",
      "Difficulty hearing",
      "Drainage from ear",
      "Itching",
      "Feeling of fullness",
      "Ringing in ears (tinnitus)"
    ],
    precautions: [
      "Keep ears dry",
      "Avoid inserting objects into ears",
      "Use earplugs when swimming",
      "Treat allergies promptly",
      "Apply warm compress for pain"
    ],
    medications: [
      {
        name: "Pain relievers",
        dosage: "As directed on packaging",
        description: "Reduces pain and inflammation"
      },
      {
        name: "Ear drops",
        dosage: "As directed by healthcare provider",
        description: "Treats infection and reduces pain"
      }
    ],
    emergencySymptoms: [
      "Severe pain with high fever",
      "Bloody or pus-like discharge",
      "Sudden hearing loss",
      "Dizziness with ear pain",
      "Facial weakness"
    ]
  },
  {
    id: "back-pain",
    name: "Back Pain",
    category: "Orthopedics",
    description: "Pain affecting the back, ranging from muscle ache to shooting or stabbing sensation.",
    imageUrl: "/back-pain.jpg",
    symptoms: [
      "Dull aching or sharp pain",
      "Muscle stiffness",
      "Limited flexibility",
      "Difficulty standing straight",
      "Pain radiating down legs",
      "Muscle spasms"
    ],
    precautions: [
      "Maintain good posture",
      "Lift objects properly",
      "Strengthen core muscles",
      "Use ergonomic furniture",
      "Apply heat or cold therapy"
    ],
    medications: [
      {
        name: "NSAIDs (Ibuprofen, Naproxen)",
        dosage: "As directed on packaging",
        description: "Reduces pain and inflammation"
      },
      {
        name: "Muscle relaxants",
        dosage: "As prescribed by healthcare provider",
        description: "Relieves muscle spasms"
      }
    ],
    emergencySymptoms: [
      "Loss of bowel or bladder control",
      "Numbness in groin or rectal area",
      "Severe pain that worsens when lying down",
      "Weakness in legs",
      "Fever with back pain"
    ]
  },
  {
    id: "tooth-ache",
    name: "Toothache",
    category: "Dental",
    description: "Pain in or around a tooth, often indicating dental issues such as decay or infection.",
    imageUrl: "/tooth-ache.jpg",
    symptoms: [
      "Sharp, throbbing, or constant pain",
      "Swelling around tooth",
      "Fever",
      "Headache",
      "Bad taste in mouth",
      "Pain when chewing"
    ],
    precautions: [
      "Rinse with warm salt water",
      "Avoid very hot, cold, or sweet foods",
      "Use dental floss to remove trapped food",
      "Apply clove oil to numb area",
      "See dentist promptly"
    ],
    medications: [
      {
        name: "Pain relievers (acetaminophen, ibuprofen)",
        dosage: "As directed on packaging",
        description: "Reduces pain and inflammation"
      },
      {
        name: "Benzocaine gel",
        dosage: "Apply to affected area as needed",
        description: "Provides temporary numbing"
      }
    ],
    emergencySymptoms: [
      "Severe pain not relieved by medication",
      "Swelling of face or jaw",
      "Fever above 38°C (100.4°F)",
      "Difficulty swallowing or breathing",
      "Pain radiating to ear or jaw"
    ]
  },
  {
    id: "skin-rashes",
    name: "Skin Rashes",
    category: "Dermatology",
    description: "Skin inflammation with changes in color and texture, often with itching or pain.",
    imageUrl: "/skin-rashes.jpg",
    symptoms: [
      "Red or discolored patches",
      "Itching or burning",
      "Bumps, spots, or blisters",
      "Dry, scaly, or cracked skin",
      "Swelling",
      "Warmth in the affected area"
    ],
    precautions: [
      "Avoid scratching",
      "Use mild, fragrance-free soaps",
      "Apply cool compress",
      "Wear loose, cotton clothing",
      "Identify and avoid triggers"
    ],
    medications: [
      {
        name: "Hydrocortisone cream",
        dosage: "Apply thinly to affected areas 1-2 times daily",
        description: "Reduces itching and inflammation"
      },
      {
        name: "Calamine lotion",
        dosage: "Apply to affected areas as needed",
        description: "Soothes and dries rashes"
      }
    ],
    emergencySymptoms: [
      "Rash that covers entire body",
      "Rash with fever",
      "Blisters in mouth, eyes, or genitals",
      "Difficulty breathing with rash",
      "Signs of infection (increasing pain, warmth, pus)"
    ]
  },
  {
    id: "loose-motion",
    name: "Loose Motion",
    category: "Gastroenterology",
    description: "Frequent, loose, or watery bowel movements, commonly known as diarrhea.",
    imageUrl: "/loose-motion.jpg",
    symptoms: [
      "Watery stools",
      "Abdominal cramps",
      "Bloating",
      "Nausea",
      "Urgency to defecate",
      "Fever in some cases"
    ],
    precautions: [
      "Stay hydrated with water and electrolytes",
      "Eat bland foods (BRAT diet)",
      "Avoid dairy, caffeine, and spicy foods",
      "Maintain good hand hygiene",
      "Rest adequately"
    ],
    medications: [
      {
        name: "Loperamide (Imodium)",
        dosage: "As directed on packaging",
        description: "Slows down bowel movements"
      },
      {
        name: "ORS (Oral Rehydration Solution)",
        dosage: "As directed on packaging",
        description: "Replaces lost fluids and electrolytes"
      }
    ],
    emergencySymptoms: [
      "Blood in stool",
      "Severe abdominal pain",
      "High fever",
      "Signs of dehydration (extreme thirst, dry mouth, dizziness)",
      "Diarrhea lasting more than 2 days"
    ]
  },
  {
    id: "chest-pain",
    name: "Chest Pain",
    category: "Cardiology",
    description: "Discomfort or pain in the chest area that may indicate serious conditions.",
    imageUrl: "/chest-pain.jpg",
    symptoms: [
      "Pressure, tightness, or squeezing sensation",
      "Sharp, stabbing pain",
      "Burning sensation",
      "Pain radiating to arm, jaw, or back",
      "Shortness of breath",
      "Nausea or vomiting"
    ],
    precautions: [
      "Seek immediate medical attention for unexplained chest pain",
      "Rest in a comfortable position",
      "Take prescribed medications",
      "Manage stress levels",
      "Follow heart-healthy lifestyle"
    ],
    medications: [
      {
        name: "Aspirin",
        dosage: "As advised by healthcare provider",
        description: "May be recommended during suspected heart attack"
      },
      {
        name: "Nitroglycerin",
        dosage: "As prescribed by healthcare provider",
        description: "Widens blood vessels for angina patients"
      }
    ],
    emergencySymptoms: [
      "Sudden, severe chest pain",
      "Pain radiating to arm, jaw, or back",
      "Shortness of breath",
      "Nausea, cold sweat",
      "Dizziness or fainting"
    ]
  },
  {
    id: "nose-bleeding",
    name: "Nose Bleeding",
    category: "ENT",
    description: "Bleeding from the nostrils due to ruptured blood vessels in the nasal passage.",
    imageUrl: "/nose-bleeding.jpg",
    symptoms: [
      "Blood flowing from one or both nostrils",
      "Nasal congestion",
      "Runny nose with blood",
      "Feeling of liquid in back of throat",
      "Rarely, dizziness or weakness"
    ],
    precautions: [
      "Sit upright and lean slightly forward",
      "Pinch the soft part of nose for 10-15 minutes",
      "Breathe through mouth",
      "Apply cold compress to bridge of nose",
      "Avoid bending, straining, or picking nose"
    ],
    medications: [
      {
        name: "Saline nasal spray",
        dosage: "As directed on packaging",
        description: "Moisturizes nasal passages"
      },
      {
        name: "Antibiotic ointment",
        dosage: "If prescribed by healthcare provider",
        description: "Prevents infection if recommended"
      }
    ],
    emergencySymptoms: [
      "Bleeding that doesn't stop after 20 minutes",
      "Heavy, uncontrollable bleeding",
      "Bleeding after head injury",
      "Difficulty breathing",
      "Significant blood loss with dizziness"
    ]
  },
  {
    id: "asthma",
    name: "Asthma",
    category: "Respiratory",
    description: "Chronic condition affecting airways with recurring periods of wheezing, chest tightness, and coughing.",
    imageUrl: "/asthma.jpg",
    symptoms: [
      "Shortness of breath",
      "Chest tightness or pain",
      "Wheezing when exhaling",
      "Trouble sleeping due to breathing difficulties",
      "Coughing attacks",
      "Fatigue"
    ],
    precautions: [
      "Identify and avoid triggers",
      "Take prescribed medications regularly",
      "Use air purifiers if helpful",
      "Get vaccinated against flu and pneumonia",
      "Maintain healthy weight and exercise as tolerated"
    ],
    medications: [
      {
        name: "Albuterol inhaler (rescue inhaler)",
        dosage: "As prescribed, typically 1-2 puffs as needed",
        description: "Quick-relief medication for acute symptoms"
      },
      {
        name: "Inhaled corticosteroids",
        dosage: "As prescribed by healthcare provider",
        description: "Daily controller medication"
      }
    ],
    emergencySymptoms: [
      "Severe shortness of breath",
      "No improvement after using rescue inhaler",
      "Difficulty speaking in full sentences",
      "Bluish lips or face",
      "Severe anxiety due to breathing difficulty"
    ]
  }
];

export default diseasesData;
