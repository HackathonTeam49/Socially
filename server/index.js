const express = require("express")
const app = express();
const connectDB = require("./config/db")
const User = require("./schema/index")

const PORT = 5000 || process.env.port


app.get("/", (req,res) => {
    res.json({message: "welcome to my world"})
})


app.post('/create-account', async (req, res) => {
    try {
      const { name, email, password, termsAccepted } = req.body;
  
      if (!termsAccepted) {
        return res.status(400).json({ error: 'You must accept the terms and conditions.' });
      }
  
      const newUser = new User({ name, email, password, termsAccepted });
      await newUser.save();
  
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

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});