import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Text, Alert } from 'react-native';
import { Input, Button, Header } from '../components';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const ForgotPassword: React.FC<{ navigation: StackNavigationProp<any> }> = ({navigation}) => {
    return (
        <>
            {/* StatusBar uz ios normali nestrada */}
                <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={style.container}>
                <View >
                    <Header title="Forgot Password"/>
                </View>
                <View style={{ justifyContent: 'space-evenly' }}>
                    <Text style={style.text}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
                    <Input label="Email" />
                    <View style={style.margin}></View>
                    <Button title="send" onPress={() => Alert.alert('Password sent')} />
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
        color: '#F7F7F7',
        marginTop: 100,
        marginBottom: 30
    },
    margin: {
        marginBottom: 30
    }
});
