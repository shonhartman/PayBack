import React from "react";
import Entry from "./Entry";
import Progress from "./Progress";
import Header from "./Header";
import Debt from "./Debt";
import base from "../base";

class App extends React.Component {
    state = {
        debts: {},
        progress: {}
    };

    componentDidMount() {
        this.ref = base.syncState(`${this.props.match.params.debtId}/debts`, {
            context: this,
            state: "debts"
        });
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

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
        // check for log in
        const isLoggedIn = true;
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline={this.props.match.params.debtId} />
                    <ul className="fishes">
                        {Object.keys(this.state.debts).map(key => <Debt key={key} details={this.state.debts[key]} addPayment={this.addPayment} index={key} /> )}
                    </ul>
                </div>
                <Progress debts={this.state.debts} progress={this.state.progress} />
                {isLoggedIn == true &&
                    <Entry addDebt={this.addDebt} />
                }
            </div>
        )
    }
}

export default App;