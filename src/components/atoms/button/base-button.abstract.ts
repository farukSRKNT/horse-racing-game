export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  type?: ButtonType
  disabled?: boolean
}
