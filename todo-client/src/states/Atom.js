import { atom, useRecoilState } from 'recoil';

// 할 일 목록을 위한 atom 정의
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});
