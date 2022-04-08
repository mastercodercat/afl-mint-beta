import Button, { ButtonProps } from '@mui/material/Button'
import { FormGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const useButtonStyles = makeStyles({
  contained: {
    '&': {
      backgroundImage:
        'linear-gradient(264.12deg, #7381FC 9.33%, #086BDF 90.67%)',
      borderRadius: '2px',
      color: '#fff',
      fontFamily: 'PODIUMSharp-49',
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      padding: '10px'
    },
    '&:hover': {
      boxShadow: '0px 5px 15px rgba(40, 114, 232, 0.4)'
    },
    '&:active': {
      background: 'linear-gradient(264.12deg, #7381FC 9.33%, #086BDF 90.67%)'
    }
  },
  outlined: {
    '&': {
      borderColor: '#fff',
      borderRadius: '2px',
      color: '#fff',
      fontFamily: 'PODIUMSharp-49',
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      padding: '10px'
    },
    '&:hover': {}
  },
  text: {
    '&': {
      color: '#fff',
      fontFamily: 'PODIUMSharp-49',
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      padding: '10px'
    },
    '&:hover': {}
  }
})

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export type CustomButtonProps = Omit<ButtonProps, 'variant'> & {
  variant: 'contained' | 'outlined' | 'text'
  label: string
  className?: string
  fontColor?: string
  isDisabled?: boolean
  onClick?: () => {}
}

const CustomButton = ({
  variant,
  label,
  className,
  fontColor,
  onClick,
  ...rest
}: CustomButtonProps) => {
  const useButtonClasses = useButtonStyles()

  return (
    <ThemeProvider theme={theme}>
      <FormGroup>
        <Button
          variant={variant}
          className={useButtonClasses[variant]}
          {...rest}
        >
          {label}
        </Button>
      </FormGroup>
    </ThemeProvider>
  )
}

export default CustomButton
