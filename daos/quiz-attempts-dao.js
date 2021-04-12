const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model')

const scoreQuiz = (questions) => {
    let numberOfCorrectQuestions = 0
    questions.forEach(question => question.answer === question.correct ?
                                  numberOfCorrectQuestions++ : numberOfCorrectQuestions)
    const score = 100 * numberOfCorrectQuestions / questions.length
    return score
}

const findAttemptsForQuiz = (qzid) => quizAttemptsModel.find({quiz: qzid}).sort({'index': 1})
    .populate('quiz')

const createAttempt = (qid, attempt) =>
    quizAttemptsModel.create({quiz: qid, answers: attempt, score: scoreQuiz(attempt)})

module.exports = {createAttempt, findAttemptsForQuiz}

