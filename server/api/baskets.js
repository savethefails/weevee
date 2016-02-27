import { Router } from 'express';

export default function() {
  var api = Router({mergeParams: true});

  api.get('/', (req, res) => {
    res.json({
      baskets : '1.0'
    });
  });

  return api;
}
