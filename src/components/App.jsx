import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistic from './Statistic';
import Feedback from './Feedback';
import Notification from './Notification';
import Section from './Section';

class App extends Component {
  state = {
    g: 0,
    n: 0,
    b: 0,
  };

  handleFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        this.setState(prevState => ({
          g: prevState.g + 1,
        }));
        break;

      case 'neutral':
        this.setState(prevState => ({
          n: prevState.n + 1,
        }));
        break;

      case 'bad':
        this.setState(prevState => ({
          b: prevState.b + 1,
        }));
        break;

      default:
        throw new Error('error');
    }
  };

  countTotalFeedback(a, b, c) {
    return a + b + c;
  }

  countPositiveFeedbackPercentage(g, n, b) {
    return Math.floor((g / (g + n + b)) * 100);
  }

  render() {
    const { g, n, b } = this.state;
    const {
      handleFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const total = countTotalFeedback(g, n, b);

    return (
      <>
        <Section title="Please, leave fedback">
          <Feedback
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={g}
              neutral={n}
              bad={b}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(g, n, b)}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;

App.propTypes = {
  handleFeedback: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  g: PropTypes.number,
  n: PropTypes.number,
  b: PropTypes.number,
  total: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.func,
};
