import React from "react"
import PropTypes from "prop-types"

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
    static propTypes = {
        body: PropTypes.string
    }

    render() {
        let css
        if (process.env.NODE_ENV === "production") {
            css = (<style dangerouslySetInnerHTML={{
                __html: require("!raw!../public/styles.css")
            }}/>)
        }

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min.css"/>
                    {this.props.headComponents}
                    {css}
                </head>
                <body>
                    <div id="___gatsby" dangerouslySetInnerHTML={{
                        __html: this.props.body
                    }}/> {this.props.postBodyComponents}
                </body>
            </html>
        )
    }
}
