import React from "react";
import AddDebtForm from "./AddDebtForm";

class Entry extends React.Component {
    render() {
        return (
            <div>
                <p>Entry</p>
                <AddDebtForm addDebt={this.props.addDebt} />
            </div>
        )
    }
}

export default Entry;