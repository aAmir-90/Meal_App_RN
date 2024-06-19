const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/user.routes.js');
const mealsRoutes = require('./routes/meals.routes.js');



const app = express();

// Connect Database
connectDB();

// Init Middleware
// app.use(express.json({ extended: false }));
app.use(cors());
app.use(express.json())


app.get('/', (req, res) => res.send('Welcome on Meal-App'));

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/meals', mealsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
