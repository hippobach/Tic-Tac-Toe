import { useState } from 'react';
import styles from './Player.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  let playerName = <span className={cx('player-name')}>{name}</span>;
  if (isEditing) {
    playerName = <input type="text" required value={name} />;
  }

  return (
    <li>
      <span className={cx('player')}>
        {playerName}
        <span className={cx('player-symbol')}>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
