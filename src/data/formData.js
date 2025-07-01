export const formData = {
  title: "Finn en bedre strømavtale",
  fields: [
    {
      label: "Boligtype",
      name: "property_type",
      type: "select",
      options: ["Enebolig", "Leilighet", "Rekkehus", "Hytte", "Annet"],
      required: true
    },
    {
      label: "Adresse",
      name: "address",
      type: "text",
      required: true
    },
    {
      label: "Postnummer",
      name: "postal_code",
      type: "text",
      required: true,
      pattern: "^[0-9]{4}$",
      errorMessage: "Postnummer må være 4 siffer"
    },
    {
      label: "Navn",
      name: "name",
      type: "text",
      required: true,
      errorMessage: "Vennligst oppgi navnet ditt"
    },
    {
      label: "E-post",
      name: "email",
      type: "email",
      required: true,
      pattern: "^[\\w.-]+@[\\w.-]+\\.\\w{2,}$",
      errorMessage: "Skriv inn en gyldig e-postadresse"
    }
  ]
};