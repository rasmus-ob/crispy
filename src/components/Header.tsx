import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='p-10 text-white bg-red-500 flex items-center justify-between'> 
            <h1 className='text-5xl font-bold'>crispy</h1>
            <Navbar />
        </header>
    )
}

export default Header;
