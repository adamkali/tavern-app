import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';
import TestComponent from './components/TestComponent';
import { View, Text } from 'react-native';
import ProfilePreview from './components/profilePreview';

function App() {
    // Use useTailwind to make the styles for the elements in the component
    const tw = useTailwind();
    const viewStyle = tw(
        'flex items-center justify-center h-full w-full bg-blue-200'
    );

    return (
        <TailwindProvider utilities={utilities}>
            <View style={viewStyle}>
                <View
                    style={tw(
                        'flex flex-row w-full h-24 justify-between p-4'
                    )}
                >
                    <View style={tw('rounded-full bg-slate-200')}>
                        <Text>...</Text>
                    </View>
                    <View style={tw('rounded-full bg-slate-200')}>
                        <Text>...</Text>
                    </View>
                </View>
                <ProfilePreview />
            </View>
        </TailwindProvider>
    );
}

export default App;
