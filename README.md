# Pages Not Found

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory with:
   ```
   NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Managing Books

#### Creating a Book
1. Navigate to the Books page
2. Click "Add New Book"
3. Fill in the book details:
   - Title (required)
   - Genre
   - Author ID (required) [USE VALUE - 1] 
4. Click "Add Book"

#### Viewing Books
- Each book shows:
  - Title
  - Genre
  - Author name
  - Average rating
- Use the filter section to search books by:
  - Title
  - Genre
  - Author ID

### Managing Authors

#### Creating an Author
1. Navigate to the Authors page
2. Click "Add New Author"
3. Enter the author's name
4. Click "Add Author"

#### Viewing Authors
- Authors are listed with their:
  - Name
  - Number of books
  - List of their books

### Writing Reviews

#### Adding a Review
1. Navigate to a book's detail page
2. Scroll to the "Add Your Review" section
3. Fill in the review details:
   - Your name (optional)
   - Rating (1-5 stars)
   - Review text
4. Click "Submit Review"

#### Viewing Reviews
- Reviews are displayed on the book's detail page
- Each review shows:
  - Reviewer name (or "Anonymous" if not provided)
  - Star rating
  - Review text

## Features
- Filter books by:
  - Title (partial matches)
  - Genre
  - Author ID
