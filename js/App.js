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
    Navigator
} from 'react-native';
import {Provider} from 'mobx-react/native'

import Home from './scenes/Home'

import UiStore from './stores/UiStore'

export default class PoliBook extends Component {
    render() {
        return (
            <Provider UiStore={UiStore}>
                <Navigator
                ref={(ref) => this._navigator = ref}
                initialRoute={{ id: 'Home', index: 0 }}
                renderScene={this.renderScene}
                />
            </Provider>
      );
    }

    renderScene({id}) {
        switch(id) {
            case "Home":
                return <Home />
        }
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
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
