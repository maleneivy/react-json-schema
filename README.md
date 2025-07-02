# Skjemaprosjekt – Dynamisk og tilgjengelig React-skjema

Dette prosjektet er et brukervennlig skjema laget i React (Next.js), hvor skjemastrukturen er definert i filen `formData.js` som eksporterer skjemadata som et JavaScript-objekt.
Skjemaet er inndelt i seksjoner, og hver feltkomponent er bygget for å være gjenbrukbar. Det inkluderer dynamisk validering og visuell tilbakemelding ved innsending.

## Funksjonalitet

- Dynamisk generert skjema basert på `formData.js`
- Gjenbrukbare felttyper: tekst, e-post, select, range og nummer
- Visuell og tilgjengelig feilhåndtering med ARIA-attributter
- Strukturert i seksjoner: "Hvor bor du?" og "Hvem er du?"
- Tilbakemelding ved innsending via `FeedbackToast`-komponent

## Teknologi

- React (Next.js)
- Tailwind CSS
- Klientbasert validering
- Tilgjengelighetsvennlig markup

## Hva jeg har gjort og hvorfor

Jeg ønsket å lage et fleksibelt skjema med fokus på:

- Strukturert og ren kode med gode og gjenbrukbare komponenter
- Et oppsett som er lett å vedlikeholde og utvide
- En brukervennlig og tilgjengelig opplevelse
- Klart skille mellom logikk og visning

Komponentene er laget med tanke på gjenbruk og generalisering. All skjemadata er flyttet ut til en egen fil for å gjøre komponentene frakoblet selve innholdet. Feltene valideres kun ved innsending for å unngå forstyrrende feilmeldinger under utfylling.

## Mulige forbedringer og videre arbeid

- Støtte for initielle verdier for feltene
    - Akkurat nå må hvert felt fylles ut/endres av brukeren for at de skal lagres i `formValues`
- Dele skjemaet opp i steg, med "Neste"-knapp og trinnvis validering
- Integrere kart (f.eks. Google Maps eller Norgeskart) ved adressefeltet
- Estimere strømforbruk dersom bruker ikke vet nøyaktig kWh, basert på boligtype og antall personer
- Bedre mobiltilpasning og visuell plassering av tilbakemelding
- Lokal lagring (f.eks. via `localStorage`) for midlertidig lagring av skjema
- Implementere enhetstester for validering og feltrendering
- Klargjøre skjemaet for integrasjon mot API

## Oppsett og bruk

1. Klon repo og installer avhengigheter:

```sh
npm install
```

2. Start utviklingsserveren

```sh
npm run dev
```

3. Åpne nettleser på http://localhost:3000/


## Mål

Målet med prosjektet har vært å trene på komponentstruktur, validerings, tilgjengelighet og brukeropplevelse - samt bygge noe som enkelt kan videreutvikles eller brukes som grunnlag for andre skjemaer. 

