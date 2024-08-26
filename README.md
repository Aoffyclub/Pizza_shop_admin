
# 🍕 Pizza Shop Admin

This is the admin panel for the Pizza Shop web application, built with Vite and React. It allows administrators to manage the menu, orders, users, and other settings. Demo : https://aoffydev.online/pizzaAdmin/

## 🛠️ Features

- Manage pizza menu items (add, edit, delete).
- View and process customer orders.
- Manage user accounts and roles.
- Dashboard with key statistics.
- Secure login for administrators.

## 🚀 Technologies Used

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React**: For building the user interface.
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E) **Vite**: As the build tool for fast development.
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) **Axios**: For making API requests.
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) **React Router**: For routing within the application.
- ![Context API](https://img.shields.io/badge/Context_API-007ACC?style=for-the-badge&logo=react&logoColor=white) **Context API**: For managing global state.
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) Utility-first CSS framework for styling.
- ![ShanCN](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white) : Utility-first CSS Component for styling.

## ⚙️ Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Aoffyclub/Pizza_shop_admin.git
   cd Pizza_shop_admin
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and configure the following variables:

   ```plaintext
   VITE_BASE_API=<Your API base URL>
   VITE_BASE_URL=<Your frontend base URL>
   ```

   Replace `<Your API base URL>` with the base URL of your backend API and `<Your frontend base URL>` with the URL where the frontend will be hosted.

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:3000`.

## 📝 Usage

- **Managing Menu**: Add, edit, or remove pizza items from the menu.
- **Order Processing**: View and update the status of customer orders.
- **User Management**: Manage user accounts, including roles and permissions.
- **Dashboard**: View key statistics and metrics related to the shop’s operations.

## 📂 Project Structure

The project structure is organized as follows:

```
Pizza_shop_admin/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons, etc.
│   ├── components/       # Reusable components
│   ├── pages/            # Application pages
│   ├── context/          # Context API files
│   ├── services/         # API services
│   ├── styles/           # Global styles
│   └── App.jsx           # Root component
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
└── vite.config.js        # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.


## 📧 Contact

For any inquiries, feel free to reach out to the project maintainer at [offfyclub@gmail.com](mailto:aoffyclub@gmail.com).