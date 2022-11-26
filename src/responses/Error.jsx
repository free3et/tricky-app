import { PureComponent } from "react";

const AppError = ({ error }) => {
  switch (error.cause) {
    case 500:
      return <h2>Network error 500</h2>;
    case 404:
      return <h2>404 Not Found </h2>;
    default:
      return <h2>UI FAILED</h2>;
  }
};

export class GlobalErrorHandler extends PureComponent {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error = Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <AppError error={error} />;
    }

    return children;
  }
}
