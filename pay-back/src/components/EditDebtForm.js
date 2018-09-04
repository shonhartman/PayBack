import React from "react";

class EditDebtForm extends React.Component {
    handleChange = (event) => {
        // update that debt
        // 1. Take a copy of the current debt
        const updatedDebt = {
            ...this.props.debt,
            [event.currentTarget.name] : event.currentTarget.value
        };
        this.props.updateDebt(this.props.index, updatedDebt)

    }
    render() {
        return  <div className="fish-edit">
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.props.debt.name}
                    />
                    <input
                        type="text"
                        name="amount"
                        onChange={this.handleChange}
                        value={this.props.debt.amount}
                    />
                    <select
                        type="text"
                        name="status"
                        onChange={this.handleChange}
                        value={this.props.debt.status}
                    >
                        <option value="open">Open</option>
                        <option value="paid">Paid!</option>
                    </select>
                    <textarea
                        type="text"
                        name="desc"
                        onChange={this.handleChange}
                        value={this.props.debt.desc}
                    >
                    </textarea>
                </div>
    }
}

export default EditDebtForm;