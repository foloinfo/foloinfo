
import {
  Text as NativeText,
} from 'react-native'

const Text = props => {

  const {
    children,
    size,
    link,
    style,
    ...rest
  } = props

  let {
    color='#000'
  } = props

  let accessibilityRole
  if(link) {
    color = '#5065a7'
    accessibilityRole = 'link'
  }

  let fontSize = 18

  if(size === 'sm') fontSize = 12
  if(size === 'lg') fontSize = 32

  return (
    <NativeText
      style={{
        color,
        fontSize,
        ...style
      }}
      accessibilityRole={accessibilityRole}
      {...rest}
    >
      {children}
    </NativeText>
  )

}

export default Text
