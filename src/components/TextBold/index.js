import React from 'react'
import {
    Text,
} from 'react-native'
import styles from './styles'

export default class TextBold extends React.Component {
    render() {
        return (
            <Text
                numberOfLines={this.props.multiline? null: 1}
                ellipsizeMode='tail'
                allowFontScaling={false} //true
                adjustsFontSizeToFit={false}
                {...this.props}
                style={[styles.text, this.props.style]}
            >{this.props.children}</Text>
        )
    }
}