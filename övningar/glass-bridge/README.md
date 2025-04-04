# Övning: Bygg ett Glass Bridge Game i React

## Bakgrund:

I den populära serien _Squid Game_ finns en utmaning där deltagarna måste korsa en glasbro, där varje platta antingen är säker eller farlig. Om de går på en farlig platta, faller de igenom. Detta spel är både en test av mod och strategi. I denna övning kommer du att bygga ett interaktivt **Glass Bridge Game** i React, där spelaren måste navigera genom en rad av farliga och säkra plattor.

## Mål:

Målet med övningen är att skapa ett funktionellt spel med React som simulerar den klassiska "Glass Bridge"-utmaningen från _Squid Game_. Du kommer att använda **React** för att bygga spelets logik.

## Kravspecifikation:

1. Spelet består av 10 rader där varje rad har två plattor:
   - En platta är säker (`'safe'`).
   - En platta är farlig (`'danger'`).
2. Spelaren kan endast gå framåt, en rad i taget.
3. Alla plattor ska slumpas men det ska alltid finnas en möjlig väg genom bron över till andra sida.
4. Om spelaren väljer en farlig platta, får de börja om från början.
5. Målet är att korsa bron med så få försök som möjligt och på kortast tid.
6. När spelaren når den sista raden ska ett "You Win!"-meddelande visas. Spelet ska också visa statistik om hur många försök och vilken tid det tog att korsa bron.

## Resultat:

- Ett funktionellt spel där spelaren navigerar genom rader med farliga och säkra plattor.
- Om spelaren klickar på en farlig platta, måste de börja om från början på samma rad.
- Spelet ska visa en vinnande skärm när spelaren når den sista raden, samt statistik om antal försök och tid.
- Möjlighet för spelaren att spela om för att förbättra sina resultat (färre försök och kortare tid).
