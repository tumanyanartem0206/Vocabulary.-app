VOCABULARY 0.6 — DARK GLASS + SWIPE FLASHCARDS

1. Unzip folder Vocabulary-v0.7 and upload its contents to the site directory of the SAME existing GitHub Pages repository. Do not create a different site if you want the same local dictionary.
2. On your iPhone, open the installed app while online. If the old interface remains, close it and reopen after Safari has loaded the updated site.
3. To test on Windows, use a local HTTP server: from inside this folder run `python -m http.server 8000`, then open http://localhost:8000/. This also tests the service worker and PWA assets. Double-clicking index.html may work for some features but is not a complete PWA test.
4. Tap Учить > Карточки, swipe between categories, and choose На время for a timed session. Background categories fade out. Drag the central category downward until the glowing slot magnetizes it. The countdown begins AFTER the insertion animation.
5. In a flashcard round, swipe RIGHT for Знаю (know it), LEFT for Не знаю (don't know); the latter reveals the translation, then Следующее слово advances. The onscreen buttons and keyboard arrow keys also work.
6. Word data uses the SAME localStorage key ('vocabulary-db') as previous releases. Back up using Ещё > Экспорт before deployment. If using a new URL/domain/browser, previous local data will not automatically follow you; use Экспорт/Импорт.
7. Without internet, existing saved words and flashcard practice work. Online dictionary lookup/transcription require network access.
8. Visual effects approximate the reference using CSS; they cannot use Apple's native Liquid Glass framework in a PWA. Animation performance varies by iPhone/Safari version. Reduced Motion system preferences are respected.

VERSION 0.6. 20 November 2026.
