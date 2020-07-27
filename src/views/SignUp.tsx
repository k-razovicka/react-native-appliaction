import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Text, Alert, Image, Linking } from 'react-native';
import { Input, Button, Footer, Header } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const SignUp: React.FC<{ navigation: StackNavigationProp<any> }> = ({navigation}) => {
    return (
        <>
            {/* StatusBar uz ios nestrada */}
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={style.container}>
                <View style={{ flex: 1 }}>
                    <Header title='Sign Up'/>
                </View>
                <View style={style.inputContainer}>
                    <Input label="Name" />
                    <Input label="Email" />
                    <Input label="Password" />
                    <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                    <Text style={style.text}>Already have an account? <Image source={require('../../assets/Vector.png')} />
                    </Text>
                    </TouchableOpacity>
                    <Button title="Sign Up" onPress={() => navigation.navigate('Categories')}/>
                </View>
                <View style={{ flex: 2, justifyContent: 'flex-end' }}>
                    <Footer title='Or sign up with social account'/>
                </View>
            </ScrollView>
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
