import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { monsterNameState } from '../lib/atoms';
import { SubmitButton } from '../style/Button.style';
import { Link } from 'react-router-dom';
import { useSessionStorage } from 'usehooks-ts'; 
import { monsterList } from '../data/monsterList';

const MonsterArena: React.FC = () => {
	const [monsterName, setMonsterName] = useRecoilState(monsterNameState);

	// Getter
	useEffect(() => {
		const data = window.localStorage.getItem('MONSTER_STORAGE');
		if(data !== null) setMonsterName(data.slice(1, -1)); 
	}, []);

	// Setter 
	// useEffect(() => {
	// 	window.localStorage.setItem('MONSTER_STORAGE', JSON.stringify(monsterName));
	// }, [monsterName]); 

	const ElementArena = () => {
		if(monsterName === 'Unknown') {
			return(
				<div>
					<header>
						<div>
							<h1>Can't Join the arena, Please Select the Monster</h1>
							<Link to="/">
								<SubmitButton>
									Back to Monster Select
								</SubmitButton>
							</Link>
						</div>
					</header>
				</div>
			)
		} else {
			return(
				<div>
					<header>
						<div>
							<h1>Monster Arena</h1>
						</div>
					</header>
					<section id="arena">
						<div>
							<h2>Player 1 (You): {monsterName}</h2> 
						</div>
						<div>
							<h2>Player 2 (CPU): {monsterList[Math.floor(Math.random() * monsterList.length)]}</h2>  
						</div>
						<div>
							<h3>Refresh to random new CPU's Character</h3>
						</div>
					</section>
				</div>
			)
		}
	};

	return(
		<div>
			{ElementArena()}
		</div>
	)
};

export default MonsterArena;