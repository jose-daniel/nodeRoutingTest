export default (req, res, next) => {
  res.output = {"ajajaja": 2};
  next()
};