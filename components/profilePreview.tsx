import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function ProfilePreview() {
    // Use useTailwind to make the styles for the elements in the component
    const tw = useTailwind();
    const profileBackgroundStyle = tw(
        'mx-auto p-5 my-auto w-80 h-4/5 relative bg-yellow-200 rounded-xl'
    );
    const nameStyle = tw('text-3xl py-4');
    const sectionTitleStyle = tw('text-xl');
    const descriptionStyle = tw('text-lg');

    return (
        <View style={profileBackgroundStyle}>
            <Text style={nameStyle}>John Doe</Text>
            <Text style={sectionTitleStyle}>About</Text>
            <Text style={descriptionStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur,
                nisl nisl consectetur nisl, euismod euismod nisi nisl
                euismod.
            </Text>
        </View>
    );
}
