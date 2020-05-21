import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    fonts: {
        primary: "Arvo",
        title: "Arvo",
        code: "Monospaced",
        logo: "Arvo"
    },
    colors: {
        background: "#FFF",
        text: "#000",
        title: "#000",
        logo: "#000",
        list: "#000",
        primary: "000"
    },
    fontSizes: []
}

// @ts-ignore
theme.fontSizes.logo = "48px";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}
