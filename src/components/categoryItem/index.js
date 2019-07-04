import React from 'react';
import PropTypes from 'prop-types';
import { generateRandomGradient } from '~/utils';
import styles from './styles.scss';

const CategoryItem = ({ category }) => {
  const { id, name, onPress } = category;
  const gradient = generateRandomGradient();

  return (
    <div className={styles['category-list-item-container']} style={{ background: gradient }}>
      <span className={styles['category-name']}>{name}</span>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

CategoryItem.defaultProps = {
  onPress: () => {},
};

export default CategoryItem;
