import React from 'react';

import { useTelegram } from '../../hooks/useTelegram';
import Button from 'react-bootstrap/esm/Button';


const Header = () => {
    
    const {tg, user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            HEADER
            <Button onClick={tg.close()}></Button>
        </div>
    );
}

export default Header;
