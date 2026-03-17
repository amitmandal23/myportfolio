import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: "Job Completion Rate", value: 95 },
    { label: "On Budget", value: 90 },
    { label: "On-Time Delivery", value: 97 },
    { label: "Repeat Hire Rate", value: 75 },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-6"
            >
              <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                {/* Circular Progress Background */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-800"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-blue-500"
                    initial={{ strokeDasharray: "351.86", strokeDashoffset: "351.86" }}
                    whileInView={{ strokeDashoffset: 351.86 - (351.86 * stat.value) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <span className="absolute text-3xl font-bold">{stat.value}%</span>
              </div>
              <h3 className="text-lg font-medium text-gray-400">{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
