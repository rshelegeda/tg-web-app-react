import React from 'react';
import Button from "../Button/Button";
import { useTelegram } from '../../hooks/useTelegram';


const Header = () => {
    const {tg, user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            
        </div>
    );
}

export default Header;
