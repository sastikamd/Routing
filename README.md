# 🛒 Sastika's Market Place

A simple React-based e-commerce marketplace using the **Fake Store API**, featuring product listing, a responsive design, and a fully functional cart with quantity updates and discounts.

---

## 🚀 Features

- **Product Listing Page**
  - Fetches products from [Fake Store API](https://fakestoreapi.com/).
  - Displays product **image**, **title**, **price**, and **description**.
  - Responsive **grid layout** for mobile, tablet, and desktop.

- **Cart Page**
  - Add items to cart.
  - Remove items from cart.
  - Increase/Decrease item quantity.
  - Show total price for each item.
  - Show grand total price.
  - Apply **10% discount** on final total.
  - Dynamically updates prices on quantity change.

- **Navigation**
  - Navbar with **Home** and **Cart** links.
  - **Cart count** badge in the navbar.
  - Routing between **Home (Products)** and **Cart** using `react-router-dom`.

---

## 📸 Screenshots

*(Add your own screenshots here)*

---

## 🛠️ Tech Stack

- **Frontend:** React, JSX, CSS
- **Routing:** react-router-dom
- **API:** Fake Store API

---

## 📂 Folder Structure

```
src/
│
├── App.js
├── index.js
├── App.css
│
├── components/
│   ├── NavBar.js
│   ├── ProductList.js
│   ├── ProductCard.js
│   ├── Cart.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# 2️⃣ Install dependencies
npm install

# 3️⃣ Run the app
npm start

# 4️⃣ Open in your browser
# http://localhost:3000
```

---

## 🛒 Usage

- **Browse Products** — Visit the homepage to see all products.
- **Add to Cart** — Click "Add to Cart" on any product.
- **Remove from Cart** — Click "Remove from Cart" in the cart page or product card if already added.
- **Change Quantity** — Use "+" and "–" buttons to adjust quantity in the cart.
- **Discount** — A 10% discount is automatically applied on checkout.

---

## 🧩 API Reference

**Endpoint:**  
```
GET https://fakestoreapi.com/products
```

**Example Response:**
```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack",
    "price": 109.95,
    "description": "Your perfect pack for everyday use...",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  }
]
```

---

## 🐛 Common Git Issues & Fix

If you see:
```
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/username/repo.git'
```

It means your branch is not `main`.

### ✅ Fix in one go:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

If you want to keep using `master` instead:
```bash
git push -u origin master
```

---

## 📜 License
This project is **open source** and available under the [MIT License](LICENSE).
