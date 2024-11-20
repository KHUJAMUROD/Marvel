import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
             error: true 
        })
    }

    render() {
        if (this.state.error) {
            return <h2>Something went wrong</h2>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;