const router = require('express').Router();

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data

  //getting date off of sequelize
  try{
    const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']],
    });

    // rendering it 
    const users = userData.map((project) => project.get({plain: true }));

  res.render('homepage', {users});
} catch (err){
  res.status(500).json(err);
}
});



module.exports = router;
