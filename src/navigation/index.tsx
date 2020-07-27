import React, { FC, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../../App';
import OnboardingStack from './stack/onboarding/OnboardingStack';
import AppTabs from './tabs/app/AppTabs';

const Navigation: FC = () => {
    const { userToken } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {userToken ? <AppTabs /> : <OnboardingStack />}
        </NavigationContainer>
    );
};

export default Navigation;
