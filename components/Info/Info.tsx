import React from 'react';
import classes from './Info.module.css';

function Info({children}: {children: React.ReactNode}) {
    return (
        <div className={classes.info}>
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default Info;