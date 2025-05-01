import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../../lib/queries';

const ReviewList = ({ bookId }) => {
    const { loading, error, data } = useQuery(GET_REVIEWS, {
        variables: { bookId: parseInt(bookId) },
    });

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p>Error loading reviews: {error.message}</p>;

    if (!data.reviews.length) {
        return <p className="text-gray-500">No reviews yet.</p>;
    }

    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Reviews</h3>
            <div className="space-y-4">
                {data.reviews.map((review) => (
                    <div key={review.id} className="bg-white p-4 rounded shadow">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-medium">{review.reviewerName || 'Anonymous'}</h4>
                                <div className="flex items-center mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">
                                {new Date(review.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        {review.text && <p className="mt-2 text-gray-700">{review.text}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewList;