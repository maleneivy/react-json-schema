export default function RangeInput({ field, value, error, errorId, onChange }) {
  return (
    <input
      type={"range"}
      id={field.name}
      name={field.name}
      value={value ?? field.startValue}
      min={field.minValue}
      max={field.maxValue}
      step={field.step}
      onChange={onChange}
      aria-invalid={!!error}
      aria-describedby={error ? errorId : undefined}
      className={`w-full border rounded px-3 py-2 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
  );
}