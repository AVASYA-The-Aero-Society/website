import React from 'react'

const ResearchPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="w-6 h-6 bg-black mr-4"></div>
        <h1 className="text-[102px] normal font-bold font-(family-name:Helvetica Compressed)">RESEARCH</h1>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {/* Aerospace and Aviation Companies */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Aerospace and Aviation Companies
          </h2>
          <ul className="list-none space-y-2">
            {[
              "Airbus",
              "Boeing",
              "Lockheed Martin",
              "Northrop Grumman",
              "Raytheon Technologies",
              "General Dynamics",
              "Bombardier",
              "Embraer",
            ].map((company, index) => (
              <li key={index} className="flex items-center">
                <span className="font-bold text-gray-700 w-6">{index + 1}.</span>
                {company}
              </li>
            ))}
          </ul>
        </div>

        {/* Space Technology Companies */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Space Technology Companies</h2>
          <ul className="list-none space-y-2">
            {[
              "SpaceX",
              "Blue Origin",
              "NASA",
              "Rocket Lab",
              "Astroscale",
              "Maxar Technologies",
              "Planet Labs",
              "Relativity Space",
            ].map((company, index) => (
              <li key={index} className="flex items-center">
                <span className="font-bold text-gray-700 w-6">{index + 1}.</span>
                {company}
              </li>
            ))}
          </ul>
        </div>

        {/* Supersonic and Innovation Aviation */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Supersonic and Innovation Aviation</h2>
          <ul className="list-none space-y-2">
            {["Boom Supersonic", "Vertical Aerospace"].map((company, index) => (
              <li key={index} className="flex items-center">
                <span className="font-bold text-gray-700 w-6">{index + 1}.</span>
                {company}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResearchPage