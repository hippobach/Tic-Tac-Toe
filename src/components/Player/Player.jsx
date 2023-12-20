import { useState } from 'react';
import styles from './Player.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  const handleInputChange = (e) => {
    setPlayerName(e.target.value);
  };
  let editablePlayerName = (
    <span className={cx('player-name')}>{playerName}</span>
  );
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleInputChange}
      />
    );
  }

  return (
    <li>
      <span className={cx('player')}>
        {editablePlayerName}
        <span className={cx('player-symbol')}>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
