import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';
import TestComponent from './components/TestComponent';
import { View, Text } from 'react-native';
import ProfilePreview from './components/profilePreview';
import Header from './components/header';

function App() {
    // Use useTailwind to make the styles for the elements in the component
    const tw = useTailwind();
    const viewStyle = tw(
        'flex items-center justify-center h-full w-full bg-slate-400'
    );

    return (
        <TailwindProvider utilities={utilities}>
            <View style={viewStyle}>
                <Header />
                <ProfilePreview />
            </View>
        </TailwindProvider>
    );
}

export default App;
