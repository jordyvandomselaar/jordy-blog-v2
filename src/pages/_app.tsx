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
        background: "rgb(27,30,43)",
        text: "rgb(199, 205, 233)",
        title: "rgb(199, 205, 233)",
        logo: "rgb(199, 205, 233)",
        list: "rgb(199, 205, 233)",
        primary: "rgb(27,30,43)"
    },
    fontSizes: []
}

// @ts-ignore
theme.fontSizes.logo = "32px";

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
