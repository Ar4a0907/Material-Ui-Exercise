import React from 'react';
import Button from '@material-ui/core/Button';


export default function OutlineButton({value, onClick}) {

    return (
            <Button variant="outlined" color="primary" onClick={onClick}>
                {value}
            </Button>
    );
}