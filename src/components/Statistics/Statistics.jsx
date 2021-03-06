import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import { getRandomHexColor } from './getRandomColor';

export const Statistics = ({ title, stats }) => (
  <section className={style.statistics}>
    {title && <h2 className={style.title}>{title}</h2>}
    <ul className={style.statList}>
      {stats.map(({ label, percentage, id }) => (
        <li
          style={{ backgroundColor: getRandomHexColor() }}
          className={style.item}
          key={id}
        >
          <span>{label}</span>
          <span>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
