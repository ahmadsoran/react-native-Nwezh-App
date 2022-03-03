import * as Notifications from 'expo-notifications';

export async function requestPermissionsAsync() {
    return await Notifications.requestPermissionsAsync({
        ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,

        },
    });
}
