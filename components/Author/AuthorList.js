import { useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../../lib/queries';
import Pagination from '../Pagination';
import AuthorPreview from './AuthorPreview';

const AuthorList = () => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [filter, setFilter] = useState({
        name: '',
    });

    const { loading, error, data } = useQuery(GET_AUTHORS, {
        variables: { page, limit, filter },
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'network-only',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <div className="mb-6 p-4 bg-white rounded shadow">
                <h2 className="text-xl font-semibold mb-4">Filter Authors</h2>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={filter.name}
                            onChange={handleFilterChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Authors</h1>
                <Link href="/authors/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add New Author
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.authors.map((author) => (
                    <AuthorPreview key={author.id} author={author} />
                ))}
            </div>

            {/* <Pagination page={page} setPage={setPage} /> */}
        </div>
    );
};

export default AuthorList;