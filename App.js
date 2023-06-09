import '@azure/core-asynciterator-polyfill'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
	return (
		<NavigationContainer>
			<RootNavigator />
			<StatusBar style='auto' />
		</NavigationContainer>
	);
}

export default withAuthenticator(App);
