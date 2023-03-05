import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Statistic from './Statistic';
import Feedback from './Feedback';
import Notification from './Notification';
import Section from './Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        console.log('Помилка!');
    }
  };

  const total = good + neutral + bad;
  const positive = Math.floor((good / (good + neutral + bad)) * 100);

  return (
    <>
      <Section title="Please, leave fedback">
        <Feedback
          options={['good', 'neutral', 'bad']}
          onClick={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        )}
      </Section>
    </>
  );
}

App.propTypes = {
  handleFeedback: PropTypes.func,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.func,
};
