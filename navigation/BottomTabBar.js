 // BottomTabBar.js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/page/Home/index';
import Product from '../src/page/Product/index';
import ShoppingCart from '../src/page/ShoppingCart/index';
import Mine from '../src/page/Mine/index';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
export default function TabBar() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === 'Product') {
                        iconName = focused ? 'rocket' : 'rocket-outline';
                }else if (route.name === 'ShoppingCart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                }else if (route.name === 'Mine') {
                        iconName = focused ? 'person' : 'person-outline';
                }
        
                    // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                })}
            >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Product" component={Product} />
            <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
            <Tab.Screen name="Mine" component={Mine} />
        </Tab.Navigator>
    );
  }