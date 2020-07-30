import React, { FC } from 'react';
import storybook from './storybook';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from './src/views/utilityViews/SplashScreen';
import OnboardingStack from './src/components/navigation/stack/onboarding/OnboardingStack';
import { NavigationContainer } from '@react-navigation/native';
import AppTabs from './src/components/navigation/tabs/app/AppTabs';

const IS_STORYBOOK = false;

export const AuthContext = React.createContext(null);

const App: FC = () => {
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
        },
    );

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {}

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
        [],
    );

    return (
        <AuthContext.Provider value={authContext}>
             <NavigationContainer>
            {state.isLoading ? (
            <SplashScreen />
          ) : state.userToken == null ? (
            <OnboardingStack />
          ) : (
            <AppTabs />
          )}
          </NavigationContainer>
        </AuthContext.Provider>
    );
};

export default IS_STORYBOOK ? storybook : App;