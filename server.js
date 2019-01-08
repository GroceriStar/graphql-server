const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send({
    msg: 'GraphQl',
  });
});
app.listen(port, () => {
  console.log(`GraphQL server is running at ${port}`);
});
