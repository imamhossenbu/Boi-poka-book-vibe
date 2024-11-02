import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card card-compact bg-base-100 p-6  shadow-xl border">
                <figure className="bg-gray-200 py-8 rounded-xl">
                    <img
                        src={image}
                        className="h-[166px]"
                        alt={bookName} />
                </figure>
                <div className="space-x-2 text-center pt-6 font-sans">
                    <button className="px-6 py-2 bg-green-100 rounded-3xl text-green-500 font-semibold">{tags[0]}</button>
                    <button className="px-6 py-2 bg-green-100 rounded-3xl text-green-500 font-semibold">{tags[1]}</button>
                </div>
                <div className="card-body border-b-2 border-dashed">
                    <h2 className="card-title text-2xl">{bookName}</h2>
                    <p className="font-sans font-medium">By : {author}</p>

                </div>
                <div className="font-sans flex justify-between pt-4">
                    <p>{category}</p>
                    <div className="flex gap-2 items-center">
                        <p>{rating}</p>
                        <p><CiStar></CiStar></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;