import React from 'react';
import Modal from '@material-ui/core/Modal';
import OutlineButton from "../Button/button";
import {useModalStyles} from "./modal.styles";
import TextFields from '../TextFields/textFields';


export default function SimpleModal() {
    const classes = useModalStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleTypeChange = (childData) => {
        console.log(childData)
    }

    const body = (
        <div className={classes.paper}>
            <div className={classes.inputs}>
                <TextFields type='text' label='Название события'/>
                <TextFields type='select' label='Тип события' Callback={handleTypeChange}/>
                {handleTypeChange()}
            </div>
            <div className={classes.buttons}>
                <OutlineButton value='Сохранить'/>
                <OutlineButton value='Отмена' color='secondary' onClick={handleClose}/>
            </div>

        </div>
    );

    return (
        <div>
            <OutlineButton value='Добавить' onClick={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}