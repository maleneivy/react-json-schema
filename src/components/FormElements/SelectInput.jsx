export default function SelectInput({ field, value, error, errorId, onChange }) {
  return (
    <select
      id={field.name}
      name={field.name}
      value={value}
      onChange={onChange}
      aria-invalid={!!error}
      aria-describedby={error ? errorId : undefined}
      className={`w-full border rounded px-3 py-2 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Velg en {field.label.toLowerCase()}</option>
      {field.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}