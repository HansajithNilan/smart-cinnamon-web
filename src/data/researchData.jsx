import React from "react";
import { Leaf, Sprout, Map, Warehouse } from "lucide-react";

import vaImg1 from "../assets/vacantAreaScreens/IMG_3727.PNG";
import vaImg2 from "../assets/vacantAreaScreens/IMG_3728.PNG";
import vaImg3 from "../assets/vacantAreaScreens/IMG_3729.PNG";
import vaImg4 from "../assets/vacantAreaScreens/IMG_3730.PNG";
import vaChatImg from "../assets/vacantAreaScreens/chatimage.PNG";

export const researchData = [
  {
    id: "fertilizer",
    slug: "smart-fertilizer-recommendation",
    icon: <Sprout />,
    title: "Smart Fertilizer Recommendation",
    owner: "Bangamuwage M.D",
    studentId: "IT22592606",
    photo: "/smart-cinnamon-web/images/team/member1.jpg",
    facebook: "https://web.facebook.com/madusha.dilshan.37853?mibextid=wwXIfr&rdid=c2j4kDmGJdNvwR5l&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F17rGDx54NS%2F%3Fmibextid%3DwwXIfr%26ref%3D1%26_rdc%3D1%26_rdr#",
    linkedin: "https://www.linkedin.com/in/madusha-dilshan-30827928a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bmy13nhQ7SmWKhrFJYW%2FumQ%3D%3D",
    description:
      "IoT and machine learning based system for real-time soil nutrient monitoring, fertilizer deficit detection, and precision fertilizer recommendation for cinnamon export estates.",
    tech: ["ESP32", "NPK Sensors", "MQTT", "Random Forest", "CatBoost", "XGBoost"],
    features: [
      "Real-time N, P, K, pH, EC, moisture and temperature monitoring",
      "Fertilizer deficit calculation",
      "Precise fertilizer dose recommendation",
      "Dashboard for soil trends and reports",
    ],
    accuracy: "Overall expected accuracy: 90% - 95%",
    proposalUrl: "/smart-cinnamon-web/proposals/fertilizer_proposal.pdf",
    tafUrl: "/smart-cinnamon-web/taf/research_taf.pdf",
    fullDetails: "Detailed information about the IoT sensors used, the calibration process for NPK sensors, and how the machine learning models (Random Forest, CatBoost, XGBoost) are integrated to provide real-time recommendations. This module focuses on optimizing the nutrient balance in the soil to maximize cinnamon yield while minimizing environmental impact.",
  },
  {
    id: "detection",
    slug: "vacant-area-detection",
    icon: <Map />,
    title: "Vacant Area Detection & Yield Forecasting",
    owner: "Hansajith W.R.N",
    studentId: "IT22565594",
    photo: "/smart-cinnamon-web/images/team/member2.jpg",
    facebook: "https://web.facebook.com/profile.php?id=61567164418143",
    linkedin: "https://www.linkedin.com/in/nilan-hansajith-358798301/",
    description:
      "Satellite, GIS and ML based decision support system to detect vacant plantation areas, estimate replant counts, calculate costs and forecast cinnamon yield.",
    tech: ["CNN", "YOLO", "DeepLabV3", "NDVI", "GIS", "VQA"],
    features: [
      "Detect vacant cinnamon plantation patches",
      "Measure vacant area using GIS",
      "Estimate plant count and replanting cost",
      "Forecast yield and historical land queries",
      "AI Chat application for interactive cinnamon guidance",
    ],
    accuracy: "Overall expected accuracy: 80% - 90%",
    proposalUrl: "/smart-cinnamon-web/proposals/detection_proposal.pdf",
    tafUrl: "/smart-cinnamon-web/taf/research_taf.pdf",
    appScreenshots: [vaImg1, vaImg2, vaImg3, vaImg4],
    fullDetails: "This component utilizes state-of-the-art computer vision models like YOLO and DeepLabV3 on satellite and drone imagery. By calculating NDVI (Normalized Difference Vegetation Index), the system identifies healthy versus vacant patches. The GIS integration allows for precise area measurement and cost estimation for replanting, helping plantation owners plan their resources effectively.",
    aiChat: {
      image: vaChatImg,
      title: "Interactive AI Cultivation Assistant",
      description: "Experience our integrated AI Chat application designed specifically for cinnamon cultivation. Users can easily query detailed information, learn about best practices, and receive interactive, step-by-step instructions on managing their cinnamon estates directly within the app."
    }
  },
  {
    id: "warehouse",
    slug: "warehouse-quality-guard",
    icon: <Warehouse />,
    title: "Post-Harvest Warehouse Quality Guard",
    owner: "W. W. G. D. Vihani",
    studentId: "IT22594372",
    photo: "/smart-cinnamon-web/images/team/member3.jpg",
    facebook: "https://www.facebook.com/share/1BeVKA7Nv3/?mibextid=wwXIfr",
    linkedin: "https://linkedin.com",
    description:
      "Multi-sensor IoT and ML early-warning system that monitors warehouse conditions and predicts risks like mold, color fade, powdering and aroma loss.",
    tech: ["ESP32", "IoT Sensors", "LightGBM", "XGBoost", "MQTT", "React"],
    features: [
      "Monitor temperature, RH, CO₂, O₂, VOCs, airflow and light",
      "ML-based risk score prediction",
      "Real-time alerts and corrective actions",
      "HACCP and GI compliance support",
    ],
    accuracy: "Overall expected accuracy: 90% - 95%",
    proposalUrl: "/smart-cinnamon-web/proposals/warehouse_proposal.pdf",
    tafUrl: "/smart-cinnamon-web/taf/research_taf.pdf",
    appScreenshots: [
      "/smart-cinnamon-web/images/warehouse/screen1.jpg",
      "/smart-cinnamon-web/images/warehouse/screen2.jpg",
      "/smart-cinnamon-web/images/warehouse/screen3.jpg",
      "/smart-cinnamon-web/images/warehouse/screen4.jpg"
    ],
    fullDetails: "The Quality Guard system monitors the critical parameters of cinnamon storage. Using LightGBM and XGBoost models, it predicts the shelf-life and risk of degradation. The system provides real-time alerts via MQTT, ensuring that corrective actions can be taken immediately to maintain the high quality required for export markets, aligning with HACCP and GI standards.",
  },
  {
    id: "fungal",
    slug: "leaf-fungal-predictor",
    icon: <Leaf />,
    title: "Cinnamon Leaf Fungal Spread Predictor",
    owner: "Randeni R.P.R.M",
    studentId: "IT22578778",
    photo: "/smart-cinnamon-web/images/team/member4.jpg",
    facebook: "https://www.facebook.com/rushani.randeni",
    linkedin: "https://lk.linkedin.com/in/rushani-madhushika",
    description:
      "Mobile ML-based forecasting system that detects fungal infection from cinnamon leaf images and predicts future spread using time-series models.",
    tech: ["React Native", "OpenCV", "CNN", "LSTM", "GRU", "TensorFlow"],
    features: [
      "Capture cinnamon leaf image using mobile camera",
      "Detect current infection percentage",
      "Forecast spread for upcoming days",
      "Recommend spraying, pruning or isolation",
    ],
    accuracy: "Overall expected accuracy: 85% - 95%",
    proposalUrl: "/smart-cinnamon-web/proposals/fungal_proposal.pdf",
    tafUrl: "/smart-cinnamon-web/taf/research_taf.pdf",
    fullDetails: "Leveraging mobile technology, this module allows farmers to detect diseases in the field. CNNs are used for image classification and infection level detection, while LSTM and GRU models forecast the spread based on environmental factors. The system provides actionable recommendations, helping to contain fungal outbreaks before they spread through the entire plantation.",
  },
];
