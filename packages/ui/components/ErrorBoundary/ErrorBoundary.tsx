import React, { ErrorInfo, useEffect, useState } from 'react';

export interface ErrorBoundaryProps {}

export const ErrorBoundary = () => {
    const [error, setError] = useState<Error | null>(null);
    const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);

    // useEffect(() => {
    //     const errorMessage = () => {
    //         return `Version: ${VERSION}
    //         URL: ${window.location.href}
    //         User-Agent: ${window.navigator.userAgent}

    //         Stack Trace:
    //         ${errorInfo ? errorInfo.componentStack : ''}
    //         `;
    //     };
    //     return () => {
    //         setError(null);
    //         setErrorInfo(null);
    //     }
    // }, [error, errorInfo]);
    return <div>ErrorBoundary</div>;
};

ErrorBoundary.displayName = 'ui/ErrorBoundary';
