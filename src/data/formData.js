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
      label: "Fullt navn",
      name: "full_name",
      type: "text",
      required: true,
      pattern: "^[a-zA-ZæøåÆØÅ\\-\\s]{2,}$", 
      errorMessage: "Navnet kan bare inneholde bokstaver og må være minst 2 tegn"
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