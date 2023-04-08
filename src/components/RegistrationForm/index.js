// Write your JS code here
import { Component } from 'react'

import './index.css'

class RegistrationForm extends Component {
    state = {
        firstName: '',
        secondName: '',
        isSubmitted: false,
        firstErrorMsg: '',
        secondErrorMsg: '',
    }

    onChangeFirstName = event => {
        this.setState({ firstName: event.target.value })
        console.log(this.state)
    }

    onChangeSecondName = event => {
        this.setState({ secondName: event.target.value })
    }

    onSubmitForm = event => {
        event.preventDefault()
        const { firstName, secondName } = this.state

        if (firstName !== '' && secondName !== '') {
            this.setState({ isSubmitted: true })
        }
        if (firstName === '') {
            this.setState({ firstErrorMsg: '*Required' })
        }
        if (secondName === '') {
            this.setState({ secondErrorMsg: '*Required' })
        }
    }

    onBlurFirst = event => {
        if (event.target.value === '') {
            this.setState({ firstErrorMsg: '*Required' })
        } else {
            this.setState({ firstErrorMsg: '' })
        }
    }

    onBlurSecond = event => {
        if (event.target.value === '') {
            this.setState({ secondErrorMsg: '*Required' })
        } else {
            this.setState({ secondErrorMsg: '' })
        }
    }

    submitNewResponse = () => {
        this.setState({
            firstName: '',
            secondName: '',
            firstErrorMsg: '',
            secondErrorMsg: '',
            isSubmitted: false,
        })
    }

    render() {
        const {
            isSubmitted,
            firstName,
            secondName,
            firstErrorMsg,
            secondErrorMsg,
        } = this.state
        return (
            <div className="bg">
                <div className="registration">
                    <h1>Registration</h1>
                    {!isSubmitted ? (
                        <form onClick={this.onSubmitForm}>
                            <label htmlFor="first_name">FIRST NAME</label>
                            <br />
                            <input
                                type="text"
                                id="first_name"
                                onChange={this.onChangeFirstName}
                                value={firstName}
                                onBlur={this.onBlurFirst}
                            />
                            <br />
                            <p className="error">{firstErrorMsg}</p>
                            <label htmlFor="second_name">SECOND NAME</label>
                            <br />
                            <input
                                type="text"
                                id="second_name"
                                onBlur={this.onBlurSecond}
                                onChange={this.onChangeSecondName}
                                value={secondName}
                            />
                            <br />
                            <p className="error">{secondErrorMsg}</p>
                            <div className="submitBtnContainer">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    ) : (
                            <div className="sucessContainer">
                                <img
                                    alt="success"
                                    src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                                />
                                <p>Submitted Succefully</p>
                                <div className="successBtn">
                                    <button type="submit" onClick={this.submitNewResponse}>
                                        Submit Another Response
                </button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default RegistrationForm
