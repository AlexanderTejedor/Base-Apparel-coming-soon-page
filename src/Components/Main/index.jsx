import { useState } from 'react';
import '../../index.css';

const Main = () => {
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || !email.includes('@') || !email.includes('.')) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    return (
        <main>
            <figure className='pb-10'>
                <img src="/images/hero-mobile.jpg" alt="" />
            </figure>
            <section className='flex flex-col items-center'>
                <h1 className='font-semibold text-4xl tracking-[.5rem] text-center'>
                    <span className='text-4xl font-light'>WE'RE </span> COMING SOON
                </h1>
                <p className='text-center p-4 pb-8 text-[13px]'>
                    Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
                <form onSubmit={handleSubmit} noValidate className='relative flex w-full items-center py-2 px-5 h-12'>
                    <input
                        className={`outline-none ${isError ? 'border-red-500' : ''}`}
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <img
                        className={`absolute right-17 ${isError ? 'visible' : 'invisible'}`}
                        src="/images/icon-error.svg"
                        alt="error icon"
                    />
                    <div className='absolute flex justify-center items-center w-15 h-12 right-0 rounded-full'>
                        <input type="image" src='/images/icon-arrow.svg' />
                    </div>
                </form>
                <p className={`text-xs pt-2 ${isError ? 'visible text-red-500' : 'invisible'}`}>
                    Please provide a valid email
                </p>
            </section>
        </main>
    );
};

export { Main };