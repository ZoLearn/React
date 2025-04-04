# Airbean

Ni ska bygga en webbapp där det går att beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

## Arbetsgång

Ni ska arbeta enligt Scrum med dagliga standups (kan vara på morgonen, vid lunch eller eftermiddagen). Börja med att dela upp vilka stories ni ska göra denna vecka som bildar er sprint backlog. På onsdagar samt nästa måndag finns det möjlighet till handledning. På fredagar är det sprint review inför helklass där ni visar hur långt ni kommit och vilka stories ni gjort.

Böra med att en i gruppen skapar ett Reactprojekt och pushar upp detta och resterande i gruppen klonar ner repot och sen kör en `npm install`. Diskutera hur ni ska lägga upp strukturen, kodkonventioner, namnstandarder och om ni ska köra Typescript och/eller SASS (inget krav på dessa).

Arbeta med brancher i Git och gärna med pull requests, se följande inspelning från den agila kursen ifall ni vill ha en repetition på detta: https://vimeo.com/786252787/322f29aa9b.

## User stories

En gruppmedlem gör ett repo och bjuder in resterande gruppmedlemmar till det repot. Sedan under fliken **Projects** så välj ett nytt projekt och sätt upp enligt strukturen nedan samt kopiera över alla user stories. Ni får även använda Trello och skapa upp fler stories eller tasks (som kan vara mer tekniska).

https://github.com/users/zocom-christoffer-wallenberg/projects/11/views/1

## Figmaskiss

https://www.figma.com/file/ONcO3UQRPBLQsZc3FkysMt/AirBean-v.1.1---with-profile?node-id=0%3A1&t=aOiJ6vMVkTI7Xxth-0

## API-dokumentation

https://airbean-api-xjlcn.ondigitalocean.app/api/docs/

För att skicka med en token (som fås vid inloggning) i ett fetch-anrop.

```javascript
fetch("https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order", {
  headers: {
    authorization: "Bearer {token}",
  },
});
```
