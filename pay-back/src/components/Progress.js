import React from "react";
import { formatPrice } from "../helpers";

class Progress extends React.Component {
    // TODO : Work out math logic
    renderProgress = (key) => {
        const debt = this.props.debts[key];
        const count = this.props.progress[key];
        const isOpen = debt.status === "open";
        if(!isOpen) {
        return      <li key={key}>
                        Congrats {debt ? debt.name : "debt"} is Paid!
                    </li>
        }
        return  <li key={key}>
                    {count} payments @ {debt.name}
                    {formatPrice(count * debt.amount)}
                </li>
    }

    render() {
        const progressIds = Object.keys(this.props.progress);
        const total = progressIds.reduce((prevTotal, key) => {
            const debt = this.props.debts[key];
            const count = this.props.progress[key];
            const isOpen = debt && debt.status === "open";
            if(isOpen) {
                return prevTotal + (count * debt.amount);
            }
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>Progress</h2>
                <ul>
                    {progressIds.map(this.renderProgress)}
                </ul>
                <div className="total">
                Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Progress;