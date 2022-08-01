import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { monsterNameState } from '../lib/atoms';
import MonsterTitle from '../components/MonsterTitle';
import { MonsterButton, WhiteFont, SubmitButton } from '../style/Button.style';
import { monsterList } from '../data/monsterList';
import { Link } from 'react-router-dom';

const MonsterSelect: React.FC = () => {
  const [monsterName, setMonsterName] = useRecoilState(monsterNameState);

  const changeMonsterTitle = (monster: string) => {
    window.localStorage.setItem('MONSTER_STORAGE', JSON.stringify(monster)); 
    setMonsterName(monster);
  }

  useEffect(() => {
    window.localStorage.clear();
  }, []); 

  return(
    <div>
      <MonsterTitle monsterTitle={monsterName} />
      {monsterList.map((monster, index: number) => {
        return(
          <MonsterButton onClick={() => changeMonsterTitle(`${monster}`)} key={index}> 
            <WhiteFont>
              {monster}
            </WhiteFont>
          </MonsterButton>
        )
      })}
			<Link to="/arena"> 
				<SubmitButton>
					Select 
				</SubmitButton>
			</Link>
    </div>
  )
};

export default MonsterSelect;