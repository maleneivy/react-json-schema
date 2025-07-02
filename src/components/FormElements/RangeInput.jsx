export default function RangeInput({ field, value, error, errorId, onChange }) {
  const actualValue = value !== undefined && value !== "" ? value : field.startValue || field.minValue;
  const personLabel = actualValue === "1" ? "person" : "personer";

  return (
    <div>
      <input
        type="range"
        id={field.name}
        name={field.name}
        value={actualValue}
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

      <p className="text-md text-gray-700 text-right">
        {actualValue} {personLabel}
      </p>

    </div>
  );
}
