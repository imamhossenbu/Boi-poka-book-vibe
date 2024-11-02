import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    const { bookName, author, image, rating, tags, category, review, totalPages, publisher,
        yearOfPublishing
    } = book;

    return (
        <div className="flex justify-between items-center gap-8 py-10">
            <div className="w-[50%] py-10 border flex justify-center items-center rounded-lg bg-gray-100">
                <img className="w-[60%]" src={image} alt="" />
            </div>
            <div className="w-[50%] space-y-3">
                <h1 className="font-bold text-3xl">{bookName}</h1>
                <p className="font-sans font-medium">By : {author}</p>
                <p className="border-t border-b py-3 font-sans font-medium">{category}</p>
                <p className="text-sm font-sans space-y-2 text-gray-600"><span className="font-bold">Review: </span>{review}</p>
                <p className="space-x-4  font-sans border-b pb-6">
                    <span className="font-bold">Tag</span>
                    <button className="px-6 py-2 bg-green-100 rounded-3xl text-green-500 font-semibold">#{tags[0]}</button>
                    <button className="px-6 py-2 bg-green-100 rounded-3xl text-green-500 font-semibold">#{tags[1]}</button>
                </p>
                <div className="font-sans text-sm">
                    <p>Number of Pages:<span className="font-bold">    {totalPages}</span></p>
                    <p>Publisher: <span className="font-bold">{publisher}</span></p>
                    <p>Year Of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
                    <p>Rating: <span className="font-bold">{rating}</span></p>
                    </div>
                    <div className="space-x-3">
                        <button className="border px-4 py-2 rounded-lg font-bold">Read</button>
                        <button className="bg-[#50B1C9] px-4 py-2 rounded-md">Wishlist</button>
                    </div>
              
            </div>
        </div>
    );
};

export default BookDetail;