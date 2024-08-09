import React, { Component } from 'react'

export default class WithLogging extends Component {
    componentDidMount() {
        console.log(`Component ${this.props.WrapperedComponent.displayName || 'Component'} is mounted`);
    }

    componentWillUnmount() {
        console.log(`Component ${this.props.WrapperedComponent.displayName || 'Component'} is going to unmount`);
    }
    render() {
        const { WrapperedComponent, ...rest } = this.props
        return (
            <WrapperedComponent {...rest} />
        )
    }
}
