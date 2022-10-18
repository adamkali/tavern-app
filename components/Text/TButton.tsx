import { useTavernColor } from '../../helpers/hooks/useTavernColor';
import TavernColor from '../../helpers/design/TavernColor';
import {
    GestureResponderEvent,
    NativeSyntheticEvent,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

let Color = new TavernColor();

export default function TButton({
    value,
    onPress,
}: {
    value: string;
    onPress(e: GestureResponderEvent): void;
}): JSX.Element {
    useTavernColor().then((color) => {
        Color = color;
    });

    return (
        <SafeAreaView>
            <TouchableOpacity
                style={styles.btn}
                onPress={(e) => onPress(e)}
            >
                {value}
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    btn: {
        fontSize: 40,
        backgroundColor: Color.background.accent,
        color: Color.foreground.primary,
    },
});
