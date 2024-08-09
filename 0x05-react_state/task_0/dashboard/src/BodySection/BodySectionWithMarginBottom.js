import React, { Component } from 'react'
import BodySection from './BodySection'
import { StyleSheet, css } from 'aphrodite';

export default class BodySectionWithMarginBottom extends Component {
    render() {
        const { title, children } = this.props

        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection title={title} children={children} />
            </div>
        )
    }
}

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: 40,
    }
})
