# Dashboard

-`/`
-statystyki dzisiejszych zamówień (zdalne i i lokalne)
-lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

-`/login`
-pola na login i hasło
-guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

-`/tables`
-wybór daty i godziny
-tabela z listą rezerwacji i wydarzeń
-każda kolumna = 1 stolik
-każdy wiersz = blok 30 minut
(ma przypominać widok tygodnia w kalendarzu)
-po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów

-`/tables/booking/:id`
-zawiera wszystkie informacje dotyczące rezerwawcji
-umożliwia edycję i zapisanie zmian -`/tables/booking/new`
-analogicznie do powyższej, bez początkowych informacji

-`/tables/event/:id`
-analogicznie do powyższej, dla eventów -`/tables/event/new`
-analogicznie do powyższej, bez początkowych informacji

# Widok kelnera

`/waiter`
-tabela
-w wierszach stoliki
-w kolumnach rożne rodzaje informacji (status, czas od ostatniej aktywności)
-w ostatniej kolumnie akcje dla danego stolika

`/waiter/order/new`
-numer stolika (edytowalny)
-menu produktów
-opcje wybranego produktu
-zamówienie (zamówione produkty z opcjami i ceną)
-kwota zamówienia

`/waiter/order/:id`
-jak powyższa

# Widok kuchni

`/kitchen`
-wyświetla listę zamówień w kolejności zożenia
-lista musi zawirać: - numer stolika (lub zamówienia zdalnego)
-pełne informacjie dot. zamowionych dań
-na liście musi być możliwość oznaczenia zamówienia jako zrealizowanie
