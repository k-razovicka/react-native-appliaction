import React, { ReactNode } from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Arrow from '../../svg/Arrow';

interface ProfileCategoryProps {
    categoryTitle: string;
    categoryInfo: string;
    icon: ReactNode;
}

const ProfileCategory: React.FC<ProfileCategoryProps> = ({ categoryTitle, categoryInfo, icon }) => {
    return (
        <View style={style.profileContainer}>
            <View style={style.profileTitleInfoContainer}>
                <Text style={style.categoryTitle}>{categoryTitle}</Text>
                <Text style={style.categoryInfo}>{categoryInfo}</Text>
            </View>
            <View style={style.iconContainer}>
                {icon}
            </View>
        </View>
    )
}

export const Profile: React.FC<{ navigation: StackNavigationProp<any> }> = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <View style={style.container}>

                <View>
                    <Text style={style.profileCategoryTitle}>My Profile</Text>

                    <View style={style.userProfileContainer}>
                        <View>
                            <Image source={require('../../../assets/ProfilePicture.png')} style={style.profilePictureRadius} />
                        </View>
                        <View>
                            <Text style={style.userName}>Matilda Brown</Text>
                            <Text style={style.userMail}>matildabrown@mail.com</Text>
                        </View>
                    </View>

                    <ProfileCategory categoryTitle="My orders" categoryInfo="Already have 12 orders" icon={<Arrow />} />
                    <ProfileCategory categoryTitle="Shipping addresses" categoryInfo="3 ddresses" icon={<Arrow />} />
                    <ProfileCategory categoryTitle="Payment methods" categoryInfo="Visa **34" icon={<Arrow />} />
                    <ProfileCategory categoryTitle="Promocodes" categoryInfo="You have special promocodes" icon={<Arrow />} />
                    <ProfileCategory categoryTitle="My reviews" categoryInfo="Reviews for 4 items" icon={<Arrow />} />
                    <ProfileCategory categoryTitle="Settings" categoryInfo="Notifications, password" icon={<Arrow />} />
                </View>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingTop: 80,
    },
    profileCategoryTitle: {
        color: '#F7F7F7',
        fontSize: 34,
        fontWeight: '800',
        paddingLeft: 20,
        paddingBottom: 24
    },
    categoryTitle: {
        color: '#F7F7F7',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        marginTop: 20
    },
    categoryInfo: {
        color: '#ABB4BD',
        fontSize: 11,
        paddingBottom: 55
    },
    userName: {
        color: '#F7F7F7',
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 16,
        paddingBottom: 5
    },
    userMail: {
        color: '#ABB4BD',
        fontSize: 14,
        paddingLeft: 16
    },
    userProfileContainer: {
        flexDirection: 'row',
        marginLeft: 20,
        marginBottom: 60,
        marginTop: 30
    },
    profileContainer: {
        flexDirection: 'row',
        height: 60,
        borderBottomColor: 'rgba(229, 229, 229, 0.1);',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    profileTitleInfoContainer: {
        marginLeft: 20,
        width: '90%',
        justifyContent: 'center'
    },
    iconContainer: {
        justifyContent: 'center',
        paddingBottom: 15
    },
    profilePictureRadius: {
        borderRadius: 100
    }
});