export default function FormField({ field, value, error, onChange }) {
  return (
    <div>
      <label htmlFor={field.name}>{field.label}</label>

      {field.type === "select" ? (
        <select
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          required={field.required}
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
          type={field.type}
          id={field.name}
          name={field.name}
          value={value}
          onChange={onChange}
          required={field.required}
          pattern={field.pattern}
        />
      )}

      {error && <p>{error}</p>}
    </div>
  );
}
