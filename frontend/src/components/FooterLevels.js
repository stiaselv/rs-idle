import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import ExpBar from './ExpBar';
import { experienceGain, setSkills } from '../redux/actions';

const FooterLevels = ({ skills }) => {
  const dispatch = useDispatch();
  const currentItemGain = useSelector((state) => state.currentItemGain);

  const getExperience = (index) => {
    return skills[index].experience;
  };

  useEffect(() => {
    if (currentItemGain && currentItemGain.skill && currentItemGain.prodExp && currentItemGain.prodTimer) {
      const interval = setInterval(() => {
        dispatch(experienceGain(currentItemGain.skill, currentItemGain.prodExp, currentItemGain.prodTimer));

        const updatedExperience = skills.map((skill) => {
          if (skill.name === currentItemGain.skill) {
            return { ...skill, experience: skill.experience + currentItemGain.prodExp };
          } else {
            return skill;
          }
        });

        dispatch(setSkills(updatedExperience));
      }, currentItemGain.prodTimer * 1000);

      return () => clearInterval(interval);
    }
  }, [currentItemGain, dispatch, skills]);

  const expBars = skills.map((skill, index) => {
    const userExperience = getExperience(index);
    return <ExpBar key={index} userExperience={userExperience} />;
  });

  return (
    <div className="ml-5 space-y-3 overflow-y-scroll h-96 mt-4">
      {expBars}
    </div>
  );
};

const mapStateToProps = (state) => ({
  skills: state.skills,
});

export default connect(mapStateToProps)(FooterLevels);
