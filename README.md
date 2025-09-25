# 🔢 Vanilla JS Calculator

A simple calculator built with **HTML, CSS, and JavaScript**. It supports basic arithmetic operations including addition, subtraction, multiplication, and division — along with UI interactions and input validation.

## 🚀 Features

- Click-based input (no keyboard required)
- Basic operations: `+`, `−`, `×`, `÷`
- Precision rounding for floating-point results
- Clear/reset functionality
- Styled button interaction effects

## 🖥️ Demo

https://meena044.github.io/Calculator/
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/c256aaf3-8b23-4cc7-9113-f78e865ad96d" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/74dbb9d4-6a82-4a46-971d-4e64b3b9653e" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/5426a0a5-32db-449a-b5db-7be0cd1f0a7e" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/27ed8ef7-1162-4818-a2a7-2c75c088ea6e" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/88ec967c-4e74-4fa7-a98e-de15bd05e39f" />


---

## How It Works

- When a digit or symbol button is clicked, the value is displayed on the screen.
- Operators are normalized internally:
  - `×` → `*`
  - `÷` → `/`
  - `−` → `-`
- When `=` is clicked:
  - The expression is evaluated using JavaScript.
  - The result is **rounded to 6 decimal places** if it is a floating-point number.
- Clicking **C (clear)** resets the calculator's state and screen.

---

## Example Usage

| Expression      | Output     |
|----------------|------------|
| `2 + 2`         | `4`        |
| `10 ÷ 3`        | `3.3333`   |
| `5.5 × 1.2`     | `6.6`      |

---

## 🛠️ Tech Used

- HTML5
- CSS3
- JavaScript (ES6+)


