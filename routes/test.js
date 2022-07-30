const testRouter = [
  {
    method: 'get',
    route: '/test',
    handler: (req, res) => {
      res.render('test');
    }
  }
]

export default testRouter;