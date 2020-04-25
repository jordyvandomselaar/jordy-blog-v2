import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    fonts: {
        primary: "Helvetica",
        title: "courier",
        code: "Monospaced",
        logo: "courier"
    },
    colors: {
        background: "#FFF",
        text: "#000",
        title: "#000",
        logo: "#000",
        list: "#000"
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
