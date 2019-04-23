export default (req, res) => {
  console.log(res.output);
  if (res.output) {
    res.json(res.output);
  }
};