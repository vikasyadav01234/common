import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      
      const formatted = now.toLocaleString('en-US', options)
        .replace(',', '')
        .replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2');
      
      setDateTime(formatted);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-blue-50 p-3 rounded-lg shadow-sm">
      <div className="text-sm font-medium text-gray-800">
        <p className="mb-1">UTC Time:</p>
        <p className="text-blue-600">{dateTime}</p>
      </div>
      <div className="text-sm font-medium text-gray-800 mt-2">
        <p className="mb-1">User:</p>
        <p className="text-blue-600">vikasyadav01234</p>
      </div>
    </div>
  );
};

export default DateTime;