import React from 'react';
import { View, Text, TextInput } from 'react-native';
import storybook from './storybook';
import 'react-native-gesture-handler';
import { NavigationContainer, StackNavigationState } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { Button } from './src/components/Button';
import { SignUp } from './src/views/SignUp';
import { LogIn } from './src/views/LogIn';
import { ForgotPassword } from './src/views/ForgotPassword';
import AsyncStorage from '@react-native-community/async-storage';
import { MainPage } from './src/views/MainPage';
import { SummerSales } from './src/views/SummerSales';
import { Categories } from './src/views';
import { WomensTops } from './src/views/WomensTops';

const IS_STORYBOOK = false;

const AuthContext = React.createContext();

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function SignInScreen() {
  /**funkcija, kas atgriež SignUp skatu priekš Stack Navigator ar atsevišķu pogu, kura šajā scope'ā strādā.
   signIn tiek sasaistīts tālāk kodā ar async. Ja es signIn definētu SignUp komponentē, tad App.tsx failā netiktu
   saprasts, kas ir signIn. Atsevišķš Button ir tāpēc, ka SignUp komponentē vairs nesaprot navigation.navigate('..') 
   Jautājums - kā pareizi atgriezt SignUp komponenti?**/

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <SignUp />
      <Button title="Sign up" onPress={() => signIn()} />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.isLoading ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
          </Stack.Navigator>
        ) : state.userToken == null ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* ja es padodu šādi, tad parādās SignUp komponente, kur strādā atsevišķi padotā poga, 
              lai pārietu uz Main Screen. Strādā tāpēc, ka zin, ka tagad lietotājs ir "ielogojies" */}
            <Stack.Screen name="SignUp" component={SignInScreen} />

            {/* bet ja es padodu šādi, tad met erroru "console.error: 'The action 'NAVIGATE' with 
               payload {'name':'MainPage'} was not handled by any navigator. Do you have a screen name 'MainPage'?',
               jo MainPage pieder pie else skata, bet atpazīts tiek tikai if gadījums. vismaz es tā saprotu */}
            {/* <Stack.Screen name="SignUp" component={SignUp} /> */}

            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Navigator>
        ) : (
              <>
                <Tab.Navigator>
                  <Tab.Screen name="Home" component={MainPage} />
                  <Tab.Screen name="Sales" component={SummerSales} />
                  <Tab.Screen name="Categories" component={Categories} />
                  <Tab.Screen name="Women Tops" component={WomensTops} />
                </Tab.Navigator>
                {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="Women Tops" component={WomensTops} />
                </Stack.Navigator> */}
              </>
            )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default (IS_STORYBOOK ? storybook : App)