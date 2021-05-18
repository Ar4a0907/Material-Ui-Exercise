import { createStyles, makeStyles } from '@material-ui/core/styles'

export const useModalStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            top: '20vh',
            left: '25vw',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    })
)