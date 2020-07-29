import React, { useContext } from 'react';
import { View, StyleSheet, StatusBar, Text, Image } from 'react-native';
import { Input, Button, Footer, Header, SecureInput } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RegistrationNavProps } from '../../components/navigation/stack/onboarding/OnboardingStack';
import { AuthContext } from '../../../App';

export const LogIn: React.FC<RegistrationNavProps<'LogIn'>> = ({ navigation }) => {
    const { signIn } = useContext(AuthContext);

    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={style.container}>
                <View style={{ flex: 1 }}>
                    <Header title="Login" />
                </View>
                <View style={style.inputContainer}>
                    <Input label="Email" />
                    <SecureInput label="Password" />
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={style.text}>
                            Forgot you password? <Image source={require('../../../assets/Vector.png')} />
                        </Text>
                    </TouchableOpacity>
                    <Button title="Login" onPress={() => signIn()} />
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                    <Footer title="Or login with social account" />
                </View>
            </View>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
    },
    text: {
        color: '#ffffff',
        textAlign: 'right',
    },
    inputContainer: {
        flex: 3,
        justifyContent: 'space-evenly',
    },
});
