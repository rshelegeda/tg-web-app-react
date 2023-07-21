import React, { useState } from 'react';
import './Form.css';
import { useEffect } from 'react';
import { useTelegram } from '../../hooks/useTelegram';


const Form = () => {

    const {tg} = useTelegram();
    const [name, setName] = useState('');
    
    useEffect(() => {
        tg.MainButton.setParams({
            text: 'ОТПРАВИТЬ ДАННЫЕ'
        })
    }, []);

    useEffect(() => {
        if(!name){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show()
        }

    }, [name]);
    
    
    const onChangeName = (e)=> {
        setName(e.target.value);
    };


    return (
        <div>
            FORM
            <h3>ВВЕДИТЕ ВАШИ ДАННЫЕ</h3>
            <input
            type='text'
            placeholder='Имя'
            onChange={onChangeName}
            ></input>
        </div>
    );
}

export default Form;
