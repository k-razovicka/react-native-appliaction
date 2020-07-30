import React from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Image} from 'react-native';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const SelectedItem: React.FC<{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <ScrollView contentContainerStyle={style.container}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <ScrollView horizontal={true}>
                            <Image style={style.selectedItemImage} source={require('../../../assets/selectedItem/SelectedItem.jpg')} />
                            <Image style={style.selectedItemImage} source={require('../../../assets/selectedItem/SelectedItem2.jpg')} />
                            <Image style={style.selectedItemImage} source={require('../../../assets/selectedItem/SelectedItem3.jpg')} />
                            <Image style={style.selectedItemImage} source={require('../../../assets/selectedItem/SelectedItem4.jpg')} />
                        </ScrollView>
                    </View>
                </View>
                <Stack.Screen name="SelectedItem" component={SelectedItem} />
            </ScrollView>

        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingTop: 80,
    },
    selectedItemImage: {
       marginLeft: 5, marginRight: 5, height: 400, width: 275 
    }
});