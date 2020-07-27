import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Text, Alert, Image, Linking } from 'react-native';
import { Input, Button, Footer, Header } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// interface Props {
//     isLoggedIn: false;
// }

const Stack = createStackNavigator();

export const LogIn: React.FC<{ navigation: StackNavigationProp<any> }> = ({navigation}) => {
    // const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
    return (
        <>
            {/* StatusBar uz ios normali nestrada */}
         
                    <StatusBar barStyle="light-content" />
                    <ScrollView contentContainerStyle={style.container}>
                        <View style={{ flex: 1 }}>
                            <Header title="Login"/>
                        </View>
                        <View style={style.inputContainer}>
                            <Input label="Email" />
                            <Input label="Password" />
                            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={style.text}>Forgot you password? <Image source={require('../../assets/Vector.png')} />
                            </Text>
                            </TouchableOpacity>
                            <Button title="Login" onPress={() => navigation.navigate('MainPage')} />
                        </View>
                        <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                            <Footer title="Or login with social account" />
                        </View>
                    </ScrollView>
                    <Stack.Screen name="LogIn" component={LogIn} />
    
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16
    },
    text: {
        color: '#ffffff',
        textAlign: 'right',
    },
    inputContainer: {
        flex: 3,
        justifyContent: 'space-evenly',
    }
});
