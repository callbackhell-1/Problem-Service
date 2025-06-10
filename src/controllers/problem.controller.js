const { StatusCodes } = require('http-status-codes');

function pingProblemController(req, res) {
  return res.json({ message: 'Problem controller is up' });
}

function addProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "It's not implemented yet",
  });
}

function getProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "It's not implemented yet",
  });
}

function getProblems(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "It's not implemented yet",
  });
}

function deleteProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "It's not implemented yet",
  });
}

function updateProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "It's not implemented yet",
  });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};
