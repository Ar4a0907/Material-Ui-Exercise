import React from 'react';
import Modal from '@material-ui/core/Modal';
import OutlineButton from "../Button/button";
import {useModalStyles} from "./modal.styles";


export default function SimpleModal() {
    const classes = useModalStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className={classes.paper}>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <OutlineButton value='Сохранить'/>
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