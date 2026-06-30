export default function BulletList({ items }) {
  return (
    <ul className="content-ul">
      {items.map((item, i) => (
        <li key={i}>
          {typeof item === 'string' ? (
            item
          ) : (
            <>
              <b>{item.label}</b><span>{item.text}</span>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
