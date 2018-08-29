import React from "react";
import { formatPrice } from "../helpers";

class Debt extends React.Component {
    handleClick = () => {
        this.props.addPayment(this.props.index);
    }
    render() {
        const { name, amount, status, desc } = this.props.details;
        const isOpen = status === "open"
        return (
            <div className="menu-fish">
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(amount)}</span>
                </h3>
                <ol>
                    {Object.keys(this.props.details.desc).map(key => <li key={key}>{this.props.details.desc[key]}</li>)}
                </ol>
                <button disabled={!isOpen} onClick={this.handleClick}>{isOpen ? "Make a Payment" : "Paid!"}</button>
            </div>
        )
    }
}

export default Debt;