import React from 'react';
import Levels from './Levels';

const ExpBar = ({ userExperience }) => {
  const userLevel = Levels.find(level => level.experience > userExperience)?.level ?? 1;
  const currentLevel = Levels[userLevel - 1];
  const nextLevel = Levels[userLevel];
  const levelProgress = (userExperience - currentLevel.experience) / (nextLevel.experience - currentLevel.experience);
  const progress = (levelProgress) * 100;

  return (
    <div className='flex items-center space-x-2 mr-2'>
      <img src={"icon"} alt='Level icon' className='w-5 h-5' />
      <span className='text-xs font-semibold'>{`Level ${userLevel}/99`}</span>

      <div className="bg-purple-900 h-4 flex-grow relative border">
        <div
          className="bg-purple-600 h-4 absolute left-0"
          style={{ width: `${progress}%` }}
        />
        <span className="absolute left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white">
          {(progress).toFixed(1)}%
        </span>
      </div>
    </div>
  );
};

export default ExpBar;
