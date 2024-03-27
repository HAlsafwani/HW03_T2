exports.add = (req, res) => {
  const { X, Y } = req.query;
  const result = Number(X) + Number(Y);
  res.json({ X, Y, Result: result });
};
