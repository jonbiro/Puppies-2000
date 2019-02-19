import React, { Component } from "react";
class PupForm extends Component {
state={
    name: "",
    bred_for: "",
    life_span: "",
    temperament: ""
}

    handleChange = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };

    handleOnSubmit = e => {
        e.preventDefault();
        let newpup =  {...this.state};
        this.props.newPup(newpup);
        this.emptyForm();
    };


    emptyForm = () => {
        this.setState({
            name: "",
            bred_for: "",
            life_span: "",
            temperament: "" });
    };

    render() {
        return (
            <div>
                {/*<h2>{this.props.create ? "Create" : "Edit"} Post:</h2>*/}
                Create a Pup:
                <form onSubmit={this.handleOnSubmit}>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                        placeholder="Name"
                    />
                    <br />
                    <input
                        type="text"
                        name="life_span"
                        onChange={this.handleChange}
                        value={this.state.life_span}
                        placeholder="Life Span"
                    />
                    <br />
                    <input
                        type="text"
                        name="bred_for"
                        onChange={this.handleChange}
                        value={this.state.bred_for}
                        placeholder="Bred For"
                    />
                    <br />
                    <input
                        type="text"
                        name="temperament"
                        onChange={this.handleChange}
                        value={this.state.temperament}
                        placeholder="Temperament"
                    />
                    <br />
                    <input type="submit" className="button" />
                </form>
            </div>
        );
    }
}
export default PupForm;
