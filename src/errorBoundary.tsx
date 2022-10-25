import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public render() {
    if (this.state.hasError) {
      return <div>Fatal Error</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
