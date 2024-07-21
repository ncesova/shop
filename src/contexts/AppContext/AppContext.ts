import {createContext} from 'react';
import {Items} from '../../data/types';

const items = {} as Items[];

export const AppContext = createContext(items);
