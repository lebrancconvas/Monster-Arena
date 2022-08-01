import React from 'react';
import { useRecoilState } from 'recoil';
import { monsterNameState } from './lib/atoms';
import MonsterTitle from './components/MonsterTitle';

const App: React.FC = () => {
  const [monsterName, setMonsterName] = useRecoilState(monsterNameState);

  const changeMonsterTitle = (monster: string) => {
    setMonsterName(monster);
  }

  return(
    <div>
      <MonsterTitle monsterTitle={monsterName} />
      <button onClick={() => changeMonsterTitle("Derek")}>
        Change Name
      </button>
    </div>
  )
};

export default App;