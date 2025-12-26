import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Solomon Eshun (Solo Shun) | AI/ML Engineer, MLOps Specialist & Quantitative Finance Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Primary Meta Tags */}
        <meta name="title" content="Solomon Eshun (Solo Shun) | AI/ML Engineer, MLOps Specialist & Quantitative Finance Developer" />
        <meta name="description" content="Solomon Eshun (Solo Shun) - AI/ML Engineer specializing in autonomous AI agents, production MLOps, algorithmic trading, and quantitative finance. Building intelligent systems for finance, and enterprise. Expert in PyTorch, TensorFlow, time-series forecasting, and algorithmic trading strategies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Solomon Eshun" />
        
        {/* Comprehensive Keywords */}
        <meta name="keywords" content="Solomon Eshun, Solo Shun, AI Engineer, Machine Learning Engineer, MLOps Engineer, Deep Learning, PyTorch, TensorFlow, Autonomous AI Agents, LLMs, Agentic AI, Computer Vision, YOLO, Bioinformatics, Drug Discovery, Medical AI, Time-Series Forecasting, Algorithmic Trading, Quantitative Finance, Forex Trading, MQL5, MetaTrader, TradingView, Python, Docker, FastAPI, Celery, RabbitMQ, Redis, React, Next.js, Transformers, LSTM, XGBoost, Temporal Fusion Transformers, MLOps, DevOps, CI/CD, Kubernetes, AWS, DigitalOcean, Research Publications, MinoHealth AI, EnBW, Noeud, Ghana AI, African AI Engineer, Moremi AI Agent, DeepResearch Bench, Production ML Systems, Enterprise ML, Distributed Systems, Real-time ML Pipelines, Financial Forecasting" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solomoneshun.vercel.app/" />
        <meta property="og:site_name" content="Solomon Eshun Portfolio" />
        <meta property="og:title" content="Solomon Eshun (Solo Shun) | AI/ML Engineer, MLOps Specialist & Quantitative Finance Developer" />
        <meta property="og:description" content="AI/ML Engineer building autonomous research agents, production ML systems, and algorithmic trading strategies. Co-authored 4 research publications. Expertise in PyTorch, MLOps, quantitative finance, and agentic AI systems." />
        <meta property="og:image" content="https://solomoneshun.vercel.app/screenshot.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content="https://solomoneshun.vercel.app/" />
        <meta name="twitter:title" content="Solomon Eshun (Solo Shun) | AI/ML Engineer, MLOps & Quantitative Finance"/>
        <meta name="twitter:description" content="AI/ML Engineer specializing in autonomous agents, production MLOps, and algorithmic trading. Building intelligent systems for healthcare and finance. Expert in PyTorch, time-series forecasting, and quantitative strategies."/>
        <meta name="twitter:image" content="https://solomoneshun.vercel.app/screenshot.png"/>
        <meta name="twitter:creator" content="@soloshun" />

        {/* Advanced SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="GH" />
        <meta name="geo.placename" content="Accra, Ghana" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Solomon Eshun",
              "alternateName": "Solo Shun",
              "url": "https://solomoneshun.vercel.app",
              "image": "https://solomoneshun.vercel.app/ss.jpeg",
              "jobTitle": "AI/ML Engineer & MLOps Specialist",
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "EnBW Energie Baden-Württemberg AG"
                },
                {
                  "@type": "Organization",
                  "name": "Noeud"
                }
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "University of Cape Coast"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "MLOps",
                "Deep Learning",
                "Algorithmic Trading",
                "Quantitative Finance",
                "Computer Vision",
                "Bioinformatics",
                "Drug Discovery",
                "Time-Series Forecasting",
                "Autonomous AI Agents",
                "Production ML Systems"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/solomon-eshun-788568317",
                "https://github.com/soloeinsteinmit",
                "https://medium.com/@soloshun"
              ]
            })
          }}
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://solomoneshun.vercel.app/" />
        
        {/* Alternate Languages */}
        <link rel="alternate" hrefLang="en" href="https://solomoneshun.vercel.app/" />
        <link rel="alternate" hrefLang="x-default" href="https://solomoneshun.vercel.app/" />
      </Head>
      <Home />
    </>
  );
}
