import PropTypes from 'prop-types';
import { ButtonContainer, Button } from './Feedback.styled';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {
        options.map(option => {
        return <Button type="button" key={option} name={option} onClick={onLeaveFeedback}>
        {option}
      </Button>
        })
      }
    </ButtonContainer>
  );
};

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
