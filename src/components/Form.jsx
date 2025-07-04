'use client';
import { useState } from "react";
import { formData } from "@/data/formData";
import FormField from "./FormField";
import FeedbackToast from "./FeedbackToast";

export default function Form() {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    formData.sections.forEach((section) => {
      section.fields.forEach((field) => {
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
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Skjema sendt:", formValues);
      setIsSubmitted(true);
      setFormValues({});
      setErrors({});
      setToastType("success");
      setToastMessage("Takk! Skjemaet er sendt inn og du vil få svar i løpet av noen virkedager.");
    } else {
      console.log("Valideringsfeil:", validationErrors);
      setIsSubmitted(false);
      setToastType("error");
      setToastMessage("Skjemaet inneholder feil. Vennligst rett dem og prøv igjen.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 mt-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">{formData.title}</h1>

      {formData.sections.map((section, index) => (
        <fieldset key={index} className="mb-6">
          <legend className="text-lg font-semibold mb-4">{section.title}</legend>
          {section.fields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={formValues[field.name] || ""}
              error={errors[field.name]}
              onChange={handleChange}
            />
          ))}
        </fieldset>
      ))}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Send inn
      </button>

      {toastMessage && (
        <FeedbackToast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage("")}
      />
)}

    </form>
  );
}

