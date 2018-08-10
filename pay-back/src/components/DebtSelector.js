import React from "react";

class DebtSelector extends React.Component {
    render() {
        return (
            <form action="" className="store-selector">
                <h2>Enter a Debt</h2>
                <input type="text" required placeholder="Debt Name"/>
                <button type="submit">Go to Debt</button>
            </form>
        )
    }
}

export default DebtSelector;