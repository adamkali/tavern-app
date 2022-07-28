import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTailwind } from 'tailwind-rn';

export default function ProfilePreview() {
    // Use useTailwind to make the styles for the elements in the component
    const tw = useTailwind();
    const profileBackgroundStyle = tw(
        'mx-auto p-5 my-12 w-80 h-128 relative bg-yellow-200 rounded-xl'
    );
    const nameStyle = tw('text-3xl text-slate-600');
    const sectionTitleStyle = tw('text-xl text-slate-600');
    const descriptionStyle = tw(' text-slate-600');

    return (
        <View style={profileBackgroundStyle}>
            <View style={tw('z-10')}>
                <Text style={nameStyle}>John Doe</Text>
                <Text style={sectionTitleStyle}>About</Text>
                <Text style={descriptionStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Pellentesque euismod, nisi eu consectetur
                    consectetur, nisl nisl consectetur nisl, euismod
                    euismod nisi nisl euismod.
                </Text>
            </View>
        </View>
    );
}
