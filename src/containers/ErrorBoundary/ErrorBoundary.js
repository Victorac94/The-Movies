import React from 'react';

import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Informacion sobre el error
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h4 className="error">Something went wrong...</h4>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;