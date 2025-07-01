'use client';
import { useState } from "react";
import { formData } from "@/data/formData";
import FormField from "./FormField";

export default function Form() {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    formData.fields.forEach((field) => {
      const value = formValues[field.name] || "";
      if (field.required && !value.trim()) {
        newErrors[field.name] = `${field.label} er påkrevd`;
      } else if (field.pattern) {
        const regex = new RegExp(field.pattern);
        if (!regex.test(value)) {
          newErrors[field.name] = field.errorMessage || `${field.label} er ugyldig`;
        }
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Skjema sendt:", formValues);
      setFormValues({});
      setErrors({});
    } else {
      console.log("Valideringsfeil:", validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 mt-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{formData.title}</h1>
      {formData.fields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={formValues[field.name] || ""}
          error={errors[field.name]}
          onChange={handleChange}
        />
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Send inn
      </button>
    </form>
  );
}
