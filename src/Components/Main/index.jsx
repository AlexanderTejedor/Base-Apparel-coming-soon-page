import '../../index.css'

const Main = () =>{
    return (
        <main>
            <figure className='pb-10'>
                <img src="/images/hero-mobile.jpg" alt="" />
            </figure>
            <section className='flex flex-col items-center'>
                <h1 className='font-semibold text-4xl tracking-[.5rem] text-center'><span className='text-4xl font-light'>WE'RE </span> COMING SOON</h1>
                <p className='text-center p-4 pb-8 text-[13px]'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
                <form className='flex w-full justify-evenly py-3'> 
                    <input type="email" placeholder="Email Address"/>
                    <img src="/images/icon-arrow.svg" alt="Arrow image" />
                </form>
            </section>
        </main>
    )
}

export { Main }