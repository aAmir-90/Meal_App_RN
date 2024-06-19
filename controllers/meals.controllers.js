const Meals = require("../models/meals.model");

exports.getMeals = async (req, res) => {
  try {
    const meals = await Meals.find();
    console.log("Meals getting successfully");
    res.status(200).json({
      success: true,
      message: "Meals getting Successfully",
      meals,
    });
  } catch (error) {
    console.log("Error in get meals ", error);
    res.status(500).json({
      success: true,
      message: "Error in getting Meal",
    });
  }
};

exports.addMeals = async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const meals = new Meals({ name, description, price });
    await meals.save();
    res.status(200).json({
      success: true,
      message: "meals add successfully",
    });
  } catch (error) {
    console.log("Error ", error);
    res.status(500).json({
      success: true,
      message: "Error in adding Meals",
    });
  }
};
