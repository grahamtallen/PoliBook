/**
 * Created by grahamallen on 12/31/16.
 */
/**
 * Created by grahamallen on 12/31/16.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Modal
} from 'react-native';
import {List, ListItem, Container, Content, Header, Title, Thumbnail} from 'native-base'
import data from '../../data/UK_Commons'

import Detail from './Detail'

export default class Home extends Component {

    renderRep(rep) {
        return (
            <ListItem>
                <Thumbnail source={rep.image} />
                <Text>{rep.name}</Text>
            </ListItem>
        )
    }

    render() {
        return (
            <Container >
                <Header>
                    <Title>List</Title>
                </Header>
                <Content>
                    <List>
                        {data.persons.map((rep) => this.renderRep(rep))}
                    </List>
                    <Modal
                        visible={true}
                    >
                        <Detail />
                    </Modal>
                </Content>
            </Container>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: "black"
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
