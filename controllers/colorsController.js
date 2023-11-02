const express = require("express");
const colors = express.Router();
const { getAllColors, getOneColor, createColor, deleteColor, updateColor } = require("../queries/color");
const {checkName, checkBoolean } = require("../validations/checkColors.js")

// INDEX of GET ALL COLORS this is localhost:4005/colors"/"
colors.get("/", async (req, res) => {
  const allColors = await getAllColors();
  if (allColors[0]) {
    res.status(200).json(allColors);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW/GET Target
colors.get("/:id", async (req, res) => {
  const id = req.params.id;
  const targetColor = await getOneColor(id);
  if (targetColor) {
    res.status(200).json(targetColor);
  } else {
    res.status(404).json({ error: "we no have color sir" });
  }
});

// CREATE
colors.post("/", checkBoolean, checkName, async (req, res) => {
    const color = await createColor(req.body);
    res.json(color);
  });

//DELETE
colors.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const targetColor = await deleteColor(id);
  if (targetColor.id) {
    res.status(200).json(targetColor);
  } else {
    res.status(404).json({ error: "I just couldn't do!" });
  }
});

colors.put("/:id", checkName, checkBoolean,  async (req, res) => {
  const id = req.params.id
  const body = req.body
  const updatedColor = await updateColor(id, body);
  if(updatedColor.id){
    res.status(200).json(updatedColor)
  } else {
    res.status(404).json({error: "me no can find color sir"})
  }
});


module.exports = colors;
