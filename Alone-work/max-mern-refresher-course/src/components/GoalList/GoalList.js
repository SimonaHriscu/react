import React from 'react';

const GoalList = (props) => {
  const propsArray = props.goals;
  return (
    <ul className="goal-list">
      {propsArray.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  );
};

export default GoalList;
