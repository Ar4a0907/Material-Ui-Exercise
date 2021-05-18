import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useDatePickerStyles = makeStyles(() =>
    createStyles({
        root: {
            width: '300',
            position: 'relative',
            height: '100%',
            marginBottom: 48,
        }
    })
)