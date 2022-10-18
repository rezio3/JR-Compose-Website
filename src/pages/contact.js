import React, { Component } from "react";

class Contact extends Component {
	state = {
		value: "",
	};

	handleSubmit = () => {};

	render() {
		return (
			<div className="contact">
				<form onSubmit={this.handleSubmit}></form>
				<textarea
					value={this.state.value}
					className="textarea-box"
					placeholder="Send a message..."
				/>
				<button className="send-btn">Send</button>
			</div>
		);
	}
}

export default Contact;
