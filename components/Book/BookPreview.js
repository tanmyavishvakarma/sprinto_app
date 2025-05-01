import Link from 'next/link';

const BookPreview = ({ book }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-1">Genre: {book.genre || 'N/A'}</p>
                <p className="text-gray-600 mb-1">Author: {book.author?.name || 'Unknown'}</p>
                <p className="text-gray-600 mb-4">
                    Rating: {book.averageRating ? book.averageRating.toFixed(1) : 'No ratings yet'}
                </p>
                <Link
                    href={`/books/${book.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default BookPreview;