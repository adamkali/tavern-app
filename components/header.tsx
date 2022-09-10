import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import { Message, Profile } from 'iconsax-react-native';

export default function Header() {
    // Use useTailwind to make the styles for the elements in the component
    const tw = useTailwind();

    // This will be a heade that is used to make the header of the app
    // the header should use rounded-header to make it look clean
    // the header should have a background color of slate-400
    // the header should have a height of 80px
    // the header should have a width of 100%
    // the header should space out the elements with equal spacing
    // the margin of the header should be 10 on the sides

    const headerBackgroundStyle = tw(
        'flex flex-row items-center relative h-header w-full bg-slate-400 rounded-2xl pt-6 z-10'
    );

    // make a style for the buttons that are circular
    const buttonStyleLeft = tw(
        'absolute bg-slate-200 rounded-full h-10 w-10 flex mb-2 ml-2 items-center justify-center bottom-0 left-0'
    );

    const buttonStyleRight = tw(
        'absolute bg-slate-200 rounded-full h-10 w-10 flex mb-2 mr-2 items-center justify-center bottom-0 right-0'
    );
    const buttonTextStyle = tw('text-xl text-slate-600');

    // Make a topbar with two buttons on each side of the screen
    return (
        <View style={headerBackgroundStyle}>
            <View style={buttonStyleLeft}>
                <Text style={buttonTextStyle}>
                    {' '}
                    <Profile size={30} />{' '}
                </Text>
            </View>
            <View style={buttonStyleRight}>
                <Text style={buttonTextStyle}>
                    {' '}
                    <Message size={30} />{' '}
                </Text>
            </View>
        </View>
    );
}
