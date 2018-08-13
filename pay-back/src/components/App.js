import React from "react";
import Entry from "./Entry";
import Progress from "./Progress";
import Header from "./Header";

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="I am dynamic" />
                </div>
                <Progress />
                <Entry />
            </div>
        )
    }
}

export default App;