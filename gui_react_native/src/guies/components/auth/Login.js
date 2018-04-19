import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Right, Button, Icon, Title, Text,
    Content, Item, Input, Footer, View, CheckBox, ListItem
} from 'native-base';
import { Field, reduxForm } from 'redux-form';

import apiCaller from '../../../utils/ApiCaller';
import * as ApiUrl from '../../../containts/ApiUrl';

import LoginStyle from '../../../../public/css/auth/LoginStyle';

const validate = values => {
    const error = {};
    error.email = '';
    error.name = '';
    var ema = values.email;
    var nm = values.name;
    if (values.email === undefined) {
        ema = '';
    }
    if (values.name === undefined) {
        nm = '';
    }
    if (ema.length < 8 && ema !== '') {
        error.email = 'too short';
    }
    if (!ema.includes('@') && ema !== '') {
        error.email = '@ not included';
    }
    if (nm.length > 8) {
        error.name = 'max 8 characters';
    }
    return error;
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true,
            user_name: '',
            password: ''
        };
        this.renderInput = this.renderInput.bind(this);
    }

    _clickSignIn() {
        this.setState({ isSignIn: true });
    }

    _clickSignUp() {
        this.setState({ isSignIn: false });
    }

    _clickButtonLogin() {
        console.log(this.state.user_name);
        console.log(this.state.password);
        apiCaller(ApiUrl.END_POINT_LOGIN, "POST", JSON.stringify({
            "user_name": this.state.user_name,
            "password": this.state.password
        })).then((responseJson) => {
            console.log(responseJson);
            this.checkLogin(responseJson);
        });
        console.log("phu chinh vao333");
    }

    checkLogin(response) {
        if (response.error != null) {
            // error login

        }
    }

    renderInput({ input, label, type, meta: { touched, error, warning } }) {
        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <Item error={hasError}>
                <Input {...input} />
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
        )
    }

    render() {
        let { headerBody, content, textInput, textButton, textTitle,
            footer, footerButton } = LoginStyle;

        const signInJsx = (
            <Content style={content}>
                <Field name="email" component={this.renderInput} />

                <Item style={textInput}>
                    <Icon active name='person' />
                    <Input placeholder='Tên đăng nhập' value={this.state.user_name}
                        onChangeText={(user) => this.setState({ user_name: user })} />
                </Item>
                <Item style={textInput}>
                    <Icon name='key' />
                    <Input placeholder='Mật khẩu' value={this.state.password} type="password"
                        onChangeText={(pass) => this.setState({ password: pass })} />
                </Item>
                <ListItem>
                    <CheckBox checked={true} color="green" />
                    <Body>
                        <Text>Ghi nhớ đăng nhập</Text>
                    </Body>
                </ListItem>
                <Button iconLeft onPress={this._clickButtonLogin.bind(this)}>
                    <Text style={textButton}>Đăng nhập</Text>
                </Button>
            </Content>
        );
        const signUpJsx = (
            <Content style={content}>
                <Item style={textInput}>
                    <Icon active name='person' />
                    <Input placeholder='Họ và tên' />
                </Item>
                <Item style={textInput}>
                    <Icon name='person' />
                    <Input placeholder='Tên đăng nhập' />
                </Item>
                <Item style={textInput}>
                    <Icon name='key' />
                    <Input placeholder='Mật khẩu' />
                </Item>
                <Item style={textInput}>
                    <Icon name='key' />
                    <Input placeholder='Nhập lại mật khẩu' />
                </Item>
                <Button block info onPress={this._clickSignUp.bind(this)}>
                    <Text style={textButton}>Đăng ký</Text>
                </Button>
            </Content>
        );
        const footerSignIn = (
            <Footer style={footer}>
                <Button iconLeft disabled style={footerButton} onPress={this._clickSignIn.bind(this)}>
                    <Text style={textButton}>Đăng nhập</Text>
                </Button>
                <Button iconLeft style={footerButton} onPress={this._clickSignUp.bind(this)}>
                    <Text style={textButton}>Đăng ký</Text>
                </Button>
            </Footer>
        );
        const footerSignUp = (
            <Footer style={footer}>
                <Button iconLeft style={footerButton} onPress={this._clickSignIn.bind(this)}>
                    <Text style={textButton}>Đăng nhập</Text>
                </Button>
                <Button iconLeft disabled style={footerButton} onPress={this._clickSignUp.bind(this)}>
                    <Text style={textButton}>Đăng ký</Text>
                </Button>
            </Footer>
        );
        const loginContent = this.state.isSignIn ? signInJsx : signUpJsx;
        const loginFooter = this.state.isSignIn ? footerSignIn : footerSignUp;
        return (
            <Container>
                <Header>
                    <Body style={headerBody}>
                        <Title style={textTitle}>Đăng Nhập</Title>
                    </Body>
                </Header>
                {loginContent}
                {loginFooter}
            </Container>
        )
    }
}

export default reduxForm({
    form: 'test',
    validate
})(Login)