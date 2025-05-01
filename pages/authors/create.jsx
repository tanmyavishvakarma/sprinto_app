import { useRouter } from 'next/router';
import AuthorForm from '../../components/Author/AuthorForm';

const CreateAuthorPage = () => {
    const router = useRouter();

    const handleSuccess = () => {
        router.push('/authors');
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Add New Author</h1>
            <AuthorForm onSuccess={handleSuccess} />
        </div>
    );
};

export default CreateAuthorPage;