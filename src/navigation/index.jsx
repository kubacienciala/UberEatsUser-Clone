import { HomeScreen } from '../screens/HomeScreen/HomeScreen';
import { RestaurantDetailsScreen } from '../screens/RestaurantDetailsScreen/RestaurantDetailsScreen';
import { DishDetailsScreen } from '../screens/DishDetailsScreen/DishDetailsScreen';
import { BasketScreen } from '../screens/BasketScreen/BasketScreen';
import { OrdersScreen } from '../screens/OrdersScreen/OrdersScreen';
import { OrderDetails } from '../screens/OrderDetails/OrderDetails';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	Foundation,
	FontAwesome5,
	MaterialCommunityIcons,
} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='HomeTabs' component={HomeTabs} />
		</Stack.Navigator>
	);
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name='Home'
				component={HomeStackNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<Foundation name='home' size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Orders'
				component={OrderStackNavigator}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name='clipboard-list-outline'
							size={24}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='user-alt' size={24} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name='Restaurants' component={HomeScreen} />
			<HomeStack.Screen
				name='Restaurant'
				component={RestaurantDetailsScreen}
				options={{ headerShown: false }}
			/>
			<HomeStack.Screen name='Dish' component={DishDetailsScreen} />
			<HomeStack.Screen name='Basket' component={BasketScreen} />
		</HomeStack.Navigator>
	);
};

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
	return (
		<OrdersStack.Navigator>
			<OrdersStack.Screen name='Orders' component={OrdersScreen} />
			<OrdersStack.Screen name='Order' component={OrderDetails} />
		</OrdersStack.Navigator>
	);
};

export default RootNavigator;
