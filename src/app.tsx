import * as ReactDOM from 'react-dom';
import React from "react";

const View = () => {
    const [webview, setWebview] = React.useState();

    React.useEffect(() => {
        const element = document.getElementById("test");
        element.style.height = "100%"
        element.style.width = "100%"
    }, [])

    return <webview
        id={"test"}
        src={"https://gmail.com"}
        webpreferences={`spellcheck=${
            1
        }, contextIsolation=1`}
        nodeintegration={"on"}
    />
}

function render() {
    ReactDOM.render(<View />, document.body);
}

render();