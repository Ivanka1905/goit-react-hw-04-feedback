import React, { useState, useEffect } from 'react';
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
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        console.log('Помилка!');
    }
  };

  const [total, setTotal] = useState(0);
  const [countPositiveFeed, setCountPositiveFeed] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setCountPositiveFeed(Math.floor((good / (good + neutral + bad)) * 100));
  }, [good, neutral, bad]);

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
            positivePercentage={countPositiveFeed}
          />
        )}
      </Section>
    </>
  );
}

App.propTypes = {
  handleFeedback: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  g: PropTypes.number,
  n: PropTypes.number,
  b: PropTypes.number,
  total: PropTypes.number,
  countPositiveFeed: PropTypes.func,
};
