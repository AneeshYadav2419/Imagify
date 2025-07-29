# 🧠 Imagify AI — Generate Stunning Images with AI

Imagify AI is a full-stack application that allows users to generate high-quality images from custom text prompts using the power of AI. Built with the MERN stack, it features secure authentication, smooth payment integration via Razorpay, and a sleek, modern UI.



---## 🚀 Features

- 🎨 **AI Image Generation** — Type a prompt, get a unique image instantly.
- 🔐 **JWT Authentication** — Secure login/signup system with protected routes.
- 💳 **Razorpay Integration** — Easy payment flow for premium image generation.
- 🧾 **Prompt History** — Keep track of all your creations.
- 🌐 **Responsive Design** — Mobile-friendly interface with a smooth user experience.

- 

---## 🛠️ Tech Stack

| Layer        | Technology                  |
| ------------ | --------------------------- |
| Frontend     | React.js, Tailwind CSS      |
| Backend      | Node.js, Express.js         |
| Database     | MongoDB                     |
| Auth         | JSON Web Tokens (JWT)       |
| Payments     | Razorpay API                |
| AI Engine    | OpenAI API / Replicate API  |
| Deployment   | Vercel (Frontend), Render / Railway / VPS (Backend) |



---

## 🔧 Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/imagify-ai.git
cd imagify-ai



--- Install Dependencies

cd client
npm install
cd ../server
npm install


--- Create a .env file in /server with the following:
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET=your_razorpay_secret
OPENAI_API_KEY=your_openai_api_key

--- Run the development servers
bash
Copy
Edit
# Run server
cd server
npm run dev

# Run client
cd ../client
npm run dev
