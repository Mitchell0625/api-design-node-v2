import merge from "lodash.merge";
const testData = { message: "hello" };

// These are generic methods used in the generic controllers for all models
export const controllers = {
  createOne(model, body) {
    return Promise.resolve(testData);
  },

  updateOne(docToUpdate, update) {
    return Promise.resolve(testData);
  },

  deleteOne(docToDelete) {
    return Promise.resolve(testData);
  },

  getOne(docToGet) {
    return Promise.resolve(testData);
  },

  getAll(model) {
    return Promise.resolve(testData);
  },

  findByParam(model, id) {
    return Promise.resolve(testData);
  }
};

export const createOne = model => (req, res, next) => {
  controllers
    .createOne(model, req.body)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => res.status(500).send("There is an error"));
};

export const updateOne = model => async (req, res, next) => {
  controllers
    .updateOne(docToUpdate, update)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(500).send("There is an error"));
};

export const deleteOne = model => (req, res, next) => {
  controllers
    .deleteOne(docToDelete)
    .then(() => res.status(200).send("Deleted successfully"))
    .catch(err => res.status(500).send("There is an error"));
};

export const getOne = model => (req, res, next) => {
  controllers
    .getOne(docToGet)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send("There is an error"));
};

export const getAll = model => (req, res, next) => {
  controllers
    .getAll(model)
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).send("There is an error"));
};

export const findByParam = model => (req, res, next, id) => {
  controllers
    .findByParam(model, id)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).send("There is an error"));
};

export const generateControllers = (model, overrides = {}) => {
  const defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
  };

  return { ...defaults, ...overrides };
};
