import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Right, Button, Icon, Title, Text,
    Content, Item, Input, Footer, View, CheckBox, ListItem
} from 'native-base';

import LoginStyle from '../../../../public/css/auth/LoginStyle';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        }
    }

    _clickSignIn() {
        this.setState({ isSignIn: true });
    }

    _clickSignUp() {
        this.setState({ isSignIn: false });
    }

    render() {
        let { headerBody, content, textInput, textButton, textTitle,
            footer, footerButton } = LoginStyle;

        const signInJsx = (
            <Content style={content}>
                <Item style={textInput}>
                    <Icon active name='person' />
                    <Input placeholder='Tên đăng nhập' />
                </Item>
                <Item style={textInput}>
                    <Icon name='key' />
                    <Input placeholder='Mật khẩu' />
                </Item>
                <ListItem>
                    <CheckBox checked={true} color="green"/>
                    <Body>
                        <Text>Ghi nhớ đăng nhập</Text>
                    </Body>
                </ListItem>
                <Button block info>
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
                    <Icon  name='key' />
                    <Input placeholder='Mật khẩu' />
                </Item>
                <Item style={textInput}>
                    <Icon name='key' />
                    <Input placeholder='Nhập lại mật khẩu' />
                </Item>
                <Button block info>
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