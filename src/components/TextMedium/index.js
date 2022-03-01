import React from 'react'
import {
    Text,
} from 'react-native'
import styles from './styles'

export default class TextMedium extends React.Component {
    render() {
        return (
            <Text
                numberOfLines={this.props.multiline? null: 1}
                ellipsizeMode='tail'
                allowFontScaling={true}
                {...this.props}
                style={[styles.text, this.props.style]}
            >{this.props.children}</Text>
        )
    }
}