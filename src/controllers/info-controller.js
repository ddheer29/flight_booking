const info = (req, res) => {
  return res.json({
    success: true,
    message: "API v1 is running",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
