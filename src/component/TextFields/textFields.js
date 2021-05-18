import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function TextFields({Callback, ...props}) {

        const [type, setType] = useState({
            index: '',
            name: 'type',
        });

        const handleChange = (event) => {
            const name = event.target.name;
            setType({
                ...type,
                [name]: event.target.value,
            });
            Callback(type)
        };

    return (
        <form noValidate autoComplete="off">
            {(props.type === 'text' ?
                <div>
                    <TextField
                        label={props.label}
                    />
                </div> :
                <FormControl>
                    <InputLabel htmlFor="index-native-simple">Тип события</InputLabel>
                    <Select
                        native
                        value={type.index}
                        onChange={(event) => handleChange(event)}
                        inputProps={{
                            name: 'index',
                            id: 'index-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={0}>Праздничные дни</option>
                        <option value={1}>Мероприятия</option>
                        <option value={2}>Пометки / Другое</option>
                    </Select>
                </FormControl>
            )}
        </form>

    );
}