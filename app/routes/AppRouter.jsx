import { authRoute } from "./Routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";

const AppRouter = () => {
    const Tab = createBottomTabNavigator();
    const isAuth = true;
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    right: 16,
                    height: 60,
                    borderRadius: 16,
                },
            }}>
            {isAuth &&
                authRoute.map(({ name, Component, icon }, i) => (
                    <Tab.Screen
                        key={i}
                        name={name}
                        component={Component}
                        options={{
                            tabBarShowLabel: false,
                            tabBarIcon: () => (
                                <View>
                                    <Image
                                        source={icon}
                                        style={{
                                            width: 30,
                                            height: 30,
                                        }}
                                    />
                                </View>
                            ),
                        }}
                    />
                ))}
        </Tab.Navigator>
    );
};

export { AppRouter };
