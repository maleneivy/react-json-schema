export default function TextInput({ field, value, error, onChange }) {
  return (
    <input
      type={"text"}
      id={field.name}
      name={field.name}
      value={value}
      onChange={onChange}
      aria-invalid={!!error}
      aria-describedby={error ? errorId : undefined}
      className={`w-full border rounded px-3 py-2 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
  );
}