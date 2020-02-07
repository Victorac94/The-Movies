import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false}
    }
    
    static getDerivedStateFromError(error) {
        // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
        this.setState({hasError: true})
    }

    componentDidCatch(error, errorInfo) {
        // Informacion sobre el error
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h4 style={{"color": "red"}}>Algo ha ido mal...</h4>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;