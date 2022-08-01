import React from 'react';

type Props = {
	monsterTitle: string;
}

const MonsterTitle: React.FC<Props> = ({ monsterTitle }) => {
	return(
		<div>
			<h1>{monsterTitle}</h1>
		</div>
	)
};

export default MonsterTitle;