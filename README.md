# Akane Discord Bot

<p align="center">
  <br>
  <a href="https://github.com/XSaitoKungX"><img src="/Images/Akana.jpg" height="500" alt="Akane Discord Bot"></a>
  <br>
  Ein multifunktionaler Discord-Bot, entwickelt mit ❤ von <a href="https://github.com/XSaitoKungX">XSaitoKungX</a>
  <br>
</p>

<center>
[![Discord Server](https://img.shields.io/discord/857622993702486067?color=blue&label=Discord%20Server&logo=discord&style=flat-square)](https://discord.gg/NDfK6NPZVZ)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue.svg?style=flat-square&logo=github)](https://github.com/XSaitoKungX)
[![Documentation](https://img.shields.io/badge/Documentation-Coming%20Soon..-orange.svg?style=flat-square)](https://example.com/docs)
[![Dashboard](https://img.shields.io/badge/Dashboard-Coming%20Soon..-green.svg?style=flat-square)](https://example.com/dashboard)
</center>

## Willkommen 👋

Willkommen beim Akane Discord Bot! Der Akane Discord Bot ist ein vielseitiger und anpassbarer Bot, der entwickelt wurde, um deine Discord-Server zu verbessern. Mit einer breiten Palette von Funktionen und Befehlen bietet dieser Bot eine unterhaltsame und nützliche Erfahrung für deine Community.

## Beschreibung 📚

Der Akane Discord Bot ist ein leistungsstarker, benutzerfreundlicher Bot, der entwickelt wurde, um deinem Server Funktionalitäten hinzuzufügen und das Discord-Erlebnis deiner Community zu verbessern. Mit einer breiten Palette von Funktionen, darunter Slash-Commands und einfache Musikbefehle, ist Akane die perfekte Ergänzung für jeden Discord-Server.

## **Features**
- 🤖 **Vielseitigkeit:** Der Bot bietet sowohl Unterhaltungs- als auch Moderationsbefehle.
- 📊 **Umfragen:** Erstelle benutzerdefinierte Umfragen und sammle Abstimmungen von deinen Servermitgliedern.
- 🖼️ **Bildbeschriftung:** Füge Textbeschriftungen zu Bildern hinzu, um sie persönlicher zu gestalten.
- 🎵 **Musik-Bot:** Spiele Musik in Sprachkanälen ab und steuere die Wiedergabe.
- 🛡️ **Moderation:** Moderiere deinen Server mit den integrierten Moderationsbefehlen.
- ⚙️ **Anpassbarkeit:** Passe den Bot an deine Bedürfnisse an und füge weitere Befehle hinzu.

## Funktionen 🚀
- [x] Prefix
- [x] Slash Commands
- [x] Simple Music Commands

## To-Do 📝

- [ ] Automoderation
- [ ] Benutzerdefinierte Befehle
- [ ] Erweiterte Musikbefehle
- [ ] Levelsystem
- [ ] Pollsystem
- [ ] Musik
- [ ] Ticketsystem
- [ ] Suggestion
- [ ] Reaktionsrollen
- [ ] Familienfunktionen
- [ ] Gewinnspiele
- [ ] Möchtest du den Bot nicht selbst hosten?

Bevor du Akane verwenden kannst, stelle sicher, dass du folgende Anforderungen erfüllst:

- Installiere [Visual Studio Code](https://code.visualstudio.com/download)
- [NodeJS](https://nodejs.org/en/download/current) v16 or higher
- **Discord.js-Bibliothek:** Die Bot-Funktionalität basiert auf der Discord.js-Bibliothek. Installiere sie über NodeJS mit dem Befehl: `npm install discord.js@latest`.
- Du benötigst ein Discord-Bot-Token. Erstelle deinen eigenen Bot auf der [Discord Developer-Website](https://discord.com/developers/applications) und kopiere den Token.
- [MongoDB](https://www.mongodb.com/try/download/community) (Required)

## Locales 🌎

Derzeit verfügbare Gebietsschemata sind:

- German (de-DE)
- English (en-US)

## Installationsanleitung 🏁

Folge diesen Schritten, um Akane auf deinem Server zu installieren:

1. [Fork das Repository](https://github.com/XSaitoKungX/Akane/fork)
2. Clone dein Fork: `git clone https://github.com/dein-benutzername/Akane.git`
3. Erstelle einen Feature-Branch: `git checkout -b mein-neues-feature`
4. Stage deine Änderungen: `git add .`
5. Commit deine Änderungen: Verwende `cz` oder `npm run commit`, aber nicht `git commit`
6. Push deinen Branch: `git push origin mein-neues-feature`
7. Erstelle eine Pull-Anfrage

## Statistics 📊

![Package Private](https://repobeats.axiom.co/api/embed/942b1cc2f77ede96220b334dac8b6535c1196ecf.svg 'Repobeats analytics image')

## Autoren

- [XSaitoKungX](https://github.com/XSaitoKungX) - Projektgründer und Hauptentwickler

## Version

Aktuelle Version: 1.0.0

## Kontakt

- Discord: [✘ | 𝐆𝐚𝐦𝐞 & 𝐂𝐡𝐢𝐥𝐥 𝐥𝐨𝐮𝐧𝐠𝐞](https://discord.gg/NDfK6NPZVZ)
- Website: [Coming Soon...](https://example.com)

## Konfiguration
```yml

### Allgemeine Einstellungen

- token: Der Bot-Token von Discord Developers.
- administrator: Die ID des Bot-Administrators und Serverinhabers.
- customers: Die ID der Käuferrolle.
- owners: Die IDs der Besitzer mit Zugang zu Premium-Befehlen.
- ...

### Datenbank

- mongoose: Der Link zur Mongoose-Datenbank.

### Dashboard

- enabled: Ist das Dashboard aktiviert?
- host: Server-IP, zu der der Bot eine Verbindung herstellen soll.
- port: Der Serverport, zu dem der Bot eine Verbindung herstellen soll.
- ...

### Discord-Einstellungen

- prefix: Das Präfix für Bot-Befehle.
- color: Die Farbe für Embeds.
- discord: Der Einladungslink zum Discord-Server.
- ...

### Webhooks

- errors: Webhook-Link für Fehlerprotokolle.
- commands: Webhook-Link für verwendete Befehlsprotokolle.
- ...

### Modmail

- enabled: Ist Modmail aktiviert?
- guildId: Server-ID, auf dem diese Funktion aktiv ist.
- ...

### Weitere Konfigurationen

Füge hier alle anderen Konfigurationseinstellungen hinzu, die dein Bot verwendet.

## Tickets

- placeholders: Text für das Ticketmenü.
- options: Menüoptionen wie Dienste, Support, Berichte, usw.
- ...

## Setups

- levels: ...
- rooms: ...
- ...

## Automoderation

- channel: ...
- antibot: ...
- channels: ...
- ...

## Modals

- global: ...
- bugs: ...
- ...

```

## Mitwirkende 🤝
### **Benutzerprofil 🧑‍💼**
![Benutzerlogo](https://avatars.githubusercontent.com/u/64774999?v=4&s=100)
- **Benutzername:** [XSaitoKungX]
- **GitHub:** [XSaitoKungX](https://github.com/XSaitoKungX/)

# 🔥┆Github Stats
![profile]
![languages]

[profile]: https://github-readme-stats.vercel.app/api?username=XSaitoKungX&show_icons=true&theme=radical&include_all_commits=true&count_private=true
[languages]: https://github-readme-stats.vercel.app/api/top-langs/?username=XSaitoKungX&show_icons=true&theme=github_dark&include_all_commits=true&count_private=true&layout=compact

## Lizenz 📝

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE) lizenziert.

Die MIT-Lizenz ist eine Open-Source-Lizenz, die dir erlaubt, das Projekt in deinen eigenen Projekten zu verwenden, zu ändern und zu verteilen, solange du die Lizenzbedingungen einhältst. Weitere Informationen findest du in der [Lizenzdatei](LICENSE).

```plaintext
MIT License

Urheberrecht (c) [2023] [XSaitoKungX]

Die Erlaubnis wird hiermit kostenlos erteilt, jede Person, die eine Kopie dieser Software und der zugehörigen Dokumentationsdateien (die "Software") erhält, sie ohne Einschränkung zu verwenden, zu kopieren, zu ändern, zusammenzuführen, zu veröffentlichen, zu verteilen, zu sublizenzieren und/oder zu verkaufen, und Personen, denen die Software zur Verfügung gestellt wird, dies unter den folgenden Bedingungen zu gestatten:

Der obige Urheberrechtshinweis und dieser Erlaubnishinweis müssen in allen Kopien oder wesentlichen Teilen der Software enthalten sein.

DIE SOFTWARE WIRD OHNE MÄNGELGEWÄHR UND OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNG, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE GEWÄHRLEISTUNG DER MARKTFÄHIGKEIT, DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND DER NICHTVERLETZUNG VON RECHTEN DRITTER, BEREITGESTELLT. IN KEINEM FALL HAFTEN DIE AUTOREN ODER COPYRIGHT-INHABER FÜR JEGLICHEN SCHADEN ODER SONSTIGE HAFTUNG, OB AUS DEM VERTRAG, DELIKT ODER ANDEREN VERHALTENSWEISEN, DIE SICH AUS, IN VERBINDUNG MIT DER SOFTWARE ODER DER NUTZUNG ODER SONSTIGEN VERWENDUNG DER SOFTWARE ERGEBEN.
```
---

© 2023 XSaitoKungX | Entwickelt mit ❤️ und Code
