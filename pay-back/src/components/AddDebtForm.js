import React from "react";

class AddDebtForm extends React.Component {

    state = {
        desc : []
    }

    nameRef = React.createRef();
    amountRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();

    createItem = (event) => {
        if(event.key == 'Tab') {
            event.preventDefault();
            let desc = [...this.state.desc];
            const item = this.descRef.current.value;
            desc = this.state.desc.push(item);
            this.setState([desc]);
            this.descRef.current.value = "";
        }
    }

    createDebt = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        const debt = {
            name: this.nameRef.current.value,
            amount: parseFloat(this.amountRef.current.value),
            status: this.statusRef.current.value,
            // desc: this.descRef.current.value
            desc: this.state.desc
        };
        this.props.addDebt(debt);
        // refresh the form
        event.currentTarget.reset();
        // refresh local state
        this.state.desc = [];

    }
    render() {
        return (
            <form className="fish-edit" onSubmit={this.createDebt}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
                <input name="amount" ref={this.amountRef} type="text" placeholder="Amount" />
                <select name="status" ref={this.statusRef} type="text">
                    <option value="open">Open</option>
                    <option value="paid">Paid!</option>
                </select>
                {/* <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea> */}
                <input name="desc" ref={this.descRef} type="text" onKeyDown={this.createItem}  />
                <ol>
                    {Object.keys(this.state.desc).map(key => <li key={key}>{this.state.desc[key]}</li>)}
                </ol>
                <button type="submit">+ Add Debt</button>
            </form>
        )
    }
}

export default AddDebtForm;