export default function AboutLayout({ children }) {
  return (
    <>
      <div>{children}</div>
      <div className="mt-8">
        <h2 className="mb-4 text-xl">You might also like</h2>
        <ul>
          <li>First blog post</li>
          <li>Second Blog post</li>
        </ul>
      </div>
    </>
  );
}
