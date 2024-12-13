import React from 'react';

const CardDataStats = ({ title, total, rate , background }) => {
  return (

    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-2" style={{ backgroundColor: background }}>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <div className="text-4xl font-bold text-white">{total}</div>
    <div className="text-sm text-white">{rate}</div>
  </div>
  );
};

export default CardDataStats;
