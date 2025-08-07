import React, { useState, useEffect } from 'react';

const About = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    stores: 0,
    itemsFixed: 0,
    professionals: 0,
    locations: 0
  });

  const [skills, setSkills] = useState({
    engraving: 0,
    repair: 0,
    resizing: 0,
    maintenance: 0
  });

  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const members = [
      {
        name: "David Perkins",
        role: "Repair Master",
        image: "https://via.placeholder.com/300x400/333/ccc?text=David+Perkins"
      },
      {
        name: "Arnold Stevens",
        role: "Jewelry Designer",
        image: "https://via.placeholder.com/300x400/333/ccc?text=Arnold+Stevens"
      },
      {
        name: "Mike Peterson",
        role: "Repair Master",
        image: "https://via.placeholder.com/300x400/333/ccc?text=Mike+Peterson"
      },
      {
        name: "James Collins",
        role: "Jewelry Master",
        image: "https://via.placeholder.com/300x400/333/ccc?text=James+Collins"
      }
    ];
    setTeamMembers(members);

    const animateCounters = () => {
      const targetCounters = {
        clients: 1500,
        stores: 25,
        itemsFixed: 5000,
        professionals: 50,
        locations: 15
      };

      const targetSkills = {
        engraving: 60,
        repair: 90,
        resizing: 40,
        maintenance: 80
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const counterInterval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          clients: Math.floor(targetCounters.clients * progress),
          stores: Math.floor(targetCounters.stores * progress),
          itemsFixed: Math.floor(targetCounters.itemsFixed * progress),
          professionals: Math.floor(targetCounters.professionals * progress),
          locations: Math.floor(targetCounters.locations * progress)
        });

        setSkills({
          engraving: Math.floor(targetSkills.engraving * progress),
          repair: Math.floor(targetSkills.repair * progress),
          resizing: Math.floor(targetSkills.resizing * progress),
          maintenance: Math.floor(targetSkills.maintenance * progress)
        });

        if (currentStep >= steps) {
          clearInterval(counterInterval);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const statsData = [
    { key: 'clients', label: 'Clients', value: counters.clients },
    { key: 'stores', label: 'Stores', value: counters.stores },
    { key: 'itemsFixed', label: 'Items Fixed', value: counters.itemsFixed },
    { key: 'professionals', label: 'Professionals', value: counters.professionals },
    { key: 'locations', label: 'Locations', value: counters.locations }
  ];

  const skillsData = [
    { key: 'engraving', label: 'Engraving', value: skills.engraving },
    { key: 'repair', label: 'Repair', value: skills.repair },
    { key: 'resizing', label: 'Resizing', value: skills.resizing },
    { key: 'maintenance', label: 'Maintenance', value: skills.maintenance }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Reprizo Is the Repair Service You Can Trust</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
            Reprizo is a family-owned professional watch and jewelry repair store chain located in New York. We are experts in fixing and repairing watches from world-renowned brands including Rolex, Breitling, Bell & Ross, and many other brands.
          </p>
          <span className="text-yellow-400 font-semibold">David Wiye</span>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl text-yellow-400 font-bold mb-2">{stat.value.toLocaleString()}</h3>
              <p className="uppercase tracking-wide text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Perfect Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="text-left max-w-2xl mx-auto">
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span>{skill.label}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">The Best of Professionals</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white shadow-lg rounded overflow-hidden hover:shadow-xl transition">
                <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-lg text-gray-800">{member.name}</h4>
                  <p className="text-yellow-500 uppercase text-sm font-medium tracking-wide">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Philosophy: Love What You Do</h2>
          <p className="text-gray-300 mb-8">
            Reprizo is a family-owned professional watch and jewelry repair store chain located in New York. We offer a wide range of jewelry services and always provide a guarantee for what we do.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-3 rounded font-semibold uppercase tracking-wider shadow hover:from-yellow-500 hover:to-yellow-600 transition">
            Go To Shop
          </button>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-8">How It Begins</h2>
          <div className="bg-gray-100 p-8 rounded border-l-4 border-yellow-400">
            <p className="text-gray-800 italic">
              "Reprizo recently repaired my Panerai. My watch was fixed within 2-3 days and I was informed at every step of the way. The price was fair and the service excellent. I have no problems recommending this company."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
