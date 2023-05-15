import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from './../../utils/generateColor';

export const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {data.map(file => {
          const statsStyle = {
            backgroundColor: getRandomHexColor(),
          };
          return (
            <li key={file.id} className={css.item} style={statsStyle}>
              <span className={css.label}>{file.label}</span>
              <span className={css.percentage}>{file.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
