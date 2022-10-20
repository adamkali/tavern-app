import { LightColors, DarkColors } from './Colors';

export default class TavernColor {
    name: string = 'TavernColor';
    foreground: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    background: {
        normal: string;
        accent: string;
        dark: string;
    };
    constructor(json: undefined | any = {}) {
        // using switch for more themes in the future
        this.name = json.name || 'TavernColor';
        this.foreground = json.foreground;
        this.background = json.background;
    }

    getForeground(): {
        primary: string;
        secondary: string;
        tertiary: string;
    } {
        return this.foreground;
    }

    getBackground(): {
        normal: string;
        accent: string;
        dark: string;
    } {
        return this.background;
    }
}
