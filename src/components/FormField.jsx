import TextInput from "./FormElements/TextInput";
import SelectInput from "./FormElements/SelectInput";
import RangeInput from "./FormElements/RangeInput";

export default function FormField({ field, value, error, onChange }) {
  const errorId = `${field.name}-error`;

  return (
    <div className="mb-4">
      <label htmlFor={field.name} className="block font-medium mb-1">
        {field.label}
      </label>

      {field.type === "text" && 
        <TextInput 
          field={field}
          value={value}
          error={error}
          errorId={errorId}
          onChange={onChange}
        />
      }

      {field.type === "email" && 
        <TextInput 
          field={field}
          value={value}
          error={error}
          errorId={errorId}
          onChange={onChange}
        />
      }

      {field.type === "select" && 
        <SelectInput 
          field={field}
          value={value}
          error={error}
          errorId={errorId}
          onChange={onChange}
        />
      }

      {field.type === "range" && 
        <RangeInput 
          field={field}
          value={value}
          error={error}
          errorId={errorId}
          onChange={onChange}
        />
      }

      {error && (
        <p id={errorId} className="text-red-600 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
