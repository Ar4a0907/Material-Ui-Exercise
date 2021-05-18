import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Tabs from '../Tabs/tabs';
import { useDatePickerStyles } from './myApp.styles';
import SimpleModal from "../Modal/modal";



export default function MyApp() {
    const classes = useDatePickerStyles()

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <div className={classes.root}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd.MM.yyyy"
                        margin="normal"
                        id="date-picker"
                        label="Выбирите дату"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <div>
                        <SimpleModal/>
                    </div>
                </div>
                <Tabs/>
            </Grid>
        </MuiPickersUtilsProvider>
    );
}