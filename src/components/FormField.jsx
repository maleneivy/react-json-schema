export default function FormField({ field, value, error, onChange }) {
  const errorId = `${field.name}-error`;

  return (
    <div className="mb-4">
      <label htmlFor={field.name} className="block font-medium mb-1">
        {field.label}
      </label>

      {field.type === "select" ? (
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
      ) : (
        <input
          type={field.type === "email" ? "text" : field.type}
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
      )}

      {error && (
        <p id={errorId} className="text-red-600 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
