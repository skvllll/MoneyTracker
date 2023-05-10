import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Gap } from '../../Atoms'
import { IconBack } from '../../../Assets'

const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && 
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      }
      <Gap width={26}/>
      <Text style={styles.huruf}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingVertical: 38,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    huruf: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    back: {
      padding: 10,

    }
})