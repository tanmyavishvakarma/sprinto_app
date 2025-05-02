import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR } from '../../lib/queries';
import Link from 'next/link';

const AuthorDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data } = useQuery(GET_AUTHOR, {
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'network-only',
        variables: { id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const author = data.author;

    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">{author.name}</h1>
                        <h2 className="text-xl font-semibold mb-2">Books</h2>
                        {author.books?.length > 0 ? (
                            <ul className="space-y-2">
                                {author.books.map((book) => (
                                    <li key={book.id}>
                                        <Link
                                            href={`/books/${book.id}`}
                                            className="text-blue-600 hover:underline flex items-center"
                                        >
                                            {book.title}
                                            {book.averageRating && (
                                                <span className="ml-2 text-sm text-gray-600">
                                                    ({book.averageRating.toFixed(1)} ★)
                                                </span>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No books found for this author.</p>
                        )}
                    </div>
                    <div className="flex space-x-2">
                        <Link
                            href={`/authors/${id}/edit`}
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                            Edit
                        </Link>
                        <Link
                            href="/authors"
                            className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700"
                        >
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorDetailPage;