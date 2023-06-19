import * as React from 'react'
import { 
    Text, 
    ScrollView, 
    StyleSheet, 
    Image, 
    useColorScheme,
    useWindowDimensions
} from 'react-native'
import { useDeviceOrientation } from '@react-native-community/hooks';


const WindowDimensions = () => {
    const { width, height, fontScale } = useWindowDimensions();
    const { orientation } = useDeviceOrientation();
    
    return (
        <ScrollView style={styles.container}>
            <Image
            style={styles.logo} 
            source={require("../img/littleLemonHeader.png")} 
            accessible={true}
            accessibilityLabel='Little Lemon Header'
            />
            <Text style={styles.title}> 
                Little Lemon, your local Mediterranean Bistro
            </Text>

            <Text style={styles.regular}>Window Dimensions</Text>
            <Text style={styles.regular}>Height: {height}</Text>
            <Text style={styles.regular}>Width: {width}</Text>
            <Text style={styles.regular}>Font Scale: {fontScale}</Text>
            {console.log('Orientation: ', orientation)}
            
            
        </ScrollView>
    )
}

export default WindowDimensions;

const styles = StyleSheet.create({
    logo: {
      height: 100,
      width: 300,
      resizeMode: 'contain'
    },
    container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#fff',
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    regular: {
      fontSize: 18,
      textAlign: 'center',
    },
  });