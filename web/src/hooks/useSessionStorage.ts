import React, { useState } from 'react';
import { monsterNameState } from '../lib/atoms';


export const useSessionStorage = (key: string, defaultValue: string) => {
	const [stored, setStored] = useState<string>(() => {
		try {
			const value = window.sessionStorage.getItem(key);
	
			if(value) {
				return JSON.parse(value);
			} else {
				window.sessionStorage.setItem(key, JSON.stringify(defaultValue));
				return defaultValue;
			}
		} catch(error) {
			console.log(error);
			return defaultValue;
		}
	});

	const setValue = (newValue: string) => {
		try {
			window.sessionStorage.setItem(key, JSON.stringify(newValue));
		} catch(err) {
			console.error(err);
		}

		return [stored, setValue];
	};
};