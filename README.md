# Wallet_Hunter_Shows

# 💼 Wallet Hunter | Forbes Edition

Wallet Hunter | Forbes Edition is a professional website built using **Create React App**, designed to host high-profile events, showcase influential speakers, highlight community/media partners, and share industry blogs and updates. With seamless form handling integrated with **Google Sheets**, this site provides a clean, engaging, and functional interface.

---

## 🌐 Live Demo

[Click here to view the live website](https://your-deployment-link.com)

---

## 📸 Project Preview

![Wallet Hunter Hero Section](./screenshots/hero.png)
![Speakers Section](./screenshots/speakers.png)
![Blog Section](./screenshots/blog.png)

---

## 📂 Folder Structure


├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/              # All speaker/profile/event images
│   │   └── videos/              # Any hero or background videos
│   │
│   ├── components/
│   │   ├── Home.jsx             # Main page combining all sections
│   │   ├── LoadingPage.jsx      # Optional loading screen
│   │   ├── Navbar.jsx           # Top navigation
│   │   ├── Navbar.css           # Navbar styling
│   │
│   ├── sections/
│   │   ├── About.jsx            # About us section
│   │   ├── Hero.jsx             # Hero banner
│   │   ├── Speakers.jsx         # Speaker cards with social links
│   │   ├── MediaPartner.jsx     # Section + CTA for media partners
│   │   ├── CommunityPartner.jsx # Section + CTA for community partners
│   │   ├── Newsletter.jsx       # Newsletter subscription form
│   │   └── Footer.jsx           # Footer with links/socials
│   │
│   ├
│   |── forms/
│   │       ├── CommunityPartnerForm.jsx  # Form to become a community partner
│   │       └── MediaPartnerForm.jsx      # Form to become a media partner
│   │
│   ├── App.js                  # Main React app component
│   ├── index.js                # React DOM entry point
│   
│
├── package.json
├── README.md
└── .gitignore



---

## ✨ Features

- ⚡ **Hero Section** – Eye-catching landing banner for event branding.
- 🎙️ **Speakers Section** – Interactive cards featuring speaker images, names, bios, and social links (Twitter, Telegram, LinkedIn).
- 🤝 **Become a Media/Community Partner** – Forms integrated with **Google Sheets** to store partner submissions.
- 📰 **Blog Section** – Responsive blog card layout to share insights and news.
- 📬 **Newsletter Section** – Users can subscribe with their email for updates.
- 🌙 **Light/Dark Theme Ready** (if applicable).
- 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop.

---

## 🔧 Tech Stack

- **Frontend**: React.js (Create React App)
- **Styling**: CSS  / Styled Components (specify what you used)
- **Form Integration**: Google Apps Script + Google Sheets
- **Icons**: FontAwesome / React Icons


---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/wallet-hunter-forbes-edition.git
cd wallet-hunter-forbes-edition
npm install

npm run start


