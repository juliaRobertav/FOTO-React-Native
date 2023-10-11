import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons, Entypo, 
    MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import Create from "./pages/create";
import Read from "./pages/read";
import Update from "./pages/update";
import Delete from "./pages/delete";
import Home from "./pages/home";

const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'black',
                    paddingVertical: 1,
                    borderTopColor: 'transparent'
                },
                tabBarActiveTintColor: '#f0f',
                tabBarInactiveTintColor: '#555'
            }}
        >
            <Tab.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown:false,
                    tabBarStyle:{display:'none'},
                    tabBarIcon: ({size, color})=>(
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none',},
                    tabBarIcon: ({size, color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Create"
                component={Create}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none',},
                    tabBarIcon: ({size, color})=>(
                        <Ionicons name="create" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Read"
                component={Read}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none',},
                    tabBarIcon: ({size, color})=>(
                        <Entypo name="unread" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Update"
                component={Update}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none',},
                    tabBarIcon: ({size, color})=>(
                        <MaterialCommunityIcons name="update" size={size} color={color}/>
                    )
                }}
            />

            <Tab.Screen
                name="Delete"
                component={Delete}
                options={{
                    headerShown:false,
                    // tabBarStyle:{display:'none',},
                    tabBarIcon: ({size, color})=>(
                        <AntDesign name="delete" size={size} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routers({navigation}) {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Create"
                    component={Create}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Read"
                    component={Read}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Update"
                    component={Update}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Delete"
                    component={Delete}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}