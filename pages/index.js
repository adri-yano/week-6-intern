import Header from '../components/Header';
import BlogBody from '../components/BlogBody';
import CommentForm from '../components/CommentForm';
import PostList from '../components/PostList';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6 bg-black text-white">
      <Header />
      <BlogBody />
      <CommentForm />
      <PostList />
    </main>
  );
}