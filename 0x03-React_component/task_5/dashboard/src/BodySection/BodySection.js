import React, { Component } from 'react'

export default class BodySection extends Component {
    render() {
        const { title, children } = this.props

        return (
            <div className='bodySection'>
                <h2>{title}</h2>
                {children}
            </div>
        )
    }
}
