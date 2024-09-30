export const idValidationMiddleware = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ msg: "id validation failed" });
    return;
  }
  next();
};
