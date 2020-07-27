import React, { FC } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

// eslint-disable-next-line react/prop-types
const MainLayout: FC = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MainLayout;
