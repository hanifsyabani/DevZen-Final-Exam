export default function Header({ title1, title2 }) {
  return (
    <h1 className="text-3xl font-bold text-primary text-center">
      {title1} <span className="text-secondary">{title2}</span>
    </h1>
  );
}
