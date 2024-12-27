import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// для теста ошибок ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const throwError = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={throwError}>
            сделать ошибку
        </Button>
    );
};

