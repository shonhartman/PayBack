import React from "react";
import Entry from "./Entry";
import Progress from "./Progress";
import Header from "./Header";
import Debt from "./Debt";

class App extends React.Component {
    state = {
        debts: {},
        progress: {}
    };
    addDebt = (debt) => {
        // 1. Take a copy of the existing state
        const debts = {...this.state.debts};
        // 2. Add our new debt to that debts variable
        debts[`debt${Date.now()}`] = debt;
        // 3. Set the new debts object to state
        this.setState({ debts });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="I am dynamic" />
                    <ul className="fishes">
                    {Object.keys(this.state.debts).map(key => <Debt key={key} /> )}
                        <Debt />
                    </ul>
                </div>
                <Progress />
                <Entry addDebt={this.addDebt} />
            </div>
        )
    }
}

export default App;