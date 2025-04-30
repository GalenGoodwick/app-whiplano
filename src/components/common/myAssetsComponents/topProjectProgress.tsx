import React from 'react';

const projects = [
  { name: 'Light on bone', value: '$388.23', trend: '0.89%', color: 'blue' },
  { name: 'Jack Scene', value: '$324.23', trend: '0.89%', color: 'pink' },
  { name: 'SIMILE', value: '$234.23', trend: '0.89%', color: 'blue' },
  { name: 'Mouse', value: '$12.23', trend: '0.89%', color: 'pink' },
  { name: 'Keyboard', value: '$8.23', trend: '0.89%', color: 'blue' },
];

export default function TopProjectsProgress() {
  return (
    <div className="bg-white p-6 rounded-2xl mt-4 shadow-md border-2 border-gray-200 w-full ">
      <h2 className="text-xl font-semibold text-gray-900">Top 5 Project progress</h2>
      <p className="text-xs text-gray-500 mb-6">Based on trends</p>

      <div>
        {projects.map((project, index) => (
          <div key={index} className="flex items-start justify-between py-2 border-b last:border-0">
            {/* Project Color Dot */}
            <div className={`w-3 h-3 rounded-full bg-${project.color}-500`} />
            <span className="text-sm font-sm justify-start">{project.name}</span>
            <span className="text-md font-medium">{project.value}</span>
            <span className="text-green-500">{`↑ ${project.trend}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
