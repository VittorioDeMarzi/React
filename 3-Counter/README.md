# React Counter-Komponente

# ✅ Aufgabenstellung:

Erstelle eine React-Komponente namens `Counter`, die einen Zähler und eine Schaltfläche anzeigt. Jedes Mal, wenn der Benutzer auf die Schaltfläche klickt, soll der Zähler um 1 erhöht werden.

![Bildschirmfoto 2024-10-07 um 10.41.38.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/adb1bb61-4066-40e1-ae63-984951b2fa6d/7980b67a-6366-4ac6-9dee-22788497a390/Bildschirmfoto_2024-10-07_um_10.41.38.png)

**Ziel:**

Verwende den `useState`-Hook, um den Zustand des Zählers zu verwalten. Der Zustand des Zählers soll mit jedem Klick auf die Schaltfläche um eins erhöht werden.

![Bildschirmfoto 2024-10-07 um 10.41.22.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/adb1bb61-4066-40e1-ae63-984951b2fa6d/c143dbb8-d17b-48b6-a7e3-cdcff98237df/Bildschirmfoto_2024-10-07_um_10.41.22.png)

**Hinweise:**

- Nutze `const [count, setCount] = useState(0);`, um den Zählerzustand zu initialisieren.
- Verwende das `onClick`Event, um `setCount(count + 1)` aufzurufen, um den Zählerwert bei jedem Klick zu erhöhen.