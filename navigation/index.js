//index.js
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabBar from './BottomTabBar' // 引入底部TAB栏
import ProductDetails from '../src/page/Product/Detail/index'; // =>产品详情页
import Scan from '../src/page/Mine/Scan/index'; // => 个人中心 扫一扫页面
const Stack = createStackNavigator();
  // stack路由配置
  export default function Navigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Navigation"} options={{headerShown:false}} component={BottomTabBar} />
            <Stack.Screen name={"ProductDetails"} component={ProductDetails} />
            <Stack.Screen name={"Scan"} component={Scan} />
        </Stack.Navigator>
    )
}