import School from '../models/school';

export function getOne(req, res, next, id) {
    School.get(id).then(school => {
        res.json(school);
    }).catch(e => next(e));
}

export function list(req, res, next){
    const { limit = 50, skip = 0 } = req.query;
    School.list({ limit, skip }).then(schools => res.json(schools)).catch(e => next(e));
}

export function query(req, res, next) {
  const queryText = req.query.text;
  School.searchOnName(queryText)
    .then(results => {
      res.send(results)
    })
    .catch(err => {
      next(err);
    });
}