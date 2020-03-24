import React from 'react';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = date => {

    const { setOptionValue } = this.props;

    this.setState({
      startDate: date,
    });
    setOptionValue(date);
  };

  render() {
    return (
      <DatePicker
        className={styles.date}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
