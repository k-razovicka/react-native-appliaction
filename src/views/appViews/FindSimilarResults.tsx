import React from 'react';
import { View, StyleSheet, StatusBar, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from '../../components';
import { AppNavigationProps } from '../../components/navigation/tabs/app/AppTabs';

const Stack = createStackNavigator();

export const FindSimilarResults: React.FC<AppNavigationProps<any>> = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={style.container}>
                <View style={style.imageContainer} >
                    <Image source={require('../../../assets/Search.png')} />
                </View>
                <View style={{ justifyContent: 'space-evenly' }}>
                    <Text style={style.text}>Finding similar results...</Text>
                </View>
            </View>
            <Button title="Go to another page"  onPress={() => navigation.navigate("SelectedItem")}/>
            <Stack.Screen name="FindSimilarResults" component={FindSimilarResults} />
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#F5F5F5',
        fontSize: 34,
        fontWeight: '800',
        textAlign: 'center'
    },
    imageContainer: {
        marginBottom: 20
    }
});
