import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formattedTime = () => {
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formattedDate = () => {
    const day = String(time.getDate()).padStart(2, '0');
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const year = time.getFullYear();
    
    // Get day name in Arabic
    const dayNamesArabic = [
      'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'
    ];
    const dayIndex = time.getDay();
    const dayNameArabic = dayNamesArabic[dayIndex];

    return `${dayNameArabic}, ${day}/${month}/${year}`;
  };

  return (
    <div className="w-fit dark:text-white">
      <div className="font-bold text-xl">{formattedTime()}</div>
      <div className="text-sm">{formattedDate()}</div>
    </div>
  );
};

export default Clock;
