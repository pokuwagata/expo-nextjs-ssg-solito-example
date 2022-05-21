import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

export function HomeScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: 'gray',
        }}
      >
        <Text
          style={{
            fontSize: 40,
            textAlign: 'center',
          }}
        >
          Header
        </Text>
      </View>
      {loading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#C0C0C0',
          }}
        >
          <Text style={{}}>skeleton</Text>
        </View>
      ) : (
        <View>
          <Text>コンテンツ</Text>
        </View>
      )}
    </View>
  )
}
