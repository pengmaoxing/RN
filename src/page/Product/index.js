import { Text, View, Button } from "react-native";
const  Product = ({ navigation })=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Product Screen</Text>
        <Button
        title="Go detail"
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          navigation.navigate('ProductDetails');
        }}
      />
      </View>
    );
  }
  export default Product