export const formData = {
  title: "Finn en bedre strømavtale",
  sections: [
    {
      title: "Hvor bor du?",
      fields: [
        { label: "Boligtype", name: "property_types", type: "select", options: ["Enebolig", "Leilighet", "Rekkehus", "Hytte", "Annet"], required: true },
        { label: "Antall i husholdningen", name: "peopleCount", type: "range", required: true, minValue: 1, maxValue: 10, step: 1, startValue: 1 },
        { label: "Strømforbruk i året (kWh)", name: "electricityUsage", type: "number" },
        { label: "Adresse", name: "address", type: "text", required: true },
        { label: "Postnummer", name: "zip", type: "text", required: true }
      ]
    },
    {
      title: "Hvem er du?",
      fields: [
        { label: "Navn", name: "name", type: "text", required: true },
        { label: "E-post", name: "email", type: "email", required: true, pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$", errorMessage: "Ugyldig e-post" },
        { label: "Telefonnummer", name: "phone", type: "text", required: true }
      ]
    }
  ]
};
