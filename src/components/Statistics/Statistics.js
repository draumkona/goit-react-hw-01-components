import React from "react";
import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

const Statistics = ({ data, title }) => {
    return (
        <section className={css.statistics}>
            {title ? <h2 className={css.title}>{title}</h2> : null}

            <ul className={css.statList}>
                {data.map(data => {
                    const randomColor = `#${Math.floor(Math.random() * 16777215)
                        .toString(16)
                        .padStart(6, 0)}`;
                    const statsStyle = {
                        backgroundColor: randomColor,
                    };

                    return (
                        <li key={data.id} className={css.item} style={statsStyle}>
                            <span className={css.label}>{data.label}</span>
                            <span className={css.percentage}>{data.percentage}%</span>
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
        }).isRequired,
    ).isRequired,
};

export default Statistics;