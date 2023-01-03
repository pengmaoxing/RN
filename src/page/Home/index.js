import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
 export default ()=>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Icon name="home" size={30} color="#900" />
      </View>
    );
  }