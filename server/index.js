const express = require("express")
const app = express();
const connectDB = require("./config/db")
const User = require("./schema/index")
const transporter = require("./mailer")

const PORT = 5000 || process.env.port


app.get("/", (req,res) => {
    res.json({message: "welcome to my world"})
})

const sendVerificationCode = async (email, code) => {
  await transporter.sendMail({
    from: `"Your App" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Verification Code",
    html: `<p>Your verification code is: <b>${code}</b></p>`,
  });
};


app.post('/create-account', async (req, res) => {
    try {
      const { name, email, password, termsAccepted } = req.body;
  
      if (!termsAccepted) {
        return res.status(400).json({ error: 'You must accept the terms and conditions.' });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: "Email already exists" });

      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

      const newUser = new User({ name, email, password, termsAccepted, verificationCode, });
      await newUser.save();
      await sendVerificationCode(email, verificationCode);

      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  
      // Check password
      const isMatch = await user.matchPassword(password);
      if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });
  
      // Generate JWT
      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.json({
        message: 'Login successful',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        }
      });
  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});



app.post("/verify", async (req, res) => {
  const { email, code } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.verificationCode !== code) {
    return res.status(400).json({ message: "Invalid verification code" });
  }
 
  user.isVerified = true;
  user.verificationCode = undefined; // clear the code
  await user.save();

  res.json({ message: "Email verified successfully!" });
});



connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});