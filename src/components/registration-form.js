import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {login} from '../actions/authActions';
import Input from './login-register-input';
import {registerUser} from '../actions/userActions';


export class RegistrationForm extends React.Component {
  
  onSubmit(values) {
		const {username, password, name} = values;
		const user = {username, password, name};
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
	}

  render(){
    return(
      <form
				className="login-form"
				onSubmit={this.props.handleSubmit(values =>
					this.onSubmit(values)
				)}>
				<label htmlFor="name">Name</label>
				<Field component={Input} type="text" name="name" />
				<label htmlFor="username">Username</label>
				<Field
					component={Input}
					type="text"
					name="username"
					//validate={[required, nonEmpty, isTrimmed]}
				/>
				<label htmlFor="password">Password</label>
				<Field
					component={Input}
					type="password"
					name="password"
					//validate={[required, passwordLength, isTrimmed]}
				/>
				<label htmlFor="passwordConfirm">Confirm password</label>
				<Field
					component={Input}
					type="password"
					name="passwordConfirm"
					//validate={[required, nonEmpty, matchesPassword]}
				/>
				<button
					type="submit"
					disabled={this.props.pristine || this.props.submitting}>
                    Register
				</button>
			</form>
    )
  }
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
