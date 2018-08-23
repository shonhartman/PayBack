import React from "react";
import { formatPrice } from "../helpers";

class Progress extends React.Component {
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
                    {progressIds.map(key => <li>{key}</li>)}
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