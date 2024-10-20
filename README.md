
# NestJS Error Layer Project

## Опис

Цей проект є псевдокодом для демонстрації реалізації єдиного шару помилок у NestJS. У проекті реалізовано окремий модуль для обробки помилок, який інтегрований на рівні всього додатку.

## Основні компоненти

### Error Module
Модуль `ErrorModule` інкапсулює всю логіку, пов'язану з обробкою помилок. Він містить:
- **ErrorService**: для логування помилок.
- **AllExceptionsFilter**: для обробки всіх виключень, що виникають під час роботи додатку.

### Error Filter
Фільтр `AllExceptionsFilter` захоплює всі виключення і забезпечує єдину точку для їх обробки та логування.

### Кастомні винятки
- **BaseException**: базовий клас для всіх виключень.
- **UserNotFoundException**: виключення для випадків, коли користувача не знайдено.
- **EmailAlreadyUsedException**: виключення для випадків, коли email вже використовується.

