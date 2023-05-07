export interface IOption {
  value: string;
  label: string;
}

export type TOptions = Array<IOption>;

export const towerOptions: TOptions = [
  { value: 'a', label: 'A' },
  { value: 'b', label: 'B' }
]
export const levelOptions: TOptions = [];
export const roomOptions: TOptions = [];


for (let i=3; i<28; i++) {
  const data = `${i}`;
  levelOptions.push({
    value: data,
    label: data,
  });
}

for (let i=1; i<11; i++) {
  const data = `${i}`;
  roomOptions.push({
    value: data,
    label: data,
  });
}


export const borderColor = '#b9bbbc';
export const borderHoverColor = '#0487a1';
export const grayColor = '#3c3c3c';