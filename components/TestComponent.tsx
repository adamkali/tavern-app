import React from 'react';
import { View, Text } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function TestComponent() {
    // Use useTailwind to make the styles for the elements in the component
    const tw = useTailwind();
    const viewStyle = tw(
        'flex flex-col items-center justify-center h-full w-full bg-yellow-200'
    );
    const textStyle = tw('text-gray-500');

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>TestComponent</Text>
        </View>
    );
}
