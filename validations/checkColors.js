const checkName = (req, res, next) => {
  const name = req.body.name;
  if (name) {
    console.log("Name is good!");
    next();
  } else {
    res.status(400).json({ error: "Name is busted!" });
  }
};

const checkBoolean = (req, res, next) => {
  const fav = req.body.is_favorite;
  if (typeof fav === "boolean" || fav === "true" || fav === "false") {
    next();
  } else {
    res.status(400).json({ error: "is fav needs to be a boolean fool!" });
  }
};

module.exports = {checkName, checkBoolean}