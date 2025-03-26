
// export interface Disease {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   imageUrl: string;
//   symptoms: string[];
//   precautions: string[];
//   medications: {
//     name: string;
//     dosage: string;
//     description: string;
//     timing: string;
//   }[];
//   emergencySymptoms: string[];
// }

// const diseasesData: Disease[] = [
//   {
//     id: "skin-disease",
//     name: "Skin Disease",
//     category: "Dermatology",
//     description: "Common skin conditions affecting the epidermis and dermis layers.",
//     imageUrl: "/skin-disease.jpg",
//     symptoms: [
//       "Rash or redness",
//       "Itching or burning sensation",
//       "Dry, scaly patches",
//       "Blisters or pustules",
//       "Changes in skin color",
//       "Swelling or inflammation"
//     ],
//     precautions: [
//       "Keep skin clean and dry",
//       "Avoid harsh soaps and detergents",
//       "Use moisturizer regularly",
//       "Avoid scratching affected areas",
//       "Wear loose, breathable clothing"
//     ],
//     medications: [
//       {
//         name: "Hydrocortisone cream",
//         dosage: "Apply thinly to affected areas 1-2 times daily",
//         description: "Reduces inflammation and itching",
//         timing: "Apply morning and evening after washing the affected area"
//       },
//       {
//         name: "Antihistamines",
//         dosage: "As directed on packaging",
//         description: "Relieves itching and allergic reactions",
//         timing: "Usually taken once daily, preferably at night"
//       },
//       {
//         name: "Calamine lotion",
//         dosage: "Apply to affected areas as needed",
//         description: "Soothes irritated skin and reduces itching",
//         timing: "Apply 3-4 times daily as needed for relief"
//       },
//       {
//         name: "Moisturizing creams",
//         dosage: "Apply liberally to affected areas",
//         description: "Protects and hydrates dry skin",
//         timing: "Apply 2-3 times daily, especially after bathing"
//       }
//     ],
//     emergencySymptoms: [
//       "Widespread rash that appears suddenly",
//       "Fever with rash",
//       "Blisters that ooze or become infected",
//       "Skin that's painful to touch"
//     ]
//   },
//   {
//     id: "fever",
//     name: "Fever",
//     category: "General",
//     description: "Elevated body temperature that's a symptom of an underlying condition.",
//     imageUrl: "/fever.jpg",
//     symptoms: [
//       "Temperature above 38°C (100.4°F)",
//       "Sweating or chills",
//       "Headache",
//       "Muscle aches",
//       "Loss of appetite",
//       "Fatigue and weakness"
//     ],
//     precautions: [
//       "Rest and stay hydrated",
//       "Keep room temperature comfortable",
//       "Wear lightweight clothing",
//       "Take lukewarm baths",
//       "Use fever-reducing medications as needed"
//     ],
//     medications: [
//       {
//         name: "Acetaminophen (Tylenol)",
//         dosage: "As directed on packaging, typically 325-650mg every 4-6 hours",
//         description: "Reduces fever and relieves pain",
//         timing: "Take with or without food, not exceeding 3000mg in 24 hours"
//       },
//       {
//         name: "Ibuprofen (Advil, Motrin)",
//         dosage: "As directed on packaging, typically 200-400mg every 4-6 hours",
//         description: "Reduces fever, pain, and inflammation",
//         timing: "Take with food or milk to prevent stomach upset, not exceeding 1200mg in 24 hours"
//       },
//       {
//         name: "Naproxen sodium (Aleve)",
//         dosage: "220-440mg every 8-12 hours as needed",
//         description: "Reduces fever and inflammation",
//         timing: "Take with food, not exceeding 660mg in 24 hours"
//       },
//       {
//         name: "Aspirin",
//         dosage: "325-650mg every 4-6 hours as needed",
//         description: "Reduces fever and pain (not recommended for children)",
//         timing: "Take with food to reduce stomach irritation"
//       }
//     ],
//     emergencySymptoms: [
//       "Temperature above 39.4°C (103°F)",
//       "Fever that lasts more than three days",
//       "Difficulty breathing",
//       "Severe headache with stiff neck",
//       "Rash with fever"
//     ]
//   },
//   {
//     id: "cough",
//     name: "Cough",
//     category: "Respiratory",
//     description: "Reflex action that clears the throat of irritants or mucus.",
//     imageUrl: "/cough.jpg",
//     symptoms: [
//       "Dry or wet cough",
//       "Sore throat",
//       "Runny or stuffy nose",
//       "Hoarseness",
//       "Postnasal drip",
//       "Wheezing"
//     ],
//     precautions: [
//       "Stay hydrated",
//       "Use a humidifier",
//       "Avoid irritants like smoke",
//       "Sleep with head elevated",
//       "Gargle with salt water"
//     ],
//     medications: [
//       {
//         name: "Dextromethorphan (Robitussin)",
//         dosage: "As directed on packaging",
//         description: "Suppresses cough reflex",
//         timing: "Take every 6-8 hours as needed, not exceeding 4 doses in 24 hours"
//       },
//       {
//         name: "Guaifenesin (Mucinex)",
//         dosage: "As directed on packaging",
//         description: "Thins mucus making it easier to clear",
//         timing: "Take every 4 hours, not exceeding 6 doses in 24 hours"
//       },
//       {
//         name: "Honey and lemon mixture",
//         dosage: "1-2 teaspoons as needed",
//         description: "Natural remedy to soothe throat and reduce coughing",
//         timing: "Take as needed, especially before bedtime"
//       },
//       {
//         name: "Benzonatate (Tessalon)",
//         dosage: "100-200mg capsules",
//         description: "Prescription medicine that suppresses cough",
//         timing: "Take three times daily as prescribed by doctor"
//       }
//     ],
//     emergencySymptoms: [
//       "Difficulty breathing",
//       "Coughing up blood",
//       "High fever",
//       "Chest pain",
//       "Wheezing"
//     ]
//   },
//   {
//     id: "cold",
//     name: "Common Cold",
//     category: "Respiratory",
//     description: "Viral infection of the upper respiratory tract affecting the nose and throat.",
//     imageUrl: "/cold.jpg",
//     symptoms: [
//       "Runny or stuffy nose",
//       "Sore throat",
//       "Cough",
//       "Congestion",
//       "Slight body aches",
//       "Mild headache",
//       "Sneezing",
//       "Low-grade fever"
//     ],
//     precautions: [
//       "Rest and stay hydrated",
//       "Use saline nasal drops",
//       "Gargle with salt water",
//       "Use a humidifier",
//       "Wash hands frequently"
//     ],
//     medications: [
//       {
//         name: "Decongestants",
//         dosage: "As directed on packaging",
//         description: "Reduces nasal congestion",
//         timing: "Take every 4-6 hours as needed, not to exceed 4 doses per day"
//       },
//       {
//         name: "Pain relievers",
//         dosage: "As directed on packaging",
//         description: "Relieves sore throat and headache",
//         timing: "Take every 4-6 hours with food as needed"
//       },
//       {
//         name: "Zinc lozenges",
//         dosage: "One lozenge every 2-3 hours while awake",
//         description: "May reduce duration of cold symptoms",
//         timing: "Start at first sign of cold, don't exceed 6 lozenges per day"
//       },
//       {
//         name: "Vitamin C supplements",
//         dosage: "500-1000mg daily",
//         description: "May help immune system fight infection",
//         timing: "Take with meals to improve absorption"
//       }
//     ],
//     emergencySymptoms: [
//       "Difficulty breathing",
//       "Persistent fever above 38.9°C (102°F)",
//       "Severe sinus pain",
//       "Symptoms that worsen after 10 days"
//     ]
//   },
//   {
//     id: "eye-pain",
//     name: "Eye Pain",
//     category: "Ophthalmology",
//     description: "Discomfort or pain in or around the eye due to various causes.",
//     imageUrl: "/eye-pain.jpg",
//     symptoms: [
//       "Sharp or dull pain in the eye",
//       "Redness",
//       "Sensitivity to light",
//       "Watery eyes",
//       "Blurred vision",
//       "Feeling of something in the eye"
//     ],
//     precautions: [
//       "Avoid rubbing eyes",
//       "Use clean hands when touching eyes",
//       "Wear protective eyewear when needed",
//       "Rest eyes from screen time",
//       "Use artificial tears for dryness"
//     ],
//     medications: [
//       {
//         name: "Artificial tears",
//         dosage: "1-2 drops as needed",
//         description: "Lubricates and soothes eyes",
//         timing: "Use up to 4-6 times daily or as directed"
//       },
//       {
//         name: "Antihistamine eye drops",
//         dosage: "As directed on packaging",
//         description: "Relieves allergic eye symptoms",
//         timing: "Use 1-2 drops in each eye twice daily"
//       },
//       {
//         name: "Warm compress",
//         dosage: "Apply to closed eyelids for 5-10 minutes",
//         description: "Relieves pain and improves circulation",
//         timing: "Apply 3-4 times daily as needed"
//       },
//       {
//         name: "Antibiotic eye drops (prescription)",
//         dosage: "As prescribed by doctor",
//         description: "Treats bacterial infections",
//         timing: "Typically 1-2 drops every 4-6 hours as prescribed"
//       }
//     ],
//     emergencySymptoms: [
//       "Sudden severe pain with nausea",
//       "Vision loss",
//       "Eye injury",
//       "Chemical exposure to eye",
//       "Severe redness with pain"
//     ]
//   },
//   {
//     id: "ear-pain",
//     name: "Ear Pain",
//     category: "ENT",
//     description: "Pain or discomfort in one or both ears, often due to infection or inflammation.",
//     imageUrl: "/ear-pain.jpg",
//     symptoms: [
//       "Sharp, dull, or burning pain",
//       "Difficulty hearing",
//       "Drainage from ear",
//       "Itching",
//       "Feeling of fullness",
//       "Ringing in ears (tinnitus)"
//     ],
//     precautions: [
//       "Keep ears dry",
//       "Avoid inserting objects into ears",
//       "Use earplugs when swimming",
//       "Treat allergies promptly",
//       "Apply warm compress for pain"
//     ],
//     medications: [
//       {
//         name: "Pain relievers",
//         dosage: "As directed on packaging",
//         description: "Reduces pain and inflammation",
//         timing: "Take every 4-6 hours with food as needed"
//       },
//       {
//         name: "Ear drops",
//         dosage: "As directed by healthcare provider",
//         description: "Treats infection and reduces pain",
//         timing: "Usually 3-4 drops, 2-3 times daily"
//       },
//       {
//         name: "Antibiotic ear drops",
//         dosage: "As prescribed by doctor",
//         description: "Treats bacterial ear infections",
//         timing: "Typically 4 drops 3-4 times daily for 7-10 days"
//       },
//       {
//         name: "Decongestants",
//         dosage: "As directed on packaging",
//         description: "Reduces congestion that may be affecting ears",
//         timing: "Take every 4-6 hours, not exceeding 4 doses in 24 hours"
//       }
//     ],
//     emergencySymptoms: [
//       "Severe pain with high fever",
//       "Bloody or pus-like discharge",
//       "Sudden hearing loss",
//       "Dizziness with ear pain",
//       "Facial weakness"
//     ]
//   },
//   {
//     id: "back-pain",
//     name: "Back Pain",
//     category: "Orthopedics",
//     description: "Pain affecting the back, ranging from muscle ache to shooting or stabbing sensation.",
//     imageUrl: "/back-pain.jpg",
//     symptoms: [
//       "Dull aching or sharp pain",
//       "Muscle stiffness",
//       "Limited flexibility",
//       "Difficulty standing straight",
//       "Pain radiating down legs",
//       "Muscle spasms"
//     ],
//     precautions: [
//       "Maintain good posture",
//       "Lift objects properly",
//       "Strengthen core muscles",
//       "Use ergonomic furniture",
//       "Apply heat or cold therapy"
//     ],
//     medications: [
//       {
//         name: "NSAIDs (Ibuprofen, Naproxen)",
//         dosage: "As directed on packaging",
//         description: "Reduces pain and inflammation",
//         timing: "Take with food every 6-8 hours as needed"
//       },
//       {
//         name: "Muscle relaxants",
//         dosage: "As prescribed by healthcare provider",
//         description: "Relieves muscle spasms",
//         timing: "Usually taken 3 times daily, may cause drowsiness"
//       },
//       {
//         name: "Topical pain relievers",
//         dosage: "Apply to affected area as directed",
//         description: "Provides localized pain relief",
//         timing: "Apply 3-4 times daily, avoiding broken skin"
//       },
//       {
//         name: "Acetaminophen (Tylenol)",
//         dosage: "As directed on packaging",
//         description: "Reduces pain without affecting inflammation",
//         timing: "Take every 4-6 hours as needed, not exceeding 3000mg daily"
//       }
//     ],
//     emergencySymptoms: [
//       "Loss of bowel or bladder control",
//       "Numbness in groin or rectal area",
//       "Severe pain that worsens when lying down",
//       "Weakness in legs",
//       "Fever with back pain"
//     ]
//   },
//   {
//     id: "tooth-ache",
//     name: "Toothache",
//     category: "Dental",
//     description: "Pain in or around a tooth, often indicating dental issues such as decay or infection.",
//     imageUrl: "/tooth-ache.jpg",
//     symptoms: [
//       "Sharp, throbbing, or constant pain",
//       "Swelling around tooth",
//       "Fever",
//       "Headache",
//       "Bad taste in mouth",
//       "Pain when chewing"
//     ],
//     precautions: [
//       "Rinse with warm salt water",
//       "Avoid very hot, cold, or sweet foods",
//       "Use dental floss to remove trapped food",
//       "Apply clove oil to numb area",
//       "See dentist promptly"
//     ],
//     medications: [
//       {
//         name: "Pain relievers (acetaminophen, ibuprofen)",
//         dosage: "As directed on packaging",
//         description: "Reduces pain and inflammation",
//         timing: "Take every 4-6 hours with food as needed"
//       },
//       {
//         name: "Benzocaine gel",
//         dosage: "Apply to affected area as needed",
//         description: "Provides temporary numbing",
//         timing: "Apply up to 4 times daily, not for longer than 7 days"
//       },
//       {
//         name: "Clove oil",
//         dosage: "Apply small amount to affected area",
//         description: "Natural remedy for dental pain",
//         timing: "Apply 2-3 times daily with a cotton swab"
//       },
//       {
//         name: "Antiseptic mouthwash",
//         dosage: "As directed on packaging",
//         description: "Reduces bacteria that may worsen toothache",
//         timing: "Rinse for 30 seconds, 2-3 times daily after brushing"
//       }
//     ],
//     emergencySymptoms: [
//       "Severe pain not relieved by medication",
//       "Swelling of face or jaw",
//       "Fever above 38°C (100.4°F)",
//       "Difficulty swallowing or breathing",
//       "Pain radiating to ear or jaw"
//     ]
//   },
//   {
//     id: "skin-rashes",
//     name: "Skin Rashes",
//     category: "Dermatology",
//     description: "Skin inflammation with changes in color and texture, often with itching or pain.",
//     imageUrl: "/skin-rashes.jpg",
//     symptoms: [
//       "Red or discolored patches",
//       "Itching or burning",
//       "Bumps, spots, or blisters",
//       "Dry, scaly, or cracked skin",
//       "Swelling",
//       "Warmth in the affected area"
//     ],
//     precautions: [
//       "Avoid scratching",
//       "Use mild, fragrance-free soaps",
//       "Apply cool compress",
//       "Wear loose, cotton clothing",
//       "Identify and avoid triggers"
//     ],
//     medications: [
//       {
//         name: "Hydrocortisone cream",
//         dosage: "Apply thinly to affected areas 1-2 times daily",
//         description: "Reduces itching and inflammation",
//         timing: "Apply morning and evening after cleansing the area"
//       },
//       {
//         name: "Calamine lotion",
//         dosage: "Apply to affected areas as needed",
//         description: "Soothes and dries rashes",
//         timing: "Apply 3-4 times daily as needed"
//       },
//       {
//         name: "Oral antihistamines",
//         dosage: "As directed on packaging",
//         description: "Reduces itching and allergic reactions",
//         timing: "Usually taken once daily, often at bedtime"
//       },
//       {
//         name: "Colloidal oatmeal bath",
//         dosage: "Add packet to warm bath water",
//         description: "Soothes irritated skin and reduces itching",
//         timing: "Soak for 15-20 minutes once daily as needed"
//       }
//     ],
//     emergencySymptoms: [
//       "Rash that covers entire body",
//       "Rash with fever",
//       "Blisters in mouth, eyes, or genitals",
//       "Difficulty breathing with rash",
//       "Signs of infection (increasing pain, warmth, pus)"
//     ]
//   },
//   {
//     id: "loose-motion",
//     name: "Loose Motion",
//     category: "Gastroenterology",
//     description: "Frequent, loose, or watery bowel movements, commonly known as diarrhea.",
//     imageUrl: "/loose-motion.jpg",
//     symptoms: [
//       "Watery stools",
//       "Abdominal cramps",
//       "Bloating",
//       "Nausea",
//       "Urgency to defecate",
//       "Fever in some cases"
//     ],
//     precautions: [
//       "Stay hydrated with water and electrolytes",
//       "Eat bland foods (BRAT diet)",
//       "Avoid dairy, caffeine, and spicy foods",
//       "Maintain good hand hygiene",
//       "Rest adequately"
//     ],
//     medications: [
//       {
//         name: "Loperamide (Imodium)",
//         dosage: "As directed on packaging",
//         description: "Slows down bowel movements",
//         timing: "Take after each loose stool, not exceeding 8 mg per day"
//       },
//       {
//         name: "ORS (Oral Rehydration Solution)",
//         dosage: "As directed on packaging",
//         description: "Replaces lost fluids and electrolytes",
//         timing: "Drink frequently throughout the day, especially after each loose stool"
//       },
//       {
//         name: "Bismuth subsalicylate (Pepto-Bismol)",
//         dosage: "30ml or 2 tablets every 30-60 minutes",
//         description: "Reduces diarrhea and soothes stomach",
//         timing: "Take as needed, not exceeding 8 doses in 24 hours"
//       },
//       {
//         name: "Probiotics",
//         dosage: "As directed on packaging",
//         description: "Helps restore beneficial gut bacteria",
//         timing: "Take 1-2 capsules daily, preferably with meals"
//       }
//     ],
//     emergencySymptoms: [
//       "Blood in stool",
//       "Severe abdominal pain",
//       "High fever",
//       "Signs of dehydration (extreme thirst, dry mouth, dizziness)",
//       "Diarrhea lasting more than 2 days"
//     ]
//   },
//   {
//     id: "chest-pain",
//     name: "Chest Pain",
//     category: "Cardiology",
//     description: "Discomfort or pain in the chest area that may indicate serious conditions.",
//     imageUrl: "/chest-pain.jpg",
//     symptoms: [
//       "Pressure, tightness, or squeezing sensation",
//       "Sharp, stabbing pain",
//       "Burning sensation",
//       "Pain radiating to arm, jaw, or back",
//       "Shortness of breath",
//       "Nausea or vomiting"
//     ],
//     precautions: [
//       "Seek immediate medical attention for unexplained chest pain",
//       "Rest in a comfortable position",
//       "Take prescribed medications",
//       "Manage stress levels",
//       "Follow heart-healthy lifestyle"
//     ],
//     medications: [
//       {
//         name: "Aspirin",
//         dosage: "As advised by healthcare provider",
//         description: "May be recommended during suspected heart attack",
//         timing: "Chew one 325mg tablet immediately if heart attack is suspected"
//       },
//       {
//         name: "Nitroglycerin",
//         dosage: "As prescribed by healthcare provider",
//         description: "Widens blood vessels for angina patients",
//         timing: "Place one tablet under tongue every 5 minutes, up to 3 doses"
//       },
//       {
//         name: "Beta-blockers",
//         dosage: "As prescribed by doctor",
//         description: "Reduces heart rate and blood pressure",
//         timing: "Usually taken once or twice daily with or without food"
//       },
//       {
//         name: "Antacids",
//         dosage: "As directed on packaging",
//         description: "Relieves chest pain caused by acid reflux",
//         timing: "Take 1-2 tablets as needed, especially after meals"
//       }
//     ],
//     emergencySymptoms: [
//       "Sudden, severe chest pain",
//       "Pain radiating to arm, jaw, or back",
//       "Shortness of breath",
//       "Nausea, cold sweat",
//       "Dizziness or fainting"
//     ]
//   },
//   {
//     id: "nose-bleeding",
//     name: "Nose Bleeding",
//     category: "ENT",
//     description: "Bleeding from the nostrils due to ruptured blood vessels in the nasal passage.",
//     imageUrl: "/nose-bleeding.jpg",
//     symptoms: [
//       "Blood flowing from one or both nostrils",
//       "Nasal congestion",
//       "Runny nose with blood",
//       "Feeling of liquid in back of throat",
//       "Rarely, dizziness or weakness"
//     ],
//     precautions: [
//       "Sit upright and lean slightly forward",
//       "Pinch the soft part of nose for 10-15 minutes",
//       "Breathe through mouth",
//       "Apply cold compress to bridge of nose",
//       "Avoid bending, straining, or picking nose"
//     ],
//     medications: [
//       {
//         name: "Saline nasal spray",
//         dosage: "As directed on packaging",
//         description: "Moisturizes nasal passages",
//         timing: "Use 2-3 sprays in each nostril 3-4 times daily"
//       },
//       {
//         name: "Antibiotic ointment",
//         dosage: "If prescribed by healthcare provider",
//         description: "Prevents infection if recommended",
//         timing: "Apply small amount inside nostrils twice daily"
//       },
//       {
//         name: "Nasal moisturizing gel",
//         dosage: "As directed on packaging",
//         description: "Prevents dryness that can lead to nosebleeds",
//         timing: "Apply small amount inside nostrils 2-3 times daily"
//       },
//       {
//         name: "Vitamin K cream",
//         dosage: "Apply small amount inside nostrils",
//         description: "May help with blood clotting",
//         timing: "Apply twice daily after cleaning the area"
//       }
//     ],
//     emergencySymptoms: [
//       "Bleeding that doesn't stop after 20 minutes",
//       "Heavy, uncontrollable bleeding",
//       "Bleeding after head injury",
//       "Difficulty breathing",
//       "Significant blood loss with dizziness"
//     ]
//   },
//   {
//     id: "asthma",
//     name: "Asthma",
//     category: "Respiratory",
//     description: "Chronic condition affecting airways with recurring periods of wheezing, chest tightness, and coughing.",
//     imageUrl: "/asthma.jpg",
//     symptoms: [
//       "Shortness of breath",
//       "Chest tightness or pain",
//       "Wheezing when exhaling",
//       "Trouble sleeping due to breathing difficulties",
//       "Coughing attacks",
//       "Fatigue"
//     ],
//     precautions: [
//       "Identify and avoid triggers",
//       "Take prescribed medications regularly",
//       "Use air purifiers if helpful",
//       "Get vaccinated against flu and pneumonia",
//       "Maintain healthy weight and exercise as tolerated"
//     ],
//     medications: [
//       {
//         name: "Albuterol inhaler (rescue inhaler)",
//         dosage: "As prescribed, typically 1-2 puffs as needed",
//         description: "Quick-relief medication for acute symptoms",
//         timing: "Use as needed for symptoms, wait 1 minute between puffs"
//       },
//       {
//         name: "Inhaled corticosteroids",
//         dosage: "As prescribed by healthcare provider",
//         description: "Daily controller medication",
//         timing: "Usually taken twice daily, morning and evening"
//       },
//       {
//         name: "Leukotriene modifiers",
//         dosage: "As prescribed by doctor",
//         description: "Tablet that helps prevent asthma symptoms",
//         timing: "Usually taken once daily in the evening"
//       },
//       {
//         name: "Combination inhalers",
//         dosage: "As prescribed by healthcare provider",
//         description: "Contains both corticosteroid and long-acting bronchodilator",
//         timing: "Typically used twice daily, 12 hours apart"
//       }
//     ],
//     emergencySymptoms: [
//       "Severe shortness of breath",
//       "No improvement after using rescue inhaler",
//       "Difficulty speaking in full sentences",
//       "Bluish lips or face",
//       "Severe anxiety due to breathing difficulty"
//     ]
//   },
//   {
//     id: "hiv-aids",
//     name: "HIV/AIDS",
//     category: "Infectious Disease",
//     description: "A viral infection that attacks the immune system, potentially leading to AIDS if untreated.",
//     imageUrl: "/hiv-aids.jpg",
//     symptoms: [
//       "Flu-like symptoms shortly after infection",
//       "Fever and night sweats",
//       "Fatigue",
//       "Swollen lymph nodes",
//       "Weight loss",
//       "Recurring infections"
//     ],
//     precautions: [
//       "Practice safe sex with condoms",
//       "Never share needles",
//       "Get tested regularly if at risk",
//       "Take medications as prescribed",
//       "Maintain a healthy lifestyle to support immune function"
//     ],
//     medications: [
//       {
//         name: "Antiretroviral therapy (ART)",
//         dosage: "As prescribed by specialist",
//         description: "Combination of drugs that prevent HIV replication",
//         timing: "Strict adherence to prescribed schedule is essential"
//       },
//       {
//         name: "Integrase strand transfer inhibitors",
//         dosage: "As prescribed by specialist",
//         description: "Blocks HIV enzyme integrase",
//         timing: "Usually taken once daily with or without food"
//       },
//       {
//         name: "Protease inhibitors",
//         dosage: "As prescribed by specialist",
//         description: "Blocks HIV enzyme protease",
//         timing: "Typically taken twice daily with food"
//       },
//       {
//         name: "Pre-exposure prophylaxis (PrEP)",
//         dosage: "As prescribed by doctor",
//         description: "Prevention medication for high-risk individuals",
//         timing: "Taken daily at the same time to maintain protection"
//       }
//     ],
//     emergencySymptoms: [
//       "High fever with severe headache",
//       "Confusion or difficulty thinking clearly",
//       "Seizures",
//       "Severe, persistent diarrhea",
//       "Severe weakness or inability to move"
//     ]
//   },
//   {
//     id: "migraine",
//     name: "Migraine",
//     category: "Neurology",
//     description: "Recurring headaches that cause moderate to severe throbbing pain, often with other symptoms.",
//     imageUrl: "/migraine.jpg",
//     symptoms: [
//       "Throbbing or pulsing headache",
//       "Pain on one or both sides of head",
//       "Sensitivity to light and sound",
//       "Nausea and vomiting",
//       "Visual disturbances (aura)",
//       "Dizziness or lightheadedness"
//     ],
//     precautions: [
//       "Identify and avoid personal triggers",
//       "Maintain regular sleep schedule",
//       "Stay hydrated",
//       "Practice stress management",
//       "Consider keeping a headache diary"
//     ],
//     medications: [
//       {
//         name: "Triptans (Sumatriptan, Rizatriptan)",
//         dosage: "As prescribed by doctor",
//         description: "Relieves pain and other symptoms during migraine attack",
//         timing: "Take at first sign of migraine, may repeat after 2 hours if needed"
//       },
//       {
//         name: "NSAIDs (Ibuprofen, Naproxen)",
//         dosage: "As directed on packaging or by doctor",
//         description: "Reduces pain and inflammation",
//         timing: "Take at first sign of migraine with food"
//       },
//       {
//         name: "Anti-nausea medications",
//         dosage: "As prescribed by doctor",
//         description: "Relieves nausea and vomiting during migraine",
//         timing: "Take as needed with migraine attack"
//       },
//       {
//         name: "Preventive medications (beta-blockers, antidepressants)",
//         dosage: "As prescribed by specialist",
//         description: "Reduces frequency and severity of migraines",
//         timing: "Taken daily regardless of headache presence"
//       }
//     ],
//     emergencySymptoms: [
//       "Headache that comes on suddenly like a thunderclap",
//       "Headache with fever, stiff neck, confusion",
//       "Headache after head injury",
//       "Headache with weakness, numbness, or speech difficulties",
//       "New headache pattern in people over 50"
//     ]
//   },
//   {
//     id: "tuberculosis",
//     name: "Tuberculosis (TB)",
//     category: "Infectious Disease",
//     description: "Bacterial infection primarily affecting the lungs but can affect other parts of the body.",
//     imageUrl: "/tuberculosis.jpg",
//     symptoms: [
//       "Persistent cough lasting more than three weeks",
//       "Coughing up blood or mucus",
//       "Chest pain when breathing or coughing",
//       "Fatigue",
//       "Fever",
//       "Night sweats and weight loss"
//     ],
//     precautions: [
//       "Complete full course of prescribed medication",
//       "Cover mouth when coughing or sneezing",
//       "Ventilate rooms regularly",
//       "Avoid close contact during initial treatment phase",
//       "Follow up with healthcare provider regularly"
//     ],
//     medications: [
//       {
//         name: "Isoniazid (INH)",
//         dosage: "As prescribed by specialist",
//         description: "First-line anti-TB drug",
//         timing: "Usually taken once daily on an empty stomach"
//       },
//       {
//         name: "Rifampin",
//         dosage: "As prescribed by specialist",
//         description: "First-line anti-TB drug",
//         timing: "Taken once daily, 1 hour before or 2 hours after meals"
//       },
//       {
//         name: "Ethambutol",
//         dosage: "As prescribed by specialist",
//         description: "First-line anti-TB drug",
//         timing: "Usually taken once daily with food to reduce stomach upset"
//       },
//       {
//         name: "Pyrazinamide",
//         dosage: "As prescribed by specialist",
//         description: "First-line anti-TB drug",
//         timing: "Taken once daily with meals to minimize stomach irritation"
//       }
//     ],
//     emergencySymptoms: [
//       "Severe breathing difficulty",
//       "Coughing up large amounts of blood",
//       "High fever with confusion",
//       "Severe chest pain",
//       "Fainting or loss of consciousness"
//     ]
//   },
//   {
//     id: "throat-infection",
//     name: "Throat Infection",
//     category: "ENT",
//     description: "Inflammation of the throat, often due to viral or bacterial infection.",
//     imageUrl: "/throat-infection.jpg",
//     symptoms: [
//       "Sore or scratchy throat",
//       "Pain when swallowing",
//       "Redness in the back of the mouth",
//       "Swollen tonsils, sometimes with white patches",
//       "Hoarse or muffled voice",
//       "Swollen, tender lymph nodes in the neck"
//     ],
//     precautions: [
//       "Rest voice and avoid irritants",
//       "Drink plenty of fluids",
//       "Gargle with warm salt water",
//       "Use humidifier to keep air moist",
//       "Avoid sharing utensils or drinks"
//     ],
//     medications: [
//       {
//         name: "Antibiotics (for bacterial infections)",
//         dosage: "As prescribed by doctor",
//         description: "Treats bacterial throat infections like strep throat",
//         timing: "Complete full course as prescribed, usually 7-10 days"
//       },
//       {
//         name: "Pain relievers (Acetaminophen, Ibuprofen)",
//         dosage: "As directed on packaging",
//         description: "Reduces pain and fever",
//         timing: "Take every 6-8 hours with food as needed"
//       },
//       {
//         name: "Throat lozenges or sprays",
//         dosage: "As directed on packaging",
//         description: "Provides temporary relief from soreness",
//         timing: "Use every 2-3 hours as needed"
//       },
//       {
//         name: "Herbal tea with honey and lemon",
//         dosage: "1-2 cups as needed",
//         description: "Soothes irritated throat tissues",
//         timing: "Drink throughout the day, especially before bed"
//       }
//     ],
//     emergencySymptoms: [
//       "Severe difficulty swallowing or breathing",
//       "Drooling and inability to swallow",
//       "High fever that doesn't respond to medication",
//       "Severe swelling that affects breathing",
//       "Rash with sore throat and fever"
//     ]
//   },
//   {
//     id: "acne",
//     name: "Acne",
//     category: "Dermatology",
//     description: "Skin condition that occurs when hair follicles are clogged with oil and dead skin cells.",
//     imageUrl: "/acne.jpg",
//     symptoms: [
//       "Whiteheads (closed plugged pores)",
//       "Blackheads (open plugged pores)",
//       "Papules (small red, tender bumps)",
//       "Pustules (papules with pus at their tips)",
//       "Nodules (large, solid, painful lumps under the skin)",
//       "Cystic lesions (painful, pus-filled lumps under the skin)"
//     ],
//     precautions: [
//       "Wash face twice daily with mild cleanser",
//       "Avoid touching face with hands",
//       "Use oil-free, non-comedogenic products",
//       "Don't pick or squeeze pimples",
//       "Wash pillowcases regularly"
//     ],
//     medications: [
//       {
//         name: "Benzoyl peroxide",
//         dosage: "2.5% to 10% preparations",
//         description: "Kills bacteria and removes excess oil and dead skin cells",
//         timing: "Apply once or twice daily after washing face"
//       },
//       {
//         name: "Salicylic acid",
//         dosage: "0.5% to 2% preparations",
//         description: "Helps unclog pores and reduces inflammation",
//         timing: "Apply 1-3 times daily to affected areas"
//       },
//       {
//         name: "Retinoids (adapalene, tretinoin)",
//         dosage: "As prescribed or over-the-counter strength",
//         description: "Promotes cell turnover and prevents clogging of hair follicles",
//         timing: "Apply thinly at night, start with every other day"
//       },
//       {
//         name: "Topical antibiotics",
//         dosage: "As prescribed by dermatologist",
//         description: "Reduces surface bacteria and inflammation",
//         timing: "Apply 1-2 times daily as directed by doctor"
//       }
//     ],
//     emergencySymptoms: [
//       "Severe, painful nodules or cysts",
//       "Acne that doesn't respond to over-the-counter treatments",
//       "Acne causing significant scarring",
//       "Acne accompanied by fever or extreme pain",
//       "Sudden onset of severe acne in adults (may indicate underlying condition)"
//     ]
//   },
//   {
//     id: "pimples",
//     name: "Pimples Problem",
//     category: "Dermatology",
//     description: "Small skin lesions caused by inflammation of oil glands and hair follicles.",
//     imageUrl: "/pimples.jpg",
//     symptoms: [
//       "Red, raised spots on the skin",
//       "White or black heads",
//       "Tender or painful spots",
//       "Redness around affected areas",
//       "Occasional pus formation",
//       "Oily skin"
//     ],
//     precautions: [
//       "Cleanse face twice daily with gentle soap",
//       "Use oil-free moisturizers",
//       "Remove makeup before sleeping",
//       "Avoid excessive touching of face",
//       "Keep hair clean and away from face"
//     ],
//     medications: [
//       {
//         name: "Tea tree oil",
//         dosage: "5-15% solution",
//         description: "Natural antimicrobial that reduces inflammation",
//         timing: "Apply with cotton swab to affected areas 1-2 times daily"
//       },
//       {
//         name: "Spot treatments with sulfur",
//         dosage: "3-10% preparation",
//         description: "Reduces bacteria and excess oil",
//         timing: "Apply directly to pimples before bed"
//       },
//       {
//         name: "Glycolic acid products",
//         dosage: "5-10% preparations",
//         description: "Exfoliates skin and reduces pore blockage",
//         timing: "Use 2-3 times weekly as a face wash or toner"
//       },
//       {
//         name: "Niacinamide creams",
//         dosage: "2-10% preparation",
//         description: "Reduces inflammation and regulates oil production",
//         timing: "Apply morning and evening as part of skincare routine"
//       }
//     ],
//     emergencySymptoms: [
//       "Extremely painful, deep pimples",
//       "Spreading infection with increasing redness",
//       "Pimples near eyes or nose that cause significant swelling",
//       "Pimples accompanied by fever or significant pain",
//       "Sudden widespread breakout that may indicate allergic reaction"
//     ]
//   },
//   {
//     id: "hairfall",
//     name: "Hair Fall",
//     category: "Dermatology",
//     description: "Excessive loss of hair from the scalp, beyond the normal shedding of 50-100 hairs daily.",
//     imageUrl: "/hairfall.jpg",
//     symptoms: [
//       "Gradual thinning on top of head",
//       "Circular bald spots",
//       "Sudden loosening of hair",
//       "Full-body hair loss",
//       "Patches of scaling on scalp",
//       "More hair on pillow, shower drain or hairbrush"
//     ],
//     precautions: [
//       "Avoid tight hairstyles that pull on hair",
//       "Be gentle with hair when washing and brushing",
//       "Protect hair from sunlight and harsh chemicals",
//       "Maintain a balanced diet rich in proteins",
//       "Reduce stress through lifestyle changes"
//     ],
//     medications: [
//       {
//         name: "Minoxidil (Rogaine)",
//         dosage: "2% or 5% solution",
//         description: "Promotes hair growth and prevents further hair loss",
//         timing: "Apply to dry scalp twice daily, morning and evening"
//       },
//       {
//         name: "Finasteride (prescription)",
//         dosage: "1mg tablet",
//         description: "Prevents conversion of testosterone to DHT (for men only)",
//         timing: "Take one tablet daily with or without food"
//       },
//       {
//         name: "Biotin supplements",
//         dosage: "2000-5000 mcg daily",
//         description: "Supports healthy hair growth",
//         timing: "Take once daily with food"
//       },
//       {
//         name: "Ketoconazole shampoo",
//         dosage: "1-2% preparation",
//         description: "Treats scalp inflammation and fungal infections",
//         timing: "Use 2-3 times weekly, leaving on scalp for 3-5 minutes"
//       }
//     ],
//     emergencySymptoms: [
//       "Sudden, patchy hair loss",
//       "Severe itching or burning of the scalp",
//       "Hair loss with unexplained weight loss",
//       "Hair loss with significant rash or pain",
//       "Complete loss of all body hair in a short period"
//     ]
//   },
//   {
//     id: "dandruff",
//     name: "Dandruff",
//     category: "Dermatology",
//     description: "Condition of the scalp causing flakes of dry skin to appear in the hair.",
//     imageUrl: "/dandruff.jpg",
//     symptoms: [
//       "White or yellowish flakes on scalp and hair",
//       "Itchy scalp",
//       "Dry or oily patches on scalp",
//       "Redness on scalp",
//       "Flakes on shoulders or clothing",
//       "Worsening in dry or cold weather"
//     ],
//     precautions: [
//       "Shampoo regularly to reduce oil buildup",
//       "Use gentle hair products without harsh chemicals",
//       "Avoid scratching the scalp",
//       "Reduce stress which may trigger or worsen dandruff",
//       "Expose scalp to moderate sunlight"
//     ],
//     medications: [
//       {
//         name: "Zinc pyrithione shampoo",
//         dosage: "Use as regular shampoo",
//         description: "Reduces fungi and bacteria on scalp",
//         timing: "Use 2-3 times weekly, leaving on scalp for 5 minutes"
//       },
//       {
//         name: "Ketoconazole shampoo",
//         dosage: "1% or 2% preparation",
//         description: "Antifungal that reduces malassezia yeasts",
//         timing: "Use twice weekly for 2-4 weeks, then once weekly for prevention"
//       },
//       {
//         name: "Selenium sulfide shampoo",
//         dosage: "1% preparation",
//         description: "Slows skin cell turnover and has antifungal properties",
//         timing: "Use twice weekly for 2 weeks, then once weekly"
//       },
//       {
//         name: "Coal tar shampoo",
//         dosage: "0.5-5% preparation",
//         description: "Reduces skin cell production and has anti-inflammatory properties",
//         timing: "Use 2-3 times weekly as directed on packaging"
//       }
//     ],
//     emergencySymptoms: [
//       "Extremely red, inflamed scalp",
//       "Spreading infection with pus or fluid discharge",
//       "Severe pain in scalp",
//       "Dandruff with significant hair loss",
//       "Symptoms that don't improve with regular treatment"
//     ]
//   },
//   {
//     id: "pneumonia",
//     name: "Pneumonia",
//     category: "Respiratory",
//     description: "Infection that inflames air sacs in one or both lungs, which may fill with fluid.",
//     imageUrl: "/pneumonia.jpg",
//     symptoms: [
//       "Chest pain when breathing or coughing",
//       "Confusion or changes in mental awareness (in adults aged 65 and older)",
//       "Cough, which may produce phlegm",
//       "Fatigue",
//       "Fever, sweating and shaking chills",
//       "Lower than normal body temperature (in adults older than 65 and people with weak immune systems)"
//     ],
//     precautions: [
//       "Get vaccinated against pneumococcal pneumonia",
//       "Practice good hygiene, especially handwashing",
//       "Don't smoke and avoid secondhand smoke",
//       "Keep immune system strong with healthy lifestyle",
//       "Rest and stay hydrated during respiratory infections"
//     ],
//     medications: [
//       {
//         name: "Antibiotics (for bacterial pneumonia)",
//         dosage: "As prescribed by doctor",
//         description: "Treats the bacterial infection",
//         timing: "Complete full course as prescribed, usually 5-7 days"
//       },
//       {
//         name: "Cough medicine",
//         dosage: "As directed on packaging",
//         description: "Suppresses cough to allow rest",
//         timing: "Take as needed, especially before sleep"
//       },
//       {
//         name: "Fever reducers/pain relievers",
//         dosage: "As directed on packaging",
//         description: "Reduces fever and chest pain",
//         timing: "Take every 4-6 hours as needed with food"
//       },
//       {
//         name: "Bronchodilators",
//         dosage: "As prescribed by doctor",
//         description: "Opens airways and improves breathing",
//         timing: "Use as directed, typically 2-4 times daily via inhaler"
//       }
//     ],
//     emergencySymptoms: [
//       "Difficulty breathing or rapid breathing",
//       "Bluish lips or fingernails (cyanosis)",
//       "High fever not responding to medication",
//       "Confusion or disorientation",
//       "Severe chest pain"
//     ]
//   },
//   {
//     id: "gastric",
//     name: "Gastric/Acidity",
//     category: "Gastroenterology",
//     description: "Excessive production of acid in the stomach leading to discomfort and digestive issues.",
//     imageUrl: "/gastric.jpg",
//     symptoms: [
//       "Burning sensation in chest (heartburn)",
//       "Sour taste in mouth",
//       "Bloating and belching",
//       "Indigestion and stomach discomfort",
//       "Nausea",
//       "Regurgitation of food or acid"
//     ],
//     precautions: [
//       "Eat smaller, more frequent meals",
//       "Avoid spicy, fatty, or acidic foods",
//       "Don't lie down right after eating",
//       "Maintain healthy weight",
//       "Elevate head of bed when sleeping"
//     ],
//     medications: [
//       {
//         name: "Antacids (Tums, Maalox)",
//         dosage: "As directed on packaging",
//         description: "Neutralizes stomach acid",
//         timing: "Take as needed for symptoms, usually after meals and at bedtime"
//       },
//       {
//         name: "H2 blockers (Famotidine, Ranitidine)",
//         dosage: "As directed on packaging",
//         description: "Reduces acid production",
//         timing: "Take once or twice daily, 30 minutes before meals"
//       },
//       {
//         name: "Proton pump inhibitors (Omeprazole)",
//         dosage: "As directed on packaging or prescribed",
//         description: "Blocks acid production and allows healing",
//         timing: "Take once daily, 30 minutes before first meal of day"
//       },
//       {
//         name: "Alginates (Gaviscon)",
//         dosage: "As directed on packaging",
//         description: "Forms protective barrier on stomach contents",
//         timing: "Take after meals and at bedtime"
//       }
//     ],
//     emergencySymptoms: [
//       "Severe, persistent abdominal pain",
//       "Difficulty swallowing or painful swallowing",
//       "Vomiting blood or material that looks like coffee grounds",
//       "Black, tarry stools",
//       "Unexplained weight loss"
//     ]
//   },
//   {
//     id: "malaria",
//     name: "Malaria",
//     category: "Infectious Disease",
//     description: "Serious disease caused by a parasite transmitted by the bite of infected mosquitoes.",
//     imageUrl: "/malaria.jpg",
//     symptoms: [
//       "Fever and chills",
//       "Headache",
//       "Nausea and vomiting",
//       "Muscle pain and fatigue",
//       "Sweating and feeling cold",
//       "Cycles of symptoms every 24-72 hours"
//     ],
//     precautions: [
//       "Use insect repellent and bed nets in endemic areas",
//       "Wear long sleeves and pants at dawn and dusk",
//       "Take preventive medications when traveling to high-risk areas",
//       "Eliminate standing water around home",
//       "Use air conditioning or window screens when possible"
//     ],
//     medications: [
//       {
//         name: "Chloroquine",
//         dosage: "As prescribed by doctor",
//         description: "Treats certain types of malaria parasites",
//         timing: "Typically taken weekly for prevention or as directed for treatment"
//       },
//       {
//         name: "Artemisinin-based combination therapies (ACTs)",
//         dosage: "As prescribed by doctor",
//         description: "First-line treatment for P. falciparum malaria",
//         timing: "Usually taken twice daily for 3 days"
//       },
//       {
//         name: "Atovaquone-proguanil (Malarone)",
//         dosage: "As prescribed by doctor",
//         description: "Prevention and treatment of malaria",
//         timing: "Take daily with food or milk at the same time each day"
//       },
//       {
//         name: "Primaquine",
//         dosage: "As prescribed by doctor",
//         description: "Eliminates certain forms of the parasite in the liver",
//         timing: "Usually taken once daily for 14 days with food"
//       }
//     ],
//     emergencySymptoms: [
//       "Severe headache with fever",
//       "Extreme weakness or fatigue",
//       "Confusion or seizures",
//       "Difficulty breathing",
//       "Jaundice (yellowing of skin and eyes)"
//     ]
//   },
//   {
//     id: "diarrhea",
//     name: "Diarrhea",
//     category: "Gastroenterology",
//     description: "Loose, watery bowel movements that occur more frequently than usual.",
//     imageUrl: "/diarrhea.jpg",
//     symptoms: [
//       "Loose, watery stools",
//       "Abdominal cramps or pain",
//       "Bloating",
//       "Nausea",
//       "Urgency to have a bowel movement",
//       "Possibly fever or bloody stools in certain cases"
//     ],
//     precautions: [
//       "Stay hydrated with water, clear broths, and electrolyte solutions",
//       "Avoid dairy, caffeine, and high-fiber or fatty foods",
//       "Eat bland foods (BRAT diet: bananas, rice, applesauce, toast)",
//       "Practice good hand hygiene",
//       "Avoid sharing personal items"
//     ],
//     medications: [
//       {
//         name: "Loperamide (Imodium)",
//         dosage: "Initial 4mg followed by 2mg after each loose stool",
//         description: "Slows intestinal movement and reduces stool frequency",
//         timing: "Take after each loose stool, not exceeding 8mg per day for OTC use"
//       },
//       {
//         name: "Bismuth subsalicylate (Pepto-Bismol)",
//         dosage: "30ml or 2 tablets every 30-60 minutes",
//         description: "Reduces diarrhea and soothes digestive tract",
//         timing: "Take as needed, not exceeding 8 doses in 24 hours"
//       },
//       {
//         name: "Oral rehydration salts (ORS)",
//         dosage: "Prepare as directed on packaging",
//         description: "Replaces lost fluids and electrolytes",
//         timing: "Drink regularly throughout the day, especially after each loose stool"
//       },
//       {
//         name: "Probiotics",
//         dosage: "As directed on packaging",
//         description: "Restores beneficial gut bacteria",
//         timing: "Take 1-2 capsules daily with meals"
//       }
//     ],
//     emergencySymptoms: [
//       "Severe dehydration (excessive thirst, dry mouth, little or no urination, weakness)",
//       "Blood in stool or black, tarry stools",
//       "Fever above 39°C (102°F)",
//       "Severe abdominal or rectal pain",
//       "Diarrhea lasting more than 2 days"
//     ]
//   },
//   {
//     id: "insomnia",
//     name: "Insomnia",
//     category: "Sleep Disorders",
//     description: "Sleep disorder characterized by difficulty falling asleep, staying asleep, or both.",
//     imageUrl: "/insomnia.jpg",
//     symptoms: [
//       "Difficulty falling asleep",
//       "Waking up during the night",
//       "Waking up too early",
//       "Not feeling well-rested after sleep",
//       "Daytime tiredness or sleepiness",
//       "Irritability, depression, or anxiety"
//     ],
//     precautions: [
//       "Establish a regular sleep schedule",
//       "Create a restful environment (dark, quiet, comfortable)",
//       "Limit or avoid caffeine, alcohol, and nicotine",
//       "Avoid large meals and beverages before bedtime",
//       "Include physical activity in daily routine"
//     ],
//     medications: [
//       {
//         name: "Melatonin",
//         dosage: "1-5mg",
//         description: "Natural sleep hormone supplement",
//         timing: "Take 1-2 hours before bedtime"
//       },
//       {
//         name: "Diphenhydramine (Benadryl)",
//         dosage: "25-50mg",
//         description: "Antihistamine with sedative effects",
//         timing: "Take 30 minutes before bedtime, not for long-term use"
//       },
//       {
//         name: "Valerian root",
//         dosage: "300-600mg extract",
//         description: "Herbal supplement that may promote sleep",
//         timing: "Take 1-2 hours before bedtime"
//       },
//       {
//         name: "Prescription sleep medications",
//         dosage: "As prescribed by doctor",
//         description: "Various medications to help with sleep",
//         timing: "Take as directed by healthcare provider, usually right before bedtime"
//       }
//     ],
//     emergencySymptoms: [
//       "Insomnia with thoughts of harming yourself",
//       "Complete inability to sleep for several days",
//       "Sleep difficulties with severe mental confusion",
//       "Insomnia with uncontrolled physical symptoms",
//       "Sleep problems with severe depression or anxiety"
//     ]
//   }
// ];

