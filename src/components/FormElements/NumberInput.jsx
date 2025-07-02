export default function NumberInput({ field, value, error, errorId, onChange }) {
  return (
    <input
      type={"number"}
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