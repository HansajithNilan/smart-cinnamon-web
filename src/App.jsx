import React from "react";
import {
  Leaf,
  Sprout,
  Map,
  Warehouse,
  Cpu,
  Activity,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import "./App.css";

const components = [
  {
    icon: <Sprout />,
    title: "Smart Fertilizer Recommendation",
    owner: "Bangamuwage M.D",
    studentId: "IT22592606",
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
  },
  {
    icon: <Map />,
    title: "Vacant Area Detection & Yield Forecasting",
    owner: "Hansajith W.R.N",
    studentId: "IT22565594",
    description:
      "Satellite, GIS and ML based decision support system to detect vacant plantation areas, estimate replant counts, calculate costs and forecast cinnamon yield.",
    tech: ["CNN", "YOLO", "DeepLabV3", "NDVI", "GIS", "VQA"],
    features: [
      "Detect vacant cinnamon plantation patches",
      "Measure vacant area using GIS",
      "Estimate plant count and replanting cost",
      "Forecast yield and historical land queries",
    ],
    accuracy: "Overall expected accuracy: 80% - 90%",
  },
  {
    icon: <Warehouse />,
    title: "Post-Harvest Warehouse Quality Guard",
    owner: "W. W. G. D. Vihani",
    studentId: "IT22594372",
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
  },
  {
    icon: <Leaf />,
    title: "Cinnamon Leaf Fungal Spread Predictor",
    owner: "Randeni R.P.R.M",
    studentId: "IT22578778",
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
  },
];

function App() {
  return (
    <main className="app">
      <section className="hero">
        <div className="badge">
          <Leaf size={18} />
          RP-25-26J-375
        </div>

        <h1>SMARTCINNAMON</h1>
        <p className="subtitle">
          A Multi-Modal Machine Learning and IoT Framework for Precision
          Cinnamon Cultivation
        </p>

        <p className="heroText">
          SMARTCINNAMON is an integrated AI, IoT, GIS and machine learning based
          platform designed to improve Ceylon cinnamon cultivation through soil
          monitoring, disease prediction, land optimization and post-harvest
          quality protection.
        </p>

        <div className="heroActions">
          <a href="#components">Explore Components</a>
          <a href="#architecture" className="secondary">
            View Architecture
          </a>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>4</h2>
          <p>Research Components</p>
        </div>
        <div>
          <h2>AI + IoT</h2>
          <p>Core Technology</p>
        </div>
        <div>
          <h2>90%</h2>
          <p>Target Accuracy Range</p>
        </div>
        <div>
          <h2>Sri Lanka</h2>
          <p>Ceylon Cinnamon Focus</p>
        </div>
      </section>

      <section id="architecture" className="section">
        <h2>System Overview</h2>
        <p>
          The platform collects data from IoT sensors, mobile images, warehouse
          sensor nodes and satellite/drone imagery. Data is sent to cloud
          services, stored in MongoDB/Firebase, processed by ML models, and
          displayed through web and mobile dashboards.
        </p>

        <div className="flow">
          <div><Cpu /> Sensors / Images</div>
          <span>→</span>
          <div><Activity /> Cloud Processing</div>
          <span>→</span>
          <div><BarChart3 /> ML Analytics</div>
          <span>→</span>
          <div><ShieldCheck /> Alerts & Dashboard</div>
        </div>
      </section>

      <section id="components" className="section">
        <h2>Research Components</h2>

        <div className="grid">
          {components.map((item) => (
            <article className="card" key={item.title}>
              <div className="cardIcon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="owner">
                {item.owner} · {item.studentId}
              </p>
              <p>{item.description}</p>

              <h4>Key Features</h4>
              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <h4>Technologies</h4>
              <div className="tags">
                {item.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <p className="accuracy">{item.accuracy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section conclusion">
        <h2>Expected Impact</h2>
        <p>
          SMARTCINNAMON helps cinnamon farmers, estate managers and exporters
          reduce fertilizer waste, detect diseases early, improve land usage,
          protect warehouse quality and maintain export-grade cinnamon standards.
        </p>
      </section>
    </main>
  );
}

export default App;
