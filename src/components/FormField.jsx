export default function FormField({ field, value, error, onChange }) {
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
          required={field.required}
          className="w-full border border-gray-300 rounded px-3 py-2"
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
          required={field.required}
          pattern={field.pattern}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      )}

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
