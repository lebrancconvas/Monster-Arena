import React from 'react';
import { useRecoilState } from 'recoil';
import { monsterNameState } from './lib/atoms';
import MonsterTitle from './components/MonsterTitle';
import { MonsterButton, WhiteFont } from './style/Button.style';
import { monsterList } from './data/monsterList';

const App: React.FC = () => {
  const [monsterName, setMonsterName] = useRecoilState(monsterNameState);

  const changeMonsterTitle = (monster: string) => {
    setMonsterName(monster);
  }

  return(
    <div>
      <MonsterTitle monsterTitle={monsterName} />
      {monsterList.map((monster) => {
        return(
          <MonsterButton onClick={() => changeMonsterTitle(`${monster}`)}>
            <WhiteFont>
              {monster}
            </WhiteFont>
          </MonsterButton>
        )
      })}
    </div>
  )
};

export default App;