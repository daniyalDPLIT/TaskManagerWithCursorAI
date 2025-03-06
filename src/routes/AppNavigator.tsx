import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from '../screens/TaskList';
import HomeScreen from '../screens/Home';
import AddTaskScreen from '../screens/AddTask';

export type RootStackParamList = {
    Home: undefined;
    All: { type: 'All' };
    Today: { type: 'Today' };
    Completed: { type: 'Completed' };
    AddTask: { task?: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    name="All"
                    component={TaskListScreen}
                    initialParams={{ type: 'All' }}
                />
                <Stack.Screen
                    name="Today"
                    component={TaskListScreen}
                    initialParams={{ type: 'Today' }}
                />
                <Stack.Screen
                    name="Completed"
                    component={TaskListScreen}
                    initialParams={{ type: 'Completed' }}
                />
                <Stack.Screen name="AddTask" component={AddTaskScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator; 