export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white ${props.className || ''}`}
    >
      {children}
    </button>
  );
}
