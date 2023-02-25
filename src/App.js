
import {
  View,
} from 'react-native'

import Text from './components/Text'

const App = ()=> {

  return (
    <View style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View>
        <Text size='lg'>folo.info</Text>
      </View>
      <View style={{
        margin: 30,
      }}>
        <Text size='sm' color='#777'>List of things</Text>

        <Text link href='https://blog.folo.info' style={{marginBottom: '0.5rem'}}>
          Blog
        </Text>

        <Text link href='https://keywordcounter.folo.info'>
          Keyword Counter
        </Text>

      </View>
    </View>
  )

}

export default App
