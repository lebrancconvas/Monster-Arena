import React from 'react';

type props = {
	monsterTitle: string;
}

const MonsterTitle: React.FC<props> = ({ monsterTitle }) => {
	return(
		<div>
			<h1>{monsterTitle}</h1>
		</div>
	)
};

export default MonsterTitle;