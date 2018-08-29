import React from "react";

class DebtSelector extends React.Component {
    debtInput = React.createRef();
    // debtDescInput = React.createRef();

    goToDebt = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. get the text from the inputs
        const debtName = this.debtInput.current.value;
        // const debtDesc = this.debtDescInput.current.value;
        // 3. Change the page to /debt/whatever-they-entered
        this.props.history.push(`/debt/${debtName}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToDebt}>
                <h2>Enter a Debt</h2>
                <input type="text" ref={this.debtInput} required placeholder="Debt Name"/>
                {/* <textarea type="text" ref={this.debtDescInput} required placeholder="Description"/> */}
                <button type="submit">Go to Debt</button>
            </form>
        )
    }
}

export default DebtSelector;