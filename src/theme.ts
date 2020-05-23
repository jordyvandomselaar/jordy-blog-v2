export interface Theme {
    fonts: {
        primary: string;
        title: string;
        code: string;
        logo: string;
    };
    colors: {
        background: string;
        text: string;
        title: string;
        link: string;
        logo: string;
        list: string;
        primary: string;
    };
    fontSizes: any;
}

const theme = {
    fonts: {
        primary: "Arvo",
        title: "Arvo",
        code: "Monospaced",
        logo: "Arvo",
    },
    colors: {
        background: "rgb(27,30,43)",
        text: "rgb(214, 222, 255)",
        title: "#C9FFE0",
        link: "#C9FFE0",
        logo: "#C9FFE0",
        list: "rgb(214, 222, 255)",
        primary: "rgb(27,30,43)",
    },
    fontSizes: [],
};
// @ts-ignore
theme.fontSizes.logo = "32px";

export { theme };
