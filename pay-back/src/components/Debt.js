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
                <p>{desc}</p>
                <button disabled={!isOpen} onClick={this.handleClick}>{isOpen ? "Make a Payment" : "Paid!"}</button>
            </div>
        )
    }
}

export default Debt;