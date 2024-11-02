import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='md:flex justify-between items-center my-10 gap-5 px-5 space-y-5  md:px-16 py-10 rounded-xl bg-gray-200'>
            <div className='space-y-5'>
                <h1 className='text-4xl md:text-5xl font-bold space-y-4'>Books to freshen up your bookshelf</h1>
                <div className=''>
                    <button className='w-full md:w-[30%] rounded-lg py-3 border font-semibold text-white bg-green-500'>View The List</button>
                </div>
            </div>
            <div>
                <img className='rounded-lg' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;