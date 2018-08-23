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

    addPayment = (key) => {
        // 1. take a copy of state
        const progress = { ...this.state.progress };
        // 2. either add to the order, or update the number
        progress[key] = progress[key] + 1 || 1; //this needs to be a variable based on payment amount
        // 3. call setState to update our state object
        this.setState({ progress });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="I am dynamic" />
                    <ul className="fishes">
                        {Object.keys(this.state.debts).map(key => <Debt key={key} details={this.state.debts[key]} addPayment={this.addPayment} index={key} /> )}
                    </ul>
                </div>
                <Progress debts={this.state.debts} progress={this.state.progress} />
                <Entry addDebt={this.addDebt} />
            </div>
        )
    }
}

export default App;