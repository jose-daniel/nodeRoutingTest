export default (req, res, next) => {
  res.output.loque = 'lo cualo';
  console.log(res.output);
  next();
};