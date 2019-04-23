export default (req, res) => {
  const { name } = req.params;
  res.send('find by name -> ' + name);
};