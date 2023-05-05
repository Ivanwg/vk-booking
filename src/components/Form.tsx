import Select, { SingleValue } from 'react-select'
import { IOption, levelOptions, roomOptions, towerOptions } from '../constants';
import { FormEvent, useState } from 'react';


const Form = () => {

  const [tower, setTower] = useState<IOption | null>(null);
  const [level, setLevel] = useState<IOption | null>(null);
  const [room, setRoom] = useState<IOption | null>(null);

  const onChange = (newValue: SingleValue<IOption | null>, func: React.Dispatch<React.SetStateAction<IOption | null>>) => {
    console.log(newValue);
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  }


  return ( 
    <form className='form' onSubmit={onSubmit}>
      <label>
        Выберите башню: 
        <Select defaultValue={tower} placeholder='Башня' options={towerOptions} onChange={(newValue) => onChange(newValue, setTower)} />
      </label>
      <label>
        Выберите этаж: 
        <Select defaultValue={level} placeholder='Этаж' options={levelOptions} onChange={(newValue) => onChange(newValue, setLevel)} />
      </label>
      <label>
        Выберите комнату: 
        <Select defaultValue={room} placeholder='Номер комнаты' options={roomOptions} onChange={(newValue) => onChange(newValue, setRoom)} />
      </label>
      <label>

      </label>
      <label>

      </label>

      <button className='animated-btn form__btn form__btn_submit' type='submit'>Отправить</button>
      <button className='animated-btn form__btn form__btn_reset' type='reset'>Очистить</button>

    </form>
   );
}
 
export default Form;