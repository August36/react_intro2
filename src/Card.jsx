export default function Card({ header, body }) {
  return (
    <article className="card">
      <h2>{header}</h2>
      <p>{body}</p>
    </article>
  );
}
