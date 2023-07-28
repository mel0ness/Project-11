import React from "react"
import { Helmet } from "react-helmet"

const ReactHelmet = () => {
return (
    <Helmet>
        <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Argent Bank - Home Page</title>
    <link rel="stylesheet" href="./css/main.css" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    </Helmet>
)
}

export default ReactHelmet;