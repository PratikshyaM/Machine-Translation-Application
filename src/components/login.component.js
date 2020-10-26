import React, {Component} from 'react';

export default class userprofile extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRemember = this.onChangeRemember.bind(this);
        this.state = {
            email: '',
            password: '',
            remember: false,
        }
    }
    onChangeEmail(e){
     this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
     this.setState({
            password: e.target.value
        });
    }
    onChangeRemember(e){
     this.setState({
            remember: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        console.log(`Login Details Submitted:`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Password: ${this.state.password}`);
        console.log(`Remember: ${this.state.remember}`);
    }
    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Login Details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                        value={this.state.email} onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password"
                               name="pwd"
                        value={this.state.password} onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="remember"
                        value="True" checked={this.state.input_file_type==='True'}
                                      onChange={this.onChangeRemember}
                        /> Remember me</label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}