import { FormEvent, useState } from 'react';
import { IOption, levelOptions, roomOptions, towerOptions } from '../constants';

import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import 'react-datepicker/dist/react-datepicker.css';
import { filterPassedTime } from '../utils/filterPassedTime';
import CustomSelect from './CustimSelect';
import format from 'date-fns/format';
import Modal from './Modal';


const Form = () => {

  const [tower, setTower] = useState<IOption | null>(null);
  const [level, setLevel] = useState<IOption | null>(null);
  const [room, setRoom] = useState<IOption | null>(null);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [commentValue, setCommentValue] = useState('');

  const [modalOpen, setModalOpen] = useState(false);



  const onDateChange = (date: Date) => {
    setStartDate(date);
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      'Башня': tower?.value,
      'Этаж': level?.value,
      'Номер переговорной': room?.value,
      'Дата': startDate ? format(startDate, 'd MMMM yyyy', {locale: ru}) + 'г.' : '',
      'Время': startDate ? format(startDate, 'H:mm', {locale: ru}) : '',
      'Комментарий': commentValue
    });
    reset();
    setModalOpen(true);
  }

  const reset = () => {
    setTower(null);
    setLevel(null);
    setRoom(null);
    setStartDate(null);
    setCommentValue('');
  }

  const onReset = (e: FormEvent) => {
    e.preventDefault();
    reset();
  }

  const isWeekday = (date: Date) => {
    const day = new Date(date).getDay();
    return day !== 0;
  };

  const checkAllFields = () => {
    return [tower, level, room, startDate].every(el => el !== null);
  }

  const checkForReset = () => {
    return [tower, level, room, startDate].some(el => el !== null) || commentValue.length ? true : false;
  }


  return ( 
    <>
      <form className='form' onSubmit={onSubmit}>
        <label className='form__label'>
          Выберите башню: 
          <CustomSelect defaultValue={tower} placeholder='Башня' options={towerOptions} func={setTower} />
        </label>
        <label className='form__label'>
          Выберите этаж: 
          <CustomSelect defaultValue={level} placeholder='Этаж' options={levelOptions} func={setLevel} />
        </label>
        <label className='form__label'>
          Выберите комнату: 
          <CustomSelect defaultValue={room} placeholder='Номер комнаты' options={roomOptions} func={setRoom} />
        </label>
        <label className='form__label form__label_date'>
          Выберите дату и время: 
          <DatePicker 
            dayClassName={(date) =>
              'random'
            }
            selected={startDate} 
            onChange={onDateChange} 
            dateFormat='d MMMM yyyy H:mm'
            minDate={new Date()} 
            locale={ru}
            filterDate={isWeekday}
            showTimeSelect
            filterTime={filterPassedTime}
            timeIntervals={60}
            timeFormat='H:mm'
            timeCaption='Время'
            placeholderText='Дата и время'
            onKeyDown={(e) => {
              e.preventDefault();
          }}
          calendarClassName='rasta-stripes'
          />
          
        </label>
        <label className='form__label form__label_textarea'>
          Ваш комментарий: 
          <textarea rows={4} placeholder='Комментарий' value={commentValue} onChange={(e => setCommentValue(e.target.value))}></textarea>
        </label>
        <button disabled={checkAllFields() ? undefined : true} className='animated-btn form__btn form__btn_submit' type='submit'>Отправить</button>
        <button disabled={checkForReset() ? undefined : true} className='animated-btn form__btn form__btn_reset' type='reset' onClick={onReset}>Очистить</button>

      </form>
      { modalOpen &&
        <Modal onClose={() => {setModalOpen(false)}}>
          <h2>Данные успешно сохранены и отправлены</h2>
          <p>с результатом можете ознакомиться в консоли</p>
          <button className='form__btn form__btn_submit' onClick={(e) => {
            e.preventDefault()
            setModalOpen(false)
          }}>Закрыть</button>
        </Modal>
      }
    </>
   );
}
 
export default Form;