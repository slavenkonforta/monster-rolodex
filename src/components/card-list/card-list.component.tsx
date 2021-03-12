import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';
import { Monster } from '../../App';

interface Props {
  monsters: Monster[];
}

export const CardList: React.FC<Props> = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
