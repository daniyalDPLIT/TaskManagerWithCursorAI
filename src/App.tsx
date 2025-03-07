import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppNavigator from './routes/AppNavigator';
import { ThemeProvider } from './context/ThemeContext';

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <AppNavigator />
            </ThemeProvider>
        </Provider>
    );
}

export default App; 