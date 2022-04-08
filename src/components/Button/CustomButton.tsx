import Button, { ButtonProps } from '@mui/material/Button'
import { FormGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const useButtonStyles = (fontColor: string, size: string) =>
  makeStyles({
    primary: {
      '&': {
        backgroundImage:
          'linear-gradient(264.12deg, #7381FC 9.33%, #086BDF 90.67%)',
        borderRadius: '2px',
        color: '#fff',
        fontFamily: 'PODIUMSharp-49',
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.1em'
      },
      '&:hover': {
        boxShadow: '0px 5px 15px rgba(40, 114, 232, 0.4)'
      },
      '&:active': {
        background: 'linear-gradient(264.12deg, #7381FC 9.33%, #086BDF 90.67%)'
      }
    },
    secondary: {
      '&': {
        borderColor: '#fff',
        borderRadius: '2px',
        color: '#fff',
        fontFamily: 'PODIUMSharp-49',
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.1em'
      },
      '&:hover': {}
    },
    text: {
      '&': {
        color: fontColor,
        fontFamily: 'PODIUMSharp-49',
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '0.1em'
      },
      '&:hover': {}
    },
    small: {
      '&': {
        padding: '7px'
      }
    },
    medium: {
      '&': {
        padding: '7px'
      }
    },
    large: {
      '&': {
        padding: '10px'
      }
    }
  })

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export type CustomButtonProps = ButtonProps<
  'button',
  {
    type: 'primary' | 'secondary' | 'text'
    label: string
    className?: string
    fontColor?: string
    onClick?: () => {}
    size?: string
  }
>

const CustomButton = ({
  type,
  label,
  className,
  fontColor,
  onClick,
  size,
  ...rest
}: CustomButtonProps) => {
  const classes = useButtonStyles(fontColor || '', size || '')()

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <Button
          className={`${classes[type]} ${classes[size || 'large']}`}
          onClick={() => {}}
          {...rest}
        >
          {label}
        </Button>
      </FormGroup>
    </ThemeProvider>
  )
}

export default CustomButton
