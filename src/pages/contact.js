import React, { Component } from "react";
import "../style/css/contact.css";

class Contact extends Component {
	state = {
		textValue: "",
		emailValue: "",
		nameValue: "",
		emailValid: true,
		sent: false,
	};

	handleName = (e) => {
		this.setState({
			nameValue: e.target.value,
		});
	};

	handleEmail = (e) => {
		this.setState({
			emailValue: e.target.value,
		});
	};

	handleTextarea = (e) => {
		this.setState({
			textValue: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const isEmailValid = this.state.emailValue.includes("@");
		if (isEmailValid === true) {
			this.setState({
				textValue: "",
				emailValue: "",
				nameValue: "",
				emailValid: true,
				sent: true,
			});

			setTimeout(this.turnOffHurraySpan, 2000);
		} else {
			this.setState({ emailValid: false });
		}
	};

	turnOffHurraySpan = () => {
		this.setState({ sent: false });
	};

	render() {
		return (
			<div>
				<div className="contact">
					<h2>Order your music!</h2>
					<form onSubmit={this.handleSubmit} noValidate>
						<label for="name">
							Name:
							<input
								id="name"
								name="name"
								type="name"
								value={this.state.nameValue}
								onChange={this.handleName}
								className="input"
							/>
						</label>
						<label for="mail">
							Email:
							<input
								id="mail"
								name="mail"
								type="mail"
								value={this.state.emailValue}
								onChange={this.handleEmail}
								className="input email-input"
							/>
							{!this.state.emailValid && (
								<span className="error-span">Email needs @</span>
							)}
						</label>
						<label className="message-label" for="msg">
							Message:
						</label>
						<textarea
							id="msg"
							name="msg"
							value={this.state.textValue}
							className="textarea-box"
							placeholder="Send a message..."
							onChange={this.handleTextarea}
						/>
						{/* <label for="attachment">Select a file:</label>
						<input type="file" id="file" name="attachment"></input> */}
						<button className="send-btn" type="submit">
							Send
						</button>
					</form>
					{this.state.sent && (
						<span className="hurray-span">Hurray! Message sent!</span>
					)}
				</div>
				<div className="contact-info-container">
					<h3>Contact info:</h3>
					<div className="divide-line"></div>
					<i className="fa-solid fa-envelope">
						<span>jakub.rezler96@gmail.com</span>
					</i>
					<i className="fa-solid fa-phone">
						<span>+48 724 863 771</span>
					</i>
					<div className="divide-line"></div>
				</div>
			</div>
		);
	}
}

export default Contact;
