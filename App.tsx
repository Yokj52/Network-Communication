import React from 'react';
import { Network, Server, Wifi, Globe, Shield, Database } from 'lucide-react';

interface ConceptCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ConceptCard: React.FC<ConceptCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 rounded-full mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

function App() {
  const concepts = [
    {
      icon: <Network className="w-6 h-6 text-blue-600" />,
      title: "Network Basics",
      description: "Learn about fundamental networking concepts, protocols, and how data travels across networks."
    },
    {
      icon: <Server className="w-6 h-6 text-blue-600" />,
      title: "Client-Server Model",
      description: "Understand how clients and servers communicate and the architecture of modern web applications."
    },
    {
      icon: <Wifi className="w-6 h-6 text-blue-600" />,
      title: "Wireless Networks",
      description: "Explore wireless networking technologies, standards, and best practices for secure connections."
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "Internet Protocols",
      description: "Deep dive into TCP/IP, HTTP, DNS, and other essential internet protocols."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Network Security",
      description: "Learn about network security principles, common threats, and protection measures."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: "Data Centers",
      description: "Understand how data centers operate and their role in modern networking."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Network Concepts Simplified
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your gateway to understanding modern networking technology through clear, 
            concise explanations and practical examples.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <ConceptCard
              key={index}
              icon={concept.icon}
              title={concept.title}
              description={concept.description}
            />
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <p>Start your networking journey today</p>
        </footer>
      </div>
    </div>
  );
}

export default App;