## <a name="tech-stack">⚙️ Tech Stack</a>

# 🚀 Sujal Thakur - Portfolio Website

Welcome to my **interactive 3D portfolio website**, crafted using modern web technologies to provide a visually immersive experience. Explore my skills, projects, and professional journey in an engaging way!

## 📌 Live Demo

🔗 **[View Live Website]((https://sujalcodes.pages.dev/))** 

---

## ⚙️ Tech Stack

This portfolio leverages cutting-edge technologies to ensure a smooth and interactive user experience.

- **Frontend**:

  - React.js
  - Three.js
  - React Three Fiber
  - React Three Drei
  - Vite
  - Tailwind CSS

- **APIs & Services**:
  - EmailJS (for contact form handling)

---

## 🔥 Features

🎨 **Immersive 3D Hero Section** - A fully interactive hacker room that reacts to mouse movements, complemented by animated elements.

📌 **About Me** - A sleek bento-grid layout showcasing personal info, a real-time 3D globe marking my location, and an intuitive way to copy my email.

🖥️ **Project Showcase** - A dynamic portfolio display with a 3D computer model that allows seamless switching between different projects.

📅 **Experience Timeline** - Hoverable career milestones that trigger engaging animations to bring my professional journey to life.

💬 **Client Testimonials** - A dedicated section displaying feedback from satisfied clients.

📨 **Easy Contact Form** - Send messages directly via EmailJS without any backend setup.

📱 **Fully Responsive** - Optimized for smooth performance across desktops, tablets, and mobile devices.

---

## 🚀 Quick Start

### **Prerequisites**

Ensure you have the following installed before proceeding:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### **Installation & Setup**

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/threejs-portfolio.git
cd threejs-portfolio
```

#### 2️⃣ Install Dependencies

```bash
npm install
```

#### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add your **EmailJS credentials**:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

🔹 **Get these credentials** from [EmailJS](https://www.emailjs.com/).

#### 4️⃣ Run the Project Locally

```bash
npm run dev
```

✅ Open **[http://localhost:5173](http://localhost:5173)** in your browser to see the portfolio in action!

---

## 🔍 SEO & Search Engine Indexing

Ensure your portfolio is **discoverable by search engines**:

### **1️⃣ Add `robots.txt` (Allow Indexing)**

**File:** `public/robots.txt`

```makefile
User-agent: *
Allow: /
Sitemap: https://yourwebsite.com/sitemap.xml
```

### **2️⃣ Submit to Google Search Console**

- Visit **[Google Search Console](https://search.google.com/search-console/)**
- Add your deployed website URL.
- Verify ownership (using meta tag or DNS).
- Submit `sitemap.xml` for indexing.

### **3️⃣ Google Analytics (Track Visitors)**

- Go to **[Google Analytics](https://analytics.google.com/)** and create a property.
- Get your **Tracking ID** (e.g., `G-XXXXXXXXXX`).
- Add this inside the `<head>` of `index.html`:
  ```html
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
  ```

---

## 💡 Future Improvements

✔️ Implement dark/light mode switch.  
✔️ Add animations for smoother transitions.  
✔️ Integrate a blog section with Markdown support.  
✔️ Optimize 3D models for better performance.

---

## 📩 Contact

📧 **Email:** [sujalthakurofficial.tech@gmail.com](sujalthakurofficial.tech@gmail.com)  
🔗 **Portfolio:** [https://sujalcodes.pages.dev/](https://sujalcodes.pages.dev/)
🐙 **GitHub:** [https://github.com/techbro815](https://github.com/techbro815)  
📷 **LinkedIn:** [https://www.linkedin.com/in/sujal-thakur-317257287/](https://www.linkedin.com/in/sujal-thakur-317257287/)

---

🚀 **Built with passion and creativity.** Thanks for visiting! 🎨✨
