import { LightColors, DarkColors } from './Colors';

export default class TavernColor {
    isDark: boolean;
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
    constructor(isDark: boolean) {
        this.isDark = isDark;
        if (isDark) {
            this.foreground = DarkColors.foreground;
            this.background = DarkColors.background;
        } else {
            this.foreground = LightColors.foreground;
            this.background = LightColors.background;
        }
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

    setDark() {
        this.isDark = !this.isDark;
        if (this.isDark) {
            this.foreground = DarkColors.foreground;
            this.background = DarkColors.background;
        } else {
            this.foreground = LightColors.foreground;
            this.background = LightColors.background;
        }
    }
}
