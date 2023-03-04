import PropTypes from 'prop-types';
import { StatisticList, LiItem, LiItemB } from './Statistic.styled';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticList>
      <LiItem>Good: {good}</LiItem>
      <LiItem>Neutral: {neutral}</LiItem>
      <LiItem>Bad: {bad}</LiItem>
      <LiItemB>Total: {total}</LiItemB>
      <LiItemB>Positive feedback: {positivePercentage}% </LiItemB>
    </StatisticList>
  );
};

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistic;
