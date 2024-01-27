// @desc   get goals
// @route  GET /api/goals
// @access private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc   set goals
// @route  post /api/goals
// @access private

const setGoals = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field.')
    }

    res.status(200).json({message: 'Set goal.'})
}

// @desc   update goals
// @route  put /api/goals
// @access private

const updateGoals = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc   delete goals
// @route  DELETE /api/goals
// @access private

const deleteGoals = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}


module.exports ={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
} 