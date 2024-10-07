# ✅ Aufgabenstellung

### Ziel

Erstelle eine React-Komponente, die Daten von einer öffentlichen API abruft und diese anzeigt. Diese Aufgabe hilft dir, den Umgang mit den Hooks `useState` und `useEffect` sowie mit Promises zu üben.

1. **Komponente erstellen**:
    - Erstelle eine neue Komponente namens `ApiDataLoader`
    
2. **Daten von der API abrufen**:
    - Verwende die API von [jsonplaceholder](https://jsonplaceholder.typicode.com/todos/1) um Daten über eine To-Do-Aufgabe abzurufen
    - Implementiere `fetch` in der `useEffect`Hook, um die Daten zu laden, wenn die Komponente zum ersten Mal gerendert wird
    - Speichere die abgerufenen Daten in einem Zustand `data` mithilfe des `useState`Hooks
    
3. **Ladezustand verwalten**:
    - Implementiere einen weiteren Zustand `loading`, der anzeigt, ob die Daten noch geladen werden. Setze `loading` auf `true`, bevor die Daten abgerufen werden, und auf `false`, nachdem die Daten erfolgreich geladen oder ein Fehler aufgetreten ist.
    - Zeige während des Ladens einen Ladeindikator an, z.B. den Text „Lädt…“.
    
4. **Daten anzeigen**:
    - Sobald die Daten erfolgreich geladen sind, zeige die folgenden Informationen an:
        - ID der To-Do-Aufgabe
        - Titel der To-Do-Aufgabe
        - Status (ob die Aufgabe als „fertig“ oder „unvollständig“ markiert ist).
        
        
    - Wenn die Daten nicht verfügbar sind, zeige eine entsprechende Nachricht an (z.B. „Keine Daten verfügbar.“) → verändere zum Beispiel die URL so um, dass der Fehler geworfen wird:
        