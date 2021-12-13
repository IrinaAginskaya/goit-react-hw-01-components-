import PropTypes from "prop-types";
import s from "./Statistics.module.css"

const Statistics = ({ title, stats }) => (<section className={s.section}>
    {title && <h2>{title}</h2>}

    <ul className={s.list}> {stats.map(({ id, label, percentage }) =>
    (<li key={id} className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>))}
    </ul>
  </section>
);



Statistics.defaultProps = {
  title: "",
  children: [],
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;