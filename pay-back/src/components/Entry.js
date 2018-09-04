import React from "react";
import AddDebtForm from "./AddDebtForm";
import EditDebtForm from "./EditDebtForm";

class Entry extends React.Component {
    render() {
        return (
            <div>
                <p>Entry</p>

                {Object.keys(this.props.debts).map(key =>
                    <EditDebtForm
                        key={key}
                        index={key}
                        debt={this.props.debts[key]}
                        updateDebt={this.props.updateDebt}
                    />)}

                <AddDebtForm addDebt={this.props.addDebt} />
            </div>
        )
    }
}

export default Entry;