// export default diseasesData;

export interface Disease {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  backgroundImage: string;  // New property for background image
  symptoms: string[];
  precautions: string[];
  medications: {
    name: string;
    dosage: string;
    description: string;
    timing: string;
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
    backgroundImage: "/images/skin-disease-background.jpg",  // Background image for Skin Disease
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
        description: "Reduces inflammation and itching",
        timing: "Apply morning and evening after washing the affected area"
      },
      {
        name: "Antihistamines",
        dosage: "As directed on packaging",
        description: "Relieves itching and allergic reactions",
        timing: "Usually taken once daily, preferably at night"
      },
      {
        name: "Calamine lotion",
        dosage: "Apply to affected areas as needed",
        description: "Soothes irritated skin and reduces itching",
        timing: "Apply 3-4 times daily as needed for relief"
      },
      {
        name: "Moisturizing creams",
        dosage: "Apply liberally to affected areas",
        description: "Protects and hydrates dry skin",
        timing: "Apply 2-3 times daily, especially after bathing"
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
    backgroundImage: "/images/fever-background.jpg",  // Background image for Fever
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
        description: "Reduces fever and relieves pain",
        timing: "Take with or without food, not exceeding 3000mg in 24 hours"
      },
      {
        name: "Ibuprofen (Advil, Motrin)",
        dosage: "As directed on packaging, typically 200-400mg every 4-6 hours",
        description: "Reduces fever, pain, and inflammation",
        timing: "Take with food or milk to prevent stomach upset, not exceeding 1200mg in 24 hours"
      },
      {
        name: "Naproxen sodium (Aleve)",
        dosage: "220-440mg every 8-12 hours as needed",
        description: "Reduces fever and inflammation",
        timing: "Take with food, not exceeding 660mg in 24 hours"
      },
      {
        name: "Aspirin",
        dosage: "325-650mg every 4-6 hours as needed",
        description: "Reduces fever and pain (not recommended for children)",
        timing: "Take with food to reduce stomach irritation"
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
    backgroundImage: "/images/cough-background.jpg",  // Background image for Cough
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
        description: "Suppresses cough reflex",
        timing: "Take every 6-8 hours as needed, not exceeding 4 doses in 24 hours"
      },
      {
        name: "Guaifenesin (Mucinex)",
        dosage: "As directed on packaging",
        description: "Thins mucus making it easier to clear",
        timing: "Take every 4 hours, not exceeding 6 doses in 24 hours"
      },
      {
        name: "Honey and lemon mixture",
        dosage: "1-2 teaspoons as needed",
        description: "Natural remedy to soothe throat and reduce coughing",
        timing: "Take as needed, especially before bedtime"
      },
      {
        name: "Benzonatate (Tessalon)",
        dosage: "100-200mg capsules",
        description: "Prescription medicine that suppresses cough",
        timing: "Take three times daily as prescribed by doctor"
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
    imageUrl: "https://tse1.mm.bing.net/th?id=OIP.v9ETORN-5ViQLz4HAV95FQHaEo&pid=Api&P=0&h=180",
    backgroundImage: "https://image.freepik.com/free-vector/medical-infographic-cold-flu-symptoms_1308-47909.jpg",  // Background image for Common Cold
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
        description: "Reduces nasal congestion",
        timing: "Take every 4-6 hours as needed, not to exceed 4 doses per day"
      },
      {
        name: "Pain relievers",
        dosage: "As directed on packaging",
        description: "Relieves sore throat and headache",
        timing: "Take every 4-6 hours with food as needed"
      },
      {
        name: "Zinc lozenges",
        dosage: "One lozenge every 2-3 hours while awake",
        description: "May reduce duration of cold symptoms",
        timing: "Start at first sign of cold, don't exceed 6 lozenges per day"
      },
      {
        name: "Vitamin C supplements",
        dosage: "500-1000mg daily",
        description: "May help immune system fight infection",
        timing: "Take with meals to improve absorption"
      }
    ],
    emergencySymptoms: [
      "Difficulty breathing",
      "Persistent fever above 38.9°C (102°F)",
      "Severe sinus pain",
      "Symptoms that worsen after 10 days"
    ]
  },
];

export default diseasesData;

