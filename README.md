## Opdracht 2
Onderzoek minimaal twee features. Dat betekent uitvogelen wat het voor impact heeft op de sites die je kent en normaal gebruikt. Zoek uit hoe je de feature kan testen. Kies sites in je directe omgeving: van je werkgever, lokale vereniging, de cafetaria om de hoek, en/of eerdere projecten die je zelf gedaan hebt. Onderzoek de problemen, cijfers en/of meningen. Bedenk ook hoe je de problemen zou kunnen oplossen. Ik heb zelf gekozen om onderzoek te doen naar _'Kleur uitzetten & kleurenblindheid instellen'_ en _'Breedband internet uitzetten'_.

## Kleur uitzetten & kleurenblindheid instellen
### Test tools
Ik ben mijn onderzoek begonnen door te Googlen naar tools of websites die me hierbij konden helpen. Al snel stuitte ik op een website die het werk voor je doet; [Toptal Color Blind Filter](https://www.toptal.com/designers/colorfilter/). Je kunt een URL meegeven en een filter met de type kleurenblindheid. Op zich geen slechte tool, maar er zitten wel wat haken en ogen aan. Ten eerste zie je alleen maar 1 pagina tegelijk, je kunt niet browsen door de site. Hierdoor kun je bijvoorbeeld geen pagina's bekijken waar je authenticatie voor nodig hebt. Bovendien kreeg ik vaak een error message dat de sessie verlopen was, maar na refreshen deed de site het nog steeds niet. Niet zo behulpzaam dus!😅

Vervolgens ging ik op onderzoek uit naar de mogelijkheden van Mac OSX. Ik wist dat er vrij veel accessibility features bij Mac worden geleverd. En ook voor kleurenblindheid is er een modus!🥳 Als je onder `System Preferences -> Accessibility -> Display` kijkt, zie je onderaan een colour filter mode. Hier kun je de hele interface bedekken met een filter van verschillende type kleurenblindheid. Je kunt zelfs de intensiteit van het filter aanpassen om de verschillende degradaties van kleurenblindheid te bekijken. Super cool om te gebruiken en ook heel gemakkelijk. Je kunt meerdere websites via het filter bekijken en ook door de websites browsen. Bovendien is het op originele schaal, waardoor het beter te zien is dan op de eerder genoemde website. Je bent ook niet afhankelijk van een andere tool. Deze modus is altijd tot je beschikking als je in bezit bent van een Mac. Het nadeel is dat de tool alleen een filter gooit over jouw beeld, waardoor het gewone beeld niet veranderd. Dat is nadelig als je screenshots wilt maken of als je een color-picker wilt gebruiken.

<img width="50%" alt="Screenshot 2021-03-11 at 12 46 09" src="https://user-images.githubusercontent.com/25977763/110782830-e75ff500-8267-11eb-9d7f-482cc63337c3.png"/><img width="50%" alt="Screenshot 2021-03-11 at 12 46 15" src="https://user-images.githubusercontent.com/25977763/110782845-e929b880-8267-11eb-8702-43ff3235c139.png"/>

Maar wat als je nu een Windows gebruiker bent? Dan heeft de duivel een plekje voor je gereserveerd beneden en moet je accepteren dat je nu eenmaal inferieur bent😈🔥🔥🔥.... All jokes aside: in Windows 10 zit een soort gelijke feature. Ik heb geen Windows device tot mijn beschikking, dus ik was niet in staat om dit te testen. Maar volgens [dit artikel](https://www.makeuseof.com/tag/colorblind-windows-trick-distinguish-colors/#:~:text=To%20turn%20on%20the%20colorblind,Turn%20on%20color%20filters%20slider.) kun je onder `Settings -> Ease of Access` aan de linkerkant een color filter tab vinden. Dezelfde filters zijn aanwezig, behalve de full greyscale mode. Ook kan je hier niet de intensiteit aanpassen.

In de Chrome browser is er ook nog de [Open CC Checker](https://chrome.google.com/webstore/detail/colour-contrast-checker/nmmjeclfkgjdomacpcflgdkgpphpmnfe?hl=en-GB) extensie. Deze checkt het contrast van de website's kleuren. Hierdoor kun je de achtergrond met de voorgrond kleuren vergelijken en krijg je een pass of fail voor verschillende type tekst.

### Bevindingen
Met deze info ben ik het web gaan testen dat ik regelmatig gebruik. Waar beter beginnen dan bij GitHub?! Hier zie je direct dat er best wel goed is nagedacht over het contrast. Bij iedere filter is duidelijk een onderscheid te maken tussen de elementen. Zelfs bij greyscale is het meeste redelijk helder te onderscheiden. Alleen bij de distributions sectie op je profiel zijn de verschillende kleuren groen wat lastig te onderscheiden. Met name de heel licht groen en de witte vlakken.

<img width="100%" alt="Greyscaled distibution" src="https://user-images.githubusercontent.com/25977763/110789355-124e4700-8270-11eb-90d6-78193075148a.jpg"/>

Ook heb ik een project van mezelf bekeken door de ogen van een kleurenblind iemand. Ik heb gekozen om een project te bekijken waar ik niet bewust bezig ben geweest met contrast. Ook hier viel het eigenlijk reuze mee. Wat ik echter niet had verwacht is dat gradient kleuren heel slecht te zien zijn met kleurenblindheid. Het is logisch, maar ik had hier nooit bij stil gestaan.

<img width="50%" alt="expense-tracker-color" src="https://user-images.githubusercontent.com/25977763/110790239-1a5ab680-8271-11eb-8a0e-f68234029303.png"><img width="50%" alt="expense-tracker-nocolor" src="https://user-images.githubusercontent.com/25977763/110790244-1cbd1080-8271-11eb-922b-b232ade93a9c.png">

### Conclusie
Tegenwoordig is het heel makkelijk om te stappen in het leven van een kleurenblind persoon op het web. Wellicht dat je het daarom zo geïntegreerd terug ziet op het web. De meeste websites die ik dagelijks bezoek of zelf heb gemaakt zijn heel goed te gebruiken als je kleurenblind bent. De ervaring van het design is echter wel totaal anders. De website krijgt een hele andere sfeer dan dat origineel bedoeld was. Het is helaas niet een optie op sites om een color-blind mode aan te zetten, die de kleuren zodanig aanpast dat het de sfeer bewaard. Wellicht een coole toekomstige trend naast darkmode?👀

## Breedband en internet
### Test tools
De meeste browsers geven de mogelijkheid via de Developer tools om een traget netwerk na te bootsen. Hierdoor kun je de ervaring van de gebruiker testen op een traag 3G netwerk en kijken waar er nog verbeteringen in liggen. Ook via de **LightHouse** tool kun je een rapport genereren (ook voor accesabillity en andere onderwerpen). LightHouse geeft ook een aantal punten die je wellicht kunt verbeteren zodat de website hoger scoort, wat ontzettend handig is voor onervaren developers.

### Bevidingen
Als testkonijn heb ik Youtube gekozen. Omdat video's en afbeeldingen over het algemeen langer nodig hebben om geladen te worden, vond ik dit een mooie test. Met de developer tools in Chrome heb ik bekeken hoe lang het duurt voordat de site geladen is op een traag 3G netwerk. Niet alleen de snelheid viel opzich best mee! Youtube heeft een hele fijne manier gevonden om hun content in te laden.

![Youtube loading](https://user-images.githubusercontent.com/25977763/110792482-c00f2500-8273-11eb-942d-0d510559bb54.gif)

Als de content nog niet opgehaald is, gebruikt Youtube placeholders zodat de content niet verspringt als het geladen is. Het lazy loaden van de video's en thumbnails gaat één voor één, waardoor de **TtI(Time to Interactive)** best goed is. Voordat de eerste paint volledig klaar is duurt alleen wel vrij lang (circa 10s).

Mijn eigen applicatie van Progressive Web App doet het echter niet zo goed😅... De applicatie duurt heeeeel lang om te laden. De volledige paint duurde maarliefst 38 seconden!!!! De loading state die ik heb toegevoegd werkt helaas ook niet zo soepel als dat ik verwacht had. Die verdwijnt als als de content is geladen, maar niet als de fetch klaar is. Waardoor er een behoorlijke tijd een lege feed is te zien.

![Loading ImageFeeder)](https://user-images.githubusercontent.com/25977763/110796268-10888180-8278-11eb-9f76-5d63b51fd842.gif)

### Conclusie
Over het algemeen zijn de grotere bedrijven wat beter ingesteld op traag internet. Maar beginnende developers zoals ikzelf lopen al snel tegen een muur op van breedband. Tools zoals LightHouse maken het voor ons niet alleen makkelijker om de problemen zelf te ervaren en te testen, maar geven ons ook al suggesties waar het meeste winst te behalen valt. Toch zie je dat we als developers als snel ervan uitgaan dat we een goede verbinding tot onze beschikking hebben.
