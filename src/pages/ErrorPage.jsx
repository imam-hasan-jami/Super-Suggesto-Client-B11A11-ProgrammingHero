import React from 'react';
import Error from '../components/Error';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <div>
            <main>
                <Error />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default ErrorPage;